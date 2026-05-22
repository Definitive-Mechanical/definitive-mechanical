/**
 * Tier1CityPage — Premium city page layout with visual diversity.
 * Design: alternating dark/light sections, stats bar, icon service grid,
 * dark emergency callout, split local-context layout, credential tiles,
 * angled dividers, FAQ on dark bg, CTA banner.
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Phone, ArrowRight, ChevronDown, CheckCircle2,
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch,
  Flame, ShieldCheck, Wind, Building2, Wrench, Waves, Camera,
  AlertOctagon, Landmark, Clock, Star, Award, MapPin
} from "lucide-react";
import { useState } from "react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import { getServiceImage } from "@/lib/serviceImages";
import { ALL_SERVICE_CATEGORIES } from "@/lib/allServices";
import CTABanner from "@/components/ui/CTABanner";
import CityMap from "@/components/ui/CityMap";

/* ─── Types ─────────────────────────────────────────────────────────────── */
export interface ServiceItem { label: string; href: string; }
export interface NearbyArea  { label: string; href: string; }
export interface FAQItem     { q: string; a: string; }
export interface CredentialBadge { label: string; }

export interface Tier1CityPageProps {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  h1: string;
  introParagraph: string;
  trustItems: string[];
  heroImage?: string;
  heroImageAlt?: string;
  services: ServiceItem[];
  localContextHeading: string;
  localContextBody: string;
  calloutNote?: string;
  licenseHeading: string;
  credentials: CredentialBadge[];
  nearbyAreas: NearbyArea[];
  countyHubLabel: string;
  countyHubHref: string;
  faqs?: FAQItem[];
  cityMapQuery?: string;
  ctaCity: string;
  ctaLicenseLine: string;
  schemaJson: object[];
}

