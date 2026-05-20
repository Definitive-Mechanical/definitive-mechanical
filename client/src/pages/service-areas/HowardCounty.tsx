import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ShieldCheck, Key } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const CITIES = [
  { name: "Ellicott City, MD", href: "/service-areas/maryland/howard-county/ellicott-city-md/", note: "Historic district & new development" },
  { name: "Clarksville, MD", href: "/service-areas/maryland/howard-county/clarksville-md/", note: "Luxury residential" },
  { name: "Fulton, MD", href: "/service-areas/maryland/howard-county/fulton-md/", note: "New construction" },
  { name: "Glenelg, MD", href: "/service-areas/maryland/howard-county/glenelg-md/", note: "Rural western Howard" },
  { name: "Highland, MD", href: "/service-areas/maryland/howard-county/highland-md/", note: "Equestrian community" },
  { name: "Scaggsville, MD", href: "/service-areas/maryland/howard-county/scaggsville-md/", note: "Laurel area" },
  { name: "West Friendship, MD", href: "/service-areas/maryland/howard-county/west-friendship-md/", note: "Rural residential" },
];

const FAQ_ITEMS = [
  { question: "Are you licensed for plumbing in Howard County, MD?", answer: "Yes. Howard County Master Plumber/Gasfitter #20020096958, WSSC #73696, and Maryland State #96958 authorize all plumbing and gas work throughout Howard County. Call (301) 679-5849." },
  { question: "Do you serve all Howard County communities?", answer: "Yes. We serve Ellicott City, Columbia, Clarksville, Fulton, Jessup, Savage, Elkridge, and all Howard County communities. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Howard County?", answer: "Yes. Emergency plumbing available 24/7 across all of Howard County. No overtime surcharge. A live dispatcher answers every call at (301) 679-5849." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://definitivemechanical.com/service-areas/" }, { "@type": "ListItem", "position": 3, "name": "Maryland", "item": "https://definitivemechanical.com/service-areas/maryland/" }, { "@type": "ListItem", "position": 4, "name": "Howard County" }] },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

export default function HowardCounty() {
  return (
    <>
      <Helmet>
        <title>Plumber in Howard County MD | Definitive Mechanical | (301) 679-5849</title>
        <meta name="description" content="Licensed plumbing services throughout Howard County MD. Howard County #20020096958  WSSC #73696  MD #96958. 24/7 emergency. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/howard-county/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "45vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas/" }, { label: "Maryland", href: "/service-areas/maryland/" }, { label: "Howard County" }]}/>
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>PLUMBING SERVICES  HOWARD COUNTY, MD</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.0 }}>Plumber in Howard County, MD</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical provides licensed plumbing services throughout Howard County — Ellicott City, Columbia, Clarksville, Fulton, and all Howard County communities. Howard County #20020096958  WSSC #73696  MD State #96958. 24/7 emergency. Call (301) 679-5849.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+13016795849" className="flex items-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>
              <Phone size={20} /> CALL (301) 679-5849
            </a>
            <a href="/contact/" className="inline-flex items-center gap-2 font-bold rounded-md px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy)] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>Request Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> Howard County #20020096958</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> WSSC #73696</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MD #96958</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="COMMUNITIES SERVED" heading="Howard County cities and communities we serve" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {CITIES.map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 rounded-md p-4 hover:border-cyan-400 hover:shadow-md transition-all group">
                <p className="font-bold text-sm group-hover:text-cyan-600" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>{city.name}</p>
                <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Barlow', sans-serif" }}>{city.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--brand-navy)" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="CREDENTIALS" heading="Licensed for Howard County plumbing" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
            {[{ label: "Howard County", num: "#20020096958" }, { label: "WSSC Master Plumber/Gasfitter", num: "#73696" }, { label: "Maryland State", num: "#96958" }].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={24} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{cred.label}</p>
                <p className="font-bold text-lg" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>{cred.num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading="Plumbing service in Howard County — common questions" />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" /></div>
        </div>
      </section>

      <CTABanner heading="Need a plumber in Howard County?" subtext="Howard County #20020096958  WSSC #73696  MD #96958  24/7 Emergency." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
