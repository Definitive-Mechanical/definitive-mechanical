import { Helmet } from "react-helmet-async";
import { ShieldCheck, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import BookNowButton from "@/components/ui/BookNowButton";

const FAQS = [
  { question: "Who requires backflow preventer certification in Maryland?", answer: "WSSC Water requires annual backflow preventer testing and certification for all commercial, industrial, and multi-family properties in Prince George's County and Montgomery County. Anne Arundel, Howard, and Charles Counties have similar requirements for commercial properties." },
  { question: "What is Definitive Mechanical's WSSC backflow tester license number?", answer: "Definitive Mechanical holds WSSC Backflow Tester License #73696. This credential is required to perform and certify backflow preventer tests on WSSC-served properties in Prince George's County and Montgomery County." },
  { question: "How often does a backflow preventer need to be tested in Maryland?", answer: "WSSC requires annual testing for all backflow preventers on commercial and institutional properties. Testing must be performed by a WSSC-licensed backflow tester and results submitted to WSSC. Failure to maintain current certification can result in water service interruption." },
  { question: "What types of backflow preventers does Definitive Mechanical test and certify?", answer: "We test and certify all types: Reduced Pressure Zone (RPZ), Double Check Valve (DCV), Pressure Vacuum Breakers (PVB), Spill-Resistant PVBs (SVB), and Atmospheric Vacuum Breakers (AVB). We also perform backflow preventer repair and replacement when testing reveals failures." },
  { question: "Does Definitive Mechanical serve both Prince George's County and Montgomery County?", answer: "Yes. Definitive Mechanical is based in Largo (Prince George's County) and serves both PG County and Montgomery County — the two WSSC service territories. We also serve Anne Arundel, Howard, Charles County, and other Maryland jurisdictions." },
];

const COUNTIES = [
  { name: "Prince George's County", authority: "WSSC Water", req: "Annual testing. WSSC License #73696." },
  { name: "Montgomery County", authority: "WSSC Water", req: "Annual testing. WSSC License #73696." },
  { name: "Anne Arundel County", authority: "Anne Arundel County DPW", req: "Annual testing for commercial. MD Master Plumber #96958." },
  { name: "Howard County", authority: "Howard County DPW", req: "Annual testing for commercial. MD Master Plumber #96958." },
  { name: "Charles County", authority: "Charles County Utilities", req: "Annual testing for commercial. MD Master Plumber #96958." },
];

export default function BackflowCertificationMaryland() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "LocalBusiness"],
        "name": "Backflow Certification Maryland — Definitive Mechanical",
        "serviceType": "BackflowPreventerCertification",
        "areaServed": "Maryland",
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
        <title>Backflow Certification Maryland | WSSC License #73696 | Definitive Mechanical</title>
        <meta name="description" content="WSSC-licensed backflow preventer certification in Maryland. WSSC Backflow Tester #73696. Serving PG County, Montgomery County, Anne Arundel, Howard, and Charles County. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/backflow-certification-maryland/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)" }} className="py-20 md:py-28">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Backflow Prevention", href: "/backflow-prevention/" }, { label: "Backflow Certification Maryland" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>Backflow Certification  Maryland  WSSC  PG County  Montgomery County</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Backflow Preventer Certification in Maryland
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mb-8" style={{ fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
            Definitive Mechanical holds WSSC Backflow Tester License #73696 — required to test and certify backflow preventers on commercial and institutional properties in Prince George's County and Montgomery County. We also serve Anne Arundel, Howard, Charles County, and other Maryland jurisdictions.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="SCHEDULE BACKFLOW TEST" href="/contact/" size="lg" />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>
            {["WSSC Backflow Tester #73696", "MD Master Plumber #96958", "MDOT MBE Cert 20-134", "Annual Testing Available"].map(t => (
              <span key={t} className="flex items-center gap-1"><ShieldCheck size={12} />{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="WSSC Requirement" heading="What is WSSC's backflow preventer certification requirement?" />
          <div className="mt-8 space-y-4">
            <p className="text-base" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              WSSC Water serves Prince George's County and Montgomery County. WSSC requires annual backflow preventer testing and certification for all commercial, industrial, and multi-family properties. Testing must be performed by a WSSC-licensed backflow tester and results submitted to WSSC. Failure to maintain current certification can result in water service interruption.
            </p>
            <p className="text-base" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              Definitive Mechanical holds WSSC Backflow Tester License #73696 and submits test results directly to WSSC on behalf of property owners and facility managers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Maryland Coverage" heading="Which Maryland counties does Definitive Mechanical serve for backflow certification?" />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
              <thead>
                <tr style={{ background: "var(--brand-navy)", color: "white" }}>
                  <th className="text-left p-3 font-bold uppercase tracking-wide text-xs">County</th>
                  <th className="text-left p-3 font-bold uppercase tracking-wide text-xs">Authority</th>
                  <th className="text-left p-3 font-bold uppercase tracking-wide text-xs">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {COUNTIES.map((c, i) => (
                  <tr key={c.name} style={{ background: i % 2 === 0 ? "white" : "#F8F8F8" }}>
                    <td className="p-3 font-bold" style={{ color: "var(--brand-navy)" }}>{c.name}</td>
                    <td className="p-3" style={{ color: "var(--ink-2)" }}>{c.authority}</td>
                    <td className="p-3" style={{ color: "var(--ink-2)" }}>{c.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Services" heading="Backflow preventer types we test and certify in Maryland" />
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              { type: "Reduced Pressure Zone (RPZ)", desc: "Required for high-hazard applications including irrigation, fire suppression, and industrial processes." },
              { type: "Double Check Valve (DCV)", desc: "Used for low-to-medium hazard applications including commercial buildings and multi-family properties." },
              { type: "Pressure Vacuum Breaker (PVB)", desc: "Common in irrigation systems. Annual testing required by WSSC for all PVB assemblies." },
              { type: "Spill-Resistant PVB (SVB)", desc: "Indoor-rated vacuum breaker for applications where spillage is a concern." },
              { type: "Atmospheric Vacuum Breaker (AVB)", desc: "Simple non-testable device; replacement recommended when testing reveals failure." },
              { type: "Backflow Preventer Repair", desc: "When testing reveals a failed assembly, we perform same-day repair or replacement to restore compliance." },
            ].map(s => (
              <div key={s.type} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "var(--surface-1)" }}>
                <CheckCircle size={18} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}>{s.type}</h3>
                  <p className="text-sm" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10" style={{ background: "#FFF8E1" }}>
        <div className="container max-w-3xl">
          <div className="flex items-start gap-4">
            <AlertTriangle size={28} style={{ color: "#E65100", flexShrink: 0, marginTop: 2 }} />
            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#E65100", fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}>Non-Compliance Risk</h3>
              <p className="text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
                WSSC can interrupt water service to properties with overdue backflow certifications. If you have received a WSSC non-compliance notice or your annual certification is past due, call (301) 679-5849 immediately. We prioritize compliance calls and can typically schedule within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" heading="Backflow Certification Maryland — Frequently Asked Questions" />
          <div className="mt-8"><FAQAccordion items={FAQS} variant="light" /></div>
        </div>
      </section>

      <section className="py-10" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>Related Pages</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Backflow Prevention", href: "/backflow-prevention/" },
              { label: "Backflow Certification DC", href: "/backflow-certification-washington-dc/" },
              { label: "Backflow Certification Virginia", href: "/backflow-certification-virginia/" },
              { label: "Backflow Preventer Repair", href: "/backflow-preventer-repair/" },
              { label: "Commercial Plumber Maryland", href: "/commercial-plumber-maryland/" },
              { label: "Licenses & Certifications", href: "/licenses-certifications/" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-sm px-4 py-2 rounded border font-medium hover:bg-white transition-colors" style={{ color: "var(--brand-navy)", borderColor: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{l.label}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--brand-navy)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>Schedule your Maryland backflow certification today</h2>
          <p className="text-white/80 text-lg mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}> Call (301) 679-5849</p>
          <p className="text-white/60 text-sm mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>WSSC Backflow Tester #73696 | MD Master Plumber #96958 | MDOT MBE Cert 20-134</p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="SCHEDULE BACKFLOW TEST" href="/contact/" size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
