import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { Phone, ChevronRight, Shield, Clock, Award, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import ServiceAreaSearch from '@/components/ServiceAreaSearch';

const DC_SECTIONS = [
  {
    name: 'DC Wards',
    hub: '/service-areas/washington-dc',
    cities: [
      { name: 'Ward 1 — Columbia Heights, Adams Morgan', href: '/service-areas/washington-dc/ward-1' },
      { name: 'Ward 2 — Dupont Circle, Georgetown, Foggy Bottom', href: '/service-areas/washington-dc/ward-2' },
      { name: 'Ward 3 — Cleveland Park, Tenleytown, Chevy Chase DC', href: '/service-areas/washington-dc/ward-3' },
      { name: 'Ward 4 — Petworth, Brightwood, 16th Street Heights', href: '/service-areas/washington-dc/ward-4' },
      { name: 'Ward 5 — NoMa, Brookland, Eckington', href: '/service-areas/washington-dc/ward-5' },
      { name: 'Ward 6 — Capitol Hill, Navy Yard, H Street', href: '/service-areas/washington-dc/ward-6' },
      { name: 'Ward 7 — Deanwood, Benning, Hill East', href: '/service-areas/washington-dc/ward-7' },
      { name: 'Ward 8 — Congress Heights, Anacostia, Bellevue', href: '/service-areas/washington-dc/ward-8' },
    ],
  },
  {
    name: 'Featured DC Neighborhoods',
    hub: '/service-areas/washington-dc',
    cities: [
      { name: 'Georgetown', href: '/service-areas/washington-dc/georgetown' },
      { name: 'Capitol Hill', href: '/service-areas/washington-dc/capitol-hill' },
      { name: 'Dupont Circle', href: '/service-areas/washington-dc/dupont-circle' },
      { name: 'Navy Yard', href: '/service-areas/washington-dc/navy-yard' },
      { name: 'NoMa', href: '/service-areas/washington-dc/noma' },
      { name: 'Washington DC (Main)', href: '/service-areas/washington-dc/washington-dc' },
    ],
  },
];

export default function WashingtonDCHub() {
  return (
    <>
      <Helmet>
        <title>Plumber Washington DC | Licensed Master Plumber All 8 Wards | Definitive Mechanical</title>
        <meta name="description" content="Licensed master plumber serving all 8 wards of Washington DC. WSSC backflow certified, EPA 608, 24/7 emergency service. (301) 679-5849." />
        <link rel="canonical" href="https://www.definitivemechanical.com/service-areas/washington-dc/" />
      </Helmet>

      {/* Breadcrumb */}
      <div style={{ background: '#f8f9fa', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '13px', color: '#6b7280' }}>
            <Link href="/" style={{ color: '#009EC6', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/service-areas" style={{ color: '#009EC6', textDecoration: 'none' }}>Service Areas</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#374151' }}>Washington DC</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: '#003060', padding: '64px 0 48px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#009EC6', marginBottom: '16px' }}>
            LICENSED PLUMBING · WASHINGTON DC
          </p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.2, marginBottom: '20px' }}>
            Plumber Washington DC
          </h1>
          <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6, marginBottom: '32px' }}>
            Definitive Mechanical serves all 8 wards of Washington DC. Licensed in DC, Maryland, Virginia, and Delaware. WSSC backflow certified. 24/7 emergency service for residential, commercial, and government properties.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={`tel:${BUSINESS.phoneRaw}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#009EC6', color: '#003060', fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '14px 28px', borderRadius: '2px', textDecoration: 'none' }}>
              <Phone size={16} /> CALL {BUSINESS.phone}
            </a>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '2px solid white', fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '14px 28px', borderRadius: '2px', textDecoration: 'none' }}>
              REQUEST SERVICE
            </Link>
          </div>
          <div style={{ marginTop: '32px' }}>
            <ServiceAreaSearch variant="hero" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: '#009EC6', padding: '16px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
            {[
              { icon: <Shield size={16} />, text: 'DC Licensed Plumber' },
              { icon: <Clock size={16} />, text: '24/7 Emergency Service' },
              { icon: <Award size={16} />, text: 'WSSC Backflow Certified' },
              { icon: <MapPin size={16} />, text: 'All 8 Wards Served' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#003060', fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {item.icon} {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Cards */}
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#009EC6', marginBottom: '12px', textAlign: 'center' }}>
            SERVICE AREA DIRECTORY
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#003060', textAlign: 'center', marginBottom: '48px' }}>
            Washington DC Service Areas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {DC_SECTIONS.map((section) => (
              <div key={section.name} style={{ background: 'white', border: '1px solid #e5e7eb', borderTop: '4px solid #009EC6', borderRadius: '4px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: '1.25rem', color: '#003060', margin: 0 }}>
                    {section.name}
                  </h3>
                  <Link href={section.hub} style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#009EC6', textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                    Hub →
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {section.cities.map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Barlow, Arial, sans-serif', fontSize: '14px', color: '#374151', textDecoration: 'none', padding: '4px 0', borderBottom: '1px solid #f3f4f6' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#009EC6'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                    >
                      <ChevronRight size={14} style={{ color: '#009EC6', flexShrink: 0 }} />
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ background: '#f8f9fa', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: '#003060', textAlign: 'center', marginBottom: '32px' }}>
            DC Licenses &amp; Certifications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { label: 'DC Master Plumber', value: 'Licensed in DC' },
              { label: 'WSSC Backflow', value: '#73696' },
              { label: 'DC Contractor', value: 'Licensed & Insured' },
              { label: 'EPA 608 Certified', value: 'Universal' },
              { label: 'MDOT MBE Certified', value: 'Cert #MBE-2023-0456' },
              { label: 'Multi-State Licensed', value: 'MD, VA, DC, DE' },
            ].map((cred) => (
              <div key={cred.label} style={{ background: 'white', border: '1px solid #e5e7eb', borderLeft: '4px solid #009EC6', borderRadius: '4px', padding: '16px 20px' }}>
                <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#009EC6', margin: '0 0 4px' }}>{cred.label}</p>
                <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '14px', color: '#374151', margin: 0 }}>{cred.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#003060', padding: '56px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'white', marginBottom: '16px' }}>
            Need a Plumber in Washington DC?
          </h2>
          <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
            Call now for 24/7 emergency service or schedule a visit. Upfront pricing in writing — always.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${BUSINESS.phoneRaw}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#009EC6', color: '#003060', fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 32px', borderRadius: '2px', textDecoration: 'none' }}>
              <Phone size={18} /> CALL {BUSINESS.phone}
            </a>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '2px solid white', fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 32px', borderRadius: '2px', textDecoration: 'none' }}>
              REQUEST SERVICE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
