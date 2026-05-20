/**
 * Tier2CityPage — Reusable layout component for all 18 Tier 2 city pages.
 * Design system: navy #003060, teal #009EC6, pale blue #C0D8F0, surface gray #F0F0F0
 * Typography: Playfair Display (headings), Barlow Condensed (eyebrows/CTAs), Barlow (body)
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export interface ServiceItem {
  label: string;
  href: string;
}

export interface NearbyArea {
  label: string;
  href: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface CredentialBadge {
  label: string;
}

export interface Tier2CityPageProps {
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
  localContextBody: string; // may include a callout note
  calloutNote?: string;
  // License block
  licenseHeading: string;
  credentials: CredentialBadge[];
  // Nearby areas
  nearbyAreas: NearbyArea[];
  countyHubLabel: string;
  countyHubHref: string;
  // FAQ (optional)
  faqs?: FAQItem[];
  // Bottom CTA
  ctaCity: string;
  ctaLicenseLine: string;
  // Schema
  schemaJson: object[];
}

function FAQAccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#C0D8F0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        style={{ minHeight: "52px" }}
      >
        <span style={{ fontFamily: "'Barlow', sans-serif" }} className="font-medium text-[#003060] text-base leading-snug">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#009EC6] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-l-4 border-[#009EC6] bg-[#EAF4FA] px-5 py-4 mb-2">
          <p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[#484848] text-base leading-[1.75]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Tier2CityPage({
  metaTitle,
  metaDescription,
  canonicalUrl,
  breadcrumbs,
  eyebrow,
  h1,
  introParagraph,
  trustItems,
  services,
  localContextHeading,
  localContextBody,
  calloutNote,
  licenseHeading,
  credentials,
  nearbyAreas,
  countyHubLabel,
  countyHubHref,
  faqs,
  ctaCity,
  ctaLicenseLine,
  schemaJson,
}: Tier2CityPageProps) {
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

      {/* Breadcrumb */}
      <div className="bg-[#F0F0F0] py-2 px-4 border-b border-[#C0D8F0]">
        <div className="max-w-5xl mx-auto">
          <nav style={{ fontFamily: "'Barlow', sans-serif" }} className="text-sm text-[#787878] flex flex-wrap gap-1 items-center">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span>›</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#009EC6] transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-[#484848]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero — white background, place-identity format */}
      <section className="bg-white py-14 px-4 border-b border-[#C0D8F0]">
        <div className="max-w-5xl mx-auto">
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs font-bold uppercase tracking-widest text-[#009EC6] mb-3">
            {eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[#003060] text-[clamp(28px,4vw,38px)] leading-tight mb-5 max-w-3xl">
            {h1}
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[#484848] text-[17px] leading-[1.75] mb-8 max-w-3xl">
            {introParagraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+13016795849"
              className="flex items-center justify-center gap-2 bg-[#009EC6] text-[#003060] py-4 px-8 rounded-sm hover:bg-[#00b8e6] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              <Phone className="w-5 h-5" />
              CALL (301) 679-5849
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-[#003060] text-[#003060] py-4 px-8 rounded-sm hover:bg-[#003060] hover:text-white transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              REQUEST SERVICE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#C0D8F0] py-4 px-4 overflow-x-auto">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-x-6 gap-y-2 items-center">
          {trustItems.map((item) => (
            <span key={item} style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[#003060] font-bold text-sm uppercase tracking-wide whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Section 2 — Services List */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="font-semibold text-[#003060] text-[clamp(20px,3vw,28px)] mb-8">
            What plumbing services are available in {h1.replace("Plumber in ", "")}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="flex items-start gap-3 p-3 rounded-sm hover:bg-[#EAF4FA] transition-colors group"
                style={{ minHeight: "44px" }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#009EC6] flex-shrink-0 mt-0.5" />
                <span style={{ fontFamily: "'Barlow', sans-serif" }} className="font-medium text-[#003060] text-base group-hover:text-[#009EC6] transition-colors leading-snug">
                  {svc.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Local Context */}
      <section className="bg-[#F0F0F0] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="font-semibold text-[#003060] text-[clamp(20px,3vw,28px)] mb-6">
            {localContextHeading}
          </h2>
          <div style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[#484848] text-[17px] leading-[1.75] max-w-3xl space-y-4">
            {localContextBody.split("\n").filter(Boolean).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {calloutNote && (
            <div
              className="mt-6 max-w-3xl"
              style={{
                background: "var(--surface-1)",
                borderLeft: "4px solid #009EC6",
                padding: "14px 18px",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                color: "var(--ink-2)",
              }}
            >
              {calloutNote}
            </div>
          )}
        </div>
      </section>

      {/* Section 4 — License Block */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="font-semibold text-[#003060] text-[clamp(20px,3vw,28px)] mb-4">
            {licenseHeading}
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[#484848] text-[17px] mb-6">Yes. We hold the following credentials for this jurisdiction:</p>
          <div className="flex flex-wrap gap-2">
            {credentials.map((cred) => (
              <span
                key={cred.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(6,59,99,0.06)",
                  border: "1px solid rgba(6,59,99,0.18)",
                  borderRadius: "4px",
                  padding: "6px 12px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "var(--brand-navy)",
                  margin: "4px",
                }}
              >
                {cred.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Nearby Areas */}
      <section className="bg-[#C0D8F0] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h3
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "var(--brand-blue)" }}
            className="font-bold text-sm uppercase tracking-widest mb-5"
          >
            NEARBY AREAS WE SERVE
          </h3>
          <div className="flex flex-wrap gap-2 mb-5">
            {nearbyAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                style={{
                  display: "inline-block",
                  border: "1px solid #003060",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "var(--brand-navy)",
                  textDecoration: "none",
                  minHeight: "44px",
                  lineHeight: "28px",
                }}
                className="hover:bg-[#009EC6] hover:text-white hover:border-[#009EC6] transition-colors"
              >
                {area.label} →
              </Link>
            ))}
          </div>
          <Link
            href={countyHubHref}
            style={{ fontFamily: "'Barlow', sans-serif" }}
            className="font-medium text-[#009EC6] underline hover:text-[#003060] transition-colors"
          >
            {countyHubLabel} Service Area →
          </Link>
        </div>
      </section>

      {/* Section 6 — FAQ (optional) */}
      {faqs && faqs.length > 0 && (
        <section className="bg-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="font-semibold text-[#003060] text-[clamp(20px,3vw,28px)] mb-6">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq) => (
              <FAQAccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>
      )}

      {/* Section 7 — Bottom CTA */}
      <section className="bg-[#003060] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs font-bold uppercase tracking-widest text-[#009EC6] mb-3">
            LICENSED PLUMBER · SERVING {ctaCity.toUpperCase()}
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-white text-[clamp(22px,3vw,32px)] mb-8">
            Serving {ctaCity} from our Largo, MD location
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+13016795849"
              className="flex items-center justify-center gap-2 bg-[#009EC6] text-[#003060] py-4 px-8 rounded-sm hover:bg-[#00b8e6] transition-colors w-full sm:w-auto"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              <Phone className="w-5 h-5" />
              (301) 679-5849
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white text-white py-4 px-8 rounded-sm hover:bg-white hover:text-[#003060] transition-colors w-full sm:w-auto"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              REQUEST SERVICE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[#C0D8F0] text-sm">
            {ctaLicenseLine}
          </p>
        </div>
      </section>

      {/* Sticky Mobile Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <a
          href="tel:+13016795849"
          className="flex items-center justify-center gap-2 w-full bg-[#009EC6] text-[#003060] h-14"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}
        >
          <Phone className="w-4 h-4" />
          CALL (301) 679-5849 — 24/7 EMERGENCY
        </a>
      </div>
    </>
  );
}
