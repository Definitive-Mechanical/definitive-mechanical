import { Landmark, ShieldCheck, FileText, Award, CheckCircle2, KeyRound } from 'lucide-react';
import { BUSINESS, CERTIFICATIONS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';

const GOV_FAQ = [
  {
    question: 'Is Definitive Mechanical MDOT MBE certified?',
    answer: 'Yes. Definitive Mechanical is certified as a Minority Business Enterprise (MBE) by the Maryland Department of Transportation. Certification Number: 20-134. NAICS Code: 238220. SIC Code: 171.',
  },
  {
    question: 'Is Definitive Mechanical Virginia SWaM certified?',
    answer: 'Yes. Definitive Mechanical is certified as a Small, Women-owned, and Minority-owned Business (SWaM) by the Commonwealth of Virginia, Department of Small Business and Supplier Diversity. Certification Number: 815255.',
  },
  {
    question: 'What is your CAGE code?',
    answer: 'Definitive Mechanical\'s CAGE Code is 8HCF6. NAICS Code: 238220. SIC Code: 171.',
  },
  {
    question: 'Do you have a capability statement?',
    answer: 'Yes. A capability statement is available upon request. Contact us at (301) 679-5849 or info@definitivemechanical.com.',
  },
  {
    question: 'What jurisdictions are you licensed to work in for government contracts?',
    answer: 'Definitive Mechanical holds Master Plumber and Master Gasfitter licenses in Maryland (State #96958, WSSC #73696), Washington DC (#PGM1002236), Virginia (#2710064209), and Delaware (#PL-0012866). We also hold a Virginia Class A Contractor license (#2705181061) and Maryland Home Improvement Contractor license (#134723).',
  },
];

export default function GovernmentMunicipalPlumbing() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '60vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-commercial-plumbing_88f441f4.jpg"
            alt="Government and municipal plumbing Maryland DC Northern Virginia — MDOT MBE Certified"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Government & Municipal Plumbing' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                GOVERNMENT & MUNICIPAL PLUMBING  MDOT MBE  VA SWAM CERTIFIED
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Government & Municipal Plumbing — MDOT MBE & VA SWaM Certified
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '32px' }}>
                Definitive Mechanical is a licensed, MDOT MBE and Virginia SWaM certified plumbing and mechanical contractor serving government agencies, municipalities, and public institutions across Maryland, Washington DC, and Northern Virginia. Master Plumber and Master Gasfitter licensed in four states. CAGE Code 8HCF6. NAICS 238220.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
                <BookNowButton variant="outline" text="REQUEST CAPABILITY STATEMENT" href="/contact" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background: 'var(--brand-cyan)', padding: '32px 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, label: 'MDOT MBE', value: 'Cert No. 20-134' },
              { icon: ShieldCheck, label: 'VA SWaM', value: 'Cert No. 815255' },
              { icon: KeyRound, label: 'CAGE Code', value: '8HCF6' },
              { icon: FileText, label: 'NAICS Code', value: '238220' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center', padding: '12px' }}>
                <item.icon size={24} color="var(--brand-navy)" style={{ margin: '0 auto 8px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-navy)', fontSize: '14px', fontWeight: 600 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>GOVERNMENT & MUNICIPAL SERVICES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Plumbing services for government agencies and public institutions</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Federal & State Facility Plumbing', desc: 'Plumbing repair, maintenance, and installation for federal buildings, state facilities, and municipal properties.' },
              { title: 'Municipal Water System Service', desc: 'Water line repair, replacement, and installation for municipal water systems and public utilities.' },
              { title: 'School & University Plumbing', desc: 'Plumbing service for K-12 schools, colleges, and universities. Backflow testing, water heater service, drain cleaning, and emergency response.' },
              { title: 'Public Housing Plumbing', desc: 'Plumbing service for public housing authorities and affordable housing developments. Emergency and scheduled maintenance.' },
              { title: 'Healthcare Facility Plumbing', desc: 'Plumbing service for hospitals, clinics, and healthcare facilities. Code-compliant work with proper documentation.' },
              { title: 'Backflow Prevention & Certification', desc: 'Annual backflow preventer testing and certification for government and institutional properties. Required by code.' },
            ].map((service) => (
              <div key={service.title} style={{
                background: 'white',
                border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)',
                borderRadius: '6px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(6,59,99,0.10)',
              }}>
                <Landmark size={22} color="var(--brand-cyan)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '8px' }}>{service.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.7 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS DETAIL */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <SectionHeading
            eyebrow="CREDENTIALS & COMPLIANCE"
            heading="Definitive Mechanical's government contracting credentials"
            subtext="We hold the certifications, licenses, and registrations required to work with government agencies at the federal, state, and local level across the DMV region."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'MDOT MBE Certification',
                items: ['Maryland Department of Transportation', 'Certification Number: 20-134', 'NAICS Code: 238220', 'SIC Code: 171'],
              },
              {
                title: 'Virginia SWaM Certification',
                items: ['Virginia Department of Small Business and Supplier Diversity', 'Certification Number: 815255', 'Small Business Enterprise (SBE)', 'Minority Business Enterprise (MBE)'],
              },
              {
                title: 'Federal Registrations',
                items: ['CAGE Code: 8HCF6', 'NAICS Code: 238220 (Plumbing, Heating, and Air-Conditioning Contractors)', 'SIC Code: 171'],
              },
              {
                title: 'State Licenses',
                items: ['Maryland Master Plumber/Gasfitter #96958', 'WSSC Master Plumber/Gasfitter #73696', 'DC Master Plumber/Gasfitter #PGM1002236', 'Virginia Master Plumber/Gasfitter #2710064209', 'Virginia Class A Contractor #2705181061', 'Delaware Master Plumber/Gasfitter #PL-0012866'],
              },
            ].map((section) => (
              <div key={section.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '6px', padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-cyan)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>{section.title}</h3>
                {section.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                    <CheckCircle2 size={14} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <BookNowButton variant="ghost" text="VIEW ALL LICENSES & CERTIFICATIONS" href="/licenses-certifications" size="md" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Government & Municipal Plumbing Questions</h2>
        </div>
                      <FAQAccordion items={GOV_FAQ} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner
        heading="Government or municipal plumbing project in Maryland, DC, or Northern Virginia?"
        subtext="MDOT MBE Certified  VA SWaM Certified  CAGE 8HCF6  NAICS 238220  Capability statement available."
        primaryBtn={{ text: `CALL ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST CAPABILITY STATEMENT', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
