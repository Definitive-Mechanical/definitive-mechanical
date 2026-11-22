import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

const SITE_ORIGIN = "https://definitivemechanical.com";

function normalize(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const noTrailing = pathname.replace(/\/+$/, "");
  return noTrailing || "/";
}

export function CanonicalTag() {
  const [path] = useLocation();
  const normalized = normalize(path);
  const href = normalized === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${normalized}`;

  return (
    <Helmet>
      <link rel="canonical" href={href} />
      <meta property="og:url" content={href} />
    </Helmet>
  );
}
