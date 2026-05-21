import { Infinity, TrendingDown, Clock, Maximize2, ShieldCheck, DollarSign, GitBranch, Zap, Snowflake, ChevronRight, Wrench, CreditCard, Flame } from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "Is a tankless water heater worth it?", answer: "For most homeowners in Maryland, DC, and Northern Virginia who plan to stay in their home for 5+ years, yes — the energy savings, longer lifespan, and continuous hot water supply typically justify the higher upfront cost. For homes with very low hot water usage or short-term ownership plans, a standard tank replacement may make more financial sense. We give honest guidance based on your specific situation." },
  { question: "How long do tankless water heaters last?", answer: "Tankless water heaters typically last 15-20 years with regular maintenance, including annual descaling in hard water areas. This is significantly longer than the 8-12 year average for tank-style water heaters, which contributes to tankless being cost-competitive over a full ownership period." },
  { question: "What size tankless water heater do I need?", answer: "Sizing depends on your peak simultaneous hot water demand (how many fixtures run at the same time) and your incoming water temperature (colder in winter, which affects the temperature rise required). Our licensed technicians calculate the correct size for your household or facility — under-sizing a tankless unit is one of the most common installation mistakes made by unlicensed installers." },
  { question: "Can a tankless water heater run out of hot water?", answer: "A properly sized tankless unit will not run out of hot water the way a tank does. It heats water continuously as long as demand exists. However, an undersized unit may not maintain target temperature if multiple high-demand fixtures run simultaneously — which is why correct sizing by a licensed plumber matters." },
];

const PRICING_ROWS = [
  { type: "Gas tankless (residential, standard)", range: "$1,800-$3,000" },
  { type: "Gas tankless (high-output or whole-home)", range: "$2,500-$3,500+" },
  { type: "Electric tankless (residential)", range: "$1,200-$2,500" },
  { type: "Commercial tankless installation", range: "Custom quote based on demand load" },
];

const REPAIR_ITEMS = [
  { issue: "Ignition failure", detail: "Unit fires up error codes, no heat produced" },
  { issue: "Scale/mineral buildup in heat exchanger", detail: "Common in hard water areas of MD and Northern Virginia; reduces flow and efficiency" },
  { issue: "Flow sensor failure", detail: "Unit does not activate when hot water is opened" },
  { issue: "Venting issues", detail: "Improper or blocked venting causing shutdown or error codes" },
  { issue: "Temperature fluctuations", detail: "Inconsistent output temperature from failed components" },
  { issue: "Error code diagnosis", detail: "Reading and resolving manufacturer-specific fault codes for all major brands" },
];

