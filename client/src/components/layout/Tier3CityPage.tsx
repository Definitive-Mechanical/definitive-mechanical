/**
 * Tier3CityPage — Reusable component for all DC ward/neighborhood city pages.
 * Design: Matches the full Maryland/VA premium layout —
 *   - Dark navy gradient hero with 5-col grid + image placeholder
 *   - TrustBadges + BookNowButton components
 *   - Icon service cards with cyan top border (same as BethesdaMD, RockvilleMD etc.)
 *   - FAQAccordion component
 *   - CTABanner component
 *   - Proper BreadcrumbList component
 */

import { getServiceImage } from "@/lib/serviceImages";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wind, Building2, Wrench, MapPin, Landmark,
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";
import { ALL_SERVICE_CATEGORIES } from "@/lib/allServices";

// Map common service labels to icons
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  "24/7 Emergency Plumbing": AlertTriangle,
  "Drain Cleaning": Droplets,
  "Drain Cleaning and Hydro-Jetting": Droplets,
  "Hydro-Jetting": Zap,
  "Water Heater Repair": Thermometer,
  "Water Heater Repair & Installation": Thermometer,
  "Water Heater Repair and Installation": Thermometer,
  "Sewer Line Repair": GitBranch,
  "Sewer Line Repair and Camera Inspection": GitBranch,
  "Gas Line Repair": Flame,
  "Gas Line Repair — licensed DC Master Gasfitter": Flame,
  "Gas Leak Repair": Flame,
  "Backflow Prevention and Certification": ShieldCheck,
  "Backflow Certification": ShieldCheck,
  "Boiler & Furnace Repair": Wind,
  "Commercial Plumbing": Building2,
  "Water Line Repair": Wrench,
  "Faucet & Toilet Repair": Wrench,
  "Video Camera Inspection": Zap,
  "Video Camera Inspection — clay lateral inspection before purchase or repair": Zap,
  "Government & Municipal Plumbing": Landmark,
};

function getIcon(label: string) {
  // Exact match first
  if (ICON_MAP[label]) return ICON_MAP[label];
  // Partial match fallback
  for (const key of Object.keys(ICON_MAP)) {
    if (label.toLowerCase().includes(key.toLowerCase())) return ICON_MAP[key];
  }
  return Wrench;
}

export interface Tier3ServiceItem {
  label: string;
  href: string;
}

export interface Tier3NearbyArea {
  label: string;
  href: string;
}

export interface Tier3FAQItem {
  question: string;
  answer: string;
}

export interface Tier3FeaturedNeighborhood {
  label: string;
  href: string;
}

export interface Tier3CityPageProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  // Schema
  schemaCity: string;
  schemaState: string;
  schemaUrl: string;
  faqs?: Tier3FAQItem[];
  // Breadcrumb
  breadcrumbs: { label: string; href?: string }[];
  // Hero
  eyebrow: string;
  h1: string;
  intro: string;
  // Trust strip
  trustItems: string[];
  // DC Ward featured neighborhoods (optional)
  featuredNeighborhoods?: Tier3FeaturedNeighborhood[];
  // Services
  servicesHeading?: string;
  services: Tier3ServiceItem[];
  // Well/Septic callout (optional)
  wellSepticNote?: string;
  // Local context
  localContextHeading: string;
  localContextBody: string;
  // Nearby areas
  nearbyAreas: Tier3NearbyArea[];
  countyHubLabel: string;
  countyHubHref: string;
  // Bottom CTA
  bottomCtaLicenseLine: string;
  bottomCtaCity: string;
}

