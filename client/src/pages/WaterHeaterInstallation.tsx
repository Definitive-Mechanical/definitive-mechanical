import { AlertCircle, CheckCircle2, Flame, Zap, Waves, Thermometer, MapPin, CreditCard, Wrench, ShieldCheck} from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';
import ServiceCard from '@/components/ui/ServiceCard';

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Water Heater Installation",
  "provider": { "@type": "LocalBusiness", "name": "Definitive Mechanical", "telephone": "+13016795849", "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" } },
  "areaServed": ["Maryland", "Washington DC", "Virginia"],
  "description": "Licensed water heater installation for gas, electric, and tankless units across MD, DC & Northern VA."
};

const FAQ_ITEMS = [
  { question: "How long does a water heater last?", answer: "Standard gas and electric tank water heaters typically last 8-12 years with regular maintenance (annual flushing). Tankless water heaters typically last 15-20 years. Hard water areas — common in parts of Maryland and Northern Virginia — can shorten tank life due to mineral scale buildup without regular service." },
  { question: "Who installs water heaters in Maryland, DC, and Virginia?", answer: "Water heater installation should be performed by a licensed Master Plumber in every DMV jurisdiction. In Maryland, this includes compliance with WSSC regulations in Prince George's and Montgomery Counties. In DC, a DC Master Plumber license (#PGM1002236) is required. In Virginia, a state Master Plumber license (#2710064209) is required. Definitive Mechanical holds all of these. Unlicensed installation voids warranties and creates code violations." },
  { question: "What size water heater do I need?", answer: "For a household of 1-2 people, a 30-40 gallon tank typically suffices. For 3-4 people, 40-50 gallons. For 5+ people or high-demand homes, 50-80 gallons or a tankless system. Commercial properties are sized based on peak demand load calculations. Our technicians assess your specific household or facility needs and recommend the right size — not the most expensive unit." },
  { question: "Can you install a water heater the same day I call?", answer: "Same-day installation is available in many cases, depending on the unit type, technician availability, and permit requirements in your jurisdiction. Call (301) 679-5849 and we will give you an honest availability answer specific to your situation." },
];

const PRICING_ROWS = [
  { type: "Gas tank (40-50 gallon)", range: "$900-$1,600" },
  { type: "Electric tank (40-50 gallon)", range: "$700-$1,300" },
  { type: "Gas tank (75+ gallon, commercial-grade)", range: "$1,500-$2,800" },
  { type: "Tankless gas (residential)", range: "$1,800-$3,500" },
  { type: "Tankless electric (residential)", range: "$1,200-$2,500" },
];

