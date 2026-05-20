import { CheckCircle2, Wrench, Plus, AlertTriangle, ClipboardCheck, AlertCircle, FileX, XCircle, ShieldAlert, CreditCard } from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  {
    question: "What residential plumbing services do you offer?",
    answer: "We offer the full range of residential plumbing — emergency service, drain cleaning, water heater repair and installation, tankless water heaters, sewer line service, gas line repair and installation, backflow prevention, water line service, boiler and furnace repair and installation, faucet and toilet repair, and leak detection and repair. Call (301) 679-5849 for any plumbing need."
  },
  {
    question: "Do you provide 24/7 emergency plumbing for homeowners?",
    answer: "Yes. Emergency residential plumbing is available 24/7, 365 days a year. A live dispatcher answers every emergency call. No overtime surcharge for after-hours, weekend, or holiday calls."
  },
  {
    question: "Are you licensed in Maryland, DC, and Virginia?",
    answer: "Yes. Definitive Mechanical holds active Master Plumber and Master Gasfitter licenses in Maryland (State #96958, WSSC #73696, Howard County, Anne Arundel County, City of Rockville), Washington DC (#PGM1002236), Virginia (#2710064209), and Delaware (#PL-0012866)."
  },
  {
    question: "Is financing available for home plumbing repairs?",
    answer: "Yes. Consumer financing is available through Synchrony for eligible services. Apply online at mysynchrony.com/mmc/S6240351600. Monthly payment options for water heater replacement, sewer line repair, tankless installation, and other larger projects."
  },
];

const SERVICE_CARDS = [
  {
    Icon: Wrench,
    title: "Repairs",
    items: ["Leak detection and repair", "Faucet repair and replacement", "Toilet repair and replacement", "Drain clearing and cleaning", "Water heater repair", "Gas line repair", "Sewer line clearing"],
  },
  {
    Icon: Plus,
    title: "Installations",
    items: ["Water heater installation", "Gas line installation", "Sewer line installation", "Water service line installation", "Backflow preventer installation", "Fixture installation", "Boiler and furnace installation"],
  },
  {
    Icon: AlertTriangle,
    title: "Emergency Service",
    items: ["Burst pipe repair", "Sewer backup clearing", "Gas leak repair response", "Water heater emergency replacement", "24/7 emergency dispatch"],
  },
  {
    Icon: ClipboardCheck,
    title: "Preventative Maintenance",
    items: ["Annual water heater flushing", "Sewer camera inspection", "Backflow preventer testing", "Drain maintenance"],
  },
];

const RISK_CARDS = [
  { Icon: AlertTriangle, title: "Code violations", body: "Work that does not meet the applicable plumbing code creates violations that can affect homeowner's insurance, require correction before a home sale, and create legal liability." },
  { Icon: FileX, title: "Permit issues", body: "Unlicensed work typically cannot be permitted or inspected — it has never been reviewed for safety." },
  { Icon: XCircle, title: "Warranty voids", body: "Many manufacturers void equipment warranties when installation is performed by an unlicensed contractor." },
  { Icon: ShieldAlert, title: "Safety", body: "Particularly for gas work, the risk of improperly installed or repaired systems is a documented life-safety issue." },
];

