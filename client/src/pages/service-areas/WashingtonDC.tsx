import { Helmet } from "react-helmet-async";
import { ALL_SERVICE_CATEGORIES } from '@/lib/allServices';
import { getServiceImage } from '@/lib/serviceImages';
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
      {"@type":"Question","name":"What plumbing services do you offer in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"Full-service plumbing in Washington DC including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial and government plumbing. DC Master Plumber/Gasfitter #PGM1002236. Call (301) 679-5849."}},
      {"@type":"Question","name":"Are you licensed to do plumbing in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"Yes. Definitive Mechanical holds DC Master Plumber/Gasfitter License #PGM1002236 — issued by the DC Department of Consumer and Regulatory Affairs (DCRA). This is the specific DC license required for permitted plumbing work within the District of Columbia."}},
      {"@type":"Question","name":"Do you provide 24/7 emergency plumbing in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"Yes. Emergency plumbing in Washington DC is available 24/7. A live dispatcher answers every call. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. Call (301) 679-5849."}},
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
  { icon: Landmark, title: "Government and commercial facilities", body: "The District is home to the highest concentration of federal government facilities in the country. MDOT MBE Cert No. 20-134 and CAGE Code 8HCF6 support federal procurement. DC Master Plumber/Gasfitter #PGM1002236 authorizes all DC plumbing work." },
  { icon: Building2, title: "High-rise residential and commercial", body: "DC's dense urban core includes significant high-rise residential, hotel, and commercial properties with building-wide plumbing systems, commercial backflow compliance requirements, and ongoing commercial mechanical service needs." },
];

const faqs = [
  { question: "What plumbing services do you offer in Washington DC?", answer: "Full-service plumbing in Washington DC including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial and government plumbing. DC Master Plumber/Gasfitter #PGM1002236. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Washington DC?", answer: "Yes. Definitive Mechanical holds DC Master Plumber/Gasfitter License #PGM1002236 — issued by the DC Department of Consumer and Regulatory Affairs (DCRA). This is the specific DC license required for permitted plumbing work within the District of Columbia." },
  { question: "Do you provide 24/7 emergency plumbing in Washington DC?", answer: "Yes. Emergency plumbing in Washington DC is available 24/7. A live dispatcher answers every call. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. Call (301) 679-5849." },
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
      <section style={{ minHeight: "60vh", position: "relative", overflow: "hidden", background: "#111" }} className="py-20">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="Plumbing services" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Washington DC"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  WASHINGTON, DC  DISTRICT OF COLUMBIA
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Washington, DC
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Washington, DC for homeowners, businesses, and government facilities. Emergency plumbing, water heater repair, drain cleaning, sewer service, gas line work, and backflow certification available 24/7. DC Master Plumber/Gasfitter #PGM1002236. MDOT MBE Certified. CAGE Code 8HCF6. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["DC Master Plumber/Gasfitter #PGM1002236","MDOT MBE Cert 20-134","CAGE 8HCF6","24/7 Emergency","Serving DC from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/city-page-hero-plumber-LiK4eLEJT6Nfxt9Ly3GS3e.webp" alt="Licensed plumber Washington DC — DC Master Plumber #PGM1002236, MDOT MBE Certified" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Washington, DC?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Washington DC is one of the most complex plumbing markets in the country — a dense urban environment with a mix of historic residential properties, modern high-rise development, government facilities, commercial buildings, and a regulatory environment that requires specific DC licensure for all permitted plumbing work.
          </p>

          {/* DC License Callout */}
          <div className="bg-white border-2 rounded-lg p-5 max-w-2xl mx-auto mb-8" style={{ borderColor:"var(--brand-cyan)" }}>
            <p style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--brand-blue)", fontSize:"13px", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"12px" }}>
              DC PLUMBING CREDENTIALS
            </p>
            {[
              "DC Master Plumber/Gasfitter #PGM1002236 — issued by DCRA, required for all permitted DC plumbing work",
              "MDOT MBE Certification No. 20-134 — eligible for DC and federal government procurement",
              "CAGE Code 8HCF6 — federal procurement identifier",
              "Virginia SWaM Cert No. 815255 — for Virginia government procurement adjacent to DC",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <CheckCircle2 size={16} style={{ color:"var(--brand-cyan)", flexShrink:0, marginTop:2 }} />
                <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px" }}>{item}</p>
              </div>
            ))}
          </div>

          {ALL_SERVICE_CATEGORIES.map((cat) => (


            <div key={cat.key} style={{ marginBottom: "36px" }}>


              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>


                <div style={{ height: "3px", width: "28px", background: cat.color, flexShrink: 0, borderRadius: "2px" }} />


                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--brand-blue)" }}>{cat.title}</span>


                <div style={{ height: "1px", flex: 1, background: "#E6E8EE" }} />


              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


                {cat.items.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(29,108,163,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(29,108,163,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                      <img
                        src={getServiceImage(svc.href.replace(/^\//, "").toLowerCase())}
                        alt={svc.label}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                        loading="lazy"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
                    </div>
                  <div style={{ padding: "14px 16px 16px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: "var(--brand-blue)", marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1D6CA3", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
                  </div>
                </div>
              </Link>
            ))}  
              </div>
            </div>
          ))}  
        </div>
      </section>

            {/* S3: Emergency */}
      <section style={{ background: "var(--brand-blue)", position: "relative", overflow: "hidden" }} className="py-20">
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 50%, rgba(220,38,38,0.15) 0%, transparent 65%)", pointerEvents:"none" }} />
        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily:"var(--font-display)", color:"#ef4444", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">24/7 EMERGENCY SERVICE</p>
              <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(28px,4vw,42px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.05 }} className="mb-5">Emergency Plumbing Available Around the Clock</h2>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">
                A live dispatcher answers every call — no voicemail, no answering service. Licensed plumbing professionals dispatched — work performed under Master Plumber license. All services have a trip fee. Upfront written pricing before any work begins.
              </p>
              <a href="tel:+13016795849" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"#dc2626", color:"white", fontFamily:"var(--font-display)", fontWeight:700, fontSize:"15px", textTransform:"uppercase", letterSpacing:"0.08em", padding:"14px 28px", borderRadius:"3px", textDecoration:"none", transition:"background 0.2s" }}>
                CALL (301) 679-5849
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "", title: "Burst Pipe", body: "Immediate shut-off and repair to prevent water damage." },
                { emoji: "", title: "Sewer Backup", body: "Camera diagnosis and hydro-jet clearing, same visit." },
                { emoji: "", title: "Gas Leak", body: "Licensed gasfitter response — evacuate and call us." },
                { emoji: "", title: "No Hot Water", body: "Water heater diagnosis and same-day replacement available." },
              ].map((card, i) => (
                <div key={i} style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"8px", padding:"20px 16px" }}>
                  <div style={{ fontSize:"28px", marginBottom:"8px" }}>{card.emoji}</div>
                  <p style={{ fontFamily:"var(--font-display)", color:"white", fontWeight:700, fontSize:"14px", textTransform:"uppercase", marginBottom:"6px" }}>{card.title}</p>
                  <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.7)", fontSize:"13px", lineHeight:1.5 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are specific to Washington DC?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {dcAreas.map((card, i) => (
              <div key={i} className="bg-white rounded-md p-5 border-l-4" style={{ borderLeftColor:"var(--brand-cyan)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon size={24} style={{ color:"var(--brand-cyan)" }} />
                  <p style={{ fontFamily:"var(--font-body)", fontWeight:600, color:"var(--brand-blue)", fontSize:"15px" }}>{card.title}</p>
                </div>
                <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", lineHeight:1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: Commercial & Government */}
      <section className="py-16" style={{ background:"var(--brand-blue)" }}>
        <div className="container text-center">
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Commercial & Government Plumbing in Washington DC" light />
          <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            Washington DC is the center of federal government procurement in the United States. Definitive Mechanical holds MDOT MBE Certification (Cert No. 20-134) and CAGE Code 8HCF6 — and is licensed under DC Master Plumber/Gasfitter #PGM1002236 for all DC plumbing work. We can serve as a prime contractor or subcontractor for federal and DC government plumbing projects.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6 mb-6">
            {["DC #PGM1002236","MDOT MBE Cert 20-134","CAGE 8HCF6","SWaM Cert 815255"].map((badge, i) => (
              <span key={i} style={{ background:"white", color:"var(--brand-blue)", fontFamily:"var(--font-display)", fontWeight:700, fontSize:"11px", textTransform:"uppercase", padding:"4px 12px", borderRadius:"2px" }}>{badge}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/commercial-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500 }}>Commercial Plumbing →</Link>
            <Link href="/government-municipal-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500 }}>Government & Municipal →</Link>
          </div>
        </div>
      </section>

            {/* S7: Nearby */}
      <section style={{ background:"#F4F7FA" }} className="py-16">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-blue)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">NEARBY SERVICE AREAS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"var(--brand-blue)", fontSize:"clamp(22px,3vw,32px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-6">Areas Near Washington, DC We Also Serve</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <a key="Bethesda, MD" href="/service-areas/maryland/montgomery-county/bethesda-md" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-blue)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Bethesda, MD</a>
            <a key="Arlington, VA" href="/service-areas/northern-virginia/arlington-county/arlington-va" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-blue)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Arlington, VA</a>
            <a key="Alexandria, VA" href="/service-areas/northern-virginia/fairfax-county/alexandria-va" style={{ fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500, color:"var(--brand-blue)", background:"white", border:"1px solid #D0DCE8", borderRadius:"4px", padding:"6px 14px", textDecoration:"none", transition:"all 0.15s", display:"inline-block" }}>Alexandria, VA</a>
            <span key="Silver Spring, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Silver Spring, MD</span>
            <span key="Hyattsville, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Hyattsville, MD</span>
            <span key="Capitol Heights, MD" style={{ fontFamily:"var(--font-body)", fontSize:"14px", color:"var(--ink-2)", background:"white", border:"1px solid #E8EFF5", borderRadius:"4px", padding:"6px 14px", display:"inline-block" }}>Capitol Heights, MD</span>
          </div>
          <a href="/service-areas" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500, textDecoration:"none" }}>View Full Service Area →</a>
        </div>
      </section>

            {/* S8: FAQ */}
      <section style={{ background: "var(--brand-blue)" }} className="py-20">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"rgba(255,255,255,0.8)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-10">Common Plumbing Questions</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={faqs} schema={true} variant="dark" />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Washington DC?"
        subtext="Serving DC from our Largo, MD location. DC Master Plumber #PGM1002236  MDOT MBE Cert 20-134  CAGE 8HCF6  24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
