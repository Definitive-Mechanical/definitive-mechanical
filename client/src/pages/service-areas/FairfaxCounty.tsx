import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ShieldCheck, Key } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const CITIES = [
  { name: "McLean, VA", href: "/service-areas/northern-virginia/fairfax-county/mclean-va/", note: "Luxury estates" },
  { name: "Springfield, VA", href: "/service-areas/northern-virginia/fairfax-county/springfield-va/", note: "I-95/I-395 corridor" },
  { name: "Vienna, VA", href: "/service-areas/northern-virginia/fairfax-county/vienna-va/", note: "Town of Vienna" },
  { name: "Alexandria, VA", href: "/service-areas/northern-virginia/fairfax-county/alexandria-va/", note: "Historic city" },
  { name: "Great Falls, VA", href: "/service-areas/northern-virginia/fairfax-county/great-falls-va/", note: "Luxury estates" },
  { name: "Great Falls Crossing, VA", href: "/service-areas/northern-virginia/fairfax-county/great-falls-crossing-va/", note: "Planned community" },
  { name: "Dunn Loring, VA", href: "/service-areas/northern-virginia/fairfax-county/dunn-loring-va/", note: "Metro corridor" },
  { name: "Wolf Trap, VA", href: "/service-areas/northern-virginia/fairfax-county/wolf-trap-va/", note: "Arts district area" },
  { name: "South Run, VA", href: "/service-areas/northern-virginia/fairfax-county/south-run-va/", note: "Southern Fairfax" },
  { name: "Floris, VA", href: "/service-areas/northern-virginia/fairfax-county/floris-va/", note: "Dulles corridor" },
  { name: "Union Mill, VA", href: "/service-areas/northern-virginia/fairfax-county/union-mill-va/", note: "Centreville area" },
  { name: "Crosspointe, VA", href: "/service-areas/northern-virginia/fairfax-county/crosspointe-va/", note: "Planned community" },
  { name: "Difficult Run, VA", href: "/service-areas/northern-virginia/fairfax-county/difficult-run-va/", note: "Great Falls area" },
];

const FAQ_ITEMS = [
  { question: "Are you licensed for plumbing in Fairfax County, VA?", answer: "Yes. Virginia Class A Contractor #2705181061 and Virginia Master Plumber/Gasfitter #2710064209 authorize all plumbing and gas work throughout Fairfax County. Call (301) 679-5849." },
  { question: "Do you serve McLean, Springfield, Vienna, and all Fairfax County communities?", answer: "Yes. We serve McLean, Springfield, Vienna, Reston, Herndon, Fairfax City, Chantilly, Centreville, Burke, Annandale, Falls Church, Tysons, and all Fairfax County communities. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Fairfax County?", answer: "Yes. Emergency plumbing available 24/7 across all of Fairfax County. All services have a trip fee. A live dispatcher answers every call at (301) 679-5849." },
  { question: "Are you SWaM certified for government work in Fairfax County?", answer: "Yes. Virginia SWaM Certification supports government and procurement-eligible plumbing contracts throughout Fairfax County and the Commonwealth of Virginia." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://definitivemechanical.com/service-areas/" }, { "@type": "ListItem", "position": 3, "name": "Northern Virginia", "item": "https://definitivemechanical.com/service-areas/northern-virginia/" }, { "@type": "ListItem", "position": 4, "name": "Fairfax County" }] },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

export default function FairfaxCounty() {
  return (
    <>
      <Helmet>
        <title>Plumber in Fairfax County VA | Definitive Mechanical | (301) 679-5849</title>
        <meta name="description" content="Licensed plumbing services throughout Fairfax County VA. VA Class A #2705181061  VA Master Plumber #2710064209  SWaM Certified. 24/7 emergency. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <section style={{ minHeight: "45vh", position: "relative", overflow: "hidden", background: "#111" }} className="flex items-center py-16">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="Plumbing services" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        </div>
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas/" }, { label: "Northern Virginia", href: "/service-areas/northern-virginia/" }, { label: "Fairfax County" }]}/>
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: 'var(--font-label)' }}>PLUMBING SERVICES  FAIRFAX COUNTY, VA</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.0 }}>Plumber in Fairfax County, VA</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Definitive Mechanical is a Licensed Black Owned contractor providing licensed plumbing services throughout Fairfax County — McLean, Springfield, Vienna, Reston, Herndon, and all county communities. VA Class A #2705181061  VA Master Plumber #2710064209  SWaM Certified. 24/7 emergency. Call (301) 679-5849.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+13016795849" className="flex items-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", fontFamily: 'var(--font-label)', fontSize: "18px" }}>
              <Phone size={20} /> CALL (301) 679-5849
            </a>
            <a href="/contact/" className="inline-flex items-center gap-2 font-bold rounded-md px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--brand-blue)] transition-colors" style={{ fontFamily: 'var(--font-label)', fontSize: "18px" }}>Request Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> VA Class A #2705181061</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> VA Master Plumber #2710064209</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> SWaM Certified</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="COMMUNITIES SERVED" heading="Fairfax County cities and communities we serve" />
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
          <SectionHeading eyebrow="CREDENTIALS" heading="Virginia licenses for Fairfax County" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
            {[{ label: "Virginia Class A Contractor", num: "#2705181061" }, { label: "Virginia Master Plumber/Gasfitter", num: "#2710064209" }, { label: "Virginia SWaM Certification", num: "Certified" }].map((cred) => (
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
          <SectionHeading eyebrow="FAQ" heading="Plumbing service in Fairfax County — common questions" />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" /></div>
        </div>
      </section>

      <CTABanner heading="Need a plumber in Fairfax County?" subtext="VA Class A #2705181061  VA Master Plumber #2710064209  SWaM Certified  24/7 Emergency." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
