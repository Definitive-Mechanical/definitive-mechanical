import { AlertCircle, AlertTriangle, CheckCircle2, Thermometer, Wrench, Settings, Gauge, Flame, Building2, Wind } from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  {
    question: "What are the signs of a failing boiler or furnace?",
    answer: "For boilers: inconsistent heat, no heat, unusual noises, pilot/ignition failure, pressure issues, or leaking. For furnaces: no heat, short cycling, unusual sounds, yellow pilot flame, or ignition failure. A yellow pilot flame on any gas appliance can indicate a combustion problem and potential carbon monoxide risk — call immediately."
  },
  {
    question: "Do you repair commercial boilers and furnaces?",
    answer: "Yes. We repair commercial boilers and furnaces for office buildings, multi-family properties, government facilities, and industrial applications across Maryland, DC, and Northern Virginia."
  },
  {
    question: "Is emergency heating repair available?",
    answer: "Yes. Emergency boiler and furnace repair is available 24/7, 365 days a year. Call (301) 679-5849 at any hour. Same rate as business hours — no overtime surcharge."
  },
];

const BOILER_SIGNS = [
  "No heat or inconsistent heat to radiators or baseboards",
  "Boiler not firing or cycling on",
  "Unusual noises — banging, clanking, or gurgling from the boiler or pipes",
  "Radiators not heating evenly (air in the system, zone valve failure, or pump issues)",
  "Pilot light or ignition failure on gas boilers",
  "Pressure gauge reading too high or too low",
  "Leaking water from boiler body, fittings, or pressure relief valve",
  "Yellow or orange pilot flame instead of blue — call immediately (carbon monoxide risk)",
];

const FURNACE_SIGNS = [
  "No heat or insufficient heat from vents",
  "Short cycling — furnace turns on and off rapidly",
  "Unusual sounds — banging, rattling, or squealing",
  "Yellow pilot flame or ignition failure",
  "Excessive dust or poor air quality",
  "Higher gas bills without a change in usage or weather",
];

const BOILER_REPAIRS = [
  "Ignition and pilot system repair (gas boilers)",
  "Circulator pump repair and replacement",
  "Zone valve repair and replacement",
  "Expansion tank replacement",
  "Pressure relief valve replacement",
  "Thermostat and aquastat repair",
  "Bleeding and balancing hydronic systems",
  "Gas supply line inspection and repair (licensed Master Gasfitter)",
];

const FURNACE_REPAIRS = [
  "Ignition system repair (hot surface igniter, pilot light)",
  "Heat exchanger inspection (cracked = carbon monoxide risk)",
  "Blower motor and belt repair",
  "Flame sensor cleaning and replacement",
  "Gas valve repair and replacement",
  "Thermostat and control board repair",
  "Venting and flue inspection and repair",
];

const PRICING_ROWS = [
  { type: "Thermostat replacement", range: "$150-$350" },
  { type: "Ignition/pilot repair (gas furnace or boiler)", range: "$200-$500" },
  { type: "Circulator pump replacement (boiler)", range: "$400-$900" },
  { type: "Zone valve replacement", range: "$250-$600 per zone" },
  { type: "Heat exchanger inspection", range: "$150-$300" },
  { type: "Gas valve replacement", range: "$300-$700" },
  { type: "Pressure relief valve (boiler)", range: "$150-$300" },
];

