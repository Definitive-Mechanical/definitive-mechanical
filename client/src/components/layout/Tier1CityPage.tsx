/**
 * Tier1CityPage — Premium layout component for ALL city pages.
 * Replaces Tier2CityPage and Tier3CityPage with the full Tier 1 design:
 * navy hero, service icon grid, local context cards, emergency section,
 * commercial section, nearby areas, FAQ accordion, CTA banner.
 *
 * Design system: var(--brand-navy), var(--brand-cyan), var(--font-display), var(--font-body)
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Phone, ArrowRight, ChevronDown, CheckCircle2,
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch,
  Flame, ShieldCheck, Wind, Building2, Wrench, Waves, Camera,
  AlertOctagon, Landmark, MapPin
} from "lucide-react";
import { useState } from "react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import CTABanner from "@/components/ui/CTABanner";

/* ─── Types ─────────────────────────────────────────────────────────────── */
export interface ServiceItem { label: string; href: string; }
export interface NearbyArea  { label: string; href: string; }
export interface FAQItem     { q: string; a: string; }
export interface CredentialBadge { label: string; }

export interface Tier1CityPageProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  // Breadcrumb
  breadcrumbs: { label: string; href?: string }[];
  // Hero
  eyebrow: string;
  h1: string;
  introParagraph: string;
  // Trust strip
  trustItems: string[];
  // Services
  services: ServiceItem[];
  // Local context
  localContextHeading: string;
  localContextBody: string;
  calloutNote?: string;
  // License block
  licenseHeading: string;
  credentials: CredentialBadge[];
  // Nearby areas
  nearbyAreas: NearbyArea[];
  countyHubLabel: string;
  countyHubHref: string;
  // FAQ
  faqs?: FAQItem[];
  // Bottom CTA
  ctaCity: string;
  ctaLicenseLine: string;
  // Schema
  schemaJson: object[];
}

