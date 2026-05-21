import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { getServiceImage } from "@/lib/serviceImages";
import { ALL_SERVICE_CATEGORIES } from "@/lib/allServices";
import { Phone, ShieldCheck, MapPin, Key } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const CITIES = [
  { name: "Largo, MD", href: "/service-areas/maryland/prince-georges-county/largo-md/", note: "Our home base" },
  { name: "Bowie, MD", href: "/service-areas/maryland/prince-georges-county/bowie-md/", note: "Belair neighborhoods" },
  { name: "Fort Washington, MD", href: "/service-areas/maryland/prince-georges-county/fort-washington-md/", note: "Waterfront communities" },
  { name: "University Park, MD", href: "/service-areas/maryland/prince-georges-county/university-park-md/", note: "College Park adjacent" },
  { name: "Woodmore, MD", href: "/service-areas/maryland/prince-georges-county/woodmore-md/", note: "Luxury golf community" },
  { name: "Fairwood, MD", href: "/service-areas/maryland/prince-georges-county/fairwood-md/", note: "Planned community" },
  { name: "Brock Hall, MD", href: "/service-areas/maryland/prince-georges-county/brock-hall-md/", note: "Residential community" },
  { name: "Croom, MD", href: "/service-areas/maryland/prince-georges-county/croom-md/", note: "Rural southern PG" },
  { name: "Queensland, MD", href: "/service-areas/maryland/prince-georges-county/queensland-md/", note: "Residential area" },
];

const FAQ_ITEMS = [
  { question: "What areas of Prince George's County do you serve?", answer: "We serve all of Prince George's County including Largo (our home base), Bowie, Fort Washington, Hyattsville, College Park, Laurel, Greenbelt, Upper Marlboro, Oxon Hill, Landover, Capitol Heights, Suitland, and all other PG County communities. Call (301) 679-5849." },
  { question: "Are you licensed for plumbing in Prince George's County?", answer: "Yes. WSSC Master Plumber/Gasfitter #73696 and Maryland State Master Plumber/Gasfitter #96958 authorize all plumbing and gas work throughout Prince George's County. We are based in Largo, MD." },
  { question: "Do you provide 24/7 emergency plumbing in Prince George's County?", answer: "Yes. Emergency plumbing available 24/7 across all of Prince George's County. All services have a trip fee. A live dispatcher answers every call at (301) 679-5849." },
  { question: "Are you MDOT MBE certified for government work in Prince George's County?", answer: "Yes. MDOT MBE Cert 20-134 and CAGE Code 8HCF6 support government and procurement-eligible plumbing contracts throughout Prince George's County and the state of Maryland." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" }, { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://definitivemechanical.com/service-areas/" }, { "@type": "ListItem", "position": 3, "name": "Maryland", "item": "https://definitivemechanical.com/service-areas/maryland/" }, { "@type": "ListItem", "position": 4, "name": "Prince George's County" }] },
    { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ],
};

