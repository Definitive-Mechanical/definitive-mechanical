import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { MapPin, CheckCircle2 } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const vaCities = [
  { name: "Alexandria, VA", href: "/service-areas/northern-virginia/fairfax-county/alexandria-va", county: "Fairfax County / City of Alexandria", desc: "City of Alexandria and Fairfax County plumbing." },
  { name: "Arlington, VA", href: "/service-areas/northern-virginia/arlington-county/arlington-va", county: "Arlington County", desc: "Arlington County residential and commercial plumbing." },
  { name: "McLean, VA", href: "/service-areas/northern-virginia/fairfax-county/mclean-va", county: "Fairfax County", desc: "High-end residential plumbing in McLean." },
  { name: "Springfield, VA", href: "/service-areas/northern-virginia/fairfax-county/springfield-va", county: "Fairfax County", desc: "Residential and commercial plumbing in Springfield." },
  { name: "Vienna, VA", href: "/service-areas/northern-virginia/fairfax-county/vienna-va", county: "Fairfax County", desc: "Town of Vienna and surrounding Fairfax County." },
];

const faqs = [
  { question: "Is Definitive Mechanical licensed to work in Virginia?", answer: "Yes. Definitive Mechanical holds a Virginia Master Plumber and Master Gasfitter license (#2710064209) and a Virginia Class A Contractor license (#2705181061). We are also Virginia SWaM Certified (Cert No. 815255)." },
  { question: "What Northern Virginia counties does Definitive Mechanical serve?", answer: "We serve Fairfax County, Arlington County, Loudoun County, and Prince William County in Northern Virginia. Key cities include Alexandria, Arlington, McLean, Springfield, Vienna, Reston, Herndon, Tysons, and Falls Church." },
  { question: "Does Definitive Mechanical provide 24/7 emergency plumbing in Northern Virginia?", answer: "Yes. We provide 24/7 emergency plumbing service across Northern Virginia. A live dispatcher answers every call — day, night, weekends, and holidays. Call (301) 679-5849 for immediate emergency response." },
  { question: "Is Definitive Mechanical Virginia SWaM certified?", answer: "Yes. Definitive Mechanical is Virginia SWaM Certified (Cert No. 815255) through the Virginia Department of Small Business & Supplier Diversity. This certification qualifies us for Virginia state and local government procurement programs with SWaM utilization goals." },
];

export default function NorthernVirginiaHub() {
  return (
    <>
      <Helmet>
        <title>Plumbing Services in Northern Virginia | Licensed VA Plumber | Definitive Mechanical</title>
        <meta name="description" content="Licensed plumbing contractor serving Northern Virginia — Fairfax County, Arlington County, Loudoun County, Prince William County. VA Master Plumber #2710064209. SWaM Certified. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/northern-virginia/" />
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "40vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: "Northern Virginia" }]} />
          <div className="mt-6">
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
              NORTHERN VIRGINIA PLUMBING · VA MASTER PLUMBER #2710064209
            </p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
              Plumbing Services in Northern Virginia
            </h1>
            <p style={{ fontFamily: "'Barlow',sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "600px", lineHeight: 1.7 }} className="mb-6">
              Definitive Mechanical holds active Virginia Master Plumber and Master Gasfitter licenses (#2710064209) and a Virginia Class A Contractor license (#2705181061). We serve Fairfax County, Arlington County, Loudoun County, and Prince William County. Virginia SWaM Certified. 24/7 emergency service available.
            </p>
            <TrustBadges variant="dark" badges={["VA Master Plumber #2710064209", "VA Class A Contractor", "VA SWaM Certified", "24/7 Emergency"]} />
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
          <SectionHeading eyebrow="NORTHERN VIRGINIA CITIES" heading="Northern Virginia cities we serve" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {vaCities.map((city, i) => (
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

          {/* Additional VA Cities */}
          <div className="mt-12">
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "#003060", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.15em" }} className="mb-4">Additional Northern Virginia Communities</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {["Reston, VA","Herndon, VA","Tysons, VA","Great Falls, VA","Oakton, VA","Centreville, VA","Annandale, VA","Burke, VA","Lorton, VA","Falls Church, VA","Fairfax, VA","Chantilly, VA","Ashburn, VA","Leesburg, VA","Sterling, VA"].map((city, i) => (
                <div key={i} className="bg-white rounded px-3 py-2 text-center" style={{ boxShadow: "0 1px 4px rgba(0,48,96,0.06)", border: "1px solid #E8EFF5" }}>
                  <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "13px" }}>{city}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VA Licenses */}
      <section className="py-16" style={{ background: "#003060" }}>
        <div className="container">
          <SectionHeading eyebrow="VIRGINIA LICENSES" heading="Definitive Mechanical's Virginia plumbing licenses" variant="light" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">
            {[
              { label: "Virginia Master Plumber & Master Gasfitter", number: "#2710064209" },
              { label: "Virginia Class A Contractor License", number: "#2705181061" },
              { label: "Virginia SWaM Certification", number: "Cert No. 815255" },
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
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Northern Virginia plumbing FAQ" />
          <div className="max-w-3xl mx-auto mt-8">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need a licensed plumber in Northern Virginia? Call now."
        subtext="VA Master Plumber #2710064209. SWaM Certified. 24/7 emergency service. Same rate any time of day."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
