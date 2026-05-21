import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ShieldCheck, Key } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const NEIGHBORHOODS = [
  { name: "Georgetown, DC", href: "/service-areas/washington-dc/georgetown", note: "Historic rowhouses & Federal-era properties" },
  { name: "Capitol Hill, DC", href: "/service-areas/washington-dc/capitol-hill", note: "Victorian rowhouses, Hill East" },
  { name: "Dupont Circle, DC", href: "/service-areas/washington-dc/dupont-circle", note: "Embassy row, pre-war apartments" },
  { name: "Navy Yard, DC", href: "/service-areas/washington-dc/navy-yard", note: "New construction, waterfront condos" },
  { name: "NoMa, DC", href: "/service-areas/washington-dc/noma", note: "Mixed-use, new development corridor" },
  { name: "Washington DC (Main)", href: "/service-areas/washington-dc/washington-dc", note: "Full DC service area overview" },
];

const FAQ_ITEMS = [
  {
    question: "Are you licensed for plumbing in DC neighborhoods like Georgetown and Capitol Hill?",
    answer: "Yes. We hold DC Master Plumber/Gasfitter License #PGM1002236 issued by DCRA — the credential required for all licensed plumbing work in the District. This covers every DC neighborhood. Call (301) 679-5849.",
  },
  {
    question: "Do you work on historic properties in Georgetown, Dupont Circle, and Capitol Hill?",
    answer: "Yes. We have extensive experience with pre-war and 19th-century masonry construction — clay sewer laterals, lead and galvanized supply lines, original iron gas distribution, and multi-era plumbing systems common in DC's historic neighborhoods.",
  },
  {
    question: "Do you provide 24/7 emergency plumbing in DC neighborhoods?",
    answer: "Yes. Emergency plumbing is available 24/7 in Georgetown, Capitol Hill, Dupont Circle, Navy Yard, NoMa, and all DC neighborhoods. All services have a trip fee. Call (301) 679-5849.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://definitivemechanical.com/" },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://definitivemechanical.com/service-areas/" },
        { "@type": "ListItem", position: 3, name: "Washington DC", item: "https://definitivemechanical.com/service-areas/washington-dc/" },
        { "@type": "ListItem", position: 4, name: "DC Neighborhoods" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function DCNeighborhoodsHub() {
  return (
    <>
      <Helmet>
        <title>Plumber in Washington DC Neighborhoods | Georgetown, Capitol Hill & More | Definitive Mechanical</title>
        <meta
          name="description"
          content="Licensed plumber serving Georgetown, Capitol Hill, Dupont Circle, Navy Yard, NoMa, and all DC neighborhoods. DC License #PGM1002236. 24/7 emergency. Call (301) 679-5849."
        />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/washington-dc/neighborhoods/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "45vh" }}
        className="flex items-center py-16"
      >
        <div className="container text-center">
          <BreadcrumbList
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Washington DC", href: "/service-areas/washington-dc/" },
              { label: "DC Neighborhoods" },
            ]}
          />
          <p
            className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold"
            style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            LICENSED PLUMBING — DC NEIGHBORHOODS
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1.0 }}
          >
            Plumber in Washington DC Neighborhoods
          </h1>
          <p
            className="text-white/85 text-lg max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Definitive Mechanical serves Georgetown, Capitol Hill, Dupont Circle, Navy Yard, NoMa, and every DC neighborhood. Expert plumbing for historic rowhouses, pre-war apartments, and new construction. DC Master Plumber/Gasfitter License #PGM1002236. 24/7 emergency. Call (301) 679-5849.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13016795849"
              className="flex items-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}
            >
              <Phone size={20} /> CALL (301) 679-5849
            </a>
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 font-bold rounded-md px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy)] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}
            >
              Request Service
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> DC License #PGM1002236</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MDOT MBE Cert 20-134</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> 24/7 Emergency</span>
          </div>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="NEIGHBORHOODS SERVED" heading="Washington DC neighborhoods we serve" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {NEIGHBORHOODS.map((n) => (
              <Link
                key={n.name}
                href={n.href}
                className="bg-white border border-gray-200 rounded-md p-4 hover:border-cyan-400 hover:shadow-md transition-all group"
              >
                <p
                  className="font-bold text-sm group-hover:text-cyan-600"
                  style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {n.name}
                </p>
                <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  {n.note}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ backgroundColor: "var(--brand-navy)" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="CREDENTIALS" heading="DC-licensed for every neighborhood" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
            {[
              { label: "DC Master Plumber/Gasfitter (DCRA)", num: "#PGM1002236" },
              { label: "MDOT MBE Certified", num: "Cert 20-134" },
              { label: "CAGE Code", num: "8HCF6" },
            ].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={24} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>
                  {cred.label}
                </p>
                <p className="font-bold text-lg" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {cred.num}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading="Plumbing in DC neighborhoods — common questions" />
          <div className="mt-8">
            <FAQAccordion items={FAQ_ITEMS} schema={true} variant="light" />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a plumber in a DC neighborhood?"
        subtext="DC License #PGM1002236  MDOT MBE Cert 20-134  24/7 Emergency. Georgetown, Capitol Hill, Dupont Circle & more."
        primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact/" }}
        variant="gradient"
      />
    </>
  );
}
