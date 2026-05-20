import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const FAQ_LICENSING = [
  { question: "What licenses does Definitive Mechanical hold?", answer: "Definitive Mechanical holds: Maryland State Master Plumber/Gasfitter #96958, WSSC Master Plumber/Gasfitter #73696, City of Rockville #PLL-0002113, Howard County #20020096958, Anne Arundel County #A2-6139, Virginia Class A Contractor #2705-183416-A, Virginia Master Plumber/Gasfitter #2710-183416-A, DC Master Plumber/Gasfitter #PL-2024-00065, Delaware Master Plumber #PL-0003007, and EPA Section 608 Universal Certification. Call (301) 679-5849 to verify." },
  { question: "What is WSSC and why does it matter?", answer: "WSSC (Washington Suburban Sanitary Commission) is the water and sewer authority for Prince George's County and Montgomery County, Maryland. Any permitted plumbing work in these counties requires a WSSC-licensed contractor. Our WSSC Master Plumber/Gasfitter license #73696 authorizes all permitted work in the WSSC service territory." },
  { question: "What is an MDOT MBE certification?", answer: "MDOT MBE (Minority Business Enterprise) certification from the Maryland Department of Transportation certifies Definitive Mechanical as a minority-owned business eligible for government contracting set-asides. Our certification number is 20-134. This is required for many government and public sector plumbing contracts in Maryland." },
  { question: "What is a SWaM certification?", answer: "SWaM (Small, Women-owned, and Minority-owned Business) certification from the Virginia Department of Small Business and Supplier Diversity certifies Definitive Mechanical for government procurement preferences in Virginia. This is required for many Commonwealth of Virginia and Northern Virginia government contracts." },
];

const FAQ_EMERGENCY = [
  { question: "Do you provide 24/7 emergency plumbing?", answer: "Yes. Emergency plumbing service is available 24 hours a day, 7 days a week, 365 days a year — including holidays. A live dispatcher answers every call at (301) 679-5849. No voicemail, no answering service." },
  { question: "Do you charge extra for after-hours emergency plumbing?", answer: "No. There is no overtime surcharge, no after-hours premium, and no weekend or holiday rate. The rate you receive at 2 AM is the same as 2 PM. Written pricing is provided before any work begins." },
  { question: "What should I do while waiting for an emergency plumber?", answer: "For a burst pipe or active water leak: locate and shut your main water valve immediately. For a gas leak: leave the building without operating any switches, call your gas company from outside, and call us once the scene is cleared. For a sewer backup: stop using all drains and toilets. For a water heater emergency: turn off the cold water supply to the unit and, if gas, turn off the gas supply." },
  { question: "What areas do you cover for emergency plumbing?", answer: "Emergency plumbing service covers all of Maryland (Prince George's, Montgomery, Howard, Anne Arundel, Charles counties), Washington DC, and Northern Virginia (Fairfax, Arlington, Alexandria, McLean, Springfield, Vienna, and surrounding areas). Call (301) 679-5849." },
];

const FAQ_SERVICES = [
  { question: "What plumbing services do you provide?", answer: "Full-service plumbing including: emergency plumbing, drain cleaning, hydro-jetting, video camera inspection, water heater repair and installation, tankless water heater installation, sewer line repair and installation, gas line installation and repair, gas leak repair, backflow prevention, backflow certification, backflow preventer repair, water line repair and installation, boiler and furnace repair and installation, faucet and fixture repair, toilet repair and installation, and residential and commercial plumbing. Call (301) 679-5849." },
  { question: "Do you handle commercial plumbing?", answer: "Yes. Commercial plumbing for office buildings, retail, restaurants, healthcare facilities, government buildings, schools, and multi-family properties. MDOT MBE Cert 20-134 and CAGE Code 8HCF6 for government contracts. Call (301) 679-5849." },
  { question: "Do you handle government and municipal plumbing contracts?", answer: "Yes. Definitive Mechanical is MDOT MBE certified (Cert 20-134), SWaM certified, and holds CAGE Code 8HCF6 for federal procurement. We serve government agencies, municipalities, public schools, and federal facilities throughout Maryland, Virginia, and DC." },
  { question: "Do you offer financing for plumbing services?", answer: "Yes. Financing is available through Synchrony Financial for qualifying customers. 0% APR promotional periods available on approved credit. Ask about financing when you call (301) 679-5849 or visit our financing page." },
];

