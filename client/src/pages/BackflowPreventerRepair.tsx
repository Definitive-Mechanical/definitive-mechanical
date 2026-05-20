import { Disc, Droplets, Snowflake, ZapOff, Timer, AlertTriangle, CheckCircle2, AlertCircle, ShieldCheck, Shield } from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "Can a failed backflow preventer be repaired or does it need to be replaced?", answer: "Most backflow preventer failures are repairable with internal repair kit installation — replacement of the check disc seals, relief valve seat, and/or other internal components. Full replacement is recommended when the device body is cracked or physically damaged, when the device is an older model for which repair kits are no longer available, when the device has failed multiple consecutive certification tests after repair, or when the installation requires upgrading to a higher-protection device class." },
  { question: "Can you repair backflow preventers on-site?", answer: "Yes. Many backflow preventer failures can be repaired on site during the same service visit as the certification test. We carry common repair kits for the most prevalent device types and manufacturers in the DMV market." },
  { question: "Do you refile the certification report after repair?", answer: "Yes. Report refiling with the relevant water supplier or jurisdiction is included in our repair service. After repair, we retest the device and file the updated certification report." },
];

const FAILURE_CAUSES = [
  { Icon: Disc, title: "Check valve failure", body: "Internal check discs or rubber seats deteriorate and no longer seal properly." },
  { Icon: Droplets, title: "Relief valve fouling", body: "Debris or mineral deposits prevent the relief valve from seating correctly, causing the device to weep or discharge continuously." },
  { Icon: Snowflake, title: "Freeze damage", body: "Backflow preventers installed in exposed locations can freeze and crack during cold Maryland and Virginia winters." },
  { Icon: ZapOff, title: "Physical damage", body: "Impact damage from equipment, landscaping, or vandalism." },
  { Icon: Timer, title: "End of service life", body: "Most backflow preventer components have a finite service life and need periodic repair kit replacement." },
  { Icon: AlertTriangle, title: "Improper installation", body: "A device installed incorrectly or without proper drainage provisions will fail sooner than one installed to code." },
];

export default function BackflowPreventerRepair() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section style={{
        minHeight: '45vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-backflow-prevention_3ef7968a.jpg"
            alt="Backflow preventer repair Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(3,24,56,0.93) 0%, rgba(0,75,140,0.82) 55%, rgba(0,40,90,0.88) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Backflow Prevention', href: '/backflow-prevention' }, { label: 'Backflow Preventer Repair' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">BACKFLOW PREVENTER REPAIR  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Backflow Preventer Repair in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical repairs and replaces backflow prevention devices that have failed certification testing or are showing signs of malfunction across Maryland, Washington DC, and Northern Virginia. Many backflow preventer failures can be repaired on site during the same service visit. Licensed. Report refiling included. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["On-Site Repair Often Available", "Report Refiling Included", "Licensed", "Commercial & Residential"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST BACKFLOW REPAIR" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY THEY FAIL */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHY BACKFLOW PREVENTERS FAIL</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Why do backflow preventers fail?</h2>
        </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 40px', textAlign: 'center' }}>
            Backflow preventers are mechanical devices exposed to water pressure, temperature fluctuation, debris, and chemical exposure. Over time, internal components wear.
          </p>
          <div className="space-y-3 max-w-3xl mx-auto">
            {FAILURE_CAUSES.map(({ Icon, title, body }) => (
              <div key={title} style={{ background: 'white', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderLeftWidth: '4px', borderLeftColor: 'var(--brand-cyan)' }}>
                <Icon size={22} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px', marginBottom: '4px' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: REPAIR VS REPLACE */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>REPAIR OR REPLACE?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Can a failed backflow preventer be repaired or does it need to be replaced?</h2>
        </div>
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Repair */}
            <div style={{ background: 'white', borderTop: '4px solid #1A7A4A', borderRadius: '6px', padding: '28px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1A7A4A', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>USUALLY REPAIRABLE</p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                Most backflow preventer failures are repairable with internal repair kit installation — replacement of the check disc seals, relief valve seat, and/or other internal components. This is typically significantly less expensive than full device replacement.
              </p>
              <div className="space-y-2">
                {["Check valve seal failure — usually repairable", "Relief valve failure — usually repairable", "Minor debris fouling — cleared and reseated on site"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="#1A7A4A" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Replace */}
            <div style={{ background: 'white', borderTop: '4px solid #F59E0B', borderRadius: '6px', padding: '28px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F59E0B', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>REPLACEMENT RECOMMENDED WHEN:</p>
              <div className="space-y-3">
                {["The device body is cracked or physically damaged (freeze damage is the most common cause)", "The device is an older model for which repair kits are no longer available", "The device has failed multiple consecutive certification tests after repair", "The installation requires upgrading to a higher-protection device class"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '16px', textAlign: 'center', marginTop: '32px', maxWidth: '640px', margin: '32px auto 0' }}>
            We assess each device and give you an honest repair-or-replace recommendation — not a replacement recommendation driven by margin.
          </p>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[{ icon: ShieldCheck, label: 'Backflow Certification', href: '/backflow-certification' }, { icon: Shield, label: 'Backflow Prevention', href: '/backflow-prevention' }, { icon: CheckCircle2, label: 'Commercial Plumbing', href: '/commercial-plumbing' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: '#F8FAFC', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about backflow preventer repair in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner heading="Backflow preventer failed its test or showing problems?" subtext="Repair or replacement assessment. Report refiling included. Licensed." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST BACKFLOW REPAIR", href: "/contact" }} variant="gradient" />
    </>
  );
}
