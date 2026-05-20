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
  { icon: 'UserCheck', title: 'We dispatch a licensed technician.', description: 'Every emergency call is handled by a licensed Master Plumber or Master Gasfitter — not an apprentice working unsupervised.' },
  { icon: 'Clock', title: 'We give you an ETA.', description: 'You know when we\'re coming. We give you a call or text update when the technician is en route. We do not overbook.' },
  { icon: 'FileText', title: 'Diagnose and provide written pricing.', description: 'We assess the problem and give you written pricing before any work begins. You approve the price. We do the work.' },
  { icon: 'CheckCircle2', title: 'Complete repair and clean up.', description: 'The job is done right the first time, to code, with no mess left behind. Same rate regardless of time of day.' },
];

const EMERGENCY_FAQ = [
  {
    question: 'How fast does Definitive Mechanical respond to plumbing emergencies?',
    answer: 'We answer every call 24/7/365 with a live dispatcher — not voicemail. Response times vary by location and time of day, but we dispatch immediately upon call confirmation. We serve Maryland, Washington DC, and Northern Virginia.',
  },
  {
    question: 'Do you charge extra for after-hours emergency plumbing?',
    answer: 'No. Definitive Mechanical charges the same rate regardless of time of day. The rate you receive at 2am is the same as the rate at 2pm. We do not add after-hours, weekend, or holiday surcharges.',
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
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-navy)' }}>
          Plumbing Emergency? Call {BUSINESS.phone} — Live Dispatcher Answering 24/7, 365 Days
        </span>
      </a>

      {/* HERO */}
      <section style={{
        minHeight: '65vh',
        background: 'linear-gradient(135deg, var(--brand-navy-dark) 0%, var(--brand-navy) 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,158,198,0.04)',
          transform: 'skewY(-4deg)',
          transformOrigin: 'top left',
          pointerEvents: 'none',
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Emergency Plumbing' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                24/7 EMERGENCY SERVICE  MD, DC & NORTHERN VIRGINIA
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, marginBottom: '16px' }}>
                24/7 Emergency Plumbing Service — Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '32px' }}>
                Definitive Mechanical provides 24/7 emergency plumbing service across Maryland, Washington DC, and Northern Virginia. A live dispatcher answers every call — day or night, weekday or holiday. Every emergency call is handled by a licensed Master Plumber and Master Gasfitter. We arrive, diagnose, and provide written pricing before work begins.
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
                 Licensed Master Plumber on Every Emergency Call &nbsp; Upfront Flat Pricing &nbsp; MD, DC, VA & DE Licensed
              </p>

              <BookNowButton variant="outline" text="REQUEST EMERGENCY SERVICE" href="/contact" size="md" />
            </div>

            <div className="hidden lg:block lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="24/7 emergency plumber Maryland DC Northern Virginia — Definitive Mechanical"
                style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', objectFit: 'cover', aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT QUALIFIES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EMERGENCY SITUATIONS"
            heading="What qualifies as a plumbing emergency?"
            subtext="A plumbing emergency is any situation that poses an immediate risk to your property, safety, or water supply — problems that cannot safely wait until the next business day."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {EMERGENCY_SCENARIOS.map((scenario) => (
              <div key={scenario.title} style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                background: 'white',
                border: '1px solid #E8EFF5',
                borderRadius: '4px',
                padding: '16px',
              }}>
                <scenario.icon size={22} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', marginBottom: '2px' }}>{scenario.title}</p>
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
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR EMERGENCY PROCESS"
            heading="How quickly does Definitive Mechanical respond to plumbing emergencies?"
            subtext="We answer every emergency call with a live dispatcher — not a voicemail, not an after-hours recording. We dispatch licensed technicians across our full MD, DC, and Northern VA service area 24/7/365 — including weekends, holidays, and severe weather."
            centered
          />
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
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '16px', marginBottom: '6px' }}>
                Same rate regardless of time of day.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7 }}>
                We do not charge a premium for nights, weekends, or holidays. The rate you receive at 2am is the same as the rate at 2pm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO DO BEFORE WE ARRIVE */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EMERGENCY SERVICE AREA"
            heading="Where does Definitive Mechanical provide 24/7 emergency plumbing?"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { state: 'Maryland', areas: ["Prince George's County", 'Montgomery County', 'Howard County', 'Anne Arundel County', 'Charles County'], cities: 'Largo, Bowie, Rockville, Bethesda, Waldorf' },
              { state: 'Washington DC', areas: ['All DC Wards & Neighborhoods'], cities: 'Georgetown, Capitol Hill, Dupont Circle, Navy Yard, NoMa' },
              { state: 'Northern Virginia', areas: ['Fairfax County', 'Arlington County', 'Loudoun County', 'Prince William County'], cities: 'Alexandria, Arlington, McLean, Springfield, Vienna' },
            ].map((area) => (
              <div key={area.state} style={{ background: 'var(--surface-1)', borderRadius: '6px', padding: '24px', borderTop: '3px solid var(--brand-cyan)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>
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
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" heading="Emergency Plumbing Questions" centered />
          <div style={{ background: 'white', borderRadius: '6px', padding: '8px 32px', boxShadow: '0 2px 12px rgba(6,59,99,0.08)' }}>
            <FAQAccordion items={EMERGENCY_FAQ} schema={true} variant="light" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        heading="Plumbing emergency in Maryland, DC, or Northern Virginia?"
        subtext="Our live dispatcher answers 24/7/365. Licensed Master Plumber dispatched immediately. Same rate day or night."
        primaryBtn={{ text: `CALL ${BUSINESS.phone} NOW`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST SERVICE ONLINE', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
