import { Helmet } from "react-helmet-async";
import { ShieldCheck, CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import BookNowButton from "@/components/ui/BookNowButton";
import CTABanner from "@/components/ui/CTABanner";

const FAQS = [
  { question: "Who requires backflow preventer certification in Northern Virginia?", answer: "Fairfax Water, Arlington County DES, Loudoun Water, Prince William County Service Authority, and Alexandria Renew Enterprises all require annual backflow preventer testing and certification for commercial and institutional properties in their service territories." },
  { question: "Is Definitive Mechanical licensed to perform plumbing work in Virginia?", answer: "Yes. Definitive Mechanical holds VA Master Plumber/Gasfitter License #2710064209 and VA Class A Contractor License #2705181061, both issued by DPOR and valid statewide." },
  { question: "How often does a backflow preventer need to be tested in Virginia?", answer: "Most Virginia water authorities require annual testing for commercial and institutional properties. Testing must be performed by a licensed backflow tester and results submitted to the applicable water authority. Non-compliance can result in water service interruption." },
  { question: "What types of backflow preventers does Definitive Mechanical test in Virginia?", answer: "We test and certify all types: Reduced Pressure Zone (RPZ), Double Check Valve (DCV), Pressure Vacuum Breakers (PVB), and Spill-Resistant PVBs (SVB). We also perform backflow preventer repair and replacement when testing reveals failures." },
  { question: "Does Definitive Mechanical serve Fairfax County, Arlington County, and Loudoun County?", answer: "Yes. Definitive Mechanical serves all Northern Virginia jurisdictions including Fairfax County, Arlington County, Loudoun County, Prince William County, and independent cities including Alexandria, Manassas, and Fairfax City." },
];

const VA_AUTHORITIES = [
  { county: "Fairfax County", authority: "Fairfax Water", req: "Annual testing for commercial properties." },
  { county: "Arlington County", authority: "Arlington County DES", req: "Annual testing for commercial properties." },
  { county: "Loudoun County", authority: "Loudoun Water", req: "Annual testing for commercial properties." },
  { county: "Prince William County", authority: "PWCSA", req: "Annual testing for commercial properties." },
  { county: "City of Alexandria", authority: "Alexandria Renew", req: "Annual testing for commercial properties." },
  { county: "City of Manassas", authority: "City of Manassas", req: "Annual testing for commercial properties." },
];

export default function BackflowCertificationVirginia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "LocalBusiness"],
        "name": "Backflow Certification Virginia — Definitive Mechanical",
        "serviceType": "BackflowPreventerCertification",
        "areaServed": "Northern Virginia",
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
        <title>Backflow Certification Virginia | VA Master Plumber #2710064209 | Definitive Mechanical</title>
        <meta name="description" content="Licensed backflow preventer certification in Northern Virginia. VA Master Plumber #2710064209, SWaM Cert 815255. Serving Fairfax, Arlington, Loudoun, Prince William, and Alexandria. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/backflow-certification-virginia/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)" }} className="py-20 md:py-28">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Backflow Prevention", href: "/backflow-prevention/" }, { label: "Backflow Certification Virginia" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "\'Barlow Condensed\', sans-serif" }}>Backflow Certification  Northern Virginia  Fairfax  Arlington  Loudoun  Prince William</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.0 }}>
            Backflow Preventer Certification in Northern Virginia
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mb-8" style={{ fontFamily: "\'Barlow\', sans-serif", lineHeight: 1.7 }}>
            Definitive Mechanical holds VA Master Plumber/Gasfitter License #2710064209 and VA Class A Contractor License #2705181061 — statewide credentials covering all Northern Virginia jurisdictions. We perform annual backflow preventer testing and certification for commercial and institutional properties throughout Fairfax County, Arlington County, Loudoun County, Prince William County, and independent cities.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="SCHEDULE BACKFLOW TEST" href="/contact/" size="lg" />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--brand-cyan)", fontFamily: "\'Barlow Condensed\', sans-serif" }}>
            {["VA Master Plumber #2710064209", "VA Class A Contractor #2705181061", "SWaM Cert 815255", "Annual Testing Available"].map(t => (
              <span key={t} className="flex items-center gap-1"><ShieldCheck size={12} />{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Virginia Requirements" heading="Which Virginia water authorities require annual backflow certification?" />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm" style={{ fontFamily: "\'Barlow\', sans-serif" }}>
              <thead>
                <tr style={{ background: "var(--brand-navy)", color: "white" }}>
                  <th className="text-left p-3 font-bold uppercase tracking-wide text-xs">Jurisdiction</th>
                  <th className="text-left p-3 font-bold uppercase tracking-wide text-xs">Water Authority</th>
                  <th className="text-left p-3 font-bold uppercase tracking-wide text-xs">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {VA_AUTHORITIES.map((a, i) => (
                  <tr key={a.county} style={{ background: i % 2 === 0 ? "white" : "#F8F8F8" }}>
                    <td className="p-3 font-bold" style={{ color: "var(--brand-navy)" }}>{a.county}</td>
                    <td className="p-3" style={{ color: "var(--ink-2)" }}>{a.authority}</td>
                    <td className="p-3" style={{ color: "var(--ink-2)" }}>{a.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Services" heading="Backflow preventer types we test and certify in Virginia" />
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              { type: "Reduced Pressure Zone (RPZ)", desc: "Required for high-hazard applications including irrigation, fire suppression, and industrial processes." },
              { type: "Double Check Valve (DCV)", desc: "Used for low-to-medium hazard applications including commercial buildings and multi-family properties." },
              { type: "Pressure Vacuum Breaker (PVB)", desc: "Common in irrigation systems. Annual testing required by all Virginia water authorities." },
              { type: "Backflow Preventer Repair", desc: "When testing reveals a failed assembly, we perform same-day repair or replacement to restore compliance." },
            ].map(s => (
              <div key={s.type} className="flex items-start gap-3 p-4 rounded-lg bg-white">
                <CheckCircle size={18} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: '#0A0A0A', fontFamily: "\'Barlow Condensed\', sans-serif", textTransform: "uppercase" }}>{s.type}</h3>
                  <p className="text-sm" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" heading="Backflow Certification Virginia — Frequently Asked Questions" />
          <div className="mt-8"><FAQAccordion items={FAQS} variant="light" /></div>
        </div>
      </section>

      <section className="py-10" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--brand-navy)", fontFamily: "\'Barlow Condensed\', sans-serif" }}>Related Pages</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Backflow Prevention", href: "/backflow-prevention/" },
              { label: "Backflow Certification Maryland", href: "/backflow-certification-maryland/" },
              { label: "Backflow Certification DC", href: "/backflow-certification-washington-dc/" },
              { label: "Backflow Preventer Repair", href: "/backflow-preventer-repair/" },
              { label: "Commercial Plumber Northern Virginia", href: "/commercial-plumber-northern-virginia/" },
              { label: "SWaM Certified Virginia", href: "/swam-certified-plumbing-contractor-virginia/" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-sm px-4 py-2 rounded border font-medium hover:bg-white transition-colors" style={{ color: "var(--brand-navy)", borderColor: "var(--brand-navy)", fontFamily: "\'Barlow\', sans-serif" }}>{l.label}</a>
            ))}
          </div>
        </div>
      </section>      {/* Bottom CTA */}
      <CTABanner
        heading="Schedule your Virginia backflow certification today"
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
      />
    </div>
  );
}
