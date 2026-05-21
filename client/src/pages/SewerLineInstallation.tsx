import { CheckCircle2, Camera, FileText, AlertTriangle, Trash2, Maximize2, Link2, Search, Waves, Wrench, CreditCard } from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';
import ProcessStep from '@/components/ui/ProcessStep';

const FAQ_ITEMS = [
  { question: "How do I know if I need full sewer line replacement vs. repair?", answer: "Camera inspection tells you. A sewer camera shows the interior condition of the full line — localized damage calls for spot repair, widespread deterioration calls for replacement. We use camera inspection before recommending any full replacement. Call (301) 679-5849 for a camera inspection." },
  { question: "How long does sewer line installation take?", answer: "A standard residential sewer line replacement typically takes 1-3 days including excavation, pipe installation, and backfill. Larger or more complex jobs — deep lines, concrete removal, or complex routing — may take longer. We provide a realistic timeline estimate before the job begins." },
  { question: "Do you handle sewer line installation for commercial properties?", answer: "Yes. We install and replace sewer lines for commercial properties, multi-family buildings, government facilities, and new construction projects across Maryland, DC, and Northern Virginia. Contact (301) 679-5849 to discuss your commercial project." },
];

const PROCESS_STEPS = [
  { icon: "Camera", title: "Camera inspection of the existing line", description: "For replacements, confirms scope and justifies the recommendation for replacement." },
  { icon: "FileText", title: "Permit application and approval", description: "Applied through the relevant jurisdiction — WSSC in Prince George's and Montgomery Counties, and applicable agencies in DC and Virginia." },
  { icon: "AlertTriangle", title: "Underground utility marking", description: "Maryland Miss Utility, Virginia 811 — required before any excavation." },
  { icon: "Shovel", title: "Excavation along the line route", description: "Minimized to the actual scope confirmed by camera inspection." },
  { icon: "Trash2", title: "Old pipe removal (for replacements)", description: "Complete removal of deteriorated clay, cast iron, or damaged pipe." },
  { icon: "Maximize2", title: "New pipe installation and slope verification", description: "PVC or approved equivalent, installed to code slope requirements for proper drainage." },
  { icon: "Link2", title: "Connection at building cleanout and municipal tap", description: "Proper connection at both ends with code-compliant fittings." },
  { icon: "CheckCircle2", title: "Permit inspection and camera confirmation", description: "Inspection sign-off followed by camera confirmation of the completed new line." },
];

const PRICING_ROWS = [
  { scope: "Residential sewer line replacement (50-100 ft)", range: "$5,000-$12,000" },
  { scope: "Residential new installation (new construction)", range: "$4,000-$10,000" },
  { scope: "Commercial sewer line replacement", range: "Custom quote" },
  { scope: "Permit fees (vary by jurisdiction)", range: "$150-$800+" },
];

const LICENSE_BADGES = ["MD #96958", "WSSC #73696", "DC #PGM1002236", "VA #2710064209"];

export default function SewerLineInstallation() {
  return (
    <>
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
            src="/manus-storage/service-sewer-line-installation_5ef0c622.webp"
            alt="Sewer line installation Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Sewer Line Repair', href: '/sewer-line-repair' }, { label: 'Sewer Line Installation' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">SEWER LINE INSTALLATION  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Sewer Line Installation in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical installs and replaces sewer lines for residential and commercial properties across Maryland, Washington DC, and Northern Virginia. Every installation is performed under the correct permits, to code, by licensed plumbing professionals under Master Plumber license. Camera inspection included before full replacement is recommended. Financing available. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Camera Inspection Before Replacement", "Licensed Master Plumber", "Permitted & Inspected", "Commercial & Residential"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST SEWER ASSESSMENT" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHEN IS REPLACEMENT NEEDED */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHEN IS REPLACEMENT NEEDED?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>When is sewer line installation or full replacement necessary?</h2>
        </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 24px', textAlign: 'center' }}>
            Camera inspection typically makes this determination — which is why we use it before recommending replacement. Full sewer line installation or replacement is necessary when:
          </p>
          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            {["The existing line is deteriorated beyond repair along its full length (common in homes with original clay or cast iron lines from the 1940s-1970s)", "The line has collapsed in multiple sections", "Root intrusion has progressed to the point where the pipe wall integrity is compromised throughout", "The line has a chronic belly (low spot) causing repeated backups that cannot be corrected by spot repair", "New construction requires a new sewer line from the building to the municipal connection", "A property is adding a structure or addition that requires extending the sewer system"].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ background: '#F0F5FA', borderRadius: '4px', padding: '16px', maxWidth: '720px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.6 }}>
              We do not recommend full replacement when a spot repair or clearing will address the actual problem. Our camera inspection process ensures the recommendation matches the actual condition of the line.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: INSTALLATION PROCESS */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>THE INSTALLATION PROCESS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What does sewer line installation involve?</h2>
        </div>
          <div className="max-w-3xl mx-auto">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStep key={step.title} number={i + 1} icon={step.icon} title={step.title} description={step.description} isLast={i === PROCESS_STEPS.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PERMITS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>PERMITS & WSSC</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Do you pull permits for sewer line installation?</h2>
        </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 32px', textAlign: 'center' }}>
            Yes. Sewer line installation in Maryland, Washington DC, and Virginia requires permits in virtually all jurisdictions. In Prince George's County and Montgomery County, WSSC (Washington Suburban Sanitary Commission) oversight applies to connections to the public sewer system. We pull permits under our Master Plumber licenses and coordinate inspections — the permit is part of the job, not an optional add-on.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {LICENSE_BADGES.map((badge) => (
              <div key={badge} style={{ background: 'var(--brand-blue)', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '10px 20px', borderRadius: '4px' }}>{badge}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>PRICING GUIDE</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What does sewer line installation cost in Maryland, DC, or Virginia?</h2>
        </div>
          <div style={{ background: 'white', borderRadius: '6px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', maxWidth: '672px', margin: '0 auto 16px', overflow: 'hidden' }}>
            <div style={{ background: 'var(--brand-blue)', padding: '12px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SCOPE</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TYPICAL RANGE</span>
            </div>
            {PRICING_ROWS.map((row, i) => (
              <div key={row.scope} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 20px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{row.scope}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px' }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-3)', fontSize: '13px', fontStyle: 'italic', lineHeight: 1.6, maxWidth: '672px', margin: '0 auto 20px', textAlign: 'center' }}>
            Cost varies significantly based on line depth, soil conditions, access, hardscape removal and restoration, permit requirements, and connection fees. Written pricing after camera inspection and site assessment. Financing available through Synchrony.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BookNowButton variant="ghost" text="APPLY FOR FINANCING" href={BUSINESS.financing} size="sm" />
            <BookNowButton variant="phone" text="CALL FOR ASSESSMENT" href="tel:+13016795849" size="md" />
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Sewer Line Repair', href: '/sewer-line-repair' }, { icon: Search, label: 'Video Camera Inspection', href: '/video-camera-inspection' }, { icon: Waves, label: 'Hydro-Jetting', href: '/hydro-jetting' }, { icon: CreditCard, label: 'Commercial Plumbing', href: '/commercial-plumbing' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: '#F8FAFC', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about sewer line installation in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner heading="Facing a full sewer line replacement? Get a camera inspection first." subtext="We confirm what is needed before recommending excavation. Licensed Master Plumber. Written pricing." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SEWER ASSESSMENT", href: "/contact" }} variant="gradient" />
    </>
  );
}
