/**
 * Post-build prerender step.
 *
 * For every route the SPA ships, this spins up a tiny static server over
 * `dist/public/`, loads the route in headless Chrome, waits for Helmet to
 * write the per-page <title>, <meta>, and <link rel="canonical"> into the
 * live DOM, then saves the rendered HTML to `dist/public/<route>/index.html`.
 *
 * Netlify serves those files directly. Crawlers (Googlebot, Bingbot, LLMs,
 * SEO auditors) see the correct canonical and meta tags in the raw HTML
 * with no JavaScript required.
 */
import fs from "node:fs/promises";
import fsSync from "node:fs";
import http from "node:http";
import path from "node:path";
import url from "node:url";
import puppeteer from "puppeteer";
import sirv from "sirv";

import { extractRoutes } from "./extract-routes.mjs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");
const CONCURRENCY = 4;
const NAV_TIMEOUT_MS = 30_000;
const CANONICAL_TIMEOUT_MS = 15_000;

// Third-party scripts that keep the network busy forever (analytics, ads,
// tag manager). Blocking them during prerender lets `networkidle0` settle
// and keeps the baked HTML clean — the production site still loads them
// normally for real visitors.
const BLOCKED_HOSTS = [
  "googletagmanager.com",
  "google-analytics.com",
  "googleadservices.com",
  "doubleclick.net",
  "googlesyndication.com",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
];

function startServer() {
  // Snapshot the pristine index.html NOW, before any route prerender rewrites
  // it. Without this, prerendering `/` overwrites dist/public/index.html with
  // a version whose canonical points at the homepage, and every later route
  // sees that stale canonical as its SPA fallback.
  const pristineIndexHtml = fsSync.readFileSync(
    path.join(DIST, "index.html"),
    "utf8",
  );

  // Serve real asset files (JS, CSS, images) but no SPA fallback — we handle
  // unknown routes ourselves with the in-memory pristine index.html.
  const handler = sirv(DIST, {
    single: false,
    dev: false,
    etag: false,
    gzip: false,
    brotli: false,
  });

  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      handler(req, res, () => {
        // Asset not found → SPA fallback with the pristine shell.
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(pristineIndexHtml);
      });
    });
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ server, origin: `http://127.0.0.1:${port}` });
    });
  });
}

function stopServer(server) {
  return new Promise((resolve) => server.close(() => resolve()));
}

function routeToFile(route) {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
}

const SITE_ORIGIN = "https://definitivemechanical.com";
const BRAND = "Definitive Mechanical";
const PHONE = "(301) 679-5849";

// The static fallbacks that ship in index.html. If a prerendered page ends
// up with one of these as its final title / description, it means the page
// component never set its own, and we'd be shipping duplicate homepage copy
// on hundreds of URLs — bad for SEO. In that case we generate a unique
// per-route title and description from the URL.
const FALLBACK_TITLE =
  "Licensed Plumbing in MD, DC & Northern VA | Definitive Mechanical";
const FALLBACK_DESCRIPTION =
  "Definitive Mechanical provides licensed plumbing, gas, emergency, commercial & residential service across MD, DC & Northern VA. 24/7. MDOT MBE & VA SWaM Certified. Call (301) 679-5849.";

function canonicalFor(route) {
  // Trailing-slash form matches how Netlify serves these directory URLs.
  // `/gas-line-repair` → 301 → `/gas-line-repair/`, so canonical must
  // point at the slash form or SEO auditors flag it as canonicalised.
  if (route === "/") return `${SITE_ORIGIN}/`;
  const trimmed = route.replace(/\/+$/, "");
  return `${SITE_ORIGIN}${trimmed}/`;
}