export default function BoilerFurnaceRepair() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Boiler and Furnace Repair",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Definitive Mechanical",
          "telephone": "+13016795849",
          "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" }
        },
        "areaServed": ["Maryland", "Washington DC", "Virginia"],
        "description": "24/7 emergency boiler and furnace repair for residential and commercial properties across MD, DC & Northern VA. Licensed Master Plumber and Master Gasfitter."
      })}} />

      {/* SECTION 1: HERO */}
      <section style={{ minHeight: '58vh', background: 'linear-gradient(135deg, var(--brand-navy-dark) 0%, var(--brand-navy) 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,158,198,0.07)', transform: 'skewY(-4deg)', transformOrigin: 'top left', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Boiler & Furnace Repair' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">BOILER & FURNACE REPAIR  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Boiler & Furnace Repair in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical repairs boilers and furnaces for homes and commercial facilities across Maryland, Washington DC, and Northern Virginia. We service gas and oil boilers, hydronic heating systems, and gas furnaces. 24/7 emergency heating repair available. Licensed Master Plumber and Master Gasfitter. Upfront pricing in writing. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["24/7 Emergency Heating Service", "Licensed Master Plumber/Gasfitter", "Commercial & Residential", "Gas & Oil Systems"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST HEATING REPAIR" href="/contact" size="md" />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" alt="Boiler and furnace repair Maryland DC Northern Virginia — 24/7 emergency heating" loading="eager" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WARNING SIGNS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WARNING SIGNS" heading="What are the warning signs that your boiler or furnace needs repair?" centered />
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Boiler */}
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '14px' }}>Boiler warning signs:</p>
              <div className="space-y-3">
                {BOILER_SIGNS.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Furnace */}
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '14px' }}>Furnace warning signs:</p>
              <div className="space-y-3">
                {FURNACE_SIGNS.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
                {/* Urgent item */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', background: '#FEF2F2', borderRadius: '4px', padding: '10px', border: '1px solid #FCA5A5' }}>
                  <AlertTriangle size={16} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#DC2626', fontSize: '14px', lineHeight: 1.5 }}>Carbon monoxide detector alarm — EVACUATE IMMEDIATELY AND CALL 911</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: REPAIR SERVICES MATRIX */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="REPAIR SERVICES" heading="What boiler and furnace repair services does Definitive Mechanical provide?" centered />
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Boiler */}
            <div style={{ background: 'white', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '28px', boxShadow: '0 2px 8px rgba(6,59,99,0.06)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>BOILER REPAIR</p>
              <div className="space-y-2">
                {BOILER_REPAIRS.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={15} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Furnace */}
            <div style={{ background: 'white', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '28px', boxShadow: '0 2px 8px rgba(6,59,99,0.06)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>FURNACE REPAIR</p>
              <div className="space-y-2">
                {FURNACE_REPAIRS.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={15} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Emergency strip */}
          <div style={{ background: 'var(--brand-navy)', borderRadius: '6px', padding: '20px', maxWidth: '700px', margin: '32px auto 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Thermometer size={24} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>No heat? Emergency heating repair available 24/7 — call (301) 679-5849. Same rate as business hours.</span>
            </div>
            <BookNowButton variant="phone" text="CALL NOW" href="tel:+13016795849" size="sm" />
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING */}
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="PRICING GUIDE" heading="What does boiler or furnace repair cost?" centered />
          <div style={{ background: 'white', border: '1px solid #E8EFF5', borderRadius: '6px', overflow: 'hidden', maxWidth: '700px', margin: '0 auto', boxShadow: '0 2px 12px rgba(6,59,99,0.08)' }}>
            <div style={{ background: 'var(--brand-navy)', padding: '12px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>REPAIR TYPE</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TYPICAL RANGE</span>
            </div>
            {PRICING_ROWS.map((row, i) => (
              <div key={row.type} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 20px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{row.type}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px' }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-3)', fontSize: '13px', fontStyle: 'italic', textAlign: 'center', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
            Reference ranges. Written pricing provided after diagnosis. For emergency after-hours repairs, we provide upfront pricing before beginning work — same rate as business hours.
          </p>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'var(--surface-1)', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Wind, label: 'Boiler & Furnace Installation', href: '/boiler-furnace-installation' },
              { icon: Flame, label: 'Gas Line Repair', href: '/gas-line-repair' },
              { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' },
              { icon: Building2, label: 'Commercial Plumbing', href: '/commercial-plumbing' },
            ].map((item) => (
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
          <SectionHeading eyebrow="FAQ" heading="Questions about boiler and furnace repair in MD, DC & Northern VA" centered />
          <div style={{ background: 'var(--surface-1)', borderRadius: '6px', padding: '8px 32px' }}>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" />
          </div>
        </div>
      </section>

      <CTABanner
        heading="No heat? Don't wait — especially in a Maryland or Virginia winter."
        subtext="24/7 emergency heating repair. Licensed Master Plumber/Gasfitter. Written pricing before we start. Commercial and residential."
        primaryBtn={{ text: "CALL (301) 679-5849 — 24/7", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST HEATING REPAIR SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
