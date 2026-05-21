/**
 * PriorityCityLayout — shared layout for the 14 priority city pages.
 *
 * Design philosophy: Industrial Precision — Barlow Condensed display type,
 * brand navy / cyan / white palette, alternating dark/light sections,
 * asymmetric grids, depth via shadow + subtle gradients, no flat white walls.
 *
 * Sections:
 *  S1  Hero            — full-bleed navy gradient, left copy + right form card
 *  S2  Stats bar       — cyan band: 24/7 | 11+ yrs | 4 states | MDDCVA
 *  S3  Services        — white bg, 1/3 intro + 2/3 card grid (cyan top-border)
 *  S4  Emergency       — dark navy, red glow, 4 scenario cards + red CTA
 *  S5  Local context   — light grey, 3/5 copy + 2/5 navy credentials card
 *  S6  Commercial      — dark navy, 2/3 copy + 1/3 icon feature tiles
 *  S7  Nearby areas    — white, pill chips + county hub link
 *  S8  FAQ             — brand navy, 1/3 intro + 2/3 accordion
 *  S9  CTA banner      — gradient, centered
 */

import { getServiceImage } from "@/lib/serviceImages";
import { ALL_SERVICE_CATEGORIES } from "@/lib/allServices";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import CTABanner from "@/components/ui/CTABanner";
import CityMap from "@/components/ui/CityMap";
import {
  Phone, CheckCircle, Star, Zap, Droplets, Thermometer,
  GitBranch, Flame, ShieldCheck, Wind, Wrench, Building2,
  AlertTriangle, Clock, MapPin, Award, ChevronDown, ChevronRight
} from "lucide-react";
import { useState } from "react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";

/* ─── Types ──────────────────────────────────────────────────────────────── */
export interface ServiceItem   { label: string; href: string; note?: string; }
export interface LocalCard     { icon: React.ElementType; title: string; body: string; }
export interface CommercialFeature { icon: React.ElementType; title: string; body: string; }
export interface NearbyLink    { label: string; href: string; }
export interface FAQItem       { question: string; answer: string; }
export interface CredentialBadge { label: string; }
export interface BreadcrumbItem  { label: string; href?: string; }

export interface PriorityCityLayoutProps {
  /* SEO */
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  schemaJson?: object[];

  /* Hero */
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  h1: string;
  introParagraph: string;
  trustItems: string[];
  heroImage?: string;   // optional city-specific hero photo URL
  heroImageAlt?: string;

  /* Services */
  servicesEyebrow?: string;
  servicesHeading: string;
  servicesIntro: string;
  services: ServiceItem[];

  /* Emergency */
  emergencyHeading: string;
  emergencyBody: string;

  /* Local context */
  localContextEyebrow?: string;
  localContextHeading: string;
  localContextCards: LocalCard[];

  /* Credentials */
  licenseHeading?: string;
  credentials: CredentialBadge[];

  /* Commercial */
  commercialHeading: string;
  commercialBody: string;
  commercialFeatures?: CommercialFeature[];
  commercialLinks?: { label: string; href: string }[];

  /* Nearby */
  nearbyGroups?: { label: string; links: NearbyLink[] }[];
  nearbyAreas?: NearbyLink[];

  /* Map */
  cityMapQuery?: string;  // e.g. "Bethesda, MD" — used for the Google Maps embed

  /* FAQ */
  faqHeading?: string;
  faqs: FAQItem[];

  /* CTA */
  ctaHeading: string;
  ctaSubtext: string;
}

/* ─── FAQ Accordion ──────────────────────────────────────────────────────── */
function FAQRow({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        cursor: "pointer",
        padding: "18px 0",
        transition: "all 150ms ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "white", fontSize: "15px", lineHeight: 1.5, margin: 0 }}>
          {question}
        </p>
        <ChevronDown size={18} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2, transform: open ? "rotate(180deg)" : "none", transition: "transform 200ms ease" }} />
      </div>
      {open && (
        <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.78)", fontSize: "14px", lineHeight: 1.7, marginTop: 10, marginBottom: 0 }}>
          {answer}
        </p>
      )}
    </div>
  );
}

