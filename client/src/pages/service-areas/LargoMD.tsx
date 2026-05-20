import { Helmet } from "react-helmet-async";
import { getServiceImage } from '@/lib/serviceImages';
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  AlertCircle, ShieldCheck, Wrench, Wind, Building2, Landmark,
  CheckCircle2
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";
import TestimonialCard from "@/components/ui/TestimonialCard";
import StarRating from "@/components/ui/StarRating";

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Plumber"],
      "name": "Definitive Mechanical",
      "telephone": "+13016795849",
      "address": { "@type": "PostalAddress", "streetAddress": "9701 Apollo Drive, Suite 100", "addressLocality": "Largo", "addressRegion": "MD", "postalCode": "20774" },
      "areaServed": { "@type": "City", "name": "Largo", "sameAs": "https://en.wikipedia.org/wiki/Largo,_Maryland" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "40" }
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},
      {"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},
      {"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},
      {"@type":"ListItem","position":4,"name":"Prince George's County","item":"https://definitivemechanical.com/service-areas/maryland/prince-georges-county/"},
      {"@type":"ListItem","position":5,"name":"Largo, MD","item":"https://definitivemechanical.com/service-areas/maryland/prince-georges-county/largo-md/"}
    ]},
    { "@type": "FAQPage", "mainEntity": [
      {"@type":"Question","name":"What plumbing services do you offer in Largo, MD?","acceptedAnswer":{"@type":"Answer","text":"We offer the full range of plumbing services in Largo — emergency plumbing, drain cleaning, water heater repair and installation, tankless water heaters, sewer line service, gas line repair and installation, backflow prevention and certification, water line service, boiler and furnace repair, and faucet and toilet repair. Commercial and government plumbing available. Call (301) 679-5849."}},
      {"@type":"Question","name":"Do you provide 24/7 emergency plumbing in Largo?","acceptedAnswer":{"@type":"Answer","text":"Yes. Definitive Mechanical is based in Largo, MD — emergency response here is among the fastest in our service area. A live dispatcher answers every call 24/7. Licensed Master Plumber dispatched immediately. No overtime surcharge."}},
      {"@type":"Question","name":"Are you licensed as a plumber in Prince George's County and Maryland?","acceptedAnswer":{"@type":"Answer","text":"Yes. Definitive Mechanical holds Maryland State Master Plumber/Gasfitter License #96958 and WSSC Master Plumber/Gasfitter License #73696, which covers all plumbing work in Prince George's County."}},
      {"@type":"Question","name":"How quickly can you arrive for a plumbing emergency in Largo?","acceptedAnswer":{"@type":"Answer","text":"Because we are based in Largo, response to emergency calls within the immediate Largo area is typically faster than any other area in our service region. Call (301) 679-5849 — our dispatcher will give you an honest ETA at the time of your call."}}
    ]}
  ]
};

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "fastest response in our service area" },
  { icon: Droplets, label: "Drain Cleaning", href: "/drain-cleaning", note: "same-day service available" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heater Installation & Repair", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Installation", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair", note: "licensed Master Gasfitter" },
  { icon: AlertCircle, label: "Gas Leak Repair", href: "/gas-leak-repair", note: "24/7 emergency" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wrench, label: "Water Line Repair and Installation", href: "/water-line-repair" },
  { icon: Wind, label: "Boiler & Furnace Repair and Installation", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing", note: "MDOT MBE and SWaM Certified" },
  { icon: Landmark, label: "Government & Municipal Plumbing", href: "/government-municipal-plumbing" },
];

const faqs = [
  { question: "What plumbing services do you offer in Largo, MD?", answer: "We offer the full range of plumbing services in Largo — emergency plumbing, drain cleaning, water heater repair and installation, tankless water heaters, sewer line service, gas line repair and installation, backflow prevention and certification, water line service, boiler and furnace repair, and faucet and toilet repair. Commercial and government plumbing available. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Largo?", answer: "Yes. Definitive Mechanical is based in Largo, MD — emergency response here is among the fastest in our service area. A live dispatcher answers every call 24/7. Licensed Master Plumber dispatched immediately. No overtime surcharge." },
  { question: "Are you licensed as a plumber in Prince George's County and Maryland?", answer: "Yes. Definitive Mechanical holds Maryland State Master Plumber/Gasfitter License #96958 and WSSC Master Plumber/Gasfitter License #73696, which covers all plumbing work in Prince George's County. We are also licensed in Howard County, Anne Arundel County, the City of Rockville, Washington DC, Virginia, and Delaware." },
  { question: "How quickly can you arrive for a plumbing emergency in Largo?", answer: "Because we are based in Largo, response to emergency calls within the immediate Largo area is typically faster than any other area in our service region. Call (301) 679-5849 — our dispatcher will give you an honest ETA at the time of your call." },
];

export default function LargoMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Largo, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Largo, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & commercial plumbing. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/largo-md/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-dark) 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Prince George's County",href:"/service-areas/maryland/prince-georges-county"},
            {label:"Largo, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE  LARGO, MD  PRINCE GEORGE'S COUNTY
              </p>
              <h1 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Largo, MD
              </h1>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical is based in Largo, Maryland at 9701 Apollo Drive, Suite 100 — and has served the Largo community for 11 years. We provide licensed plumbing, gas, drain, water heater, sewer, backflow, and emergency mechanical service for homes and businesses in Largo and throughout Prince George's County. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Based in Largo, MD","11 Years Serving Largo","WSSC #73696","MDOT MBE Cert 20-134","24/7 Emergency"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&q=80"
                alt="Licensed plumber Largo MD — Definitive Mechanical home base 9701 Apollo Drive"
                loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Licensed Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Largo, MD?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Largo is our home base. When you call Definitive Mechanical for plumbing service in Largo, you are calling a team that has operated in this community for over a decade — from our office at 9701 Apollo Drive, Suite 100, just off Central Avenue. Response times in Largo are among the fastest in our service area because we are already here.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div
                  className="cursor-pointer"
                  style={{ background: "white", border: "1px solid #E6E8EE", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(6,59,99,0.08)", transition: "transform 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.22s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(6,59,99,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(6,59,99,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                      <img
                        src={getServiceImage(svc.href.replace(/^\//, "").toLowerCase())}
                        alt={svc.label}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                        loading="lazy"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(3,24,56,0.25) 0%, rgba(3,24,56,0.55) 100%)" }} />
                    </div>
                  <div style={{ padding: "14px 16px 16px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", fontSize: "15px", color: "var(--brand-navy)", marginBottom: "6px", lineHeight: 1.2 }}>{svc.label}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0075BA", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

            {/* S3: Emergency */}
      <section style={{ background: "var(--brand-navy)", position: "relative", overflow: "hidden" }} className="py-20">
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 50%, rgba(220,38,38,0.15) 0%, transparent 65%)", pointerEvents:"none" }} />
        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ fontFamily:"var(--font-display)", color:"#ef4444", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">24/7 EMERGENCY SERVICE</p>
              <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(28px,4vw,42px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.05 }} className="mb-5">Emergency Plumbing Available Around the Clock</h2>
              <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7 }} className="mb-6">
                A live dispatcher answers every call — no voicemail, no answering service. Licensed Master Plumber dispatched. No overtime surcharge. Upfront written pricing before any work begins.
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

      {/* S4: Residential / Local Context */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="RESIDENTIAL PLUMBING" heading="What residential plumbing services do Largo homeowners use most?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Largo's housing stock includes a significant number of homes built in the 1970s through 1990s — a range where original water heaters, cast iron drain lines, and galvanized supply lines are either approaching or well past end of life. The most common residential service calls we handle in Largo include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Thermometer, title: "Water heater repair and replacement", body: "Gas and electric tank water heaters in this age range frequently need thermocouple replacement, element replacement, or full unit replacement. Financing available through Synchrony." },
              { icon: Droplets, title: "Drain cleaning", body: "Older cast iron and PVC drain lines in Largo-area homes are prone to grease accumulation and root intrusion, particularly in neighborhoods with mature tree canopies." },
              { icon: GitBranch, title: "Sewer line service", body: "Camera inspection followed by hydro-jetting or spot repair for homes with original clay or cast iron sewer laterals." },
              { icon: Wrench, title: "Leak repair", body: "Supply line fittings, shut-off valves, and fixture connections in older homes benefit from periodic inspection and repair before minor seepage becomes major damage." },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-md p-5 border-l-4" style={{ borderLeftColor:"var(--brand-cyan)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon size={24} style={{ color:"var(--brand-cyan)" }} />
                  <p style={{ fontFamily:"var(--font-body)", fontWeight:600, color:"var(--brand-navy)", fontSize:"15px" }}>{card.title}</p>
                </div>
                <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", lineHeight:1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: Commercial & Government */}
      <section className="py-16" style={{ background:"var(--brand-navy)" }}>
        <div className="container text-center">
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Do you serve commercial and government clients in Largo?" light />
          <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            Yes. Largo and the surrounding Central Avenue corridor is home to commercial retail, office, government-adjacent facilities, and businesses that require commercial plumbing maintenance and compliance services. Definitive Mechanical is MDOT MBE Certified (Cert No. 20-134) and Virginia SWaM Certified (Cert No. 815255) — and holds CAGE Code 8HCF6 and NAICS Code 238220 for government procurement.
          </p>
          <p style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            For commercial clients in Largo, we provide facility maintenance, backflow certification, commercial drain service, gas line work, and emergency response.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {["MDOT MBE Cert 20-134","SWaM Cert 815255","CAGE 8HCF6"].map((badge, i) => (
              <span key={i} style={{ background:"white", color:"var(--brand-navy)", fontFamily:"var(--font-display)", fontWeight:700, fontSize:"11px", textTransform:"uppercase", padding:"4px 12px", borderRadius:"2px" }}>{badge}</span>
            ))}
          </div>
          <p className="mt-4">
            <Link href="/commercial-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"var(--font-body)", fontSize:"14px", fontWeight:500 }}>
              Learn more about commercial plumbing →
            </Link>
          </p>
        </div>
      </section>

      {/* S6: Customer Reviews — LARGO ONLY */}
      <section className="py-16" style={{ background:"var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="CUSTOMER REVIEWS" heading="What do Largo customers say about Definitive Mechanical?" centered />
          <div className="flex justify-center mb-8">
            <StarRating rating={4.8} count={40} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard quote="I was extremely impressed — they were prompt, courteous, and professional. If you need plumbers, ask for DJ and Keon." name="Michael F." location="Largo, MD" service="Plumbing Service" />
            <TestimonialCard quote="Everything went extremely well. They were punctual, cleaned up after themselves — very professional and courteous. This is my second time hiring this company." name="Millie H." location={`Prince George's County`} service="Plumbing Service" />
            <TestimonialCard quote="Service was excellent — prompt, professional, diagnosed and replaced my toilet the same day, and left the bathroom spotless." name="Gayle T." location="Maryland" service="Toilet Repair" />
          </div>
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", textAlign:"center", marginTop:"24px" }}>
            4.8 on Google | Based in Largo, MD | 11 Years in Business
          </p>
        </div>
      </section>

      {/* S7: Nearby Areas */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="What areas near Largo does Definitive Mechanical also serve?" />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"15px" }} className="mb-4">
            From our Largo location, we serve the surrounding Prince George's County communities and the broader DMV area:
          </p>
          <div className="mb-3">
            <span style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--brand-navy)", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            {[
              { label:"Bowie, MD", href:"/service-areas/maryland/prince-georges-county/bowie-md" },
              { label:"Fort Washington, MD", href:"/service-areas/maryland/prince-georges-county/fort-washington-md" },
            ].map((l, i) => (
              <Link key={i} href={l.href} style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>{l.label}</Link>
            ))}
            {["Upper Marlboro, MD","Landover, MD","Hyattsville, MD","Forestville, MD","Fairwood, MD","Woodmore, MD","Capitol Heights, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"var(--font-body)", color:"var(--ink-2)", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <hr style={{ borderColor:"var(--border)", margin:"16px 0" }} />
          <div className="mb-4">
            <span style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--brand-navy)", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Also serving:</span>
            {[
              { label:"Washington DC", href:"/service-areas/washington-dc" },
              { label:"Montgomery County, MD", href:"/service-areas/maryland/montgomery-county" },
              { label:"Northern Virginia", href:"/service-areas/northern-virginia" },
            ].map((l, i) => (
              <Link key={i} href={l.href} style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>{l.label}</Link>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"var(--font-body)", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

            {/* S8: FAQ */}
      <section style={{ background: "var(--brand-navy)" }} className="py-20">
        <div className="container">
          <p style={{ fontFamily:"var(--font-display)", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-2">FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontFamily:"var(--font-display)", color:"white", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:700, textTransform:"uppercase", lineHeight:1.1 }} className="mb-10">Common Plumbing Questions</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={faqs} schema={true} variant="dark" />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading={`Largo's licensed Master Plumber — right in your community.`}
        subtext="9701 Apollo Drive, Suite 100, Largo, MD 20774 | 24/7 Emergency Service | Upfront Pricing | Licensed Master Plumber/Gasfitter | MDOT MBE Certified"
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
