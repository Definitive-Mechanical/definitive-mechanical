import { GitBranch, Settings, ArrowUpCircle, Building2, MapPin, ShieldX, Wrench, Search, CreditCard, Flame } from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import TrustBadges from '@/components/ui/TrustBadges';

const FAQ_ITEMS = [
  { question: "Do I need a permit to install a gas line?", answer: "Yes, in virtually all Maryland, DC, and Virginia jurisdictions. Gas line installation must be permitted, performed by a licensed Master Gasfitter, and inspected before the gas supply is restored. Unpermitted gas work is a code violation that can affect insurance, create sale complications, and pose safety risks. Definitive Mechanical handles permits under our own licenses." },
  { question: "How long does gas line installation take?", answer: "A standard appliance hookup from an existing nearby gas line typically takes 2-4 hours. A new gas line run through walls or floors may take a full day. Longer runs, underground installations, or commercial projects are quoted with specific timelines after site assessment." },
  { question: "Can you install gas lines for outdoor kitchens and fire pits?", answer: "Yes. We install underground gas lines for outdoor kitchens, fire pits, gas grills, decorative fire features, pool heaters, and other outdoor gas applications. Underground gas line installation requires permits and specific burial depth and pipe material standards that vary by jurisdiction." },
];

const PRICING_ROWS = [
  { type: "Short gas appliance hookup (existing nearby line)", range: "$200-$500" },
  { type: "New gas line run (indoor, standard access, 15-25 ft)", range: "$400-$900" },
  { type: "New gas line run (longer or complex routing)", range: "$800-$2,000+" },
  { type: "Underground gas line installation", range: "$1,000-$3,000+ depending on length" },
  { type: "Gas line upsizing for tankless or high-output appliance", range: "$500-$1,500" },
  { type: "Commercial gas installation", range: "Custom quote based on scope" },
];

const APPLIANCE_LIST = ["Gas ranges and cooktops", "Gas dryers", "Gas water heaters (tank and tankless)", "Gas fireplaces and fire pits", "Gas generators", "Pool and spa heaters", "Outdoor grills and kitchen appliances", "HVAC systems", "Gas lights and decorative fixtures"];