/* ─── Icon map for services ──────────────────────────────────────────────── */
const SERVICE_ICONS: Record<string, React.ElementType> = {
  "emergency": AlertTriangle,
  "drain": Droplets,
  "water heater": Thermometer,
  "tankless": Zap,
  "sewer": GitBranch,
  "gas": Flame,
  "backflow": ShieldCheck,
  "boiler": Wind,
  "furnace": Wind,
  "water line": Wrench,
  "commercial": Building2,
  "video": MapPin,
  "camera": MapPin,
};

function getServiceIcon(label: string): React.ElementType {
  const lower = label.toLowerCase();
  for (const [key, Icon] of Object.entries(SERVICE_ICONS)) {
    if (lower.includes(key)) return Icon;
  }
  return Wrench;
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function PriorityCityLayout({
  metaTitle, metaDescription, canonicalUrl, schemaJson = [],
  breadcrumbs, eyebrow, h1, introParagraph, trustItems,
  heroImage, heroImageAlt,
  servicesEyebrow, servicesHeading, servicesIntro, services,
  emergencyHeading, emergencyBody,
  localContextEyebrow, localContextHeading, localContextCards,
  licenseHeading, credentials,
  commercialHeading, commercialBody, commercialFeatures = [], commercialLinks = [],
  nearbyGroups, nearbyAreas,
  faqHeading, faqs,
  cityMapQuery,
  ctaHeading, ctaSubtext,
}: PriorityCityLayoutProps) {

  const EMERGENCY_SCENARIOS = [
    { icon: Droplets, label: "Burst Pipe", desc: "Immediate shut-off & repair" },
    { icon: GitBranch, label: "Sewer Backup", desc: "Camera inspection & clearing" },
    { icon: Flame, label: "Gas Leak", desc: "Licensed Master Gasfitter" },
    { icon: Thermometer, label: "No Hot Water", desc: "Same-day water heater service" },
  ];

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {schemaJson.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      {/* ── S1: HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, var(--brand-navy) 0%, #0a2d52 50%, var(--brand-navy-dark) 100%)",
        minHeight: "72vh",
        position: "relative",
        overflow: "hidden",
      }} className="py-20">
        {/* Diagonal texture overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BreadcrumbList items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8 items-start">
            {/* Left: copy */}
            <div className="lg:col-span-3">
              <p style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>
                {eyebrow}
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "clamp(36px,5vw,62px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1.0, marginBottom: 20 }}>
                {h1}
              </h1>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)", fontSize: "16px", maxWidth: "580px", lineHeight: 1.75, marginBottom: 28 }}>
                {introParagraph}
              </p>
              {/* Trust pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {trustItems.map((item, i) => (
                  <span key={i} style={{
                    background: "rgba(0,158,198,0.15)", border: "1px solid rgba(0,158,198,0.35)",
                    color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-body)", fontSize: "12px",
                    fontWeight: 500, padding: "4px 12px", borderRadius: "2px",
                  }}>
                    <CheckCircle size={11} style={{ display: "inline", marginRight: 5, color: "var(--brand-cyan)", verticalAlign: "middle" }} />
                    {item}
                  </span>
                ))}  
                  </div>
              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                <a href="tel:+13016795849" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--brand-blue)", color: "white",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  padding: "14px 28px", borderRadius: "2px", textDecoration: "none",
                  transition: "background 150ms ease",
                }}>
                  <Phone size={16} /> CALL (301) 679-5849
                </a>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: "1px solid rgba(255,255,255,0.4)", color: "white",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  padding: "14px 28px", borderRadius: "2px", textDecoration: "none",
                }}>
                  REQUEST SERVICE
                </Link>
              </div>
              {/* Stars */}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--brand-cyan)" color="var(--brand-cyan)" />)}
                <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.7)", fontSize: "13px", marginLeft: 4 }}>4.8  40+ verified reviews</span>
              </div>
            </div>
            {/* Right: city image + trust card */}
            <div className="lg:col-span-2 hidden lg:block">
              {heroImage && (
                <div style={{ marginBottom: "16px", borderRadius: "4px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                  <img
                    src={heroImage}
                    alt={heroImageAlt || h1}
                    loading="eager"
                    style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
                  />
                </div>
              )}
              <div style={{
                background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px",
                padding: "28px 24px",
              }}>
                <p style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>
                  WHY DEFINITIVE MECHANICAL
                </p>
                {[
                  { icon: Clock, text: "24/7 emergency — live dispatcher, no voicemail" },
                  { icon: ShieldCheck, text: "Licensed Master Plumber & Gasfitter in MD, DC & VA" },
                  { icon: Award, text: "MDOT MBE Certified  CAGE Code 8HCF6" },
                  { icon: CheckCircle, text: "Upfront written pricing — trip fee applies to all services" },
                  { icon: MapPin, text: "Serving from Largo, MD — fast response across the DMV" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
                    <item.icon size={16} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S2: STATS BAR ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--brand-cyan)", padding: "14px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px 48px" }}>
            {[
              { value: "24/7", label: "Emergency Response" },
              { value: "11+", label: "Years in Business" },
              { value: "4", label: "State Licenses" },
              { value: "MD  DC  VA", label: "Service Region" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "22px", color: '#0A0A0A', textTransform: "uppercase", letterSpacing: "0.02em", margin: 0, lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(0,48,96,0.75)", margin: "3px 0 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#FAFBFC" }}>
        <div className="container">
          {/* Heading above the grid */}
          <div style={{ marginBottom: "36px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: 8 }}>
              {servicesEyebrow || "LICENSED PLUMBING SERVICES"}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3vw,34px)", textTransform: "uppercase", color: '#0A0A0A', lineHeight: 1.1, margin: 0 }}>
                {servicesHeading}
              </h2>
              <a href="tel:+13016795849" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--brand-navy)", color: "white",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px",
                textTransform: "uppercase", letterSpacing: "0.08em",
                padding: "12px 22px", borderRadius: "2px", textDecoration: "none", flexShrink: 0,
              }}>
                <Phone size={14} /> CALL NOW
              </a>
            </div>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.75, marginTop: 10, maxWidth: 640 }}>
              {servicesIntro}
            </p>
          </div>
          {/* 3-col full-width grid — all 18 services */}
          {ALL_SERVICE_CATEGORIES.map((cat) => (

            <div key={cat.key} style={{ marginBottom: "36px" }}>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>

                <div style={{ height: "3px", width: "28px", background: cat.color, flexShrink: 0, borderRadius: "2px" }} />

                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.12em", color: '#0A0A0A' }}>{cat.title}</span>

                <div style={{ height: "1px", flex: 1, background: "#E6E8EE" }} />

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {cat.items.map((svc, i) => (
              <Link key={i} href={svc.href} style={{ textDecoration: "none", display: "block" }}>
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(6,59,99,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(6,59,99,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                    <img
                      src={getServiceImage(svc.href.replace(/^\//, "").toLowerCase())}
                      alt={svc.label}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                      loading="lazy"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(3,24,56,0.25) 0%, rgba(3,24,56,0.55) 100%)" }} />
                  </div>
                  <div style={{ padding: "14px 16px 16px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: '#0A0A0A', marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0075BA", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
                  </div>
                </div>
              </Link>
            ))}  
              </div>
            </div>
          ))}  
        </div>
      </section>


      {/* ── S4: EMERGENCY ────────────────────────────────────────────────── */}
      <section style={{
        background: "var(--brand-navy)",
        position: "relative", overflow: "hidden",
        padding: "80px 0",
      }}>
        {/* Red radial glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse at center, rgba(220,38,38,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#ef4444", marginBottom: 8 }}>
                24/7 EMERGENCY SERVICE
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,40px)", textTransform: "uppercase", color: "white", lineHeight: 1.05, marginBottom: 16 }}>
                {emergencyHeading}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.78)", fontSize: "15px", lineHeight: 1.75, marginBottom: 28 }}>
                {emergencyBody}
              </p>
              <a href="tel:+13016795849" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#dc2626", color: "white",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px",
                textTransform: "uppercase", letterSpacing: "0.08em",
                padding: "14px 28px", borderRadius: "2px", textDecoration: "none",
              }}>
                <Phone size={16} /> CALL (301) 679-5849
              </a>
            </div>
            {/* Emergency scenario cards */}
            <div className="grid grid-cols-2 gap-3">
              {EMERGENCY_SCENARIOS.map((s, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px", padding: "20px 16px",
                }}>
                  <s.icon size={24} style={{ color: "#ef4444", marginBottom: 10 }} />
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", color: "white", margin: "0 0 4px" }}>{s.label}</p>
                  <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "12px", margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: LOCAL CONTEXT + CREDENTIALS ─────────────────────────────── */}
      <section className="py-20" style={{ background: "#F4F6F9" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left: local context cards */}
            <div className="lg:col-span-3">
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: 8 }}>
                {localContextEyebrow || "LOCAL PLUMBING NEEDS"}
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", textTransform: "uppercase", color: '#0A0A0A', lineHeight: 1.1, marginBottom: 20 }}>
                {localContextHeading}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {localContextCards.map((card, i) => (
                  <div key={i} style={{
                    background: "white", borderRadius: "3px", padding: "20px",
                    borderLeft: "3px solid var(--brand-cyan)",
                    boxShadow: "0 1px 6px rgba(6,59,99,0.07)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ background: "rgba(0,158,198,0.1)", borderRadius: "8px", padding: "7px" }}>
                        <card.icon size={18} style={{ color: "var(--brand-cyan)", display: "block" }} />
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: '#0A0A0A', fontSize: "14px", margin: 0 }}>{card.title}</p>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "13px", lineHeight: 1.65, margin: 0 }}>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: credentials card */}
            <div className="lg:col-span-2">
              <div style={{
                background: "var(--brand-navy)", borderRadius: "4px", padding: "28px 24px",
              }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: 16 }}>
                  {licenseHeading || "LICENSED & CERTIFIED"}
                </p>
                {credentials.map((cred, i) => (
                  <div key={i} style={{
                    borderLeft: "3px solid var(--brand-cyan)", paddingLeft: 12, marginBottom: 14,
                  }}>
                    <p style={{ fontFamily: "var(--font-body)", color: "white", fontSize: "13px", fontWeight: 500, margin: 0 }}>{cred.label}</p>
                  </div>
                ))}
                <a href="tel:+13016795849" style={{
                  display: "flex", alignItems: "center", gap: 8, marginTop: 20,
                  background: "var(--brand-cyan)", color: "var(--brand-navy)",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  padding: "12px 18px", borderRadius: "2px", textDecoration: "none",
                }}>
                  <Phone size={14} /> CALL NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: COMMERCIAL & GOVERNMENT ──────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--brand-navy)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: copy */}
            <div className="lg:col-span-3">
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: 8 }}>
                COMMERCIAL & GOVERNMENT
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3vw,36px)", textTransform: "uppercase", color: "white", lineHeight: 1.1, marginBottom: 16 }}>
                {commercialHeading}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)", fontSize: "15px", lineHeight: 1.75, marginBottom: 24 }}>
                {commercialBody}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {["MDOT MBE Cert 20-134", "CAGE Code 8HCF6", "SWaM Cert 815255"].map((badge, i) => (
                  <span key={i} style={{
                    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                    color: "white", fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em",
                    padding: "4px 10px", borderRadius: "2px",
                  }}>{badge}</span>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <Link href="/commercial-plumbing" style={{ color: "var(--brand-cyan)", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                  Commercial Plumbing <ChevronRight size={14} />
                </Link>
                <Link href="/government-municipal-plumbing" style={{ color: "var(--brand-cyan)", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                  Government & Municipal <ChevronRight size={14} />
                </Link>
                {commercialLinks.map((link, i) => (
                  <Link key={i} href={link.href} style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    {link.label} <ChevronRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
            {/* Right: feature tiles */}
            <div className="lg:col-span-2">
              {(commercialFeatures.length > 0 ? commercialFeatures : [
                { icon: Building2, title: "Commercial Properties", body: "Office buildings, retail, restaurants, and multi-unit residential." },
                { icon: Award, title: "Government Facilities", body: "Federal, state, and municipal facilities. CAGE Code 8HCF6." },
                { icon: ShieldCheck, title: "MBE Certified", body: "MDOT MBE Cert No. 20-134 for set-aside and diversity procurement." },
              ]).map((feat, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "3px", padding: "18px 16px", marginBottom: 10,
                  display: "flex", alignItems: "flex-start", gap: 14,
                }}>
                  <div style={{ background: "rgba(0,158,198,0.15)", borderRadius: "8px", padding: "8px", flexShrink: 0 }}>
                    <feat.icon size={18} style={{ color: "var(--brand-cyan)", display: "block" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", color: "white", margin: "0 0 4px" }}>{feat.title}</p>
                    <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>{feat.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S6b: CITY MAP ─────────────────────────────────────────────────── */}
      {cityMapQuery && (
        <CityMap
          q={cityMapQuery}
          label={`${cityMapQuery} — Definitive Mechanical Service Area`}
          zoom={13}
        />
      )}
      {/* ── S7: NEARBY AREAS ─────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: 8 }}>
            NEARBY SERVICE AREAS
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,28px)", textTransform: "uppercase", color: '#0A0A0A', lineHeight: 1.1, marginBottom: 20 }}>
            Areas We Also Serve
          </h2>
          {nearbyGroups ? (
            nearbyGroups.map((group, gi) => (
              <div key={gi} style={{ marginBottom: 16 }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--brand-navy)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{group.label}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.links.map((link, i) => (
                    <Link key={i} href={link.href} style={{
                      background: "#F0F4F8", border: "1px solid #DDE4EC",
                      color: "var(--brand-navy)", fontFamily: "var(--font-body)", fontSize: "13px",
                      fontWeight: 500, padding: "6px 14px", borderRadius: "20px",
                      textDecoration: "none", transition: "all 150ms ease",
                    }}>{link.label}</Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {(nearbyAreas || []).map((area, i) => (
                <Link key={i} href={area.href} style={{
                  background: "#F0F4F8", border: "1px solid #DDE4EC",
                  color: "var(--brand-navy)", fontFamily: "var(--font-body)", fontSize: "13px",
                  fontWeight: 500, padding: "6px 14px", borderRadius: "20px",
                  textDecoration: "none",
                }}>{area.label}</Link>
              ))}
            </div>
          )}
          <Link href="/service-areas" style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 20, color: "var(--brand-cyan)", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
            View Full Service Area <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── S8: FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--brand-navy)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: 8 }}>FAQ</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", textTransform: "uppercase", color: "white", lineHeight: 1.1, marginBottom: 16 }}>
                {faqHeading || "Frequently Asked Questions"}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.7, marginBottom: 24 }}>
                Have a question not listed here? Call (301) 679-5849 — a live dispatcher answers 24/7.
              </p>
              <a href="tel:+13016795849" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--brand-cyan)", color: "var(--brand-navy)",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px",
                textTransform: "uppercase", letterSpacing: "0.08em",
                padding: "12px 20px", borderRadius: "2px", textDecoration: "none",
              }}>
                <Phone size={14} /> CALL NOW
              </a>
            </div>
            <div className="lg:col-span-2">
              {faqs.map((faq, i) => <FAQRow key={i} {...faq} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── S9: CTA BANNER ───────────────────────────────────────────────── */}
      <CTABanner
        heading={ctaHeading}
        subtext={ctaSubtext}
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
      />
    </>
  );
}
