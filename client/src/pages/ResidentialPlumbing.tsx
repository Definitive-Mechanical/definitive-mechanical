import { CheckCircle2, Wrench, Plus, AlertTriangle, ClipboardCheck, AlertCircle, FileX, XCircle, ShieldAlert, CreditCard, ShieldCheck} from 'lucide-react';
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
    answer: "Yes. Emergency residential plumbing is available 24/7, 365 days a year. A live dispatcher answers every emergency call. All services have a trip fee for after-hours, weekend, or holiday calls."
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
      <section style={{
        minHeight: '55vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-pipe-repair_97801b59.webp"
            alt="Residential plumbing Maryland DC Northern Virginia — Licensed Master Plumber"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Residential Plumbing' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">RESIDENTIAL PLUMBING  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Residential Plumbing Services for Homeowners in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical provides residential plumbing repairs and installations for homeowners across Maryland, Washington DC, and Northern Virginia. From leaks and drain clogs to water heater replacement, gas line work, sewer service, and backflow certification — every job is performed by licensed plumbing professionals under Master Plumber license. Financing available. 24/7 emergency service. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber", "24/7 Emergency Service", "Financing Available", "Honest Upfront Pricing", "11 Years in Business"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST RESIDENTIAL SERVICE" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES LIST */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>RESIDENTIAL SERVICES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What residential plumbing services does Definitive Mechanical provide?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>Definitive Mechanical handles the full range of residential plumbing for homeowners across the DMV — from small repairs to major system work.</p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CARDS.map(({ Icon, title, items }) => (
              <div key={title} style={{ background: 'white', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '24px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)' }}>
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
        <div className="container">
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
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
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
                {["Written pricing before we touch a pipe", "No commissioned salespeople", "Trip fee applies to all services — all services have a trip fee"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
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

      {/* SECTION 5: FINANCING */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <div style={{ background: '#F0F5FA', borderRadius: '8px', padding: '28px', maxWidth: '700px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
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
      <section style={{ background: '#F0F5FA', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' },
              { icon: AlertCircle, label: 'Water Heater Repair', href: '/water-heater-repair' },
              { icon: Wrench, label: 'Drain Cleaning', href: '/drain-cleaning' },
              { icon: AlertCircle, label: 'Gas Line Repair', href: '/gas-line-repair' },
              { icon: CreditCard, label: 'Financing', href: 'https://www.mysynchrony.com/mmc/S6240351600' },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '14px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <item.icon size={18} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '12px' }}>{item.label}</span>
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about residential plumbing in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
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
