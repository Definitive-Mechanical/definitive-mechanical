import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { MapPin, CheckCircle2 } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const mdCities = [
  { name: "Largo, MD", href: "/service-areas/maryland/prince-georges-county/largo-md", county: "Prince George's County", desc: "Our home base — fastest response times in PG County." },
  { name: "Bowie, MD", href: "/service-areas/maryland/prince-georges-county/bowie-md", county: "Prince George's County", desc: "Residential and commercial plumbing across Bowie." },
  { name: "Fort Washington, MD", href: "/service-areas/maryland/prince-georges-county/fort-washington-md", county: "Prince George's County", desc: "Full plumbing services for Fort Washington homes and businesses." },
  { name: "Rockville, MD", href: "/service-areas/maryland/montgomery-county/rockville-md", county: "Montgomery County", desc: "City of Rockville licensed — permit and inspection coordination." },
  { name: "Bethesda, MD", href: "/service-areas/maryland/montgomery-county/bethesda-md", county: "Montgomery County", desc: "Residential plumbing for Bethesda and Chevy Chase." },
  { name: "Potomac, MD", href: "/service-areas/maryland/montgomery-county/potomac-md", county: "Montgomery County", desc: "High-end residential plumbing in Potomac." },
  { name: "Ellicott City, MD", href: "/service-areas/maryland/howard-county/ellicott-city-md", county: "Howard County", desc: "Howard County licensed plumbing contractor." },
  { name: "Waldorf, MD", href: "/service-areas/maryland/charles-county/waldorf-md", county: "Charles County", desc: "Charles County plumbing — residential and commercial." },
];

const faqs = [
  { question: "Is Definitive Mechanical licensed to work in Maryland?", answer: "Yes. Definitive Mechanical holds a Maryland Master Plumber and Master Gasfitter license (State #96958), WSSC license (#73696), Howard County license (#20020096958), Anne Arundel County license (#A2-6139), and City of Rockville license (#PLL-0002113). We are also licensed as a Maryland Home Improvement Contractor (#134723)." },
  { question: "What Maryland counties does Definitive Mechanical serve?", answer: "We serve Prince George's County, Montgomery County, Howard County, Anne Arundel County, and Charles County. Our primary base is in Largo, MD (Prince George's County), which gives us fast response times across the entire Maryland service area." },
  { question: "Does Definitive Mechanical provide 24/7 emergency plumbing in Maryland?", answer: "Yes. We provide 24/7 emergency plumbing service across all Maryland counties we serve. A live dispatcher answers every call — day, night, weekends, and holidays. Call (301) 679-5849 for immediate emergency response." },
  { question: "Is Definitive Mechanical MDOT MBE certified in Maryland?", answer: "Yes. Definitive Mechanical is MDOT MBE Certified (Cert No. 20-134) through the Maryland Department of Transportation. This certification qualifies us for Maryland state and municipal procurement programs with MBE participation goals." },
];

export default function MarylandHub() {
  return (
    <>
      <Helmet>
        <title>Plumbing Services in Maryland — MD, DC & VA | Definitive Mechanical</title>
        <meta name="description" content="Licensed plumbing contractor serving all of Maryland — Prince George's County, Montgomery County, Howard County, Anne Arundel County, and Charles County. MD Master Plumber #96958. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/" />
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "40vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: "Maryland" }]} />
          <div className="mt-6">
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
              MARYLAND PLUMBING · LICENSED MASTER PLUMBER #96958
            </p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
              Plumbing Services in Maryland
            </h1>
            <p style={{ fontFamily: "'Barlow',sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "600px", lineHeight: 1.7 }} className="mb-6">
              Definitive Mechanical is a Maryland-licensed Master Plumber and Master Gasfitter serving Prince George's County, Montgomery County, Howard County, Anne Arundel County, and Charles County. Based in Largo, MD. MDOT MBE Certified. 24/7 emergency service available.
            </p>
            <TrustBadges variant="dark" badges={["MD Master Plumber #96958", "WSSC #73696", "MDOT MBE #20-134", "24/7 Emergency"]} />
            <div className="flex flex-wrap gap-4 mt-8">
              <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
              <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="MARYLAND CITIES" heading="Maryland cities and counties we serve" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {mdCities.map((city, i) => (
              <Link key={i} href={city.href}>
                <div className="bg-white rounded-md p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: "0 2px 12px rgba(0,48,96,0.08)", border: "1px solid #E8EFF5", borderTop: "4px solid #009EC6" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} style={{ color: "#009EC6" }} />
                    <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "#003060", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{city.name}</p>
                  </div>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }} className="mb-2">{city.county}</p>
                  <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "13px", lineHeight: 1.5 }}>{city.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MD Licenses */}
      <section className="py-16" style={{ background: "#003060" }}>
        <div className="container">
          <SectionHeading eyebrow="MARYLAND LICENSES" heading="Definitive Mechanical's Maryland plumbing licenses" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Maryland State Master Plumber/Gasfitter", number: "#96958" },
              { label: "WSSC (Washington Suburban Sanitary Commission)", number: "#73696" },
              { label: "Howard County Plumbing License", number: "#20020096958" },
              { label: "Anne Arundel County Plumbing License", number: "#A2-6139" },
              { label: "City of Rockville Plumbing License", number: "#PLL-0002113" },
              { label: "MD Home Improvement Contractor", number: "#134723" },
            ].map((lic, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <CheckCircle2 size={18} style={{ color: "#009EC6", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "white", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{lic.label}</p>
                  <p style={{ fontFamily: "'Barlow',sans-serif", color: "#009EC6", fontSize: "13px", marginTop: "2px" }}>{lic.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Maryland plumbing FAQ" />
          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a licensed plumber in Maryland? Call now."
        subtext="MD Master Plumber #96958. MDOT MBE Certified. 24/7 emergency service. Same rate any time of day."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
