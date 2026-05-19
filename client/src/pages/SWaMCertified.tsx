import { Helmet } from "react-helmet-async";
import { Award, CheckCircle2, FileCheck, Building2, ShieldCheck } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const faqs = [
  { question: "What is Virginia SWaM certification?", answer: "Virginia SWaM (Small, Women-owned, and Minority-owned Business) certification is issued by the Virginia Department of Small Business & Supplier Diversity (SBSD). It confirms that a business qualifies as a small, women-owned, or minority-owned enterprise under Virginia's definitions. SWaM-certified businesses are listed in the Virginia SBSD SWaM Directory and are eligible for Virginia state and local government procurement programs with SWaM utilization goals." },
  { question: "What is Definitive Mechanical's Virginia SWaM certification number?", answer: "Definitive Mechanical's Virginia SWaM Certification Number is 815255. This certification is issued by the Virginia Department of Small Business & Supplier Diversity and is verifiable in the Virginia SBSD SWaM Directory at sbsd.virginia.gov." },
  { question: "Can I count Definitive Mechanical toward my Virginia SWaM utilization goal?", answer: "Yes. Definitive Mechanical's Virginia SWaM certification (Cert No. 815255) qualifies our engagement toward Virginia SWaM utilization goals on state and local government contracts. Contact us for SWaM participation documentation." },
  { question: "Does Definitive Mechanical have any other government certifications?", answer: "Yes. In addition to Virginia SWaM certification, Definitive Mechanical holds MDOT MBE Certification (Cert No. 20-134) in Maryland, a CAGE Code (8HCF6) for federal procurement, and NAICS Code 238220. We are licensed as Master Plumber and Master Gasfitter in Maryland, DC, Virginia, and Delaware." },
  { question: "Is Definitive Mechanical licensed to perform plumbing work in Virginia?", answer: "Yes. Definitive Mechanical holds a Virginia Master Plumber and Master Gasfitter license (#2710064209) and a Virginia Class A Contractor license (#2705181061). All plumbing and gas work in Virginia is performed under these active Virginia licenses." },
];

export default function SWaMCertified() {
  return (
    <>
      <Helmet>
        <title>Virginia SWaM Certified Plumbing Contractor | Definitive Mechanical</title>
        <meta name="description" content="Definitive Mechanical is Virginia SWaM Certified (Cert No. 815255) — minority-owned plumbing contractor serving Northern Virginia. VA Master Plumber #2710064209. Qualified for VA SWaM utilization goals. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/swam-certified-plumbing-contractor-virginia/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Definitive Mechanical",
          "description": "Virginia SWaM Certified minority-owned plumbing contractor serving Northern Virginia",
          "url": "https://definitivemechanical.com",
          "telephone": "+13016795849",
          "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" },
          "hasCredential": { "@type": "EducationalOccupationalCredential", "name": "Virginia SWaM Certification", "credentialCategory": "Small, Women-owned, and Minority-owned Business", "recognizedBy": { "@type": "Organization", "name": "Virginia Department of Small Business & Supplier Diversity" } }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "45vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "SWaM Certified Plumbing Contractor Virginia" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
                VIRGINIA SWAM CERTIFIED · CERT NO. 815255 · NORTHERN VIRGINIA
              </p>
              <h1 style={{ fontFamily: "'Playfair Display',serif", color: "white", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
                Virginia SWaM Certified Plumbing Contractor
              </h1>
              <p style={{ fontFamily: "'Barlow',sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "560px", lineHeight: 1.7 }} className="mb-6">
                Definitive Mechanical is a Virginia SWaM Certified plumbing and mechanical contractor (Cert No. 815255), issued by the Virginia Department of Small Business & Supplier Diversity. We are a minority-owned business licensed as Master Plumber and Master Gasfitter in Virginia (#2710064209) and hold a Virginia Class A Contractor license (#2705181061). Our SWaM certification qualifies us for Virginia state and local government procurement programs with SWaM utilization goals.
              </p>
              <TrustBadges variant="dark" badges={["VA SWaM Cert No. 815255", "Minority-Owned Business", "VA Master Plumber #2710064209", "VA Class A Contractor"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
              <div className="rounded-lg p-10 text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Award size={64} style={{ color: "#009EC6", margin: "0 auto 16px" }} />
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "white", fontSize: "18px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>VA SWaM</p>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#009EC6", fontSize: "15px", marginTop: "4px" }}>Cert No. 815255</p>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "8px" }}>Virginia SBSD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SWaM */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading eyebrow="ABOUT VIRGINIA SWAM" heading="What is Virginia SWaM certification?" />
              <div style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "16px", lineHeight: 1.7 }} className="space-y-4">
                <p>Virginia SWaM (Small, Women-owned, and Minority-owned Business) certification is issued by the Virginia Department of Small Business & Supplier Diversity (SBSD). It confirms that a business qualifies as a small, women-owned, or minority-owned enterprise under Virginia's definitions.</p>
                <p>Virginia state agencies and local governments often have SWaM utilization goals for contracts. Prime contractors working on Virginia government projects can document their engagement of SWaM-certified subcontractors toward those goals.</p>
                <p>Definitive Mechanical's SWaM certification is verifiable in the Virginia SBSD SWaM Directory at <a href="https://sbsd.virginia.gov" target="_blank" rel="noopener noreferrer" style={{ color: "#009EC6" }}>sbsd.virginia.gov</a>.</p>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="OUR CERTIFICATION" heading="Definitive Mechanical SWaM details" />
              <div className="space-y-4">
                {[
                  { label: "Certification Type", value: "Virginia SWaM (Small, Women-owned, Minority-owned Business)" },
                  { label: "Certification Number", value: "815255" },
                  { label: "Issuing Authority", value: "Virginia Department of Small Business & Supplier Diversity (SBSD)" },
                  { label: "Business Type", value: "Minority-Owned Plumbing & Mechanical Contractor" },
                  { label: "NAICS Code", value: "238220 — Plumbing, Heating & A/C Contractors" },
                  { label: "Verification", value: "sbsd.virginia.gov" },
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

      {/* Why Hire SWaM */}
      <section className="py-20" style={{ background: "#003060" }}>
        <div className="container">
          <SectionHeading eyebrow="WHY HIRE A SWAM CONTRACTOR" heading="Why hire a Virginia SWaM certified plumbing contractor?" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Building2, title: "Meet SWaM Utilization Goals", body: "Virginia state agencies and local government contracts often carry SWaM utilization goals. Engaging Definitive Mechanical counts toward those goals with verifiable documentation." },
              { icon: FileCheck, title: "Ready Documentation", body: "We provide SWaM participation documentation, certificates of insurance, and licensing verification on request — ready for Virginia procurement compliance packages." },
              { icon: ShieldCheck, title: "Fully Licensed in Virginia", body: "SWaM certification is one of many credentials. We hold VA Master Plumber/Gasfitter license #2710064209, VA Class A Contractor #2705181061, and serve all of Northern Virginia." },
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
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Virginia SWaM certification FAQ" />
          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a Virginia SWaM certified plumbing contractor?"
        subtext="Definitive Mechanical — VA SWaM Cert No. 815255. Licensed Master Plumber in VA, MD, DC & DE. SWaM documentation provided on request."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "GOVERNMENT & MUNICIPAL PAGE", href: "/government-municipal-plumbing" }}
        variant="gradient"
      />
    </>
  );
}
