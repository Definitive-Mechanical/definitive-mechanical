import { AlertTriangle, AlertCircle, Search, Wrench, Link2, Gauge, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS, LICENSES } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "What are gas line repair warning signs?", answer: "Key warning signs include a sulfur or rotten egg smell, hissing near gas lines or appliances, dead vegetation above a buried gas line, gas appliances that won't light or have inconsistent ignition, and unusually high gas bills. If you smell gas, evacuate the building immediately and call your gas company from outside before calling a plumber." },
  { question: "Are you a licensed Master Gasfitter in Maryland, DC, and Virginia?", answer: "Yes. Definitive Mechanical holds active Master Gasfitter licenses in Maryland (State #96958, WSSC #73696, Howard County #20020096958, Anne Arundel County #A2-6139, City of Rockville #PLL-0002113), Washington DC (#PGM1002236), Virginia (#2710064209), and Delaware (#PL-0012866). This is among the most complete multi-jurisdiction gasfitter credential stacks held by any plumbing contractor in the DMV market." },
  { question: "Can you do gas line repairs on evenings, weekends, or holidays?", answer: "Yes. Gas line emergency service is available 24/7, 365 days a year with no overtime surcharge for after-hours calls. Call (301) 679-5849 at any hour." },
  { question: "Do you repair commercial gas lines?", answer: "Yes. We repair commercial gas systems for restaurants, commercial kitchens, office buildings, government facilities, and industrial properties. Commercial gas repair requires the same Master Gasfitter licensing as residential work — and the same commitment to code-compliant, tested, and permitted work." },
];

const LICENSE_ROWS = [
  { jurisdiction: "Maryland (State)", number: "#96958" },
  { jurisdiction: "WSSC", number: "#73696" },
  { jurisdiction: "Howard County, MD", number: "#20020096958" },
  { jurisdiction: "Anne Arundel County, MD", number: "#A2-6139" },
  { jurisdiction: "City of Rockville, MD", number: "#PLL-0002113" },
  { jurisdiction: "Washington DC", number: "#PGM1002236" },
  { jurisdiction: "Virginia (State)", number: "#2710064209" },
  { jurisdiction: "Delaware", number: "#PL-0012866" },
];

