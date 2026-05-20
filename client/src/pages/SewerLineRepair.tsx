import { AlertCircle, AlertTriangle, Phone, TreePine, Clock, Activity, Utensils, Package, Wrench, Waves, RotateCcw, CreditCard, Search, MapPin, ShieldCheck} from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "What are the main sewer line clog symptoms?", answer: "The most reliable signs of a main sewer line clog are multiple fixtures draining slowly at the same time, gurgling sounds from toilets or floor drains, sewage odor inside the home, and water backing up into a tub or floor drain when the toilet is flushed. A single slow drain is usually a lateral line issue. Multiple affected fixtures point to the main line." },
  { question: "How much does sewer line repair cost?", answer: "Sewer line repair ranges from $250-$500 for a cable clearing to $4,000-$12,000+ for full excavation and replacement, depending on the type of repair needed. Camera inspection — typically $200-$400 — identifies exactly what type of repair is required and prevents paying for excavation when a clearing would have resolved the issue." },
  { question: "Do you use camera inspection before sewer line repair?", answer: "Yes, always for suspected structural issues. Camera inspection shows us exactly what is happening inside the line before we recommend a repair path. We show you the footage and explain what we see before recommending anything." },
  { question: "Can you repair commercial sewer lines?", answer: "Yes. We repair commercial sewer lines for restaurants, office buildings, multi-family properties, government facilities, and industrial properties across Maryland, DC, and Northern Virginia. Commercial properties with high-grease drain loads benefit from scheduled maintenance programs. Contact (301) 679-5849 to discuss your commercial property's needs." },
];

const PRICING_ROWS = [
  { type: "Camera inspection", range: "$200-$400" },
  { type: "Cable clearing / rooter", range: "$250-$500" },
  { type: "Hydro-jetting", range: "$350-$700" },
  { type: "Spot repair (localized excavation)", range: "$1,500-$4,000" },
  { type: "Full sewer line replacement", range: "$4,000-$12,000+" },
];

