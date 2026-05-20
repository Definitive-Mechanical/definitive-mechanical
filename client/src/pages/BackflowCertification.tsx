import { CheckCircle2, ChevronRight, ShieldCheck, Shield } from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';
import ProcessStep from '@/components/ui/ProcessStep';

const FAQ_ITEMS = [
  { question: "How often must backflow preventers be tested?", answer: "Most jurisdictions and water suppliers — including WSSC, DC Water, and Virginia water authorities — require annual testing and certification of backflow prevention devices for commercial and institutional properties. Some high-hazard applications may require more frequent testing. Contact (301) 679-5849 to confirm the requirements for your specific jurisdiction and water supplier." },
  { question: "What happens if I miss my backflow certification deadline?", answer: "Missing a backflow certification deadline can result in violation notices from your water supplier, fines, and in some cases service interruption until a current certification is on file. If your certification is overdue, call (301) 679-5849 immediately — we can typically schedule testing and filing quickly to bring your property into compliance." },
  { question: "Do you certify commercial properties?", answer: "Yes. Commercial backflow certification is one of our core service offerings. We test and certify backflow prevention devices for restaurants, office buildings, multi-family properties, healthcare facilities, government buildings, and other commercial properties across Maryland, DC, and Northern Virginia." },
  { question: "Do you file the certification reports with the water supplier?", answer: "Yes. Report filing with the relevant water supplier or jurisdiction is included in our certification service. You receive documentation and we ensure the required reports are submitted." },
];

const CERT_STEPS = [
  { icon: "Gauge", title: "Device isolation.", description: "The tester isolates the device from the water supply to begin testing under field conditions." },
  { icon: "Gauge", title: "Component testing.", description: "Each component of the device — check valves, relief valve, and shut-off valves — is tested using calibrated gauge equipment." },
  { icon: "FileText", title: "Results documented.", description: "Pass or fail for each component is documented in the official certification report." },
  { icon: "Wrench", title: "On-site repair if minor failure.", description: "Many failures can be repaired on the spot during the same service visit. See Backflow Preventer Repair for details." },
  { icon: "Send", title: "Report filing.", description: "The certification report is filed with the water supplier or jurisdiction as required. You receive documentation." },
];

const PROPERTIES_REQUIRING = ["Commercial buildings with irrigation systems", "Restaurants and food service facilities", "Multi-family residential buildings", "Healthcare and dental facilities", "Hotels and hospitality properties", "Industrial and manufacturing facilities", "Properties with fire suppression systems", "Government and institutional facilities", "Car washes and auto service facilities", "Properties with swimming pools or spas", "Any property that received a WSSC or water supplier notification"];

const MANAGED_USERS = ["Property management companies with multiple commercial buildings", "HOAs managing backflow devices for common area irrigation", "Government agencies with multiple facility backflow requirements", "Commercial real estate portfolios across MD, DC, and Northern Virginia"];