export default function ResidentialPlumbing() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Residential Plumbing",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Definitive Mechanical",
          "telephone": "+13016795849",
          "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" }
        },
        "areaServed": ["Maryland", "Washington DC", "Virginia"],
        "description": "Full-service residential plumbing for homeowners across MD, DC & Northern VA. Licensed Master Plumber. 24/7 emergency service. Financing available."
      })}} />

      {/* SECTION 1: HERO */}
      <section style={{ minHeight: '55vh', background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,158,198,0.07)', transform: 'skewY(-4deg)', transformOrigin: 'top left', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Residential Plumbing' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">RESIDENTIAL PLUMBING  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Residential Plumbing Services for Homeowners in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical provides residential plumbing repairs and installations for homeowners across Maryland, Washington DC, and Northern Virginia. From leaks and drain clogs to water heater replacement, gas line work, sewer service, and backflow certification — every job is handled by a licensed Master Plumber. Financing available. 24/7 emergency service. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber", "24/7 Emergency Service", "Financing Available", "Honest Upfront Pricing", "11 Years in Business"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST RESIDENTIAL SERVICE" href="/contact" size="md" />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80" alt="Residential plumbing services Maryland DC Northern Virginia — Definitive Mechanical" loading="eager" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES LIST */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="RESIDENTIAL SERVICES" heading="What residential plumbing services does Definitive Mechanical provide?" subtext="Definitive Mechanical handles the full range of residential plumbing for homeowners across the DMV — from small repairs to major system work." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CARDS.map(({ Icon, title, items }) => (
              <div key={title} style={{ background: 'white', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '24px', boxShadow: '0 2px 8px rgba(6,59,99,0.06)' }}>
                <Icon size={32} color="var(--brand-cyan)" style={{ marginBottom: '12px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '16px', marginBottom: '12px' }}>{title}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((item) => (
                    <li key={item} style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.6, paddingBottom: '4px' }}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY LICENSED MASTER PLUMBER */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHY IT MATTERS" heading="Why should homeowners choose a licensed Master Plumber?" centered light />
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto 40px', textAlign: 'center' }}>
            In Maryland, Washington DC, and Virginia, a Master Plumber license represents a significant level of tested, verified competency and legal accountability. Unlicensed plumbing work is common in the DMV market.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {RISK_CARDS.map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderRadius: '6px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Icon size={20} color="#C0392B" style={{ flexShrink: 0 }} />
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px' }}>{title}</p>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '32px' }}>
            {["MD #96958", "DC #PGM1002236", "VA #2710064209", "DE #PL-0012866"].map((badge) => (
              <span key={badge} style={{ background: 'white', color: 'var(--brand-navy)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 14px', borderRadius: '3px' }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HONEST PRICING */}
      <section style={{ background: 'var(--surface-1)', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '8px' }}>How does Definitive Mechanical's pricing work for residential clients?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-cyan)', fontSize: '15px', marginBottom: '16px' }}>Upfront pricing in writing — before any work begins.</p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
                When our technician arrives at your home, they assess the situation and provide written pricing before starting work. You know what you are paying before we touch a pipe. If the scope of the job changes during the work, we discuss it with you before proceeding — never after.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                We do not send technicians who are paid on commission. We do not use pricing books designed to maximize invoice size. We charge a fair rate for skilled, licensed, code-compliant work and document it in writing before we start.
              </p>
              <div className="space-y-2">
                {["Written pricing before we touch a pipe", "No commissioned salespeople", "Same rate day or night — no overtime surcharge"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" alt="Upfront pricing residential plumbing Maryland DC Virginia" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 4px 20px rgba(6,59,99,0.12)', objectFit: 'cover', aspectRatio: '3/2' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINANCING */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ background: 'var(--surface-1)', borderRadius: '8px', padding: '28px', maxWidth: '700px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <CreditCard size={48} color="var(--brand-navy)" style={{ flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>
                Financing available through Synchrony for eligible residential plumbing services — particularly higher-ticket work like water heater replacement, tankless installation, sewer line repair, and gas line projects. Apply in 60 seconds.
              </p>
              <BookNowButton variant="ghost" text="APPLY FOR FINANCING" href="https://www.mysynchrony.com/mmc/S6240351600" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'var(--surface-1)', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' },
              { icon: AlertCircle, label: 'Water Heater Repair', href: '/water-heater-repair' },
              { icon: Wrench, label: 'Drain Cleaning', href: '/drain-cleaning' },
              { icon: AlertCircle, label: 'Gas Line Repair', href: '/gas-line-repair' },
              { icon: CreditCard, label: 'Financing', href: 'https://www.mysynchrony.com/mmc/S6240351600' },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: 'white', border: '1px solid #E8EFF5', borderRadius: '4px', padding: '14px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <item.icon size={18} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '12px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" heading="Questions about residential plumbing in MD, DC & Northern VA" centered />
          <div style={{ background: 'var(--surface-1)', borderRadius: '6px', padding: '8px 32px' }}>
            <FAQAccordion items={FAQ_ITEMS} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Homeowner in Maryland, DC, or Northern Virginia with a plumbing need?"
        subtext="Licensed Master Plumber. Upfront pricing in writing. 24/7 emergency service. Financing available through Synchrony."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST RESIDENTIAL PLUMBING SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
