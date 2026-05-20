import { CheckCircle2, Building2, Activity, Wrench, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "Do you install water lines for commercial and government properties?", answer: "Yes. Definitive Mechanical installs water service lines for commercial properties, government facilities, and institutional buildings. Our MDOT MBE and VA SWaM certifications make us a qualified contractor for government and publicly-funded projects. We have installed water service lines for commercial build-outs, government facility upgrades, and institutional properties across the DMV." },
  { question: "What pipe materials do you use for water line installation?", answer: "The most common material for new residential water service line installation in the DMV is copper or PEX (cross-linked polyethylene). PEX has become increasingly common for residential service lines due to its flexibility, freeze resistance, and lower material cost. For commercial and institutional applications, the appropriate material depends on the application, local code requirements, and the water supplier's specifications. We recommend and install the appropriate material for each project." },
  { question: "How long does water line installation take?", answer: "A standard residential service line replacement typically takes 1–2 days including excavation, installation, and restoration. New construction service connections depend on depth, distance from the main, and local utility coordination. Commercial projects are quoted with specific timelines after site assessment." },
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
      <section style={{ minHeight: '46vh', background: 'linear-gradient(135deg, var(--brand-navy) 0%, #186090 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,158,198,0.07)', transform: 'skewY(-4deg)', transformOrigin: 'top left', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Water Line Repair', href: '/water-line-repair' }, { label: 'Water Line Installation' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">WATER LINE INSTALLATION · MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Water Line Installation in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical installs and replaces water service lines for homes, businesses, and institutional properties across Maryland, Washington DC, and Northern Virginia. Every installation is permitted under our Master Plumber licenses and inspected to code. New construction, additions, and full service line replacement. Licensed, bonded, and insured. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber", "Permitted & Inspected", "New Construction & Replacement", "Commercial & Residential"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST INSTALLATION ESTIMATE" href="/contact" size="md" />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" alt="Water line installation Maryland DC Northern Virginia — licensed Master Plumber" loading="eager" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHEN NEEDED */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHEN IS INSTALLATION NEEDED?" heading="When is water line installation or replacement necessary?" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {WHEN_NEEDED.map((item, i) => (
              <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '12px', background: '#F8FAFC', borderRadius: '4px', border: '1px solid #E8EFF5' }}>
                <CheckCircle2 size={16} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMERCIAL */}
      <section style={{ background: 'var(--surface-1)', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" alt="Commercial water line installation Maryland DC Virginia — Definitive Mechanical" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 4px 20px rgba(6,59,99,0.12)' }} />
            </div>
            <div>
              <p className="eyebrow mb-2">COMMERCIAL & GOVERNMENT</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '16px' }}>Do you install water lines for commercial and government properties?</h2>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Water Line Repair', href: '/water-line-repair' }, { icon: AlertTriangle, label: 'Emergency Plumbing', href: '/emergency-plumbing' }, { icon: Activity, label: 'Sewer Line Installation', href: '/sewer-line-installation' }, { icon: Building2, label: 'Commercial Plumbing', href: '/commercial-plumbing' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: '#F8FAFC', border: '1px solid #E8EFF5', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <item.icon size={20} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '13px' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" heading="Questions about water line installation in MD, DC & Northern VA" centered />
          <div style={{ background: 'white', borderRadius: '6px', padding: '8px 32px' }}>
            <FAQAccordion items={FAQ_ITEMS} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner heading="New construction, lead line replacement, or service upgrade?" subtext="Licensed Master Plumber. Permitted and inspected. Written pricing before we start." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST INSTALLATION ESTIMATE", href: "/contact" }} variant="gradient" />
    </>
  );
}
