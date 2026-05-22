import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ShieldCheck, Clock, DollarSign, AlertTriangle, GitBranch, Droplets, Flame, Thermometer, Waves, Wind, Building2, Key, MapPin } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import BookNowButton from "@/components/ui/BookNowButton";
import ProcessStep from "@/components/ui/ProcessStep";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const EMERGENCY_STEPS = [
  { number: 1, title: "Call Now — Live Dispatcher Answers", description: "Call (301) 679-5849. A live dispatcher answers every call — day or night, weekend or holiday. Not a voicemail, not an answering service. A real person who can dispatch a licensed plumber immediately.", icon: "Phone" },
  { number: 2, title: "Dispatched From Our Largo Base", description: "Licensed plumbing professionals dispatched — work performed under Master Plumber license. Our Largo, MD base at 9701 Apollo Drive means our ETA to Largo addresses is typically the shortest in our service area. Our dispatcher confirms your address and gives you an honest ETA.", icon: "Truck" },
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
  { question: "How fast can you respond to a plumbing emergency in Largo?", answer: "We are based in Largo at 9701 Apollo Drive — emergency dispatch for Largo addresses starts from our community. Our dispatcher gives you an honest ETA at the time of your call based on technician availability. Call (301) 679-5849 immediately." },
  { question: "Are you licensed for emergency plumbing in Largo and Prince George's County?", answer: "Yes. WSSC Master Plumber/Gasfitter #73696 and Maryland State Master Plumber/Gasfitter #96958 cover all emergency plumbing work in Largo and throughout Prince George's County." },
  { question: "Do you handle emergency plumbing for commercial properties in Largo?", answer: "Yes. Commercial emergency plumbing for Largo's commercial corridors, office buildings, and government-adjacent facilities. MDOT MBE Cert 20-134 and CAGE 8HCF6. Call (301) 679-5849." },
  { question: "Do you charge extra for after-hours emergency plumbing in Largo?", answer: "All services include a trip fee. Written pricing before any work begins." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Emergency Plumbing", "item": "https://definitivemechanical.com/emergency-plumbing/" }, { "@type": "ListItem", "position": 3, "name": "Emergency Plumber Largo MD" }] },
    { "@type": "Service", "serviceType": "Emergency Plumbing", "provider": { "@type": "LocalBusiness", "name": "Definitive Mechanical", "telephone": "+13016795849", "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" } }, "areaServed": { "@type": "City", "name": "Largo" }, "availableChannel": { "@type": "ServiceChannel", "servicePhone": "+13016795849", "hoursAvailable": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" } } },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

export default function EmergencyLargoMD() {
  return (
    <>
      <Helmet>
        <title>Emergency Plumber in Largo MD | 24/7 | (301) 679-5849 | Definitive Mechanical</title>
        <meta name="description" content="Emergency plumber in Largo MD — based here. Fastest response in our service area. WSSC #73696  MD #96958  24/7 live dispatcher. All services have a trip fee. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/emergency-plumber-largo-md/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <div style={{ backgroundColor: "#DC2626" }} className="py-3 text-center">
        <a href="tel:+13016795849" className="font-bold text-white uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px" }}>
           LARGO PLUMBING EMERGENCY? CALL (301) 679-5849 — WE'RE BASED IN LARGO  FASTEST RESPONSE
        </a>
      </div>

      <section style={{ position: 'relative', minHeight: '55vh', overflow: 'hidden' }} className="flex items-center py-16">
        <img src="/manus-storage/city-largo-md_cd50637f.jpg" alt="Largo MD" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.58) 100%)' }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Emergency Plumbing", href: "/emergency-plumbing/" }, { label: "Emergency Plumber Largo MD" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>24/7 EMERGENCY PLUMBER  LARGO, MD  BASED RIGHT HERE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Emergency Plumber in Largo, MD</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical is based in Largo at 9701 Apollo Drive, Suite 100 — making our emergency response to Largo addresses the fastest in our service area. A live dispatcher answers every call. WSSC Master Plumber/Gasfitter #73696  MD State #96958. All services have a trip fee. Call (301) 679-5849.
          </p>
          <div className="max-w-2xl mx-auto">
            <a href="tel:+13016795849" className="flex items-center justify-center w-full text-white font-bold rounded-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", height: "68px", fontSize: "22px", fontFamily: "'Barlow Condensed', sans-serif" }}>
              <Phone className="mr-3" size={24} /> CALL (301) 679-5849 — LIVE DISPATCHER 24/7
            </a>
            <div className="mt-3 flex justify-center"><BookNowButton variant="outline" size="sm" text="REQUEST EMERGENCY SERVICE" href="/contact/" /></div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><MapPin size={14} /> Based in Largo, MD</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> WSSC #73696</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MD State #96958</span>
            <span className="flex items-center gap-1"><Clock size={14} /> Fastest Response in Our Area</span>
            <span className="flex items-center gap-1"><DollarSign size={14} /> Trip Fee Applies to All Services</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="WHAT HAPPENS WHEN YOU CALL" heading="What to expect when you call for a Largo plumbing emergency" />
          <div className="max-w-3xl mx-auto mt-10">
            {EMERGENCY_STEPS.map((step) => (
              <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} icon={step.icon} isLast={step.number === 5} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-16">
        <div className="container">
          <SectionHeading eyebrow="EMERGENCY TYPES" heading="Largo emergency plumbing situations we handle" />
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
            Largo's mix of 1970s-1990s residential neighborhoods, the Central Avenue commercial corridor, and government-adjacent facilities near the Metro create a wide range of emergency scenarios. Being based here means our team knows Largo's streets and fastest routes — day or night.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--brand-navy)" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="LICENSE PROOF" heading="WSSC and Maryland Licensed  Based in Largo" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            {[{ label: "WSSC Master Plumber/Gasfitter", num: "#73696" }, { label: "Maryland State Master Plumber/Gasfitter", num: "#96958" }].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={28} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-sm font-semibold" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{cred.label}</p>
                <p className="font-bold text-xl" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>{cred.num}</p>
              </div>
            ))}
          </div>
          {/* Home-base callout */}
          <div className="bg-white border-l-4 rounded-md p-4 max-w-xl mx-auto mt-6" style={{ borderColor: "var(--brand-cyan)" }}>
            <div className="flex items-start gap-3">
              <MapPin size={20} style={{ color: "var(--brand-cyan)" }} className="mt-0.5 flex-shrink-0" />
              <p className="text-sm" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>Our office is at 9701 Apollo Drive, Suite 100, Largo, MD 20774. Emergency dispatch for Largo addresses starts from your community.</p>
            </div>
          </div>
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
            {[{ label: "Plumber in Largo MD", href: "/service-areas/maryland/prince-georges-county/largo-md/" }, { label: "Emergency Plumbing", href: "/emergency-plumbing/" }, { label: "Water Heater Repair", href: "/water-heater-repair/" }, { label: "Drain Cleaning", href: "/drain-cleaning/" }].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white border-l-4 p-4 rounded-md font-medium hover:opacity-80 transition-opacity block" style={{ borderColor: "var(--brand-cyan)", color: "var(--brand-cyan)", fontFamily: "'Barlow', sans-serif" }}>{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading="Emergency plumbing in Largo, MD — common questions" />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} /></div>
        </div>
      </section>

      <CTABanner heading="Largo plumbing emergency? We're based here." subtext="9701 Apollo Drive, Largo MD  WSSC #73696  MD #96958  24/7 Live Dispatcher  All Services Have a Trip Fee." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST EMERGENCY SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