/* ─── Icon map ───────────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; color?: string; strokeWidth?: number }>> = {
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
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "white", fontSize: "15px", lineHeight: 1.4 }}>{q}</span>
        <ChevronDown size={18} style={{ color: "var(--brand-cyan)", flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 200ms" }} />
      </button>
      {open && (
        <div style={{ borderLeft: "3px solid var(--brand-cyan)", background: "rgba(0,158,198,0.08)", padding: "16px 20px", marginBottom: "8px", borderRadius: "0 6px 6px 0" }}>
          <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function Tier1CityPage({
  metaTitle, metaDescription, canonicalUrl,
  breadcrumbs, eyebrow, h1, introParagraph,
  trustItems, heroImage, heroImageAlt, services,
  localContextHeading, localContextBody, calloutNote,
  licenseHeading, credentials,
  nearbyAreas, countyHubLabel, countyHubHref,
  faqs, cityMapQuery, ctaCity, ctaLicenseLine, schemaJson,
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

      {/* ── S1: HERO — dark navy gradient, two-column ───────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #031838 0%, #063B63 60%, #0a4a7a 100%)", minHeight: "62vh", position: "relative", overflow: "hidden" }} className="py-20">
        {/* subtle diagonal texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 40px)", pointerEvents: "none" }} />
        <div className="container relative">
          <BreadcrumbList items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8 items-center">
            {/* Left — 3 cols */}
            <div className="lg:col-span-3">
              <p style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
                {eyebrow}
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1.0 }} className="mb-5">
                {h1}
              </h1>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)", fontSize: "17px", maxWidth: "560px", lineHeight: 1.75 }} className="mb-8">
                {introParagraph}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+13016795849" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "white", color: '#0A0A0A', fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}>
                  <Phone size={16} /> CALL (301) 679-5849
                </a>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "14px 28px", borderRadius: "6px", border: "2px solid rgba(255,255,255,0.35)", textDecoration: "none" }}>
                  REQUEST SERVICE <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            {/* Right — 2 cols: city image + trust card */}
            <div className="lg:col-span-2">
              {heroImage && (
                <div style={{ marginBottom: "16px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                  <img
                    src={heroImage}
                    alt={heroImageAlt || h1}
                    loading="eager"
                    style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                  />
                </div>
              )}
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "28px", backdropFilter: "blur(8px)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "16px" }}>
                  Why Definitive Mechanical
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {trustItems.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <CheckCircle2 size={16} style={{ color: "var(--brand-cyan)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ color: "#FFD700", fill: "#FFD700" }} />)}
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>4.8  40+ Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S2: STATS BAR — cyan band ───────────────────────────────────── */}
      <section style={{ background: "var(--brand-cyan)", padding: "20px 0" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, stat: "24/7", label: "Emergency Response" },
              { icon: Award, stat: "11+", label: "Years in Business" },
              { icon: ShieldCheck, stat: "4 States", label: "Licensed & Insured" },
              { icon: MapPin, stat: "MD  DC  VA", label: "Service Area" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <Icon size={20} style={{ color: "var(--brand-navy)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: '#0A0A0A', textTransform: "uppercase", letterSpacing: "0.04em" }}>{stat}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(3,24,56,0.75)", fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: SERVICES GRID — white bg ────────────────────────────────── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          {/* Heading above the grid */}
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>Services</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3vw,36px)", textTransform: "uppercase", color: '#0A0A0A', lineHeight: 1.05, margin: 0 }}>
                Plumbing Services in {cityName}
              </h2>
              <a href="tel:+13016795849" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--brand-navy)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "12px 22px", borderRadius: "6px", textDecoration: "none", flexShrink: 0 }}>
                <Phone size={14} /> Call Now
              </a>
            </div>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.7, marginTop: "12px", maxWidth: "640px" }}>
              Full-service licensed plumbing for residential, commercial, and government clients in {cityName}. Every job performed by a licensed Master Plumber.
            </p>
          </div>
          {/* Categorized 3-column photo card grid */}
          {ALL_SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.key} style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{ height: '3px', width: '28px', background: cat.color, flexShrink: 0, borderRadius: '2px' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0A0A0A' }}>{cat.title}</span>
                <div style={{ height: '1px', flex: 1, background: '#E6E8EE' }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((svc, i) => {
              const Icon = getIcon(svc.label);
              const slug = svc.href.replace(/^\//, "").toLowerCase();
              const imgSrc = getServiceImage(slug);
              return (
                <Link key={i} href={svc.href} style={{ textDecoration: "none", display: "block" }}>
                  <div
                    className="cursor-pointer group"
                    style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(6,59,99,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(6,59,99,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    {/* Photo header */}
                    <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "linear-gradient(135deg, #063B63, #0a3a5e)" }}>
                      <img
                        src={imgSrc}
                        alt={`${svc.label} in ${cityName}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)" }}
                        loading="lazy"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,59,99,0.1) 0%, rgba(6,59,99,0.5) 100%)" }} />
                      <div style={{ position: "absolute", bottom: "10px", left: "12px", background: "rgba(6,59,99,0.75)", backdropFilter: "blur(4px)", borderRadius: "6px", padding: "5px 7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={18} color="#4FB3E8" strokeWidth={1.8} />
                      </div>
                    </div>
                    <div style={{ padding: "14px 16px 16px" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: '#0A0A0A', marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0075BA", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
                    </div>
                  </div>
                </Link>
                            );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── S4: EMERGENCY — full dark section with red accent ───────────── */}
      <section style={{ background: "var(--brand-navy-dark)", position: "relative", overflow: "hidden" }} className="py-20">
        {/* red glow */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(228,6,19,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(228,6,19,0.15)", border: "1px solid rgba(228,6,19,0.35)", borderRadius: "20px", padding: "6px 14px", marginBottom: "20px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E40613", display: "inline-block", animation: "pulse 1.5s infinite" }} />
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "12px", color: "#ff6b6b", textTransform: "uppercase", letterSpacing: "0.1em" }}>24/7 Emergency Available</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px,3.5vw,42px)", textTransform: "uppercase", color: "white", lineHeight: 1.05, marginBottom: "20px" }}>
                Emergency Plumbing in {cityName}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)", fontSize: "16px", lineHeight: 1.75, marginBottom: "16px" }}>
                Burst pipe, sewer backup, gas leak, no hot water — a live dispatcher answers every call around the clock. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee.
              </p>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.7 }}>
                We serve {cityName} and the surrounding area from our Largo, MD location. Most emergency calls are reached within 60-90 minutes.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: AlertTriangle, title: "Burst or Frozen Pipes", body: "Immediate shutoff guidance and rapid dispatch to minimize water damage." },
                { icon: Droplets, title: "Sewer Backup", body: "Camera inspection and emergency clearing — no sewage backup left unresolved." },
                { icon: Flame, title: "Gas Leak", body: "Licensed Master Gasfitter responds 24/7. Evacuate and call immediately." },
                { icon: Thermometer, title: "No Hot Water", body: "Same-day water heater diagnosis, repair, or replacement." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "14px 16px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(228,6,19,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} style={{ color: "#ff6b6b" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "white", fontSize: "14px", marginBottom: "2px" }}>{title}</p>
                    <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
              <a href="tel:+13016795849" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#E40613", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "16px 32px", borderRadius: "6px", textDecoration: "none", marginTop: "4px", boxShadow: "0 4px 18px rgba(228,6,19,0.4)" }}>
                <Phone size={17} /> CALL (301) 679-5849
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: LOCAL CONTEXT — light bg, asymmetric layout ─────────────── */}
      <section className="py-20" style={{ background: "#F0F5FA" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>Local Knowledge</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,36px)", textTransform: "uppercase", color: '#0A0A0A', lineHeight: 1.05, marginBottom: "20px" }}>
                {localContextHeading}
              </h2>
              {localContextBody.split("\n").filter(Boolean).map((para, i) => (
                <p key={i} style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "16px", lineHeight: 1.75, marginBottom: "16px" }}>{para}</p>
              ))}
              {calloutNote && (
                <div style={{ background: "white", border: "1px solid #D0E4F0", borderLeft: "4px solid var(--brand-cyan)", borderRadius: "6px", padding: "14px 18px", marginTop: "8px" }}>
                  <p style={{ fontFamily: "var(--font-body)", color: "var(--brand-navy)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{calloutNote}</p>
                </div>
              )}
            </div>
            {/* Right — credentials on navy card */}
            <div>
              <div style={{ background: "var(--brand-navy)", borderRadius: "12px", padding: "28px", boxShadow: "0 8px 32px rgba(6,59,99,0.2)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>Licenses &amp; Certifications</p>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", textTransform: "uppercase", color: "white", lineHeight: 1.1, marginBottom: "20px" }}>
                  {licenseHeading}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {credentials.map((cred, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "10px 14px" }}>
                      <ShieldCheck size={14} style={{ color: "var(--brand-cyan)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 500 }}>{cred.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <a href="tel:+13016795849" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "var(--brand-cyan)", color: '#0A0A0A', fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "13px 20px", borderRadius: "6px", textDecoration: "none" }}>
                    <Phone size={15} /> CALL (301) 679-5849
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: COMMERCIAL — dark navy, horizontal layout ───────────────── */}
      <section style={{ background: "var(--brand-navy)", padding: "64px 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>Commercial &amp; Government</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,36px)", textTransform: "uppercase", color: "white", lineHeight: 1.05, marginBottom: "16px" }}>
                Commercial Plumbing in {cityName}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)", fontSize: "16px", lineHeight: 1.75 }}>
                Definitive Mechanical serves commercial facilities, property managers, HOAs, and government agencies in {cityName}. MDOT MBE Certified (No. 20-134), Virginia SWaM Certified (No. 815255), CAGE Code 8HCF6, NAICS 238220.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: Building2, label: "Commercial Facilities" },
                { icon: Landmark, label: "Government Contracts" },
                { icon: Award, label: "MDOT MBE Certified" },
                { icon: ShieldCheck, label: "Bonded & Insured" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.06)", borderRadius: "6px", padding: "10px 14px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Icon size={16} style={{ color: "var(--brand-cyan)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
              <Link href="/commercial-plumbing" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--brand-cyan)", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600, textDecoration: "none", marginTop: "4px" }}>
                Learn more <ArrowRight size={14} />
              </Link>
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
      {/* ── S7: NEARBY AREAS — white, pill chips ────────────────────────── */}
      <section className="py-14" style={{ background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>Coverage</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,28px)", textTransform: "uppercase", color: '#0A0A0A', lineHeight: 1.1, marginBottom: "12px" }}>
                Nearby Areas We Serve
              </h2>
              <Link href="/service-areas" style={{ fontFamily: "var(--font-body)", color: "var(--brand-cyan)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                Full service area →
              </Link>
            </div>
            <div className="lg:col-span-3">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <Link href={countyHubHref} style={{ fontFamily: "var(--font-body)", color: "white", fontSize: "13px", fontWeight: 600, textDecoration: "none", background: "var(--brand-navy)", borderRadius: "20px", padding: "6px 16px" }}>
                  {countyHubLabel} Hub
                </Link>
                {nearbyAreas.map((area) => (
                  <Link key={area.href} href={area.href} style={{ fontFamily: "var(--font-body)", color: "var(--brand-navy)", fontSize: "13px", fontWeight: 500, textDecoration: "none", background: "#EEF4FA", border: "1px solid #C8DCF0", borderRadius: "20px", padding: "6px 16px" }}>
                    {area.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S8: FAQ — dark navy bg ───────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="py-20" style={{ background: "var(--brand-navy)" }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>FAQ</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,34px)", textTransform: "uppercase", color: "white", lineHeight: 1.05, marginBottom: "16px" }}>
                  Common Questions — {cityName}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
                  Have a question not listed here? Call (301) 679-5849 — a live dispatcher answers 24/7.
                </p>
              </div>
              <div className="lg:col-span-2">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── S9: CTA Banner ───────────────────────────────────────────────── */}
      <CTABanner
        heading={`Need a licensed plumber in ${cityName}?`}
        subtext={`Serving ${cityName} from our Largo, MD location. ${ctaLicenseLine}  24/7 Emergency  Upfront Pricing.`}
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
