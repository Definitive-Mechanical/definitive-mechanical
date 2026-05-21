import { Helmet } from "react-helmet-async";
import { ShieldCheck, Award, Building2, CheckCircle, Server } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import BookNowButton from "@/components/ui/BookNowButton";

const FAQS = [
  { question: "Are you licensed for commercial plumbing in both Fairfax County and Arlington County?", answer: "Yes. Virginia plumbing licenses are issued by DPOR and are statewide, covering all Virginia jurisdictions including Fairfax County and Arlington County. Definitive Mechanical holds VA Master Plumber/Gasfitter License #2710064209 and VA Class A Contractor License #2705181061, both statewide credentials." },
  { question: "Do you work in independent Virginia cities like Alexandria and Manassas?", answer: "Yes. While Virginia licenses are statewide, independent cities like Alexandria, Manassas, and Fairfax City have their own building departments. We are familiar with the permit processes in all Northern Virginia independent cities and coordinate directly with local building departments." },
  { question: "What is Virginia SWaM certification and how does it affect our procurement?", answer: "Virginia SWaM (Small, Women-owned, and Minority-owned Business) certification is issued by the Virginia Department of Small Business and Supplier Diversity (SBSD). Definitive Mechanical holds SWaM Cert No. 815255. This qualifies us for procurement preferences with Virginia state agencies, public universities, and local government purchasers — and satisfies SWaM subcontractor participation requirements on Virginia government projects." },
  { question: "Do you serve data centers and industrial facilities in Loudoun County?", answer: "Yes. Loudoun County's Route 7 corridor (Ashburn's Data Center Alley) is one of our key commercial service areas. We perform backflow preventer certification, water line service, and plumbing maintenance for data center operators, property managers, and facility teams in the Ashburn/Sterling corridor." },
  { question: "Can you handle emergency commercial plumbing in Northern Virginia high-rises?", answer: "Yes. We dispatch 24/7 for commercial plumbing emergencies throughout Northern Virginia, including high-rise office buildings in Rosslyn, Crystal City, Tysons Corner, and Reston. We coordinate with building engineers, property management companies, and facility staff." },
];

const NOVA_MARKETS = [
  { icon: Building2, title: "Fairfax County / Dulles Technology Corridor", detail: "Route 28, Route 50, Tysons Corner commercial district, data centers, office parks. Dense commercial and tech-sector facilities requiring compliant plumbing service." },
  { icon: Building2, title: "Arlington County / Rosslyn-Ballston Corridor", detail: "High-rise office buildings, Pentagon City commercial, Crystal City mixed-use. Complex building plumbing requiring coordination with property engineers." },
  { icon: Server, title: "Loudoun County / Data Center Alley", detail: "Route 7 in Ashburn is the world's most dense data center corridor. Commercial and industrial plumbing for data centers, logistics, and office parks. Backflow certification a key requirement." },
  { icon: Building2, title: "Prince William County / Route 1 and I-95 Corridor", detail: "Commercial and retail along Route 1, light industrial in the I-95 corridor, Quantico-adjacent government contractor facilities." },
];

const LICENSES = [
  "VA Master Plumber/Gasfitter #2710064209",
  "VA Class A Contractor #2705181061",
  "SWaM Cert No. 815255",
  "CAGE 8HCF6 | NAICS 238220 | SIC 171",
];

