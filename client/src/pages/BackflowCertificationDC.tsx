import { Helmet } from "react-helmet-async";
import { ShieldCheck, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import BookNowButton from "@/components/ui/BookNowButton";

const FAQS = [
  { question: "Who requires backflow preventer certification in Washington DC?", answer: "DC Water (DC Water and Sewer Authority) requires annual backflow preventer testing and certification for all commercial, industrial, and multi-family properties in Washington DC. Testing must be performed by a DC Water-approved backflow tester and results submitted to DC Water." },
  { question: "Is Definitive Mechanical licensed to perform plumbing work in Washington DC?", answer: "Yes. Definitive Mechanical holds a DC Master Plumber License (DC License #PT2-0003033) and a DC Business License. All plumbing and backflow certification work in Washington DC is performed under these active DC licenses." },
  { question: "How often does a backflow preventer need to be tested in Washington DC?", answer: "DC Water requires annual testing for all backflow preventers on commercial and institutional properties. Testing must be performed by a DC Water-approved backflow tester and results submitted to DC Water. Non-compliance can result in water service interruption." },
  { question: "What types of backflow preventers does Definitive Mechanical test in DC?", answer: "We test and certify all types: Reduced Pressure Zone (RPZ), Double Check Valve (DCV), Pressure Vacuum Breakers (PVB), and Spill-Resistant PVBs (SVB). We also perform backflow preventer repair and replacement when testing reveals failures." },
  { question: "Does Definitive Mechanical serve all DC neighborhoods for backflow certification?", answer: "Yes. Definitive Mechanical serves all Washington DC neighborhoods and wards for backflow preventer certification, including Capitol Hill, Downtown, Georgetown, Dupont Circle, Adams Morgan, Columbia Heights, NoMa, Navy Yard, and all commercial corridors." },
];

export default function BackflowCertificationDC() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "LocalBusiness"],
        "name": "Backflow Certification Washington DC — Definitive Mechanical",
        "serviceType": "BackflowPreventerCertification",
        "areaServed": "Washington DC",
        "provider": { "name": "Definitive Mechanical", "telephone": "+13016795849" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Backflow Certification Washington DC | DC Master Plumber #PT2-0003033 | Definitive Mechanical</title>
        <meta name="description" content="DC Water-approved backflow preventer certification in Washington DC. DC Master Plumber #PT2-0003033. Serving all DC neighborhoods and commercial properties. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/backflow-certification-washington-dc/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)" }} className="py-20 md:py-28">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Backflow Prevention", href: "/backflow-prevention/" }, { label: "Backflow Certification Washington DC" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "#009EC6", fontFamily: "\'Barlow Condensed\', sans-serif" }}>Backflow Certification · Washington DC · DC Water · All Wards</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "\'Playfair Display\', serif" }}>
            Backflow Preventer Certification in Washington DC
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mb-8" style={{ fontFamily: "\'Barlow\', sans-serif", lineHeight: 1.7 }}>
            Definitive Mechanical holds DC Master Plumber License #PT2-0003033 and is approved by DC Water to perform backflow preventer testing and certification for commercial and institutional properties throughout Washington DC. We serve all DC wards and neighborhoods.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="SCHEDULE BACKFLOW TEST" href="/contact/" size="lg" />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider" style={{ color: "#009EC6", fontFamily: "\'Barlow Condensed\', sans-serif" }}>
            {["DC Master Plumber #PT2-0003033", "DC Water Approved", "MDOT MBE Cert 20-134", "Annual Testing Available"].map(t => (
              <span key={t} className="flex items-center gap-1"><ShieldCheck size={12} />{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="DC Water Requirement" title="What is DC Water's backflow preventer certification requirement?" />
          <div className="mt-8 space-y-4">
            <p className="text-base" style={{ color: "#484848", fontFamily: "\'Barlow\', sans-serif", lineHeight: 1.7 }}>
              DC Water (DC Water and Sewer Authority) requires annual backflow preventer testing and certification for all commercial, industrial, and multi-family properties in Washington DC. Testing must be performed by a DC Water-approved backflow tester and results submitted directly to DC Water.
            </p>
            <p className="text-base" style={{ color: "#484848", fontFamily: "\'Barlow\', sans-serif", lineHeight: 1.7 }}>
              Washington DC has a high concentration of commercial properties, embassies, government buildings, hotels, restaurants, and multi-family residential buildings — all subject to DC Water's annual backflow certification requirement. Definitive Mechanical is licensed and approved to serve all of these property types.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "#F0F0F0" }}>
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="DC Neighborhoods Served" title="Washington DC neighborhoods and commercial corridors we serve" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Capitol Hill", "Downtown DC", "Georgetown", "Dupont Circle", "Adams Morgan", "Columbia Heights", "NoMa", "Navy Yard", "Southwest Waterfront", "Foggy Bottom", "Woodley Park", "Tenleytown", "Petworth", "Brookland", "Anacostia", "Congress Heights"].map(n => (
              <div key={n} className="p-3 bg-white rounded text-center text-sm font-medium" style={{ color: "#003060", fontFamily: "\'Barlow\', sans-serif" }}>{n}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Services" title="Backflow preventer types we test and certify in Washington DC" />
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              { type: "Reduced Pressure Zone (RPZ)", desc: "Required for high-hazard applications including irrigation, fire suppression, and industrial processes." },
              { type: "Double Check Valve (DCV)", desc: "Used for low-to-medium hazard applications including commercial buildings and multi-family properties." },
              { type: "Pressure Vacuum Breaker (PVB)", desc: "Common in irrigation systems. Annual testing required by DC Water." },
              { type: "Backflow Preventer Repair", desc: "When testing reveals a failed assembly, we perform same-day repair or replacement to restore compliance." },
            ].map(s => (
              <div key={s.type} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "#F0F0F0" }}>
                <CheckCircle size={18} style={{ color: "#009EC6", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#003060", fontFamily: "\'Barlow Condensed\', sans-serif", textTransform: "uppercase" }}>{s.type}</h3>
                  <p className="text-sm" style={{ color: "#484848", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Backflow Certification Washington DC — Frequently Asked Questions" />
          <div className="mt-8"><FAQAccordion items={FAQS} /></div>
        </div>
      </section>

      <section className="py-10" style={{ background: "#F0F0F0" }}>
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#003060", fontFamily: "\'Barlow Condensed\', sans-serif" }}>Related Pages</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Backflow Prevention", href: "/backflow-prevention/" },
              { label: "Backflow Certification Maryland", href: "/backflow-certification-maryland/" },
              { label: "Backflow Certification Virginia", href: "/backflow-certification-virginia/" },
              { label: "Backflow Preventer Repair", href: "/backflow-preventer-repair/" },
              { label: "Washington DC Service Area", href: "/service-areas/washington-dc/" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-sm px-4 py-2 rounded border font-medium hover:bg-white transition-colors" style={{ color: "#003060", borderColor: "#003060", fontFamily: "\'Barlow\', sans-serif" }}>{l.label}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "#003060" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "\'Playfair Display\', serif" }}>Schedule your DC backflow certification today</h2>
          <p className="text-white/80 text-lg mb-2" style={{ fontFamily: "\'Barlow\', sans-serif" }}>📞 Call (301) 679-5849</p>
          <p className="text-white/60 text-sm mb-8" style={{ fontFamily: "\'Barlow\', sans-serif" }}>DC Master Plumber #PT2-0003033 | DC Water Approved | MDOT MBE Cert 20-134</p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="SCHEDULE BACKFLOW TEST" href="/contact/" size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
