import { Phone, Award, Star, Clock, ShieldCheck, FileText, Users, CheckCircle, AlertTriangle, MapPin, Building2, MapPinned, KeyRound, Briefcase, Leaf, CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';
import { BUSINESS, TESTIMONIALS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import TrustBadges from '@/components/ui/TrustBadges';
import ServiceCard from '@/components/ui/ServiceCard';
import { ALL_SERVICE_CATEGORIES } from '@/lib/serviceCategories';
import { getServiceImage } from '@/lib/serviceImages';
import SectionHeading from '@/components/ui/SectionHeading';
import StarRating from '@/components/ui/StarRating';
import TestimonialCard from '@/components/ui/TestimonialCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';
import ServiceAreaSearch from '@/components/ServiceAreaSearch';

const _UNUSED_SERVICE_CATEGORIES_REPLACED = [
  {
    label: 'Emergency & Drain',
    services: [
      { title: '24/7 Emergency Plumbing', icon: 'AlertTriangle', href: '/emergency-plumbing', description: 'Burst pipes, sewer backups, gas leaks — live dispatcher 24/7, 365 days a year. Licensed plumbing professionals on every emergency call — work performed under Master Plumber license.', featured: true },
      { title: 'Drain Cleaning', icon: 'Droplets', href: '/drain-cleaning', description: 'Professional drain clearing, hydro-jetting, and sewer stoppage service. We identify the root cause — not just the symptom.' },
      { title: 'Hydro-Jetting', icon: 'Zap', href: '/hydro-jetting', description: 'High-pressure hydro-jetting clears grease, scale, and root intrusion that snaking cannot reach. Commercial and residential.' },
      { title: 'Video Camera Inspection', icon: 'Camera', href: '/video-camera-inspection', description: 'Sewer and drain camera inspection to pinpoint blockages, cracks, and root intrusion before any excavation.' },
      { title: 'Sewer Line Repair', icon: 'GitBranch', href: '/sewer-line-repair', description: 'Camera inspection, sewer line repair and replacement, emergency sewer service across MD, DC, and Northern Virginia.' },
    ],
  },
  {
    label: 'Water, Gas & More',
    services: [
      { title: 'Water Heater Repair', icon: 'Thermometer', href: '/water-heater-repair', description: 'Gas, electric, and tankless water heater repair and replacement. Same-day service available. Financing for replacements.' },
      { title: 'Tankless Water Heater', icon: 'Zap', href: '/tankless-water-heater', description: 'Tankless water heater installation, repair, and conversion. Energy-efficient on-demand hot water for homes and businesses.' },
      { title: 'Gas Line Repair', icon: 'Flame', href: '/gas-line-repair', description: 'Licensed Master Gasfitter in MD, DC, VA & DE. Gas line repair, installation, and 24/7 emergency gas leak response.' },
      { title: 'Gas Leak Repair', icon: 'AlertOctagon', href: '/gas-leak-repair', description: '24/7 emergency gas leak detection and repair. Licensed Master Gasfitter — do not wait, call immediately.' },
    ],
  },
  {
    label: 'Backflow, Fixtures & Commercial',
    services: [
      { title: 'Backflow Certification', icon: 'ShieldCheck', href: '/backflow-certification', description: 'Annual backflow preventer testing, certification, repair, and replacement for commercial, municipal, and residential properties.' },
      { title: 'Water Line Repair', icon: 'Waves', href: '/water-line-repair', description: 'Main water line repair and replacement. Leak detection, pressure issues, and full line replacement with minimal disruption.' },
      { title: 'Boiler & Furnace', icon: 'Thermometer', href: '/boiler-furnace-repair', description: 'Boiler and furnace repair, maintenance, and replacement. Licensed in MD, DC, VA, and DE.' },
      { title: 'Faucet & Toilet Repair', icon: 'Wrench', href: '/faucet-toilet-repair', description: 'Faucet repair and replacement, toilet repair, running toilets, and fixture upgrades for residential and commercial properties.' },
      { title: 'Commercial Plumbing', icon: 'Building2', href: '/commercial-plumbing', description: 'Facility maintenance, code-compliant service, and emergency response for businesses, property managers, and institutions.' },
      { title: 'Government & Municipal', icon: 'Landmark', href: '/government-municipal-plumbing', description: 'MDOT MBE and VA SWaM certified. Capability statement available. CAGE 8HCF6. NAICS 238220.' },
    ],
  },
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
    answer: 'Plumbing rates in Maryland vary based on the service type, urgency, and materials required. Standard service calls typically range from $150-$300 for diagnosis and simple repairs. All services include a trip fee. Call (301) 679-5849 for upfront written pricing before any work begins.',
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

function HeroSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 600);
  };

  return (
    <section
      style={{
        minHeight: '85vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background plumber photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/hero-homepage-bg-DJemnkLiSnRWt3DjL8Brh3.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark black overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.65)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full">
        <div className="grid lg:grid-cols-5 gap-10 items-center">

          {/* LEFT — headline & trust signals — 3/5 */}
          <div className="lg:col-span-3">
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--brand-cyan)', marginBottom: '16px' }}>
              LICENSED PLUMBING  MARYLAND  WASHINGTON DC  NORTHERN VIRGINIA
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.01em', color: 'white', fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.0, marginBottom: '20px' }}>
              Licensed Plumbing Professionals. Honest Service.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, maxWidth: '540px', marginBottom: '24px' }}>
              Definitive Mechanical is a Licensed Black Owned, MDOT MBE and Virginia SWaM certified plumbing and mechanical contractor serving homes, businesses, and government facilities across Maryland, Washington DC, and Northern Virginia. Master Plumber and Master Gasfitter licensed in four states. 24/7 emergency service. Upfront pricing in writing — always.
            </p>
            <TrustBadges variant="dark" badges={['black-owned', '11 Years in Business', '24/7 Emergency', 'Licensed Master Plumber/Gasfitter', 'MDOT MBE Certified', 'VA SWaM Certified']} />
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
              <BookNowButton bg="dark" variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
            </div>
            <div style={{ marginTop: '20px' }}>
              <StarRating rating={4.8} count={40} variant="dark" />
            </div>
          </div>

          {/* RIGHT — white lead form card */}
          <div className="lg:col-span-2">
            <div style={{ background: 'white', borderRadius: '12px', padding: '22px', boxShadow: '0 8px 24px rgba(0,0,0,0.18)', border: '1px solid rgba(0,0,0,0.08)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <CheckCircle size={48} color="var(--brand-blue)" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: 'var(--brand-black)', marginBottom: '12px' }}>
                    Request Received!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#444', lineHeight: 1.6 }}>
                    We'll call you back within 30 minutes. For emergencies call <a href={`tel:${BUSINESS.phoneRaw}`} style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>{BUSINESS.phone}</a> now.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-blue)', margin: 0 }}>Request Service</p>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', textTransform: 'uppercase', color: 'var(--brand-navy)', lineHeight: 1.1, margin: 0 }}>Request Service</h2>

                  {/* Name + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#555', marginBottom: '4px' }}>Full Name <span style={{ color: '#cc0000' }}>*</span></label>
                      <input type="text" required placeholder="Your full name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        style={{ width: '100%', padding: '10px 11px', borderRadius: '6px', border: '1px solid #d1d5db', background: 'white', color: '#111', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#555', marginBottom: '4px' }}>Phone <span style={{ color: '#cc0000' }}>*</span></label>
                      <input type="tel" required placeholder="(xxx) xxx-xxxx" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        style={{ width: '100%', padding: '10px 11px', borderRadius: '6px', border: '1px solid #d1d5db', background: 'white', color: '#111', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#555', marginBottom: '4px' }}>Email Address</label>
                    <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      style={{ width: '100%', padding: '10px 11px', borderRadius: '6px', border: '1px solid #d1d5db', background: 'white', color: '#111', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>

                  {/* Service + City */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#555', marginBottom: '4px' }}>Service Needed <span style={{ color: '#cc0000' }}>*</span></label>
                      <select required value={formData.service} onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                        style={{ width: '100%', padding: '10px 11px', borderRadius: '6px', border: '1px solid #d1d5db', background: 'white', color: formData.service ? '#111' : '#888', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}>
                        <option value="" disabled style={{ color: '#000' }}>Select a service...</option>
                        <option value="emergency" style={{ color: '#000' }}>24/7 Emergency Plumbing</option>
                        <option value="drain-cleaning" style={{ color: '#000' }}>Drain Cleaning</option>
                        <option value="water-heater-repair" style={{ color: '#000' }}>Water Heater Repair</option>
                        <option value="water-heater-installation" style={{ color: '#000' }}>Water Heater Installation</option>
                        <option value="tankless" style={{ color: '#000' }}>Tankless Water Heater</option>
                        <option value="sewer-line" style={{ color: '#000' }}>Sewer Line Repair/Installation</option>
                        <option value="hydro-jetting" style={{ color: '#000' }}>Hydro-Jetting</option>
                        <option value="video-camera" style={{ color: '#000' }}>Video Camera Inspection</option>
                        <option value="gas-line" style={{ color: '#000' }}>Gas Line Repair/Installation</option>
                        <option value="gas-leak" style={{ color: '#000' }}>Gas Leak Repair</option>
                        <option value="backflow" style={{ color: '#000' }}>Backflow Prevention/Certification</option>
                        <option value="water-line" style={{ color: '#000' }}>Water Line Repair/Installation</option>
                        <option value="boiler" style={{ color: '#000' }}>Boiler &amp; Furnace Repair</option>
                        <option value="faucet-toilet" style={{ color: '#000' }}>Faucet &amp; Toilet Repair</option>
                        <option value="commercial" style={{ color: '#000' }}>Commercial Plumbing</option>
                        <option value="government" style={{ color: '#000' }}>Government/Municipal Plumbing</option>
                        <option value="other" style={{ color: '#000' }}>Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#555', marginBottom: '4px' }}>City / Location</label>
                      <input type="text" placeholder="City, State" value={formData.city} onChange={e => setFormData(p => ({ ...p, city: e.target.value }))}
                        style={{ width: '100%', padding: '10px 11px', borderRadius: '6px', border: '1px solid #d1d5db', background: 'white', color: '#111', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#555', marginBottom: '4px' }}>Describe the Problem <span style={{ color: '#cc0000' }}>*</span></label>
                    <textarea required rows={3} placeholder="Please describe the issue, when it started, and any relevant details..." value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      style={{ width: '100%', padding: '10px 11px', borderRadius: '6px', border: '1px solid #d1d5db', background: 'white', color: '#111', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                  </div>

                  {/* Emergency warning */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', background: 'rgba(228,6,19,0.12)', border: '1px solid rgba(228,6,19,0.3)', borderRadius: '6px', padding: '8px 10px' }}>
                    <AlertTriangle size={13} style={{ color: '#ff6b6b', flexShrink: 0, marginTop: 1 }} />
                    <p style={{ fontFamily: 'var(--font-body)', color: '#555', fontSize: '11px', lineHeight: 1.5, margin: 0 }}>
                      <strong style={{ color: '#cc0000' }}>Plumbing emergency?</strong> Don't use this form — <a href={`tel:${BUSINESS.phoneRaw}`} style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>{BUSINESS.phone}</a> answers 24/7.
                    </p>
                  </div>

                  <button type="submit" disabled={submitting}
                    style={{ width: '100%', background: submitting ? 'var(--brand-blue-hover)' : 'var(--brand-blue)', color: 'white', border: 'none', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', padding: '13px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.06em', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                    {submitting ? 'Submitting...' : 'Request Service'}
                  </button>

                  <p style={{ fontSize: '11px', color: '#888', fontFamily: 'var(--font-body)', textAlign: 'center', margin: 0 }}>
                    No spam. Quoted price in writing. All services have a trip fee.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

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
      <HeroSection />

      {/* SECTION 2: TRUST STATS BAR */}
      <section style={{ background: 'var(--brand-cyan)', padding: '32px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { number: '11', label: 'Years in Business', icon: Award },
              { number: '4.8', label: 'Google Rating', icon: Star },
              { number: '24/7', label: 'Emergency Service', icon: Clock },
              { number: '4 States', label: 'Master Licensed', icon: ShieldCheck },
            ].map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '16px',
                  borderRight: index < 3 ? '1px solid rgba(6,59,99,0.2)' : 'none',
                }}
              >
                <stat.icon size={24} color="var(--brand-navy)" style={{ margin: '0 auto 8px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '32px', color: 'var(--brand-navy)', lineHeight: 1 }}>
                  {stat.number}
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-navy)', marginTop: '4px' }}>
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

          {/* Category pill tabs */}
          <div style={{
            paddingTop: '8px',
            paddingBottom: '8px',
            marginBottom: '40px',
            borderBottom: '1px solid var(--border)',
          }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {ALL_SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    const el = document.getElementById(`service-cat-${cat.key}`);
                    if (el) {
                      const offset = 130;
                      const top = el.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '10px 24px',
                    borderRadius: '999px',
                    border: `2px solid ${cat.color}`,
                    background: 'transparent',
                    color: 'var(--brand-navy)',
                    cursor: 'pointer',
                    transition: 'all 180ms cubic-bezier(0.23,1,0.32,1)',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = cat.color;
                    (e.currentTarget as HTMLElement).style.color = 'white';
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = 'var(--brand-navy)';
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}
                  onMouseDown={e => (e.currentTarget as HTMLElement).style.transform = 'scale(0.97)'}
                  onMouseUp={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {ALL_SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.key} id={`service-cat-${cat.key}`}>
                {/* Category divider header — matches city pages */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ height: '3px', width: '32px', background: cat.color, flexShrink: 0, borderRadius: '2px' }} />
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--brand-navy)',
                    margin: 0,
                    whiteSpace: 'nowrap',
                  }}>
                    {cat.title}
                  </p>
                  <div style={{ height: '1px', flex: 1, background: 'var(--border)' }} />
                </div>
                {/* Service tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((svc) => {
                    const slug = svc.href.replace(/^\//, '');
                    return (
                      <ServiceCard
                        key={svc.href}
                        title={svc.label}
                        description=''
                        href={svc.href}
                        iconName='Wrench'
                        image={getServiceImage(slug)}
                        imageAlt={`${svc.label} in Maryland, DC, and Northern Virginia`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <BookNowButton bg="light" variant="secondary" text="VIEW ALL PLUMBING SERVICES" href="/services" size="md" />
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
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
                title: 'Licensed Professionals on Every Job',
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
              <div key={col.title} style={{ background: 'white', border: '1px solid #e5e7eb', borderTop: '4px solid var(--brand-cyan)', borderRadius: '4px', padding: '32px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(0,160,200,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <col.icon size={24} color="var(--brand-blue)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '12px' }}>
                  {col.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.7 }}>
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
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '16px', marginBottom: '12px' }}>
              "We explain what we find, what your options are, and what each one costs — before we touch a wrench."
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {['No commissioned salespeople', 'Trip fee applies to all services', 'Written pricing every time'].map((item) => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-2)' }}>
                  <CheckCircle size={16} color="var(--brand-cyan)" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EMERGENCY CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--brand-blue-hover), var(--brand-blue))', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle size={40} color="white" style={{ margin: '0 auto 16px' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.85)', marginBottom: '12px' }}>
            24/7 EMERGENCY SERVICE
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: '16px' }}>
            Plumbing emergency? We answer at 3am.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '16px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Burst pipe, sewer backup, gas leak, no hot water — our live dispatcher answers every call, every hour of every day. Licensed plumbing professionals dispatched — work performed under Master Plumber license.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookNowButton bg="blue" variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
            <BookNowButton bg="blue" variant="secondary" text="LEARN MORE" href="/emergency-plumbing" size="lg" />
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section style={{ background: 'var(--surface-1)', padding: '80px 0' }}>
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
            <BookNowButton bg="light" variant="secondary" text="READ ALL REVIEWS" href="/reviews" size="md" />
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/about-plumber-working-jcsVhLFVgL3fvKorQoiQj5.webp"
                alt="Definitive Mechanical service area Maryland DC Northern Virginia"
                style={{ width: '100%', borderRadius: '6px', boxShadow: '0 4px 20px rgba(6,59,99,0.1)' }}
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  heading: 'Maryland',
                  body: "Prince George's County  Montgomery County  Howard County  Anne Arundel County  Charles County",
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
                  <area.icon size={24} color="var(--brand-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '16px', marginBottom: '4px' }}>
                      {area.heading}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-2)', marginBottom: '4px' }}>{area.body}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--ink-3)', marginBottom: '8px' }}>{area.cities}</p>
                    <Link href={area.href} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-cyan)', textDecoration: 'none' }}>
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
      <section style={{ background: 'linear-gradient(135deg, var(--brand-blue-hover) 0%, var(--brand-blue) 100%)', padding: '80px 0' }}>
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
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'white', marginBottom: '4px' }}>
                  {cred.label}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                  {cred.sub}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <BookNowButton bg="blue" variant="secondary" text="VIEW ALL LICENSES & CERTIFICATIONS" href="/licenses-certifications" size="md" />
          </div>
        </div>
      </section>

      {/* SECTION 9: FINANCING */}
      <section style={{ background: 'var(--surface-1)', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>FINANCING AVAILABLE</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: '16px' }}>
                Is financing available for plumbing repairs and installations?
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                Yes. Definitive Mechanical offers consumer financing through Synchrony for eligible plumbing and mechanical services. Apply in 60 seconds online with no impact to your credit score during the pre-qualification step.
              </p>
              <div className="space-y-2">
                {['Water Heater Replacement', 'Sewer Line Repair & Replacement', 'Tankless Water Heater Upgrades', 'Gas Line Installation', 'Boiler & Furnace Installation'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="var(--brand-cyan)" />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-2)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '6px',
              padding: '32px',
              boxShadow: '0 2px 12px rgba(0,160,200,0.08)',
              textAlign: 'center',
            }}>
              <div style={{ background: 'var(--brand-blue)', padding: '12px 24px', borderRadius: '4px', display: 'inline-block', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '16px', letterSpacing: '0.1em' }}>SYNCHRONY FINANCING</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-navy)', fontSize: '22px', marginBottom: '8px' }}>
                Apply in 60 Seconds
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-3)', fontSize: '14px', marginBottom: '24px' }}>
                No impact to your credit score during pre-qualification.
              </p>
              <BookNowButton bg="blue" variant="primary" text="APPLY FOR FINANCING" href={BUSINESS.financing} size="lg" />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--ink-3)', marginTop: '16px' }}>
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
            background: 'linear-gradient(135deg, var(--brand-blue-hover), var(--brand-blue))',
            borderRadius: '8px',
            padding: '40px',
          }}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                  GOVERNMENT & COMMERCIAL
                </p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '12px' }}>
                  We work with government agencies and commercial clients
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.7 }}>
                  MDOT MBE Certified  VA SWaM Certified  CAGE 8HCF6  NAICS 238220. Capability statement available. Master Plumber and Master Gasfitter licensed in four states.
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
                  {['MDOT MBE Cert 20-134', 'VA SWaM Cert 815255'].map((badge) => (
                    <span key={badge} style={{
                      background: 'white',
                      color: 'var(--brand-navy)',
                      fontFamily: 'var(--font-display)',
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
                  <BookNowButton bg="light" variant="phone" text="GOVERNMENT & COMMERCIAL" href="/government-municipal-plumbing" size="md" />
                  <BookNowButton bg="light" variant="secondary" text="COMMERCIAL PLUMBING" href="/commercial-plumbing" size="md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section style={{ background: '#EBF4FB', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            heading="Common questions about plumbing service in MD, DC &amp; Northern VA"
            centered
          />
          <FAQAccordion items={HOME_FAQ} schema={true} variant="light" />
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <CTABanner
        heading="Ready for licensed plumbing service in Maryland, DC, or Northern Virginia?"
        subtext="We answer 24/7 for emergencies. Office hours Monday-Friday 9am-5pm, Saturday 9am-2pm. Upfront pricing in writing on every job."
        primaryBtn={{ text: `CALL ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST SERVICE ONLINE', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
