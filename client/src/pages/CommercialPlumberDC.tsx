import { Helmet } from "react-helmet-async";
import { Phone, ShieldCheck, Award, FileText, Clock, Wrench, Building2, CheckCircle } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import BookNowButton from "@/components/ui/BookNowButton";

const FAQS = [
  { question: "Are you licensed to perform commercial plumbing in Washington, DC?", answer: "Yes. Definitive Mechanical holds DC Master Plumber/Gasfitter License #PGM1002236, issued by the DC Department of Consumer and Regulatory Affairs (DCRA). This license is required to legally pull permits and perform commercial plumbing work in the District. It is separately issued from Maryland and Virginia licenses." },
  { question: "What DC commercial plumbing permits do you handle?", answer: "We handle all required DC plumbing permits for commercial work, including water line repairs, sewer lateral work, gas line installation, water heater replacement, and backflow preventer installation. All permit work is performed under our DC Master Plumber/Gasfitter License #PGM1002236." },
  { question: "Do you work in DC condo buildings and mixed-use developments?", answer: "Yes. We serve DC condo buildings, mixed-use ground-floor retail with residential above, rowhouse conversions, and multi-unit residential buildings. We coordinate with building management companies, HOA boards, and individual unit owners as needed." },
  { question: "Can you certify backflow preventers on DC commercial properties?", answer: "Yes. We perform annual backflow preventer certification for DC commercial properties under DC Water (DC Water and Sewer Authority) compliance requirements. We file all required documentation with DC Water on the property owner's behalf. See our DC Backflow Certification page for details." },
  { question: "Do you serve DC properties under government or institutional management?", answer: "Yes. Definitive Mechanical holds MDOT MBE Cert No. 20-134 and CAGE Code 8HCF6, and is familiar with the procurement requirements for contractors working on federally-adjacent or institutionally-managed properties in the District. We are registered in SAM.gov." },
];

const DC_MARKETS = [
  { title: "Office & Mixed-Use Buildings", detail: "Drain maintenance, water heater replacement, backflow certification for DC office buildings and mixed-use commercial properties across all 8 wards." },
  { title: "Rowhouse Conversions", detail: "Aging galvanized supply line replacement, sewer lateral issues, gas line compliance for the District's dense rowhouse conversion stock used as multi-unit rentals." },
  { title: "Restaurant & Commercial Kitchen Properties", detail: "Grease trap maintenance, commercial drain service, gas line work under DC gasfitter license for DC restaurants and food service establishments." },
  { title: "Medical & Institutional Buildings", detail: "Backflow certification, compliance-level inspections, gas work for DC medical offices, churches, private schools, and membership organizations." },
];

const EMERGENCIES = [
  "Active pipe failure in a DC commercial facility causing business interruption",
  "Sewer backup affecting multiple tenants in a DC building",
  "Gas leak at a DC commercial or mixed-use property",
  "Water heater failure in a DC multi-unit building",
  "Backflow preventer failure triggering a DC Water compliance violation",
];

