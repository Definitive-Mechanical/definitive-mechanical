/**
 * MBE Certified Plumbing Contractor — /mbe-certified-plumbing-contractor-maryland/
 * Layout matches commercial/government page pattern:
 *  S1  Hero            — dark navy gradient, left copy + right trust card, breadcrumbs
 *  S2  Stats bar       — cyan band
 *  S3  Certifications  — white bg, card grid
 *  S4  Capabilities    — navy bg, checklist + call button
 *  S5  Engagement      — white bg, numbered steps
 *  S6  Capability Stmt — surface-1 bg, centered
 *  S7  FAQ             — white bg, light accordion
 *  S8  Internal links  — surface-1 bg, pill chips
 *  S9  CTABanner       — white, brand-blue buttons
 */

import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, CheckCircle, Award, Shield, Building2, FileText, Star, Clock, ChevronRight } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BookNowButton from "@/components/ui/BookNowButton";
import CTABanner from "@/components/ui/CTABanner";

const CERTIFICATIONS = [
  { icon: Award, title: "MDOT MBE Certification", detail: "Cert No. 20-134", body: "Certified by the Maryland Department of Transportation as a Minority Business Enterprise. Verify at mdot.maryland.gov." },
  { icon: Shield, title: "MD Master Plumber / Gasfitter", detail: "License #96958 / WSSC #73696", body: "Maryland Board of Plumbing-issued Master Plumber and Master Gasfitter license. Covers all residential and commercial work statewide." },
  { icon: Building2, title: "SAM.gov Registered", detail: "UEI & CAGE Code 8HCF6", body: "Registered in the System for Award Management. NAICS 238220, SIC 171. Available for federal subcontracting and prime contractor teaming." },
  { icon: FileText, title: "Virginia SWaM Certified", detail: "Cert No. 815255", body: "Virginia Department of Small Business and Supplier Diversity certified Small, Women-owned, and Minority-owned Business." },
  { icon: Star, title: "DC Master Plumber / Gasfitter", detail: "License #PGM1002236", body: "DCRA-issued DC Master Plumber and Gasfitter license. Covers all commercial and residential plumbing work in the District." },
  { icon: Shield, title: "Virginia Master Plumber / Gasfitter", detail: "#2710064209 / Class A #2705181061", body: "Virginia DPOR-issued Master Plumber and Gasfitter license. Class A Contractor license for commercial work across Northern Virginia." },
];

const CAPABILITIES = [
  "Code-compliant facility plumbing repairs and maintenance",
  "Annual backflow preventer certification (WSSC requirement for all commercial/institutional properties in PG and Montgomery Counties)",
  "Gas line repair and gasfitter services for government facilities — Master Gasfitter credential, not just Master Plumber",
  "Emergency plumbing response under SLA terms",
  "Commercial water heater replacement programs",
  "Multi-facility preventative maintenance contracts",
  "MBE subcontractor letters and procurement documentation",
  "SAM.gov-registered for federal subcontracting and prime contractor teaming",
];

const ENGAGEMENT_STEPS = [
  { step: "01", title: "Verify MBE Status", body: "Verify in the MDOT MBE Directory at mdot.maryland.gov using Cert No. 20-134 or company name 'Definitive Mechanical.'" },
  { step: "02", title: "Request Capability Statement", body: "Request a Capability Statement via the form on this page or by calling (301) 679-5849. We provide it within one business day." },
  { step: "03", title: "Provide Documentation", body: "We provide an MBE subcontractor letter, proof of insurance, and all license documentation as needed for your procurement process." },
  { step: "04", title: "Respond to RFQ", body: "We respond to RFQs, provide written scope and pricing, and coordinate scheduling to meet project timelines." },
];

const FAQS = [
  { question: "What is MDOT MBE Certification No. 20-134?", answer: "MDOT MBE Cert No. 20-134 is issued by the Maryland Department of Transportation to certify Definitive Mechanical as a Minority Business Enterprise. It is used by State of Maryland agencies, counties, and prime contractors to meet MBE subcontracting goals on public projects. You can verify the certification at mdot.maryland.gov." },
  { question: "What is a CAGE Code and why does it matter for government procurement?", answer: "CAGE Code 8HCF6 is a Commercial and Government Entity code assigned by the Defense Logistics Agency. It is required for federal contracting and subcontracting, and is used to identify Definitive Mechanical in SAM.gov and federal procurement databases." },
  { question: "Can Definitive Mechanical serve as an MBE subcontractor on a prime contract?", answer: "Yes. Definitive Mechanical regularly serves as an MBE-certified plumbing subcontractor on projects where the prime contractor has MBE subcontracting goals. We provide all required documentation including MBE subcontractor letters, proof of insurance, and license verification." },
  { question: "What NAICS code does Definitive Mechanical operate under?", answer: "NAICS Code 238220 — Plumbing, Heating, and Air-Conditioning Contractors. This is the correct NAICS code for commercial plumbing services and is the code under which Definitive Mechanical is registered in SAM.gov." },
  { question: "Is Definitive Mechanical bonded and insured?", answer: "Yes. Definitive Mechanical maintains general liability insurance and is bonded. Certificate of insurance and bonding documentation is available upon request for procurement purposes. Contact (301) 679-5849 or info@definitivemechanical.com." },
  { question: "What is NAICS code 238220 and does it apply to plumbing work?", answer: "NAICS Code 238220 is the North American Industry Classification System code for Plumbing, Heating, and Air-Conditioning Contractors. It is the correct NAICS code for commercial plumbing services and is the code under which Definitive Mechanical is registered in SAM.gov and listed in the MDOT MBE Directory." },
];

