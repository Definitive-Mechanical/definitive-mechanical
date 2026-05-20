import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wind, Wrench, Building2
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Water Line Repair", href: "/water-line-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing" },
];

const faqs = [
  { question: "What plumbing services do you offer in Ellicott City, MD?", answer: "Full-service plumbing in Ellicott City including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial plumbing. Howard County licensed. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Ellicott City?", answer: "Yes. Emergency service available 24/7. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Howard County?", answer: "Yes. Definitive Mechanical holds Howard County Master Plumber/Gasfitter License #MP-0000215 in addition to Maryland State #96958 and WSSC #73696. Howard County requires its own municipal license for permitted work within the county." },
  { question: "Do you serve both Old Ellicott City and the newer Ellicott City communities?", answer: "Yes. We serve the full Ellicott City area — from the historic Old Ellicott City district with its older building stock to the newer residential and commercial communities in the western Howard County corridor. Call (301) 679-5849." },
];

export default function EllicottCityMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Ellicott City, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Ellicott City, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning & gas line service. Howard County licensed. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/howard-county/ellicott-city-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #001830 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Howard County",href:"/service-areas/maryland/howard-county"},
            {label:"Ellicott City, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"'var(--font-display)'", color:"var(--brand-cyan)", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · ELLICOTT CITY, MD · HOWARD COUNTY
              </p>
              <h1 style={{ fontFamily:"'var(--font-display)'", color:"white", fontSize:"clamp(34px,5vw,56px)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.01em", lineHeight:1.0 }} className="mb-4">
                Plumber in Ellicott City, MD
              </h1>
              <p style={{ fontFamily:"'var(--font-body)'", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Ellicott City, Maryland for homeowners and businesses throughout Howard County. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, and backflow certification available 24/7. Howard County Master Plumber/Gasfitter #MP-0000215. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Howard County Master Plumber #MP-0000215","MD State #96958","24/7 Emergency","Serving Ellicott City from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=700&h=500&fit=crop&q=80" alt="Licensed plumber Ellicott City Maryland — Howard County Master Plumber #MP-0000215" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Ellicott City, MD?" />
          <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Ellicott City is one of Howard County's most established and desirable communities — a mix of the historic Old Ellicott City district along the Patapsco River and the extensive residential and commercial development that has grown westward along US-40 and Route 108. Definitive Mechanical holds Howard County Master Plumber/Gasfitter License #MP-0000215 — a county-specific credential required for permitted plumbing work within Howard County.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="bg-white rounded-md p-4 flex items-start gap-3 border-t-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow:"0 1px 4px rgba(6,59,99,0.08)", border:"1px solid #E8EFF5", borderTop:"3px solid #009EC6" }}>
                  <svc.icon size={20} style={{ color:"var(--brand-cyan)", flexShrink:0, marginTop:2 }} />
                  <p style={{ fontFamily:"'var(--font-body)'", fontWeight:500, color:"var(--brand-navy)", fontSize:"14px" }}>{svc.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Emergency */}
      <section className="py-16" style={{ background:"var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Ellicott City?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing in Ellicott City is available 24/7. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849.
            </p>
          </div>
          <div className="text-center">
            <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are common in Ellicott City?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: GitBranch, title: "Old Ellicott City historic district", body: "The historic district's older building stock — some dating to the 19th century — has plumbing systems that have been updated over generations but may still include original cast iron drains, aged water service lines, and boiler-based heating systems. Camera inspection before purchase is strongly recommended." },
              { icon: Thermometer, title: "Residential water heater service", body: "Ellicott City's active residential market includes homes across multiple decades of construction. Water heater replacement, tankless conversions, and gas appliance hookups are frequent service calls." },
              { icon: Flame, title: "Gas line service", body: "Kitchen renovations, outdoor entertainment additions, and whole-home generator installations frequently require new or upgraded gas line work in Ellicott City's residential market." },
              { icon: Droplets, title: "Commercial drain maintenance", body: "Ellicott City's commercial corridors along US-40 and Route 108 include restaurants and retail with ongoing commercial drain cleaning and backflow certification needs." },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-md p-5 border-l-4" style={{ borderLeftColor:"var(--brand-cyan)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <card.icon size={24} style={{ color:"var(--brand-cyan)" }} />
                  <p style={{ fontFamily:"'var(--font-body)'", fontWeight:600, color:"var(--brand-navy)", fontSize:"15px" }}>{card.title}</p>
                </div>
                <p style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"14px", lineHeight:1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S7: Nearby */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Ellicott City we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'var(--font-display)'", fontWeight:700, color:"var(--brand-navy)", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/prince-georges-county/largo-md" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Largo, MD</Link>
            <Link href="/service-areas/maryland/montgomery-county/rockville-md" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", marginRight:"12px" }}>Rockville, MD</Link>
            {["Columbia, MD","Catonsville, MD","Woodstock, MD","Clarksville, MD","Fulton, MD","Savage, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'var(--font-body)'", color:"var(--ink-2)", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"'var(--font-body)'", color:"var(--brand-cyan)", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"var(--surface-1)" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Ellicott City, MD" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Ellicott City, MD?"
        subtext="Serving Ellicott City from our Largo, MD location. Howard County Master Plumber #MP-0000215 · MD State #96958 · 24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
