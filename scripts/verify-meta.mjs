import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractRoutes } from "./extract-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");

function pick(re, s) {
  return [...s.matchAll(re)].map((m) => m[1]);
}

const sample = process.argv[2] ? [process.argv[2]] : extractRoutes();
const titles = new Map();
const descs = new Map();
const canons = new Map();
const issues = [];

for (const route of sample) {
  const file =
    route === "/"
      ? path.join(DIST, "index.html")
      : path.join(DIST, route.replace(/^\//, ""), "index.html");
  if (!fs.existsSync(file)) {
    issues.push(`MISSING FILE ${route}`);
    continue;
  }
  const h = fs.readFileSync(file, "utf8");
  const tArr = pick(/<title[^>]*>([^<]+)<\/title>/g, h);
  const dArr = pick(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/g,
    h,
  );
  const cArr = pick(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/g,
    h,
  );

  if (tArr.length !== 1) issues.push(`${route}: ${tArr.length} titles`);
  if (dArr.length !== 1)
    issues.push(`${route}: ${dArr.length} descriptions`);
  if (cArr.length !== 1) issues.push(`${route}: ${cArr.length} canonicals`);

  const title = tArr[0] || "";
  const desc = dArr[0] || "";
  const canon = cArr[0] || "";

  (titles.get(title) ?? titles.set(title, []).get(title)).push(route);
  (descs.get(desc) ?? descs.set(desc, []).get(desc)).push(route);
  (canons.get(canon) ?? canons.set(canon, []).get(canon)).push(route);
}

if (process.argv[2]) {
  for (const [t, r] of titles) console.log("TITLE:", t);
  for (const [d, r] of descs) console.log("DESC :", d);
  for (const [c, r] of canons) console.log("CANON:", c);
  process.exit(0);
}

const dupTitles = [...titles].filter(([, r]) => r.length > 1);
const dupDescs = [...descs].filter(([, r]) => r.length > 1);
const dupCanons = [...canons].filter(([, r]) => r.length > 1);

console.log(`Checked ${sample.length} routes`);
console.log(`  unique titles: ${titles.size}`);
console.log(`  unique descriptions: ${descs.size}`);
console.log(`  unique canonicals: ${canons.size}`);
console.log(`  issues (count ≠ 1): ${issues.length}`);
if (issues.length) issues.slice(0, 10).forEach((i) => console.log("   -", i));

if (dupTitles.length) {
  console.log(`\nDUPLICATE titles (${dupTitles.length} groups):`);
  dupTitles
    .slice(0, 5)
    .forEach(([t, r]) =>
      console.log(`  "${t}" shared by ${r.length} routes: ${r.slice(0, 4).join(", ")}${r.length > 4 ? ", ..." : ""}`),
    );
}
if (dupDescs.length) {
  console.log(`\nDUPLICATE descriptions (${dupDescs.length} groups):`);
  dupDescs
    .slice(0, 5)
    .forEach(([d, r]) =>
      console.log(`  "${d.slice(0, 80)}..." shared by ${r.length} routes`),
    );
}
if (dupCanons.length) {
  console.log(`\nDUPLICATE canonicals (${dupCanons.length} groups):`);
  dupCanons
    .forEach(([c, r]) => console.log(`  "${c}" shared by ${r.length} routes`));
}
