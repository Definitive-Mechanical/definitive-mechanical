import { ChevronRight, Wrench, Search, Waves, CreditCard, ShieldCheck} from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "Is hydro-jetting better than snaking?", answer: "For most recurring clogs and commercial drain systems, yes. Hydro-jetting cleans the full interior of the pipe rather than just breaking through the center of a blockage. For a simple, first-time clog in an otherwise healthy line, cable snaking is fast and effective. Our technician will recommend the appropriate method after assessment — we do not upsell hydro-jetting when snaking will solve the problem." },
  { question: "How often should commercial drains be hydro-jetted?", answer: "Restaurant and food service facilities with heavy grease production typically benefit from hydro-jetting every 3-6 months depending on volume. Commercial properties with high use but lower grease loads may benefit from annual jetting. We can set up a scheduled maintenance program for your facility." },
  { question: "Can hydro-jetting damage pipes?", answer: "Hydro-jetting can damage pipes that are already severely deteriorated or structurally compromised. This is why camera inspection before jetting is important for older systems. Definitive Mechanical assesses pipe condition before recommending hydro-jetting and does not jet pipes that show signs of imminent failure." },
];

const COMPARISON_ROWS = [
  { factor: "Method", snaking: "Mechanical auger breaks through blockage", jetting: "High-pressure water scours full pipe interior" },
  { factor: "Pipe wall cleaning", snaking: "No — only clears center of blockage", jetting: "Yes — removes grease, scale, and debris from walls" },
  { factor: "Root intrusion", snaking: "Cuts through roots but does not flush remnants", jetting: "Flushes root remnants from the line" },
  { factor: "Grease buildup", snaking: "Ineffective for hardened grease", jetting: "Highly effective — dissolves and flushes grease" },
  { factor: "Best for", snaking: "Simple blockages, fast clearing", jetting: "Grease accumulation, root intrusion, recurring clogs" },
  { factor: "Commercial use", snaking: "Light commercial", jetting: "Standard for commercial kitchens and high-use facilities" },
];

const PRICING_ROWS = [
  { type: "Residential hydro-jetting (drain line)", range: "$300-$600" },
  { type: "Residential hydro-jetting (sewer line)", range: "$400-$800" },
  { type: "Commercial hydro-jetting", range: "$500-$1,500+ depending on line size and length" },
];

const WHEN_TO_USE = [
  "Recurring drain or sewer clogs in the same line despite previous snaking",
  "Grease accumulation in restaurant or commercial kitchen drain systems",
  "Root intrusion confirmed by camera — after cable cutting, hydro-jetting flushes root fragments",
  "Scale or mineral buildup reducing pipe capacity in older lines",
  "Pre-inspection cleaning before a camera inspection on heavily coated lines",
  "Preventative maintenance for commercial properties on a scheduled cleaning program",
];

