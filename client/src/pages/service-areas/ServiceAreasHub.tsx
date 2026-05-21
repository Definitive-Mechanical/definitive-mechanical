/**
 * Service Areas Hub — /service-areas/
 * Design system: var(--font-display) Barlow Condensed, var(--font-body) Public Sans,
 * var(--brand-navy), var(--brand-cyan), var(--brand-red)
 * Matches MarylandHub / WashingtonDCHub / NorthernVirginiaHub styling.
 */

import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Shield, Clock, Award, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import ServiceAreaSearch from "@/components/ServiceAreaSearch";

const MARYLAND_COUNTIES = [
  {
    county: "Prince George's County",
    hub: "/service-areas/maryland/prince-georges-county/",
    cities: [
      { label: "Largo", href: "/service-areas/maryland/prince-georges-county/largo-md" },
      { label: "Bowie", href: "/service-areas/maryland/prince-georges-county/bowie-md" },
      { label: "Fort Washington", href: "/service-areas/maryland/prince-georges-county/fort-washington-md" },
      { label: "Woodmore", href: "/service-areas/maryland/prince-georges-county/woodmore-md" },
      { label: "Fairwood", href: "/service-areas/maryland/prince-georges-county/fairwood-md" },
      { label: "University Park", href: "/service-areas/maryland/prince-georges-county/university-park-md" },
      { label: "Brock Hall", href: "/service-areas/maryland/prince-georges-county/brock-hall-md" },
      { label: "Queensland", href: "/service-areas/maryland/prince-georges-county/queensland-md" },
      { label: "Croom", href: "/service-areas/maryland/prince-georges-county/croom-md" },
    ],
  },
  {
    county: "Montgomery County",
    hub: "/service-areas/maryland/montgomery-county/",
    cities: [
      { label: "Rockville", href: "/service-areas/maryland/montgomery-county/rockville-md" },
      { label: "Bethesda", href: "/service-areas/maryland/montgomery-county/bethesda-md" },
      { label: "Potomac", href: "/service-areas/maryland/montgomery-county/potomac-md" },
      { label: "Chevy Chase", href: "/service-areas/maryland/montgomery-county/chevy-chase-md" },
      { label: "Cabin John", href: "/service-areas/maryland/montgomery-county/cabin-john-md" },
      { label: "Darnestown", href: "/service-areas/maryland/montgomery-county/darnestown-md" },
      { label: "Travilah", href: "/service-areas/maryland/montgomery-county/travilah-md" },
      { label: "Somerset", href: "/service-areas/maryland/montgomery-county/somerset-md" },
      { label: "Martins Additions", href: "/service-areas/maryland/montgomery-county/martins-additions-md" },
      { label: "Chevy Chase Village", href: "/service-areas/maryland/montgomery-county/chevy-chase-village-md" },
      { label: "Chevy Chase View", href: "/service-areas/maryland/montgomery-county/chevy-chase-view-md" },
      { label: "Brookmont", href: "/service-areas/maryland/montgomery-county/brookmont-md" },
    ],
  },
  {
    county: "Howard County",
    hub: "/service-areas/maryland/howard-county/",
    cities: [
      { label: "Ellicott City", href: "/service-areas/maryland/howard-county/ellicott-city-md" },
      { label: "Clarksville", href: "/service-areas/maryland/howard-county/clarksville-md" },
      { label: "Glenelg", href: "/service-areas/maryland/howard-county/glenelg-md" },
      { label: "Highland", href: "/service-areas/maryland/howard-county/highland-md" },
      { label: "Fulton", href: "/service-areas/maryland/howard-county/fulton-md" },
      { label: "West Friendship", href: "/service-areas/maryland/howard-county/west-friendship-md" },
      { label: "Scaggsville", href: "/service-areas/maryland/howard-county/scaggsville-md" },
    ],
  },
  {
    county: "Anne Arundel County",
    hub: "/service-areas/maryland/anne-arundel-county/",
    cities: [
      { label: "Galesville", href: "/service-areas/maryland/anne-arundel-county/galesville-md" },
      { label: "Crownsville", href: "/service-areas/maryland/anne-arundel-county/crownsville-md" },
      { label: "Riva", href: "/service-areas/maryland/anne-arundel-county/riva-md" },
    ],
  },
  {
    county: "Charles County",
    hub: "/service-areas/maryland/charles-county/",
    cities: [
      { label: "Waldorf", href: "/service-areas/maryland/charles-county/waldorf-md" },
      { label: "Bensville", href: "/service-areas/maryland/charles-county/bensville-md" },
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
      { label: "Alexandria", href: "/service-areas/northern-virginia/fairfax-county/alexandria-va" },
      { label: "McLean", href: "/service-areas/northern-virginia/fairfax-county/mclean-va" },
      { label: "Springfield", href: "/service-areas/northern-virginia/fairfax-county/springfield-va" },
      { label: "Vienna", href: "/service-areas/northern-virginia/fairfax-county/vienna-va" },
      { label: "Great Falls", href: "/service-areas/northern-virginia/fairfax-county/great-falls-va" },
      { label: "Dunn Loring", href: "/service-areas/northern-virginia/fairfax-county/dunn-loring-va" },
      { label: "Floris", href: "/service-areas/northern-virginia/fairfax-county/floris-va" },
      { label: "Crosspointe", href: "/service-areas/northern-virginia/fairfax-county/crosspointe-va" },
      { label: "Difficult Run", href: "/service-areas/northern-virginia/fairfax-county/difficult-run-va" },
      { label: "South Run", href: "/service-areas/northern-virginia/fairfax-county/south-run-va" },
      { label: "Wolf Trap", href: "/service-areas/northern-virginia/fairfax-county/wolf-trap-va" },
    ],
  },
  {
    county: "Arlington County",
    hub: "/service-areas/northern-virginia/arlington-county/",
    cities: [
      { label: "Arlington", href: "/service-areas/northern-virginia/arlington-county/arlington-va" },
    ],
  },
  {
    county: "Loudoun County",
    hub: "/service-areas/northern-virginia/loudoun-county/",
    cities: [
      { label: "Brambleton", href: "/service-areas/northern-virginia/loudoun-county/brambleton-va" },
      { label: "One Loudoun", href: "/service-areas/northern-virginia/loudoun-county/one-loudoun-va" },
      { label: "Belmont", href: "/service-areas/northern-virginia/loudoun-county/belmont-va" },
      { label: "Broadlands", href: "/service-areas/northern-virginia/loudoun-county/broadlands-va" },
    ],
  },
  {
    county: "Prince William County",
    hub: "/service-areas/northern-virginia/prince-william-county/",
    cities: [
      { label: "Bull Run Mountain Estates", href: "/service-areas/northern-virginia/prince-william-county/bull-run-mountain-va" },
      { label: "Independent Hill", href: "/service-areas/northern-virginia/prince-william-county/independent-hill-va" },
      { label: "Buckhall", href: "/service-areas/northern-virginia/prince-william-county/buckhall-va" },
    ],
  },
];

