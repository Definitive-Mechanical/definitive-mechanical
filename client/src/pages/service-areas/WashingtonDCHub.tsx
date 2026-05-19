import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const faqs = [
  { question: "Is Definitive Mechanical licensed to work in Washington DC?", answer: "Yes. Definitive Mechanical holds a Washington DC Master Plumber and Master Gasfitter license (#PGM1002236). All plumbing and gas work in DC is performed under this active DC license." },
  { question: "Does Definitive Mechanical serve all DC wards?", answer: "Yes. We provide plumbing service across all 8 wards of Washington DC — from Capitol Hill and Northeast DC to Georgetown, Southwest Waterfront, and Southeast DC. Call (301) 679-5849 to confirm availability for your specific address." },
  { question: "Does Definitive Mechanical provide 24/7 emergency plumbing in Washington DC?", answer: "Yes. We provide 24/7 emergency plumbing service in Washington DC. A live dispatcher answers every call — day, night, weekends, and holidays. Call (301) 679-5849 for immediate emergency response." },
  { question: "Can Definitive Mechanical work on DC government buildings?", answer: "Yes. Definitive Mechanical is MDOT MBE Certified (Cert No. 20-134), Virginia SWaM Certified (Cert No. 815255), and registered for federal procurement (CAGE Code 8HCF6). We are qualified for DC government and federal facility plumbing projects." },
];

const dcNeighborhoods = [
  "Capitol Hill","Northeast DC","Northwest DC","Southeast DC","Southwest DC",
  "Georgetown","Dupont Circle","Adams Morgan","Columbia Heights","Petworth",
  "Anacostia","Congress Heights","Brookland","Brightwood","Tenleytown",
  "Woodley Park","Chevy Chase DC","Friendship Heights","Foggy Bottom","Navy Yard",
];

export default function WashingtonDCHub() {
  return (
    <>
      <Helmet>
        <title>Plumbing Services in Washington DC | Licensed Plumber DC | Definitive Mechanical</title>
        <meta name="description" content="Licensed plumbing contractor serving all of Washington DC. DC Master Plumber & Gasfitter #PGM1002236. 24/7 emergency plumbing. All DC wards. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/washington-dc/" />
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "40vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: "Washington DC" }]} />
          <div className="mt-6">
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
              WASHINGTON DC PLUMBING · LICENSED DC MASTER PLUMBER #PGM1002236
            </p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
              Plumbing Services in Washington DC
            </h1>
            <p style={{ fontFamily: "'Barlow',sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "600px", lineHeight: 1.7 }} className="mb-6">
              Definitive Mechanical holds an active Washington DC Master Plumber and Master Gasfitter license (#PGM1002236). We serve all 8 wards of Washington DC — residential, commercial, and government facilities. 24/7 emergency service available.
            </p>
            <TrustBadges variant="dark" badges={["DC Master Plumber #PGM1002236", "All 8 DC Wards", "Government Qualified", "24/7 Emergency"]} />
            <div className="flex flex-wrap gap-4 mt-8">
              <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
              <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
            </div>
          </div>
        </div>
      </section>

      {/* DC Neighborhoods */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="DC NEIGHBORHOODS" heading="Washington DC neighborhoods we serve" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
            {dcNeighborhoods.map((n, i) => (
              <div key={i} className="bg-white rounded px-3 py-3 text-center" style={{ boxShadow: "0 2px 8px rgba(0,48,96,0.07)", border: "1px solid #E8EFF5" }}>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "13px" }}>{n}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "14px", textAlign: "center", marginTop: "20px" }}>
            Not seeing your neighborhood? Call (301) 679-5849 — we serve all of Washington DC.
          </p>
        </div>
      </section>

      {/* DC License */}
      <section className="py-16" style={{ background: "#003060" }}>
        <div className="container">
          <SectionHeading eyebrow="DC LICENSE" heading={`Definitive Mechanical's Washington DC plumbing license`} light />
          <div className="max-w-2xl mx-auto mt-8">
            <div className="flex items-start gap-4 p-6 rounded-md" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <CheckCircle2 size={24} style={{ color: "#009EC6", flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "white", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>DC Master Plumber & Master Gasfitter</p>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#009EC6", fontSize: "15px", marginTop: "4px" }}>License #PGM1002236</p>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.6, marginTop: "8px" }}>
                  This active DC license authorizes Definitive Mechanical to perform plumbing and gas work in Washington DC. All work is performed by or under the direct supervision of our licensed Master Plumber and Master Gasfitter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Washington DC plumbing FAQ" />
          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a licensed plumber in Washington DC? Call now."
        subtext="DC Master Plumber #PGM1002236. 24/7 emergency service. All DC wards. Same rate any time of day."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