export default function CommercialPlumberDC() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "LocalBusiness", "Plumber"],
        "name": "Commercial Plumbing Washington DC — Definitive Mechanical",
        "serviceType": "CommercialPlumbing",
        "areaServed": "Washington, DC",
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
          { "@type": "ListItem", "position": 3, "name": "Commercial Plumber Washington DC" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Commercial Plumber in Washington, DC | DC-Licensed | Definitive Mechanical</title>
        <meta name="description" content="Licensed commercial plumber in Washington, DC. DC Master Plumber/Gasfitter #PGM1002236. MBE Cert 20-134. Serving all 8 wards. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/commercial-plumber-washington-dc/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)" }} className="py-20 md:py-28">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Commercial Plumbing", href: "/commercial-plumbing/" }, { label: "Commercial Plumber Washington DC" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "#009EC6", fontFamily: "'Barlow Condensed', sans-serif" }}>Commercial Plumbing · Washington, DC · All 8 Wards · DC-Licensed</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Licensed Commercial Plumber in Washington, DC
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mb-8" style={{ fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
            Definitive Mechanical is licensed in the District of Columbia as Master Plumber/Gasfitter #PGM1002236 — issued by the DC Department of Consumer and Regulatory Affairs (DCRA). We serve commercial properties, office buildings, mixed-use developments, rowhouse conversions, and institutional facilities across all eight DC wards.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="REQUEST DC COMMERCIAL ESTIMATE" href="/contact/" size="lg" />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider" style={{ color: "#009EC6", fontFamily: "'Barlow Condensed', sans-serif" }}>
            {["DC Master Plumber #PGM1002236", "MDOT MBE Cert 20-134", "CAGE 8HCF6", "NAICS 238220"].map(t => (
              <span key={t} className="flex items-center gap-1"><ShieldCheck size={12} />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* DC Markets */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading eyebrow="DC Commercial Markets" title="What commercial properties do you serve in Washington, DC?" />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {DC_MARKETS.map(m => (
              <div key={m.title} className="p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <Building2 size={28} style={{ color: "#009EC6" }} className="mb-3" />
                <h3 className="font-bold text-sm uppercase tracking-wide mb-2" style={{ color: "#003060", fontFamily: "'Barlow Condensed', sans-serif" }}>{m.title}</h3>
                <p className="text-sm" style={{ color: "#484848", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DC License Matters */}
      <section className="py-16" style={{ background: "#F0F0F0" }}>
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="DC Licensing" title="Why does DC commercial plumbing require a specifically DC-licensed contractor?" />
          <div className="mt-8 p-8 bg-white rounded-lg shadow-sm">
            <p className="text-base mb-4" style={{ color: "#484848", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              Washington DC issues its own plumbing licenses through the DC DCRA. A Maryland or Virginia license does not authorize work in DC. The DC Master Plumber/Gasfitter license (#PGM1002236) is separately issued and verified in the DCRA online database.
            </p>
            <p className="text-base mb-4" style={{ color: "#484848", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              Many contractors serving the DC metro area do not hold this credential and cannot legally pull permits in DC. Definitive Mechanical is licensed independently in DC, Maryland, Virginia, and Delaware — making us one of the few contractors in the region who can legally perform permitted commercial plumbing work in all four jurisdictions.
            </p>
            <div className="p-4 rounded-lg" style={{ background: "#C0D8F0", borderLeft: "4px solid #009EC6" }}>
              <p className="text-sm font-bold" style={{ color: "#003060", fontFamily: "'Barlow Condensed', sans-serif" }}>
                DC Master Plumber/Gasfitter #PGM1002236 — DCRA-issued. Verify at dcra.dc.gov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16" style={{ background: "#003060" }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Commercial emergency plumbing in Washington, DC</h2>
            <p className="text-white/80 text-lg" style={{ fontFamily: "'Barlow', sans-serif" }}>24/7 live dispatcher — we coordinate with DC building emergency protocols and property management companies.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 mb-8">
              {EMERGENCIES.map(e => (
                <li key={e} className="flex items-start gap-3 text-white/90" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  <CheckCircle size={18} style={{ color: "#009EC6", flexShrink: 0, marginTop: 2 }} />
                  {e}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Government & Institutional */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Government & Institutional" title="Government and institutional commercial properties in DC" />
          <div className="mt-8 space-y-4">
            <p className="text-base" style={{ color: "#484848", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              DC is heavily populated with government buildings, non-profit institutions, embassies, think tanks, and trade associations. Definitive Mechanical holds MDOT MBE Cert No. 20-134 and CAGE Code 8HCF6, and is familiar with the procurement requirements for contractors working on federally-adjacent or institutionally-managed properties in the District.
            </p>
            <p className="text-base" style={{ color: "#484848", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              We are registered in SAM.gov and can provide all required documentation for government procurement processes, including MBE subcontractor letters, proof of insurance, and license verification.
            </p>
            <a href="/government-municipal-plumbing/" className="inline-block font-bold underline" style={{ color: "#003060", fontFamily: "'Barlow Condensed', sans-serif" }}>
              → Government & Municipal Plumbing Services
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "#F0F0F0" }}>
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Commercial Plumbing Washington DC — Frequently Asked Questions" />
          <div className="mt-8">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 bg-white">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#003060", fontFamily: "'Barlow Condensed', sans-serif" }}>Related Pages</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
              { label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing/" },
              { label: "Backflow Certification DC", href: "/backflow-certification-washington-dc/" },
              { label: "MBE Certified Contractor", href: "/mbe-certified-plumbing-contractor-maryland/" },
              { label: "Washington DC Service Area", href: "/service-areas/washington-dc/" },
              { label: "Licenses & Certifications", href: "/licenses-certifications/" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-sm px-4 py-2 rounded border font-medium hover:bg-gray-50 transition-colors" style={{ color: "#003060", borderColor: "#003060", fontFamily: "'Barlow', sans-serif" }}>{l.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "#003060" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Need a DC-licensed commercial plumber?</h2>
          <p className="text-white/80 text-lg mb-2" style={{ fontFamily: "'Barlow', sans-serif" }}>📞 Call (301) 679-5849</p>
          <p className="text-white/60 text-sm mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>DC Master Plumber #PGM1002236 | MDOT MBE Cert 20-134</p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            <BookNowButton variant="outline" text="REQUEST DC COMMERCIAL ESTIMATE" href="/contact/" size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