export default function HydroJetting() {
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
            src="/manus-storage/service-hydro-jetting_e0ce3d72.webp"
            alt="Professional hydro-jetting Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Drain Cleaning', href: '/drain-cleaning' }, { label: 'Hydro-Jetting' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">HYDRO-JETTING SERVICE  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Hydro-Jetting Service in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical provides professional hydro-jetting service for residential and commercial drain and sewer lines across Maryland, Washington DC, and Northern Virginia. Hydro-jetting uses high-pressure water to scour the full interior of pipes — removing grease, scale, root remnants, and debris more thoroughly than cable snaking. Licensed Master Plumber. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["High-Pressure Pipe Cleaning", "Commercial & Residential", "Licensed Master Plumber", "For Drain & Sewer Lines"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton bg="dark" type="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton bg="dark" type="secondary" text="REQUEST HYDRO-JETTING" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-2">HOW IT WORKS</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '16px' }}>What is hydro-jetting and how does it work?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                Hydro-jetting is a drain and sewer line cleaning method that uses a high-pressure water stream — typically 1,500-4,000 PSI — delivered through a specialized nozzle inserted into the drain or sewer line. The nozzle simultaneously jets water forward to break up blockages and backwards against the pipe wall to scour grease, scale, mineral deposits, and debris from the interior surface.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Unlike cable snaking, which punches a hole through a blockage without necessarily clearing the pipe walls, hydro-jetting cleans the entire interior circumference of the pipe from cleanout to cleanout. The result is a pipe that flows at near-original capacity rather than a pipe with a cleared center and heavily coated walls.
              </p>
              <div style={{ background: '#F0F5FA', borderRadius: '4px', padding: '16px' }}>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-navy)', fontSize: '14px', lineHeight: 1.6 }}>
                  Hydro-jetting operates at 1,500-4,000 PSI — enough pressure to remove decades of grease, scale, and root mass from pipe walls.
                </p>
              </div>
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

      {/* SECTION 3: COMPARISON TABLE */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>HYDRO-JETTING VS SNAKING</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What is the difference between hydro-jetting and snaking?</h2>
        </div>
          <div style={{ background: 'white', borderRadius: '6px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', maxWidth: '896px', margin: '0 auto 24px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--brand-blue)', padding: '12px 20px' }}>
              {["FACTOR", "CABLE SNAKING", "HYDRO-JETTING"].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</span>
              ))}
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div key={row.factor} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '12px 20px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{row.factor}</span>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.5 }}>{row.snaking}</span>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-cyan)', fontSize: '13px', lineHeight: 1.5, fontWeight: 500 }}>{row.jetting}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            For simple, one-time blockages in lines that are otherwise in good condition, cable snaking is fast and effective. For recurring clogs, grease-heavy commercial drain systems, or lines where camera inspection shows significant buildup, hydro-jetting delivers a more thorough result.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHEN TO USE */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHEN TO USE HYDRO-JETTING</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>When should you use hydro-jetting instead of snaking?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {WHEN_TO_USE.map((item) => (
              <div key={item} style={{ background: 'white', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '20px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ChevronRight size={18} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PIPE SAFETY */}
      <section style={{ background: 'var(--brand-blue)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="PIPE SAFETY" heading="Is hydro-jetting safe for all pipes?" centered light />
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 20px' }}>
            Hydro-jetting is safe for most modern drain and sewer pipe materials — PVC, ABS, and modern cast iron. It is not appropriate for pipes that are already severely deteriorated, cracked, or about to fail structurally. High-pressure water can accelerate failure in a pipe that is already compromised. This is why we conduct a camera inspection before recommending hydro-jetting on older systems. We assess the pipe condition first — we do not hydro-jet a line we know to be structurally fragile.
          </p>
          <Link href="/video-camera-inspection" style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'white', fontSize: '14px', textDecoration: 'underline' }}>
            Learn about Video Camera Inspection →
          </Link>
        </div>
      </section>

      {/* SECTION 6: PRICING */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>PRICING GUIDE</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What does hydro-jetting cost in Maryland, DC, or Virginia?</h2>
        </div>
          <div style={{ background: 'white', borderRadius: '6px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', maxWidth: '560px', margin: '0 auto 24px', overflow: 'hidden' }}>
            <div style={{ background: 'var(--brand-blue)', padding: '12px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SERVICE TYPE</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TYPICAL RANGE</span>
            </div>
            {PRICING_ROWS.map((row, i) => (
              <div key={row.type} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 20px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{row.type}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px' }}>{row.range}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <BookNowButton bg="blue" type="phone" text="CALL FOR A DIRECT QUOTE" href="tel:+13016795849" size="md" />
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Drain Cleaning', href: '/drain-cleaning' }, { icon: Search, label: 'Video Camera Inspection', href: '/video-camera-inspection' }, { icon: Waves, label: 'Sewer Line Repair', href: '/sewer-line-repair' }, { icon: CreditCard, label: 'Commercial Plumbing', href: '/commercial-plumbing' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: '#F8FAFC', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about hydro-jetting in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner heading="Recurring drain problems? Grease-heavy commercial kitchen? Hydro-jetting may be the answer." subtext="Camera inspection before jetting. Licensed Master Plumber. Written pricing." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST HYDRO-JETTING SERVICE", href: "/contact" }} variant="gradient" />
    </>
  );
}
