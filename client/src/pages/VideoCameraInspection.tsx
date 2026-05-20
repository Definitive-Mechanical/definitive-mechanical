import { Search, TreePine, AlertTriangle, ChevronsDown, Shuffle, TrendingDown, Droplets, AlertCircle, Package, ShieldCheck, Home, ClipboardCheck, Building2, Wrench, Waves } from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "How much does a sewer camera inspection cost?", answer: "A standard sewer camera inspection for a residential property in the DMV market typically costs $200–$400. Commercial inspections and longer line assessments may cost more depending on line length and access. When camera inspection is performed in conjunction with a repair, the cost may be rolled into the overall service." },
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
      <section style={{ minHeight: '52vh', background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,158,198,0.07)', transform: 'skewY(-4deg)', transformOrigin: 'top left', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Sewer Line Repair', href: '/sewer-line-repair' }, { label: 'Video Camera Inspection' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">VIDEO CAMERA INSPECTION · MD, DC & NORTHERN VIRGINIA</p>
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
            <div className="hidden lg:block lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" alt="Video camera sewer inspection Maryland DC Northern Virginia — Definitive Mechanical" loading="eager" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IT FINDS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHAT CAMERA INSPECTION REVEALS" heading="What does a sewer camera inspection find?" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHAT_IT_FINDS.map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '20px', border: '1px solid #E8EFF5' }}>
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
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHEN TO GET A CAMERA INSPECTION" heading="When should you get a sewer camera inspection?" centered />
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
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '16px' }}>What does a sewer camera inspection cost?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                A standard sewer camera inspection for a residential property in the DMV market typically costs $200–$400. Commercial inspections and longer line assessments may cost more depending on line length and access. When camera inspection is performed in conjunction with a repair, the cost may be rolled into the overall service.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Consider that a camera inspection at $200–$400 can prevent a $5,000–$12,000 excavation that turns out to be unnecessary. It is the most cost-effective diagnostic tool available for sewer line problems.
              </p>
              <BookNowButton variant="phone" text="CALL TO SCHEDULE INSPECTION" href="tel:+13016795849" size="md" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" alt="Sewer camera inspection cost Maryland DC Virginia — Definitive Mechanical" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 4px 20px rgba(6,59,99,0.12)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'var(--surface-1)', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Waves, label: 'Hydro-Jetting', href: '/hydro-jetting' }, { icon: Wrench, label: 'Sewer Line Repair', href: '/sewer-line-repair' }, { icon: Search, label: 'Sewer Line Installation', href: '/sewer-line-installation' }, { icon: Wrench, label: 'Drain Cleaning', href: '/drain-cleaning' }].map((item) => (
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
          <SectionHeading eyebrow="FAQ" heading="Questions about video camera inspection in MD, DC & Northern VA" centered />
          <div style={{ background: 'var(--surface-1)', borderRadius: '6px', padding: '8px 32px' }}>
            <FAQAccordion items={FAQ_ITEMS} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner heading="See what's inside your sewer line before you spend a dollar on repair." subtext="Camera inspection before any major recommendation. Licensed Master Plumber. Written pricing." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST CAMERA INSPECTION", href: "/contact" }} variant="gradient" />
    </>
  );
}
