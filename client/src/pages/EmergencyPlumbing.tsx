import { Phone, Zap, Waves, AlertTriangle, Flame, Droplets, Thermometer, AlertCircle, Home, CloudRain, Building2, Activity, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import ProcessStep from '@/components/ui/ProcessStep';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';

const EMERGENCY_SCENARIOS = [
  { icon: Waves, title: 'Burst or ruptured pipes', desc: 'Active flooding or water spraying from broken pipes' },
  { icon: AlertTriangle, title: 'Sewer line backup', desc: 'Sewage entering the home or building' },
  { icon: Flame, title: 'Gas leak or gas smell', desc: 'Evacuate immediately, call from outside' },
  { icon: Droplets, title: 'No water pressure', desc: 'Sudden complete loss of water supply' },
  { icon: Thermometer, title: 'Water heater failure', desc: 'Leaking tank, no hot water, unusual sounds' },
  { icon: AlertCircle, title: 'Frozen pipes', desc: 'Especially in MD/DC/VA winter conditions' },
  { icon: AlertCircle, title: 'Overflowing toilet', desc: 'Cannot be controlled, risk of sewage exposure' },
  { icon: Home, title: 'Major water leak', desc: 'Under slab or behind walls, structural risk' },
  { icon: CloudRain, title: 'Flooded basement', desc: 'From a plumbing failure, immediate water damage risk' },
  { icon: Building2, title: 'Commercial facility failure', desc: 'Production or health code compliance at risk' },
  { icon: Zap, title: 'Gas appliance emergency', desc: 'Appliance malfunction with gas connection' },
  { icon: Activity, title: 'Main line failure', desc: 'Water main break affecting full property' },
];

const RESPONSE_STEPS = [
  { icon: 'Phone', title: 'A live person answers.', description: 'Not a machine. Not a scheduling portal. A real dispatcher who understands plumbing.' },
  { icon: 'Search', title: 'We assess your situation.', description: 'The dispatcher asks the right questions to understand urgency, the type of problem, and the safest immediate steps you can take while we\'re in transit.' },
  { icon: 'UserCheck', title: 'We dispatch a licensed technician.', description: 'Our team of licensed plumbing professionals handles every emergency call — all work performed under Master Plumber license.' },
  { icon: 'Clock', title: 'We give you an ETA.', description: 'You know when we\'re coming. We give you a call or text update when the technician is en route. We do not overbook.' },
  { icon: 'FileText', title: 'Diagnose and provide written pricing.', description: 'We assess the problem and give you written pricing before any work begins. You approve the price. We do the work.' },
  { icon: 'CheckCircle2', title: 'Complete repair and clean up.', description: 'The job is done right the first time, to code, with no mess left behind. All services have a trip fee, disclosed before dispatch.' },
];

const EMERGENCY_FAQ = [
  {
    question: 'How fast does Definitive Mechanical respond to plumbing emergencies?',
    answer: 'We answer every call 24/7/365 with a live dispatcher — not voicemail. Response times vary by location and time of day, but we dispatch immediately upon call confirmation. We serve Maryland, Washington DC, and Northern Virginia.',
  },
  {
    question: 'Do you charge extra for after-hours emergency plumbing?',
    answer: 'All services include a trip fee. Written pricing is provided before any work begins — the price you agree to is the price you pay.',
  },
  {
    question: 'What should I do while waiting for the emergency plumber?',
    answer: 'For burst pipes: locate and close your main water shut-off valve. For gas leaks: evacuate immediately and call from outside. For sewer backup: stop using all water fixtures. For water heater leaks: turn off the cold water supply to the unit. Our dispatcher will guide you through the appropriate steps for your specific situation.',
  },
  {
    question: 'Are you licensed for emergency plumbing in DC and Virginia?',
    answer: 'Yes. We hold active Master Plumber and Master Gasfitter licenses in Maryland (State #96958, WSSC #73696), Washington DC (#PGM1002236), Virginia (#2710064209), and Delaware (#PL-0012866). Every emergency call is handled by a licensed technician in the correct jurisdiction.',
  },
  {
    question: 'Can you handle commercial plumbing emergencies?',
    answer: 'Yes. Definitive Mechanical handles commercial facility emergencies including office buildings, retail properties, restaurants, schools, and government facilities. We are MDOT MBE Certified and VA SWaM Certified. Call (301) 679-5849 for immediate commercial emergency dispatch.',
  },
];

export default function EmergencyPlumbing() {
  return (
    <>
      {/* Emergency Top Bar */}
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: 'var(--brand-cyan)',
          padding: '12px 16px',
          textDecoration: 'none',
        }}
      >
        <Zap size={16} color="var(--brand-navy)" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0A0A0A' }}>
          Plumbing Emergency? Call {BUSINESS.phone} — Live Dispatcher Answering 24/7, 365 Days
        </span>
      </a>

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
            src="/manus-storage/service-emergency-plumbing_c2ea2831.webp"
            alt="24/7 emergency plumbing Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Emergency Plumbing' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                24/7 EMERGENCY SERVICE  MD, DC & NORTHERN VIRGINIA
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, marginBottom: '16px' }}>
                24/7 Emergency Plumbing Service — Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '32px' }}>
                Definitive Mechanical provides 24/7 emergency plumbing service across Maryland, Washington DC, and Northern Virginia. A live dispatcher answers every call — day or night, weekday or holiday. Licensed plumbing professionals dispatched — work performed under Master Plumber license. We arrive, diagnose, and provide written pricing before work begins.
              </p>

              {/* Dominant CTA */}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'var(--brand-cyan)',
                  color: 'var(--brand-navy)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderRadius: '2px',
                  minHeight: '64px',
                  padding: '0 32px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  marginBottom: '12px',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#007BA0'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,158,198,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--brand-cyan)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <Phone size={24} />
                CALL {BUSINESS.phone} — EMERGENCY LINE OPEN 24/7
              </a>

              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '16px' }}>
                 Licensed Plumbing Professionals on Every Emergency Call &nbsp; Upfront Flat Pricing &nbsp; MD, DC, VA & DE Licensed
              </p>

              <BookNowButton variant="outline" text="REQUEST EMERGENCY SERVICE" href="/contact" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT QUALIFIES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>EMERGENCY SITUATIONS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>What qualifies as a plumbing emergency?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>A plumbing emergency is any situation that poses an immediate risk to your property, safety, or water supply — problems that cannot safely wait until the next business day.</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {EMERGENCY_SCENARIOS.map((scenario) => (
              <div key={scenario.title} style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                background: 'white',
                border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)',
                borderRadius: '4px',
                padding: '16px',
              }}>
                <scenario.icon size={22} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: '#0A0A0A', fontSize: '14px', marginBottom: '2px' }}>{scenario.title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-3)', fontSize: '13px' }}>{scenario.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', color: 'var(--ink-2)', fontSize: '15px', textAlign: 'center', marginBottom: '24px' }}>
            If you are unsure whether your situation qualifies, call anyway. Our dispatcher will help you assess the situation at no cost.
          </p>
          <div style={{ textAlign: 'center' }}>
            <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
          </div>
        </div>
      </section>

      {/* HOW WE RESPOND */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>OUR EMERGENCY PROCESS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>How quickly does Definitive Mechanical respond to plumbing emergencies?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>We answer every emergency call with a live dispatcher — not a voicemail, not an after-hours recording. We dispatch licensed technicians across our full MD, DC, and Northern VA service area 24/7/365 — including weekends, holidays, and severe weather.</p>
        </div>
          <div>
            {RESPONSE_STEPS.map((step, index) => (
              <ProcessStep
                key={step.title}
                number={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === RESPONSE_STEPS.length - 1}
              />
            ))}
          </div>

          {/* Promise box */}
          <div style={{
            background: 'white',
            borderLeft: '4px solid var(--brand-cyan)',
            borderRadius: '4px',
            padding: '24px',
            maxWidth: '600px',
            margin: '32px auto 0',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
          }}>
            <ShieldCheck size={32} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: '#0A0A0A', fontSize: '16px', marginBottom: '6px' }}>
                All services have a trip fee.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7 }}>
                The trip fee is disclosed before dispatch. Written pricing is provided before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO DO BEFORE WE ARRIVE */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <SectionHeading
            eyebrow="WHILE YOU WAIT"
            heading="What should I do before the emergency plumber arrives?"
            centered
            light
          />
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                If you have a burst pipe or major leak:
              </p>
              {[
                'Locate your main water shut-off valve and close it',
                'Turn off electricity to flooded areas at the breaker panel',
                'Move valuables and electronics away from water',
                'Do not use electrical appliances in wet areas',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <ChevronRight size={16} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                If you smell gas:
              </p>
              {[
                'Do not turn any switches on or off',
                'Do not use your phone inside the building',
                'Evacuate everyone immediately',
                'Call 911 and then call us from outside',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <ChevronRight size={16} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>EMERGENCY SERVICE AREA</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>Where does Definitive Mechanical provide 24/7 emergency plumbing?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { state: 'Maryland', areas: ["Prince George's County", 'Montgomery County', 'Howard County', 'Anne Arundel County', 'Charles County'], cities: 'Largo, Bowie, Rockville, Bethesda, Waldorf' },
              { state: 'Washington DC', areas: ['All DC Wards & Neighborhoods'], cities: 'Georgetown, Capitol Hill, Dupont Circle, Navy Yard, NoMa' },
              { state: 'Northern Virginia', areas: ['Fairfax County', 'Arlington County', 'Loudoun County', 'Prince William County'], cities: 'Alexandria, Arlington, McLean, Springfield, Vienna' },
            ].map((area) => (
              <div key={area.state} style={{ background: '#F0F5FA', borderRadius: '6px', padding: '24px', borderTop: '3px solid var(--brand-cyan)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>
                  {area.state}
                </h3>
                {area.areas.map((a) => (
                  <p key={a} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--ink-2)', marginBottom: '4px' }}>{a}</p>
                ))}
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--ink-3)', marginTop: '8px' }}>{area.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Emergency Plumbing Questions</h2>
        </div>
                      <FAQAccordion items={EMERGENCY_FAQ} schema={true} variant="dark" />
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        heading="Plumbing emergency in Maryland, DC, or Northern Virginia?"
        subtext="Our live dispatcher answers 24/7/365. Licensed plumbing professionals dispatched — work performed under Master Plumber license. Trip fee applies to all services."
        primaryBtn={{ text: `CALL ${BUSINESS.phone} NOW`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST SERVICE ONLINE', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
