import { AlertTriangle, Phone, Clock, Unlink, Zap, Activity, UserX, Lock, Search, Wrench, Gauge, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import ProcessStep from '@/components/ui/ProcessStep';

const FAQ_ITEMS = [
  { question: "What do I do if I smell gas in my home?", answer: "Leave the building immediately without operating any electrical switches. Once safely outside, call your gas company's emergency line. Call 911 if there is immediate danger. Do not re-enter until the gas company clears the scene. After the gas supply is shut off and the scene is safe, call Definitive Mechanical at (301) 679-5849 for licensed gas leak repair." },
  { question: "Are you available 24/7 for gas emergencies?", answer: "Yes. Gas leak repair service is available 24/7, 365 days a year. We dispatch immediately after the gas company has shut off supply and cleared the scene for entry. Call (301) 679-5849 at any hour." },
  { question: "Are you a licensed Master Gasfitter?", answer: "Yes. Definitive Mechanical holds Master Gasfitter licenses in Maryland (State #96958, WSSC #73696), Washington DC (#PGM1002236), Virginia (#2710064209), and Delaware (#PL-0012866). Gas leak repair must be performed by a licensed gasfitter — it is a legal requirement, not a preference." },
];

const REPAIR_STEPS = [
  { icon: "Search", title: "Leak location.", description: "Using pressure testing equipment and gas detection instruments, we locate the precise source of the leak — which may not be at the point where the gas smell is strongest." },
  { icon: "Wrench", title: "Repair or replacement.", description: "Depending on the cause, we repair the failed fitting, replace the damaged pipe section, replace the appliance connector, or address whatever the confirmed source of the leak is." },
  { icon: "Gauge", title: "Pressure testing.", description: "After repair, we pressure-test the gas system to confirm there are no remaining leaks before requesting the gas company to restore supply." },
  { icon: "FileText", title: "Permit and inspection if required.", description: "Significant gas line repairs require permits in most jurisdictions. We handle permit application and coordinate inspection." },
  { icon: "CheckCircle2", title: "Gas company restoration.", description: "We coordinate with your gas company for supply restoration and appliance relight after the repair is complete and tested." },
];

export default function GasLeakRepair() {
  return (
    <>
      {/* SAFETY NOTICE — above hero */}
      <a href="tel:+13016795849" style={{ background: '#C0392B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 16px', textDecoration: 'none', flexWrap: 'wrap' }}>
        <AlertTriangle size={20} color="white" style={{ flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
          IF YOU SMELL GAS RIGHT NOW: Leave immediately  Do not use any switches or phone inside  Call your gas company from outside  Call 911 if needed  Then call (301) 679-5849 for licensed repair
        </span>
      </a>

      {/* SECTION 1: HERO */}
      <section style={{ minHeight: '55vh', background: 'linear-gradient(135deg, var(--brand-navy-dark) 0%, var(--brand-navy) 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,158,198,0.07)', transform: 'skewY(-4deg)', transformOrigin: 'top left', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Gas Line Repair', href: '/gas-line-repair' }, { label: 'Gas Leak Repair' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">GAS LEAK REPAIR  24/7 EMERGENCY  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '20px' }}>
                Gas Leak Repair — 24/7 Emergency Gas Service in Maryland, DC & Northern Virginia
              </h1>

              {/* Safety box */}
              <div style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,180,0,0.5)', borderRadius: '6px', padding: '24px', marginBottom: '24px', maxWidth: '560px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                  <AlertTriangle size={32} color="#F59E0B" />
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F59E0B', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '12px' }}> IF YOU SMELL GAS RIGHT NOW:</p>
                <div className="space-y-2">
                  {["Leave the building immediately — do not turn any lights or switches on or off", "Do not use your phone inside the building", "Once safely outside, call your gas company's emergency line", "Call 911 if there is any active danger", "Once the gas company has responded and shut off supply, call Definitive Mechanical"].map((item, i) => (
                    <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F59E0B', fontSize: '14px', flexShrink: 0, minWidth: '18px' }}>{i + 1}.</span>
                      <span style={{ fontFamily: 'var(--font-body)', color: 'white', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dominant phone CTA */}
              <a href="tel:+13016795849" style={{ background: 'var(--brand-cyan)', borderRadius: '4px', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', textDecoration: 'none', width: '100%', maxWidth: '560px', marginBottom: '20px' }}>
                <Phone size={24} color="var(--brand-navy)" />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CALL (301) 679-5849 — EMERGENCY GAS REPAIR, 24/7</span>
              </a>

              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '12px' }}>
                After your gas company has shut off supply and cleared the scene, Definitive Mechanical provides licensed gas leak repair 24/7 across Maryland, Washington DC, and Northern Virginia. Every gas leak repair is performed by a licensed Master Gasfitter. We locate the leak, repair the line, pressure-test, and restore service.
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'rgba(255,255,255,0.65)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                MD Gasfitter #96958  DC #PGM1002236  VA #2710064209  DE #PL-0012866
              </p>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <img src="/manus-storage/service-gas-leak-repair_426928c3.jpg" alt="Licensed gas leak repair 24/7 Maryland DC Virginia — Definitive Mechanical Master Gasfitter" loading="eager" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAUSES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="GAS LEAK CAUSES" heading="What causes gas leaks in homes and commercial properties?" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { Icon: Clock, title: "Corroded or deteriorating pipe", body: "Particularly in older homes with aging steel or cast iron gas supply lines — a common issue in pre-1980s DMV properties." },
              { Icon: Unlink, title: "Loose or failed fittings", body: "Threaded connections that have loosened over time or were improperly installed — often at appliance connections." },
              { Icon: Zap, title: "Damaged flexible appliance connectors", body: "The corrugated metal connector between the wall supply and the appliance can be damaged by appliance movement, corrosion, or age." },
              { Icon: Activity, title: "Ground movement or physical damage", body: "Soil settling, frost heave (common in MD/VA winters), or impact damage to buried or exposed lines." },
              { Icon: UserX, title: "Improper installation", body: "Gas work performed without a licensed gasfitter is among the most common causes of documented residential gas incidents." },
              { Icon: Lock, title: "Failed shut-off valve", body: "Valves that no longer seal completely when closed — often discovered during annual gas system checks." },
            ].map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderTop: '3px solid #F59E0B', borderRadius: '4px', padding: '20px', border: '1px solid #E8EFF5' }}>
                <Icon size={24} color="#F59E0B" style={{ marginBottom: '10px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px', marginBottom: '6px' }}>{title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: REPAIR PROCESS */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="HOW WE REPAIR GAS LEAKS" heading="How does Definitive Mechanical repair a gas leak?" subtext="Once the gas company has shut off the supply and cleared the scene for entry:" centered />
          <div className="max-w-3xl mx-auto">
            {REPAIR_STEPS.map((step, i) => (
              <ProcessStep key={step.title} number={i + 1} icon={step.icon} title={step.title} description={step.description} isLast={i === REPAIR_STEPS.length - 1} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <BookNowButton variant="phone" text="CALL (301) 679-5849 — 24/7 GAS REPAIR" href="tel:+13016795849" size="lg" />
          </div>
        </div>
      </section>

      {/* SECTION 4: LICENSING */}
      <section style={{ background: 'var(--brand-navy)', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="LICENSING" heading="Are you licensed to repair gas leaks in Maryland, DC, and Virginia?" centered light />
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 32px' }}>
            Yes. Gas leak repair requires a licensed Master Gasfitter in every DMV jurisdiction. Definitive Mechanical holds active Master Gasfitter licenses in Maryland (State #96958, WSSC #73696), Washington DC (#PGM1002236), Virginia (#2710064209), and Delaware (#PL-0012866). Gas leak repair performed by an unlicensed contractor creates both safety risk and legal liability for the property owner. Do not allow unlicensed work on any gas system.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {["MD #96958", "DC #PGM1002236", "VA #2710064209", "DE #PL-0012866"].map((badge) => (
              <div key={badge} style={{ background: 'white', color: 'var(--brand-navy)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', padding: '10px 20px', borderRadius: '4px' }}>{badge}</div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Gas Line Repair', href: '/gas-line-repair' }, { icon: Search, label: 'Gas Line Installation', href: '/gas-line-installation' }, { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' }, { icon: CheckCircle2, label: 'Licenses & Certifications', href: '/licenses-certifications' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: '#F8FAFC', border: '1px solid #E8EFF5', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <item.icon size={20} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" heading="Questions about gas leak repair in MD, DC & Northern VA" centered />
          <div style={{ background: 'white', borderRadius: '6px', padding: '8px 32px' }}>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" />
          </div>
        </div>
      </section>

      <CTABanner heading="Gas company has cleared the scene. Ready for the repair?" subtext="Licensed Master Gasfitter. Pressure-tested. Permitted where required. Same rate 24/7." primaryBtn={{ text: "CALL NOW — (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST EMERGENCY GAS SERVICE", href: "/contact" }} variant="gradient" />
    </>
  );
}