export default function BackflowCertification() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section style={{ minHeight: '50vh', background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,158,198,0.07)', transform: 'skewY(-4deg)', transformOrigin: 'top left', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Backflow Prevention', href: '/backflow-prevention' }, { label: 'Backflow Certification' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">BACKFLOW CERTIFICATION  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Backflow Preventer Certification Service in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical provides backflow preventer testing and annual certification for commercial, municipal, and residential properties across Maryland, Washington DC, and Northern Virginia. Most commercial properties with backflow prevention devices are required to have them tested and certified annually by a licensed tester. We test, certify, and file the required reports. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Annual Certification Programs", "Commercial & Residential", "Licensed", "Report Filing Included", "WSSC & Jurisdiction Compliant"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="SCHEDULE BACKFLOW CERTIFICATION" href="/contact" size="md" />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <img src="/manus-storage/service-backflow-prevention_3ef7968a.jpg" alt="Annual backflow preventer certification Maryland DC Northern Virginia" loading="eager" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO REQUIRES IT */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="CERTIFICATION REQUIREMENTS" heading="What is backflow certification and who requires it?" centered />
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 32px', textAlign: 'center' }}>
            Backflow preventer certification is the annual testing and documentation of a backflow prevention device to confirm it is functioning correctly and preventing contaminated water from flowing backward into the public supply. Most water suppliers — including WSSC in Prince George's and Montgomery Counties, DC Water, and Virginia's local water authorities — require annual testing and certification of backflow prevention devices on commercial accounts.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', maxWidth: '720px', margin: '0 auto 20px', textAlign: 'center' }}>Properties that typically require annual backflow certification:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-3xl mx-auto">
            {PROPERTIES_REQUIRING.map((item) => (
              <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '8px 0' }}>
                <CheckCircle2 size={16} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TEST PROCESS */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="THE CERTIFICATION PROCESS" heading="What happens during a backflow preventer test?" centered />
          <div className="max-w-3xl mx-auto">
            {CERT_STEPS.map((step, i) => (
              <ProcessStep key={step.title + i} number={i + 1} icon={step.icon} title={step.title} description={step.description} isLast={i === CERT_STEPS.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FAILED TEST */}
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(20px, 2.5vw, 26px)', marginBottom: '16px' }}>What happens if my backflow preventer fails its certification test?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                A failed test means one or more components of the device are not functioning within required parameters. This does not always mean the device needs to be replaced — many failures are repairable on site during the same service visit. If the device cannot be repaired on site, we document the failure, coordinate the necessary repair or replacement, and schedule a follow-up certification test.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Water suppliers typically allow a defined period to bring a failed device into compliance before imposing service interruptions or fines. Do not ignore a failed test result. Call (301) 679-5849 to discuss repair or replacement options.
              </p>
              <BookNowButton variant="ghost" text="LEARN ABOUT BACKFLOW REPAIR" href="/backflow-preventer-repair" size="md" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" alt="Backflow preventer failed test repair Maryland DC Virginia" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 4px 20px rgba(6,59,99,0.12)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MANAGED PROGRAMS */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="MANAGED PROGRAMS" heading="Can Definitive Mechanical manage my property's annual backflow certification program?" centered light />
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 32px', textAlign: 'center' }}>
            Yes. For property managers, facility directors, and commercial property owners who manage multiple properties or simply want the annual certification handled without tracking it themselves, we offer managed backflow certification programs. We track certification due dates, schedule annual testing, perform testing, file reports, and notify you of results.
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            {MANAGED_USERS.map((item) => (
              <div key={item} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ChevronRight size={16} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '14px' }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', fontSize: '14px', textAlign: 'center', marginBottom: '20px' }}>
            Contact (301) 679-5849 or info@definitivemechanical.com to discuss a managed certification program for your properties.
          </p>
          <div style={{ textAlign: 'center' }}>
            <BookNowButton variant="phone" text="DISCUSS MANAGED PROGRAM" href="tel:+13016795849" size="md" />
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Shield, label: 'Backflow Prevention', href: '/backflow-prevention' }, { icon: ShieldCheck, label: 'Backflow Preventer Repair', href: '/backflow-preventer-repair' }, { icon: CheckCircle2, label: 'Commercial Plumbing', href: '/commercial-plumbing' }, { icon: CheckCircle2, label: 'Government & Municipal', href: '/government-municipal-plumbing' }].map((item) => (
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
          <SectionHeading eyebrow="FAQ" heading="Questions about backflow certification in MD, DC & Northern VA" centered />
          <div style={{ background: 'white', borderRadius: '6px', padding: '8px 32px' }}>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" />
          </div>
        </div>
      </section>

      <CTABanner heading="When is your backflow preventer due for certification?" subtext="Annual certification, report filing, managed programs available. Commercial and residential." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "SCHEDULE BACKFLOW CERTIFICATION", href: "/contact" }} variant="gradient" />
    </>
  );
}
