import { Helmet } from "react-helmet-async";
import { Award, CheckCircle, Building2, ShieldCheck, FileText } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import BookNowButton from "@/components/ui/BookNowButton";

const FAQS = [
  { question: "Where can I verify Definitive Mechanical's MDOT MBE certification?", answer: "Definitive Mechanical's MBE certification can be verified in the MDOT MBE Directory at mdot.maryland.gov. Search by company name 'Definitive Mechanical' or Cert No. 20-134. The directory is publicly accessible and updated by MDOT." },
  { question: "What size projects does Definitive Mechanical handle?", answer: "Definitive Mechanical handles commercial and government plumbing projects ranging from single-facility service calls to multi-building preventative maintenance contracts. We provide written scope and pricing for all projects regardless of size. Contact us at (301) 679-5849 to discuss your project requirements." },
  { question: "Can Definitive Mechanical participate as a subcontractor on prime contracts?", answer: "Yes. Definitive Mechanical regularly participates as a subcontractor on prime contracts where MBE participation is required. We provide all required documentation including MBE subcontractor letters, proof of insurance, license verification, and CAGE/NAICS documentation. We respond to RFQs and coordinate scheduling to meet project timelines." },
  { question: "Does Definitive Mechanical hold bonding and general liability insurance?", answer: "Yes. Definitive Mechanical maintains general liability insurance and is bonded. Certificate of insurance and bonding documentation is available upon request for procurement purposes. Contact (301) 679-5849 or info@definitivemechanical.com." },
  { question: "What is NAICS code 238220 and does it apply to plumbing work?", answer: "NAICS Code 238220 is the North American Industry Classification System code for Plumbing, Heating, and Air-Conditioning Contractors. It is the correct NAICS code for commercial plumbing services and is the code under which Definitive Mechanical is registered in SAM.gov and listed in the MDOT MBE Directory." },
];

const ENGAGEMENT_STEPS = [
  { step: "01", title: "Verify MBE Status", body: "Verify in the MDOT MBE Directory at mdot.maryland.gov using Cert No. 20-134 or company name 'Definitive Mechanical.'" },
  { step: "02", title: "Request Capability Statement", body: "Request a Capability Statement via the form on this page or by calling (301) 679-5849. We provide it within one business day." },
  { step: "03", title: "Provide Documentation", body: "We provide an MBE subcontractor letter, proof of insurance, and all license documentation as needed for your procurement process." },
  { step: "04", title: "Respond to RFQ", body: "We respond to RFQs, provide written scope and pricing, and coordinate scheduling to meet project timelines." },
];

