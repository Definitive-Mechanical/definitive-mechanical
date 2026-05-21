import { AlertCircle, Phone, Clock, Activity, Droplets, ZapOff, Info, Wrench, AlertTriangle, CheckCircle2, ShieldCheck} from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "What are the warning signs of a water line problem?", answer: "Key warning signs include an unexplained spike in your water bill, reduced water pressure throughout the home, discolored water, wet spots or soggy areas in the yard (particularly along the water line path), and sounds of running water when no fixtures are in use. Any of these warrant a professional assessment." },
  { question: "How much does water line repair cost?", answer: "Water line repair ranges from $400-$1,000 for accessible pipe repairs to $3,000-$8,000+ for full residential service line replacement, depending on depth, access, pipe material, and scope. We provide written pricing after assessment — before any excavation begins." },
  { question: "Do you handle emergency water line repairs?", answer: "Yes. Emergency water line repair is available 24/7 across Maryland, DC, and Northern Virginia. Call (301) 679-5849 immediately for an active water line failure. Our first step is typically to help you locate and shut off the main supply valve while we are in transit." },
];

const WARNING_SIGNS = [
  "Unexplained spike in your water bill — often the first and most reliable indicator of a leak",
  "Reduced water pressure throughout the property (not just one fixture)",
  "Discolored water — rust or sediment in tap water",
  "Visible wet spots, pooling water, or unusually soggy areas in the yard",
  "Sinkholes or depressed soil in the yard along the water line path",
  "Sound of running water when no fixtures are in use",
  "Visible corrosion or damage on any exposed supply piping",
];

const PRICING_ROWS = [
  { type: "Accessible pipe section repair", range: "$400-$1,000" },
  { type: "Excavation and spot repair", range: "$1,000-$3,500" },
  { type: "Full service line replacement (residential)", range: "$3,000-$8,000+" },
  { type: "Emergency response and containment", range: "$500-$2,000" },
];

export default function WaterLineRepair() {
  return (
    <>
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
            src="/manus-storage/service-water-line-repair_19c1bddd.webp"
            alt="Water line repair Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Water Line Repair' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">WATER LINE REPAIR  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Water Line Repair in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical repairs water lines and main water service lines for homes and businesses across Maryland, Washington DC, and Northern Virginia. We use detection methods to locate the problem before excavating — minimizing property disruption. Emergency water line service available 24/7. Licensed Master Plumber. Written pricing. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["24/7 Emergency Water Line Service", "Licensed Master Plumber", "Detect Before Excavating", "Commercial & Residential"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton bg="dark" variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton bg="dark" variant="secondary" text="REQUEST WATER LINE ASSESSMENT" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WARNING SIGNS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WARNING SIGNS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What are the warning signs of a water line problem?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>Water line problems — particularly with the main service line running from the municipal connection to your home — can develop slowly or fail suddenly.</p>
        </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '16px' }}>Warning signs:</p>
              <div className="space-y-3">
                {WARNING_SIGNS.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Emergency strip */}
            <div style={{ background: 'var(--brand-blue)', borderRadius: '6px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Phone size={32} color="var(--brand-cyan)" style={{ marginBottom: '12px' }} />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>ACTIVE WATER LINE FAILURE?</p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                Call (301) 679-5849 immediately. Our first step is typically to help you locate and shut off the main supply valve while we are in transit.
              </p>
              <BookNowButton bg="blue" variant="phone" text="CALL NOW — 24/7 EMERGENCY" href="tel:+13016795849" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CAUSES */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>CAUSES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What causes water line failure in Maryland, DC, and Virginia?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { Icon: Clock, title: "Pipe age and material deterioration.", body: "Older homes in the DMV may still have galvanized steel or lead water service lines. Galvanized steel corrodes from the inside out over decades, eventually restricting flow and developing pinhole leaks. Lead service lines are being prioritized for replacement under federal Lead and Copper Rule improvements." },
              { Icon: Activity, title: "Ground movement.", body: "Frost heave in Maryland and Virginia winters, soil settling, and tree root activity can shift and stress buried water lines, leading to joint failures or cracks." },
              { Icon: Droplets, title: "Corrosion.", body: "Soil conditions vary across the DMV — some soils are more corrosive to buried metal pipe. Copper lines can also experience pinhole corrosion from high chlorine content or low pH water chemistry." },
              { Icon: ZapOff, title: "Physical damage.", body: "Excavation by other contractors or utilities is a common cause of sudden water line failures. Call before you dig — Maryland Miss Utility and Virginia 811." },
            ].map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '24px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)' }}>
                <Icon size={36} color="var(--brand-cyan)" style={{ marginBottom: '12px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '8px' }}>{title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
          {/* WSSC Note */}
          <div style={{ background: '#F0F5FA', borderRadius: '6px', padding: '20px', maxWidth: '640px', margin: '32px auto 0', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Info size={20} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>
              <strong>WSSC service area note:</strong> In Prince George's and Montgomery Counties, water service lines from the main to the meter are typically WSSC's responsibility, while the line from the meter into the home is the property owner's responsibility. We coordinate with WSSC on the appropriate scope for any water line repair in these jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-2">PRICING GUIDE</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '24px' }}>What does water line repair cost?</h2>
              <div style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px' }}>
                <div style={{ background: 'var(--brand-blue)', padding: '10px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>REPAIR TYPE</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TYPICAL RANGE</span>
                </div>
                {PRICING_ROWS.map((row, i) => (
                  <div key={row.type} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '11px 16px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px' }}>{row.type}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{row.range}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-3)', fontSize: '13px', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px' }}>
                We provide written pricing after assessment. For emergency water line failures, we can often provide a reliable estimate over the phone based on your description and property type before dispatch.
              </p>
              <BookNowButton bg="blue" variant="phone" text="CALL FOR EMERGENCY ASSESSMENT" href="tel:+13016795849" size="md" />
            </div>
            <div>
              <div style={{ background: 'var(--brand-blue)', borderRadius: '12px', padding: '32px', boxShadow: '0 8px 32px rgba(6,59,99,0.2)' }}>
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

      {/* RELATED SERVICES */}
      <section style={{ background: '#F0F5FA', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Water Line Installation', href: '/water-line-installation' }, { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' }, { icon: Activity, label: 'Sewer Line Repair', href: '/sewer-line-repair' }, { icon: CheckCircle2, label: 'Commercial Plumbing', href: '/commercial-plumbing' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <item.icon size={20} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--brand-blue)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about water line repair in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner heading="Water pressure drop? Unexplained wet spot in the yard? Don't wait." subtext="Detect before excavating. Licensed Master Plumber. 24/7 emergency water line service. Written pricing before we start." primaryBtn={{ text: "CALL (301) 679-5849 — 24/7", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST WATER LINE ASSESSMENT", href: "/contact" }} variant="gradient" />
    </>
  );
}
