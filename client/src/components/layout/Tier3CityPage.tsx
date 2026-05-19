/**
 * Tier3CityPage — Reusable component for all 36 Tier 3 city/community pages.
 * Design: Navy/Cyan brand system, Playfair Display + Barlow typography.
 *
 * Tier 3 differences from Tier 2:
 * - Single-column bulleted services list (teal checkmarks), not 2-column grid
 * - No standalone license/credentials section (folded into bottom CTA trust strip only)
 * - Well/Septic callout box (styled with left border) when wellSepticNote is provided
 * - DC Ward featured neighborhood cards (featuredNeighborhoods) rendered before services list
 * - Simpler layout, 500–700 word target
 */

import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

      {/* Mobile call bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#003060] text-white flex items-center justify-center py-3 gap-2 shadow-lg">
        <Phone className="w-4 h-4" />
        <a href="tel:+13016795849" className="font-bold text-sm tracking-wide">
          CALL (301) 679-5849 — 24/7 EMERGENCY
        </a>
      </div>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-2 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-1 text-xs text-gray-500 flex-wrap">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3 h-3" />}
              {b.href ? (
                <Link href={b.href} className="hover:text-[#186090] transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{b.label}</span>
              )}
            </span>
          ))}
        </div>
      </nav>

      {/* Hero — white background */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest text-[#186090] uppercase mb-3">
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#003060] mb-5 leading-tight">
            {h1}
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mb-7">
            {intro}
          </p>
          {/* Dual CTA */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="tel:+13016795849"
              className="inline-flex items-center gap-2 bg-[#003060] hover:bg-[#002040] text-white font-bold px-6 py-3 rounded transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              CALL (301) 679-5849
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#003060] text-[#003060] hover:bg-[#003060] hover:text-white font-bold px-6 py-3 rounded transition-colors text-sm"
            >
              Request Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          {/* Trust strip */}
          <div className="flex flex-wrap gap-2">
            {trustItems.map((item, i) => (
              <span
                key={i}
                className="text-xs font-semibold bg-[#E8F4FB] text-[#003060] border border-[#186090]/30 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DC Ward Featured Neighborhood Cards (optional) */}
      {featuredNeighborhoods && featuredNeighborhoods.length > 0 && (
        <section className="bg-[#F0F7FF] py-6 border-y border-[#186090]/20">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-xs font-bold tracking-widest text-[#186090] uppercase mb-3">
              Dedicated Pages Available
            </p>
            <div className="flex flex-wrap gap-3">
              {featuredNeighborhoods.map((n, i) => (
                <Link
                  key={i}
                  href={n.href}
                  className="inline-flex items-center gap-2 border-2 border-[#186090] text-[#186090] hover:bg-[#186090] hover:text-white font-semibold px-4 py-2 rounded transition-colors text-sm"
                >
                  {n.label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services List — surface gray, single-column */}
      <section className="bg-[#F0F0F0] py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#003060] mb-6">
            {servicesHeading || `Services available in ${schemaCity}`}
          </h2>
          <ul className="space-y-3">
            {services.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#186090] flex-shrink-0 mt-0.5" />
                {s.href ? (
                  <Link href={s.href} className="text-gray-800 hover:text-[#186090] transition-colors font-medium">
                    {s.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 font-medium">{s.label}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Well/Septic Callout Box */}
          {wellSepticNote && (
            <div
              className="mt-8 bg-[#F0F0F0] border-l-4 border-[#186090] p-4 rounded-r"
              style={{ borderLeftColor: "#186090" }}
            >
              <h3
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#186090" }}
              >
                About Well &amp; Septic Properties
              </h3>
              <p className="text-sm text-[#484848] leading-relaxed">{wellSepticNote}</p>
            </div>
          )}
        </div>
      </section>

      {/* Local Context — white */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#003060] mb-5">
            {localContextHeading}
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
            {localContextBody.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas — pale blue */}
      <section className="bg-[#C0D8F0] py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#003060]" />
            <h2 className="font-display text-xl font-bold text-[#003060]">Nearby Service Areas</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {nearbyAreas.map((area, i) => (
              <Link
                key={i}
                href={area.href}
                className="bg-white text-[#003060] border border-[#003060]/30 hover:bg-[#003060] hover:text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors"
              >
                {area.label}
              </Link>
            ))}
            <Link
              href={countyHubHref}
              className="bg-[#003060] text-white hover:bg-[#002040] font-semibold px-4 py-2 rounded-full text-sm transition-colors"
            >
              {countyHubLabel} →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — white, only if faqs provided */}
      {faqs && faqs.length > 0 && (
        <section className="bg-white py-10 md:py-14">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#003060] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-[#003060] text-sm md:text-base">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-[#186090] flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA — navy */}
      <section className="bg-[#003060] py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#7EC8E3] text-xs font-bold tracking-widest uppercase mb-3">
            Serving {bottomCtaCity} from Largo, MD
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Plumber in {bottomCtaCity}?
          </h2>
          <p className="text-blue-200 mb-6 text-sm">{bottomCtaLicenseLine}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+13016795849"
              className="inline-flex items-center gap-2 bg-[#186090] hover:bg-[#1070A0] text-white font-bold px-7 py-3 rounded transition-colors"
            >
              <Phone className="w-4 h-4" />
              (301) 679-5849
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#003060] font-bold px-7 py-3 rounded transition-colors"
            >
              Request Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
