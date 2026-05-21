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
  { question: "What is the response time for an emergency plumber in Rockville, MD?", answer: "Response time depends on dispatcher availability and traffic at the time of call. We dispatch from our Largo, MD location. Our dispatcher gives you an honest ETA at the time of your call — not a guaranteed window we cannot keep. Call (301) 679-5849 for current availability." },
  { question: "Are you licensed to do emergency plumbing in Rockville, MD?", answer: "Yes. Definitive Mechanical holds three credentials required for full Rockville plumbing authority: City of Rockville Master Plumber/Gasfitter #PLL-0002113, WSSC Master Plumber/Gasfitter #73696, and Maryland State Master Plumber/Gasfitter #96958. We are licensed for emergency plumbing work within Rockville's municipal jurisdiction." },
  { question: "Do you charge extra for emergency plumbing at night or on weekends in Rockville?", answer: "All services include a trip fee. Written pricing is provided before any work begins — the price you agree to is the price you pay. Call (301) 679-5849." },
  { question: "What should I do right now if I have a plumbing emergency in Rockville?", answer: "For water emergencies: locate and shut off your main water supply valve, then call (301) 679-5849. For gas emergencies: leave the building immediately, call your gas company from outside, then call us once the gas company has cleared the scene. For sewer backups: do not use any fixtures and call immediately." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
        { "@type": "ListItem", "position": 2, "name": "Emergency Plumbing", "item": "https://definitivemechanical.com/emergency-plumbing/" },
        { "@type": "ListItem", "position": 3, "name": "Emergency Plumber Rockville MD" },
      ],
    },
    {
      "@type": "Service",
      "serviceType": "Emergency Plumbing",
      "provider": { "@type": "LocalBusiness", "name": "Definitive Mechanical", "telephone": "+13016795849", "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" } },
      "areaServed": { "@type": "City", "name": "Rockville" },
      "availableChannel": { "@type": "ServiceChannel", "servicePhone": "+13016795849", "availableLanguage": "English", "hoursAvailable": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" } },
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
    },
  ],
};

