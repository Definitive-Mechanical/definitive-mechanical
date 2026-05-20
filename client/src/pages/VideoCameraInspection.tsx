import { Search, TreePine, AlertTriangle, ChevronsDown, Shuffle, TrendingDown, Droplets, AlertCircle, Package, ShieldCheck, Home, ClipboardCheck, Building2, Wrench, Waves } from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "How much does a sewer camera inspection cost?", answer: "A standard sewer camera inspection for a residential property in the DMV market typically costs $200-$400. Commercial inspections and longer line assessments may cost more depending on line length and access. When camera inspection is performed in conjunction with a repair, the cost may be rolled into the overall service." },
  { question: "When should I get a sewer camera inspection?", answer: "Before any major sewer repair recommendation, when buying an older home, when multiple fixtures are draining slowly, after a sewage backup, as part of routine maintenance for commercial properties, or when purchasing an older commercial property. Camera inspection is the most cost-effective way to understand what is actually happening inside your sewer line." },
  { question: "What does a sewer camera inspection reveal?", answer: "A sewer camera inspection reveals blockages and their cause, root intrusion, pipe cracks and fractures, pipe collapse, joint offsets, bellying or sagging, grease accumulation, corrosion, and foreign material. It also locates exactly where in the line any issue exists — typically measured in feet from the cleanout — which allows for precise spot repair rather than guesswork excavation." },
];

const WHAT_IT_FINDS = [
  { Icon: Search, title: "Blockages and their cause", body: "Debris, grease accumulation, root mass, or foreign material — and where exactly they are" },
  { Icon: TreePine, title: "Root intrusion", body: "Roots penetrating joints or cracks, from fine hair roots to full pipe obstruction" },
  { Icon: AlertTriangle, title: "Pipe cracks and fractures", body: "Structural failures in clay, cast iron, or PVC lines" },
  { Icon: ChevronsDown, title: "Pipe collapse", body: "Sections of line that have caved inward" },
  { Icon: Shuffle, title: "Pipe offset or joint separation", body: "Sections that have shifted out of alignment due to ground movement" },
  { Icon: TrendingDown, title: "Bellying or sagging", body: "Low spots where sewage pools rather than flows, causing recurring backups" },
  { Icon: Droplets, title: "Grease accumulation", body: "Buildup coating pipe walls and reducing flow capacity" },
  { Icon: AlertCircle, title: "Corrosion", body: "Interior deterioration of cast iron lines common in pre-1980s DMV homes" },
  { Icon: Package, title: "Foreign material", body: "Wipes, sanitary products, or other non-flushable material lodged in the line" },
];

const WHEN_TO_GET = [
  { Icon: ShieldCheck, title: "Before any major sewer repair recommendation.", body: "We perform camera inspection before recommending excavation, full line replacement, or any significant repair. Often reveals a problem is a clearing or spot repair — not a $10,000 excavation job." },
  { Icon: Home, title: "Before buying a home.", body: "A sewer camera inspection during the home buying process reveals the actual condition of the sewer line — a major cost item that standard home inspectors do not assess. Pre-purchase inspections are available and highly recommended for older homes." },
  { Icon: Droplets, title: "When multiple fixtures are draining slowly.", body: "This pattern points to the main sewer line. A camera confirms whether the issue is a blockage (clearing solution) or structural damage (repair solution)." },
  { Icon: AlertTriangle, title: "After a sewage backup.", body: "Understanding what caused the backup — and whether it is a one-time event or a chronic structural issue — prevents repeat emergencies." },
  { Icon: ClipboardCheck, title: "As part of routine maintenance.", body: "Commercial properties and older residential properties benefit from periodic camera inspection to catch developing problems before they become emergencies." },
  { Icon: Building2, title: "When purchasing an older commercial property.", body: "Understanding the condition of the sewer and drain infrastructure before closing informs negotiation and prevents surprise maintenance costs after purchase." },
];

export default function VideoCameraInspection() {
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
            src="/manus-storage/service-video-camera-inspection_8f462e65.jpg"
            alt="Video camera sewer inspection Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Sewer Line Repair', href: '/sewer-line-repair' }, { label: 'Video Camera Inspection' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">VIDEO CAMERA INSPECTION  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Video Camera Inspection for Drains & Sewer Lines in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical uses professional video camera inspection to see inside sewer and drain lines before recommending any repair. A waterproof camera transmits real-time footage of the pipe interior — showing blockages, cracks, root intrusion, pipe collapse, and offsets. Know what you are dealing with before you excavate. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["See Before You Dig", "Real-Time Footage", "Licensed Master Plumber", "Residential & Commercial"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST CAMERA INSPECTION" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IT FINDS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHAT CAMERA INSPECTION REVEALS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What does a sewer camera inspection find?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHAT_IT_FINDS.map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '20px' }}>
                <Icon size={24} color="var(--brand-cyan)" style={{ marginBottom: '10px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px', marginBottom: '6px' }}>{title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.7, maxWidth: '560px', margin: '24px auto 0', textAlign: 'center' }}>
            The camera also locates exactly where in the line any issue exists — typically measured in feet from the cleanout — which allows for precise spot repair rather than guesswork excavation.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHEN TO GET ONE */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHEN TO GET A CAMERA INSPECTION</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>When should you get a sewer camera inspection?</h2>
        </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {WHEN_TO_GET.map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Icon size={24} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '6px' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COST */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '16px' }}>What does a sewer camera inspection cost?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                A standard sewer camera inspection for a residential property in the DMV market typically costs $200-$400. Commercial inspections and longer line assessments may cost more depending on line length and access. When camera inspection is performed in conjunction with a repair, the cost may be rolled into the overall service.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Consider that a camera inspection at $200-$400 can prevent a $5,000-$12,000 excavation that turns out to be unnecessary. It is the most cost-effective diagnostic tool available for sewer line problems.
              </p>
              <BookNowButton variant="phone" text="CALL TO SCHEDULE INSPECTION" href="tel:+13016795849" size="md" />
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

      {/* RELATED SERVICES */}
      <section style={{ background: '#F0F5FA', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Waves, label: 'Hydro-Jetting', href: '/hydro-jetting' }, { icon: Wrench, label: 'Sewer Line Repair', href: '/sewer-line-repair' }, { icon: Search, label: 'Sewer Line Installation', href: '/sewer-line-installation' }, { icon: Wrench, label: 'Drain Cleaning', href: '/drain-cleaning' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: 'white', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about video camera inspection in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner heading="See what's inside your sewer line before you spend a dollar on repair." subtext="Camera inspection before any major recommendation. Licensed Master Plumber. Written pricing." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST CAMERA INSPECTION", href: "/contact" }} variant="gradient" />
    </>
  );
}