/* ─── Icon map ───────────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  emergency: AlertTriangle,
  drain: Droplets,
  "water heater": Thermometer,
  tankless: Zap,
  sewer: GitBranch,
  gas: Flame,
  backflow: ShieldCheck,
  boiler: Wind,
  furnace: Wind,
  "water line": Waves,
  camera: Camera,
  hydro: Zap,
  faucet: Wrench,
  toilet: Wrench,
  commercial: Building2,
  government: Landmark,
  municipal: Landmark,
  leak: AlertOctagon,
  fixture: Wrench,
  default: CheckCircle2,
};

function getIcon(label: string) {
  const lower = label.toLowerCase();
  for (const [key, Icon] of Object.entries(ICON_MAP)) {
    if (lower.includes(key)) return Icon;
  }
  return ICON_MAP.default;
}

/* ─── FAQ item ───────────────────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #C0D8F0" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--brand-navy)", fontSize: "15px", lineHeight: 1.4 }}>{q}</span>
        <ChevronDown size={18} style={{ color: "var(--brand-cyan)", flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 200ms" }} />
      </button>
      {open && (
        <div style={{ borderLeft: "4px solid var(--brand-cyan)", background: "#EAF4FA", padding: "16px 20px", marginBottom: "8px" }}>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function Tier1CityPage({
  metaTitle, metaDescription, canonicalUrl,
  breadcrumbs, eyebrow, h1, introParagraph,
  trustItems, services,
  localContextHeading, localContextBody, calloutNote,
  licenseHeading, credentials,
  nearbyAreas, countyHubLabel, countyHubHref,
  faqs, ctaCity, ctaLicenseLine, schemaJson,
}: Tier1CityPageProps) {

  const cityName = h1.replace(/^Plumber in\s*/i, "").trim();

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        {schemaJson.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      {/* ── S1: Hero ─────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "58vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div>
              <p style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
                {eyebrow}
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "clamp(32px,4.5vw,54px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1.0 }} className="mb-4">
                {h1}
              </h1>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "560px", lineHeight: 1.7 }} className="mb-6">
                {introParagraph}
              </p>
              {/* Trust badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                {trustItems.map((item) => (
                  <span key={item} style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "12px", color: "var(--brand-cyan)", background: "rgba(0,158,198,0.12)", border: "1px solid rgba(0,158,198,0.3)", borderRadius: "4px", padding: "4px 10px", letterSpacing: "0.04em" }}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+13016795849"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--brand-red)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 28px", borderRadius: "6px", textDecoration: "none" }}
                >
                  <Phone size={16} /> CALL (301) 679-5849
                </a>
                <Link
                  href="/contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 28px", borderRadius: "6px", border: "2px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  REQUEST SERVICE <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&h=500&fit=crop&q=80"
                alt={`Licensed plumber ${cityName} — Definitive Mechanical`}
                loading="eager"
                className="rounded-lg w-full"
                style={{ objectFit: "cover", height: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── S2: Services grid ────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#FAFBFC" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
            LICENSED PLUMBING SERVICES
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,34px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.1, marginBottom: "32px" }}>
            What plumbing services are available in {cityName}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => {
              const Icon = getIcon(svc.label);
              return (
                <Link key={i} href={svc.href}>
                  <div
                    className="bg-white rounded-md p-4 flex items-start gap-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                    style={{ boxShadow: "0 1px 4px rgba(6,59,99,0.08)", border: "1px solid #E8EFF5", borderTop: "3px solid var(--brand-cyan)" }}
                  >
                    <Icon size={20} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--brand-navy)", fontSize: "14px", margin: 0 }}>{svc.label}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── S3: Emergency section ────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
            24/7 EMERGENCY SERVICE
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,30px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.1, marginBottom: "20px" }}>
            Do you provide 24/7 emergency plumbing in {cityName}?
          </h2>
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>
              Yes. Emergency plumbing in {cityName} is available 24 hours a day, 7 days a week, 365 days a year. A live dispatcher answers every call — no answering machine, no on-call delay. A licensed Master Plumber is dispatched directly to your location.
            </p>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "16px", lineHeight: 1.7 }}>
              Definitive Mechanical charges no overtime surcharge for emergency calls. The same upfront pricing applies regardless of time of day or day of week. Call (301) 679-5849 now.
            </p>
          </div>
          <a
            href="tel:+13016795849"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--brand-red)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 28px", borderRadius: "6px", textDecoration: "none" }}
          >
            <Phone size={16} /> CALL (301) 679-5849
          </a>
        </div>
      </section>

      {/* ── S4: Local context ────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#FAFBFC" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
            LOCAL PLUMBING NEEDS
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,30px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.1, marginBottom: "20px" }}>
            {localContextHeading}
          </h2>
          <div className="max-w-3xl">
            {localContextBody.split("\n").filter(Boolean).map((para, i) => (
              <p key={i} style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "16px", lineHeight: 1.75, marginBottom: "16px" }}>{para}</p>
            ))}
            {calloutNote && (
              <div style={{ background: "rgba(0,158,198,0.08)", border: "1px solid rgba(0,158,198,0.25)", borderLeft: "4px solid var(--brand-cyan)", borderRadius: "6px", padding: "14px 18px", marginTop: "8px" }}>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--brand-navy)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{calloutNote}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── S5: License / credentials ────────────────────────────────────── */}
      <section className="py-16" style={{ background: "var(--brand-navy)" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
            LICENSES &amp; CERTIFICATIONS
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,30px)", textTransform: "uppercase", color: "white", lineHeight: 1.1, marginBottom: "24px" }}>
            {licenseHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {credentials.map((cred, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderLeft: "3px solid var(--brand-cyan)", borderRadius: "6px", padding: "12px 16px" }}>
                <p style={{ fontFamily: "var(--font-body)", color: "white", fontSize: "13px", fontWeight: 500, margin: 0 }}>{cred.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: Commercial ───────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "#FAFBFC" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
            COMMERCIAL &amp; GOVERNMENT
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,30px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.1, marginBottom: "16px" }}>
            Commercial &amp; Government Plumbing in {cityName}
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "16px", lineHeight: 1.7, maxWidth: "700px", marginBottom: "20px" }}>
            Definitive Mechanical serves commercial facilities, property managers, HOAs, and government agencies in {cityName} and throughout the region. We are MDOT MBE Certified (Cert No. 20-134), Virginia SWaM Certified (Cert No. 815255), and hold CAGE Code 8HCF6 and NAICS Code 238220 for government procurement. All plumbing work is performed under Maryland State License #96958, WSSC #73696, DC License #PGM1002236, and Virginia License #2710064209.
          </p>
          <Link href="/commercial-plumbing" style={{ fontFamily: "var(--font-body)", color: "var(--brand-cyan)", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Learn more about commercial plumbing →
          </Link>
        </div>
      </section>

      {/* ── S7: Nearby areas ─────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
            NEARBY SERVICE AREAS
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(18px,2vw,26px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.1, marginBottom: "16px" }}>
            Areas near {cityName} we also serve
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
            <Link href={countyHubHref} style={{ fontFamily: "var(--font-body)", color: "var(--brand-cyan)", fontSize: "14px", fontWeight: 600, textDecoration: "none", background: "rgba(0,158,198,0.08)", border: "1px solid rgba(0,158,198,0.25)", borderRadius: "4px", padding: "5px 12px" }}>
              {countyHubLabel} Hub →
            </Link>
            {nearbyAreas.map((area) => (
              <Link key={area.href} href={area.href} style={{ fontFamily: "var(--font-body)", color: "var(--brand-navy)", fontSize: "14px", textDecoration: "none", background: "#F0F5FA", border: "1px solid #D0E0EE", borderRadius: "4px", padding: "5px 12px" }}>
                {area.label}
              </Link>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily: "var(--font-body)", color: "var(--brand-cyan)", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
            View Full Service Area →
          </Link>
        </div>
      </section>

      {/* ── S8: FAQ ──────────────────────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="py-20" style={{ background: "var(--surface-1)" }}>
          <div className="container">
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,30px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.1, marginBottom: "24px" }}>
              Plumbing FAQ — {cityName}
            </h2>
            <div className="max-w-3xl">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── S9: CTA Banner ───────────────────────────────────────────────── */}
      <CTABanner
        heading={`Need a licensed plumber in ${cityName}?`}
        subtext={`Serving ${cityName} from our Largo, MD location. ${ctaLicenseLine} · 24/7 Emergency · Upfront Pricing.`}
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
