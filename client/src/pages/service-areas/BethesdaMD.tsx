import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wind, Building2, Wrench
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "including Emergency Plumber Bethesda MD" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Water Line Repair and Installation", href: "/water-line-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing", note: "MDOT MBE Certified" },
];

const faqs = [
  { question: "What plumbing services do you offer in Bethesda, MD?", answer: "Full-service plumbing in Bethesda including emergency plumbing, drain cleaning, water heater repair and installation, tankless water heaters, sewer line service and camera inspection, gas line repair and installation, backflow certification, boiler and furnace service, and commercial plumbing. Maryland licensed, WSSC licensed. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Bethesda?", answer: "Yes. Emergency plumbing in Bethesda is available 24/7. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Bethesda and Montgomery County?", answer: "Yes. Maryland State Master Plumber/Gasfitter #96958 and WSSC Master Plumber/Gasfitter #73696 cover all plumbing work in Bethesda and throughout Montgomery County." },
  { question: "Do you handle high-end residential plumbing in Bethesda?", answer: "Yes. Bethesda's premium residential market requires plumbing contractors with the experience, licensing, and professionalism to work in high-value homes. We provide water heater replacement, gas line installation for outdoor kitchens and generators, backflow certification for irrigation systems, and full plumbing service for Bethesda homeowners. Call (301) 679-5849." },
];

export default function BethesdaMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Bethesda, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Bethesda, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & commercial plumbing. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/montgomery-county/bethesda-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "60vh" }} className="py-20">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Montgomery County",href:"/service-areas/maryland/montgomery-county"},
            {label:"Bethesda, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
            <div className="">
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", color:"#009EC6", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · BETHESDA, MD · MONTGOMERY COUNTY
              </p>
              <h1 style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:"clamp(28px,4vw,40px)", fontWeight:700, lineHeight:1.15 }} className="mb-4">
                Plumber in Bethesda, MD
              </h1>
              <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Bethesda, Maryland for homeowners, businesses, and commercial properties. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, and backflow certification available 24/7. Maryland Master Plumber/Gasfitter #96958, WSSC #73696. Upfront pricing. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["MD Master Plumber #96958","WSSC #73696","24/7 Emergency","Serving Bethesda from Largo, MD","MDOT MBE Certified"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&h=500&fit=crop&q=80" alt="Licensed plumber Bethesda Maryland — Definitive Mechanical" loading="eager" className="rounded-lg w-full" style={{ objectFit:"cover", height:"420px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20" style={{ background:"#FAFBFC" }}>
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Bethesda, MD?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Bethesda is one of the most affluent communities in the DMV — characterized by high-value residential properties, a dense commercial corridor along Wisconsin Avenue, major medical and research institutions (NIH, Walter Reed National Military Medical Center), and a premium residential market that demands licensed, professional, and reliable plumbing service.
          </p>
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
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Bethesda?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing in Bethesda is available 24/7. Bethesda emergency plumbing keywords carry some of the highest per-click values in our service area ($32–$45 CPC), reflecting the density of demand and the willingness of Bethesda homeowners and businesses to pay for reliable, licensed emergency response.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }}>
              A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849.
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
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are specific to Bethesda?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Thermometer, title: "High-demand water heating", body: "Bethesda's larger homes require properly sized water heating systems. Tankless conversions are popular — eliminating standby heat loss and providing unlimited hot water for large households with high simultaneous demand." },
              { icon: ShieldCheck, title: "Irrigation backflow certification", body: "Bethesda's landscaped properties frequently have irrigation systems requiring annual backflow preventer testing and certification. We provide annual certification and can manage compliance scheduling." },
              { icon: Flame, title: "Gas line service", body: "Outdoor entertainment areas — kitchens, fire features, pool and spa heaters — are common in Bethesda and each requires a permitted, licensed gas line installation." },
              { icon: GitBranch, title: "Sewer lateral inspection", body: "Bethesda's mature tree canopy creates root intrusion risk for original sewer laterals. Camera inspection every 3–5 years is a prudent maintenance practice for properties with clay or aging PVC laterals." },
            ].map((card, i) => (
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

      {/* S5: Commercial */}
      <section className="py-16" style={{ background:"#003060" }}>
        <div className="container text-center">
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Commercial & Government Plumbing in Bethesda" light />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            Bethesda's commercial corridor, medical institutions, and government-adjacent facilities create demand for commercial plumbing services. Definitive Mechanical is MDOT MBE Certified (Cert No. 20-134) and holds CAGE Code 8HCF6 for government procurement. WSSC #73696 and MD State #96958 for all local plumbing work.
          </p>
          <Link href="/commercial-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"'Barlow',sans-serif", fontSize:"14px", fontWeight:500 }}>
            Learn more about commercial plumbing →
          </Link>
        </div>
      </section>

      {/* S7: Nearby */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Bethesda we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/montgomery-county/rockville-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Rockville, MD</Link>
            <Link href="/service-areas/maryland/montgomery-county/potomac-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Potomac, MD</Link>
            <Link href="/service-areas/washington-dc" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Washington DC</Link>
            {["Chevy Chase, MD","Kensington, MD","Silver Spring, MD","North Bethesda, MD","Cabin John, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Bethesda, MD" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Bethesda, MD?"
        subtext="Serving Bethesda from our Largo, MD location. Maryland Master Plumber #96958 · WSSC #73696 · 24/7 Emergency · Upfront Pricing."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