export default function MBECertified() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "name": "Definitive Mechanical",
        "description": "MDOT MBE Certified plumbing contractor in Maryland. Cert No. 20-134.",
        "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" },
        "telephone": "+13016795849",
        "url": "https://definitivemechanical.com",
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "name": "MDOT MBE Certification No. 20-134" },
          { "@type": "EducationalOccupationalCredential", "name": "MD Master Plumber/Gasfitter #96958" }
        ]
      },
      { "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
        { "@type": "ListItem", "position": 2, "name": "Government & Commercial", "item": "https://definitivemechanical.com/government-municipal-plumbing/" },
        { "@type": "ListItem", "position": 3, "name": "MBE Certified Plumbing Contractor Maryland" }
      ]}
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

      {/* S1: HERO */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #0a2d52 50%, var(--brand-navy-dark) 100%)", minHeight: "72vh", position: "relative", overflow: "hidden" }} className="py-20">
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Government & Commercial", href: "/government-municipal-plumbing/" }, { label: "MBE Certified Plumbing Contractor Maryland" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8 items-start">
            <div className="lg:col-span-3">
              <p style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>
                Government Procurement — Maryland — MDOT MBE Certified
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1.05, marginBottom: 20 }}>
                MDOT MBE Certified Plumbing Contractor — Maryland
              </h1>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)", fontSize: "16px", maxWidth: "580px", lineHeight: 1.75, marginBottom: 28 }}>
                Definitive Mechanical is certified by the Maryland Department of Transportation (MDOT) as a Minority Business Enterprise (MBE) contractor. Certification No. 20-134. We provide licensed plumbing, gas, and mechanical services for State of Maryland agencies, Prince George's County facilities, Montgomery County projects, and federal subcontracting opportunities in Maryland.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {["MDOT MBE Cert 20-134", "CAGE Code 8HCF6", "SAM.gov Registered", "MD Master Plumber #96958", "Bonded & Insured"].map((item, i) => (
                  <span key={i} style={{ background: "rgba(0,158,198,0.15)", border: "1px solid rgba(0,158,198,0.35)", color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, padding: "4px 12px", borderRadius: "2px" }}>
                    <CheckCircle size={11} style={{ display: "inline", marginRight: 5, color: "var(--brand-cyan)", verticalAlign: "middle" }} />
                    {item}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="tel:+13016795849" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--brand-blue)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.08em", padding: "14px 28px", borderRadius: "2px", textDecoration: "none" }}>
                  <Phone size={16} /> CALL (301) 679-5849
                </a>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.4)", color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.08em", padding: "14px 28px", borderRadius: "2px", textDecoration: "none" }}>
                  REQUEST CAPABILITY STATEMENT
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px", padding: "28px 24px" }}>
                <p style={{ fontFamily: "var(--font-display)", color: "var(--brand-cyan)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>PROCUREMENT CREDENTIALS</p>
                {[
                  { icon: Award, text: "MDOT MBE Cert No. 20-134 — verify at mdot.maryland.gov" },
                  { icon: Building2, text: "CAGE Code 8HCF6 — SAM.gov registered, NAICS 238220" },
                  { icon: Shield, text: "MD Master Plumber #96958 — WSSC #73696" },
                  { icon: Star, text: "DC Master Plumber/Gasfitter #PGM1002236" },
                  { icon: FileText, text: "Virginia SWaM Cert No. 815255 — Class A Contractor" },
                  { icon: Clock, text: "Bonded & insured — COI available within one business day" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
                    <item.icon size={16} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.82)", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S2: STATS BAR */}
      <section style={{ background: "var(--brand-cyan)", padding: "14px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px 48px" }}>
            {[{ value: "20-134", label: "MDOT MBE Cert No." }, { value: "8HCF6", label: "CAGE Code" }, { value: "4", label: "State Licenses" }, { value: "11+", label: "Years in Business" }].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "22px", color: "var(--brand-navy)", textTransform: "uppercase", letterSpacing: "0.02em", margin: 0, lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(0,48,96,0.75)", margin: "3px 0 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: CERTIFICATIONS GRID */}
      <section className="py-20" style={{ background: "#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="Licenses & Certifications" heading="Full Credential Portfolio" subtext="Every license and certification Definitive Mechanical holds — verified and current." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #E2E8F0", borderTop: "3px solid var(--brand-cyan)", borderRadius: "3px", padding: "24px 20px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ background: "rgba(0,158,198,0.1)", borderRadius: "6px", padding: "8px", flexShrink: 0 }}>
                    <cert.icon size={18} style={{ color: "var(--brand-cyan)", display: "block" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", color: "var(--brand-navy)", margin: 0 }}>{cert.title}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--brand-cyan)", fontWeight: 600, margin: "2px 0 0" }}>{cert.detail}</p>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{cert.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4: CAPABILITIES — dark section */}
      <section className="py-16" style={{ background: "var(--brand-navy)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--brand-cyan)", marginBottom: 8 }}>SCOPE OF WORK</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", textTransform: "uppercase", color: "white", lineHeight: 1.1, marginBottom: 16 }}>
                What we do for government and institutional clients
              </h2>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.7, marginBottom: 24 }}>
                Definitive Mechanical provides licensed plumbing and gas services to State of Maryland agencies, Prince George's County and Montgomery County facilities, federal subcontracting opportunities, and institutional properties across the DMV.
              </p>
              <BookNowButton variant="white" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {CAPABILITIES.map((cap, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
                  <CheckCircle size={16} style={{ color: "var(--brand-cyan)", flexShrink: 0, marginTop: 3 }} />
                  <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{cap}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* S5: ENGAGEMENT PROCESS */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Engagement Process" heading="How does a government agency or prime contractor engage Definitive Mechanical?" subtext="We respond to RFQs, provide written scope and pricing, and coordinate scheduling to meet project timelines. All documentation is available within one business day." />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {ENGAGEMENT_STEPS.map((s, i) => (
              <div key={i} style={{ background: "#FAFBFC", border: "1px solid #E2E8F0", borderLeft: "4px solid var(--brand-cyan)", borderRadius: "3px", padding: "24px 20px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "32px", color: "var(--brand-cyan)", lineHeight: 1, marginBottom: 8 }}>{s.step}</p>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", color: "var(--brand-navy)", margin: "0 0 8px" }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S6: CAPABILITY STATEMENT */}
      <section className="py-16" style={{ background: "var(--surface-1)" }}>
        <div className="container max-w-3xl text-center">
          <Award size={40} style={{ color: "var(--brand-cyan)" }} className="mx-auto mb-4" />
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(22px,3vw,30px)", textTransform: "uppercase", color: "var(--brand-navy)", marginBottom: 16 }}>Capability Statement</h2>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.7, marginBottom: 28 }}>
            Our Capability Statement includes: legal name, UEI, CAGE 8HCF6, NAICS 238220, SIC 171, MDOT MBE Cert 20-134, SWaM Cert 815255, all license numbers, years in business, bonding capacity, past performance summary, and point of contact.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <BookNowButton variant="navy" text="REQUEST CAPABILITY STATEMENT" href="/contact" size="lg" />
            <BookNowButton variant="outline" text="CALL (301) 679-5849" href="tel:+13016795849" size="lg" />
          </div>
        </div>
      </section>

      {/* S7: FAQ */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" heading="MBE Certified Plumbing Contractor Maryland — Frequently Asked Questions" />
          <div className="mt-8">
            <FAQAccordion items={FAQS} variant="light" />
          </div>
        </div>
      </section>

      {/* S8: INTERNAL LINKS */}
      <section className="py-10" style={{ background: "var(--surface-1)" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--brand-navy)", marginBottom: 12 }}>Related Pages</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing/" },
              { label: "Commercial Plumber Maryland", href: "/commercial-plumber-maryland/" },
              { label: "SWaM Certified Virginia", href: "/swam-certified-plumbing-contractor-virginia/" },
              { label: "Licenses & Certifications", href: "/licenses-certifications/" },
              { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
              { label: "Backflow Certification Maryland", href: "/backflow-certification-maryland/" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background: "white", border: "1px solid #DDE4EC", color: "var(--brand-navy)", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, padding: "6px 14px", borderRadius: "20px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                {l.label} <ChevronRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S9: CTA BANNER */}
      <CTABanner
        heading="Need an MBE-certified plumbing contractor in Maryland?"
        subtext="MDOT MBE Cert No. 20-134 — CAGE Code 8HCF6 — MD Master Plumber #96958 — 24/7 Emergency — Upfront Pricing."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
      />
    </div>
  );
}