const CREDENTIALS = [
  "MD Master Plumber #96958",
  "DC Master Plumber #PGM1002236",
  "VA Master Plumber #2710064209",
  "WSSC Backflow Tester #73696",
  "MDOT MBE Cert 20-134",
  "VA SWaM Cert 815255",
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
      <div style={{ background: '#f8f9fa', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#6b7280' }}>
            <Link href="/" style={{ color: 'var(--brand-cyan)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#374151' }}>Service Areas</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--brand-blue)', padding: '64px 0 48px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            Licensed in Maryland  Washington DC  Virginia  Delaware
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '20px', textTransform: 'uppercase' }}>
            Plumbing Service Areas
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6, marginBottom: '32px' }}>
            Definitive Mechanical is a licensed Master Plumber and Master Gasfitter serving the entire Maryland-DC-Northern Virginia metro area. We cover Prince George's County, Montgomery County, Howard County, Anne Arundel County, Charles County, all eight DC wards, Fairfax County, Arlington County, Loudoun County, and Prince William County with 24/7 emergency response throughout.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--brand-cyan)', color: 'var(--brand-navy)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '14px 28px', borderRadius: '2px', textDecoration: 'none' }}
            >
              <Phone size={16} /> CALL {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '2px solid white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '14px 28px', borderRadius: '2px', textDecoration: 'none' }}
            >
              REQUEST SERVICE
            </Link>
          </div>
          {/* Region quick-links */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {[
              { label: "Maryland", href: "/service-areas/maryland" },
              { label: "Washington DC", href: "/service-areas/washington-dc" },
              { label: "Northern Virginia", href: "/service-areas/northern-virginia" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'white', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', padding: '8px 18px', borderRadius: '2px', textDecoration: 'none' }}
              >
                {r.label} →
              </Link>
            ))}
          </div>
          {/* Zip Code Lookup */}
          <ServiceAreaSearch variant="hero" />
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: 'var(--brand-cyan)', padding: '16px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
            {[
              { icon: <Shield size={16} />, text: 'MDOT MBE Certified' },
              { icon: <Clock size={16} />, text: '24/7 Emergency Service' },
              { icon: <Award size={16} />, text: 'Licensed Master Plumber' },
              { icon: <MapPin size={16} />, text: 'MD  DC  VA  DE' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-navy)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {item.icon} {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maryland */}
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
            Maryland Service Areas
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--brand-navy)', margin: 0 }}>
              Maryland Counties &amp; Cities
            </h2>
            <Link href="/service-areas/maryland" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-cyan)', textDecoration: 'none' }}>
              View Maryland Hub →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {MARYLAND_COUNTIES.map((county) => (
              <div key={county.county} style={{ background: 'white', border: '1px solid #e5e7eb', borderTop: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--brand-navy)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {county.county}
                  </h3>
                  <Link href={county.hub} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-cyan)', textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                    Hub →
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {county.cities.map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', color: '#374151', textDecoration: 'none', padding: '4px 0', borderBottom: '1px solid #f3f4f6' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--brand-cyan)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                    >
                      <ChevronRight size={13} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                      {city.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Washington DC */}
      <section style={{ background: '#f8f9fa', padding: '64px 0', borderTop: '1px solid #e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
            Washington DC Service Areas
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--brand-navy)', margin: 0 }}>
              Washington DC — All 8 Wards
            </h2>
            <Link href="/service-areas/washington-dc" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-cyan)', textDecoration: 'none' }}>
              View DC Hub →
            </Link>
          </div>
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderTop: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--brand-cyan)', marginBottom: '20px' }}>
              All 8 Wards + Featured Neighborhoods
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '4px' }}>
              {DC_AREAS.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', color: '#374151', textDecoration: 'none', padding: '6px 0', borderBottom: '1px solid #f3f4f6' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--brand-cyan)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                >
                  <ChevronRight size={13} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Northern Virginia */}
      <section style={{ background: 'white', padding: '64px 0', borderTop: '1px solid #e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
            Northern Virginia Service Areas
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--brand-navy)', margin: 0 }}>
              Northern Virginia Counties &amp; Cities
            </h2>
            <Link href="/service-areas/northern-virginia" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-cyan)', textDecoration: 'none' }}>
              View NoVA Hub →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {VA_COUNTIES.map((county) => (
              <div key={county.county} style={{ background: 'white', border: '1px solid #e5e7eb', borderTop: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--brand-navy)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {county.county}
                  </h3>
                  <Link href={county.hub} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-cyan)', textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                    Hub →
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {county.cities.map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', color: '#374151', textDecoration: 'none', padding: '4px 0', borderBottom: '1px solid #f3f4f6' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--brand-cyan)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                    >
                      <ChevronRight size={13} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                      {city.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section style={{ background: '#f8f9fa', padding: '48px 0', borderTop: '1px solid #e5e7eb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '24px', textAlign: 'center' }}>
            Licensed in Every Jurisdiction We Serve
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '960px', margin: '0 auto' }}>
            {CREDENTIALS.map((badge) => (
              <div key={badge} style={{ background: 'white', border: '1px solid #e5e7eb', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={14} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#374151' }}>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--brand-blue)', padding: '56px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: '16px', lineHeight: 1.15 }}>
            Don't See Your City? Call Us.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px' }}>
            Our service area is expanding. If you don't see your community listed, call us — we likely serve your area or can refer you to a trusted partner.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--brand-cyan)', color: 'var(--brand-navy)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 32px', borderRadius: '2px', textDecoration: 'none' }}
            >
              <Phone size={18} /> CALL {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '2px solid white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 32px', borderRadius: '2px', textDecoration: 'none' }}
            >
              REQUEST SERVICE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
