import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ShieldCheck, Clock, DollarSign, AlertTriangle, GitBranch, Droplets, Flame, Thermometer, Waves, Wind, Building2, Key } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import BookNowButton from "@/components/ui/BookNowButton";
import ProcessStep from "@/components/ui/ProcessStep";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const EMERGENCY_STEPS = [
  { number: 1, title: "Call Now — Live Dispatcher Answers", description: "Call (301) 679-5849. A live dispatcher answers every call — day or night, weekend or holiday. Not a voicemail, not an answering service. A real person who can dispatch a licensed plumber immediately.", icon: "Phone" },
  { number: 2, title: "Licensed Plumber Dispatched", description: "Licensed plumbing professionals dispatched — work performed under Master Plumber license. Your dispatcher confirms your address, the nature of the emergency, and gives you an honest ETA. We confirm your main water shut-off location while en route.", icon: "Truck" },
  { number: 3, title: "Assessment — Plain-Language Diagnosis", description: "Our plumber assesses the emergency and explains what they found in plain language. No technical jargon, no vague explanations. You know what is happening before we do anything.", icon: "Search" },
  { number: 4, title: "Written Pricing Before Any Work Begins", description: "You receive written pricing before we touch a pipe. All services include a trip fee, disclosed before any work begins. The price you agree to is the price you pay.", icon: "FileText" },
  { number: 5, title: "Emergency Resolved — Verified & Clean", description: "We resolve the emergency, restore service where possible, and clean up the work area. We confirm the system is safe and functional before we leave. Follow-up service is scheduled if needed.", icon: "CheckCircle" },
];

const EMERGENCY_TYPES = [
  { icon: AlertTriangle, title: "Burst Pipe", body: "A burst pipe can release hundreds of gallons per hour. Locate and shut the main valve, then call us immediately." },
  { icon: GitBranch, title: "Sewer Backup", body: "Sewage backing up into drains, toilets, or the floor is a health hazard requiring immediate professional response." },
  { icon: Droplets, title: "No Water / Pressure Loss", body: "Sudden loss of water pressure throughout the property may indicate a main line failure or broken service line." },
  { icon: Flame, title: "Gas Leak", body: "Leave immediately — do not operate switches. Call your gas company from outside, then call us once the scene is cleared." },
  { icon: Thermometer, title: "Water Heater Failure", body: "A failed water heater — leaking, no hot water, or alarming — requires same-day diagnosis and often same-day replacement." },
  { icon: Waves, title: "Active Flooding", body: "Turn off the main water valve and call immediately. Every minute of active water causes additional structural damage." },
  { icon: Wind, title: "Boiler / No Heat", body: "A heating system failure in a Maryland or Virginia winter is a health emergency. We dispatch 24/7 for boiler failures." },
  { icon: Building2, title: "Commercial Emergency", body: "Plumbing failures in commercial properties affect customers, employees, and compliance. We dispatch licensed plumbers to commercial emergencies 24/7." },
];

