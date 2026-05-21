import { AlertCircle, CheckCircle2, Wind, Thermometer, Flame, Building2, CreditCard } from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  {
    question: "How do I know if I need a new boiler or furnace?",
    answer: "Consider replacement when the unit is 15-20+ years old and requiring significant repair, when the repair cost exceeds 50% of replacement cost, when the unit has had multiple major failures in recent years, or when the heat exchanger on a furnace is cracked (a carbon monoxide risk). We provide an honest repair-or-replace assessment after diagnosis."
  },
  {
    question: "Does boiler or furnace installation require a permit?",
    answer: "Yes. Heating system installation requires permits in virtually all Maryland, DC, and Virginia jurisdictions. Gas-fired equipment requires both a mechanical permit and gas inspection. We handle permit applications under our own Master Plumber and Master Gasfitter licenses and coordinate all inspections."
  },
  {
    question: "Is financing available for heating system installation?",
    answer: "Yes. Consumer financing is available through Synchrony for eligible residential heating system installations. Apply online at mysynchrony.com/mmc/S6240351600. Monthly payment options for boiler and furnace replacement."
  },
];

const REPLACE_WHEN = [
  "The unit is 15-20 years old and requiring significant repair",
  "The repair cost exceeds 50% of the replacement cost",
  "The unit has experienced multiple major failures within the past few years",
  "The unit's efficiency rating is significantly below modern equipment (older units: 60-70% AFUE; modern high-efficiency: 95-98% AFUE)",
  "The heat exchanger on a furnace is cracked — this is a carbon monoxide risk and typically makes repair impractical",
  "The boiler has a cracked pressure vessel or extensive internal corrosion",
];

const KEEP_WHEN = [
  "The unit is under 10-12 years old with a single-component failure",
  "The repair cost is reasonable relative to the unit's remaining life",
  "The unit is operating efficiently and the failure is a wear component",
];

const SYSTEM_TYPES = [
  {
    Icon: Wind,
    title: "Gas Furnaces",
    body: "Forced-air gas furnaces for residential and light commercial applications. We install standard and high-efficiency models (up to 98% AFUE) from leading manufacturers. New installation includes permit, gas line connection, flue/venting, and system commissioning.",
  },
  {
    Icon: Thermometer,
    title: "Gas Boilers",
    body: "Hydronic (hot water) and steam boiler installation for homes and buildings with radiant or baseboard heating. Gas boiler installation requires our licensed Master Gasfitter credentials in the applicable jurisdiction.",
  },
  {
    Icon: Flame,
    title: "Oil Boilers and Furnaces",
    body: "Oil-fired boiler and furnace installation and replacement for properties not connected to the gas distribution system.",
  },
  {
    Icon: Building2,
    title: "Commercial Heating Systems",
    body: "Commercial boiler and furnace installation for office buildings, multi-family properties, government facilities, schools, and institutional applications.",
  },
];

export default function BoilerFurnaceInstallation() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Boiler and Furnace Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Definitive Mechanical",
          "telephone": "+13016795849",
          "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" }
        },
        "areaServed": ["Maryland", "Washington DC", "Virginia"],
        "description": "Boiler and furnace installation for homes and commercial facilities across MD, DC & Northern VA. Licensed Master Plumber and Master Gasfitter. Financing available."
      })}} />

      {/* SECTION 1: HERO */}
      <section style={{
        minHeight: '48vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-boiler-repair_ac413440.webp"
            alt="Boiler and furnace installation Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Boiler & Furnace Repair', href: '/boiler-furnace-repair' }, { label: 'Boiler & Furnace Installation' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">BOILER & FURNACE INSTALLATION  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Boiler & Furnace Installation in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical installs replacement and new boilers and furnaces for homes and commercial facilities across Maryland, Washington DC, and Northern Virginia. Every installation is performed under the correct permits by licensed plumbing professionals under Master Plumber and Master Gasfitter license. Financing available for residential installations. Written pricing before we start. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber/Gasfitter", "Permitted & Inspected", "Financing Available", "Commercial & Residential"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST INSTALLATION ESTIMATE" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: REPAIR OR REPLACE */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>REPAIR OR REPLACE?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>When should a boiler or furnace be replaced rather than repaired?</h2>
        </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div style={{ background: 'white', borderTop: '4px solid #F59E0B', borderRadius: '6px', padding: '28px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F59E0B', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>CONSIDER REPLACEMENT WHEN:</p>
              <div className="space-y-3">
                {REPLACE_WHEN.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <AlertCircle size={15} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', borderTop: '4px solid #1A7A4A', borderRadius: '6px', padding: '28px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1A7A4A', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>KEEP REPAIRING WHEN:</p>
              <div className="space-y-3">
                {KEEP_WHEN.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={15} color="#1A7A4A" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/boiler-furnace-repair" style={{ display: 'inline-block', marginTop: '20px', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-cyan)', fontSize: '14px', textDecoration: 'none' }}>
                View Boiler & Furnace Repair →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEM TYPES */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>HEATING SYSTEM TYPES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What types of heating systems does Definitive Mechanical install?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SYSTEM_TYPES.map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '28px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)' }}>
                <Icon size={36} color="var(--brand-cyan)" style={{ marginBottom: '14px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '16px', marginBottom: '8px' }}>{title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PERMITS + FINANCING */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '16px' }}>Does boiler or furnace installation require a permit?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Yes. Heating system installation requires permits in virtually all Maryland, DC, and Virginia jurisdictions. Gas-fired equipment requires both a mechanical permit and gas inspection. We handle permit applications under our own licenses and coordinate inspections.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {["MD #96958", "DC #PGM1002236", "VA #2710064209", "VA Class A #2705181061"].map((badge) => (
                  <span key={badge} style={{ background: 'var(--brand-navy)', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 12px', borderRadius: '3px' }}>{badge}</span>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '6px', padding: '28px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', textAlign: 'center' }}>
              <CreditCard size={32} color="var(--brand-cyan)" style={{ margin: '0 auto 12px' }} />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Financing Available</p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                Monthly payment options through Synchrony for residential heating system installations.
              </p>
              <BookNowButton variant="ghost" text="APPLY FOR FINANCING" href="https://www.mysynchrony.com/mmc/S6240351600" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: '#F0F5FA', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Wind, label: 'Boiler & Furnace Repair', href: '/boiler-furnace-repair' },
              { icon: Flame, label: 'Gas Line Installation', href: '/gas-line-installation' },
              { icon: Building2, label: 'Commercial Plumbing', href: '/commercial-plumbing' },
              { icon: CreditCard, label: 'Financing Options', href: 'https://www.mysynchrony.com/mmc/S6240351600' },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <item.icon size={20} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about boiler and furnace installation in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner
        heading="Replacing a boiler or furnace? Get a licensed, permitted installation."
        subtext="Written pricing before we start. Financing available. Licensed Master Plumber and Master Gasfitter."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST INSTALLATION ESTIMATE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
