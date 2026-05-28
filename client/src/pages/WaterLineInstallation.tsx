import { CheckCircle2, Building2, Activity, Wrench, AlertTriangle, ShieldCheck} from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "Do you install water lines for commercial and government properties?", answer: "Yes. Definitive Mechanical installs water service lines for commercial properties, government facilities, and institutional buildings. Our MDOT MBE and VA SWaM certifications make us a qualified contractor for government and publicly-funded projects. We have installed water service lines for commercial build-outs, government facility upgrades, and institutional properties across the DMV." },
  { question: "What pipe materials do you use for water line installation?", answer: "The most common material for new residential water service line installation in the DMV is copper or PEX (cross-linked polyethylene). PEX has become increasingly common for residential service lines due to its flexibility, freeze resistance, and lower material cost. For commercial and institutional applications, the appropriate material depends on the application, local code requirements, and the water supplier's specifications. We recommend and install the appropriate material for each project." },
  { question: "How long does water line installation take?", answer: "A standard residential service line replacement typically takes 1-2 days including excavation, installation, and restoration. New construction service connections depend on depth, distance from the main, and local utility coordination. Commercial projects are quoted with specific timelines after site assessment." },
];

const WHEN_NEEDED = [
  "New construction — a new water service connection from the municipal main to the building",
  "Full service line replacement — when the existing line is deteriorated beyond repair, is lead (required under federal Lead and Copper Rule provisions), or is galvanized steel restricting flow",
  "Additions and accessory structures — extending water service to a detached garage, ADU, or building addition",
  "Upgraded water service — upsizing when adding irrigation, additional fixtures, or fire suppression requiring more flow",
  "Commercial build-out — new water service for tenant improvements, restaurant conversions, or facility upgrades",
  "Lead service line replacement — proactive replacement under federal programs and local utility initiatives",
];

export default function WaterLineInstallation() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section style={{
        minHeight: '46vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/images/service-water-line-installation.webp"
            alt="Water line installation Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.58) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Water Line Repair', href: '/water-line-repair' }, { label: 'Water Line Installation' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">WATER LINE INSTALLATION  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Water Line Installation in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical installs and replaces water service lines for homes, businesses, and institutional properties across Maryland, Washington DC, and Northern Virginia. Every installation is permitted under our Master Plumber licenses and inspected to code. New construction, additions, and full service line replacement. Licensed, bonded, and insured. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber", "Permitted & Inspected", "New Construction & Replacement", "Commercial & Residential"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST INSTALLATION ESTIMATE" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHEN NEEDED */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHEN IS INSTALLATION NEEDED?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>When is water line installation or replacement necessary?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {WHEN_NEEDED.map((item, i) => (
              <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '12px', background: '#F8FAFC', borderRadius: '4px', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)' }}>
                <CheckCircle2 size={16} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMERCIAL */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div>
              <p className="eyebrow mb-2">COMMERCIAL & GOVERNMENT</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '16px' }}>Do you install water lines for commercial and government properties?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                Yes. Definitive Mechanical installs water service lines for commercial properties, government facilities, and institutional buildings. Our MDOT MBE and VA SWaM certifications make us a qualified contractor for government and publicly-funded projects.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                We have installed water service lines for commercial build-outs, government facility upgrades, and institutional properties across the DMV. For commercial water line installation, call (301) 679-5849 to discuss scope and timeline.
              </p>
              <div className="space-y-2 mb-6">
                {["MDOT MBE Certified", "VA SWaM Certified", "Government & institutional projects", "Commercial build-outs and tenant improvements"].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
              <BookNowButton variant="ghost" text="REQUEST COMMERCIAL ESTIMATE" href="/contact" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Water Line Repair', href: '/water-line-repair' }, { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' }, { icon: Activity, label: 'Sewer Line Installation', href: '/sewer-line-installation' }, { icon: Building2, label: 'Commercial Plumbing', href: '/commercial-plumbing' }].map((item) => (
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
          <p style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about water line installation in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner heading="New construction, lead line replacement, or service upgrade?" subtext="Licensed Master Plumber. Permitted and inspected. Written pricing before we start." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST INSTALLATION ESTIMATE", href: "/contact" }} variant="gradient" />
    </>
  );
}
