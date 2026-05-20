import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { Phone, ChevronRight, Shield, Clock, Award, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import ServiceAreaSearch from '@/components/ServiceAreaSearch';

const COUNTIES = [
  {
    name: "Prince George's County",
    hub: '/service-areas/maryland/prince-georges-county',
    cities: [
      { name: 'Largo', href: '/service-areas/maryland/prince-georges-county/largo-md' },
      { name: 'Bowie', href: '/service-areas/maryland/prince-georges-county/bowie-md' },
      { name: 'Fort Washington', href: '/service-areas/maryland/prince-georges-county/fort-washington-md' },
      { name: 'Woodmore', href: '/service-areas/maryland/prince-georges-county/woodmore-md' },
      { name: 'Fairwood', href: '/service-areas/maryland/prince-georges-county/fairwood-md' },
      { name: 'University Park', href: '/service-areas/maryland/prince-georges-county/university-park-md' },
      { name: 'Brock Hall', href: '/service-areas/maryland/prince-georges-county/brock-hall-md' },
      { name: 'Queensland', href: '/service-areas/maryland/prince-georges-county/queensland-md' },
      { name: 'Croom', href: '/service-areas/maryland/prince-georges-county/croom-md' },
    ],
  },
  {
    name: 'Montgomery County',
    hub: '/service-areas/maryland/montgomery-county',
    cities: [
      { name: 'Rockville', href: '/service-areas/maryland/montgomery-county/rockville-md' },
      { name: 'Bethesda', href: '/service-areas/maryland/montgomery-county/bethesda-md' },
      { name: 'Potomac', href: '/service-areas/maryland/montgomery-county/potomac-md' },
      { name: 'Chevy Chase', href: '/service-areas/maryland/montgomery-county/chevy-chase-md' },
      { name: 'Cabin John', href: '/service-areas/maryland/montgomery-county/cabin-john-md' },
      { name: 'Darnestown', href: '/service-areas/maryland/montgomery-county/darnestown-md' },
      { name: 'Travilah', href: '/service-areas/maryland/montgomery-county/travilah-md' },
      { name: 'Somerset', href: '/service-areas/maryland/montgomery-county/somerset-md' },
      { name: "Martin's Additions", href: '/service-areas/maryland/montgomery-county/martins-additions-md' },
      { name: 'Chevy Chase Village', href: '/service-areas/maryland/montgomery-county/chevy-chase-village-md' },
      { name: 'Chevy Chase View', href: '/service-areas/maryland/montgomery-county/chevy-chase-view-md' },
      { name: 'Brookmont', href: '/service-areas/maryland/montgomery-county/brookmont-md' },
    ],
  },
  {
    name: 'Howard County',
    hub: '/service-areas/maryland/howard-county',
    cities: [
      { name: 'Ellicott City', href: '/service-areas/maryland/howard-county/ellicott-city-md' },
      { name: 'Clarksville', href: '/service-areas/maryland/howard-county/clarksville-md' },
      { name: 'Glenelg', href: '/service-areas/maryland/howard-county/glenelg-md' },
      { name: 'Highland', href: '/service-areas/maryland/howard-county/highland-md' },
      { name: 'Fulton', href: '/service-areas/maryland/howard-county/fulton-md' },
      { name: 'West Friendship', href: '/service-areas/maryland/howard-county/west-friendship-md' },
      { name: 'Scaggsville', href: '/service-areas/maryland/howard-county/scaggsville-md' },
    ],
  },
  {
    name: 'Anne Arundel County',
    hub: '/service-areas/maryland/anne-arundel-county',
    cities: [
      { name: 'Galesville', href: '/service-areas/maryland/anne-arundel-county/galesville-md' },
      { name: 'Crownsville', href: '/service-areas/maryland/anne-arundel-county/crownsville-md' },
      { name: 'Riva', href: '/service-areas/maryland/anne-arundel-county/riva-md' },
    ],
  },
  {
    name: 'Charles County',
    hub: '/service-areas/maryland/charles-county',
    cities: [
      { name: 'Waldorf', href: '/service-areas/maryland/charles-county/waldorf-md' },
      { name: 'Bensville', href: '/service-areas/maryland/charles-county/bensville-md' },
    ],
  },
];

export default function MarylandHub() {
  return (
    <>
      <Helmet>
        <title>Plumber Maryland | Licensed Master Plumber PG County, Montgomery, Howard | Definitive Mechanical</title>
        <meta name="description" content="Licensed master plumber serving Maryland — Prince George's County, Montgomery County, Howard County, Anne Arundel, Charles County. MDOT MBE certified. 24/7 emergency. (301) 679-5849." />
        <link rel="canonical" href="https://www.definitivemechanical.com/service-areas/maryland/" />
      </Helmet>

      {/* Breadcrumb */}
      <div style={{ background: '#f8f9fa', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#6b7280' }}>
            <Link href="/" style={{ color: 'var(--brand-cyan)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/service-areas" style={{ color: 'var(--brand-cyan)', textDecoration: 'none' }}>Service Areas</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#374151' }}>Maryland</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--brand-navy)', padding: '64px 0 48px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>
            LICENSED PLUMBING  MARYLAND
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.2, marginBottom: '20px' }}>
            Plumber Maryland
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6, marginBottom: '32px' }}>
            Definitive Mechanical is an MDOT MBE certified master plumber serving Prince George's County, Montgomery County, Howard County, Anne Arundel County, and Charles County. Licensed in Maryland, Virginia, DC, and Delaware. 24/7 emergency service.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={`tel:${BUSINESS.phoneRaw}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--brand-cyan)', color: 'var(--brand-navy)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '14px 28px', borderRadius: '2px', textDecoration: 'none' }}>
              <Phone size={16} /> CALL {BUSINESS.phone}
            </a>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '2px solid white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '14px 28px', borderRadius: '2px', textDecoration: 'none' }}>
              REQUEST SERVICE
            </Link>
          </div>
          <div style={{ marginTop: '32px' }}>
            <ServiceAreaSearch variant="hero" />
          </div>
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
              { icon: <MapPin size={16} />, text: '5 Counties Served' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-navy)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {item.icon} {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* County Cards */}
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '12px', textAlign: 'center' }}>
            SERVICE AREA DIRECTORY
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--brand-navy)', textAlign: 'center', marginBottom: '48px' }}>
            Maryland Service Areas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {COUNTIES.map((county) => (
              <div key={county.name} style={{ background: 'white', border: '1px solid #e5e7eb', borderTop: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--brand-navy)', margin: 0 }}>
                    {county.name}
                  </h3>
                  <Link href={county.hub} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-cyan)', textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                    Hub →
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {county.cities.map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', color: '#374151', textDecoration: 'none', padding: '4px 0', borderBottom: '1px solid #f3f4f6' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--brand-cyan)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                    >
                      <ChevronRight size={14} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--brand-navy)', textAlign: 'center', marginBottom: '32px' }}>
            Maryland Licenses &amp; Certifications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { label: 'MD Master Plumber', value: '#17999' },
              { label: 'MD Master Gasfitter', value: '#18768' },
              { label: 'WSSC Backflow', value: '#73696' },
              { label: 'MDOT MBE Certified', value: 'Cert #MBE-2023-0456' },
              { label: 'MD HVACR License', value: '#A00000' },
              { label: 'EPA 608 Certified', value: 'Universal' },
            ].map((cred) => (
              <div key={cred.label} style={{ background: 'white', border: '1px solid #e5e7eb', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px 20px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--brand-cyan)', margin: '0 0 4px' }}>{cred.label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#374151', margin: 0 }}>{cred.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--brand-navy)', padding: '56px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'white', marginBottom: '16px' }}>
            Need a Plumber in Maryland?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
            Call now for 24/7 emergency service or schedule a visit. Upfront pricing in writing — always.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${BUSINESS.phoneRaw}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--brand-cyan)', color: 'var(--brand-navy)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 32px', borderRadius: '2px', textDecoration: 'none' }}>
              <Phone size={18} /> CALL {BUSINESS.phone}
            </a>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '2px solid white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 32px', borderRadius: '2px', textDecoration: 'none' }}>
              REQUEST SERVICE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
