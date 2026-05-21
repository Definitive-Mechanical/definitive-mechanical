import { Building2, CheckCircle2, ShieldCheck, FileText, Clock, Users } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';

const COMMERCIAL_SERVICES = [
  { title: 'Commercial Emergency Plumbing', desc: '24/7 emergency response for commercial facilities. A plumbing failure that shuts down your operations cannot wait until morning.' },
  { title: 'Drain Cleaning & Hydro-Jetting', desc: 'Commercial drain systems handle higher volume than residential. We provide hydro-jetting and camera inspection for commercial facilities.' },
  { title: 'Water Heater Service', desc: 'Commercial water heater repair, replacement, and installation. Tankless and high-capacity units for restaurants, hotels, and office buildings.' },
  { title: 'Backflow Prevention & Testing', desc: 'Annual backflow preventer testing, certification, repair, and replacement. Required by code for most commercial properties.' },
  { title: 'Gas Line Service', desc: 'Licensed Master Gasfitter in MD, DC, VA & DE. Gas line repair, installation, and emergency response for commercial facilities.' },
  { title: 'Sewer Line Service', desc: 'Commercial sewer line repair, replacement, and camera inspection. We handle the full scope of sewer work for commercial properties.' },
  { title: 'Facility Maintenance Contracts', desc: 'Scheduled plumbing maintenance for commercial facilities, property managers, and HOAs. Preventive maintenance reduces emergency costs.' },
  { title: 'Code Compliance & Inspections', desc: 'Plumbing code compliance work for commercial properties. We handle permit-required work and inspections in MD, DC, and VA.' },
];

const COMMERCIAL_FAQ = [
  {
    question: 'Do you provide commercial plumbing service in Maryland and Virginia?',
    answer: 'Yes. Definitive Mechanical provides commercial plumbing service across Maryland, Washington DC, and Northern Virginia. We hold Master Plumber and Master Gasfitter licenses in all three jurisdictions, plus Delaware. We are MDOT MBE Certified and VA SWaM Certified.',
  },
  {
    question: 'Do you offer commercial plumbing maintenance contracts?',
    answer: 'Yes. We offer scheduled maintenance contracts for commercial facilities, property managers, and HOAs. Preventive maintenance reduces emergency service costs and helps avoid code violations. Call (301) 679-5849 to discuss a maintenance program for your facility.',
  },
  {
    question: 'Are you licensed for commercial plumbing work in DC?',
    answer: 'Yes. We hold an active Master Plumber and Master Gasfitter license in Washington DC (#PGM1002236), in addition to our Maryland, Virginia, and Delaware licenses. All commercial work is performed by licensed Master Plumbers.',
  },
  {
    question: 'Can you handle emergency commercial plumbing calls?',
    answer: 'Yes. We provide 24/7 emergency commercial plumbing service. A plumbing failure that shuts down your operations, triggers a health code violation, or damages your facility cannot wait until business hours. Call (301) 679-5849 for immediate commercial emergency dispatch.',
  },
  {
    question: 'Do you work with property managers and HOAs?',
    answer: 'Yes. We work with property managers, HOAs, and facility managers across the DMV. We understand the specific requirements of multi-unit properties, common area plumbing, and the documentation requirements that property management companies need.',
  },
];

export default function CommercialPlumbing() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '65vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-commercial-plumbing_9b61a6cf.webp"
            alt="Commercial plumbing Maryland DC Northern Virginia — MDOT MBE Certified"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Commercial Plumbing' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                COMMERCIAL PLUMBING  MD, DC & NORTHERN VIRGINIA
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Commercial Plumbing Service — Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '32px' }}>
                Definitive Mechanical provides commercial plumbing service for businesses, property managers, HOAs, and institutions across Maryland, Washington DC, and Northern Virginia. MDOT MBE and VA SWaM Certified. Licensed Master Plumber and Master Gasfitter in four states. 24/7 emergency response.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <BookNowButton bg="dark" variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
                <BookNowButton bg="dark" variant="secondary" text="REQUEST SERVICE" href="/contact" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>COMMERCIAL PLUMBING SERVICES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What commercial plumbing services does Definitive Mechanical provide?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMERCIAL_SERVICES.map((service) => (
              <div key={service.title} style={{
                background: 'white',
                border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)',
                borderRadius: '6px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(6,59,99,0.10)',
              }}>
                <Building2 size={22} color="var(--brand-cyan)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '8px' }}>{service.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.7 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHY CHOOSE DEFINITIVE MECHANICAL</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Why do commercial clients choose Definitive Mechanical?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Licensed in Four States', body: 'Master Plumber and Master Gasfitter licenses in Maryland, DC, Virginia, and Delaware. Commercial work requires the right license in the right jurisdiction.' },
              { icon: FileText, title: 'MDOT MBE & VA SWaM Certified', body: 'MDOT MBE Cert No. 20-134. Virginia SWaM Cert No. 815255. CAGE Code 8HCF6. NAICS 238220. Capability statement available upon request.' },
              { icon: Clock, title: '24/7 Commercial Emergency Response', body: 'A plumbing failure that shuts down your operations cannot wait until morning. We dispatch licensed technicians 24/7 for commercial emergencies.' },
              { icon: Users, title: 'Property Manager Friendly', body: 'We understand the documentation, communication, and scheduling requirements of property management. We work with your systems.' },
              { icon: CheckCircle2, title: 'Code Compliant Work', body: 'All commercial work is performed to code with proper permits and inspections. We handle the permit process in MD, DC, and VA.' },
              { icon: Building2, title: 'Facility Maintenance Programs', body: 'Scheduled preventive maintenance reduces emergency costs and helps avoid code violations. Ask about our commercial maintenance programs.' },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: 'center', padding: '16px' }}>
                <item.icon size={40} color="var(--brand-cyan)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '16px', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS BANNER */}
      <section style={{ background: '#fff', padding: '48px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>
                GOVERNMENT & COMMERCIAL CERTIFICATIONS
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '12px' }}>
                MDOT MBE and Virginia SWaM Certified
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.7 }}>
                Definitive Mechanical is certified as a Minority Business Enterprise (MBE) by the Maryland Department of Transportation and as a Small, Women-owned, and Minority-owned Business (SWaM) by the Commonwealth of Virginia. Capability statement available upon request.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {[
                { label: 'MDOT MBE', value: 'Cert No. 20-134' },
                { label: 'VA SWaM', value: 'Cert No. 815255' },
                { label: 'CAGE Code', value: '8HCF6' },
                { label: 'NAICS Code', value: '238220' },
              ].map((item) => (
                <div key={item.label} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', padding: '16px 24px', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-cyan)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'white', fontSize: '14px' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Commercial Plumbing Questions</h2>
        </div>
                      <FAQAccordion items={COMMERCIAL_FAQ} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner
        heading="Need commercial plumbing service in Maryland, DC, or Northern Virginia?"
        subtext="MDOT MBE and VA SWaM Certified. Licensed Master Plumber in four states. 24/7 emergency response."
        primaryBtn={{ text: `CALL ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST SERVICE ONLINE', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