export default function GasLineRepair() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section style={{ minHeight: '60vh', background: 'linear-gradient(135deg, var(--brand-navy-dark) 0%, var(--brand-navy) 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Gas Line Repair' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">GAS LINE REPAIR  LICENSED MASTER GASFITTER  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Gas Line Repair — Licensed Master Gasfitter Serving Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical provides gas line repair for homes and businesses across Maryland, Washington DC, and Northern Virginia. Every gas line repair is performed by a licensed Master Gasfitter — licensed in MD (State #96958, WSSC #73696), Washington DC (#PGM1002236), Virginia (#2710064209), and Delaware (#PL-0012866). 24/7 emergency gas service available. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Gasfitter — MD, DC, VA & DE", "24/7 Emergency Gas Service", "Commercial & Residential"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST GAS LINE SERVICE" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WARNING SIGNS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="GAS LINE WARNING SIGNS" heading="What are the warning signs of a gas line problem?" subtext="Gas line issues require immediate attention. Natural gas and propane are odorless in their natural state — the rotten egg or sulfur smell is an odorant added specifically to make leaks detectable. Do not ignore this smell." centered />
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Immediate action */}
            <div style={{ borderLeft: '4px solid #C0392B', padding: '20px', background: '#FFF8F8', borderRadius: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <AlertTriangle size={20} color="#C0392B" />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#C0392B', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>EVACUATE AND CALL</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px', marginBottom: '12px' }}>Warning signs that require immediate action:</p>
              <div className="space-y-2">
                {["Smell of rotten egg or sulfur — evacuate and call immediately", "Hissing or whistling sound near a gas line, appliance, or meter", "Dead or dying vegetation above an underground gas line without other explanation", "Visible bubbling in puddles or wet ground near a gas line location", "A gas appliance that will not light or that has intermittent ignition", "Higher-than-normal gas bills without a change in usage", "Physical damage to visible gas piping"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} color="#C0392B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* If you smell gas */}
            <div style={{ borderLeft: '4px solid #F59E0B', padding: '20px', background: '#FFFBF0', borderRadius: '4px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F59E0B', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>IF YOU SMELL GAS — IMMEDIATELY DO THIS:</p>
              <div className="space-y-3">
                {["Do not operate any electrical switches — on or off", "Do not use your phone inside the building", "Leave the building immediately", "Once safely outside, call your gas company's emergency line", "Call 911 if you cannot reach the gas company or if there is any sign of ignition risk", "Once the gas company has responded and shut off supply, call Definitive Mechanical at (301) 679-5849 for licensed gas line repair"].map((item, i) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F59E0B', fontSize: '14px', flexShrink: 0, minWidth: '20px' }}>{i + 1}.</span>
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="GAS LINE REPAIR SERVICES" heading="What gas line repair services does Definitive Mechanical provide?" centered />
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { Icon: Search, title: "Gas Leak Detection and Repair", body: "Using pressure testing and specialized gas leak detection equipment, we locate and repair gas leaks in supply lines, fittings, connections, and appliance hookups.", link: { label: "Gas Leak Repair ->", href: "/gas-leak-repair" } },
              { Icon: Wrench, title: "Gas Pipe Repair and Replacement", body: "Repair or replacement of corroded, damaged, or undersized gas supply piping — both interior and exterior.", link: null },
              { Icon: Link2, title: "Gas Appliance Connection Repair", body: "Repair and replacement of flexible appliance connectors, shut-off valves, and fitting connections to gas ranges, dryers, water heaters, fireplaces, HVAC systems, generators, and other gas appliances.", link: null },
              { Icon: Gauge, title: "Gas Pressure Testing", body: "Pressure testing of the gas supply system after any repair or modification — required by code in most jurisdictions before the gas supply is restored.", link: null },
              { Icon: Phone, title: "Gas Meter and Service Line Coordination", body: "Coordination with your gas utility (Washington Gas, BGE where applicable) for meter-side issues that require utility involvement alongside our service-side repair.", link: null },
            ].map(({ Icon, title, body, link }) => (
              <div key={title} style={{ background: 'white', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Icon size={28} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '6px' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6, marginBottom: link ? '8px' : 0 }}>{body}</p>
                  {link && <Link href={link.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--brand-cyan)', fontSize: '13px', textDecoration: 'none' }}>{link.label}</Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY LICENSED MATTERS */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHY LICENSING MATTERS" heading="Why does gas line repair require a licensed Master Gasfitter?" centered light />
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 40px', textAlign: 'center' }}>
            In Maryland, Washington DC, and Virginia, gas line installation and repair must be performed by or under the direct supervision of a licensed Master Gasfitter. This is a legal requirement — not a suggestion. Gas line work directly affects life safety. An improperly installed or repaired gas fitting, an incorrect pressure setting, a missed leak, or non-code-compliant venting can result in gas accumulation, carbon monoxide exposure, fire, or explosion.
          </p>
          {/* License Table */}
          <div style={{ background: 'white', borderRadius: '6px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', maxWidth: '560px', margin: '0 auto', overflow: 'hidden' }}>
            <div style={{ background: 'var(--brand-navy-dark)', padding: '12px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>JURISDICTION</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>LICENSE NUMBER</span>
            </div>
            {LICENSE_ROWS.map((row, i) => (
              <div key={row.jurisdiction} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '11px 20px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{row.jurisdiction}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px' }}>{row.number}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)', fontSize: '13px', textAlign: 'center', marginTop: '16px' }}>
            This multi-jurisdiction gasfitter credential stack is unique among local plumbing contractors in the DMV market.
          </p>
        </div>
      </section>

      {/* SECTION 5: COMMERCIAL GAS */}
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Commercial gas line repair Maryland DC Northern Virginia — licensed Master Gasfitter" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 4px 20px rgba(6,59,99,0.12)' }} />
            </div>
            <div>
              <p className="eyebrow mb-2">COMMERCIAL GAS SYSTEMS</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '16px' }}>Do you repair commercial gas lines?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                Yes. Definitive Mechanical repairs commercial gas systems for restaurants, commercial kitchens, office buildings, industrial facilities, government buildings, and multi-family properties. Commercial gas line work often involves larger pipe diameters, higher pressure systems, and more complex appliance configurations than residential work — all of which require the same licensed Master Gasfitter oversight.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
                For commercial gas system assessment or emergency repair, call (301) 679-5849.
              </p>
              <div className="space-y-2 mb-6">
                {["Restaurants and commercial kitchens", "Industrial equipment and manufacturing", "Government and institutional facilities", "Multi-family and hospitality properties", "HVAC systems and boiler connections"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px' }}>{item}</span>
                  </div>
                ))}
              </div>
              <BookNowButton variant="ghost" text="REQUEST COMMERCIAL GAS ESTIMATE" href="/contact" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'var(--surface-1)', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[{ icon: Search, label: 'Gas Leak Repair', href: '/gas-leak-repair' }, { icon: Wrench, label: 'Gas Line Installation', href: '/gas-line-installation' }, { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' }, { icon: CheckCircle2, label: 'Licenses & Certifications', href: '/licenses-certifications' }, { icon: Gauge, label: 'Boiler & Furnace Repair', href: '/boiler-furnace-repair' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: 'white', border: '1px solid #E8EFF5', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <item.icon size={20} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" heading="Questions about gas line repair in MD, DC & Northern VA" centered />
          <div style={{ background: 'var(--surface-1)', borderRadius: '6px', padding: '8px 32px' }}>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" />
          </div>
        </div>
      </section>

      <CTABanner heading="Gas line problem? Don't wait — and don't call an unlicensed contractor." subtext="Licensed Master Gasfitter in MD, DC, VA & DE. 24/7 emergency gas line service. Written pricing before we start." primaryBtn={{ text: "CALL (301) 679-5849 — GAS EMERGENCY", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST GAS LINE SERVICE", href: "/contact" }} variant="gradient" />
    </>
  );
}
