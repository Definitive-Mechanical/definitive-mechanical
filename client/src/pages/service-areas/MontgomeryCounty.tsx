import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ShieldCheck, Key } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const CITIES = [
  { name: "Rockville, MD", href: "/service-areas/maryland/montgomery-county/rockville-md/", note: "City of Rockville licensed" },
  { name: "Bethesda, MD", href: "/service-areas/maryland/montgomery-county/bethesda-md/", note: "Medical corridor & luxury" },
  { name: "Potomac, MD", href: "/service-areas/maryland/montgomery-county/potomac-md/", note: "Estate properties" },
  { name: "Chevy Chase, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-md/", note: "DC border community" },
  { name: "Cabin John, MD", href: "/service-areas/maryland/montgomery-county/cabin-john-md/", note: "Potomac River area" },
  { name: "Darnestown, MD", href: "/service-areas/maryland/montgomery-county/darnestown-md/", note: "Rural residential" },
  { name: "Travilah, MD", href: "/service-areas/maryland/montgomery-county/travilah-md/", note: "Luxury estates" },
  { name: "Somerset, MD", href: "/service-areas/maryland/montgomery-county/somerset-md/", note: "Enclave community" },
  { name: "Martins Additions, MD", href: "/service-areas/maryland/montgomery-county/martins-additions-md/", note: "Historic neighborhood" },
  { name: "Chevy Chase Village, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-village-md/", note: "Incorporated village" },
  { name: "Chevy Chase View, MD", href: "/service-areas/maryland/montgomery-county/chevy-chase-view-md/", note: "Residential enclave" },
  { name: "Brookmont, MD", href: "/service-areas/maryland/montgomery-county/brookmont-md/", note: "C&O Canal area" },
];

const FAQ_ITEMS = [
  { question: "What areas of Montgomery County do you serve?", answer: "We serve all of Montgomery County including Rockville, Bethesda, Potomac, Silver Spring, Gaithersburg, Germantown, Chevy Chase, Takoma Park, Kensington, Wheaton, Olney, Clarksburg, and all other Montgomery County communities. Call (301) 679-5849." },
  { question: "Are you licensed for plumbing in Montgomery County, including the City of Rockville?", answer: "Yes. We hold three credentials for full Montgomery County authority: City of Rockville #PLL-0002113, WSSC #73696, and Maryland State #96958. These cover all plumbing and gas work in incorporated and unincorporated Montgomery County." },
  { question: "Do you provide 24/7 emergency plumbing in Montgomery County?", answer: "Yes. Emergency plumbing available 24/7 across all of Montgomery County. All services have a trip fee. A live dispatcher answers every call at (301) 679-5849." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://definitivemechanical.com/service-areas/" }, { "@type": "ListItem", "position": 3, "name": "Maryland", "item": "https://definitivemechanical.com/service-areas/maryland/" }, { "@type": "ListItem", "position": 4, "name": "Montgomery County" }] },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

export default function MontgomeryCounty() {
  return (
    <>
      <Helmet>
        <title>Plumber in Montgomery County MD | Definitive Mechanical | (301) 679-5849</title>
        <meta name="description" content="Licensed plumbing services throughout Montgomery County MD. City of Rockville #PLL-0002113  WSSC #73696  MD #96958. 24/7 emergency. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/montgomery-county/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <section style={{ minHeight: "45vh", position: "relative", overflow: "hidden", background: "#111" }} className="flex items-center py-16">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="Plumbing services" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        </div>
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas/" }, { label: "Maryland", href: "/service-areas/maryland/" }, { label: "Montgomery County" }]}/>
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: 'var(--font-label)' }}>PLUMBING SERVICES  MONTGOMERY COUNTY, MD</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.0 }}>Plumber in Montgomery County, MD</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Definitive Mechanical is a Licensed Black Owned plumbing contractor providing licensed services throughout Montgomery County — from Rockville and Bethesda to Potomac, Silver Spring, Gaithersburg, and beyond. City of Rockville #PLL-0002113  WSSC #73696  MD State #96958. 24/7 emergency. Call (301) 679-5849.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+13016795849" className="flex items-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", fontFamily: 'var(--font-label)', fontSize: "18px" }}>
              <Phone size={20} /> CALL (301) 679-5849
            </a>
            <a href="/contact/" className="inline-flex items-center gap-2 font-bold rounded-md px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--brand-blue)] transition-colors" style={{ fontFamily: 'var(--font-label)', fontSize: "18px" }}>Request Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> City of Rockville #PLL-0002113</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> WSSC #73696</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MD #96958</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="COMMUNITIES SERVED" heading="Montgomery County cities and communities we serve" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {CITIES.map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 rounded-md p-4 hover:border-[var(--brand-blue)] hover:shadow-md transition-all group">
                <p className="font-bold text-sm group-hover:text-[var(--brand-blue)]" style={{ color: "var(--brand-blue)", fontFamily: 'var(--font-label)' }}>{city.name}</p>
                <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'var(--font-body)' }}>{city.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="CREDENTIALS" heading="Three licenses for full Montgomery County authority" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
            {[{ label: "City of Rockville", num: "#PLL-0002113" }, { label: "WSSC Master Plumber/Gasfitter", num: "#73696" }, { label: "Maryland State Master Plumber/Gasfitter", num: "#96958" }].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={24} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--brand-blue)", fontFamily: 'var(--font-body)' }}>{cred.label}</p>
                <p className="font-bold text-lg" style={{ color: "var(--brand-cyan)", fontFamily: 'var(--font-label)' }}>{cred.num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading="Plumbing service in Montgomery County — common questions" />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" /></div>
        </div>
      </section>

      <CTABanner heading="Need a plumber in Montgomery County?" subtext="City of Rockville #PLL-0002113  WSSC #73696  MD #96958  24/7 Emergency." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