const FAQ_PRICING = [
  { question: "How does your pricing work?", answer: "We provide written pricing before any work begins. The price you agree to is the price you pay — no surprise charges at the end of the job. There are no overtime surcharges for after-hours, weekend, or holiday service." },
  { question: "Do you provide free estimates?", answer: "We provide written estimates for all non-emergency work. For emergency service, our dispatcher will give you a price range over the phone, and our plumber will provide written pricing on-site before beginning any work. Call (301) 679-5849." },
  { question: "Do you accept credit cards?", answer: "Yes. We accept all major credit cards, checks, and cash. Financing through Synchrony Financial is available for qualifying customers on larger projects." },
];

const FAQ_AREAS = [
  { question: "What areas do you serve?", answer: "Maryland: Prince George's County (home base in Largo), Montgomery County, Howard County, Anne Arundel County, Charles County. Washington DC. Northern Virginia: Fairfax County, Arlington County, City of Alexandria, Loudoun County, Prince William County. Call (301) 679-5849 to confirm service availability in your specific location." },
  { question: "Where is Definitive Mechanical located?", answer: "Our office is at 9701 Apollo Drive, Suite 100, Largo, MD 20774. We dispatch from Largo to serve the entire DC Metro area including Maryland, Washington DC, and Northern Virginia." },
  { question: "Do you serve Washington DC?", answer: "Yes. DC Master Plumber/Gasfitter #PL-2024-00065 authorizes all plumbing and gas work in Washington DC. We serve all DC neighborhoods including Capitol Hill, Georgetown, Shaw, Columbia Heights, Petworth, and all other DC areas." },
];

const FAQ_WATER_HEATER = [
  { question: "How do I know if my water heater needs to be replaced?", answer: "Signs you need a replacement: the unit is 10+ years old, you see rust-colored water, you hear rumbling or popping sounds, you have inconsistent hot water, or you notice water pooling around the base. A licensed plumber can assess whether repair or replacement is the better value. Call (301) 679-5849." },
  { question: "How long does water heater installation take?", answer: "A standard tank water heater replacement typically takes 2–3 hours. A tankless water heater installation takes 4–6 hours due to the gas line and venting requirements. We handle permit filing and inspection scheduling." },
  { question: "What is the difference between a tank and tankless water heater?", answer: "A tank water heater stores and continuously heats a fixed volume of water (40–80 gallons). A tankless unit heats water on demand with no storage tank, providing unlimited hot water and typically 20–30% better energy efficiency. Tankless units cost more upfront but last 20+ years vs. 10–12 years for tank units." },
  { question: "Do you offer financing for water heater installation?", answer: "Yes. Financing through Synchrony Financial is available for qualifying customers. Ask about current promotional rates when you call (301) 679-5849." },
];

const FAQ_DRAIN_SEWER = [
  { question: "What causes recurring drain clogs?", answer: "Recurring clogs are usually caused by grease and soap buildup (kitchen lines), hair and soap scum (bathroom lines), or root intrusion (main sewer line). A video camera inspection identifies the exact cause and location. Hydro-jetting clears buildup that snaking cannot remove." },
  { question: "What is hydro-jetting and when do I need it?", answer: "Hydro-jetting uses high-pressure water (up to 4,000 PSI) to scour the interior of drain and sewer pipes, removing grease, scale, mineral deposits, and root intrusion. It is recommended when snaking fails to clear a blockage, for recurring clogs, and as preventive maintenance for commercial kitchen lines." },
  { question: "What is a video camera inspection and what does it show?", answer: "A sewer camera inspection uses a waterproof HD camera on a flexible cable to inspect the interior of your drain and sewer lines. It shows blockages, root intrusion, pipe cracks, joint offsets, and pipe condition. We provide recorded footage and a written report. Call (301) 679-5849." },
  { question: "How do I know if I have a sewer line problem?", answer: "Warning signs include: multiple drains backing up simultaneously, sewage odor inside the home, gurgling sounds from toilets, wet spots or unusually green patches in the yard, and slow drains throughout the house. These indicate a main sewer line issue rather than an isolated clog." },
];

