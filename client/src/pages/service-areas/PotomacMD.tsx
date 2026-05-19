import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wind, Wrench
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
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair", note: "commercial-grade and tankless" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair", note: "outdoor kitchens, generators, pool heaters" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification", note: "irrigation systems" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Water Line Repair and Installation", href: "/water-line-repair" },
];

const faqs = [
  { question: "What plumbing services do you offer in Potomac, MD?", answer: "Full-service plumbing in Potomac including emergency plumbing, water heater repair and installation, tankless water heaters, drain cleaning, sewer camera inspection, gas line installation for outdoor kitchens and generators, backflow certification for irrigation systems, and boiler service. Maryland licensed, WSSC licensed. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Potomac?", answer: "Yes. Emergency service available 24/7 from our Largo, MD location. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
  { question: "Are you licensed to do plumbing in Potomac and Montgomery County?", answer: "Yes. Maryland State Master Plumber/Gasfitter #96958 and WSSC Master Plumber/Gasfitter #73696 cover all plumbing work in Potomac and throughout Montgomery County." },
  { question: "Do you certify backflow preventers for irrigation systems in Potomac?", answer: "Yes. We provide annual irrigation backflow preventer testing and certification for Potomac properties and can manage annual compliance scheduling. Call (301) 679-5849." },
];

export default function PotomacMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Potomac, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Potomac, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & backflow certification. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/montgomery-county/potomac-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "50vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Montgomery County",href:"/service-areas/maryland/montgomery-county"},
            {label:"Potomac, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", color:"#009EC6", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · POTOMAC, MD · MONTGOMERY COUNTY
              </p>
              <h1 style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:"clamp(28px,4vw,40px)", fontWeight:700, lineHeight:1.15 }} className="mb-4">
                Plumber in Potomac, MD
              </h1>
              <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Potomac, Maryland for estate homes, residential properties, and commercial facilities. Emergency plumbing, water heater repair, drain cleaning, gas line service, backflow certification, and sewer repair available 24/7. Maryland Master Plumber/Gasfitter #96958, WSSC #73696. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["MD Master Plumber #96958","WSSC #73696","24/7 Emergency","Estate Home Experience","Serving Potomac from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <img src="https://placehold.co/700x500/186090/C0D8F0?text=Plumber+Potomac+MD+Estate+Homes" alt="Licensed plumber Potomac Maryland — Definitive Mechanical estate home service" loading="eager" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Potomac, MD?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Potomac is one of the most affluent communities in the United States — characterized by large estate homes, significant lot sizes, extensive landscaping with irrigation systems, outdoor entertainment areas, and a residential profile that creates demand for premium plumbing service. Potomac's large homes have correspondingly complex plumbing systems — multiple water heaters or commercial-grade units, extensive irrigation systems with backflow requirements, gas lines serving outdoor kitchens and generators, and well-maintained but aging sewer laterals that benefit from periodic camera inspection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="bg-white rounded-md p-4 flex items-start gap-3 border-t-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5" style={{ borderTopColor:"#009EC6" }}>
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
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Potomac?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing in Potomac is available 24/7. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849.
            </p>
          </div>
          <div className="text-center">
            <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are most common for Potomac homes?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Thermometer, title: "High-demand water heating", body: "Potomac's larger homes require properly sized water heating systems. Tankless conversions are popular — eliminating standby heat loss and providing unlimited hot water for large households with high simultaneous demand." },
              { icon: ShieldCheck, title: "Irrigation backflow certification", body: "Potomac's landscaped estate properties frequently have irrigation systems requiring annual backflow preventer testing and certification. We provide annual certification and can manage compliance scheduling." },
              { icon: Flame, title: "Gas line service", body: "Outdoor entertainment areas — kitchens, fire features, pool and spa heaters, whole-home generators — are common in Potomac and each requires a permitted, licensed gas line installation." },
              { icon: GitBranch, title: "Sewer lateral inspection", body: "Potomac's mature tree canopy creates root intrusion risk for original sewer laterals. Camera inspection every 3–5 years is a prudent maintenance practice for properties with clay or aging PVC laterals." },
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

      {/* S7: Nearby */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Potomac we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/montgomery-county/rockville-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Rockville, MD</Link>
            <Link href="/service-areas/maryland/montgomery-county/bethesda-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Bethesda, MD</Link>
            {["North Potomac, MD","Cabin John, MD","Travilah, MD","Great Falls, VA","McLean, VA","Darnestown, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Potomac, MD" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Potomac, MD?"
        subtext="Serving Potomac from our Largo, MD location. Maryland Master Plumber #96958 · WSSC #73696 · 24/7 Emergency · Estate Home Experience."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
