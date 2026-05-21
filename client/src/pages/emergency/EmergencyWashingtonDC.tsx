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
  { question: "Do you provide emergency plumbing in all DC neighborhoods?", answer: "Yes. Emergency plumbing service is available 24/7 across all eight DC wards and all DC neighborhoods, including Georgetown, Capitol Hill, Dupont Circle, Adams Morgan, Columbia Heights, Navy Yard, NoMa, Anacostia, and throughout the District. DC Master Plumber/Gasfitter #PGM1002236. Call (301) 679-5849." },
  { question: "Are you licensed for emergency plumbing in Washington DC?", answer: "Yes. Definitive Mechanical holds an active DC Master Plumber and Master Gasfitter license #PGM1002236, issued by DC's Department of Consumer and Regulatory Affairs (DCRA). This license is required for all plumbing and gas work in the District." },
  { question: "Do you handle emergency gas leaks in Washington DC?", answer: "If you smell gas: leave the building immediately without operating switches, call your gas utility's emergency line from outside, then call 911 if there is immediate danger. Once the gas company has secured the scene, call Definitive Mechanical at (301) 679-5849 for licensed gas leak repair. DC Master Gasfitter #PGM1002236." },
  { question: "Do you serve DC government facilities for emergency plumbing?", answer: "Yes. MDOT MBE Cert 20-134 and CAGE Code 8HCF6 support emergency procurement for DC government agencies and federal facilities within the District. DC Master Plumber/Gasfitter #PGM1002236." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Emergency Plumbing", "item": "https://definitivemechanical.com/emergency-plumbing/" }, { "@type": "ListItem", "position": 3, "name": "Emergency Plumber Washington DC" }] },
    { "@type": "Service", "serviceType": "Emergency Plumbing", "provider": { "@type": "LocalBusiness", "name": "Definitive Mechanical", "telephone": "+13016795849" }, "areaServed": { "@type": "City", "name": "Washington DC" }, "availableChannel": { "@type": "ServiceChannel", "servicePhone": "+13016795849", "hoursAvailable": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" } } },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

const DC_NEIGHBORHOODS = ["Georgetown", "Capitol Hill", "Dupont Circle", "Adams Morgan", "Columbia Heights", "Navy Yard", "NoMa", "Anacostia", "Brookland", "Shaw", "Petworth", "Friendship Heights", "Foggy Bottom", "Tenleytown", "Woodbridge", "All DC Wards 1-8"];

export default function EmergencyWashingtonDC() {
  return (
    <>
      <Helmet>
        <title>Emergency Plumber in Washington DC | 24/7 | (301) 679-5849 | Definitive Mechanical</title>
        <meta name="description" content="Emergency plumber in Washington DC — available 24/7. DC Master Plumber #PGM1002236  All DC Wards & Neighborhoods. Live dispatcher. All services have a trip fee. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/emergency-plumber-washington-dc/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <div style={{ backgroundColor: "#DC2626" }} className="py-3 text-center">
        <a href="tel:+13016795849" className="font-bold text-white uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px" }}>
           DC PLUMBING EMERGENCY? CALL (301) 679-5849 — ALL DC WARDS  DC LICENSED  LIVE DISPATCHER 24/7
        </a>
      </div>

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy-dark) 0%, var(--brand-blue) 100%)", minHeight: "55vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Emergency Plumbing", href: "/emergency-plumbing/" }, { label: "Emergency Plumber Washington DC" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>24/7 EMERGENCY PLUMBER  WASHINGTON DC  DC MASTER PLUMBER #PGM1002236</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Emergency Plumber in Washington DC</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical provides 24/7 emergency plumbing across all Washington DC wards and neighborhoods. A live dispatcher answers every call. DC Master Plumber and Master Gasfitter license #PGM1002236. All services have a trip fee. Serving DC from our Largo, MD location. Call (301) 679-5849.
          </p>
          <div className="max-w-2xl mx-auto">
            <a href="tel:+13016795849" className="flex items-center justify-center w-full text-white font-bold rounded-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", height: "68px", fontSize: "22px", fontFamily: "'Barlow Condensed', sans-serif" }}>
              <Phone className="mr-3" size={24} /> CALL (301) 679-5849 — LIVE DISPATCHER 24/7
            </a>
            <div className="mt-3 flex justify-center"><BookNowButton variant="outline" size="sm" text="REQUEST EMERGENCY SERVICE" href="/contact/" /></div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> DC Master Plumber #PGM1002236</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> All DC Wards & Neighborhoods</span>
            <span className="flex items-center gap-1"><Clock size={14} /> Trip Fee Applies to All Services</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MDOT MBE Cert 20-134</span>
            <span className="flex items-center gap-1"><Phone size={14} /> Live Dispatcher</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="WHAT HAPPENS WHEN YOU CALL" heading="What to expect when you call for a DC plumbing emergency" />
          <div className="max-w-3xl mx-auto mt-10">
            {EMERGENCY_STEPS.map((step) => (
              <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} icon={step.icon} isLast={step.number === 5} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-16">
        <div className="container">
          <SectionHeading eyebrow="EMERGENCY TYPES" heading="Washington DC emergency plumbing situations we handle" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {EMERGENCY_TYPES.map((type) => (
              <div key={type.title} className="bg-white rounded-md p-4 shadow-sm">
                <type.icon size={28} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--brand-blue)", fontFamily: "'Barlow Condensed', sans-serif" }}>{type.title}</h3>
                <p className="text-xs text-gray-600" style={{ fontFamily: "'Barlow', sans-serif" }}>{type.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm italic text-gray-500 max-w-2xl mx-auto mt-6" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Washington DC's mix of historic rowhouses, luxury condominiums, embassy properties, government buildings, and high-density commercial development creates emergency plumbing scenarios across every property type. We hold DC Master Plumber/Gasfitter license #PGM1002236 and respond to all DC property types 24/7.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--brand-blue)" }} className="py-14">
        <div className="container text-center">
          <SectionHeading eyebrow="LICENSE PROOF" heading="DC Master Plumber/Gasfitter — License #PGM1002236" light />
          <div className="bg-white rounded-md p-8 max-w-lg mx-auto mt-8">
            <Key size={40} style={{ color: "var(--brand-cyan)" }} className="mx-auto mb-3" />
            <p className="font-semibold text-sm mb-1" style={{ color: "var(--brand-blue)", fontFamily: "'Barlow', sans-serif" }}>District of Columbia Master Plumber & Master Gasfitter</p>
            <p className="font-bold text-3xl mb-3" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>#PGM1002236</p>
            <p className="text-sm text-gray-600" style={{ fontFamily: "'Barlow', sans-serif" }}>Issued by DC's Department of Consumer and Regulatory Affairs (DCRA). Required for all licensed plumbing and gas work within the District of Columbia.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span>MDOT MBE Cert 20-134</span><span></span><span>CAGE 8HCF6</span><span></span><span>NAICS 238220</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[{ icon: Clock, title: "Trip Fee Applies to All Services", body: "All services have a trip fee." }, { icon: DollarSign, title: "Written Pricing Before We Start", body: "You see the price in writing before our plumber touches a pipe. No surprise invoice at the end." }, { icon: Phone, title: "Live Dispatcher — Every Call", body: "No answering machine. No callback queue. A live dispatcher answers at (301) 679-5849, around the clock." }].map((item) => (
              <div key={item.title} style={{ backgroundColor: "var(--surface-1)" }} className="rounded-md p-5">
                <item.icon size={24} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <h3 className="font-bold mb-1" style={{ color: "var(--brand-blue)", fontFamily: "'Barlow Condensed', sans-serif" }}>{item.title}</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: "'Barlow', sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: "var(--brand-blue)", fontFamily: 'var(--font-display)' }}>All DC wards and neighborhoods — 24/7</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "'Barlow', sans-serif" }}>We serve all eight DC wards for emergency plumbing. Response time varies by neighborhood and conditions at the time of call. Our dispatcher gives you an honest ETA on every call.</p>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {DC_NEIGHBORHOODS.map((n) => (
              <span key={n} className="bg-white rounded-full px-3 py-1 text-sm font-medium" style={{ color: "var(--brand-blue)", fontFamily: "'Barlow', sans-serif" }}>{n}</span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4" style={{ fontFamily: "'Barlow', sans-serif" }}>Not seeing your DC neighborhood? Call (301) 679-5849 — we confirm we can serve your address immediately.</p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ label: "Plumber in Washington DC", href: "/service-areas/washington-dc/" }, { label: "Emergency Plumbing Service", href: "/emergency-plumbing/" }, { label: "Gas Leak Repair", href: "/gas-leak-repair/" }, { label: "Commercial Plumbing DC", href: "/commercial-plumbing/" }].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white border-l-4 p-4 rounded-md font-medium hover:opacity-80 transition-opacity block" style={{ borderColor: "var(--brand-cyan)", color: "var(--brand-cyan)", fontFamily: "'Barlow', sans-serif" }}>{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading="Emergency plumbing in Washington DC — common questions" />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} /></div>
        </div>
      </section>

      <CTABanner heading="DC plumbing emergency? Call (301) 679-5849 — 24/7." subtext="DC Master Plumber #PGM1002236  All DC Wards  MDOT MBE Cert 20-134  All Services Have a Trip Fee." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST EMERGENCY SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