const FAQ_BACKFLOW = [
  { question: "What is backflow prevention and who needs it?", answer: "Backflow is the reversal of water flow that can pull contaminated water back into the clean supply. A backflow preventer is a mechanical device that stops this. Most commercial properties, restaurants, medical offices, buildings with irrigation systems, and multi-unit residential buildings are required to have one installed and tested annually." },
  { question: "How often must backflow preventers be tested?", answer: "Annual testing is required by WSSC (Prince George's and Montgomery County), DC Water (Washington DC), Fairfax Water, Loudoun Water, PWCSA, and other local authorities in our service area. Non-compliance results in notices of violation and potential fines." },
  { question: "What happens if I miss my annual backflow certification?", answer: "Your water authority issues a formal notice of non-compliance, followed by fines and ultimately potential water service interruption for continued non-compliance. We offer a compliance reminder service — contact us to enroll." },
];

const ALL_FAQS = [
  { category: "Licensing & Certifications", anchor: "licensing", items: FAQ_LICENSING },
  { category: "Emergency Plumbing", anchor: "emergency", items: FAQ_EMERGENCY },
  { category: "Services", anchor: "services", items: FAQ_SERVICES },
  { category: "Water Heaters", anchor: "water-heaters", items: FAQ_WATER_HEATER },
  { category: "Drain & Sewer", anchor: "drain-sewer", items: FAQ_DRAIN_SEWER },
  { category: "Backflow", anchor: "backflow", items: FAQ_BACKFLOW },
  { category: "Pricing & Payment", anchor: "pricing", items: FAQ_PRICING },
  { category: "Service Areas", anchor: "service-area", items: FAQ_AREAS },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [...FAQ_LICENSING, ...FAQ_EMERGENCY, ...FAQ_SERVICES, ...FAQ_PRICING, ...FAQ_AREAS].map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
        { "@type": "ListItem", "position": 2, "name": "FAQ" }
      ]
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>FAQ | Definitive Mechanical | Licensed Plumber MD VA DC</title>
        <meta name="description" content="Frequently asked questions about Definitive Mechanical — licensing, emergency plumbing, services, pricing, and service areas across Maryland, Virginia, and DC. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/faq/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "38vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>FREQUENTLY ASKED QUESTIONS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>Common Questions About Definitive Mechanical</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Answers to the most common questions about our licensing, emergency service, pricing, and service area. Can't find your answer? Call (301) 679-5849.
          </p>
          <div className="mt-6">
            <a href="tel:+13016795849" className="inline-flex items-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>
              <Phone size={20} /> CALL (301) 679-5849
            </a>
          </div>
        </div>
      </section>

      {/* Jump Nav Pills */}
      <div className="bg-white border-b border-[#C0D8F0] py-4 px-4 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {ALL_FAQS.map((section) => (
            <a
              key={section.anchor}
              href={`#${section.anchor}`}
              className="font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full border border-[var(--brand-navy)] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {section.category}
            </a>
          ))}
        </div>
      </div>

      {/* FAQ sections by category */}
      {ALL_FAQS.map((section, idx) => (
        <section key={section.category} id={section.anchor} className={idx % 2 === 0 ? "bg-white py-16" : "py-16"} style={idx % 2 !== 0 ? { backgroundColor: "var(--surface-1)" } : {}}>
          <div className="container max-w-3xl mx-auto">
            <SectionHeading eyebrow="FAQ" heading={section.category} />
            <div className="mt-8">
              <FAQAccordion items={section.items} schema={false} variant="light" />
            </div>
          </div>
        </section>
      ))}

      {/* Quick links */}
      <section className="bg-white py-12">
        <div className="container">
          <SectionHeading eyebrow="RELATED PAGES" heading="More information" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Licenses & Certifications", href: "/licenses-certifications/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Emergency Plumbing", href: "/emergency-plumbing/" },
              { label: "Financing", href: "/financing/" },
              { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
              { label: "Government Plumbing", href: "/government-municipal-plumbing/" },
              { label: "About Us", href: "/about/" },
              { label: "Contact", href: "/contact/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white border-l-4 p-4 rounded-md font-medium text-sm hover:opacity-80 transition-opacity block" style={{ borderColor: "var(--brand-cyan)", color: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Still have questions? Call us." subtext="A live dispatcher answers every call at (301) 679-5849 — 24 hours a day, 7 days a week." primaryBtn={{ text: "📞 CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "CONTACT US", href: "/contact/" }} variant="gradient" />
    </>
  );
}
