import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

const SITE_ORIGIN = "https://definitivemechanical.com";

function normalize(pathname: string): string {
  // Netlify serves prerendered directory URLs with a trailing slash
  // (`/foo/index.html` → `/foo/`), so the canonical form on this site
  // includes the trailing slash. Keeping the canonical in sync with the
  // actual served URL prevents SEO auditors from flagging the canonical
  // as "canonicalised" to a different URL.
  if (!pathname || pathname === "/") return "/";
  const noTrailing = pathname.replace(/\/+$/, "");
  return noTrailing ? `${noTrailing}/` : "/";
}

export function CanonicalTag() {
  const [path] = useLocation();
  const normalized = normalize(path);
  const href = `${SITE_ORIGIN}${normalized}`;

  return (
    <Helmet>
      <link rel="canonical" href={href} />
      <meta property="og:url" content={href} />
    </Helmet>
  );
}
