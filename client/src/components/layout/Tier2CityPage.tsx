/**
 * Tier2CityPage — Reusable layout component for all 18 Tier 2 city pages.
 * Design system: navy var(--brand-navy), teal var(--brand-cyan), pale blue #C0D8F0, surface gray #F0F0F0
 * Typography: Barlow Condensed (display), Public Sans (body)
 */

import { getServiceImage } from "@/lib/serviceImages";
import { ALL_SERVICE_CATEGORIES } from "@/lib/allServices";
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
        <span style={{ fontFamily: "'Barlow', sans-serif" }} className="font-medium text-[var(--brand-navy)] text-base leading-snug">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-l-4 border-[var(--brand-cyan)] bg-[#EAF4FA] px-5 py-4 mb-2">
          <p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[var(--ink-2)] text-base leading-[1.75]">{a}</p>
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
                  <Link href={crumb.href} className="hover:text-[var(--brand-cyan)] transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-[var(--ink-2)]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero — white background, place-identity format */}
      <section className="bg-white py-14 px-4 border-b border-[#C0D8F0]">
        <div className="max-w-5xl mx-auto">
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs font-bold uppercase tracking-widest text-[var(--brand-cyan)] mb-3">
            {eyebrow}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="font-bold text-[var(--brand-navy)] text-[clamp(28px,4vw,38px)] leading-tight mb-5 max-w-3xl">
            {h1}
          </h1>
          <p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[var(--ink-2)] text-[17px] leading-[1.75] mb-8 max-w-3xl">
            {introParagraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+13016795849"
              className="flex items-center justify-center gap-2 bg-[var(--brand-cyan)] text-[var(--brand-navy)] py-4 px-8 rounded-sm hover:bg-[#00b8e6] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              <Phone className="w-5 h-5" />
              CALL (301) 679-5849
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-[var(--brand-navy)] text-[var(--brand-navy)] py-4 px-8 rounded-sm hover:bg-[var(--brand-navy)] hover:text-white transition-colors"
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
            <span key={item} style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[var(--brand-navy)] font-bold text-sm uppercase tracking-wide whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Section 2 — Services List */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>Services</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.05, margin: 0 }}>
                Plumbing Services in {h1.replace("Plumber in ", "")}
              </h2>
              <a href="tel:+13016795849" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--brand-navy)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "10px 18px", borderRadius: "6px", textDecoration: "none", flexShrink: 0 }}>
                Call Now
              </a>
            </div>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.7, marginTop: "10px", maxWidth: "600px" }}>
              Full-service licensed plumbing for residential, commercial, and government clients. Every job performed by a licensed Master Plumber.
            </p>
          </div>
          {ALL_SERVICE_CATEGORIES.map((cat) => (

            <div key={cat.key} style={{ marginBottom: "36px" }}>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>

                <div style={{ height: "3px", width: "28px", background: cat.color, flexShrink: 0, borderRadius: "2px" }} />

                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--brand-navy)" }}>{cat.title}</span>

                <div style={{ height: "1px", flex: 1, background: "#E6E8EE" }} />

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {cat.items.map((svc, i) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 12px rgba(29,108,163,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(29,108,163,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "130px", overflow: "hidden" }}>
                    <img
                      src={getServiceImage(svc.href.replace(/^\//, "").toLowerCase())}
                      alt={svc.label}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                      loading="lazy"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(3,24,56,0.2) 0%, rgba(3,24,56,0.5) 100%)" }} />
                  </div>
                  <div style={{ padding: "12px 14px 14px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "14px", color: "var(--brand-navy)", marginBottom: "4px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1D6CA3", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}  
              </div>
            </div>
          ))}  
        </div>
      </section>

      {/* Section 3 — Local Context */}
      <section className="bg-[#F0F0F0] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="font-semibold text-[var(--brand-navy)] text-[clamp(20px,3vw,28px)] mb-6">
            {localContextHeading}
          </h2>
          <div style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[var(--ink-2)] text-[17px] leading-[1.75] max-w-3xl space-y-4">
            {localContextBody.split("\n").filter(Boolean).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {calloutNote && (
            <div
              className="mt-6 max-w-3xl"
              style={{
                background: "var(--surface-1)",
                borderLeft: "4px solid var(--brand-cyan)",
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
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="font-semibold text-[var(--brand-navy)] text-[clamp(20px,3vw,28px)] mb-4">
            {licenseHeading}
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[var(--ink-2)] text-[17px] mb-6">Yes. We hold the following credentials for this jurisdiction:</p>
          <div className="flex flex-wrap gap-2">
            {credentials.map((cred) => (
              <span
                key={cred.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(6,59,99,0.06)",
                  border: "1px solid rgba(0,0,0,0.18)",
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
                  border: "1px solid var(--brand-navy)",
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
                className="hover:bg-[var(--brand-cyan)] hover:text-white hover:border-[var(--brand-cyan)] transition-colors"
              >
                {area.label} →
              </Link>
            ))}
          </div>
          <Link
            href={countyHubHref}
            style={{ fontFamily: "'Barlow', sans-serif" }}
            className="font-medium text-[var(--brand-cyan)] underline hover:text-[var(--brand-navy)] transition-colors"
          >
            {countyHubLabel} Service Area →
          </Link>
        </div>
      </section>

      {/* Section 6 — FAQ (optional) */}
      {faqs && faqs.length > 0 && (
        <section className="bg-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="font-semibold text-[var(--brand-navy)] text-[clamp(20px,3vw,28px)] mb-6">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq) => (
              <FAQAccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>
      )}

      {/* Section 7 — Bottom CTA */}
      <section className="bg-[var(--brand-navy)] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs font-bold uppercase tracking-widest text-[var(--brand-cyan)] mb-3">
            LICENSED PLUMBER  SERVING {ctaCity.toUpperCase()}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="font-bold text-white text-[clamp(22px,3vw,32px)] mb-8">
            Serving {ctaCity} from our Largo, MD location
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+13016795849"
              className="flex items-center justify-center gap-2 bg-[var(--brand-cyan)] text-[var(--brand-navy)] py-4 px-8 rounded-sm hover:bg-[#00b8e6] transition-colors w-full sm:w-auto"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              <Phone className="w-5 h-5" />
              (301) 679-5849
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white text-white py-4 px-8 rounded-sm hover:bg-white hover:text-[var(--brand-navy)] transition-colors w-full sm:w-auto"
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
          className="flex items-center justify-center gap-2 w-full bg-[var(--brand-cyan)] text-[var(--brand-navy)] h-14"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}
        >
          <Phone className="w-4 h-4" />
          CALL (301) 679-5849 — 24/7 EMERGENCY
        </a>
      </div>
    </>
  );
}