export default function EmergencyRockvilleMD() {
  return (
    <>
      <Helmet>
        <title>Emergency Plumber in Rockville MD | 24/7 | (301) 679-5849 | Definitive Mechanical</title>
        <meta name="description" content="Emergency plumber in Rockville MD — available 24/7. City of Rockville licensed #PLL-0002113  WSSC #73696  MD #96958. Live dispatcher. All services have a trip fee. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/emergency-plumber-rockville-md/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      {/* Safety Top Bar */}
      <div style={{ backgroundColor: "#DC2626" }} className="py-3 text-center">
        <a href="tel:+13016795849" className="font-bold text-white uppercase text-xs tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px" }}>
           ROCKVILLE PLUMBING EMERGENCY? CALL (301) 679-5849 — LIVE DISPATCHER 24/7  ALL SERVICES HAVE A TRIP FEE
        </a>
      </div>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy-dark) 0%, var(--brand-blue) 100%)", minHeight: "55vh" }} className="flex items-center py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Emergency Plumbing", href: "/emergency-plumbing/" }, { label: "Emergency Plumber Rockville MD" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>
            24/7 EMERGENCY PLUMBER  ROCKVILLE, MD  CITY OF ROCKVILLE LICENSED
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            Emergency Plumber in Rockville, MD
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto text-center mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical provides 24/7 emergency plumbing in Rockville, Maryland. A live dispatcher answers every call. We hold three licenses for Rockville: City of Rockville Master Plumber/Gasfitter #PLL-0002113, WSSC #73696, and Maryland State #96958. All services include a trip fee, disclosed before dispatch. Call (301) 679-5849.
          </p>

          {/* Dominant Phone Button */}
          <div className="max-w-2xl mx-auto">
            <a href="tel:+13016795849" className="flex items-center justify-center w-full text-white font-bold rounded-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", height: "68px", fontSize: "22px", fontFamily: "'Barlow Condensed', sans-serif" }}>
              <Phone className="mr-3" size={24} /> CALL (301) 679-5849 — LIVE DISPATCHER 24/7
            </a>
            <div className="mt-3 flex justify-center">
              <BookNowButton bg="dark" type="secondary" size="sm" text="REQUEST EMERGENCY SERVICE" href="/contact/" />
            </div>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> City of Rockville #PLL-0002113</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> WSSC #73696</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MD State #96958</span>
            <span className="flex items-center gap-1"><Clock size={14} /> Trip Fee Applies to All Services</span>
            <span className="flex items-center gap-1"><DollarSign size={14} /> Written Pricing Before We Start</span>
          </div>
        </div>
      </section>

      {/* Section 2 — What to Expect */}
      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="WHAT HAPPENS WHEN YOU CALL" heading="What to expect when you call for a Rockville plumbing emergency" />
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
          <SectionHeading eyebrow="EMERGENCY TYPES" heading="Rockville emergency plumbing situations we handle" />
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
            Rockville's commercial corridors — Rockville Pike, Veirs Mill Road, and the downtown core — and its range of residential neighborhoods from Twinbrook to Fallsgrove create diverse emergency plumbing scenarios. We serve all of them 24/7.
          </p>
        </div>
      </section>

      {/* Section 4 — License Proof */}
      <section style={{ backgroundColor: "var(--brand-blue)" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="LICENSE PROOF" heading="Three licenses for Rockville emergency plumbing authority" light />
          <p className="text-white/80 text-center max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px" }}>
            Emergency plumbing in Rockville, MD requires active licenses in three overlapping jurisdictions. Definitive Mechanical holds all three:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { label: "City of Rockville", num: "#PLL-0002113" },
              { label: "WSSC", num: "#73696" },
              { label: "Maryland State", num: "#96958" },
            ].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={28} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-sm font-semibold" style={{ color: "var(--brand-blue)", fontFamily: "'Barlow', sans-serif" }}>{cred.label}</p>
                <p className="font-bold text-xl" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>{cred.num}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-center text-sm mt-6 max-w-2xl mx-auto" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Many plumbing contractors operating in Rockville hold only the state and WSSC credentials — not the City of Rockville municipal license. We hold all three.
          </p>
        </div>
      </section>

      {/* Section 5 — Same-Rate Promise */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: "Trip Fee Applies to All Services", body: "All services have a trip fee." },
              { icon: DollarSign, title: "Written Pricing Before We Start", body: "You see the price in writing before our plumber touches a pipe. No surprise invoice at the end." },
              { icon: Phone, title: "Live Dispatcher — Every Call", body: "No answering machine. No callback queue. A live dispatcher answers at (301) 679-5849, around the clock." },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "var(--surface-1)" }} className="rounded-md p-5">
                <item.icon size={24} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <h3 className="font-bold mb-1" style={{ color: "var(--brand-blue)", fontFamily: "'Barlow Condensed', sans-serif" }}>{item.title}</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: "'Barlow', sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Related Pages */}
      <section style={{ backgroundColor: "var(--surface-1)" }} className="py-12">
        <div className="container">
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--brand-blue)", fontFamily: 'var(--font-display)' }}>Related Plumbing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Plumber in Rockville, MD", href: "/service-areas/maryland/montgomery-county/rockville-md/" },
              { label: "Emergency Plumbing Service", href: "/emergency-plumbing/" },
              { label: "Sewer Line Repair", href: "/sewer-line-repair/" },
              { label: "Water Heater Repair", href: "/water-heater-repair/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white border-l-4 p-4 rounded-md font-medium hover:opacity-80 transition-opacity block" style={{ borderColor: "var(--brand-cyan)", color: "var(--brand-cyan)", fontFamily: "'Barlow', sans-serif" }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section className="bg-white py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading="Emergency plumbing in Rockville, MD — common questions" />
          <div className="mt-8">
            <FAQAccordion items={FAQ_ITEMS} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Rockville plumbing emergency? Don't wait."
        subtext="City of Rockville #PLL-0002113  WSSC #73696  MD #96958  24/7 Live Dispatcher  All Services Have a Trip Fee."
        primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST EMERGENCY SERVICE", href: "/contact/" }}
        variant="gradient"
      />
    </>
  );
}
