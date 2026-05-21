import { CheckCircle2, Droplets, AlertTriangle, Clock, ArrowRightCircle, Wrench, AlertCircle, ShieldCheck} from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  {
    question: "How much does toilet repair cost?",
    answer: "Common toilet repairs in the DMV market range from $100-$300 for most flapper, fill valve, or flush valve repairs. Wax ring replacement (toilet rocking at the base or leaking at the floor) typically runs $200-$400 including the repair and reset. Toilet replacement with a standard unit runs $300-$600 for the installation, depending on the fixture. Call (301) 679-5849 for written pricing specific to your situation."
  },
  {
    question: "How much does faucet repair cost?",
    answer: "Faucet cartridge or valve replacement typically runs $150-$300 for a standard residential faucet. Faucet replacement (installing a new fixture) typically runs $200-$450 for labor plus the fixture cost. We can install a fixture you provide or recommend one appropriate for your application."
  },
  {
    question: "Is a dripping faucet worth repairing?",
    answer: "Yes. A faucet dripping once per second wastes approximately 3,000 gallons per year — significant on a water bill. More importantly, a dripping faucet usually indicates a worn cartridge or valve seal that, if left, can worsen and cause damage to the faucet body. A repair done early is almost always less expensive than one done late."
  },
  {
    question: "Do you repair commercial toilets and faucets?",
    answer: "Yes. We repair and replace commercial fixtures including flushometer toilets, sensor-activated faucets, and commercial restroom fixtures for office buildings, restaurants, government facilities, and multi-family properties."
  },
];

const FAUCET_REPAIRS = [
  "Dripping or leaking faucet (cartridge, ball, ceramic disc, or compression valve replacement)",
  "Faucet that will not turn off fully",
  "Low water pressure from a single faucet (aerator cleaning or cartridge replacement)",
  "Leaking base or handle",
  "Faucet handle that is loose or difficult to operate",
  "Cold/hot water reversal",
  "Faucet replacement — with or without drain assembly",
];

const TOILET_REPAIRS = [
  "Running toilet (flapper, fill valve, float, or flush valve replacement)",
  "Toilet that will not flush or flushes weakly",
  "Toilet that rocks or is loose at the base (wax ring, flange, or mounting hardware)",
  "Leaking at the base — typically a failed wax ring",
  "Leaking supply line or shut-off valve",
  "Clogged toilet (manual clearance; recurring clogs may indicate a drain line issue)",
  "Toilet replacement — standard, comfort-height, low-flow, or bidet installation",
  "Commercial toilet repair — flushometer, manual flush, and sensor flush systems",
];

const REPLACE_FAUCET = [
  "The fixture is 15-20+ years old and replacement parts cost approaches a new fixture",
  "The finish is significantly deteriorated (corrosion, mineral buildup that cannot be cleaned)",
  "You are upgrading for efficiency (low-flow faucets reduce water use by 30%+ vs. older models)",
  "You want to update the fixture's style as part of a bathroom or kitchen renovation",
];

const REPLACE_TOILET = [
  "The toilet requires frequent repairs",
  "The toilet is a pre-1994 model using 3.5+ gallons per flush — modern WaterSense toilets use 1.28 gallons or less",
  "The tank or bowl is cracked",
  "You want a comfort-height or bidet toilet as an upgrade",
];

