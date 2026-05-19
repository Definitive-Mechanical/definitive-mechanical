import { Helmet } from "react-helmet-async";
import { Award, CheckCircle2, FileCheck, Building2, ShieldCheck } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const faqs = [
  { question: "What is MDOT MBE certification?", answer: "MDOT MBE (Minority Business Enterprise) certification is issued by the Maryland Department of Transportation. It confirms that a business is at least 51% owned and controlled by socially and economically disadvantaged individuals. Certified MBEs are listed in the MDOT MBE Directory and are eligible for Maryland state and municipal procurement programs with MBE participation goals." },
  { question: "What is Definitive Mechanical's MDOT MBE certification number?", answer: "Definitive Mechanical's MDOT MBE Certification Number is 20-134. This certification is issued by the Maryland Department of Transportation and is verifiable in the MDOT MBE Directory at mbe.mdot.maryland.gov." },
  { question: "Can I count Definitive Mechanical toward my MBE participation goal?", answer: "Yes. Definitive Mechanical's MDOT MBE certification (Cert No. 20-134) qualifies our engagement toward Maryland MBE participation goals on state and municipal contracts. Maryland's statewide aspirational MBE goal is 29% across participating agencies. Contact us for MBE participation documentation." },
  { question: "Is Definitive Mechanical a Black-owned business?", answer: "Yes. Definitive Mechanical is a minority Black-owned plumbing and mechanical contractor, incorporated in July 2015 and based in Largo, Maryland. Our MDOT MBE certification reflects this ownership status." },
  { question: "Does Definitive Mechanical have any other government certifications?", answer: "Yes. In addition to MDOT MBE certification, Definitive Mechanical holds Virginia SWaM Certification (Cert No. 815255), a CAGE Code (8HCF6) for federal procurement, and NAICS Code 238220 (Plumbing, Heating & A/C Contractors). We are also licensed as Master Plumber and Master Gasfitter in Maryland, DC, Virginia, and Delaware." },
];

export default function MBECertified() {
  return (
    <>
      <Helmet>
        <title>MDOT MBE Certified Plumbing Contractor Maryland | Definitive Mechanical</title>
        <meta name="description" content="Definitive Mechanical is MDOT MBE Certified (Cert No. 20-134) — minority Black-owned plumbing contractor in Maryland. Qualified for MD state and municipal MBE participation goals. Licensed Master Plumber. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/mbe-certified-plumbing-contractor-maryland/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Definitive Mechanical",
          "description": "MDOT MBE Certified minority Black-owned plumbing contractor in Maryland",
          "url": "https://definitivemechanical.com",
          "telephone": "+13016795849",
          "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" },
          "hasCredential": { "@type": "EducationalOccupationalCredential", "name": "MDOT MBE Certification", "credentialCategory": "Minority Business Enterprise", "recognizedBy": { "@type": "Organization", "name": "Maryland Department of Transportation" } }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "45vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "MBE Certified Plumbing Contractor Maryland" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
                MDOT MBE CERTIFIED · CERT NO. 20-134 · MARYLAND
              </p>
              <h1 style={{ fontFamily: "'Playfair Display',serif", color: "white", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
                MDOT MBE Certified Plumbing Contractor — Maryland
              </h1>
              <p style={{ fontFamily: "'Barlow',sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "560px", lineHeight: 1.7 }} className="mb-6">
                Definitive Mechanical is a Maryland MDOT MBE Certified plumbing and mechanical contractor (Cert No. 20-134). We are a minority Black-owned business based in Largo, Maryland, licensed as Master Plumber and Master Gasfitter in Maryland, DC, Virginia, and Delaware. Our MDOT MBE certification qualifies us for Maryland state and municipal procurement programs with MBE participation goals.
              </p>
              <TrustBadges variant="dark" badges={["MDOT MBE Cert No. 20-134", "Minority Black-Owned", "MD Master Plumber #96958", "Licensed in 4 States"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
              <div className="rounded-lg p-10 text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Award size={64} style={{ color: "#009EC6", margin: "0 auto 16px" }} />
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "white", fontSize: "18px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>MDOT MBE</p>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#009EC6", fontSize: "15px", marginTop: "4px" }}>Cert No. 20-134</p>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "8px" }}>Maryland Dept. of Transportation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MDOT MBE */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading eyebrow="ABOUT MDOT MBE" heading="What is MDOT MBE certification?" />
              <div style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "16px", lineHeight: 1.7 }} className="space-y-4">
                <p>MDOT MBE (Minority Business Enterprise) certification is issued by the Maryland Department of Transportation. It confirms that a business is at least 51% owned and controlled by socially and economically disadvantaged individuals — including Black Americans, Hispanic Americans, Asian Pacific Americans, and other groups recognized under federal and state guidelines.</p>
                <p>Maryland's statewide aspirational MBE goal is 29% across participating agencies. State agencies, municipalities, and prime contractors subject to Maryland MBE participation requirements can document Definitive Mechanical's engagement toward those goals.</p>
                <p>Definitive Mechanical's MDOT MBE certification is verifiable in the MDOT MBE Directory at <a href="https://mbe.mdot.maryland.gov" target="_blank" rel="noopener noreferrer" style={{ color: "#009EC6" }}>mbe.mdot.maryland.gov</a>.</p>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="OUR CERTIFICATION" heading="Definitive Mechanical MBE details" />
              <div className="space-y-4">
                {[
                  { label: "Certification Type", value: "MDOT Minority Business Enterprise (MBE)" },
                  { label: "Certification Number", value: "20-134" },
                  { label: "Issuing Authority", value: "Maryland Department of Transportation (MDOT)" },
                  { label: "Business Type", value: "Minority Black-Owned Plumbing & Mechanical Contractor" },
                  { label: "NAICS Code", value: "238220 — Plumbing, Heating & A/C Contractors" },
                  { label: "Verification", value: "mbe.mdot.maryland.gov" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded" style={{ background: "#F0F0F0" }}>
                    <CheckCircle2 size={18} style={{ color: "#009EC6", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "#003060", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em" }}>{item.label}</p>
                      <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "14px", marginTop: "2px" }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire MBE */}
      <section className="py-20" style={{ background: "#003060" }}>
        <div className="container">
          <SectionHeading eyebrow="WHY HIRE AN MBE CONTRACTOR" heading="Why hire an MDOT MBE certified plumbing contractor?" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Building2, title: "Meet MBE Participation Goals", body: "Maryland state agencies and municipal contracts often carry MBE participation goals. Engaging Definitive Mechanical as a subcontractor or prime contractor counts toward those goals." },
              { icon: FileCheck, title: "Verifiable Documentation", body: "We provide MBE participation documentation, certificates of insurance, and licensing verification on request. All documentation is ready for procurement compliance packages." },
              { icon: ShieldCheck, title: "Fully Licensed & Credentialed", body: "MBE certification is one of many credentials. We are also licensed as Master Plumber and Master Gasfitter in MD, DC, VA, and DE — and hold VA SWaM certification and a federal CAGE code." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-md p-6" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
                <item.icon size={32} style={{ color: "#009EC6", marginBottom: "12px" }} />
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "#003060", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }} className="mb-3">{item.title}</p>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "14px", lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="MDOT MBE certification FAQ" />
          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need an MDOT MBE certified plumbing contractor in Maryland?"
        subtext="Definitive Mechanical — MDOT MBE Cert No. 20-134. Licensed Master Plumber in MD, DC, VA & DE. MBE documentation provided on request."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "GOVERNMENT & MUNICIPAL PAGE", href: "/government-municipal-plumbing" }}
        variant="gradient"
      />
    </>
  );
}
