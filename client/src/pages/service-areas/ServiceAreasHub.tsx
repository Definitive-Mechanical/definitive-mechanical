/**
 * Service Areas Hub — /service-areas/
 * Lists every city, county, and community page we have built.
 * Design system: Navy var(--brand-navy), Cyan var(--brand-cyan), var(--font-display) / var(--font-body)
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import ServiceAreaSearch from "@/components/ServiceAreaSearch";

const PHONE = BUSINESS.phoneRaw;
const PHONE_DISPLAY = BUSINESS.phone;

const MARYLAND_COUNTIES = [
  {
    county: "Prince George's County",
    hub: "/service-areas/maryland/prince-georges-county/",
    cities: [
      { label: "Largo, MD", href: "/service-areas/maryland/prince-georges-county/largo-md" },
      { label: "Bowie, MD", href: "/service-areas/maryland/prince-georges-county/bowie-md" },
      { label: "Fort Washington, MD", href: "/service-areas/maryland/prince-georges-county/fort-washington-md" },
      { label: "Woodmore, MD", href: "/service-areas/maryland/prince-georges-county/woodmore-md" },
      { label: "Fairwood, MD", href: "/service-areas/maryland/prince-georges-county/fairwood-md" },
      { label: "University Park, MD", href: "/service-areas/maryland/prince-georges-county/university-park-md" },
      { label: "Brock Hall, MD", href: "/service-areas/maryland/prince-georges-county/brock-hall-md" },
      { label: "Queensland, MD", href: "/service-areas/maryland/prince-georges-county/queensland-md" },
      { label: "Croom, MD", href: "/service-areas/maryland/prince-georges-county/croom-md" },
    ],
  },
  {
    county: "Montgomery County",
    hub: "/service-areas/maryland/montgomery-county/",
    cities: [
      { label: "Rockville, MD", href: "/service-areas/maryland/montgomery-county/rockville-md" },
      { label: "Bethesda, MD", href: "/service-areas/maryland/montgomery-county/bethesda-md" },
      { label: "Potomac, MD", href: "/service-areas/maryland/montgomery-county/potomac-md" },
      { label: "Chevy Chase, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-md" },
      { label: "Cabin John, MD", href: "/service-areas/maryland/montgomery-county/cabin-john-md" },
      { label: "Darnestown, MD", href: "/service-areas/maryland/montgomery-county/darnestown-md" },
      { label: "Travilah, MD", href: "/service-areas/maryland/montgomery-county/travilah-md" },
      { label: "Somerset, MD", href: "/service-areas/maryland/montgomery-county/somerset-md" },
      { label: "Martins Additions, MD", href: "/service-areas/maryland/montgomery-county/martins-additions-md" },
      { label: "Chevy Chase Village, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-village-md" },
      { label: "Chevy Chase View, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-view-md" },
      { label: "Brookmont, MD", href: "/service-areas/maryland/montgomery-county/brookmont-md" },
    ],
  },
  {
    county: "Howard County",
    hub: "/service-areas/maryland/howard-county/",
    cities: [
      { label: "Ellicott City, MD", href: "/service-areas/maryland/howard-county/ellicott-city-md" },
      { label: "Clarksville, MD", href: "/service-areas/maryland/howard-county/clarksville-md" },
      { label: "Glenelg, MD", href: "/service-areas/maryland/howard-county/glenelg-md" },
      { label: "Highland, MD", href: "/service-areas/maryland/howard-county/highland-md" },
      { label: "Fulton, MD", href: "/service-areas/maryland/howard-county/fulton-md" },
      { label: "West Friendship, MD", href: "/service-areas/maryland/howard-county/west-friendship-md" },
      { label: "Scaggsville, MD", href: "/service-areas/maryland/howard-county/scaggsville-md" },
    ],
  },
  {
    county: "Anne Arundel County",
    hub: "/service-areas/maryland/anne-arundel-county/",
    cities: [
      { label: "Galesville, MD", href: "/service-areas/maryland/anne-arundel-county/galesville-md" },
      { label: "Crownsville, MD", href: "/service-areas/maryland/anne-arundel-county/crownsville-md" },
      { label: "Riva, MD", href: "/service-areas/maryland/anne-arundel-county/riva-md" },
    ],
  },
  {
    county: "Charles County",
    hub: "/service-areas/maryland/charles-county/",
    cities: [
      { label: "Waldorf, MD", href: "/service-areas/maryland/charles-county/waldorf-md" },
      { label: "Bensville, MD", href: "/service-areas/maryland/charles-county/bensville-md" },
    ],
  },
];

const DC_AREAS = [
  { label: "Washington DC (Hub)", href: "/service-areas/washington-dc" },
  { label: "Ward 1 — Columbia Heights / Adams Morgan", href: "/service-areas/washington-dc/ward-1" },
  { label: "Ward 2 — Georgetown / Dupont Circle / Foggy Bottom", href: "/service-areas/washington-dc/ward-2" },
  { label: "Ward 3 — Cleveland Park / Tenleytown / Chevy Chase DC", href: "/service-areas/washington-dc/ward-3" },
  { label: "Ward 4 — Petworth / Brightwood / 16th Street Heights", href: "/service-areas/washington-dc/ward-4" },
  { label: "Ward 5 — Brookland / Brentwood / NoMa", href: "/service-areas/washington-dc/ward-5" },
  { label: "Ward 6 — Capitol Hill / Navy Yard / Eastern Market", href: "/service-areas/washington-dc/ward-6" },
  { label: "Ward 7 — Deanwood / Hillcrest / Fort Dupont", href: "/service-areas/washington-dc/ward-7" },
  { label: "Ward 8 — Congress Heights / Anacostia / Bellevue", href: "/service-areas/washington-dc/ward-8" },
  { label: "Georgetown", href: "/service-areas/washington-dc/georgetown" },
  { label: "Capitol Hill", href: "/service-areas/washington-dc/capitol-hill" },
  { label: "Dupont Circle", href: "/service-areas/washington-dc/dupont-circle" },
  { label: "Navy Yard", href: "/service-areas/washington-dc/navy-yard" },
  { label: "NoMa", href: "/service-areas/washington-dc/noma" },
];

const VA_COUNTIES = [
  {
    county: "Fairfax County",
    hub: "/service-areas/northern-virginia/fairfax-county/",
    cities: [
      { label: "Alexandria, VA", href: "/service-areas/northern-virginia/fairfax-county/alexandria-va" },
      { label: "McLean, VA", href: "/service-areas/northern-virginia/fairfax-county/mclean-va" },
      { label: "Springfield, VA", href: "/service-areas/northern-virginia/fairfax-county/springfield-va" },
      { label: "Vienna, VA", href: "/service-areas/northern-virginia/fairfax-county/vienna-va" },
      { label: "Great Falls, VA", href: "/service-areas/northern-virginia/fairfax-county/great-falls-va" },
      { label: "Dunn Loring, VA", href: "/service-areas/northern-virginia/fairfax-county/dunn-loring-va" },
      { label: "Floris, VA", href: "/service-areas/northern-virginia/fairfax-county/floris-va" },
      { label: "Crosspointe, VA", href: "/service-areas/northern-virginia/fairfax-county/crosspointe-va" },
      { label: "Difficult Run, VA", href: "/service-areas/northern-virginia/fairfax-county/difficult-run-va" },
      { label: "Great Falls Crossing, VA", href: "/service-areas/northern-virginia/fairfax-county/great-falls-crossing-va" },
      { label: "South Run, VA", href: "/service-areas/northern-virginia/fairfax-county/south-run-va" },
      { label: "Union Mill, VA", href: "/service-areas/northern-virginia/fairfax-county/union-mill-va" },
      { label: "Wolf Trap, VA", href: "/service-areas/northern-virginia/fairfax-county/wolf-trap-va" },
    ],
  },
  {
    county: "Arlington County",
    hub: "/service-areas/northern-virginia/arlington-county/",
    cities: [
      { label: "Arlington, VA", href: "/service-areas/northern-virginia/arlington-county/arlington-va" },
    ],
  },
  {
    county: "Loudoun County",
    hub: "/service-areas/northern-virginia/loudoun-county/",
    cities: [
      { label: "Brambleton, VA", href: "/service-areas/northern-virginia/loudoun-county/brambleton-va" },
      { label: "One Loudoun, VA", href: "/service-areas/northern-virginia/loudoun-county/one-loudoun-va" },
      { label: "Belmont, VA", href: "/service-areas/northern-virginia/loudoun-county/belmont-va" },
      { label: "Broadlands, VA", href: "/service-areas/northern-virginia/loudoun-county/broadlands-va" },
    ],
  },
  {
    county: "Prince William County",
    hub: "/service-areas/northern-virginia/prince-william-county/",
    cities: [
      { label: "Bull Run Mountain Estates, VA", href: "/service-areas/northern-virginia/prince-william-county/bull-run-mountain-va" },
      { label: "Independent Hill, VA", href: "/service-areas/northern-virginia/prince-william-county/independent-hill-va" },
      { label: "Buckhall, VA", href: "/service-areas/northern-virginia/prince-william-county/buckhall-va" },
    ],
  },
];

export default function ServiceAreasHub() {
  return (
    <>
      <Helmet>
        <title>Plumbing Service Areas | MD, Washington DC and Northern VA | Definitive Mechanical</title>
        <meta
          name="description"
          content="Definitive Mechanical serves Maryland (PG County, Montgomery, Howard, Anne Arundel, Charles), Washington DC, and Northern Virginia (Fairfax, Arlington, Loudoun, Prince William). Licensed Master Plumber in all jurisdictions."
        />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/" />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-[var(--surface-1)] py-2 px-4 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <nav className="font-sans text-sm text-[#787878]">
            <Link href="/" className="hover:text-[var(--brand-cyan)] transition-colors">Home</Link>
            <span className="mx-2">&#8250;</span>
            <span className="text-[var(--ink-2)]">Service Areas</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--brand-navy)] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-widest text-[var(--brand-cyan)] mb-3">
            Licensed in Maryland · Washington DC · Virginia · Delaware
          </p>
          <h1 className="font-['Barlow_Condensed'] uppercase tracking-wide font-bold text-white text-[clamp(28px,4vw,38px)] leading-tight mb-5 max-w-3xl">
            Plumbing Service Areas
          </h1>
          <p className="font-sans text-white/90 text-[17px] leading-relaxed max-w-2xl mb-8">
            Definitive Mechanical is a licensed Master Plumber and Master Gasfitter serving the entire Maryland-DC-Northern Virginia metro area. We cover Prince George's County, Montgomery County, Howard County, Anne Arundel County, Charles County, all eight DC wards, Fairfax County, Arlington County, Loudoun County, and Prince William County with 24/7 emergency response throughout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-[var(--brand-cyan)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[#00b8e6] transition-colors"
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
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Maryland", href: "/service-areas/maryland" },
              { label: "Washington DC", href: "/service-areas/washington-dc" },
              { label: "Northern Virginia", href: "/service-areas/northern-virginia" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-wide bg-white/10 text-white border border-white/30 px-4 py-2 rounded-sm hover:bg-[var(--brand-cyan)] hover:text-[var(--brand-navy)] hover:border-[var(--brand-cyan)] transition-colors"
              >
                {r.label} &#8594;
              </Link>
            ))}
          </div>

          {/* Zip Code Lookup */}
          <div style={{ marginTop: '32px' }}>
            <ServiceAreaSearch variant="hero" />
          </div>
        </div>
      </section>

      {/* Maryland */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-[var(--brand-cyan)]" />
            <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)]">
              Maryland Service Areas
            </h2>
            <Link href="/service-areas/maryland" className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-wide text-[var(--brand-cyan)] hover:underline ml-2">
              View Maryland Hub &#8594;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARYLAND_COUNTIES.map((county) => (
              <div key={county.county} className="bg-white border border-[var(--border)] rounded-md overflow-hidden hover:shadow-md transition-shadow" style={{ borderTop: "3px solid var(--brand-cyan)" }}>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-['Barlow_Condensed'] font-bold text-[var(--brand-navy)] text-xs uppercase tracking-widest">
                      {county.county}
                    </p>
                    <Link href={county.hub} className="font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-wide text-[var(--brand-cyan)] hover:underline">
                      Hub &#8594;
                    </Link>
                  </div>
                  <ul className="space-y-1.5">
                    {county.cities.map((city) => (
                      <li key={city.href}>
                        <Link
                          href={city.href}
                          className="font-sans text-[var(--ink-2)] text-sm hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-1"
                        >
                          <ArrowRight className="w-3 h-3 text-[var(--brand-cyan)] flex-shrink-0" />
                          {city.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Washington DC */}
      <section className="bg-[var(--surface-1)] py-16 px-4 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-[var(--brand-cyan)]" />
            <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)]">
              Washington DC Service Areas
            </h2>
            <Link href="/service-areas/washington-dc" className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-wide text-[var(--brand-cyan)] hover:underline ml-2">
              View DC Hub &#8594;
            </Link>
          </div>
          <div className="bg-white border border-[var(--border)] rounded-md overflow-hidden" style={{ borderTop: "3px solid var(--brand-cyan)" }}>
            <div className="p-6">
              <p className="font-['Barlow_Condensed'] font-bold text-[var(--brand-navy)] text-xs uppercase tracking-widest mb-4">
                All 8 Wards + Featured Neighborhoods
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                {DC_AREAS.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="font-sans text-[var(--ink-2)] text-sm hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-1 py-1"
                  >
                    <ArrowRight className="w-3 h-3 text-[var(--brand-cyan)] flex-shrink-0" />
                    {area.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Northern Virginia */}
      <section className="bg-white py-16 px-4 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-[var(--brand-cyan)]" />
            <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-semibold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)]">
              Northern Virginia Service Areas
            </h2>
            <Link href="/service-areas/northern-virginia" className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-wide text-[var(--brand-cyan)] hover:underline ml-2">
              View NoVA Hub &#8594;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VA_COUNTIES.map((county) => (
              <div key={county.county} className="bg-white border border-[var(--border)] rounded-md overflow-hidden hover:shadow-md transition-shadow" style={{ borderTop: "3px solid var(--brand-cyan)" }}>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-['Barlow_Condensed'] font-bold text-[var(--brand-navy)] text-xs uppercase tracking-widest">
                      {county.county}
                    </p>
                    <Link href={county.hub} className="font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-wide text-[var(--brand-cyan)] hover:underline">
                      Hub &#8594;
                    </Link>
                  </div>
                  <ul className="space-y-1.5">
                    {county.cities.map((city) => (
                      <li key={city.href}>
                        <Link
                          href={city.href}
                          className="font-sans text-[var(--ink-2)] text-sm hover:text-[var(--brand-cyan)] transition-colors flex items-center gap-1"
                        >
                          <ArrowRight className="w-3 h-3 text-[var(--brand-cyan)] flex-shrink-0" />
                          {city.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-[var(--brand-navy)] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Barlow_Condensed'] text-xs font-bold uppercase tracking-widest text-[var(--brand-cyan)] mb-5 text-center">
            Licensed in Every Jurisdiction We Serve
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "MD Master Plumber #96958",
              "DC Master Plumber #PGM1002236",
              "VA Master Plumber #2710064209",
              "WSSC Backflow Tester #73696",
              "MDOT MBE Cert 20-134",
              "VA SWaM Cert 815255",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-cyan)] flex-shrink-0" />
                <span className="font-sans text-white/80 text-xs">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F7F9FC] py-12 px-4 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Barlow_Condensed'] uppercase tracking-wide font-bold text-[var(--brand-navy)] text-[clamp(22px,3vw,30px)] mb-3">
            Don't See Your City? Call Us.
          </h2>
          <p className="font-sans text-[var(--ink-2)] text-[17px] leading-relaxed mb-6 max-w-xl mx-auto">
            Our service area is expanding. If you don't see your community listed, call us — we likely serve your area or can refer you to a trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-[var(--brand-navy)] text-white font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[#004080] transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--brand-navy)] text-[var(--brand-navy)] font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide py-4 px-8 rounded-sm hover:bg-[var(--brand-navy)] hover:text-white transition-colors"
            >
              REQUEST SERVICE <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