export default function Tier3CityPage({
  metaTitle,
  metaDescription,
  canonicalUrl,
  schemaCity,
  schemaState,
  schemaUrl,
  faqs,
  breadcrumbs,
  eyebrow,
  h1,
  intro,
  trustItems,
  featuredNeighborhoods,
  servicesHeading,
  services,
  wellSepticNote,
  localContextHeading,
  localContextBody,
  nearbyAreas,
  countyHubLabel,
  countyHubHref,
  bottomCtaLicenseLine,
  bottomCtaCity,
}: Tier3CityPageProps) {

  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "Plumber"],
      name: "Definitive Mechanical",
      telephone: "+13016795849",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9701 Apollo Drive, Suite 100",
        addressLocality: "Largo",
        addressRegion: "MD",
        postalCode: "20774",
      },
      areaServed: { "@type": "City", name: `${schemaCity}, ${schemaState}` },
      url: schemaUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.label,
        item: b.href ? `https://definitivemechanical.com${b.href}` : undefined,
      })),
    },
  ];

  if (faqs && faqs.length > 0) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  // Convert FAQs to format expected by FAQAccordion
  const faqItems = (faqs || []).map(f => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {schema.map((s, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(s)}
          </script>
        ))}
      </Helmet>

      {/* S1: Hero — dark navy gradient matching MD/VA pages */}
      <section style={{ background: "linear-gradient(135deg, #031838 0%, var(--brand-blue-2) 60%, var(--brand-blue) 100%)", minHeight: "50vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={breadcrumbs.map(b => ({ label: b.label, href: b.href }))} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily: 'var(--font-display)', color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
                {eyebrow}
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', color: "white", fontSize: "clamp(34px,5vw,56px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1.0 }} className="mb-4">
                {h1}
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "560px", lineHeight: 1.7 }} className="mb-6">
                {intro}
              </p>
              <TrustBadges variant="dark" badges={trustItems} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/city-page-hero-plumber-LiK4eLEJT6Nfxt9Ly3GS3e.webp"
                alt={`Licensed plumber ${schemaCity} ${schemaState} — Definitive Mechanical`}
                loading="eager"
                className="rounded-lg w-full"
                style={{ objectFit: "cover", height: "360px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DC Ward Featured Neighborhood Cards (optional) */}
      {featuredNeighborhoods && featuredNeighborhoods.length > 0 && (
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container">
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.25em", color: "var(--brand-cyan)", marginBottom: "16px" }}>
              Dedicated Neighborhood Pages
            </p>
            <div className="flex flex-wrap gap-3">
              {featuredNeighborhoods.map((n, i) => (
                <Link
                  key={i}
                  href={n.href}
                  className="no-underline"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "2px solid var(--brand-cyan)",
                    color: "var(--brand-cyan)",
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "8px 16px",
                    borderRadius: "2px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--brand-cyan)";
                    (e.currentTarget as HTMLElement).style.color = "var(--brand-navy)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--brand-cyan)";
                  }}
                >
                  {n.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* S2: Services — all 18 photo cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>Services</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,34px)", textTransform: "uppercase", color: "var(--brand-navy)", lineHeight: 1.05, margin: 0 }}>
                {servicesHeading || `Plumbing Services in ${schemaCity}`}
              </h2>
              <a href="tel:+13016795849" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--brand-blue)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.06em", padding: "10px 18px", borderRadius: "6px", textDecoration: "none", flexShrink: 0 }}>
                Call Now
              </a>
            </div>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.7, marginTop: "10px", maxWidth: "600px" }}>
              Full-service licensed plumbing for residential, commercial, and government clients in {schemaCity}. Every job performed by a licensed Master Plumber.
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
                <Link key={i} href={svc.href} style={{ textDecoration: "none", display: "block" }}>
                  <div
                    className="cursor-pointer"
                    style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(29,108,163,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(29,108,163,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
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
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: "var(--brand-navy)", marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1D6CA3", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
                    </div>
                  </div>
                </Link>
                            ))}
              </div>
            </div>
          ))}

          {/* Well/Septic Callout Box */}
          {wellSepticNote && (
            <div className="mt-8 bg-gray-50 border-l-4 p-5 rounded-r" style={{ borderLeftColor: "var(--brand-cyan)" }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: "8px" }}>
                About Well &amp; Septic Properties
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "14px", lineHeight: 1.7 }}>{wellSepticNote}</p>
            </div>
          )}
        </div>
      </section>

      {/* S3: Emergency CTA strip */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading={`Do you provide 24/7 emergency plumbing in ${schemaCity}?`} />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "16px", lineHeight: 1.7 }}>
              Yes. Emergency plumbing in {schemaCity} is available 24/7, 365 days a year. A live dispatcher answers every call. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. Call (301) 679-5849.
            </p>
          </div>
          <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading={localContextHeading} />
          <div className="max-w-3xl">
            {localContextBody.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-body)', color: "var(--ink-2)", fontSize: "16px", lineHeight: 1.7, marginBottom: "16px" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* S5: Nearby Areas */}
      <section className="py-12 bg-white" style={{ borderTop: "1px solid #E8EFF5" }}>
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading={`Areas near ${schemaCity} we also serve`} />
          <div className="flex flex-wrap gap-3 mb-4">
            {nearbyAreas.map((area, i) => (
              <Link
                key={i}
                href={area.href}
                className="no-underline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "white",
                  border: "1px solid #E8EFF5",
                  color: "var(--brand-cyan)",
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "var(--brand-navy)";
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-navy)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "white";
                  (e.currentTarget as HTMLElement).style.color = "var(--brand-cyan)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <MapPin size={12} />
                {area.label}
              </Link>
            ))}
            <Link
              href={countyHubHref}
              className="no-underline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--brand-blue)",
                color: "white",
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "8px 18px",
                borderRadius: "4px",
              }}
            >
              {countyHubLabel} →
            </Link>
          </div>
        </div>
      </section>

      {/* S6: FAQ */}
      {faqItems.length > 0 && (
        <section className="py-20" style={{ background: "var(--surface-1)" }}>
          <div className="container">
            <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading={`Plumbing FAQ — ${schemaCity}`} />
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} schema={false} />
            </div>
          </div>
        </section>
      )}

      {/* S7: CTA Banner */}
      <CTABanner
        heading={`Need a licensed plumber in ${bottomCtaCity}?`}
        subtext={`Serving ${bottomCtaCity} from our Largo, MD location. ${bottomCtaLicenseLine}  24/7 Emergency  Upfront Pricing.`}
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