export default function MBECertified() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "name": "Definitive Mechanical",
        "description": "MDOT MBE Certified plumbing contractor in Maryland. Cert No. 20-134.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "9701 Apollo Drive, Suite 100",
          "addressLocality": "Largo",
          "addressRegion": "MD",
          "postalCode": "20774"
        },
        "telephone": "+13016795849",
        "url": "https://definitivemechanical.com",
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "name": "MDOT MBE Certification No. 20-134" },
          { "@type": "EducationalOccupationalCredential", "name": "MD Master Plumber/Gasfitter #96958" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
          { "@type": "ListItem", "position": 2, "name": "Government & Commercial", "item": "https://definitivemechanical.com/government-municipal-plumbing/" },
          { "@type": "ListItem", "position": 3, "name": "MBE Certified Plumbing Contractor Maryland" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>MBE Certified Plumbing Contractor in Maryland | MDOT MBE Cert 20-134 | Definitive Mechanical</title>
        <meta name="description" content="MDOT MBE Certified plumbing contractor in Maryland. Cert No. 20-134. Master Plumber #96958 + WSSC #73696. Serving MD state, county, and institutional procurement. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/mbe-certified-plumbing-contractor-maryland/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)" }} className="py-20 md:py-28">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Government & Commercial", href: "/government-municipal-plumbing/" }, { label: "MBE Certified Plumbing Contractor Maryland" }]} />
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>Government Procurement · Maryland · MDOT MBE Certified</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            MDOT MBE Certified Plumbing Contractor — Maryland
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mb-8" style={{ fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
            Definitive Mechanical is certified by the Maryland Department of Transportation (MDOT) as a Minority Business Enterprise (MBE) contractor. Certification No. 20-134. We provide licensed plumbing, gas, and mechanical services for State of Maryland agencies, Prince George's County facilities, Montgomery County projects, and federal subcontracting opportunities in Maryland.
          </p>

          {/* Procurement Quick-Reference Box */}
          <div className="inline-block p-6 rounded-lg mb-8" style={{ background: "rgba(255,255,255,0.05)", border: "2px solid rgba(0,158,198,0.6)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>Procurement Quick Reference</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1 text-sm text-white/90" style={{ fontFamily: "'Barlow', sans-serif" }}>
              {[
                ["Legal Name", "Definitive Mechanical"],
                ["MBE Cert No.", "20-134 (MDOT)"],
                ["MD Master Plumber/Gasfitter", "#96958"],
                ["WSSC License", "#73696"],
                ["NAICS", "238220"],
                ["SIC", "171"],
                ["CAGE", "8HCF6"],
                ["SAM.gov", "Registered"],
                ["Address", "9701 Apollo Drive, Suite 100, Largo, MD 20774"],
                ["POC", "(301) 679-5849 | info@definitivemechanical.com"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="font-bold" style={{ color: "var(--brand-cyan)", minWidth: "120px" }}>{k}:</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <BookNowButton variant="outline" text="ADD US TO YOUR BIDDERS LIST" href="/contact/" size="lg" />
            <BookNowButton variant="ghost" text="REQUEST CAPABILITY STATEMENT" href="/contact/" size="lg" />
          </div>
        </div>
      </section>

      {/* What is MDOT MBE */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="About MBE Certification" heading="What is MDOT MBE certification?" />
          <div className="mt-8 space-y-4">
            <p className="text-base" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              MDOT MBE (Minority Business Enterprise) certification is administered by the Maryland Department of Transportation under the Minority Business Enterprise Program. To obtain and maintain MBE certification, a business must: (1) be at least 51% owned and controlled by a member of a socially and economically disadvantaged group; (2) be independently operated; (3) meet applicable size standards.
            </p>
            <p className="text-base" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
              Certified MBE firms are eligible for participation in State of Maryland procurement goals, prime contract set-asides, and subcontracting requirements established by State agencies. Definitive Mechanical has held MDOT MBE Cert No. 20-134 since initial certification.
            </p>
          </div>
        </div>
      </section>

      {/* Which Agencies */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Applicable Agencies" heading="Which Maryland government contracts and agencies does MBE certification apply to?" />
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              { title: "State of Maryland Agencies", body: "State Highway Administration, MDOT, Maryland Department of General Services, Department of Public Safety, and all State agencies with MBE participation goals." },
              { title: "Prince George's County Government", body: "County government contracts where MBE participation goals are routinely established. Our Largo, MD location is within Prince George's County." },
              { title: "Montgomery County Contracts", body: "Montgomery County government and institutional procurement, including county-funded construction and facility maintenance contracts." },
              { title: "University System of Maryland", body: "University of Maryland and all University System of Maryland institutions. MBE participation is required on many USM construction and maintenance contracts." },
              { title: "Federal Subcontracting", body: "Federal subcontracting opportunities where MBE documentation is required by prime contractors. CAGE 8HCF6, SAM.gov registered, NAICS 238220." },
              { title: "Private-Sector Prime Contractors", body: "Many private-sector prime contractors on Maryland government projects are required to document MBE subcontractor participation — Definitive Mechanical satisfies this requirement." },
            ].map(a => (
              <div key={a.title} className="p-5 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-sm uppercase tracking-wide mb-2" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>{a.title}</h3>
                <p className="text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Government */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Services" heading="What plumbing and mechanical services does Definitive Mechanical provide to government and institutional clients?" />
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              "Code-compliant facility plumbing repairs and maintenance",
              "Annual backflow preventer certification (WSSC requirement for all commercial/institutional properties in PG and Montgomery Counties)",
              "Gas line repair and gasfitter services for government facilities — Master Gasfitter credential, not just Master Plumber",
              "Emergency plumbing response under SLA terms",
              "Commercial water heater replacement programs",
              "Multi-facility preventative maintenance contracts",
            ].map(s => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "var(--surface-1)" }}>
                <CheckCircle size={18} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                <p className="text-sm" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Pathway */}
      <section className="py-16" style={{ background: "var(--brand-navy)" }}>
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Engagement Process" heading="How does a government agency or prime contractor engage Definitive Mechanical?" light />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {ENGAGEMENT_STEPS.map(s => (
              <div key={s.step} className="p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(0,158,198,0.3)" }}>
                <p className="text-4xl font-bold mb-3" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>{s.step}</p>
                <h3 className="font-bold text-base text-white mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}>{s.title}</h3>
                <p className="text-sm text-white/80" style={{ fontFamily: "'Barlow', sans-serif", lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Statement */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container max-w-3xl text-center">
          <Award size={40} style={{ color: "var(--brand-cyan)" }} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--brand-navy)", fontFamily: 'var(--font-display)' }}>Capability Statement</h2>
          <p className="text-base mb-6" style={{ color: "var(--ink-2)", fontFamily: "'Barlow', sans-serif", lineHeight: 1.7 }}>
            Our Capability Statement includes: legal name, UEI, CAGE 8HCF6, NAICS 238220, SIC 171, MDOT MBE Cert 20-134, SWaM Cert 815255, all license numbers, years in business, bonding capacity, past performance summary, and point of contact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BookNowButton variant="outline" text="REQUEST CAPABILITY STATEMENT" href="/contact/" size="lg" />
            <BookNowButton variant="phone" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" heading="MBE Certified Plumbing Contractor Maryland — Frequently Asked Questions" />
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
              { label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing/" },
              { label: "Commercial Plumber Maryland", href: "/commercial-plumber-maryland/" },
              { label: "SWaM Certified Virginia", href: "/swam-certified-plumbing-contractor-virginia/" },
              { label: "Licenses & Certifications", href: "/licenses-certifications/" },
              { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
              { label: "Backflow Certification Maryland", href: "/backflow-certification-maryland/" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-sm px-4 py-2 rounded border font-medium hover:bg-white transition-colors" style={{ color: "var(--brand-navy)", borderColor: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{l.label}</a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
