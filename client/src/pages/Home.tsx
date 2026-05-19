import { Phone, Award, Star, Clock, ShieldCheck, FileText, Users, CheckCircle, AlertTriangle, MapPin, Building2, MapPinned, KeyRound, Briefcase, Leaf, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS, TESTIMONIALS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import TrustBadges from '@/components/ui/TrustBadges';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeading from '@/components/ui/SectionHeading';
import StarRating from '@/components/ui/StarRating';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';

const HOME_SERVICES = [
  { title: '24/7 Emergency Plumbing', icon: 'AlertTriangle', href: '/emergency-plumbing', description: 'Burst pipes, sewer backups, gas leaks — live dispatcher 24/7, 365 days a year. Licensed Master Plumber on every emergency call.', featured: true },
  { title: 'Drain Cleaning', icon: 'Droplets', href: '/drain-cleaning', description: 'Professional drain clearing, hydro-jetting, and sewer stoppage service. We identify the root cause — not just the symptom.' },
  { title: 'Water Heater Repair', icon: 'Thermometer', href: '/water-heater-repair', description: 'Gas, electric, and tankless water heater repair and replacement. Same-day service available. Financing for replacements.' },
  { title: 'Sewer Line Repair', icon: 'GitBranch', href: '/sewer-line-repair', description: 'Camera inspection, sewer line repair and replacement, emergency sewer service across MD, DC, and Northern Virginia.' },
  { title: 'Gas Line Service', icon: 'Flame', href: '/gas-line-repair', description: 'Licensed Master Gasfitter in MD, DC, VA & DE. Gas line repair, installation, and 24/7 emergency gas leak response.' },
  { title: 'Backflow Certification', icon: 'ShieldCheck', href: '/backflow-certification', description: 'Annual backflow preventer testing, certification, repair, and replacement for commercial, municipal, and residential properties.' },
  { title: 'Commercial Plumbing', icon: 'Building2', href: '/commercial-plumbing', description: 'Facility maintenance, code-compliant service, and emergency response for businesses, property managers, and institutions.' },
  { title: 'Government & Municipal', icon: 'Landmark', href: '/government-municipal-plumbing', description: 'MDOT MBE and VA SWaM certified. Capability statement available. CAGE 8HCF6. NAICS 238220.' },
  { title: 'View All Services', icon: 'ArrowRight', href: '/plumbing', description: 'Water heater installation, tankless systems, water line repair, boiler service, faucet & toilet repair, and more.' },
];

const CREDENTIALS = [
  { icon: ShieldCheck, label: 'MDOT MBE CERTIFIED', sub: 'Cert No. 20-134' },
  { icon: Award, label: 'VA SWAM CERTIFIED', sub: 'Cert No. 815255' },
  { icon: KeyRound, label: 'CAGE CODE', sub: '8HCF6' },
  { icon: Briefcase, label: 'NAICS CODE', sub: '238220' },
  { icon: MapPin, label: 'MD MASTER PLUMBER', sub: 'License #96958' },
  { icon: MapPin, label: 'DC MASTER PLUMBER', sub: 'License #PGM1002236' },
  { icon: MapPin, label: 'VA MASTER PLUMBER', sub: 'License #2710064209' },
  { icon: Leaf, label: 'EPA CERTIFIED', sub: 'Cert #YbKLqI5cGf' },
];

const HOME_FAQ = [
  {
    question: 'How much does a plumber charge per hour in Maryland?',
    answer: 'Plumbing rates in Maryland vary based on the service type, urgency, and materials required. Standard service calls typically range from $150–$300 for diagnosis and simple repairs. Emergency and after-hours service may carry a premium with other providers — Definitive Mechanical charges the same rate regardless of time of day. Call (301) 679-5849 for an upfront estimate before any work begins.',
  },
  {
    question: 'What qualifies as a plumbing emergency?',
    answer: 'A plumbing emergency is any situation that poses an immediate risk to your property, safety, or water supply. This includes burst or frozen pipes, active flooding, sewer backups, gas leaks, no water pressure, and water heater failures that leave a property without hot water. Call (301) 679-5849 immediately — we dispatch 24/7, 365 days a year.',
  },
  {
    question: 'Are you licensed in both Maryland and Virginia?',
    answer: 'Yes. Definitive Mechanical holds Master Plumber and Master Gasfitter licenses in Maryland (State #96958, WSSC #73696, Howard County, Anne Arundel County, City of Rockville), Washington DC (#PGM1002236), Virginia (#2710064209), and Delaware (#PL-0012866). We are also a licensed Class A Contractor in Virginia (#2705181061).',
  },
  {
    question: 'Do you offer financing for plumbing work?',
    answer: 'Yes. We offer consumer financing through Synchrony for eligible services. Apply online in 60 seconds at mysynchrony.com/mmc/S6240351600. Monthly payment options are available for water heater replacement, sewer line work, tankless upgrades, and other larger projects.',
  },
  {
    question: 'Do you work with commercial clients and government agencies?',
    answer: 'Yes. Definitive Mechanical is MDOT MBE Certified (Cert No. 20-134), Virginia SWaM Certified (Cert No. 815255), and holds CAGE Code 8HCF6 and NAICS Code 238220. We serve commercial facilities, property managers, HOAs, and government agencies alongside our residential clients.',
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Definitive Mechanical",
            "url": "https://definitivemechanical.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://definitivemechanical.com/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* SECTION 1: HERO */}
      <section style={{
        minHeight: '75vh',
        background: 'linear-gradient(135deg, #003060 0%, #001830 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Diagonal overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,158,198,0.06)',
          transform: 'skewY(-5deg)',
          transformOrigin: 'top right',
          pointerEvents: 'none',
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left content — 3/5 */}
            <div className="lg:col-span-3">
              <p style={{
                fontFamily: 'Barlow Condensed, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: '#009EC6',
                marginBottom: '16px',
              }}>
                LICENSED PLUMBING · MARYLAND · WASHINGTON DC · NORTHERN VIRGINIA
              </p>

              <h1 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                color: 'white',
                fontSize: 'clamp(28px, 4vw, 52px)',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}>
                Licensed Master Plumbers. Honest Service. No Sales Pitch.
              </h1>

              <p style={{
                fontFamily: 'Barlow, Arial, sans-serif',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
                fontSize: '17px',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '24px',
              }}>
                Definitive Mechanical is a licensed, MDOT MBE and Virginia SWaM certified plumbing and mechanical contractor serving homes, businesses, and government facilities across Maryland, Washington DC, and Northern Virginia. Master Plumber and Master Gasfitter licensed in four states. 24/7 emergency service. Upfront pricing in writing — always.
              </p>

              <TrustBadges variant="dark" badges={['11 Years in Business', '24/7 Emergency', 'Licensed Master Plumber/Gasfitter', 'MDOT MBE Certified', 'VA SWaM Certified']} />

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
                <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
                <BookNowButton variant="outline" text="REQUEST SERVICE" href="/contact" size="lg" />
              </div>

              <div style={{ marginTop: '24px' }}>
                <StarRating rating={4.8} count={40} variant="dark" />
              </div>
            </div>

            {/* Right image — 2/5 */}
            <div className="hidden lg:block lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80"
                alt="Licensed Master Plumber Largo MD — Definitive Mechanical"
                style={{
                  width: '100%',
                  borderRadius: '6px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  objectFit: 'cover',
                  aspectRatio: '4/3',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STATS BAR */}
      <section style={{ background: '#009EC6', padding: '32px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { number: '11', label: 'Years in Business', icon: Award },
              { number: '4.8★', label: 'Google Rating', icon: Star },
              { number: '24/7', label: 'Emergency Service', icon: Clock },
              { number: '4 States', label: 'Master Licensed', icon: ShieldCheck },
            ].map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '16px',
                  borderRight: index < 3 ? '1px solid rgba(0,48,96,0.2)' : 'none',
                }}
              >
                <stat.icon size={24} color="#003060" style={{ margin: '0 auto 8px' }} />
                <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: '32px', color: '#003060', lineHeight: 1 }}>
                  {stat.number}
                </p>
                <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#003060', marginTop: '4px' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR SERVICES"
            heading="What plumbing services does Definitive Mechanical provide?"
            subtext="From 24/7 emergency response to water heater repair, drain cleaning, gas lines, backflow certification, and government facility plumbing — we handle the full range of licensed mechanical services across Maryland, DC, and Northern Virginia."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_SERVICES.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
                iconName={service.icon}
                featured={service.featured}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <BookNowButton variant="ghost" text="VIEW ALL PLUMBING SERVICES" href="/plumbing" size="md" />
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section style={{ background: '#F0F0F0', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WHY CHOOSE DEFINITIVE MECHANICAL"
            heading="Why do Maryland, DC, and Northern Virginia property owners choose us?"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                icon: ShieldCheck,
                title: 'Licensed Master Plumber on Every Job',
                body: 'Every job is handled by a licensed Master Plumber and Master Gasfitter — licensed in Maryland, Washington DC, Virginia, and Delaware simultaneously. A credential stack no local competitor holds. When our technician arrives, their job is to fix your problem. Not to find add-ons.',
              },
              {
                icon: FileText,
                title: 'Upfront Pricing in Writing. No Surprise Fees.',
                body: 'The most common complaint about plumbing companies in the DMV is pricing shock. That is not how we work. You receive written pricing before we begin. If the scope changes, we discuss it first. Every time.',
              },
              {
                icon: Users,
                title: 'Accountable Service From a Team That Cares',
                body: 'Definitive Mechanical has operated out of Largo, MD for 11 years. Our reputation was built one job at a time. When you call us, you reach a real dispatcher. When a technician arrives, you get their name.',
              },
            ].map((col) => (
              <div key={col.title} style={{ textAlign: 'center', padding: '16px' }}>
                <col.icon size={48} color="#009EC6" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '18px', marginBottom: '12px' }}>
                  {col.title}
                </h3>
                <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 400, color: '#484848', fontSize: '15px', lineHeight: 1.7 }}>
                  {col.body}
                </p>
              </div>
            ))}
          </div>

          {/* Anti-upsell strip */}
          <div style={{
            background: 'white',
            borderRadius: '6px',
            padding: '24px 32px',
            border: '1px solid #E8EFF5',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '16px', marginBottom: '12px' }}>
              "We explain what we find, what your options are, and what each one costs — before we touch a wrench."
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {['No commissioned salespeople', 'Same rate day or night', 'Written pricing every time'].map((item) => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Barlow, Arial, sans-serif', fontSize: '14px', color: '#484848' }}>
                  <CheckCircle size={16} color="#009EC6" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EMERGENCY CTA */}
      <section style={{ background: 'linear-gradient(135deg, #003060, #001830)', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle size={40} color="#009EC6" style={{ margin: '0 auto 16px' }} />
          <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#009EC6', marginBottom: '12px' }}>
            24/7 EMERGENCY SERVICE
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, color: 'white', fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: '16px' }}>
            Plumbing emergency? We answer at 3am.
          </h2>
          <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: 'rgba(255,255,255,0.8)', fontSize: '16px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Burst pipe, sewer backup, gas leak, no hot water — our live dispatcher answers every call, every hour of every day. Licensed Master Plumber dispatched immediately.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
            <BookNowButton variant="outline" text="LEARN MORE" href="/emergency-plumbing" size="lg" />
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section style={{ background: '#C0D8F0', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CUSTOMER REVIEWS"
            heading="What do customers say about Definitive Mechanical?"
            centered
          />
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <StarRating rating={4.8} count={40} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <BookNowButton variant="ghost" text="READ ALL REVIEWS" href="/reviews" size="md" />
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICE AREA */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR SERVICE AREA"
            heading="Where does Definitive Mechanical provide plumbing service?"
            subtext="We serve the entire Maryland, Washington DC, and Northern Virginia corridor from our base in Largo, MD. Service is available 24/7 for emergencies across the full service area."
            centered
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80"
                alt="Definitive Mechanical service area Maryland DC Northern Virginia"
                style={{ width: '100%', borderRadius: '6px', boxShadow: '0 4px 20px rgba(0,48,96,0.1)' }}
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  heading: 'Maryland',
                  body: "Prince George's County · Montgomery County · Howard County · Anne Arundel County · Charles County",
                  cities: 'Largo, Bowie, Rockville, Bethesda, Potomac, Waldorf, Ellicott City',
                  href: '/service-areas/maryland',
                },
                {
                  icon: Building2,
                  heading: 'Washington DC',
                  body: 'All DC Wards & Neighborhoods',
                  cities: 'Georgetown, Capitol Hill, Dupont Circle, Navy Yard, NoMa',
                  href: '/service-areas/washington-dc',
                },
                {
                  icon: MapPinned,
                  heading: 'Northern Virginia',
                  body: 'Fairfax, Arlington, Loudoun & Prince William Counties',
                  cities: 'Alexandria, Arlington, McLean, Springfield, Vienna, Great Falls',
                  href: '/service-areas/northern-virginia',
                },
              ].map((area) => (
                <div key={area.heading} style={{ display: 'flex', gap: '16px' }}>
                  <area.icon size={24} color="#009EC6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '16px', marginBottom: '4px' }}>
                      {area.heading}
                    </h3>
                    <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '14px', color: '#484848', marginBottom: '4px' }}>{area.body}</p>
                    <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '13px', color: '#787878', marginBottom: '8px' }}>{area.cities}</p>
                    <Link href={area.href} style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#009EC6', textDecoration: 'none' }}>
                      View {area.heading} Service Area →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CREDENTIALS */}
      <section style={{ background: '#003060', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CREDENTIALS & COMPLIANCE"
            heading="Are you licensed, certified, and insured?"
            subtext="Definitive Mechanical holds Master Plumber and Master Gasfitter licenses in Maryland, Washington DC, Virginia, and Delaware. No other local plumbing company in the DMV market holds this credential combination."
            centered
            light
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CREDENTIALS.map((cred) => (
              <div key={cred.label} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '4px',
                padding: '20px',
                textAlign: 'center',
              }}>
                <cred.icon size={28} color="white" style={{ margin: '0 auto 10px' }} />
                <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'white', marginBottom: '4px' }}>
                  {cred.label}
                </p>
                <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                  {cred.sub}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <BookNowButton variant="ghost" text="VIEW ALL LICENSES & CERTIFICATIONS" href="/licenses-certifications" size="md" />
          </div>
        </div>
      </section>

      {/* SECTION 9: FINANCING */}
      <section style={{ background: '#F0F0F0', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>FINANCING AVAILABLE</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, color: '#003060', fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: '16px' }}>
                Is financing available for plumbing repairs and installations?
              </h2>
              <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: '#484848', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                Yes. Definitive Mechanical offers consumer financing through Synchrony for eligible plumbing and mechanical services. Apply in 60 seconds online with no impact to your credit score during the pre-qualification step.
              </p>
              <div className="space-y-2">
                {['Water Heater Replacement', 'Sewer Line Repair & Replacement', 'Tankless Water Heater Upgrades', 'Gas Line Installation', 'Boiler & Furnace Installation'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#009EC6" />
                    <span style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '14px', color: '#484848' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '6px',
              padding: '32px',
              boxShadow: '0 2px 12px rgba(0,48,96,0.08)',
              textAlign: 'center',
            }}>
              <div style={{ background: '#003060', padding: '12px 24px', borderRadius: '4px', display: 'inline-block', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, color: 'white', fontSize: '16px', letterSpacing: '0.1em' }}>SYNCHRONY FINANCING</span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, color: '#003060', fontSize: '22px', marginBottom: '8px' }}>
                Apply in 60 Seconds
              </h3>
              <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: '#787878', fontSize: '14px', marginBottom: '24px' }}>
                No impact to your credit score during pre-qualification.
              </p>
              <BookNowButton variant="navy" text="APPLY FOR FINANCING" href={BUSINESS.financing} size="lg" />
              <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontSize: '13px', color: '#787878', marginTop: '16px' }}>
                Questions? Call {BUSINESS.phone}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: COMMERCIAL & GOVERNMENT */}
      <section style={{ background: 'white', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{
            background: 'linear-gradient(135deg, #003060, #186090)',
            borderRadius: '8px',
            padding: '40px',
          }}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                  GOVERNMENT & COMMERCIAL
                </p>
                <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, color: 'white', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '12px' }}>
                  We work with government agencies and commercial clients
                </h2>
                <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.7 }}>
                  MDOT MBE Certified · VA SWaM Certified · CAGE 8HCF6 · NAICS 238220. Capability statement available. Master Plumber and Master Gasfitter licensed in four states.
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
                  {['MDOT MBE Cert 20-134', 'VA SWaM Cert 815255'].map((badge) => (
                    <span key={badge} style={{
                      background: 'white',
                      color: '#003060',
                      fontFamily: 'Barlow Condensed, Arial, sans-serif',
                      fontWeight: 700,
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '8px 16px',
                      borderRadius: '2px',
                    }}>
                      {badge}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <BookNowButton variant="phone" text="GOVERNMENT & COMMERCIAL" href="/government-municipal-plumbing" size="md" />
                  <BookNowButton variant="outline" text="COMMERCIAL PLUMBING" href="/commercial-plumbing" size="md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section style={{ background: '#F0F0F0', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            heading="Common questions about plumbing service in MD, DC & Northern VA"
            centered
          />
          <div style={{ background: 'white', borderRadius: '6px', padding: '8px 32px', boxShadow: '0 2px 12px rgba(0,48,96,0.08)' }}>
            <FAQAccordion items={HOME_FAQ} schema={true} />
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <CTABanner
        heading="Ready for licensed plumbing service in Maryland, DC, or Northern Virginia?"
        subtext="We answer 24/7 for emergencies. Office hours Monday–Friday 9am–5pm, Saturday 9am–2pm. Upfront pricing in writing on every job."
        primaryBtn={{ text: `CALL ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST SERVICE ONLINE', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