export default function FaucetToiletRepair() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Faucet and Toilet Repair",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Definitive Mechanical",
          "telephone": "+13016795849",
          "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" }
        },
        "areaServed": ["Maryland", "Washington DC", "Virginia"],
        "description": "Faucet and toilet repair, replacement, and installation for homes and businesses across MD, DC & Northern VA. Licensed Master Plumber. Same-day service available."
      })}} />

      {/* SECTION 1: HERO */}
      <section style={{
        minHeight: '52vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-faucet-fixture_179c658a.webp"
            alt="Faucet and toilet repair Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Faucet & Toilet Repair' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">FAUCET & TOILET REPAIR  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Faucet & Toilet Repair in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical repairs and replaces faucets, toilets, and fixtures for homes and businesses across Maryland, Washington DC, and Northern Virginia. Dripping faucets, running toilets, leaking supply lines, toilet clogs, and fixture replacement — all handled by licensed plumbing professionals under Master Plumber license. Same-day service often available. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Same-Day Service Available", "Licensed Master Plumber", "Residential & Commercial", "Faucets, Toilets & Fixtures"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton bg="dark" variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton bg="dark" variant="secondary" text="REQUEST FIXTURE REPAIR" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FAUCET PROBLEMS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-2">FAUCET REPAIR</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '16px' }}>Common faucet problems we repair</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
                A dripping faucet wastes more water than most homeowners realize — a faucet dripping once per second wastes approximately 3,000 gallons of water per year. Beyond water cost, a dripping faucet that goes untreated often leads to mineral staining, fixture damage, and eventually more expensive repairs.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '12px' }}>Faucet repairs we handle:</p>
              <div className="space-y-2">
                {FAUCET_REPAIRS.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={15} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', fontStyle: 'italic', marginTop: '16px', lineHeight: 1.6 }}>
                We work on all faucet types and brands — kitchen, bathroom, shower, tub, utility, and outdoor. If you have a preferred replacement fixture, we can install it.
              </p>
            </div>
            <div>
              <div style={{ background: 'var(--brand-blue)', borderRadius: '12px', padding: '32px', boxShadow: '0 8px 32px rgba(6,59,99,0.2)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>Our Credentials</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Maryland Master Plumber License', 'DC Master Plumber License', 'Virginia Master Plumber License', 'Maryland Master Gasfitter License', 'MDOT MBE Certified (No. 20-134)', 'Virginia SWaM Certified (No. 815255)', 'Fully Bonded & Insured'].map((cred) => (
                    <div key={cred} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--brand-blue-soft)', border: '1px solid var(--brand-blue-tint)', borderRadius: '6px', padding: '10px 14px' }}>
                      <ShieldCheck size={14} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink)', fontSize: '13px', fontWeight: 500 }}>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TOILET PROBLEMS */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="hidden lg:block">
              <div style={{ background: 'var(--brand-blue)', borderRadius: '12px', padding: '32px', boxShadow: '0 8px 32px rgba(6,59,99,0.2)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>Our Credentials</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Maryland Master Plumber License', 'DC Master Plumber License', 'Virginia Master Plumber License', 'Maryland Master Gasfitter License', 'MDOT MBE Certified (No. 20-134)', 'Virginia SWaM Certified (No. 815255)', 'Fully Bonded & Insured'].map((cred) => (
                    <div key={cred} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--brand-blue-soft)', border: '1px solid var(--brand-blue-tint)', borderRadius: '6px', padding: '10px 14px' }}>
                      <ShieldCheck size={14} style={{ color: 'var(--brand-cyan)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink)', fontSize: '13px', fontWeight: 500 }}>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-2">TOILET REPAIR</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '16px' }}>Common toilet problems we repair</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
                A running toilet — the continuous sound of water running in the tank — wastes an average of 200 gallons of water per day. This is both costly and easily repaired in most cases.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '12px' }}>Toilet repairs we handle:</p>
              <div className="space-y-2">
                {TOILET_REPAIRS.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={15} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: REPAIR VS REPLACE */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>REPAIR OR REPLACE?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>When should you replace a faucet or toilet rather than repair it?</h2>
        </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div style={{ background: '#F8FAFC', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '24px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>REPLACE A FAUCET WHEN:</p>
              <div className="space-y-3">
                {REPLACE_FAUCET.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <ArrowRightCircle size={15} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#F8FAFC', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '24px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>REPLACE A TOILET WHEN:</p>
              <div className="space-y-3">
                {REPLACE_TOILET.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <ArrowRightCircle size={15} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', textAlign: 'center', maxWidth: '640px', margin: '28px auto 0' }}>
            A licensed Master Plumber can give you an honest repair-or-replace recommendation based on the actual condition of your fixture — not a recommendation driven by the margin on a new toilet.
          </p>
        </div>
      </section>

      {/* SECTION 5: STATS BAR */}
      <section style={{ background: '#F0F5FA', padding: '48px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { Icon: Droplets, stat: '3,000 gal', label: 'Per Year Wasted by a Dripping Faucet' },
              { Icon: AlertTriangle, stat: '200 gal', label: 'Per Day from a Running Toilet' },
              { Icon: Clock, stat: 'Same Day', label: 'Service Often Available' },
            ].map(({ Icon, stat, label }) => (
              <div key={label} style={{ padding: '24px' }}>
                <Icon size={32} color="var(--brand-navy)" style={{ margin: '0 auto 12px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '28px', marginBottom: '6px' }}>{stat}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-blue)', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Wrench, label: 'Drain Cleaning', href: '/drain-cleaning' },
              { icon: AlertCircle, label: 'Water Heater Repair', href: '/water-heater-repair' },
              { icon: Droplets, label: 'Residential Plumbing', href: '/residential-plumbing' },
              { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: '#F8FAFC', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <item.icon size={20} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Questions about faucet and toilet repair in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" />
        </div>
      </section>

      <CTABanner
        heading="Dripping faucet or running toilet keeping you up at night?"
        subtext="Same-day service often available. Licensed Master Plumber. Written pricing before we start. Residential and commercial."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST FIXTURE REPAIR", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
