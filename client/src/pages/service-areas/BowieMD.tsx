import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wrench, Wind, Building2
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "live dispatcher, licensed plumber dispatched" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Video Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wrench, label: "Water Line Repair and Installation", href: "/water-line-repair" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing" },
];

const faqs = [
  { question: "What plumbing services do you offer in Bowie, MD?", answer: "We offer the full range of plumbing services in Bowie — emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair and installation, backflow certification, boiler and furnace service, and faucet and toilet repair. Commercial and government plumbing available. Call (301) 679-5849." },
  { question: "How quickly can you respond to a plumbing emergency in Bowie?", answer: "We dispatch from our Largo, MD location — minutes from most Bowie neighborhoods. A live dispatcher answers 24/7. Licensed Master Plumber dispatched immediately. Call (301) 679-5849 for an honest ETA at the time of your call." },
  { question: "Are you licensed to work in Bowie and Prince George's County?", answer: "Yes. We hold Maryland State Master Plumber/Gasfitter License #96958 and WSSC Master Plumber/Gasfitter License #73696, which covers plumbing work throughout Prince George's County including Bowie." },
  { question: "Do you offer financing for water heater replacement in Bowie?", answer: "Yes. Consumer financing is available through Synchrony for eligible services including water heater replacement and installation. Apply at mysynchrony.com/mmc/S6240351600. Call (301) 679-5849 to discuss." },
];

export default function BowieMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Bowie, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Bowie, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & commercial plumbing. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/bowie-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "50vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Prince George's County",href:"/service-areas/maryland/prince-georges-county"},
            {label:"Bowie, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", color:"#009EC6", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · BOWIE, MD · PRINCE GEORGE'S COUNTY
              </p>
              <h1 style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:"clamp(28px,4vw,40px)", fontWeight:700, lineHeight:1.15 }} className="mb-4">
                Plumber in Bowie, MD
              </h1>
              <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Bowie, Maryland — serving from our Largo, MD location just minutes away. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, and commercial plumbing available 24/7. Maryland Master Plumber/Gasfitter #96958. Upfront pricing in writing. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber","WSSC #73696","MD #96958","24/7 Emergency","Serving Bowie from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <img src="https://placehold.co/700x500/186090/C0D8F0?text=Plumber+Bowie+MD" alt="Licensed plumber Bowie Maryland — Definitive Mechanical serving from Largo MD" loading="eager" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Licensed Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Bowie, MD?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Bowie is one of the largest cities in Prince George's County and one of the most active markets in our service area. We serve homeowners, businesses, and commercial properties throughout Bowie — from the established neighborhoods near Belair at Bowie to the newer development corridors along Route 50 and Route 301.
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
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Bowie?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing service in Bowie is available 24 hours a day, 7 days a week, 365 days a year. Our Largo, MD location places us just minutes from most Bowie neighborhoods — a significant advantage for response time compared to contractors based farther afield.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              A live dispatcher answers every call. A licensed Master Plumber is dispatched. No premium for evenings, weekends, or holidays.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }}>
              For plumbing emergencies in Bowie, call (301) 679-5849 immediately.
            </p>
          </div>
          <div className="text-center">
            <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
            <p className="mt-4">
              <Link href="/emergency-plumbing" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>
                Emergency Plumber Bowie MD →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="RESIDENTIAL PLUMBING" heading="What plumbing challenges are common in Bowie, MD homes?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Bowie's residential profile spans several decades of construction. The older Belair at Bowie neighborhoods — developed from the late 1950s through the 1970s — contain homes with original cast iron drain lines, galvanized supply piping, and water heaters and boilers that have been through multiple replacement cycles. The newer communities along the Route 301 corridor feature more modern plumbing systems but are reaching the age where water heater replacements and sewer camera inspections become prudent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Thermometer, title: "Water heater repair and replacement", body: "Both the aging original stock in older neighborhoods and more recent tank failures in homes from the 1990s and 2000s. Financing through Synchrony available for replacement." },
              { icon: GitBranch, title: "Sewer camera inspection and cleaning", body: "Many older Bowie neighborhoods have mature tree canopy above their sewer laterals, making root intrusion one of the most common causes of recurring drain problems." },
              { icon: Flame, title: "Gas line service", body: "Bowie has a high proportion of gas-heated homes. Gas appliance hookups, line repairs, and tankless conversions are frequent requests." },
              { icon: Droplets, title: "Drain cleaning", body: "Particularly in older kitchen lines where decades of grease accumulation builds behind walls and under floors." },
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
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Do you serve commercial properties in Bowie?" light />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            Yes. We serve commercial properties, retail centers, office buildings, and government-adjacent facilities in Bowie. Definitive Mechanical holds MDOT MBE Certification (Cert No. 20-134) and CAGE Code 8HCF6 for government and commercial procurement. We are licensed under WSSC Master Plumber/Gasfitter #73696 for all Bowie-area plumbing work within the WSSC service territory.
          </p>
          <Link href="/commercial-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"'Barlow',sans-serif", fontSize:"14px", fontWeight:500 }}>
            Learn more about commercial plumbing →
          </Link>
        </div>
      </section>

      {/* S7: Nearby Areas */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Bowie we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/prince-georges-county/largo-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Largo, MD</Link>
            <Link href="/service-areas/maryland/prince-georges-county/fort-washington-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Fort Washington, MD</Link>
            {["Upper Marlboro, MD","Mitchellville, MD","Glenn Dale, MD","Crofton, MD","Odenton, MD","Davidsonville, MD","Fairwood, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Bowie, MD" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Bowie, MD?"
        subtext="Serving Bowie from our Largo, MD location. Maryland Master Plumber/Gasfitter #96958 · WSSC #73696 · 24/7 Emergency · Upfront Pricing."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE IN BOWIE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