function humanize(slug) {
  return slug
    .split("-")
    .map((part) => {
      // Preserve common state abbreviations as uppercase.
      if (/^(md|dc|va)$/i.test(part)) return part.toUpperCase();
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

/**
 * Generate a unique title + description for a route whose page didn't
 * supply its own via Helmet. Keeps hundreds of URLs from sharing the
 * generic homepage meta.
 */
function generatedMetaFor(route) {
  if (route === "/") {
    return { title: FALLBACK_TITLE, description: FALLBACK_DESCRIPTION };
  }

  const segments = route.split("/").filter(Boolean);
  const last = segments[segments.length - 1];

  // City pages: /service-areas/<region>/[county]/<city-slug>
  if (segments[0] === "service-areas" && segments.length >= 2) {
    const citySlug = last;
    // Try to split "bethesda-md" into city + state.
    const stateMatch = citySlug.match(/-(md|dc|va)$/i);
    if (stateMatch) {
      const city = humanize(citySlug.replace(/-(md|dc|va)$/i, ""));
      const state = stateMatch[1].toUpperCase();
      return {
        title: `Plumber in ${city}, ${state} | ${BRAND}`,
        description: `Licensed plumbing, gas, and emergency plumbing service in ${city}, ${state}. Residential and commercial. 24/7. Call ${BRAND} at ${PHONE}.`,
      };
    }
    // County / region hub (e.g. /service-areas/maryland/montgomery-county)
    const name = humanize(last);
    return {
      title: `Plumbing Services in ${name} | ${BRAND}`,
      description: `Licensed plumbing, gas, and emergency plumbing service across ${name}. 24/7. Residential and commercial. Call ${BRAND} at ${PHONE}.`,
    };
  }

  // Emergency city pages: /emergency-plumber-<city-slug>
  if (/^emergency-plumber-/.test(last)) {
    const citySlug = last.replace(/^emergency-plumber-/, "");
    const stateMatch = citySlug.match(/-(md|dc|va)$/i);
    const city = humanize(citySlug.replace(/-(md|dc|va)$/i, ""));
    const state = stateMatch ? `, ${stateMatch[1].toUpperCase()}` : "";
    return {
      title: `24/7 Emergency Plumber in ${city}${state} | ${BRAND}`,
      description: `24/7 emergency plumbing service in ${city}${state}. Burst pipes, no hot water, sewer backups, gas leaks. Call ${BRAND} at ${PHONE}.`,
    };
  }

  // Blog posts: last slug under /blog/...
  if (segments[0] === "blog" && segments.length > 1) {
    const title = humanize(last);
    return {
      title: `${title} | ${BRAND} Blog`,
      description: `${title} — guidance from the licensed plumbers at ${BRAND}, serving MD, DC & Northern VA. Call ${PHONE}.`,
    };
  }

  // Generic service / informational pages (/hydro-jetting, /about, …).
  const title = humanize(last);
  return {
    title: `${title} | ${BRAND}`,
    description: `${title} from ${BRAND} — licensed plumbing, gas, and emergency service across MD, DC & Northern VA. Call ${PHONE}.`,
  };
}

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

/**
 * Normalize the <head> of a prerendered page so every file ships exactly:
 *   - one <title>
 *   - one <meta name="description">
 *   - one <link rel="canonical">
 *   - one <meta property="og:url"> (+ og:title, og:description matching)
 *
 * Collects any page-specific values from the live DOM (last Helmet wins),
 * falls back to a per-route generated value when the page never set its
 * own, then rewrites the head. Prevents hundreds of URLs from sharing the
 * homepage's title / description.
 */
function normalizeHead(html, route, liveMeta = { title: "", description: "" }) {
  const canonicalHref = canonicalFor(route);
  const generated = generatedMetaFor(route);

  // Prefer the live DOM value (what Helmet actually set). Fall back to
  // regex-extracting the last <title> in the HTML string, then to the
  // route-based generator.
  let titleText = (liveMeta.title || "").trim();
  if (!titleText || titleText === FALLBACK_TITLE) {
    const titleMatches = [
      ...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi),
    ];
    const htmlTitle = titleMatches.length
      ? decodeHtml(titleMatches[titleMatches.length - 1][1].trim())
      : "";
    titleText =
      htmlTitle && htmlTitle !== FALLBACK_TITLE ? htmlTitle : generated.title;
  }

  // Same for description — live DOM first, HTML second, generated last.
  let descText = (liveMeta.description || "").trim();
  if (!descText || descText === FALLBACK_DESCRIPTION) {
    const descMatches = [
      ...html.matchAll(
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/gi,
      ),
    ];
    const htmlDesc = descMatches.length
      ? decodeHtml(descMatches[descMatches.length - 1][1].trim())
      : "";
    descText =
      htmlDesc && htmlDesc !== FALLBACK_DESCRIPTION
        ? htmlDesc
        : generated.description;
  }

  let out = html;

  // Strip every existing title, description, canonical, og:url, og:title,
  // and og:description. We're about to re-inject clean single copies.
  out = out.replace(/\s*<title[^>]*>[\s\S]*?<\/title>/gi, "");
  out = out.replace(
    /\s*<meta[^>]+name=["']description["'][^>]*>/gi,
    "",
  );
  out = out.replace(/\s*<link[^>]+rel=["']canonical["'][^>]*>/gi, "");
  out = out.replace(
    /\s*<meta[^>]+property=["']og:(url|title|description)["'][^>]*>/gi,
    "",
  );

  const inject =
    `<title>${escapeHtml(titleText)}</title>` +
    `<meta name="description" content="${escapeAttr(descText)}">` +
    `<link rel="canonical" href="${canonicalHref}">` +
    `<meta property="og:url" content="${canonicalHref}">` +
    `<meta property="og:title" content="${escapeAttr(titleText)}">` +
    `<meta property="og:description" content="${escapeAttr(descText)}">`;

  out = out.replace(/<\/head>/i, `${inject}</head>`);

  return out;
}

async function renderRoute(browser, origin, route) {
  const page = await browser.newPage();
  try {
    page.setDefaultNavigationTimeout(NAV_TIMEOUT_MS);

    // Block analytics / ad / font hosts so the network can quiesce.
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const url = req.url();
      if (BLOCKED_HOSTS.some((host) => url.includes(host))) {
        req.abort();
      } else {
        req.continue();
      }
    });

    // Fail loudly on client JS errors so a broken page doesn't ship as HTML.
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    const target = `${origin}${route === "/" ? "/" : route}`;
    await page.goto(target, { waitUntil: "domcontentloaded" });

    // Wait for the shared CanonicalTag to attach.
    await page.waitForSelector('link[rel="canonical"]', {
      timeout: CANONICAL_TIMEOUT_MS,
    });

    // Wait for the lazy page component to render and for Helmet to flush
    // its title replacement. Pages that don't override the title will time
    // out here silently — normalizeHead then uses the route-based fallback.
    const FALLBACK_TITLE_STR =
      "Licensed Plumbing in MD, DC & Northern VA | Definitive Mechanical";
    try {
      await page.waitForFunction(
        (fallback) =>
          document.title && document.title.trim() !== fallback.trim(),
        { timeout: 4000 },
        FALLBACK_TITLE_STR,
      );
    } catch {
      /* page keeps the fallback title; normalizeHead will generate one */
    }

    // Final settling window so late-flushing meta tags (description,
    // schema.org JSON-LD) land before we snapshot.
    await new Promise((r) => setTimeout(r, 500));

    // Read the final title and description from the live DOM rather than
    // from the serialized HTML string — Helmet replaces <title> in place,
    // and the DOM is the single source of truth.
    const liveMeta = await page.evaluate(() => {
      const desc = document.querySelector('meta[name="description"]');
      return {
        title: document.title || "",
        description: desc ? desc.getAttribute("content") || "" : "",
      };
    });

    const rawHtml = await page.content();

    if (errors.length > 0) {
      throw new Error(`Client errors on ${route}:\n  ${errors.join("\n  ")}`);
    }

    const html = normalizeHead(rawHtml, route, liveMeta);

    const outFile = routeToFile(route);
    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, html, "utf8");
    return { route, ok: true };
  } catch (err) {
    return { route, ok: false, error: err.message };
  } finally {
    await page.close();
  }
}

async function main() {
  const routes = extractRoutes();
  console.log(`[prerender] ${routes.length} routes`);

  const { server, origin } = await startServer();
  console.log(`[prerender] static server on ${origin}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = [];
  let cursor = 0;
  async function worker(id) {
    while (true) {
      const i = cursor++;
      if (i >= routes.length) return;
      const route = routes[i];
      const result = await renderRoute(browser, origin, route);
      results.push(result);
      const status = result.ok ? "OK" : "FAIL";
      console.log(`[prerender] [${i + 1}/${routes.length}] ${status} ${route}`);
      if (!result.ok) console.log(`           ${result.error}`);
    }
  }
  await Promise.all(
    Array.from({ length: CONCURRENCY }, (_, id) => worker(id)),
  );

  await browser.close();
  await stopServer(server);

  const failures = results.filter((r) => !r.ok);
  console.log(
    `[prerender] done — ${results.length - failures.length} ok, ${failures.length} failed`,
  );
  if (failures.length > 0) {
    for (const f of failures) {
      console.error(`[prerender] FAIL ${f.route}: ${f.error}`);
    }
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("[prerender] fatal", err);
  process.exit(1);
});
