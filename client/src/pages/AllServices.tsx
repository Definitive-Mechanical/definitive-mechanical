/**
 * Plumbing Services Hub — /plumbing/
 * Session 7 full spec rebuild: 7 category cards, installations checklist,
 * emergency CTA, service areas, credential badges, FAQ accordion, bottom CTA
 * Schema: Service + LocalBusiness + Plumber + FAQPage + BreadcrumbList
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Phone, ArrowRight, Zap, Droplets, Flame, Wrench, Shield,
  Home, Building2, Landmark, CheckCircle2, ChevronDown, Thermometer
} from "lucide-react";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

const PHONE = BUSINESS.phoneRaw;
const PHONE_DISPLAY = BUSINESS.phone;

const serviceCategories = [
  {
    iconName: "Zap",
    category: "EMERGENCY PLUMBING",
    services: [
      { label: "24/7 Emergency Plumbing", href: "/emergency-plumbing/" },
      { label: "Emergency Plumber Largo, MD", href: "/emergency-plumber-largo-md/" },
      { label: "Emergency Plumber Washington, DC", href: "/emergency-plumber-washington-dc/" },
      { label: "Emergency Plumber Alexandria, VA", href: "/emergency-plumber-alexandria-va/" },
      { label: "Emergency Plumber Arlington, VA", href: "/emergency-plumber-arlington-va/" },
    ],
    note: "Live dispatcher on call around the clock.",
  },
  {
    iconName: "Droplets",
    category: "DRAIN & SEWER",
    services: [
      { label: "Drain Cleaning", href: "/drain-cleaning/" },
      { label: "Hydro-Jetting", href: "/hydro-jetting/" },
      { label: "Video Camera Inspection", href: "/video-camera-inspection/" },
      { label: "Sewer Line Repair", href: "/sewer-line-repair/" },
      { label: "Sewer Line Installation", href: "/sewer-line-installation/" },
    ],
    note: "",
  },
  {
    iconName: "Flame",
    category: "WATER HEATERS",
    services: [
      { label: "Water Heater Repair", href: "/water-heater-repair/" },
      { label: "Water Heater Installation", href: "/water-heater-installation/" },
      { label: "Tankless Water Heaters", href: "/tankless-water-heaters/" },
    ],
    note: "Financing available through Synchrony.",
  },
  {
    iconName: "Flame",
    category: "GAS LINE SERVICES",
    services: [
      { label: "Gas Line Repair", href: "/gas-line-repair/" },
      { label: "Gas Line Installation", href: "/gas-line-installation/" },
      { label: "Gas Leak Response", href: "/gas-leak-repair/" },
    ],
    note: "Licensed Master Gasfitters in MD, DC & VA.",
  },
  {
    iconName: "Droplets",
    category: "WATER LINES",
    services: [
      { label: "Water Line Repair", href: "/water-line-repair/" },
      { label: "Water Line Installation", href: "/water-line-installation/" },
    ],
    note: "",
  },
  {
    iconName: "Shield",
    category: "BACKFLOW SERVICES",
    services: [
      { label: "Backflow Prevention", href: "/backflow-prevention/" },
      { label: "Annual Backflow Certification", href: "/backflow-certification/" },
      { label: "Backflow Preventer Repair", href: "/backflow-preventer-repair/" },
    ],
    note: "WSSC, DC Water, Fairfax Water, Loudoun Water certified testing.",
  },
  {
    iconName: "Wrench",
    category: "FIXTURES",
    services: [
      { label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair/" },
    ],
    note: "Faucets, fixtures, toilets, and shut-off valves.",
  },
  {
    iconName: "Thermometer",
    category: "HEATING",
    services: [
      { label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair/" },
      { label: "Boiler & Furnace Installation", href: "/boiler-furnace-installation/" },
    ],
    note: "Hydronic heating systems, boilers, and furnaces.",
  },
];

const iconMap: Record<string, React.ElementType> = { Zap, Droplets, Flame, Wrench, Shield, Thermometer };

const installations = [
  "Water heater replacement (gas, electric, tankless) with permit and inspection coordination",
  "Water service line replacement — from the meter to the house",
  "Sewer lateral replacement — from the house to the public main",
  "Gas line installation for new appliances: stoves, dryers, generators, outdoor grills",
  "Backflow preventer installation and annual certification",
  "Boiler and hydronic heating system installation",
  "Commercial restroom and kitchen plumbing buildout",
  "Fixture and faucet installation",
];

const faqs = [
  {
    q: "What plumbing services do you offer?",
    a: "We provide the full range of licensed plumbing and gas services: emergency response, drain cleaning, sewer line repair and replacement, water heater repair and installation, tankless water heaters, gas line repair and installation, gas leak response, backflow prevention and certification, water line repair, boiler and furnace service, and faucet and toilet repair — for residential, commercial, and government clients across MD, DC, and Northern Virginia.",
  },
  {
    q: "Are you licensed in Maryland, DC, and Virginia?",
    a: "Yes. We hold active Master Plumber/Gasfitter licenses in Maryland (#96958), Washington DC (#PGM1002236), and Virginia (#2710064209), plus county-specific licenses in Howard County, Anne Arundel County, and the City of Rockville. We are also licensed in Delaware (#PL-0012866).",
  },
  {
    q: "How fast can you come for an emergency?",
    a: "Emergency calls are dispatched immediately 24/7. Most addresses within our core service area receive a response within 45-75 minutes. From our Largo, MD location, PG County and nearby communities receive our fastest emergency response times.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. Financing is available through Synchrony for qualifying repairs and installations.",
  },
  {
    q: "Do you provide estimates?",
    a: "We provide written estimates before work begins on all scheduled jobs. For emergency calls, we assess the situation and provide pricing before starting repairs. We do not charge you for arriving and telling you what is wrong.",
  },
];

const navyBadges = [
  "MD Master Plumber #96958",
  "DC Master Plumber #PGM1002236",
  "VA Master Plumber #2710064209",
  "DE Master Plumber #PL-0012866",
  "WSSC #73696",
  "Howard County #20020096958",
  "Anne Arundel County #A2-6139",
  "City of Rockville #PLL-0002113",
];

const tealBadges = [
  "24/7 Emergency",
  "11 Years in Business",
  "Financing Available",
  "Commercial & Residential",
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness", "Plumber"],
    "name": "Plumbing Services — Definitive Mechanical",
    "serviceType": "Plumbing",
    "description": "Licensed residential and commercial plumbing services across Maryland, Washington DC, and Northern Virginia.",
    "areaServed": ["Maryland", "Washington DC", "Northern Virginia"],
    "provider": {
      "@type": "LocalBusiness",
      "name": "Definitive Mechanical",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9701 Apollo Drive, Suite 100",
        "addressLocality": "Largo",
        "addressRegion": "MD",
        "postalCode": "20774",
      },
      "telephone": "+13016795849",
      "url": "https://definitivemechanical.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
      { "@type": "ListItem", "position": 2, "name": "Plumbing Services", "item": "https://definitivemechanical.com/plumbing/" },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#C0D8F0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-[var(--brand-navy)] text-[17px] leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="bg-[#C0D8F0] border-l-[3px] border-[var(--brand-cyan)] px-5 py-4 mb-2 font-sans text-[var(--ink-2)] text-base leading-[1.7]">
          {a}
        </div>
      )}
    </div>
  );
}

export default function AllServices() {
  return (
    <>
      <Helmet>
        <title>Plumbing Services in MD, DC &amp; Northern VA | Definitive Mechanical</title>
        <meta
          name="description"
          content="Need licensed plumbing service? Definitive Mechanical handles repairs, installations, leaks, drains, water heaters, gas, and more across MD, DC &amp; Northern VA. Call (301) 679-5849."
        />
        <link rel="canonical" href="https://definitivemechanical.com/plumbing/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-[var(--surface-1)] py-2 px-4 border-b border-[#C0D8F0]">
        <div className="max-w-6xl mx-auto">
          <nav className="font-sans text-sm text-[#787878]">
            <Link href="/" className="hover:text-[var(--brand-cyan)] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-[var(--ink-2)]">Plumbing Services</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-widest text-[var(--brand-cyan)] mb-3">
            Licensed Plumbing Services  Maryland  Washington DC  Northern Virginia
          </p>
          <h1 className="font-['Barlow_Condensed'] uppercase tracking-wide font-bold text-white text-[clamp(28px,4vw,38px)] leading-tight mb-5 max-w-3xl">
            Plumbing Services in Maryland, DC &amp; Northern Virginia
          </h1>
          <p className="font-sans text-white/90 text-[17px] leading-relaxed max-w-2xl mb-8">
            Definitive Mechanical provides residential and commercial plumbing services throughout Maryland, Washington DC, and Northern Virginia. We are licensed as Master Plumber and Master Gasfitter in all three jurisdictions — Maryland (#96958), DC (#PGM1002236), and Virginia (#2710064209) — and have served the DC metro area for over 11 years. Every job is handled by a licensed technician. Upfront pricing in writing before work begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[var(--brand-blue-hover)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-white hover:text-[var(--brand-navy)] transition-colors"
            >
              REQUEST SERVICE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["11 Years in Business", "Licensed Master Plumber/Gasfitter MD  DC  VA", "MDOT MBE Cert 20-134", "VA SWaM Cert 815255", "24/7 Emergency", "Financing Available"].map((t) => (
              <span key={t} className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-wide text-white/70">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Category Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)] mb-10">
            What plumbing repairs do you handle?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => {
              const Icon = iconMap[cat.iconName] || Wrench;
              return (
                <div
                  key={cat.category}
                  className="bg-white border border-[#C0D8F0] rounded-md overflow-hidden hover:shadow-md transition-shadow"
                  style={{ borderTop: "3px solid var(--brand-cyan)" }}
                >
                  <div className="p-6">
                    <div className="w-10 h-10 bg-[var(--brand-cyan)]/10 rounded-sm flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[var(--brand-cyan)]" />
                    </div>
                    <p className="font-['Barlow_Condensed'] font-bold text-[var(--brand-blue)] text-xs uppercase tracking-widest mb-4">
                      {cat.category}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {cat.services.map((svc) => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            className="font-sans text-[var(--ink-2)] text-sm hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-1"
                          >
                            <ArrowRight className="w-3 h-3 text-[var(--brand-cyan)] flex-shrink-0" />
                            {svc.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {cat.note && (
                      <p className="font-sans text-[#787878] text-xs leading-relaxed border-t border-[#C0D8F0] pt-3">
                        {cat.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installations */}
      <section className="bg-white py-12 px-4 border-t border-[#C0D8F0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)] mb-4">
            What plumbing installations do you do?
          </h2>
          <p className="font-sans text-[var(--ink-2)] text-[17px] mb-8 max-w-2xl">
            We handle full plumbing installations for new construction, renovation, and system replacement:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {installations.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                <span className="font-sans text-[var(--ink-2)] text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-[var(--ink-2)] text-base">
            All installation work includes permit filing, inspection scheduling, and completion documentation where required.
          </p>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-[var(--brand-navy)] py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-white text-[clamp(22px,3vw,30px)] mb-5">
            Do you handle emergency plumbing?
          </h2>
          <p className="font-sans text-[#C0D8F0] text-[17px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Yes — 24 hours a day, 7 days a week, including holidays. Our emergency line is answered by a live person, not a call center. We dispatch immediately for burst pipes, sewer backups, gas leaks, flooding, and any situation where delay will cause significant damage.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-xl uppercase tracking-wide py-5 px-10 rounded-sm hover:bg-[var(--brand-blue-hover)] transition-colors mb-8"
          >
            <Phone className="w-5 h-5" />
            CALL {PHONE_DISPLAY} — 24/7
          </a>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Emergency Plumber in Largo, MD", href: "/emergency-plumber-largo-md/" },
              { label: "Emergency Plumber in Washington, DC", href: "/emergency-plumber-washington-dc/" },
              { label: "Emergency Plumber in Alexandria, VA", href: "/emergency-plumber-alexandria-va/" },
              { label: "Emergency Plumber in Arlington, VA", href: "/emergency-plumber-arlington-va/" },
              { label: "Emergency Plumber in Rockville, MD", href: "/emergency-plumber-rockville-md/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wide text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/40 px-4 py-2 rounded-full hover:bg-[var(--brand-cyan)]/10 transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-[var(--surface-1)] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)] mb-4">
            What areas do you serve?
          </h2>
          <p className="font-sans text-[var(--ink-2)] text-[17px] mb-10 max-w-2xl">
            We serve Maryland, Washington DC, and Northern Virginia — covering more than 50 communities across five Maryland counties, all eight DC wards, and four Northern Virginia counties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Maryland", href: "/service-areas/maryland/", desc: "Prince George's, Montgomery, Howard, Anne Arundel, Charles Counties" },
              { label: "Washington DC", href: "/service-areas/washington-dc/", desc: "All eight wards — residential, commercial, and government" },
              { label: "Northern Virginia", href: "/service-areas/northern-virginia/", desc: "Fairfax, Arlington, Loudoun, Prince William Counties" },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-white border border-[#C0D8F0] rounded-sm p-6 hover:border-[var(--brand-cyan)] hover:shadow-sm transition-all group block"
                style={{ borderLeft: "4px solid var(--brand-navy)" }}
              >
                <p className="font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-2">
                  Service Area
                </p>
                <p className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-xl mb-2">{area.label}</p>
                <p className="font-sans text-[var(--ink-2)] text-sm mb-4">{area.desc}</p>
                <span className="font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-wide text-[var(--brand-cyan)] flex items-center gap-1">
                  {area.label} service areas <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Residential & Commercial */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)] mb-6">
            Do you serve both residential and commercial clients?
          </h2>
          <p className="font-sans text-[var(--ink-2)] text-[17px] mb-10">Yes. Definitive Mechanical serves:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Home,
                label: "RESIDENTIAL HOMEOWNERS",
                body: "Repairs, installations, emergency response, water heaters, gas lines, and drain cleaning — across the DC metro area.",
                link: null,
              },
              {
                Icon: Building2,
                label: "COMMERCIAL FACILITY MANAGERS",
                body: "Planned maintenance, backflow certification, commercial drain and gas service, and emergency commercial response.",
                link: { label: "Commercial Plumbing ->", href: "/commercial-plumbing/" },
              },
              {
                Icon: Landmark,
                label: "GOVERNMENT & MUNICIPAL CLIENTS",
                body: "MDOT MBE Certified (No. 20-134), Virginia SWaM Certified (No. 815255), CAGE Code 8HCF6, NAICS 238220.",
                link: { label: "Government/Municipal Plumbing ->", href: "/government-municipal-plumbing/" },
              },
            ].map((block) => (
              <div key={block.label} className="flex flex-col">
                <div className="w-12 h-12 bg-[var(--brand-cyan)]/10 rounded-sm flex items-center justify-center mb-4">
                  <block.Icon className="w-6 h-6 text-[var(--brand-cyan)]" />
                </div>
                <p className="font-['Barlow_Condensed'] font-bold text-[var(--brand-navy)] text-sm uppercase tracking-wide mb-3">
                  {block.label}
                </p>
                <p className="font-sans text-[var(--ink-2)] text-base leading-relaxed mb-3">{block.body}</p>
                {block.link && (
                  <Link href={block.link.href} className="font-['Barlow_Condensed'] font-bold text-sm text-[var(--brand-cyan)] hover:underline">
                    {block.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Badge Grid */}
      <section className="bg-[var(--surface-1)] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {navyBadges.map((b) => (
              <span
                key={b}
                className="font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-wide text-white bg-[var(--brand-navy)] px-3 py-1.5 rounded-sm"
              >
                {b}
              </span>
            ))}
            {tealBadges.map((b) => (
              <span
                key={b}
                className="font-['Barlow_Condensed'] font-bold text-xs uppercase tracking-wide text-white bg-[var(--brand-cyan)] px-3 py-1.5 rounded-sm"
              >
                {b}
              </span>
            ))}
          </div>
          <Link href="/licenses-certifications/" className="font-sans text-[#787878] text-sm hover:text-[var(--brand-cyan)] transition-colors">
            View all licenses and certifications →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)] mb-8">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--brand-navy)] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-widest text-[var(--brand-cyan)] mb-3">
            LICENSED PLUMBING  MD, DC &amp; NORTHERN VIRGINIA
          </p>
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-bold text-white text-[clamp(24px,3vw,34px)] mb-8">
            Request plumbing service in MD, DC or Northern VA
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[var(--brand-blue-hover)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-white hover:text-[var(--brand-navy)] transition-colors"
            >
              REQUEST SERVICE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="font-sans text-[#C0D8F0] text-sm">
            Definitive Mechanical  9701 Apollo Drive, Suite 100  Largo, MD 20774
          </p>
          <p className="font-sans text-[#C0D8F0] text-sm mt-1">
            MD Master Plumber #96958 | DC #PGM1002236 | VA #2710064209 | MDOT MBE Cert 20-134
          </p>
        </div>
      </section>

      {/* Sticky Mobile Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 w-full bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide h-14"
        >
          <Phone className="w-4 h-4" />
          CALL {PHONE_DISPLAY} — 24/7 EMERGENCY
        </a>
      </div>
    </>
  );
}