export default function GasLineInstallation() {
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
            src="/manus-storage/service-gas-line-installation_15ea462f.webp"
            alt="Gas line installation Maryland DC Northern Virginia — Licensed Master Gasfitter"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            loading="eager"
          />
          {/* Dark navy overlay — matches homepage hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        </div>
        <div className="container py-16" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Gas Line Repair', href: '/gas-line-repair' }, { label: 'Gas Line Installation' }]} />
          <div className="grid lg:grid-cols-1 gap-12 items-center mt-6" style={{ maxWidth: '720px' }}>
            <div className="">
              <p className="eyebrow mb-3">GAS LINE INSTALLATION  LICENSED MASTER GASFITTER  MD, DC & NORTHERN VIRGINIA</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.15, marginBottom: '16px' }}>
                Gas Line Installation in Maryland, DC & Northern Virginia
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '24px' }}>
                Definitive Mechanical installs gas lines for homes and businesses across Maryland, Washington DC, and Northern Virginia. Every installation is performed by licensed plumbing professionals under Master Gasfitter license, permitted through the correct jurisdiction, and pressure-tested before the gas supply is restored. Residential and commercial applications. 25+ years of gas line experience. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Gasfitter", "Permitted & Pressure-Tested", "Residential & Commercial", "25+ Years Experience"]} />
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton bg="dark" type="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
                <BookNowButton bg="dark" type="secondary" text="REQUEST INSTALLATION ESTIMATE" href="/contact" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>INSTALLATION SERVICES</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What gas line installation services does Definitive Mechanical provide?</h2>
        </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { Icon: GitBranch, title: "New Gas Line Runs", body: "Installation of new gas supply lines from an existing main line to a new appliance location — kitchen, laundry room, garage, basement, outdoor kitchen, or addition." },
              { Icon: Settings, title: "Gas Appliance Hookups", body: "Connection of gas lines to new or replacement appliances:", list: APPLIANCE_LIST },
              { Icon: ArrowUpCircle, title: "Gas Line Upgrades and Upsizing", body: "When a new appliance — particularly a high-output tankless water heater, commercial range, or whole-home generator — requires more gas volume than the existing line supplies, we upsize the supply line to meet demand." },
              { Icon: Building2, title: "Commercial Gas Systems", body: "Gas line installation for restaurants, commercial kitchens, industrial facilities, government buildings, and multi-unit properties. Commercial systems involve larger pipe diameters, higher flow requirements, and code requirements specific to commercial occupancies." },
              { Icon: MapPin, title: "Underground Gas Line Installation", body: "Buried gas lines for outdoor appliances, detached structures, and outdoor kitchen or entertainment areas. Requires permits and specific burial depth standards that vary by jurisdiction." },
            ].map(({ Icon, title, body, list }: any) => (
              <div key={title} style={{ background: 'white', borderLeft: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderLeftWidth: '4px', borderLeftColor: 'var(--brand-cyan)' }}>
                <Icon size={28} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '6px' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6 }}>{body}</p>
                  {list && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                      {list.map((item: string) => (
                        <span key={item} style={{ background: '#F0F5FA', color: 'var(--ink-2)', fontFamily: 'var(--font-body)', fontSize: '12px', padding: '3px 8px', borderRadius: '3px' }}>{item}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PERMITS */}
      <section style={{ background: '#F0F5FA', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>PERMITS ARE REQUIRED</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>Does gas line installation require a permit?</h2>
        </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto 32px', textAlign: 'center' }}>
            Yes. Gas line installation requires a permit in virtually every jurisdiction in Maryland, Washington DC, and Virginia. Work must be performed by a licensed Master Gasfitter and inspected by the jurisdiction's plumbing or mechanical inspector before the gas supply is restored. Definitive Mechanical pulls permits under our own Master Gasfitter licenses in each jurisdiction. We handle the permit application, the inspection scheduling, and the pressure testing required for inspection sign-off.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
            {["Unpermitted gas work is a code violation that can affect homeowner's insurance", "Unpermitted work voids appliance warranties", "Creates complications at the time of home sale", "Leaves a gas system that has never been inspected for safety"].map((item) => (
              <div key={item} style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <ShieldX size={18} color="#C0392B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '16px', textAlign: 'center' }}>We do not install unpermitted gas lines.</p>
        </div>
      </section>

      {/* SECTION 4: PRICING */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-cyan)', marginBottom: '8px' }}>PRICING GUIDE</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.05, marginBottom: '16px' }}>What does gas line installation cost in Maryland, DC, or Virginia?</h2>
        </div>
          <div style={{ background: 'white', borderRadius: '6px', boxShadow: '0 4px 16px rgba(6,59,99,0.10)', maxWidth: '720px', margin: '0 auto 16px', overflow: 'hidden', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)' }}>
            <div style={{ background: 'var(--brand-blue)', padding: '12px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>INSTALLATION TYPE</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TYPICAL RANGE</span>
            </div>
            {PRICING_ROWS.map((row, i) => (
              <div key={row.type} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 20px', background: i % 2 === 0 ? 'white' : '#F8FAFC', borderTop: '1px solid #E8EFF5' }}>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{row.type}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--brand-navy)', fontSize: '14px' }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-3)', fontSize: '13px', fontStyle: 'italic', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto 20px', textAlign: 'center' }}>
            These ranges include labor, materials, and standard permit fees. We provide written pricing after assessment — including what the permit will cost and what the inspection process requires for your specific jurisdiction.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BookNowButton bg="blue" type="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="md" />
            <BookNowButton bg="blue" type="secondary" text="REQUEST INSTALLATION ESTIMATE" href="/contact" size="md" />
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: '#F0F5FA', padding: '48px 0' }}>
        <div className="container">
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>RELATED SERVICES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: Wrench, label: 'Gas Line Repair', href: '/gas-line-repair' }, { icon: Search, label: 'Gas Leak Repair', href: '/gas-leak-repair' }, { icon: Flame, label: 'Tankless Water Heaters', href: '/tankless-water-heaters' }, { icon: CreditCard, label: 'Licenses & Certifications', href: '/licenses-certifications' }].map((item) => (
              <Link key={item.label} href={item.href} style={{ background: 'white', border: '1px solid #D4E4F0', borderTop: '3px solid var(--brand-cyan)', borderRadius: '4px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', textTransform: 'uppercase', color: 'white', lineHeight: 1.05, marginBottom: '16px' }}>Questions about gas line installation in MD, DC & Northern VA</h2>
        </div>
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" />
        </div>
      </section>

      <CTABanner heading="Adding a gas appliance or need a new gas line run?" subtext="Licensed Master Gasfitter. Permitted and inspected. Written pricing before we start." primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST GAS INSTALLATION ESTIMATE", href: "/contact" }} variant="gradient" />
    </>
  );
}