export default function CommercialPlumberNorthernVirginia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "LocalBusiness", "Plumber"],
        "name": "Commercial Plumbing Northern Virginia — Definitive Mechanical",
        "serviceType": "CommercialPlumbing",
        "areaServed": "Northern Virginia",
        "provider": {
          "name": "Definitive Mechanical",
          "address": "9701 Apollo Drive, Suite 100, Largo, MD 20774",
          "telephone": "+13016795849"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
          { "@type": "ListItem", "position": 2, "name": "Commercial Plumbing", "item": "https://definitivemechanical.com/commercial-plumbing/" },
          { "@type": "ListItem", "position": 3, "name": "Commercial Plumber Northern Virginia" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Commercial Plumber in Northern Virginia | VA-Licensed, SWaM Certified | Definitive Mechanical</title>
        <meta name="description" content="Licensed commercial plumber in Northern Virginia. VA Master Plumber #2710064209, Class A Contractor #2705181061, SWaM Cert 815255. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/commercial-plumber-northern-virginia/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)" }} className="py-20 md:py-28">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Commercial Plumbing", href: "/commercial-plumbing/" }, { label: "Commercial Plumber Northern Virginia" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>Commercial Plumbing  Northern Virginia  Fairfax  Arlington  Loudoun  Prince William</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Licensed Commercial Plumber in Northern Virginia
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mb-8" style={{ fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
            Definitive Mechanical holds Virginia Master Plumber/Gasfitter License #2710064209 and Virginia Class A Contractor License #2705181061 — and is Virginia SWaM Certified (No. 815255) for government and institutional procurement. We serve commercial properties throughout Northern Virginia's four-county region.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="REQUEST NOVA COMMERCIAL ESTIMATE" href="/contact/" size="lg" />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>
            {["VA Master Plumber #2710064209", "VA Class A Contractor #2705181061", "SWaM Cert 815255", "CAGE 8HCF6"].map(t => (
              <span key={t} className="flex items-center gap-1"><ShieldCheck size={12} />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA Markets */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading eyebrow="Northern Virginia Markets" heading="What commercial markets does Definitive Mechanical serve in Northern Virginia?" />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {NOVA_MARKETS.map(m => (
              <div key={m.title} className="p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <m.icon size={28} style={{ color: "var(--brand-cyan)" }} className="mb-3" />
                <h3 className="font-bold text-sm uppercase tracking-wide mb-2" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>{m.title}</h3>
                <p className="text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWaM Section */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Government Procurement" heading="Virginia SWaM certification for commercial and government contracting" />
          <div className="mt-8 p-8 bg-white rounded-lg shadow-sm">
            <p className="text-base mb-4" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              Virginia SWaM (Small, Women-owned, and Minority-owned Business) certification is administered by the Virginia Department of Small Business and Supplier Diversity (SBSD). Definitive Mechanical holds SWaM Cert No. 815255, which qualifies us for procurement preferences with Virginia state agencies, universities, and local government purchasers.
            </p>
            <p className="text-base mb-4" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              In Northern Virginia — with its dense concentration of state-managed facilities, public universities, and government-adjacent contractors — SWaM certification is a meaningful procurement differentiator. Many private-sector prime contractors on Virginia government projects are also required to document SWaM subcontractor participation.
            </p>
            <a href="/swam-certified-plumbing-contractor-virginia/" className="inline-block font-bold underline" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>
              → SWaM Certified Plumbing Contractor Virginia
            </a>
          </div>
        </div>
      </section>

      {/* Federal & Defense */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Federal & Defense" heading="Federal and defense contractor facilities in Northern Virginia" />
          <div className="mt-8 space-y-4">
            <p className="text-base" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              Northern Virginia is home to the Pentagon, Fort Belvoir, NGA, and hundreds of defense contractor office buildings. Definitive Mechanical holds CAGE Code 8HCF6 and NAICS Code 238220, and is registered through the federal SAM.gov system. We are familiar with the access, badging, and compliance requirements common to defense-adjacent facility work.
            </p>
            <a href="/government-municipal-plumbing/" className="inline-block font-bold underline" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>
              → Government & Municipal Plumbing Services
            </a>
          </div>
        </div>
      </section>

      {/* Licensing Block */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Licensing" heading="Are you licensed for commercial plumbing in all Northern Virginia jurisdictions?" />
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-white" style={{ border: "2px solid var(--brand-navy)" }}>
              <h3 className="font-bold text-lg mb-4" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}>Virginia License Portfolio</h3>
              <ul className="space-y-2">
                {LICENSES.map(l => (
                  <li key={l} className="flex items-center gap-2 text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif" }}>
                    <ShieldCheck size={14} style={{ color: "var(--brand-cyan)", flexShrink: 0 }} />
                    {l}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs italic" style={{ color: "var(--ink-3)", fontFamily: "'Barlow', sans-serif" }}>
                Virginia licenses are issued by DPOR and are statewide, but independent cities (Alexandria, Manassas, Fairfax City) have their own building departments. We coordinate with all local building departments.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, title: "Statewide VA License", body: "VA Master Plumber/Gasfitter #2710064209 and VA Class A Contractor #2705181061 cover all Virginia jurisdictions — no county-by-county gaps." },
                { icon: Award, title: "SWaM Certified", body: "SWaM Cert No. 815255 qualifies Definitive Mechanical for Virginia government and institutional procurement preferences." },
                { icon: Building2, title: "Federal Registration", body: "CAGE Code 8HCF6, NAICS 238220, SAM.gov registered — ready for defense-adjacent and federally-funded facility work." },
              ].map(d => (
                <div key={d.title} className="flex gap-4 p-4 bg-white rounded-lg">
                  <d.icon size={24} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}>{d.title}</h3>
                    <p className="text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" heading="Commercial Plumbing Northern Virginia — Frequently Asked Questions" />
          <div className="mt-8">
            <FAQAccordion items={FAQS} variant="light" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>Related Pages</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
              { label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing/" },
              { label: "SWaM Certified Contractor", href: "/swam-certified-plumbing-contractor-virginia/" },
              { label: "Backflow Certification Virginia", href: "/backflow-certification-virginia/" },
              { label: "Northern Virginia Service Areas", href: "/service-areas/northern-virginia/" },
              { label: "Licenses & Certifications", href: "/licenses-certifications/" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-sm px-4 py-2 rounded border font-medium hover:bg-white transition-colors" style={{ color: "var(--brand-navy)", borderColor: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{l.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "var(--brand-navy)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>Need a licensed commercial plumber in Northern Virginia?</h2>
          <p className="text-white/80 text-lg mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}> Call (301) 679-5849</p>
          <p className="text-white/60 text-sm mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>VA Master Plumber #2710064209 | SWaM Cert 815255 | CAGE 8HCF6</p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="REQUEST NOVA COMMERCIAL ESTIMATE" href="/contact/" size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
