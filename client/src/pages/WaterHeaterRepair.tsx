import { Thermometer, CheckCircle2, ChevronRight, Flame, Zap } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';

const WATER_HEATER_SERVICES = [
  { title: 'Water Heater Repair', desc: 'No hot water, inconsistent temperature, strange noises, or discolored water — we diagnose and repair all major brands of gas and electric water heaters.' },
  { title: 'Water Heater Replacement', desc: 'When repair is not cost-effective, we provide same-day replacement of standard tank water heaters. Financing available through Synchrony.' },
  { title: 'Tankless Water Heater Installation', desc: 'On-demand hot water with no standby heat loss. We install and service all major brands of tankless gas and electric water heaters.' },
  { title: 'Tankless Water Heater Repair', desc: 'Error codes, ignition failures, flow sensor issues — we service all major brands of tankless water heaters across the DMV.' },
  { title: 'Water Heater Flush & Maintenance', desc: 'Annual sediment flush to extend water heater life and maintain efficiency. Anode rod inspection included.' },
  { title: 'Commercial Water Heater Service', desc: 'Commercial and industrial water heater repair and replacement for facilities, restaurants, schools, and government buildings.' },
];

const WATER_HEATER_FAQ = [
  {
    question: 'How much does water heater repair cost in Maryland?',
    answer: 'Water heater repair costs in Maryland depend on the type of failure, the unit type (gas, electric, or tankless), and whether parts are needed. Simple repairs like thermocouple replacement or element replacement typically range from $150-$350. Major repairs or replacements vary. Definitive Mechanical provides written pricing before any work begins. Call (301) 679-5849 for an estimate.',
  },
  {
    question: 'How do I know if my water heater needs to be repaired or replaced?',
    answer: 'Water heaters typically last 8-12 years for tank units and 15-20 years for tankless units. If your unit is more than 10 years old and experiencing problems, replacement is often more cost-effective than repair. Signs that replacement may be the better option include: rust-colored water, rumbling or popping sounds, visible corrosion on the tank, or a unit that has required multiple repairs in the past year. We will give you an honest assessment — not a sales pitch.',
  },
  {
    question: 'Do you install tankless water heaters in Maryland and Virginia?',
    answer: 'Yes. We install and service tankless water heaters across Maryland, Washington DC, and Northern Virginia. Tankless units require proper gas line sizing, venting, and electrical connections — all of which we handle as a licensed Master Plumber and Master Gasfitter. We install all major brands.',
  },
  {
    question: 'How quickly can you replace a water heater?',
    answer: 'In most cases, we can complete a standard tank water heater replacement the same day you call. Tankless installations may require a site assessment first to evaluate gas line sizing and venting requirements. Call (301) 679-5849 to discuss your specific situation.',
  },
  {
    question: 'Is financing available for water heater replacement?',
    answer: 'Yes. We offer consumer financing through Synchrony for water heater replacement and tankless installation. Apply online in 60 seconds at mysynchrony.com/mmc/S6240351600. Monthly payment options are available for qualified customers.',
  },
];

export default function WaterHeaterRepair() {
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
            src="/manus-storage/service-water-heater-repair_eb0f11ba.webp"
            alt="Water heater repair Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Water Heater Repair' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                WATER HEATER REPAIR & REPLACEMENT  MD, DC & NORTHERN VIRGINIA
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Water Heater Repair & Replacement — Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '32px' }}>
                Definitive Mechanical repairs and replaces gas, electric, and tankless water heaters across Maryland, Washington DC, and Northern Virginia. Same-day service available. Financing available for replacements. Licensed Master Plumber and Master Gasfitter on every job.
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
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WATER HEATER SERVICES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Water heater repair, replacement, and installation in MD, DC & VA</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>From emergency no-hot-water calls to tankless upgrades and commercial water heater service, we handle the full range of water heater work across the DMV.</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WATER_HEATER_SERVICES.map((service) => (
              <div key={service.title} style={{
                background: 'white',
                border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)',
                borderRadius: '6px',
                padding: '28px',
                boxShadow: '0 4px 16px rgba(6,59,99,0.10)',
              }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(0,160,200,0.12)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Thermometer size={22} color="var(--brand-cyan)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '17px', marginBottom: '8px' }}>{service.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNS YOU NEED SERVICE */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>SIGNS OF WATER HEATER FAILURE</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>How do you know your water heater needs service?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'No hot water or insufficient hot water', desc: 'The most common symptom. Could indicate a failed heating element, thermostat, or gas valve.' },
              { title: 'Rust-colored or discolored water', desc: 'Indicates corrosion inside the tank. Often a sign the anode rod has failed and the tank is near the end of its life.' },
              { title: 'Rumbling, popping, or banging sounds', desc: 'Sediment buildup on the bottom of the tank. Annual flushing can prevent this from becoming a major problem.' },
              { title: 'Water pooling around the base of the unit', desc: 'Could indicate a leaking pressure relief valve, loose connections, or a failing tank. Do not ignore water at the base of a water heater.' },
              { title: 'Inconsistent water temperature', desc: 'Fluctuating hot water temperature typically indicates a failing thermostat or heating element.' },
              { title: 'Unit is 10+ years old', desc: 'Standard tank water heaters have an average lifespan of 8-12 years. If yours is approaching or past this age, a proactive replacement can prevent an emergency.' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px' }}>
                <Thermometer size={20} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', marginBottom: '4px' }}>{item.title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TANKLESS */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <SectionHeading
            eyebrow="TANKLESS WATER HEATERS"
            heading="Is a tankless water heater right for your home or building?"
            subtext="Tankless water heaters provide on-demand hot water with no standby heat loss — and a lifespan of 15-20 years versus 8-12 for standard tank units."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: 'Unlimited Hot Water', desc: 'On-demand heating means no running out of hot water during peak usage.' },
              { icon: Flame, title: 'Energy Efficient', desc: 'No standby heat loss. Only heats water when you need it.' },
              { icon: CheckCircle2, title: 'Longer Lifespan', desc: '15-20 year lifespan versus 8-12 for standard tank units.' },
              { icon: ChevronRight, title: 'Space Saving', desc: 'Wall-mounted units free up significant floor space versus tank units.' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'var(--brand-blue-soft)', border: '1px solid var(--brand-blue-tint)', borderRadius: '6px', padding: '24px', textAlign: 'center' }}>
                <item.icon size={28} color="var(--brand-cyan)" style={{ margin: '0 auto 12px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '8px' }}>{item.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <BookNowButton bg="blue" variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
          </div>
        </div>
      </section>

      {/* FINANCING */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
            FINANCING AVAILABLE
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '16px' }}>
            Financing available for water heater replacement and tankless installation
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 24px' }}>
            Apply for Synchrony consumer financing in 60 seconds. Monthly payment options available for qualified customers. No impact to your credit score during pre-qualification.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookNowButton bg="light" variant="primary" text="APPLY FOR FINANCING" href={BUSINESS.financing} size="lg" />
            <BookNowButton bg="light" variant="secondary" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Water Heater Repair & Replacement Questions</h2>
        </div>
            <FAQAccordion items={WATER_HEATER_FAQ} schema={true} variant="light" />
        </div>
      </section>

      <CTABanner
        heading="Need water heater repair or replacement in Maryland, DC, or Northern Virginia?"
        subtext="Same-day service available. Financing for replacements. Licensed plumbing professionals on every job — work under Master Plumber license."
        primaryBtn={{ text: `CALL ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST SERVICE ONLINE', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
