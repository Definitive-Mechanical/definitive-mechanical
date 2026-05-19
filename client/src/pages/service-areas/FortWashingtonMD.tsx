import { Helmet } from "react-helmet";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  AlertCircle, ShieldCheck, Wrench, Wind, Building2
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
  { icon: AlertCircle, label: "Gas Leak Repair", href: "/gas-leak-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wrench, label: "Water Line Repair", href: "/water-line-repair" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Wrench, label: "Faucet & Toilet Repair", href: "/faucet-toilet-repair" },
];

const faqs = [
  { question: "What plumbing services do you offer in Fort Washington, MD?", answer: "Full-service plumbing in Fort Washington including emergency service, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and faucet and toilet repair. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Fort Washington?", answer: "Yes. Emergency service available 24/7 from our Largo, MD location. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. Call (301) 679-5849." },
  { question: "Are you licensed to work in Fort Washington and Prince George's County?", answer: "Yes. Maryland State Master Plumber/Gasfitter #96958 and WSSC Master Plumber/Gasfitter #73696 cover all plumbing work in Fort Washington and throughout Prince George's County." },
  { question: "Can you service sump pumps and basement drainage in Fort Washington?", answer: "Yes. We service sump pumps, ejector pumps, and basement drainage systems for Fort Washington homeowners. Call (301) 679-5849 for assessment and service." },
];

export default function FortWashingtonMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Fort Washington, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Fort Washington, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning & gas line service. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/fort-washington-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "50vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Prince George's County",href:"/service-areas/maryland/prince-georges-county"},
            {label:"Fort Washington, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", color:"#009EC6", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · FORT WASHINGTON, MD · PRINCE GEORGE'S COUNTY
              </p>
              <h1 style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:"clamp(28px,4vw,40px)", fontWeight:700, lineHeight:1.15 }} className="mb-4">
                Plumber in Fort Washington, MD
              </h1>
              <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Fort Washington, Maryland — serving from our Largo, MD base. Emergency plumbing, water heater repair, drain cleaning, sewer service, gas line work, and commercial plumbing available 24/7. Maryland Master Plumber/Gasfitter #96958, WSSC #73696. Upfront pricing in writing. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["Licensed Master Plumber","WSSC #73696","24/7 Emergency","Near Fort Washington, MD","Serving from Largo, MD"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <img src="https://placehold.co/700x500/186090/C0D8F0?text=Plumber+Fort+Washington+MD" alt="Licensed plumber Fort Washington Maryland — Definitive Mechanical" loading="eager" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Licensed Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Fort Washington, MD?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Fort Washington is a primarily residential community along the Potomac River in southern Prince George's County — characterized by well-established single-family neighborhoods, waterfront properties, and proximity to the National Harbor corridor. The housing stock ranges from mid-century homes to 1980s and 1990s construction, with a mix of plumbing systems that reflects that age range.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href}>
                <div className="bg-white rounded-md p-4 flex items-start gap-3 border-t-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5" style={{ borderTopColor:"#009EC6" }}>
                  <svc.icon size={20} style={{ color:"#009EC6", flexShrink:0, marginTop:2 }} />
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:500, color:"#003060", fontSize:"14px" }}>{svc.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Emergency */}
      <section className="py-16" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Fort Washington?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing service in Fort Washington is available 24/7. We serve Fort Washington from our Largo, MD location — a direct route via Central Avenue and Suitland Parkway or MD-210.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }}>
              A live dispatcher answers every call. Licensed Master Plumber dispatched. Same rate day or night — no overtime surcharge. Call (301) 679-5849.
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
          <SectionHeading eyebrow="RESIDENTIAL PLUMBING" heading="What plumbing issues are common in Fort Washington homes?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Fort Washington's residential neighborhoods include a significant number of homes built in the 1960s through 1980s. Plumbing systems of this era frequently include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: GitBranch, title: "Original cast iron drain lines", body: "Approaching or past end of service life — camera inspection is recommended for homes of this age experiencing recurring drain issues." },
              { icon: Thermometer, title: "Aging water heaters", body: "Many Fort Washington homes are on their second or third water heater. When the current unit is 10+ years old, proactive replacement before failure is often more cost-effective than emergency replacement." },
              { icon: Droplets, title: "Sump pump and basement drainage systems", body: "Properties closer to the Potomac River watershed often have moisture management systems that require periodic service." },
              { icon: Flame, title: "Gas appliance service", body: "Fort Washington has a high proportion of gas-heated homes; gas line hookups for generators, standby power systems, and appliance upgrades are common service requests." },
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
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Commercial plumbing in Fort Washington" light />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            Definitive Mechanical serves commercial and government-adjacent facilities in Fort Washington and the National Harbor corridor. MDOT MBE Certified (Cert No. 20-134), CAGE Code 8HCF6. Maryland Master Plumber/Gasfitter #96958 and WSSC #73696 for all local plumbing work.
          </p>
          <Link href="/commercial-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"'Barlow',sans-serif", fontSize:"14px", fontWeight:500 }}>
            Learn more about commercial plumbing →
          </Link>
        </div>
      </section>

      {/* S7: Nearby Areas */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Fort Washington we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/charles-county/waldorf-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Waldorf, MD</Link>
            <Link href="/service-areas/maryland/prince-georges-county/largo-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Largo, MD</Link>
            {["Oxon Hill, MD","Accokeek, MD","Brandywine, MD","Clinton, MD","Temple Hills, MD","National Harbor, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <Link href="/service-areas" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Fort Washington, MD" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Fort Washington, MD?"
        subtext="Serving Fort Washington from our Largo, MD location. Maryland Master Plumber #96958 · WSSC #73696 · 24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
