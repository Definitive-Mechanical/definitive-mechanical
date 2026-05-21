import { Users, Award, ShieldCheck, Clock, CheckCircle2, Star } from 'lucide-react';
import { BUSINESS, TESTIMONIALS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABanner from '@/components/ui/CTABanner';

export default function About() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,158,198,0.05)', transform: 'skewY(-4deg)', transformOrigin: 'top left', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
          <div className="grid lg:grid-cols-5 gap-12 items-center mt-6">
            <div className="lg:col-span-3">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                ABOUT DEFINITIVE MECHANICAL
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, marginBottom: '16px' }}>
                About Definitive Mechanical — Licensed Plumbing in MD, DC & Northern VA
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '32px' }}>
                Definitive Mechanical is a licensed, MDOT MBE and Virginia SWaM certified plumbing and mechanical contractor based in Largo, Maryland. We have served homes, businesses, and government facilities across Maryland, Washington DC, and Northern Virginia for over 11 years. Master Plumber and Master Gasfitter licensed in four states.
              </p>
              <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <img
                src="/manus-storage/about-plumber-working_f93d7b0a.jpg"
                alt="Definitive Mechanical licensed plumber at work — Maryland DC Northern Virginia"
                style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', objectFit: 'cover', aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="OUR STORY" heading="What is Definitive Mechanical?" />
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
                Definitive Mechanical was founded with a straightforward premise: provide licensed, honest plumbing service without the sales pressure, inflated pricing, and upselling that has become the norm in the DMV plumbing market.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
                We are based in Largo, Maryland and have operated in the DMV for over 11 years. Our team holds Master Plumber and Master Gasfitter licenses in Maryland, Washington DC, Virginia, and Delaware — a credential combination that no other local plumbing company in this market holds simultaneously.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
                We serve residential homeowners, commercial facility managers, property management companies, HOAs, and government agencies. Every job — from a clogged drain to a government facility sewer replacement — is performed by our licensed team under Master Plumber license, with written pricing provided before work begins.
              </p>
              <div className="space-y-3">
                {[
                  'Licensed Master Plumber and Master Gasfitter in MD, DC, VA & DE',
                  'MDOT MBE Certified (Cert No. 20-134)',
                  'Virginia SWaM Certified (Cert No. 815255)',
                  '11 years serving the DMV',
                  '24/7 emergency service',
                  'Upfront written pricing on every job',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={18} color="var(--brand-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/about-team-photo-jGApqx8mJzea56RGGdm7Vi.webp"
                alt="Definitive Mechanical plumbing service Maryland"
                style={{ width: '100%', borderRadius: '6px', boxShadow: '0 4px 20px rgba(6,59,99,0.12)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--brand-cyan)', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { number: '11', label: 'Years in Business', icon: Clock },
              { number: '4.8', label: 'Google Rating', icon: Star },
              { number: '4', label: 'States Licensed', icon: ShieldCheck },
              { number: '25+', label: 'Years Trade Experience', icon: Award },
            ].map((stat, index) => (
              <div key={stat.label} style={{ textAlign: 'center', padding: '16px', borderRight: index < 3 ? '1px solid rgba(6,59,99,0.2)' : 'none' }}>
                <stat.icon size={24} color="var(--brand-navy)" style={{ margin: '0 auto 8px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '32px', color: 'var(--brand-navy)', lineHeight: 1 }}>{stat.number}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-navy)', marginTop: '4px' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR APPROACH"
            heading="How Definitive Mechanical is different from other DMV plumbing companies"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'No Commissioned Salespeople',
                body: 'Our technicians are not paid on commission. They are paid to solve your problem correctly — not to find additional work. When we identify an issue, we explain it clearly and give you options. You decide.',
              },
              {
                icon: CheckCircle2,
                title: 'Written Pricing Before We Start',
                body: 'The most common complaint about plumbing companies in the DMV is pricing shock. We address this by providing written pricing before any work begins. If the scope changes, we discuss it first.',
              },
              {
                icon: Users,
                title: 'Accountable, Named Technicians',
                body: 'When a Definitive Mechanical technician arrives at your property, you get their name. You can call our office and ask about them. We stand behind every technician we send.',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: 'white', borderRadius: '6px', padding: '32px', boxShadow: '0 2px 12px rgba(6,59,99,0.08)', textAlign: 'center' }}>
                <item.icon size={40} color="var(--brand-cyan)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '17px', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CUSTOMER REVIEWS"
            heading="What customers say about Definitive Mechanical"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* LICENSES & CERTIFICATIONS */}
      <section id="licenses" style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="LICENSES & CERTIFICATIONS"
            heading="Credentials that matter"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Maryland State Master Plumber/Gasfitter', cert: '#96958' },
              { title: 'WSSC Master Plumber/Gasfitter', cert: '#73696' },
              { title: 'DC Master Plumber/Gasfitter', cert: '#PGM1002236' },
              { title: 'Virginia Master Plumber/Gasfitter', cert: '#2710064209' },
              { title: 'Virginia Class A Contractor', cert: '#2705181061' },
              { title: 'Delaware Master Plumber/Gasfitter', cert: '#PL-0012866' },
              { title: 'MDOT MBE Certification', cert: 'Cert No. 20-134' },
              { title: 'Virginia SWaM Certification', cert: 'Cert No. 815255' },
              { title: 'EPA Universal Certification 608', cert: 'YbKLqI5cGf' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'var(--surface-1)', borderRadius: '6px', padding: '24px', border: '1px solid rgba(6,59,99,0.1)' }}>
                <Award size={32} color="var(--brand-cyan)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '15px', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '13px', fontWeight: 600 }}>{item.cert}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '48px', padding: '32px', background: 'var(--brand-navy)', borderRadius: '6px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
              Every Definitive Mechanical job is performed under Master Plumber license and supervision. Our credentials are verified and current with all relevant state and local jurisdictions.
            </p>
            <a href="/licenses-certifications" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-cyan)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
              View Full Credentials →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section style={{ background: 'var(--brand-navy)', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '12px' }}>
                CONTACT INFORMATION
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '24px' }}>
                Reach Definitive Mechanical
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Phone', value: BUSINESS.phone, href: `tel:${BUSINESS.phoneRaw}` },
                  { label: 'Email', value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
                  { label: 'Address', value: BUSINESS.address.full },
                  { label: 'Hours', value: BUSINESS.hours.display },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--brand-cyan)', marginBottom: '4px' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '15px', textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}>{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
              <BookNowButton variant="outline" text="REQUEST SERVICE ONLINE" href="/contact" size="lg" />
              <BookNowButton variant="ghost" text="APPLY FOR FINANCING" href={BUSINESS.financing} size="lg" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to work with a licensed plumber who does it right?"
        subtext="11 years in the DMV. Master Plumber licensed in four states. Written pricing before we start. 24/7 emergency service."
        primaryBtn={{ text: `CALL ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST SERVICE ONLINE', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
