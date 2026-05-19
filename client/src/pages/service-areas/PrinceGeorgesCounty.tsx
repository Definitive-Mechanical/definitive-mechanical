import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ShieldCheck, MapPin, Key } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const CITIES = [
  { name: "Largo, MD", href: "/service-areas/maryland/prince-georges-county/largo-md/", note: "Our home base" },
  { name: "Bowie, MD", href: "/service-areas/maryland/prince-georges-county/bowie-md/", note: "Belair neighborhoods" },
  { name: "Fort Washington, MD", href: "/service-areas/maryland/prince-georges-county/fort-washington-md/", note: "Waterfront communities" },
  { name: "Hyattsville, MD", href: "/service-areas/maryland/", note: "Arts District & historic" },
  { name: "College Park, MD", href: "/service-areas/maryland/", note: "University area" },
  { name: "Laurel, MD", href: "/service-areas/maryland/", note: "I-95 corridor" },
  { name: "Greenbelt, MD", href: "/service-areas/maryland/", note: "NASA/USDA corridor" },
  { name: "Upper Marlboro, MD", href: "/service-areas/maryland/", note: "County seat" },
  { name: "Oxon Hill, MD", href: "/service-areas/maryland/", note: "National Harbor area" },
  { name: "Landover, MD", href: "/service-areas/maryland/", note: "Central PG County" },
  { name: "Capitol Heights, MD", href: "/service-areas/maryland/", note: "DC border" },
  { name: "Suitland, MD", href: "/service-areas/maryland/", note: "Federal facilities" },
];

const SERVICES = [
  { name: "Emergency Plumbing", href: "/emergency-plumbing/" },
  { name: "Drain Cleaning", href: "/drain-cleaning/" },
  { name: "Water Heater Repair", href: "/water-heater-repair/" },
  { name: "Water Heater Installation", href: "/water-heater-installation/" },
  { name: "Sewer Line Repair", href: "/sewer-line-repair/" },
  { name: "Sewer Line Installation", href: "/sewer-line-installation/" },
  { name: "Gas Line Repair", href: "/gas-line-repair/" },
  { name: "Gas Line Installation", href: "/gas-line-installation/" },
  { name: "Backflow Prevention", href: "/backflow-prevention/" },
  { name: "Backflow Certification", href: "/backflow-certification/" },
  { name: "Hydro-Jetting", href: "/hydro-jetting/" },
  { name: "Video Camera Inspection", href: "/video-camera-inspection/" },
];

const FAQ_ITEMS = [
  { question: "What areas of Prince George's County do you serve?", answer: "We serve all of Prince George's County including Largo (our home base), Bowie, Fort Washington, Hyattsville, College Park, Laurel, Greenbelt, Upper Marlboro, Oxon Hill, Landover, Capitol Heights, Suitland, and all other PG County communities. Call (301) 679-5849." },
  { question: "Are you licensed for plumbing in Prince George's County?", answer: "Yes. WSSC Master Plumber/Gasfitter #73696 and Maryland State Master Plumber/Gasfitter #96958 authorize all plumbing and gas work throughout Prince George's County. We are based in Largo, MD." },
  { question: "Do you provide 24/7 emergency plumbing in Prince George's County?", answer: "Yes. Emergency plumbing available 24/7 across all of Prince George's County. No overtime surcharge. A live dispatcher answers every call at (301) 679-5849." },
  { question: "Are you MDOT MBE certified for government work in Prince George's County?", answer: "Yes. MDOT MBE Cert 20-134 and CAGE Code 8HCF6 support government and procurement-eligible plumbing contracts throughout Prince George's County and the state of Maryland." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://definitivemechanical.com/service-areas/" }, { "@type": "ListItem", "position": 3, "name": "Maryland", "item": "https://definitivemechanical.com/service-areas/maryland/" }, { "@type": "ListItem", "position": 4, "name": "Prince George's County" }] },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

export default function PrinceGeorgesCounty() {
  return (
    <>
      <Helmet>
        <title>Plumber in Prince George's County MD | Definitive Mechanical | (301) 679-5849</title>
        <meta name="description" content={`Licensed plumbing services throughout Prince George's County MD. Based in Largo. WSSC #73696 · MD #96958 · MDOT MBE Cert 20-134. 24/7 emergency. Call (301) 679-5849.`} />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "45vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas/" }, { label: "Maryland", href: "/service-areas/maryland/" }, { label: "Prince George's County" }]}/>
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "#009EC6", fontFamily: "'Barlow Condensed', sans-serif" }}>PLUMBING SERVICES · PRINCE GEORGE'S COUNTY, MD · HOME BASE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>Plumber in Prince George's County, MD</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical is based in Largo, Prince George's County — providing licensed plumbing, gas, and mechanical services throughout PG County. WSSC #73696 · MD State #96958 · MDOT MBE Cert 20-134. 24/7 emergency service. Call (301) 679-5849.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+13016795849" className="flex items-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#009EC6", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>
              <Phone size={20} /> CALL (301) 679-5849
            </a>
            <a href="/contact/" className="inline-flex items-center gap-2 font-bold rounded-md px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#003060] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>Request Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><MapPin size={14} /> Based in Largo, MD</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> WSSC #73696</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MD #96958</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MDOT MBE Cert 20-134</span>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="COMMUNITIES SERVED" heading={`Prince George's County cities and communities we serve`} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {CITIES.map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 rounded-md p-4 hover:border-cyan-400 hover:shadow-md transition-all group">
                <p className="font-bold text-sm group-hover:text-cyan-600" style={{ color: "#003060", fontFamily: "'Barlow Condensed', sans-serif" }}>{city.name}</p>
                <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Barlow', sans-serif" }}>{city.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "#F0F0F0" }} className="py-16">
        <div className="container">
          <SectionHeading eyebrow="SERVICES" heading={`Plumbing services available throughout Prince George's County`} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {SERVICES.map((svc) => (
              <Link key={svc.name} href={svc.href} className="bg-white border-l-4 p-3 rounded-md font-medium text-sm hover:opacity-80 transition-opacity block" style={{ borderColor: "#009EC6", color: "#003060", fontFamily: "'Barlow', sans-serif" }}>
                {svc.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ backgroundColor: "#003060" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="CREDENTIALS" heading={`Licenses and certifications for Prince George's County`} light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
            {[{ label: "WSSC Master Plumber/Gasfitter", num: "#73696" }, { label: "Maryland State Master Plumber/Gasfitter", num: "#96958" }, { label: "MDOT MBE Certification", num: "Cert 20-134" }].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={24} style={{ color: "#009EC6" }} className="mb-2" />
                <p className="text-xs font-semibold mb-1" style={{ color: "#003060", fontFamily: "'Barlow', sans-serif" }}>{cred.label}</p>
                <p className="font-bold text-lg" style={{ color: "#009EC6", fontFamily: "'Barlow Condensed', sans-serif" }}>{cred.num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading={`Plumbing service in Prince George's County — common questions`} />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} /></div>
        </div>
      </section>

      <CTABanner heading={`Need a plumber in Prince George's County?`} subtext="Based in Largo, MD. WSSC #73696 · MD #96958 · MDOT MBE Cert 20-134 · 24/7 Emergency." primaryBtn={{ text: "📞 CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
