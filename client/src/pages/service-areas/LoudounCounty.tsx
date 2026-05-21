import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Phone, ShieldCheck, Key } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

const CITIES = [
  { name: "Brambleton, VA", href: "/service-areas/northern-virginia/loudoun-county/brambleton-va/", note: "Master-planned community" },
  { name: "One Loudoun, VA", href: "/service-areas/northern-virginia/loudoun-county/one-loudoun-va/", note: "Urban mixed-use district" },
  { name: "Belmont, VA", href: "/service-areas/northern-virginia/loudoun-county/belmont-va/", note: "Ashburn area" },
  { name: "Broadlands, VA", href: "/service-areas/northern-virginia/loudoun-county/broadlands-va/", note: "Planned community" },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://definitivemechanical.com/service-areas/" }, { "@type": "ListItem", "position": 3, "name": "Northern Virginia", "item": "https://definitivemechanical.com/service-areas/northern-virginia/" }, { "@type": "ListItem", "position": 4, "name": "Loudoun County" }],
};

export default function LoudounCounty() {
  return (
    <>
      <Helmet>
        <title>Plumber in Loudoun County VA | Definitive Mechanical | (301) 679-5849</title>
        <meta name="description" content="Licensed plumbing services in Loudoun County VA — Leesburg, Ashburn, Sterling, and beyond. VA Class A #2705181061. 24/7 emergency. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-navy-dark) 100%)", minHeight: "45vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas/" }, { label: "Northern Virginia", href: "/service-areas/northern-virginia/" }, { label: "Loudoun County" }]}/>
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>PLUMBING SERVICES  LOUDOUN COUNTY, VA</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.0 }}>Plumber in Loudoun County, VA</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical is a Licensed Black Owned contractor providing licensed plumbing services in Loudoun County — Leesburg, Ashburn, Sterling, Lansdowne, Brambleton, and surrounding communities. VA Class A #2705181061  VA Master Plumber #2710064209. 24/7 emergency. Call (301) 679-5849.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+13016795849" className="flex items-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>
              <Phone size={20} /> CALL (301) 679-5849
            </a>
            <a href="/contact/" className="inline-flex items-center gap-2 font-bold rounded-md px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--brand-blue)] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>Request Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> VA Class A #2705181061</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> VA Master Plumber #2710064209</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="COMMUNITIES SERVED" heading="Loudoun County communities we serve" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {CITIES.map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 rounded-md p-4 hover:border-cyan-400 hover:shadow-md transition-all group">
                <p className="font-bold text-sm group-hover:text-cyan-600" style={{ color: "var(--brand-blue)", fontFamily: "'Barlow Condensed', sans-serif" }}>{city.name}</p>
                <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Barlow', sans-serif" }}>{city.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--brand-blue)" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="CREDENTIALS" heading="Virginia licenses for Loudoun County" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            {[{ label: "Virginia Class A Contractor", num: "#2705181061" }, { label: "Virginia Master Plumber/Gasfitter", num: "#2710064209" }].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={24} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--brand-blue)", fontFamily: "'Barlow', sans-serif" }}>{cred.label}</p>
                <p className="font-bold text-lg" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>{cred.num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Need a plumber in Loudoun County?" subtext="VA Class A #2705181061  VA Master Plumber #2710064209  24/7 Emergency." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
