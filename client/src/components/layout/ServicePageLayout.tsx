/**
 * ServicePageLayout — Shared layout for all 18 service pages.
 * Design mirrors Tier1CityPage: alternating dark/light sections, tight spacing,
 * strong card borders, asymmetric section headings, dark FAQ, CTA banner.
 *
 * Sections rendered:
 *  S1  Hero          — full-bleed photo + navy overlay (already on page, passed as prop)
 *  S2  Stats bar     — cyan band
 *  S3  Sub-services  — white bg, left-label + right card grid
 *  S4  Why Choose    — dark navy, checklist left + credential card right
 *  S5  Process       — light #F0F5FA, numbered steps
 *  S6  FAQ           — dark navy accordion
 *  S7  CTA Banner
 */

import { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Phone, ChevronDown, CheckCircle2, ArrowRight,
  Clock, Award, ShieldCheck, MapPin,
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import CTABanner from "@/components/ui/CTABanner";

/* ─── Types ──────────────────────────────────────────────────────────────── */
export interface SubService {
  title: string;
  desc: string;
}

export interface WhyItem {
  title: string;
  desc: string;
}

export interface ProcessItem {
  step: number;
  title: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  /* SEO */
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  schemaJson?: object[];

  /* Hero */
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  h1: string;
  heroParagraph: string;
  heroImage: string;
  heroImageAlt: string;

  /* Sub-services section */
  servicesEyebrow?: string;
  servicesHeading: string;
  servicesSubtext?: string;
  subServices: SubService[];

  /* Why choose section */
  whyHeading: string;
  whyItems: WhyItem[];

  /* Process section (optional) */
  processHeading?: string;
  processItems?: ProcessItem[];

  /* FAQ */
  faqHeading?: string;
  faqs: FAQItem[];

  /* CTA */
  ctaHeading: string;
  ctaSubtext: string;
}

/* ─── FAQ accordion item ─────────────────────────────────────────────────── */
function FAQRow({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "white", fontSize: "15px", lineHeight: 1.4 }}>
          {question}
        </span>
        <ChevronDown
          size={18}
          style={{ color: "var(--brand-cyan)", flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 200ms" }}
        />
      </button>
      {open && (
        <div style={{ borderLeft: "3px solid var(--brand-cyan)", background: "rgba(0,158,198,0.08)", padding: "16px 20px", marginBottom: "8px", borderRadius: "0 6px 6px 0" }}>
          <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Main layout ────────────────────────────────────────────────────────── */
export default function ServicePageLayout({
  metaTitle, metaDescription, canonicalUrl, schemaJson,
  breadcrumbs, eyebrow, h1, heroParagraph, heroImage, heroImageAlt,
  servicesEyebrow, servicesHeading, servicesSubtext, subServices,
  whyHeading, whyItems,
  processHeading, processItems,
  faqHeading, faqs,
  ctaHeading, ctaSubtext,
}: ServicePageProps) {

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {schemaJson?.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>

      {/* ── S1: HERO — full-bleed photo + navy overlay ───────────────────── */}
      <section style={{ minHeight: "65vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src={heroImage}
            alt={heroImageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
            loading="eager"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "80px", paddingBottom: "80px" }}>
          <BreadcrumbList items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8 items-center">
            {/* Left — headline */}
            <div className="lg:col-span-3">
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.25em", color: "var(--brand-cyan)", marginBottom: "12px" }}>
                {eyebrow}
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "white", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.0, textTransform: "uppercase", letterSpacing: "0.01em", marginBottom: "20px" }}>
                {h1}
              </h1>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)", fontSize: "17px", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
                {heroParagraph}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a
                  href="tel:+13016795849"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1D6CA3", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", boxShadow: "0 4px 14px rgba(29,108,163,0.35)" }}
                >
                  <Phone size={16} /> CALL (301) 679-5849
                </a>
                <Link
                  href="/contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 28px", borderRadius: "6px", border: "2px solid rgba(255,255,255,0.35)", textDecoration: "none" }}
                >
                  REQUEST SERVICE <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            {/* Right — trust card */}
            <div className="lg:col-span-2 hidden lg:block">
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "12px", padding: "28px", backdropFilter: "blur(8px)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "16px" }}>
                  Why Definitive Mechanical
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Licensed Master Plumber & Master Gasfitter",
                    "MDOT MBE & VA SWaM Certified",
                    "24/7 Emergency — Live Dispatcher",
                    "Written Pricing Before Work Begins",
                    "Serving MD, DC & Northern Virginia",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <CheckCircle2 size={15} style={{ color: "var(--brand-cyan)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S2: STATS BAR — cyan band ────────────────────────────────────── */}
      <section style={{ background: "var(--brand-cyan)", padding: "20px 0" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, stat: "24/7", label: "Emergency Response" },
              { icon: Award, stat: "11+", label: "Years in Business" },
              { icon: ShieldCheck, stat: "4 States", label: "Licensed & Insured" },
              { icon: MapPin, stat: "MD · DC · VA", label: "Service Area" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <Icon size={20} style={{ color: "var(--brand-navy)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "var(--brand-navy)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{stat}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(3,24,56,0.75)", fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: SUB-SERVICES — white bg, asymmetric ──────────────────────── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left label */}
            <div className="lg:col-span-1">
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
                {servicesEyebrow || "Services"}
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px, 3vw, 34px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.05, marginBottom: "16px" }}>
                {servicesHeading}
              </h2>
              {servicesSubtext && (
                <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                  {servicesSubtext}
                </p>
              )}
              <a
                href="tel:+13016795849"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--brand-navy)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 22px", borderRadius: "6px", textDecoration: "none" }}
              >
                <Phone size={14} /> Call Now
              </a>
            </div>
            {/* Right card grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subServices.map((svc) => (
                <div
                  key={svc.title}
                  style={{
                    background: "white",
                    border: "1px solid #D4E4F0",
                    borderTop: "3px solid var(--brand-cyan)",
                    borderRadius: "8px",
                    padding: "22px 20px",
                    boxShadow: "0 4px 16px rgba(29,108,163,0.08)",
                  }}
                >
                  <div style={{ width: "40px", height: "40px", background: "rgba(0,117,186,0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                    <CheckCircle2 size={20} color="var(--brand-cyan)" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--brand-navy)", fontSize: "16px", marginBottom: "8px", lineHeight: 1.2 }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S4: WHY CHOOSE — dark navy ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--brand-navy-dark)", position: "relative", overflow: "hidden" }}>
        {/* subtle texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 40px)", pointerEvents: "none" }} />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — checklist */}
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
                Why Choose Us
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)", textTransform: "uppercase", color: "white", lineHeight: 1.05, marginBottom: "24px" }}>
                {whyHeading}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {whyItems.map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "16px 18px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(0,158,198,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCircle2 size={18} style={{ color: "var(--brand-cyan)" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "white", fontSize: "15px", marginBottom: "4px" }}>{item.title}</p>
                      <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — credentials card */}
            <div>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "28px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "16px" }}>
                  Licenses &amp; Certifications
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  {[
                    "Maryland Master Plumber License",
                    "DC Master Plumber License",
                    "Virginia Master Plumber License",
                    "Maryland Master Gasfitter License",
                    "MDOT MBE Certified (No. 20-134)",
                    "Virginia SWaM Certified (No. 815255)",
                    "Fully Bonded & Insured",
                  ].map((cred) => (
                    <div key={cred} style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "10px 14px" }}>
                      <ShieldCheck size={14} style={{ color: "var(--brand-cyan)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.88)", fontSize: "13px", fontWeight: 500 }}>{cred}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:+13016795849"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "var(--brand-cyan)", color: "var(--brand-navy)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 20px", borderRadius: "6px", textDecoration: "none" }}
                >
                  <Phone size={15} /> CALL (301) 679-5849
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: PROCESS — light bg, numbered steps (optional) ────────────── */}
      {processItems && processItems.length > 0 && (
        <section className="py-20" style={{ background: "#F0F5FA" }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
                  How It Works
                </p>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px, 3vw, 34px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.05, marginBottom: "16px" }}>
                  {processHeading || "Our Process"}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.7 }}>
                  Every job follows a consistent process — diagnosis, written pricing, work, and verification before we leave.
                </p>
              </div>
              <div className="lg:col-span-2" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {processItems.map((step) => (
                  <div
                    key={step.step}
                    style={{ display: "flex", gap: "16px", alignItems: "flex-start", background: "white", border: "1px solid #D4E4F0", borderRadius: "8px", padding: "18px 20px", boxShadow: "0 2px 8px rgba(6,59,99,0.06)" }}
                  >
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--brand-navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--brand-cyan)", fontSize: "16px" }}>{step.step}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--brand-navy)", fontSize: "15px", marginBottom: "4px" }}>{step.title}</p>
                      <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── S6: FAQ — dark navy ───────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-20" style={{ background: "var(--brand-navy)" }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
                  FAQ
                </p>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px, 3vw, 34px)", textTransform: "uppercase", color: "white", lineHeight: 1.05, marginBottom: "16px" }}>
                  {faqHeading || "Common Questions"}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
                  Have a question not listed here? Call (301) 679-5849 — a live dispatcher answers 24/7.
                </p>
              </div>
              <div className="lg:col-span-2">
                {faqs.map((faq, i) => (
                  <FAQRow key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── S7: CTA Banner ───────────────────────────────────────────────── */}
      <CTABanner
        heading={ctaHeading}
        subtext={ctaSubtext}
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