const FAQ_ITEMS = [
  { question: "Do you provide 24/7 emergency plumbing in all Alexandria neighborhoods?", answer: "Yes. Emergency plumbing available 24/7 in Old Town Alexandria, Del Ray, Rosemont, Potomac Yard, Carlyle, West End, Eisenhower, and all Alexandria neighborhoods. Virginia Master Plumber #2710064209. Call (301) 679-5849." },
  { question: "Are you licensed for emergency plumbing in Alexandria, VA?", answer: "Yes. Virginia State Master Plumber/Gasfitter #2710064209 and Virginia Class A Contractor #2705181061. We are also Virginia SWaM Certified (Cert No. 815255) for government and procurement-eligible emergency service calls." },
  { question: "Do you charge extra for emergency plumbing at night in Alexandria?", answer: "All services include a trip fee. Written pricing before any work begins. Call (301) 679-5849." },
  { question: "Do you work on historic Old Town Alexandria properties for emergencies?", answer: "Yes. Our experience with aging cast iron, terra cotta sewer laterals, and boiler-based heating systems in historic properties makes us well-suited for Old Town emergency calls. We handle access challenges common in historic buildings." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Emergency Plumbing", "item": "https://definitivemechanical.com/emergency-plumbing/" }, { "@type": "ListItem", "position": 3, "name": "Emergency Plumber Alexandria VA" }] },
    { "@type": "Service", "serviceType": "Emergency Plumbing", "provider": { "@type": "LocalBusiness", "name": "Definitive Mechanical", "telephone": "+13016795849" }, "areaServed": { "@type": "City", "name": "Alexandria" }, "availableChannel": { "@type": "ServiceChannel", "servicePhone": "+13016795849", "hoursAvailable": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" } } },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

export default function EmergencyAlexandriaVA() {
  return (
    <>
      <Helmet>
        <title>Emergency Plumber in Alexandria VA | 24/7 | (301) 679-5849 | Definitive Mechanical</title>
        <meta name="description" content="Emergency plumber in Alexandria VA — available 24/7. Virginia Master Plumber #2710064209  Class A Contractor #2705181061. Live dispatcher. All services have a trip fee. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/emergency-plumber-alexandria-va/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <div style={{ backgroundColor: "#DC2626" }} className="py-3 text-center">
        <a href="tel:+13016795849" className="font-bold text-white uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px" }}>
           ALEXANDRIA PLUMBING EMERGENCY? CALL (301) 679-5849 — VA LICENSED  24/7  ALL SERVICES HAVE A TRIP FEE
        </a>
      </div>

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy-dark) 0%, var(--brand-navy) 100%)", minHeight: "55vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Emergency Plumbing", href: "/emergency-plumbing/" }, { label: "Emergency Plumber Alexandria, VA" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>24/7 EMERGENCY PLUMBER  ALEXANDRIA, VA  OLD TOWN & ALL NEIGHBORHOODS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Emergency Plumber in Alexandria, VA</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical provides 24/7 emergency plumbing in Alexandria, Virginia — from historic Old Town to Del Ray, West End, Potomac Yard, and all Alexandria neighborhoods. A live dispatcher answers every call. Virginia Master Plumber/Gasfitter #2710064209. All services have a trip fee. Call (301) 679-5849.
          </p>
          <div className="max-w-2xl mx-auto">
            <a href="tel:+13016795849" className="flex items-center justify-center w-full text-white font-bold rounded-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", height: "68px", fontSize: "22px", fontFamily: "'Barlow Condensed', sans-serif" }}>
              <Phone className="mr-3" size={24} /> CALL (301) 679-5849 — LIVE DISPATCHER 24/7
            </a>
            <div className="mt-3 flex justify-center"><BookNowButton variant="outline" size="sm" text="REQUEST EMERGENCY SERVICE" href="/contact/" /></div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> VA Master Plumber #2710064209</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> VA Class A Contractor #2705181061</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> SWaM Cert 815255</span>
            <span className="flex items-center gap-1"><Clock size={14} /> Trip Fee Applies to All Services</span>
            <span className="flex items-center gap-1"><Phone size={14} /> Live Dispatcher</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="WHAT HAPPENS WHEN YOU CALL" heading="What to expect when you call for an Alexandria plumbing emergency" />
          <div className="max-w-3xl mx-auto mt-10">
            {EMERGENCY_STEPS.map((step) => (
              <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} icon={step.icon} isLast={step.number === 5} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-16">
        <div className="container">
          <SectionHeading eyebrow="EMERGENCY TYPES" heading="Alexandria emergency plumbing situations we handle" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {EMERGENCY_TYPES.map((type) => (
              <div key={type.title} className="bg-white rounded-md p-4 shadow-sm">
                <type.icon size={28} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <h3 className="font-bold text-sm mb-1" style={{ color: '#0A0A0A', fontFamily: "'Barlow Condensed', sans-serif" }}>{type.title}</h3>
                <p className="text-xs text-gray-600" style={{ fontFamily: "'Barlow', sans-serif" }}>{type.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm italic text-gray-500 max-w-2xl mx-auto mt-6" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Alexandria's historic Old Town properties — some of the oldest occupied residential buildings in Northern Virginia — can experience plumbing failures specific to aging infrastructure: deteriorating terra cotta sewer laterals, aged cast iron, and boiler-based systems. We have experience with all of it. Available 24/7. All services have a trip fee.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--brand-navy)" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="LICENSE PROOF" heading="Licensed for Emergency Plumbing in Virginia" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            {[{ label: "Virginia Master Plumber/Gasfitter", num: "#2710064209" }, { label: "Virginia Class A Contractor", num: "#2705181061" }].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={28} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-sm font-semibold" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{cred.label}</p>
                <p className="font-bold text-xl" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>{cred.num}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-center text-sm mt-4 max-w-2xl mx-auto" style={{ fontFamily: "'Barlow', sans-serif" }}>SWaM Cert 815255 for government/commercial emergency calls at Virginia government facilities.</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[{ icon: Clock, title: "Trip Fee Applies to All Services", body: "All services have a trip fee." }, { icon: DollarSign, title: "Written Pricing Before We Start", body: "You see the price in writing before our plumber touches a pipe. No surprise invoice at the end." }, { icon: Phone, title: "Live Dispatcher — Every Call", body: "No answering machine. No callback queue. A live dispatcher answers at (301) 679-5849, around the clock." }].map((item) => (
              <div key={item.title} style={{ backgroundColor: "var(--surface-1)" }} className="rounded-md p-5">
                <item.icon size={24} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <h3 className="font-bold mb-1" style={{ color: '#0A0A0A', fontFamily: "'Barlow Condensed', sans-serif" }}>{item.title}</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: "'Barlow', sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ label: "Plumber in Alexandria VA", href: "/service-areas/northern-virginia/fairfax-county/" }, { label: "Emergency Plumbing", href: "/emergency-plumbing/" }, { label: "Sewer Line Repair", href: "/sewer-line-repair/" }, { label: "Gas Leak Repair", href: "/gas-leak-repair/" }].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white border-l-4 p-4 rounded-md font-medium hover:opacity-80 transition-opacity block" style={{ borderColor: "var(--brand-cyan)", color: "var(--brand-cyan)", fontFamily: "'Barlow', sans-serif" }}>{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading="Emergency plumbing in Alexandria, VA — common questions" />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} /></div>
        </div>
      </section>

      <CTABanner heading="Alexandria plumbing emergency? Call now." subtext="VA Master Plumber #2710064209  Class A Contractor  SWaM Cert 815255  24/7 Live Dispatcher  All Services Have a Trip Fee." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST EMERGENCY SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
