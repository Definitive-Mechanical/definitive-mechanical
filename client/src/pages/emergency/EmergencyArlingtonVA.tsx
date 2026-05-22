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
  { question: "What is the response time for an emergency plumber in Arlington, VA?", answer: "We dispatch from our Largo, MD base via the Capital Beltway and I-395. Response time depends on conditions at the time of call — our dispatcher gives you an honest ETA when you call. We do not publish guaranteed windows we cannot keep. Call (301) 679-5849 for current availability." },
  { question: "Are you licensed for emergency plumbing in Arlington County, Virginia?", answer: "Yes. Virginia State Master Plumber/Gasfitter #2710064209 and Virginia Class A Contractor #2705181061 authorize emergency plumbing and gas work throughout Arlington County." },
  { question: "Do you handle multi-unit building plumbing emergencies in Arlington?", answer: "Yes. We respond to plumbing emergencies in Arlington condominiums, apartment buildings, high-rises, and multi-unit properties. We coordinate with building management for access and repair. Call (301) 679-5849 immediately." },
  { question: "Do you charge more for emergency plumbing at night or on weekends in Arlington?", answer: "No. All services have a trip fee for after-hours, weekend, or holiday emergency calls anywhere in our service area including Arlington. Same rate, written pricing before any work begins." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Emergency Plumbing", "item": "https://definitivemechanical.com/emergency-plumbing/" }, { "@type": "ListItem", "position": 3, "name": "Emergency Plumber Arlington VA" }] },
    { "@type": "Service", "serviceType": "Emergency Plumbing", "provider": { "@type": "LocalBusiness", "name": "Definitive Mechanical", "telephone": "+13016795849" }, "areaServed": { "@type": "City", "name": "Arlington" }, "availableChannel": { "@type": "ServiceChannel", "servicePhone": "+13016795849", "hoursAvailable": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" } } },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

export default function EmergencyArlingtonVA() {
  return (
    <>
      <Helmet>
        <title>Emergency Plumber in Arlington VA | 24/7 | (301) 679-5849 | Definitive Mechanical</title>
        <meta name="description" content="Emergency plumber in Arlington VA — available 24/7. Virginia Master Plumber #2710064209  Class A Contractor #2705181061. Live dispatcher. All services have a trip fee. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/emergency-plumber-arlington-va/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      {/* Safety Top Bar */}
      <div style={{ backgroundColor: "#DC2626" }} className="py-3 text-center">
        <a href="tel:+13016795849" className="font-bold text-white uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px" }}>
           ARLINGTON PLUMBING EMERGENCY? CALL (301) 679-5849 — 24/7 LIVE DISPATCHER  ALL SERVICES HAVE A TRIP FEE
        </a>
      </div>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '55vh', overflow: 'hidden' }} className="flex items-center py-16">
        <img src="/manus-storage/city-arlington-va_bf10f6ae.jpg" alt="Arlington VA" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.58) 100%)' }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Emergency Plumbing", href: "/emergency-plumbing/" }, { label: "Emergency Plumber Arlington, VA" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>24/7 EMERGENCY PLUMBER  ARLINGTON, VA  VA MASTER PLUMBER LICENSED</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Emergency Plumber in Arlington, VA</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical provides 24/7 emergency plumbing in Arlington, Virginia — one of the most densely populated jurisdictions in the DC metro area. A live dispatcher answers every call. Virginia Master Plumber/Gasfitter #2710064209, Class A Contractor #2705181061. All services have a trip fee. Call (301) 679-5849.
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
            <span className="flex items-center gap-1"><Clock size={14} /> Trip Fee Applies to All Services</span>
            <span className="flex items-center gap-1"><DollarSign size={14} /> Written Pricing Before We Start</span>
            <span className="flex items-center gap-1"><Phone size={14} /> Live Dispatcher</span>
          </div>
        </div>
      </section>

      {/* Section 2 — Process */}
      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="WHAT HAPPENS WHEN YOU CALL" heading="What to expect when you call for an Arlington plumbing emergency" />
          <div className="max-w-3xl mx-auto mt-10">
            {EMERGENCY_STEPS.map((step) => (
              <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} icon={step.icon} isLast={step.number === 5} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Emergency Types */}
      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-16">
        <div className="container">
          <SectionHeading eyebrow="EMERGENCY TYPES" heading="Arlington emergency plumbing situations we handle" />
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
            Arlington County's dense urban environment — high-rise condominiums, rowhouses, apartment buildings, and commercial corridors along Clarendon Boulevard and Columbia Pike — creates particular urgency around plumbing emergencies. In a multi-unit building, one failed pipe can affect multiple units simultaneously. We dispatch 24/7 — All services have a trip fee.
          </p>
        </div>
      </section>

      {/* Section 4 — License Proof */}
      <section style={{ backgroundColor: "var(--brand-navy)" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="LICENSE PROOF" heading="Licensed for emergency plumbing in Arlington County, Virginia" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            {[{ label: "Virginia Master Plumber/Gasfitter", num: "#2710064209" }, { label: "Virginia Class A Contractor", num: "#2705181061" }].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={28} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-sm font-semibold" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{cred.label}</p>
                <p className="font-bold text-xl" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>{cred.num}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-center text-sm mt-4 max-w-2xl mx-auto" style={{ fontFamily: "'Barlow', sans-serif" }}>Virginia SWaM Cert 815255 — eligible for Virginia government and procurement-adjacent emergency service calls at government facilities in Arlington.</p>
        </div>
      </section>

      {/* Section 5 — Same-Rate Promise */}
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

      {/* Section 6 — Arlington Urgency */}
      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-12">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A0A0A', fontFamily: 'var(--font-display)' }}>Why Arlington emergency plumbing requires immediate response</h2>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "16px", lineHeight: "1.8" }}>
            Arlington's density creates a compounding urgency that does not exist in lower-density markets. A sewer backup in a high-rise affects multiple floors. A burst pipe in a townhouse floods multiple units. A gas leak in a dense residential corridor creates risk for adjacent properties. Emergency response in Arlington is not just a convenience — it is often a multi-party safety matter. We dispatch licensed plumbing professionals 24/7 — all work performed under Master Plumber license. All services have a trip fee.
          </p>
          <a href="tel:+13016795849" className="inline-flex items-center justify-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>
            <Phone size={20} /> CALL (301) 679-5849 NOW
          </a>
        </div>
      </section>

      {/* Section 7 — Related */}
      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ label: "Plumber in Arlington, VA", href: "/service-areas/northern-virginia/arlington-county/" }, { label: "Emergency Plumbing Service", href: "/emergency-plumbing/" }, { label: "Sewer Line Repair", href: "/sewer-line-repair/" }, { label: "Gas Line Repair", href: "/gas-line-repair/" }].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white border-l-4 p-4 rounded-md font-medium hover:opacity-80 transition-opacity block" style={{ borderColor: "var(--brand-cyan)", color: "var(--brand-cyan)", fontFamily: "'Barlow', sans-serif" }}>{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — FAQ */}
      <section className="bg-white py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading="Emergency plumbing in Arlington, VA — common questions" />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} /></div>
        </div>
      </section>

      <CTABanner heading="Arlington plumbing emergency? Call now." subtext="VA Master Plumber #2710064209  Class A Contractor #2705181061  SWaM Cert 815255  24/7 Live Dispatcher  All Services Have a Trip Fee." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST EMERGENCY SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
