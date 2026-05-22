import { CheckCircle2, HelpCircle, Shield, ShieldAlert, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "What is backflow prevention and who needs it?", answer: "Backflow prevention stops potentially contaminated water from flowing backward into the public water supply when pressure changes occur. Commercial properties (restaurants, medical facilities, multi-family buildings, irrigation systems, fire suppression systems) are typically required by code to have certified backflow prevention devices. Some residential properties with irrigation connections are also required. Requirements vary by jurisdiction and water supplier." },
  { question: "How does backflow prevention work?", answer: "A backflow prevention device — typically a pressure vacuum breaker, double check valve, or reduced pressure zone assembly — is installed at the connection point between a potential contamination source and the public supply. The device uses mechanical components (check valves, relief valves) that physically prevent water from flowing backward through the connection." },
  { question: "How often do backflow prevention devices need to be tested?", answer: "Most jurisdictions and water suppliers require annual testing and certification of backflow prevention devices for commercial properties. Some jurisdictions require more frequent testing for high-hazard applications. Definitive Mechanical provides annual backflow certification service and can manage compliance scheduling for your property." },
];

const REQUIRED_FOR = ["Commercial properties with irrigation systems", "Restaurants and food service", "Medical and healthcare facilities", "Dental offices", "Car washes", "Hotels and multi-family properties", "Industrial and manufacturing", "Properties with fire suppression systems", "Swimming pools and spas", "Properties with boilers using chemical additives", "Any property with secondary water sources"];