export default function SewerLineRepair() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section style={{
        minHeight: '60vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-sewer-line-repair_e3bf8f22.jpg"
            alt="Sewer line repair Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Drain Cleaning', href: '/drain-cleaning' }, { label: 'Sewer Line Repair' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">SEWER LINE REPAIR  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Sewer Line Repair in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical repairs sewer lines for homes and businesses across Maryland, Washington DC, and Northern Virginia. We use video camera inspection to diagnose the exact problem before recommending repair — so you know what you are paying for and why. Emergency sewer service available 24/7. Licensed Master Plumber. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["24/7 Emergency Sewer Service", "Camera Inspection Before Repair", "Licensed Master Plumber", "Commercial & Residential"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST SEWER INSPECTION" href="/contact" size="md" />
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What are the warning signs of a sewer line problem?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>Sewer line issues rarely appear without warning. Recognizing the early signs prevents a manageable repair from becoming a major excavation.</p>
        </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '16px' }}>Early warning signs:</p>
              <div className="space-y-3">
                {["Slow drains in multiple fixtures simultaneously — the most reliable early indicator", "Gurgling sounds from toilets or floor drains when water is used elsewhere in the home", "Foul sewage odor inside the home or from drains", "Water backing up into a tub or floor drain when the toilet is flushed", "Unusually lush or green patches in the yard above the sewer line — sewage is fertilizing the soil", "Soft or wet spots in the yard without recent rainfall", "Recurring clogs in the same fixture despite repeated clearing"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <AlertCircle size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#C0392B', fontSize: '15px', marginBottom: '16px' }}>Signs of an active or serious failure:</p>
              <div className="space-y-3 mb-6">
                {["Sewage backing up into the home from floor drains or the lowest fixtures", "Multiple fixtures backing up simultaneously", "Visible sewage on the floor or in the basement", "A strong, persistent sewage odor throughout the home"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <AlertTriangle size={18} color="#C0392B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+13016795849" style={{ background: '#C0392B', borderRadius: '4px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <Phone size={16} color="white" />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'white', fontSize: '14px' }}>Any of these signs? Call (301) 679-5849 now — emergency sewer service 24/7.</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CAUSES */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>COMMON CAUSES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What causes sewer line damage in Maryland, DC, and Virginia?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>Understanding the cause of sewer line failure helps explain why some repairs are straightforward and others are more complex.</p>
        </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { Icon: TreePine, title: "Root intrusion.", body: "Tree and shrub roots naturally seek moisture and nutrients — and sewer lines are an abundant source of both. Root intrusion is the most common cause of sewer line blockages and damage in Maryland and Northern Virginia neighborhoods with mature trees. Roots penetrate joints and cracks, eventually obstructing or rupturing the line." },
              { Icon: Clock, title: "Pipe age and material deterioration.", body: "Homes built before the 1980s in the DMV frequently have clay tile or cast iron sewer lines that have deteriorated after decades of use. Clay tile fractures, cast iron corrodes. These materials simply reach end of life." },
              { Icon: Activity, title: "Ground movement and settling.", body: "Soil shifting, frost heave (common in MD/VA winters), and settling over time can cause pipe joints to separate or the line to sag — creating a 'belly' where sewage pools rather than flows." },
              { Icon: Utensils, title: "Grease accumulation.", body: "In kitchen drain lines and commercial properties, accumulated grease builds up over years and eventually causes near-complete blockage. This is a leading cause of commercial sewer line failures." },
              { Icon: Package, title: "Foreign material accumulation.", body: "Wipes, sanitary products, paper towels, and other non-flushable items are a common cause of partial and full blockages, particularly in older lines with rough interior surfaces." },
            ].map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Icon size={28} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '6px' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DIAGNOSIS PROCESS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-2">HOW WE DIAGNOSE</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '16px' }}>How does Definitive Mechanical diagnose sewer line problems?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                We use video camera inspection before recommending sewer line repair. A camera inspection sends a waterproof camera through the sewer line and transmits real-time video of the interior pipe condition. It shows us exactly what is happening inside the line — the location and nature of the blockage, whether there is root intrusion, pipe cracking or collapse, a belly, or an offset joint.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
                This matters for your wallet and your property. A company that recommends a full sewer line excavation without a camera inspection is making that recommendation without knowing whether it is necessary. A camera inspection often reveals that a problem is a clearing job — not an excavation job — saving significant cost.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
                We show you the camera footage and explain what we see in plain language before recommending a repair path.
              </p>
              <div style={{ background: '#F0F5FA', borderRadius: '6px', padding: '16px', borderLeft: '4px solid var(--brand-cyan)', marginBottom: '16px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px' }}>
                  "You see the same picture we do before we recommend any course of action."
                </p>
              </div>
              <Link href="/video-camera-inspection" style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--brand-cyan)', fontSize: '14px', textDecoration: 'none' }}>
                Learn more about Video Camera Inspection →
              </Link>
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

      {/* SECTION 5: REPAIR OPTIONS */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <SectionHeading eyebrow="REPAIR OPTIONS" heading="What sewer line repair options are available?" centered light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { Icon: Wrench, title: "CABLE CLEARING / ROOTER SERVICE", body: "For blockages caused by debris accumulation, minor root intrusion, or grease buildup. A cable machine clears the obstruction and restores flow. This is a clearing service, not a structural repair — if the line has structural damage, clearing addresses symptoms rather than cause.", link: null },
              { Icon: Waves, title: "HYDRO-JETTING", body: "High-pressure water jetting scours the full interior of the sewer line, removing root intrusion remnants, grease, scale, and debris more thoroughly than cable clearing. Recommended when root intrusion is confirmed or for commercial properties with heavy grease accumulation.", link: { label: "Learn more about hydro-jetting ->", href: "/hydro-jetting" } },
              { Icon: MapPin, title: "SPOT REPAIR / PIPE SECTION REPLACEMENT", body: "When camera inspection reveals a localized crack, joint failure, or collapse in a specific section of the line, a targeted excavation and repair of that section is often sufficient — and far less costly than full line replacement.", link: null },
              { Icon: RotateCcw, title: "FULL SEWER LINE REPLACEMENT", body: "When the line is deteriorated beyond repair along its full length, complete replacement is necessary. We use camera inspection to confirm this recommendation before advising a full replacement.", link: { label: "Learn about sewer line installation ->", href: "/sewer-line-installation" } },
            ].map(({ Icon, title, body, link }) => (
              <div key={title} style={{ background: 'white', borderRadius: '6px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                <Icon size={36} color="var(--brand-cyan)" style={{ marginBottom: '16px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>{title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6, marginBottom: link ? '12px' : 0 }}>{body}</p>
                {link && <Link href={link.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--brand-cyan)', fontSize: '13px', textDecoration: 'none' }}>{link.label}</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PRICING */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>REPAIR COSTS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What does sewer line repair cost in Maryland, DC, or Virginia?</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.75, marginBottom: '32px', maxWidth: '640px' }}>Sewer line repair cost varies significantly based on the repair type, depth, access, and length of pipe affected.</p>
        </div>
          <div style={{ background: 'white', borderRadius: '6px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', maxWidth: '672px', margin: '0 auto 16px', overflow: 'hidden' }}>
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
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-3)', fontSize: '13px', fontStyle: 'italic', lineHeight: 1.6, maxWidth: '672px', margin: '0 auto 16px', textAlign: 'center' }}>
            Factors that affect cost: depth of the line, soil conditions, presence of concrete or hardscape above the line, proximity to foundation, and permit requirements. We provide written pricing after camera inspection — you know the cost and the reason for it before any excavation begins.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CreditCard size={20} color="var(--brand-cyan)" />
            <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>Financing available through Synchrony for major sewer line repairs.</span>
            <BookNowButton variant="ghost" text="APPLY FOR FINANCING" href={BUSINESS.financing} size="sm" />
          </div>
        </div>
      </section>

      {/* SECTION 7: RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[{ icon: Search, label: 'Video Camera Inspection', href: '/video-camera-inspection' }, { icon: Waves, label: 'Hydro-Jetting', href: '/hydro-jetting' }, { icon: RotateCcw, label: 'Sewer Line Installation', href: '/sewer-line-installation' }, { icon: Wrench, label: 'Drain Cleaning', href: '/drain-cleaning' }, { icon: Phone, label: 'Emergency Plumbing', href: '/emergency-plumbing' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: '#F8FAFC', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <item.icon size={20} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about sewer line repair in MD, DC & Northern VA</h2>
        </div>
          <div style={{ background: 'white', borderRadius: '6px', padding: '8px 32px' }}>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <CTABanner heading="Sewer backup or slow drains across multiple fixtures?" subtext="Camera inspection before we recommend repair. Licensed Master Plumber. Written pricing. 24/7 emergency sewer service across MD, DC, and Northern Virginia." primaryBtn={{ text: "CALL (301) 679-5849 — 24/7 EMERGENCY", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SEWER INSPECTION", href: "/contact" }} variant="gradient" />
    </>
  );
}
