import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import { BUSINESS, LICENSES, CERTIFICATIONS } from '@/lib/constants';

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Plumber"],
  "name": "Definitive Mechanical",
  "legalName": "Definitive Mechanical LLC",
  "description": "Licensed plumbing, gas & mechanical contractor serving Maryland, Washington DC & Northern Virginia. MDOT MBE & VA SWaM Certified.",
  "url": "https://definitivemechanical.com",
  "telephone": "+13016795849",
  "email": "info@definitivemechanical.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9701 Apollo Drive, Suite 100",
    "addressLocality": "Largo",
    "addressRegion": "MD",
    "postalCode": "20774",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.8793,
    "longitude": -76.8456
  },
  "openingHours": ["Mo-Fr 09:00-17:00", "Sa 09:00-14:00"],
  "sameAs": ["https://www.facebook.com/profile.php?id=61563503684959"],
  "areaServed": [
    { "@type": "State", "name": "Maryland" },
    { "@type": "City", "name": "Washington, DC" },
    { "@type": "State", "name": "Virginia" }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "40"
  }
};

export default function Footer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <footer style={{ background: '#0A0A0A', color: 'white' }}>
        {/* Top accent line */}
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))' }} />

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Column 1 — Contact */}
            <div>
              <div className="mb-5">
                <img
                  src="/manus-storage/logo-definitive-mechanical_657c9790.png"
                  alt="Definitive Mechanical"
                  style={{ height: '56px', width: 'auto', display: 'block', background: 'white', borderRadius: '4px', padding: '4px 8px' }}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin size={15} style={{ color: 'var(--brand-cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                    {BUSINESS.address.street}<br />{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                  <a href={`tel:${BUSINESS.phoneRaw}`} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}>
                    {BUSINESS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                  <a href={`mailto:${BUSINESS.email}`} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}>
                    {BUSINESS.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={15} style={{ color: 'var(--brand-cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                    <div>{BUSINESS.hours.weekdays}</div>
                    <div>{BUSINESS.hours.saturday}</div>
                    <div style={{ color: 'var(--brand-cyan)', fontWeight: 600 }}> {BUSINESS.hours.emergency}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer"
                    style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--brand-cyan)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-cyan)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}>
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 — Services */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>
                Services
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'Emergency Plumbing', href: '/emergency-plumbing' },
                  { label: 'Drain Cleaning', href: '/drain-cleaning' },
                  { label: 'Water Heater Repair', href: '/water-heater-repair' },
                  { label: 'Sewer Line Repair', href: '/sewer-line-repair' },
                  { label: 'Gas Line Repair', href: '/gas-line-repair' },
                  { label: 'Backflow Certification', href: '/backflow-certification' },
                  { label: 'Commercial Plumbing', href: '/commercial-plumbing' },
                  { label: 'Government / Municipal', href: '/government-municipal-plumbing' },
                  { label: 'View All Services', href: '/plumbing' },
                ].map((link) => (
                  <Link key={link.href} href={link.href}
                    className="block no-underline transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3 — Service Areas */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>
                Service Areas
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'Maryland', href: '/service-areas/maryland' },
                  { label: 'Washington DC', href: '/service-areas/washington-dc' },
                  { label: 'Northern Virginia', href: '/service-areas/northern-virginia' },
                  { label: 'View All Service Areas', href: '/service-areas' },
                ].map((link) => (
                  <Link key={link.href + link.label} href={link.href}
                    className="block no-underline transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4 — Company */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>
                Company
              </h4>
              <div className="space-y-2 mb-6">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Reviews', href: '/reviews' },
                  { label: 'Licenses & Certifications', href: '/licenses-certifications' },
                  { label: 'Financing', href: '/financing' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <Link key={link.href} href={link.href}
                    className="block no-underline transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <a
                href={BUSINESS.financing}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center no-underline transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: 'var(--brand-cyan)',
                  border: '2px solid var(--brand-cyan)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '8px 16px',
                  borderRadius: '2px',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--brand-cyan)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--brand-cyan)'; }}
              >
                Apply for Financing
              </a>
            </div>
          </div>
        </div>

        {/* License Block */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>
              Licenses &amp; Certifications
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
              Maryland Master Plumber/Master Gasfitter #96958  WSSC Master Plumber/Master Gasfitter #73696  Howard County Master Plumber/Master Gasfitter #20020096958  Anne Arundel County Master Plumber/Master Gasfitter #A2-6139  City of Rockville Master Plumber/Master Gasfitter #PLL-0002113  MD Home Improvement Contractor/Salesman #134723 / #109901
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginTop: '4px' }}>
              Virginia Master Plumber/Master Gasfitter #2710064209  Virginia Class A Contractor #2705181061  DC Master Plumber/Master Gasfitter #PGM1002236  Delaware Master Plumber/Master Gasfitter #PL-0012866  Universal EPA 608 Certification #YbKLqI5cGf
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginTop: '4px' }}>
              MDOT MBE Cert No. {CERTIFICATIONS.mdotMBE.certNo}  SWaM Cert No. {CERTIFICATIONS.swam.certNo}  NAICS Code: {CERTIFICATIONS.naics}  SIC Code: {CERTIFICATIONS.sic}  CAGE: {CERTIFICATIONS.cage}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
              © 2026 Definitive Mechanical LLC. All Rights Reserved. Licensed, Bonded &amp; Insured. Based in Largo, MD. Serving Maryland, Washington DC &amp; Northern Virginia.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