export default function WaterHeaterInstallation() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />

      {/* SECTION 1: HERO */}
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
            src="/manus-storage/service-water-heater-installation_b7268454.webp"
            alt="Water heater installation Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Water Heater Repair', href: '/water-heater-repair/' }, { label: 'Water Heater Installation' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">WATER HEATER INSTALLATION  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Water Heater Installation in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical installs gas, electric, and tankless water heaters across Maryland, Washington DC, and Northern Virginia. Same-day and next-day installation available. Every installation is performed by licensed plumbing professionals under Master Plumber license, pulled with the correct permit for your jurisdiction, and completed to code. Financing available through Synchrony. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Same-Day Installation Available", "Licensed Master Plumber", "Permit-Compliant", "Financing Available", "Gas & Electric Units"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST INSTALLATION" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: REPAIR VS REPLACE */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>REPAIR OR REPLACE?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>When should you replace a water heater rather than repair it?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>Most water heater problems can be repaired — but some situations make replacement the smarter financial and practical decision.</p>
        </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#0A0A0A', fontSize: '15px', marginBottom: '16px' }}>Replace rather than repair when:</p>
              <div className="space-y-3">
                {["The unit is 10+ years old (tank) or 15+ years (tankless) and experiencing a significant failure", "The tank itself is leaking — internal tank leaks are not repairable", "The repair cost exceeds 50% of the replacement cost", "The unit has required two or more major repairs in the past two years", "Consistently discolored or rust-tinted water despite thermostat repair — internal corrosion progressed", "You want to upgrade to a more energy-efficient unit and the current unit is aging"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <AlertCircle size={18} color="#C0392B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#0A0A0A', fontSize: '15px', marginBottom: '16px' }}>Repair rather than replace when:</p>
              <div className="space-y-3">
                {["The unit is under 8-10 years old with a single component failure", "The repair cost is under $300-$400 for a unit in otherwise good condition", "The tank has no corrosion and has been maintained with annual flushing"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color="#1A7A4A" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: 'white', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '20px', maxWidth: '672px', margin: '32px auto 0', boxShadow: '0 2px 8px rgba(6,59,99,0.08)' }}>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.7, marginBottom: '12px' }}>
              "If you are uncertain, call (301) 679-5849. We will give you an honest assessment — not a recommendation shaped by which option creates a larger invoice."
            </p>
            <BookNowButton variant="ghost" text="TALK TO A LICENSED PLUMBER" href="tel:+13016795849" size="sm" />
          </div>
        </div>
      </section>

      {/* SECTION 3: UNIT TYPES */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WATER HEATER TYPES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>What types of water heaters does Definitive Mechanical install?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Gas Tank Water Heaters" iconName="Flame" href="/water-heater-installation" description="The most common type in MD, DC, and Northern VA homes. Gas units heat water faster at lower cost per gallon. We install 30, 40, 50, and 75+ gallon units. Gas installation requires a licensed Master Gasfitter — we hold that license in MD, DC, VA & DE." />
            <ServiceCard title="Electric Tank Water Heaters" iconName="Zap" href="/water-heater-installation" description="Common in homes without a gas connection or where running a gas line is not practical. We install 30, 40, 50, and 80+ gallon electric units with proper electrical connection and code-compliant installation." />
            <ServiceCard title="Tankless Water Heaters" iconName="Waves" href="/tankless-water-heaters" description="Heat water on demand — no stored tank, no standby heat loss, significantly longer service life (15-20 years vs. 8-12 for tank units). Increasingly popular in MD and Northern VA for utility savings and space efficiency." featured />
            <ServiceCard title="Indirect Water Heaters" iconName="Thermometer" href="/boiler-furnace-repair" description="Connected to a boiler system — common in older Maryland and DC-area homes with hydronic heating. We install and connect indirect water heater tanks as part of boiler system service." />
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>INSTALLATION PRICING</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>What does water heater installation cost in Maryland, DC, or Virginia?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>Cost depends on the unit type, size, fuel source, existing connections, venting requirements, and permit fees.</p>
        </div>
              <div style={{ border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', marginBottom: '16px' }}>
                <div className="table-scroll-wrapper">
                <div style={{ background: 'var(--brand-navy)', padding: '12px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>UNIT TYPE</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TYPICAL INSTALLED RANGE</span>
                </div>
                </div>  {/* end table-scroll-wrapper */}
                {PRICING_ROWS.map((row, i) => (
                  <div key={row.type} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 20px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{row.type}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px' }}>{row.range}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-3)', fontSize: '13px', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '16px' }}>
                These ranges include unit, installation labor, connection to existing lines, and standard permit. Work requiring gas line extension, new electrical circuits, or venting modifications will affect the final price. We provide written pricing after assessment — before any work begins.
              </p>
              <div style={{ background: '#F0F5FA', borderRadius: '6px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CreditCard size={24} color="var(--brand-navy)" style={{ flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-navy)', fontSize: '14px', marginBottom: '8px' }}>Financing available through Synchrony. Apply in 60 seconds at mysynchrony.com/mmc/S6240351600.</p>
                  <BookNowButton variant="ghost" text="APPLY FOR FINANCING" href={BUSINESS.financing} size="sm" />
                </div>
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

      {/* SECTION 5: PERMITS */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <SectionHeading eyebrow="PERMITS & COMPLIANCE" heading="Do you pull permits for water heater installation in Maryland, DC, and Virginia?" centered light />
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.7, maxWidth: '672px', margin: '0 auto 40px', textAlign: 'center' }}>
            Yes. Water heater installation in Maryland, Washington DC, and Virginia typically requires a permit in most jurisdictions. Definitive Mechanical pulls permits under our own licenses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { state: "MARYLAND", detail: "State #96958  WSSC #73696  Howard County  Anne Arundel County  City of Rockville #PLL-0002113" },
              { state: "WASHINGTON DC", detail: "DC Master Plumber/Gasfitter #PGM1002236" },
              { state: "VIRGINIA", detail: "State Master Plumber/Gasfitter #2710064209  Class A Contractor #2705181061" },
            ].map((item) => (
              <div key={item.state} style={{ background: 'white', borderRadius: '6px', padding: '28px', textAlign: 'center' }}>
                <MapPin size={36} color="var(--brand-cyan)" style={{ margin: '0 auto 12px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{item.state}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.6 }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.7, maxWidth: '672px', margin: '0 auto', textAlign: 'center' }}>
            Work permitted under a licensed Master Plumber protects you in three ways: it confirms the work meets code, it creates a record for insurance and future sale disclosures, and it means the jurisdiction has signed off on the safety of the installation. Unlicensed water heater installation — increasingly common in the DMV — creates code violations, voids manufacturer warranties, and creates liability for the property owner. We do not take shortcuts on permits.
          </p>
        </div>
      </section>

      {/* SECTION 6: TIMELINE */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div>
              <p className="eyebrow mb-2">HOW LONG DOES IT TAKE?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '16px' }}>How long does water heater installation take?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                A standard water heater replacement — same location, same fuel type, same approximate capacity — typically takes 2-4 hours for a licensed technician. This includes disconnecting and removing the old unit, connecting the new unit to existing supply lines and gas or electrical connections, testing, and cleanup.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                More complex installations — those requiring new gas line runs, new electrical circuits, venting modifications, or relocation of the unit — may take a full day or require scheduling a follow-up visit for additional trades work.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                When you call (301) 679-5849, our team can give you a realistic timeframe based on your specific situation before we schedule.
              </p>
              <div className="space-y-3 mb-6">
                {["Same-day installation available in most standard replacement scenarios", "Complex installations quoted with honest timelines upfront"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={18} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
              <BookNowButton variant="white" text="CALL FOR AVAILABILITY" href="tel:+13016795849" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: RELATED SERVICES */}
      <section style={{ background: '#F0F5FA', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Water Heater Repair', href: '/water-heater-repair' }, { icon: Zap, label: 'Tankless Water Heaters', href: '/tankless-water-heaters' }, { icon: Flame, label: 'Gas Line Installation', href: '/gas-line-installation' }, { icon: CreditCard, label: 'Financing Options', href: '/financing' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
          <p style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Questions about water heater installation in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <CTABanner heading="Ready to replace your water heater?" subtext="Same-day installation available. Licensed Master Plumber. Written pricing before we start. Permits pulled. Financing available through Synchrony." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST WATER HEATER INSTALLATION", href: "/contact" }} variant="gradient" />
    </>
  );
}
