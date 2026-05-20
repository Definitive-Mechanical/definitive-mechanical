import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  AlertCircle, ShieldCheck, Wind, Building2, Landmark, Wrench, CheckCircle2
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Plumber"],
      "name": "Definitive Mechanical",
      "telephone": "+13016795849",
      "areaServed": { "@type": "City", "name": "Washington", "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C." },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "40" }
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},
      {"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},
      {"@type":"ListItem","position":3,"name":"Washington DC","item":"https://definitivemechanical.com/service-areas/washington-dc/"}
    ]},
    { "@type": "FAQPage", "mainEntity": [
      {"@type":"Question","name":"What plumbing services do you offer in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"Full-service plumbing in Washington DC including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial and government plumbing. DC Master Plumber/Gasfitter #PGA2022-00025. Call (301) 679-5849."}},
      {"@type":"Question","name":"Are you licensed to do plumbing in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"Yes. Definitive Mechanical holds DC Master Plumber/Gasfitter License #PGA2022-00025 — issued by the DC Department of Consumer and Regulatory Affairs (DCRA). This is the specific DC license required for permitted plumbing work within the District of Columbia."}},
      {"@type":"Question","name":"Do you provide 24/7 emergency plumbing in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"Yes. Emergency plumbing in Washington DC is available 24/7. A live dispatcher answers every call. Licensed DC Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849."}},
      {"@type":"Question","name":"Do you serve government agencies and contractors in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"Yes. MDOT MBE Certification (Cert No. 20-134), Virginia SWaM Cert No. 815255, and CAGE Code 8HCF6 support federal and DC government procurement. We can serve as a prime contractor or subcontractor for government plumbing work in the District."}}
    ]}
  ]
};

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "including Emergency Plumber Washington DC" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Video Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: AlertCircle, label: "Gas Leak Repair", href: "/gas-leak-repair", note: "24/7 emergency" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Water Line Repair", href: "/water-line-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing", note: "MDOT MBE Certified" },
  { icon: Landmark, label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing", note: "CAGE 8HCF6" },
];

const dcAreas = [
  { icon: Building2, title: "Capitol Hill and Eastern neighborhoods", body: "Capitol Hill's 19th and early 20th century rowhouses are among the most historically significant residential structures in the District. Original terra cotta sewer laterals, aged cast iron drains, and boiler-based heating systems are common. Camera inspection before purchase is strongly recommended for Capitol Hill properties." },
  { icon: Building2, title: "Northwest DC — Georgetown, Dupont, Chevy Chase DC", body: "Northwest DC's high-value residential neighborhoods include properties across multiple centuries of construction. Georgetown's Federal-era rowhouses, Dupont Circle's Victorian and Edwardian stock, and Chevy Chase DC's early 20th century homes all present distinct plumbing service profiles." },
  { icon: Landmark, title: "Government and commercial facilities", body: "The District is home to the highest concentration of federal government facilities in the country. MDOT MBE Cert No. 20-134 and CAGE Code 8HCF6 support federal procurement. DC Master Plumber/Gasfitter #PGA2022-00025 authorizes all DC plumbing work." },
  { icon: Building2, title: "High-rise residential and commercial", body: "DC's dense urban core includes significant high-rise residential, hotel, and commercial properties with building-wide plumbing systems, commercial backflow compliance requirements, and ongoing commercial mechanical service needs." },
];

const faqs = [
  { question: "What plumbing services do you offer in Washington DC?", answer: "Full-service plumbing in Washington DC including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial and government plumbing. DC Master Plumber/Gasfitter #PGA2022-00025. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Washington DC?", answer: "Yes. Definitive Mechanical holds DC Master Plumber/Gasfitter License #PGA2022-00025 — issued by the DC Department of Consumer and Regulatory Affairs (DCRA). This is the specific DC license required for permitted plumbing work within the District of Columbia." },
  { question: "Do you provide 24/7 emergency plumbing in Washington DC?", answer: "Yes. Emergency plumbing in Washington DC is available 24/7. A live dispatcher answers every call. Licensed DC Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
  { question: "Do you serve government agencies and contractors in Washington DC?", answer: "Yes. MDOT MBE Certification (Cert No. 20-134), Virginia SWaM Cert No. 815255, and CAGE Code 8HCF6 support federal and DC government procurement. We can serve as a prime contractor or subcontractor for government plumbing work in the District." },
];

export default function WashingtonDC() {
  return (
    <>
      <Helmet>
        <title>Plumber in Washington DC | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Washington DC? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & government plumbing. DC licensed. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/washington-dc/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Washington DC"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", color:"#009EC6", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · WASHINGTON, DC · DISTRICT OF COLUMBIA
              </p>
              <h1 style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:"clamp(28px,4vw,40px)", fontWeight:700, lineHeight:1.15 }} className="mb-4">
                Plumber in Washington, DC
              </h1>
              <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Washington, DC for homeowners, businesses, and government facilities. Emergency plumbing, water heater repair, drain cleaning, sewer service, gas line work, and backflow certification available 24/7. DC Master Plumber/Gasfitter #PGA2022-00025. MDOT MBE Certified. CAGE Code 8HCF6. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["DC Master Plumber/Gasfitter #PGA2022-00025","MDOT MBE Cert 20-134","CAGE 8HCF6","24/7 Emergency","Serving DC from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&q=80" alt="Licensed plumber Washington DC — DC Master Plumber #PGA2022-00025, MDOT MBE Certified" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Washington, DC?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Washington DC is one of the most complex plumbing markets in the country — a dense urban environment with a mix of historic residential properties, modern high-rise development, government facilities, commercial buildings, and a regulatory environment that requires specific DC licensure for all permitted plumbing work.
          </p>

          {/* DC License Callout */}
          <div className="bg-white border-2 rounded-lg p-5 max-w-2xl mx-auto mb-8" style={{ borderColor:"#009EC6" }}>
            <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"12px" }}>
              DC PLUMBING CREDENTIALS
            </p>
            {[
              "DC Master Plumber/Gasfitter #PGA2022-00025 — issued by DCRA, required for all permitted DC plumbing work",
              "MDOT MBE Certification No. 20-134 — eligible for DC and federal government procurement",
              "CAGE Code 8HCF6 — federal procurement identifier",
              "Virginia SWaM Cert No. 815255 — for Virginia government procurement adjacent to DC",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <CheckCircle2 size={16} style={{ color:"#009EC6", flexShrink:0, marginTop:2 }} />
                <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px" }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="bg-white rounded-md p-4 flex items-start gap-3 border-t-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow:"0 1px 4px rgba(0,48,96,0.08)", border:"1px solid #E8EFF5", borderTop:"3px solid #009EC6" }}>
                  <svc.icon size={20} style={{ color:"#009EC6", flexShrink:0, marginTop:2 }} />
                  <div>
                    <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:500, color:"#003060", fontSize:"14px" }}>{svc.label}</p>
                    {svc.note && <p style={{ fontFamily:"'Barlow',sans-serif", color:"#666", fontSize:"12px", marginTop:2 }}>{svc.note}</p>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Emergency */}
      <section className="py-16" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Washington DC?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing in Washington DC is available 24/7. DC emergency plumbing keywords carry some of the highest per-click values in our service area ($29–$42 CPC), reflecting the density of demand and the urgency of plumbing needs in a densely populated urban market.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }}>
              A live dispatcher answers every call. Licensed DC Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849.
            </p>
          </div>
          <div className="text-center">
            <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
            <p className="mt-4">
              <Link href="/emergency-plumbing" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>
                See our dedicated Emergency Plumber Washington DC page →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are specific to Washington DC?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {dcAreas.map((card, i) => (
              <div key={i} className="bg-white rounded-md p-5 border-l-4" style={{ borderLeftColor:"#009EC6" }}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon size={24} style={{ color:"#009EC6" }} />
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:600, color:"#003060", fontSize:"15px" }}>{card.title}</p>
                </div>
                <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", lineHeight:1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: Commercial & Government */}
      <section className="py-16" style={{ background:"#003060" }}>
        <div className="container text-center">
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Commercial & Government Plumbing in Washington DC" light />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            Washington DC is the center of federal government procurement in the United States. Definitive Mechanical holds MDOT MBE Certification (Cert No. 20-134) and CAGE Code 8HCF6 — and is licensed under DC Master Plumber/Gasfitter #PGA2022-00025 for all DC plumbing work. We can serve as a prime contractor or subcontractor for federal and DC government plumbing projects.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6 mb-6">
            {["DC #PGA2022-00025","MDOT MBE Cert 20-134","CAGE 8HCF6","SWaM Cert 815255"].map((badge, i) => (
              <span key={i} style={{ background:"white", color:"#003060", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"11px", textTransform:"uppercase", padding:"4px 12px", borderRadius:"2px" }}>{badge}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/commercial-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"'Barlow',sans-serif", fontSize:"14px", fontWeight:500 }}>Commercial Plumbing →</Link>
            <Link href="/government-municipal-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"'Barlow',sans-serif", fontSize:"14px", fontWeight:500 }}>Government & Municipal →</Link>
          </div>
        </div>
      </section>

      {/* S7: Nearby */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Washington DC we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Maryland:</span>
            <Link href="/service-areas/maryland/montgomery-county/bethesda-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Bethesda, MD</Link>
            <Link href="/service-areas/maryland/prince-georges-county/largo-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Largo, MD</Link>
            {["Silver Spring, MD","Hyattsville, MD","College Park, MD","Takoma Park, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <div className="mb-3">
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Virginia:</span>
            <Link href="/service-areas/northern-virginia/arlington-county/arlington-va" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Arlington, VA</Link>
            <Link href="/service-areas/northern-virginia/fairfax-county/alexandria-va" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Alexandria, VA</Link>
          </div>
          <Link href="/service-areas" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Washington DC" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={false} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Washington DC?"
        subtext="Serving DC from our Largo, MD location. DC Master Plumber #PGA2022-00025 · MDOT MBE Cert 20-134 · CAGE 8HCF6 · 24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
