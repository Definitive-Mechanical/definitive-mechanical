import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, ChevronRight, Shield, Clock, Award } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import ServiceAreaSearch from '@/components/ServiceAreaSearch';

const COUNTIES = [
  {
    name: 'Fairfax County',
    hub: '/service-areas/northern-virginia/fairfax-county',
    cities: [
      { name: 'Alexandria', href: '/service-areas/northern-virginia/fairfax-county/alexandria-va' },
      { name: 'McLean', href: '/service-areas/northern-virginia/fairfax-county/mclean-va' },
      { name: 'Springfield', href: '/service-areas/northern-virginia/fairfax-county/springfield-va' },
      { name: 'Vienna', href: '/service-areas/northern-virginia/fairfax-county/vienna-va' },
      { name: 'Dunn Loring', href: '/service-areas/northern-virginia/fairfax-county/dunn-loring-va' },
      { name: 'Floris', href: '/service-areas/northern-virginia/fairfax-county/floris-va' },
      { name: 'Crosspointe', href: '/service-areas/northern-virginia/fairfax-county/crosspointe-va' },
      { name: 'Difficult Run', href: '/service-areas/northern-virginia/fairfax-county/difficult-run-va' },
      { name: 'Great Falls', href: '/service-areas/northern-virginia/fairfax-county/great-falls-va' },
      { name: 'Great Falls Crossing', href: '/service-areas/northern-virginia/fairfax-county/great-falls-crossing-va' },
      { name: 'South Run', href: '/service-areas/northern-virginia/fairfax-county/south-run-va' },
      { name: 'Union Mill', href: '/service-areas/northern-virginia/fairfax-county/union-mill-va' },
      { name: 'Wolf Trap', href: '/service-areas/northern-virginia/fairfax-county/wolf-trap-va' },
    ],
  },
  {
    name: 'Arlington County',
    hub: '/service-areas/northern-virginia/arlington-county',
    cities: [
      { name: 'Arlington', href: '/service-areas/northern-virginia/arlington-county/arlington-va' },
    ],
  },
  {
    name: 'Loudoun County',
    hub: '/service-areas/northern-virginia/loudoun-county',
    cities: [
      { name: 'Brambleton', href: '/service-areas/northern-virginia/loudoun-county/brambleton-va' },
      { name: 'One Loudoun', href: '/service-areas/northern-virginia/loudoun-county/one-loudoun-va' },
      { name: 'Belmont', href: '/service-areas/northern-virginia/loudoun-county/belmont-va' },
      { name: 'Broadlands', href: '/service-areas/northern-virginia/loudoun-county/broadlands-va' },
    ],
  },
  {
    name: 'Prince William County',
    hub: '/service-areas/northern-virginia/prince-william-county',
    cities: [
      { name: 'Bull Run Mountain Estates', href: '/service-areas/northern-virginia/prince-william-county/bull-run-mountain-estates-va' },
      { name: 'Independent Hill', href: '/service-areas/northern-virginia/prince-william-county/independent-hill-va' },
      { name: 'Buckhall', href: '/service-areas/northern-virginia/prince-william-county/buckhall-va' },
    ],
  },
];

export default function NorthernVirginiaHub() {
  return (
    <>
      <Helmet>
        <title>Plumber Northern Virginia | Licensed Master Plumber Fairfax, Arlington, Loudoun | Definitive Mechanical</title>
        <meta name="description" content="Licensed master plumber serving Northern Virginia — Fairfax County, Arlington, Loudoun, Prince William. SWaM certified. 24/7 emergency service. (301) 679-5849." />
        <link rel="canonical" href="https://www.definitivemechanical.com/service-areas/northern-virginia/" />
      </Helmet>

      {/* Breadcrumb */}
      <div style={{ background: '#f8f9fa', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#6b7280' }}>
            <Link href="/" style={{ color: 'var(--brand-cyan)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/service-areas" style={{ color: 'var(--brand-cyan)', textDecoration: 'none' }}>Service Areas</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#374151' }}>Northern Virginia</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '80px 0 64px', overflow: 'hidden', minHeight: '420px', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/hub-northern-virginia-8sTXN2dYoKXrSRa3HcuYAQ.webp"
          alt="Northern Virginia suburban neighborhoods at golden hour"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 60%, rgba(0,40,90,0.88) 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>
            LICENSED PLUMBING  NORTHERN VIRGINIA
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.2, marginBottom: '20px' }}>
            Plumber Northern Virginia
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6, marginBottom: '32px' }}>
            Definitive Mechanical is a Licensed Black Owned, Virginia SWaM certified master plumber serving Fairfax County, Arlington, Loudoun County, and Prince William County. Licensed in Virginia, Maryland, DC, and Delaware. 24/7 emergency service.
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
              { icon: <Shield size={16} />, text: 'VA SWaM Certified' },
              { icon: <Clock size={16} />, text: '24/7 Emergency Service' },
              { icon: <Award size={16} />, text: 'Licensed Master Plumber' },
              { icon: <MapPin size={16} />, text: '4 Counties Served' },
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
            Northern Virginia Service Areas
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
            Virginia Licenses &amp; Certifications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { label: 'VA Master Plumber/Gasfitter (DPOR)', value: '#2710064209' },
              { label: 'VA Class A Contractor (DPOR)', value: '#2705181061' },
              { label: 'VA SWaM Certified', value: 'Cert No. 815255' },
              { label: 'MDOT MBE Certified', value: 'Cert No. 20-134' },
              { label: 'CAGE Code', value: '8HCF6' },
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
            Need a Plumber in Northern Virginia?
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
