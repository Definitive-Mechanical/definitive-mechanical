import { Droplets, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import ProcessStep from '@/components/ui/ProcessStep';

const DRAIN_SERVICES = [
  { title: 'Kitchen Drain Cleaning', desc: 'Grease buildup, food debris, and soap scum cleared professionally. We identify whether the blockage is in the trap, branch line, or main stack.' },
  { title: 'Bathroom Drain Cleaning', desc: 'Hair, soap, and mineral buildup cleared from tub, shower, and sink drains. We do not just push the clog further down.' },
  { title: 'Main Sewer Line Clearing', desc: 'Sewer line stoppages caused by grease, debris, or root intrusion. Camera inspection available to confirm clearance.' },
  { title: 'Hydro-Jetting', desc: 'High-pressure water jetting that scours pipe walls clean — the only method that removes grease and scale buildup, not just clears it.' },
  { title: 'Floor Drain Cleaning', desc: 'Basement, garage, and utility floor drains cleared. Critical for commercial facilities and properties with aging drain systems.' },
  { title: 'Video Camera Inspection', desc: 'Camera inspection to identify root intrusion, pipe collapse, offset joints, or recurring blockage causes before they become emergencies.' },
];

const DRAIN_FAQ = [
  {
    question: 'How much does drain cleaning cost in Maryland?',
    answer: 'Drain cleaning costs in Maryland vary by the type of drain, severity of the blockage, and method required. Simple drain clearing typically ranges from $150-$300. Hydro-jetting and main sewer line clearing may cost more depending on the scope. Definitive Mechanical provides written pricing before any work begins. Call (301) 679-5849 for an estimate.',
  },
  {
    question: 'What is the difference between drain snaking and hydro-jetting?',
    answer: 'Drain snaking (also called augering) uses a rotating cable to break through or retrieve a blockage. It is effective for soft clogs but does not clean pipe walls. Hydro-jetting uses high-pressure water (typically 3,000-4,000 PSI) to scour the interior of the pipe, removing grease buildup, scale, and debris that snaking leaves behind. For recurring clogs or grease-heavy drain systems, hydro-jetting provides a more thorough and longer-lasting result.',
  },
  {
    question: 'Why does my drain keep clogging?',
    answer: 'Recurring drain clogs are typically caused by one of four things: grease or soap buildup on pipe walls that gradually narrows the pipe, root intrusion from nearby trees, a partial pipe collapse or offset joint, or a design issue (improper slope or undersized pipe). A video camera inspection identifies the root cause so we can address it permanently rather than repeatedly clearing the same clog.',
  },
  {
    question: 'Can you clear drains in commercial buildings?',
    answer: 'Yes. Definitive Mechanical provides drain cleaning and hydro-jetting for commercial facilities including restaurants, office buildings, retail properties, schools, and government facilities. We are MDOT MBE Certified and VA SWaM Certified. Call (301) 679-5849 for commercial drain service.',
  },
  {
    question: 'Do you provide drain cleaning in Washington DC and Northern Virginia?',
    answer: 'Yes. We provide drain cleaning, hydro-jetting, and sewer line clearing across Maryland, Washington DC, and Northern Virginia. We hold active Master Plumber licenses in all three jurisdictions.',
  },
];

export default function DrainCleaning() {
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
            src="/manus-storage/service-drain-cleaning_a7ba7686.jpg"
            alt="Professional drain cleaning Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Drain Cleaning' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                DRAIN CLEANING  HYDRO-JETTING  SEWER CLEARING
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Professional Drain Cleaning — Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '32px' }}>
                Definitive Mechanical provides professional drain cleaning, hydro-jetting, and sewer line clearing across Maryland, Washington DC, and Northern Virginia. We identify the root cause of recurring clogs — not just clear the symptom. Licensed Master Plumber on every job. Written pricing before work begins.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
                <BookNowButton variant="outline" text="REQUEST SERVICE" href="/contact" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>DRAIN CLEANING SERVICES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What drain cleaning services does Definitive Mechanical provide?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>From kitchen and bathroom drains to main sewer line clearing and hydro-jetting, we handle the full range of drain and sewer services for residential, commercial, and government properties.</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DRAIN_SERVICES.map((service) => (
              <div key={service.title} style={{
                background: 'white',
                border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)',
                borderRadius: '6px',
                padding: '28px',
                boxShadow: '0 4px 16px rgba(6,59,99,0.10)',
              }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(0,117,186,0.12)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Droplets size={22} color="var(--brand-cyan)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '17px', marginBottom: '8px' }}>{service.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHY CHOOSE DEFINITIVE MECHANICAL</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Why choose Definitive Mechanical for drain cleaning in the DMV?</h2>
        </div>
              <div className="space-y-4">
                {[
                  { title: 'Licensed Master Plumber on Every Job', desc: 'Every drain cleaning call is handled by a licensed Master Plumber — not an unlicensed tech with a snake.' },
                  { title: 'We Find the Root Cause', desc: 'Recurring clogs mean something is wrong in the pipe. We use camera inspection to identify root intrusion, buildup, or structural issues.' },
                  { title: 'Hydro-Jetting Available', desc: 'The only drain cleaning method that actually cleans pipe walls. We offer hydro-jetting for grease-heavy systems and commercial facilities.' },
                  { title: 'Written Pricing Before We Start', desc: 'No surprise fees. You receive written pricing before we begin. Same rate regardless of time of day.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '4px' }}>{item.title}</p>
                      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--brand-navy)', borderRadius: '12px', padding: '32px', boxShadow: '0 8px 32px rgba(6,59,99,0.2)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>Our Credentials</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Maryland Master Plumber License', 'DC Master Plumber License', 'Virginia Master Plumber License', 'Maryland Master Gasfitter License', 'MDOT MBE Certified (No. 20-134)', 'Virginia SWaM Certified (No. 815255)', 'Fully Bonded & Insured'].map((cred) => (
                    <div key={cred} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', padding: '10px 14px' }}>
                      <ShieldCheck size={14} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.88)', fontSize: '13px', fontWeight: 500 }}>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HYDRO-JETTING */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <SectionHeading
            eyebrow="HYDRO-JETTING"
            heading="What is hydro-jetting and when is it the right solution?"
            subtext="Hydro-jetting uses high-pressure water to scour the interior walls of drain and sewer pipes — removing grease, scale, and debris that drain snaking leaves behind."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Grease Buildup', desc: 'Restaurants, commercial kitchens, and older residential systems with heavy grease accumulation that snaking cannot clear.' },
              { title: 'Root Intrusion', desc: 'After root removal, hydro-jetting clears debris and cleans the pipe wall to restore full flow capacity.' },
              { title: 'Recurring Clogs', desc: 'If the same drain clogs repeatedly, hydro-jetting removes the buildup that keeps catching debris.' },
              { title: 'Pre-Lining Preparation', desc: 'Before pipe lining or relining, hydro-jetting ensures the pipe wall is clean for proper adhesion.' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '6px', padding: '24px', display: 'flex', gap: '12px' }}>
                <ChevronRight size={20} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'white', fontSize: '15px', marginBottom: '6px' }}>{item.title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Drain Cleaning Questions</h2>
        </div>
                      <FAQAccordion items={DRAIN_FAQ} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner
        heading="Need drain cleaning in Maryland, DC, or Northern Virginia?"
        subtext="Licensed Master Plumber on every job. Written pricing before we start. Same rate day or night."
        primaryBtn={{ text: `CALL ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST SERVICE ONLINE', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
