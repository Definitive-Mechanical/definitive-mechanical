import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const APP_TSX = path.resolve(__dirname, "..", "client", "src", "App.tsx");

/**
 * Parse App.tsx and return a sorted list of unique routes in the
 * no-trailing-slash canonical form. `/` is kept as-is. Dynamic
 * routes (`:param`, `*`) and the SPA fallback are ignored.
 */
export function extractRoutes() {
  const source = fs.readFileSync(APP_TSX, "utf8");
  const pathRegex = /path="(\/[^"]*)"/g;
  const seen = new Set();
  let match;
  while ((match = pathRegex.exec(source)) !== null) {
    let route = match[1];
    if (route.includes(":") || route.includes("*")) continue;
    if (route !== "/" && route.endsWith("/")) route = route.slice(0, -1);
    seen.add(route);
  }
  return Array.from(seen).sort();
}

if (process.argv[1] && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  const routes = extractRoutes();
  console.log(`${routes.length} unique routes`);
  for (const r of routes) console.log(r);
}