export default function TanklessWaterHeaters() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section style={{
        minHeight: '58vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-tankless-water-heater_e4ff5b8e.webp"
            alt="Tankless water heater installation Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Water Heater Repair', href: '/water-heater-repair' }, { label: 'Tankless Water Heaters' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">TANKLESS WATER HEATERS  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Tankless Water Heater Installation & Repair in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical installs and repairs tankless water heaters for homes and businesses across Maryland, Washington DC, and Northern Virginia. Tankless systems provide hot water on demand, reduce energy costs, and last significantly longer than tank units. Every installation performed by licensed plumbing professionals under Master Plumber license. Financing available. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber", "Installation & Repair", "Residential & Commercial", "Financing Available", "Gas & Electric Units"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST TANKLESS ESTIMATE" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>HOW TANKLESS WORKS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>What is a tankless water heater and how does it work?</h2>
        </div>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                A tankless water heater — also called an on-demand water heater — heats water directly as it flows through the unit rather than storing a preheated tank of water. When you open a hot water tap, cold water travels through a pipe into the unit where it is heated by a gas burner or electric element. The result: hot water delivered continuously, without the wait for a tank to refill and reheat.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Traditional tank water heaters maintain a constant supply of heated water — which means they are continuously using energy to keep that water hot even when no one is using it. This standby heat loss accounts for 15-20% of a typical home's water heating energy use according to the U.S. Department of Energy. Tankless units eliminate standby loss entirely.
              </p>
              <div style={{ background: '#F0F5FA', borderRadius: '6px', padding: '20px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#0A0A0A', fontSize: '18px', lineHeight: 1.5 }}>
                  "15-20% of home water heating energy is wasted on standby heat loss in tank units. Tankless eliminates it."
                </p>
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

      {/* SECTION 3: BENEFITS */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>BENEFITS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>What are the benefits of a tankless water heater?</h2>
        </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { Icon: Infinity, title: "Continuous hot water supply.", body: "A properly sized tankless unit never runs out of hot water the way a tank unit does during high-demand periods — multiple showers, laundry, and dishwasher running simultaneously." },
              { Icon: TrendingDown, title: "Lower energy costs.", body: "The U.S. Department of Energy estimates tankless water heaters can be 24-34% more energy efficient than conventional storage tanks for homes that use 41 gallons or less of hot water daily." },
              { Icon: Clock, title: "Longer service life.", body: "Tankless units typically last 15-20 years — compared to 8-12 years for tank units. Over a 20-year period, the total cost of ownership for tankless is often lower despite the higher upfront installation cost." },
              { Icon: Maximize2, title: "Space savings.", body: "Tankless units are wall-mounted and occupy a fraction of the floor space of a 50-gallon tank. This matters in smaller Maryland rowhouses, DC condos, and Northern Virginia townhomes where mechanical space is limited." },
              { Icon: ShieldCheck, title: "Reduced water damage risk.", body: "A failed tank water heater can release 40-80 gallons of water into your home. A tankless unit has no tank to rupture." },
            ].map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <Icon size={32} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#0A0A0A', fontSize: '16px', marginBottom: '6px' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.6 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HONEST DRAWBACKS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>BEING HONEST WITH YOU</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>Are there any drawbacks to tankless water heaters?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>Being honest matters more than making a sale. Tankless systems are not the right fit for every home or budget.</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { Icon: DollarSign, title: "Higher upfront cost.", body: "Tankless installation typically costs $1,800-$3,500+ for gas units — compared to $700-$1,600 for a standard tank replacement. The long-term savings are real, but the upfront investment is larger. Financing available through Synchrony." },
              { Icon: GitBranch, title: "May require gas line upgrades.", body: "High-output gas tankless units often require a larger gas supply line than what currently serves the home's water heater location. If your existing gas line is undersized, a gas line run increases the installation cost." },
              { Icon: Zap, title: "May require electrical upgrades.", body: "Electric tankless units — particularly whole-home units — draw significant amperage and often require dedicated circuit additions or panel upgrades." },
              { Icon: Snowflake, title: "Cold climate performance.", body: "In Maryland and Northern Virginia winters, incoming water temperature drops significantly, which can reduce the flow rate. Proper sizing accounts for this — which is why sizing by a licensed plumber matters." },
            ].map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid #F59E0B', borderRadius: '4px', padding: '24px' }}>
                <Icon size={28} color="#F59E0B" style={{ marginBottom: '12px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#0A0A0A', fontSize: '15px', marginBottom: '8px' }}>{title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.7, maxWidth: '560px', margin: '24px auto 0', textAlign: 'center' }}>
            We will assess your home's existing gas and electrical infrastructure during the estimate and tell you exactly what the installation will require before you commit.
          </p>
        </div>
      </section>

      {/* SECTION 5: REPAIR SERVICES */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <SectionHeading eyebrow="TANKLESS REPAIR" heading="Do you repair tankless water heaters?" subtext="Yes. Definitive Mechanical repairs gas and electric tankless water heaters from all major manufacturers." centered light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto">
            {REPAIR_ITEMS.map((item) => (
              <div key={item.issue} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ChevronRight size={18} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'white', fontSize: '14px', marginBottom: '4px' }}>{item.issue}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.5 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontStyle: 'italic', textAlign: 'center', marginTop: '24px' }}>
            Annual descaling/flushing is recommended for tankless units in the DMV's moderate-to-hard water areas to maintain efficiency and prevent heat exchanger damage. Ask about our maintenance service when you call.
          </p>
        </div>
      </section>

      {/* SECTION 6: PRICING */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>PRICING GUIDE</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>What does tankless water heater installation cost in Maryland, DC, or Virginia?</h2>
        </div>
          <div style={{ background: 'white', borderRadius: '6px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', maxWidth: '672px', margin: '0 auto 24px', overflow: 'hidden' }}>
            <div style={{ background: 'var(--brand-navy)', padding: '12px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>UNIT TYPE</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TYPICAL INSTALLED RANGE</span>
            </div>
            {PRICING_ROWS.map((row, i) => (
              <div key={row.type} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 20px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{row.type}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px' }}>{row.range}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BookNowButton variant="navy" text="APPLY FOR FINANCING — SYNCHRONY" href={BUSINESS.financing} size="md" />
            <BookNowButton variant="ghost" text="CALL FOR A TANKLESS ESTIMATE" href="tel:+13016795849" size="md" />
          </div>
        </div>
      </section>

      {/* SECTION 7: RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Water Heater Repair', href: '/water-heater-repair' }, { icon: Flame, label: 'Water Heater Installation', href: '/water-heater-installation' }, { icon: Zap, label: 'Gas Line Installation', href: '/gas-line-installation' }, { icon: CreditCard, label: 'Financing', href: '/financing' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: '#F8FAFC', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <item.icon size={20} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#0A0A0A', fontSize: '14px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about tankless water heaters in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <CTABanner heading="Interested in tankless? Want an honest assessment of whether it makes sense for your home?" subtext="Licensed Master Plumber. Honest recommendation. Written pricing before we start. Financing available through Synchrony." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST TANKLESS ESTIMATE", href: "/contact" }} variant="gradient" />
    </>
  );
}