export default function BackflowPrevention() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section style={{
        minHeight: '50vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Full-bleed background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/manus-storage/service-backflow-prevention_a9ee0c58.webp"
            alt="Backflow prevention Maryland DC Northern Virginia"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.58) 100%)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Backflow Prevention' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p className="eyebrow mb-3">BACKFLOW PREVENTION  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Backflow Prevention Services in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical provides backflow prevention services across Maryland, Washington DC, and Northern Virginia — including device testing, certification, repair, replacement, and installation. We serve commercial, municipal, and residential properties. Annual certification programs available. Licensed. Report filing included. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Commercial & Residential", "Annual Certification Programs", "Licensed", "Report Filing Included"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton variant="outline" text="REQUEST BACKFLOW ASSESSMENT" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS BACKFLOW */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-2">UNDERSTANDING BACKFLOW</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '16px' }}>What is backflow and why does it matter?</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                Backflow is the unintended reversal of water flow in a plumbing system — water flowing backward from a potentially contaminated source into the clean drinking water supply. This can occur when there is a pressure drop in the public water supply (during a water main break or heavy firefighting demand) or when back-pressure from a secondary water source pushes water backward through a connection.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' }}>
                The risk: water from an irrigation system, fire suppression system, swimming pool, boiler, or commercial process can potentially flow backward into the main water supply — carrying fertilizers, pesticides, chemicals, or microbial contaminants with it.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7 }}>
                Backflow prevention devices — installed at the connection points between potentially contaminated water sources and the public supply — physically prevent this reversal from occurring.
              </p>
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

      {/* SECTION 3: WHO NEEDS IT */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>WHO NEEDS BACKFLOW PREVENTION?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>Who needs backflow prevention devices?</h2>
        </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#0A0A0A', fontSize: '15px', marginBottom: '16px' }}>Required by code in most cases for:</p>
              <div className="space-y-2">
                {REQUIRED_FOR.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '6px', padding: '24px', boxShadow: '0 2px 8px rgba(6,59,99,0.08)' }}>
                <HelpCircle size={32} color="var(--brand-cyan)" style={{ marginBottom: '12px' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#0A0A0A', fontSize: '16px', marginBottom: '12px' }}>What about residential properties?</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                  Some Maryland, DC, and Virginia jurisdictions require backflow prevention devices on residential properties with irrigation systems or other cross-connection risks. Requirements vary by jurisdiction and water supplier (including WSSC in Prince George's and Montgomery Counties). If you are not certain whether your property requires a backflow device, call (301) 679-5849 — we can assess your property's connection points and local code requirements.
                </p>
                <BookNowButton variant="ghost" text="ASK ABOUT YOUR PROPERTY" href="tel:+13016795849" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEVICE TYPES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-eyebrow)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>DEVICE TYPES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: '#0A0A0A', lineHeight: 1.05, marginBottom: '16px' }}>What types of backflow prevention devices are there?</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { Icon: Shield, title: "PRESSURE VACUUM BREAKER (PVB)", body: "Used for irrigation systems and similar applications. Prevents back-siphonage but not backpressure situations. Most commonly required for residential irrigation connections.", badge: "TYPICAL FOR: Residential Irrigation" },
              { Icon: ShieldAlert, title: "DOUBLE CHECK VALVE ASSEMBLY (DCVA)", body: "Used for medium-hazard applications including commercial irrigation, fire suppression systems, and multi-family properties. Prevents both back-siphonage and back-pressure.", badge: "TYPICAL FOR: Commercial Irrigation, Fire Suppression" },
              { Icon: ShieldCheck, title: "REDUCED PRESSURE ZONE ASSEMBLY (RPZ)", body: "Required for high-hazard applications including chemical injection systems, boilers with chemical additives, healthcare facilities, and industrial connections. Provides the highest level of backflow protection.", badge: "TYPICAL FOR: Healthcare, Industrial, Boilers" },
            ].map(({ Icon, title, body, badge }) => (
              <div key={title} style={{ background: 'white', borderTop: '4px solid var(--brand-cyan)', borderRadius: '6px', padding: '28px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', border: '1px solid #D4E4F0' }}>
                <Icon size={36} color="var(--brand-cyan)" style={{ marginBottom: '16px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>{title}</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>{body}</p>
                <span style={{ background: '#F0F5FA', color: '#0A0A0A', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 10px', borderRadius: '3px' }}>{badge}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.7, maxWidth: '560px', margin: '24px auto 0', textAlign: 'center' }}>
            The correct device type for your property depends on the hazard level of the cross-connection and the requirements of your jurisdiction and water supplier. We assess and recommend the appropriate device.
          </p>
        </div>
      </section>

      {/* SECTION 5: SERVICES */}
      <section style={{ background: 'var(--brand-navy)', padding: '80px 0' }}>
        <div className="container">
          <SectionHeading eyebrow="OUR SERVICES" heading="What backflow prevention services does Definitive Mechanical provide?" centered light />
          <div className="max-w-3xl mx-auto">
            {[
              { label: "Backflow Preventer Installation", body: "Installation of the correct device type for your property and cross-connection hazard level.", link: { label: "Learn more ->", href: "/backflow-prevention" } },
              { label: "Backflow Preventer Testing and Certification", body: "Annual testing and certification required for most commercial properties.", link: { label: "Backflow Certification ->", href: "/backflow-certification" } },
              { label: "Backflow Preventer Repair", body: "Repair of failed or failing backflow prevention devices.", link: { label: "Backflow Preventer Repair ->", href: "/backflow-preventer-repair" } },
              { label: "Backflow Preventer Replacement", body: "Replacement of devices that cannot be repaired or have reached end of life.", link: null },
            ].map((item) => (
              <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ChevronRight size={18} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'white', fontSize: '15px', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.5, marginBottom: item.link ? '6px' : 0 }}>{item.body}</p>
                  {item.link && <Link href={item.link.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--brand-cyan)', fontSize: '13px', textDecoration: 'none' }}>{item.link.label}</Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0A0A0A', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: ShieldCheck, label: 'Backflow Certification', href: '/backflow-certification' }, { icon: Shield, label: 'Backflow Preventer Repair', href: '/backflow-preventer-repair' }, { icon: ShieldAlert, label: 'Commercial Plumbing', href: '/commercial-plumbing' }, { icon: CheckCircle2, label: 'Government & Municipal', href: '/government-municipal-plumbing' }].map((item) => (
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about backflow prevention in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner heading="Not sure if your property needs backflow prevention — or when your last certification was?" subtext="Licensed. Commercial and residential. Annual certification programs available. Report filing included." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST BACKFLOW ASSESSMENT", href: "/contact" }} variant="gradient" />
    </>
  );
}