export default function PrinceGeorgesCounty() {
  return (
    <>
      <Helmet>
        <title>Plumber in Prince George's County MD | Definitive Mechanical | (301) 679-5849</title>
        <meta name="description" content={`Licensed plumbing services throughout Prince George's County MD. Based in Largo. WSSC #73696  MD #96958  MDOT MBE Cert 20-134. 24/7 emergency. Call (301) 679-5849.`} />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "45vh" }} className="flex items-center py-16">
        <div className="container text-center">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas/" }, { label: "Maryland", href: "/service-areas/maryland/" }, { label: "Prince George's County" }]}/>
          <p className="mt-6 mb-3 uppercase tracking-widest text-xs font-bold" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>PLUMBING SERVICES · PRINCE GEORGE'S COUNTY, MD · HOME BASE</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.0 }}>Plumber in Prince George's County, MD</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
            Definitive Mechanical is a Licensed Black Owned contractor based in Largo, Prince George's County — providing licensed plumbing, gas, and mechanical services throughout PG County. WSSC #73696 · MD State #96958 · MDOT MBE Cert 20-134. 24/7 emergency service. Call (301) 679-5849.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+13016795849" className="flex items-center gap-2 text-white font-bold rounded-md px-8 py-4 hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>
              <Phone size={20} /> CALL (301) 679-5849
            </a>
            <a href="/contact/" className="inline-flex items-center gap-2 font-bold rounded-md px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy)] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px" }}>Request Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-white/70 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="flex items-center gap-1"><MapPin size={14} /> Based in Largo, MD</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> WSSC #73696</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MD #96958</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> MDOT MBE Cert 20-134</span>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="bg-white py-16">
        <div className="container">
          <SectionHeading eyebrow="COMMUNITIES SERVED" heading={`Prince George's County cities and communities we serve`} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {CITIES.map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 rounded-md p-4 hover:border-cyan-400 hover:shadow-md transition-all group">
                <p className="font-bold text-sm group-hover:text-cyan-600" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow Condensed', sans-serif" }}>{city.name}</p>
                <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Barlow', sans-serif" }}>{city.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services — categorized photo grid */}
      <section style={{ backgroundColor: "var(--surface-1)", padding: "64px 0" }}>
        <div className="container">
          <div style={{ marginBottom: "36px" }}>
            <SectionHeading eyebrow="OUR SERVICES" heading={`Plumbing services available throughout Prince George's County`} />
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-2)", fontSize: "15px", lineHeight: 1.75, marginTop: "12px", maxWidth: "640px" }}>
              Full-service licensed plumbing for residential, commercial, and government clients throughout Prince George's County. Every job performed by licensed plumbing professionals under Master Plumber license.
            </p>
          </div>

          {ALL_SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.key} style={{ marginBottom: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                <div style={{ height: "3px", width: "28px", background: cat.color, flexShrink: 0, borderRadius: "2px" }} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.12em", color: '#0A0A0A' }}>{cat.title}</span>
                <div style={{ height: "1px", flex: 1, background: "#E6E8EE" }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((svc, i) => (
                  <Link key={i} href={svc.href} style={{ textDecoration: "none", display: "block" }}>
                    <div
                      className="cursor-pointer"
                      style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(6,59,99,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(6,59,99,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                    >
                      <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                        <img
                          src={getServiceImage(svc.href.replace(/^\//, "").replace(/\/$/, "").toLowerCase())}
                          alt={svc.label}
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                          loading="lazy"
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(3,24,56,0.25) 0%, rgba(3,24,56,0.55) 100%)" }} />
                      </div>
                      <div style={{ padding: "14px 16px 16px" }}>
                        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: '#0A0A0A', marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0075BA", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section style={{ backgroundColor: "var(--brand-navy)" }} className="py-14">
        <div className="container">
          <SectionHeading eyebrow="CREDENTIALS" heading={`Licenses and certifications for Prince George's County`} light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
            {[{ label: "WSSC Master Plumber/Gasfitter", num: "#73696" }, { label: "Maryland State Master Plumber/Gasfitter", num: "#96958" }, { label: "MDOT MBE Certification", num: "Cert 20-134" }].map((cred) => (
              <div key={cred.label} className="bg-white rounded-md px-6 py-4 flex flex-col items-center text-center">
                <Key size={24} style={{ color: "var(--brand-cyan)" }} className="mb-2" />
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--brand-navy)", fontFamily: "'Barlow', sans-serif" }}>{cred.label}</p>
                <p className="font-bold text-lg" style={{ color: "var(--brand-cyan)", fontFamily: "'Barlow Condensed', sans-serif" }}>{cred.num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--brand-navy-dark)" }} className="py-20">
        <div className="container max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" heading={`Plumbing service in Prince George's County — common questions`} light />
          <div className="mt-8"><FAQAccordion items={FAQ_ITEMS} schema={true} variant="dark" /></div>
        </div>
      </section>

      <CTABanner heading={`Need a plumber in Prince George's County?`} subtext="Based in Largo, MD. WSSC #73696 · MD #96958 · MDOT MBE Cert 20-134 · 24/7 Emergency." primaryBtn={{ text: " CALL (301) 679-5849", href: "tel:+13016795849" }} secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact/" }} variant="gradient" />
    </>
  );
}
