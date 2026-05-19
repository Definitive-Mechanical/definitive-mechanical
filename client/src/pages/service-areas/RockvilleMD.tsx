import { Helmet } from "react-helmet";
import { Link } from "wouter";
import {
  AlertTriangle, Droplets, Thermometer, Zap, GitBranch, Flame,
  ShieldCheck, Wind, Building2, Key
} from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";

const services = [
  { icon: AlertTriangle, label: "24/7 Emergency Plumbing", href: "/emergency-plumbing", note: "including Emergency Plumber Rockville MD" },
  { icon: Droplets, label: "Drain Cleaning and Hydro-Jetting", href: "/drain-cleaning" },
  { icon: Thermometer, label: "Water Heater Repair and Installation", href: "/water-heater-repair" },
  { icon: Zap, label: "Tankless Water Heaters", href: "/tankless-water-heaters" },
  { icon: GitBranch, label: "Sewer Line Repair and Camera Inspection", href: "/sewer-line-repair" },
  { icon: Flame, label: "Gas Line Repair and Installation", href: "/gas-line-repair" },
  { icon: ShieldCheck, label: "Backflow Prevention and Certification", href: "/backflow-certification" },
  { icon: Wind, label: "Boiler & Furnace Repair", href: "/boiler-furnace-repair" },
  { icon: Building2, label: "Commercial Plumbing", href: "/commercial-plumbing", note: "MDOT MBE Certified" },
];

const faqs = [
  { question: "What plumbing services do you offer in Rockville, MD?", answer: "Full-service plumbing in Rockville including emergency plumbing, drain cleaning, water heater repair and installation, sewer line service, gas line repair, backflow certification, boiler and furnace service, and commercial plumbing for businesses and government facilities. Licensed specifically for Rockville: City of Rockville Master Plumber/Gasfitter #PLL-0002113. Call (301) 679-5849." },
  { question: "Do you provide 24/7 emergency plumbing in Rockville?", answer: "Yes. Emergency service available 24/7 from our Largo, MD location. A live dispatcher answers every call. Licensed Master Plumber dispatched. No overtime surcharge. See our dedicated Emergency Plumber Rockville MD page." },
  { question: "Are you licensed specifically for the City of Rockville?", answer: "Yes. In addition to our Maryland State (MD #96958) and WSSC (#73696) licenses, Definitive Mechanical holds a City of Rockville Master Plumber/Gasfitter license (#PLL-0002113) — a municipal license required for work within the City of Rockville's jurisdiction." },
  { question: "Do you provide commercial backflow certification in Rockville?", answer: "Yes. We provide annual backflow preventer testing, certification, and report filing for commercial properties in Rockville. We can also manage annual certification scheduling for property managers with multiple properties. Call (301) 679-5849." },
];

export default function RockvilleMD() {
  return (
    <>
      <Helmet>
        <title>Plumber in Rockville, MD | 24/7 Emergency Plumbing | Definitive Mechanical</title>
        <meta name="description" content="Need a licensed plumber in Rockville, MD? Definitive Mechanical provides 24/7 emergency plumbing, water heater repair, drain cleaning, gas line service & commercial plumbing. Call (301) 679-5849." />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/maryland/montgomery-county/rockville-md/" />
      </Helmet>

      {/* S1: Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "50vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[
            {label:"Home",href:"/"},
            {label:"Service Areas",href:"/service-areas"},
            {label:"Maryland",href:"/service-areas/maryland"},
            {label:"Montgomery County",href:"/service-areas/maryland/montgomery-county"},
            {label:"Rockville, MD"}
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8 items-center">
            <div className="lg:col-span-3">
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", color:"#009EC6", fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:700 }} className="mb-3">
                PLUMBING SERVICE · ROCKVILLE, MD · MONTGOMERY COUNTY
              </p>
              <h1 style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:"clamp(28px,4vw,40px)", fontWeight:700, lineHeight:1.15 }} className="mb-4">
                Plumber in Rockville, MD
              </h1>
              <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"17px", maxWidth:"560px", lineHeight:1.7 }} className="mb-6">
                Definitive Mechanical provides licensed plumbing service in Rockville, Maryland for homes, businesses, and government facilities. Emergency plumbing, water heater repair, drain cleaning, gas line service, sewer repair, backflow certification, and commercial plumbing available 24/7. Licensed for Rockville specifically: City of Rockville Master Plumber/Gasfitter #PLL-0002113. Call (301) 679-5849.
              </p>
              <TrustBadges variant="dark" badges={["City of Rockville Master Plumber #PLL-0002113","WSSC #73696","MD State #96958","24/7 Emergency","MDOT MBE Certified"]} />
              <div className="flex flex-wrap gap-4 mt-8">
                <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
                <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <img src="https://placehold.co/700x500/186090/C0D8F0?text=Plumber+Rockville+MD+City+Licensed" alt="Licensed plumber Rockville Maryland — City of Rockville license #PLL-0002113" loading="eager" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Licensed Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LICENSED PLUMBING SERVICES" heading="What licensed plumbing services are available in Rockville, MD?" />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-6 max-w-3xl">
            Rockville is Montgomery County's county seat and one of the most economically significant cities in the DMV — a dense mix of established residential neighborhoods, major commercial corridors, government offices, healthcare facilities, and high-density mixed-use development. Definitive Mechanical serves the full range of Rockville plumbing needs from residential homeowners in neighborhoods like Twinbrook and Fallsgrove to commercial and government facilities throughout the city.
          </p>
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-8 max-w-3xl">
            Importantly: Definitive Mechanical holds a City of Rockville Master Plumber/Gasfitter license (#PLL-0002113) — a municipal license required for work within the City of Rockville's jurisdiction, separate from the state and WSSC licenses. This is a detail many DMV plumbing contractors overlook, and a credential that demonstrates our commitment to full compliance within every jurisdiction where we work.
          </p>

          {/* Rockville Credential Callout */}
          <div className="border-2 rounded-lg p-5 max-w-2xl mx-auto mb-8 flex items-start gap-4" style={{ borderColor:"#009EC6" }}>
            <Key size={28} style={{ color:"#009EC6", flexShrink:0, marginTop:2 }} />
            <div>
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"6px" }}>
                CITY OF ROCKVILLE MUNICIPAL LICENSE
              </p>
              <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", lineHeight:1.6 }}>
                City of Rockville Master Plumber/Gasfitter #PLL-0002113 — issued by the City of Rockville, required for permitted plumbing work within the City's municipal jurisdiction. Many DMV plumbing contractors hold the state (#96958) and WSSC (#73696) credentials but not this specific Rockville municipal license.
              </p>
            </div>
          </div>

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
          <SectionHeading eyebrow="24/7 EMERGENCY SERVICE" heading="Do you provide 24/7 emergency plumbing in Rockville?" />
          <div className="max-w-3xl mb-8">
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-4">
              Yes. Emergency plumbing in Rockville is available 24 hours a day, 7 days a week, 365 days a year. Rockville emergency plumbing is among the highest-value markets in our service area — the combination of high-density residential, commercial, and government facility demand means emergency plumbing response in Rockville is a service we provide regularly and efficiently.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }}>
              Emergency plumber keywords for Rockville carry some of the highest cost-per-click values in the DMV market — which reflects how urgently Rockville residents and businesses need reliable emergency plumbing response. We deliver it. Call (301) 679-5849.
            </p>
          </div>
          <div className="text-center">
            <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
            <p className="mt-4">
              <Link href="/emergency-plumbing" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>
                See our dedicated Emergency Plumber Rockville MD page →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* S4: Local Context */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="LOCAL PLUMBING NEEDS" heading="What plumbing needs are most common for Rockville homes and businesses?" />
          <div className="max-w-3xl">
            <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:600, color:"#003060", fontSize:"15px" }} className="mb-2">Residential:</p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-6">
              Rockville's housing stock spans from mid-century Twinbrook ranchers (1950s–1960s, often with original cast iron drain lines and galvanized water supply that have been updated over decades) to newer construction in Fallsgrove, King Farm, and Rockville Town Square where modern systems are reaching their first major service milestones. Common residential calls in Rockville include water heater replacement (gas and electric), drain cleaning in mid-century homes, sewer camera inspection before home purchase, and gas line service for kitchen renovations and outdoor appliance additions.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:600, color:"#003060", fontSize:"15px" }} className="mb-2 mt-6">Commercial:</p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }} className="mb-6">
              Rockville's commercial corridor — particularly along MD-355/Rockville Pike — includes restaurants, retail, medical offices, and government-adjacent businesses with backflow certification requirements, commercial drain maintenance needs, and gas system service. We provide backflow certification program management for commercial properties in Rockville.
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontWeight:600, color:"#003060", fontSize:"15px" }} className="mb-2 mt-4">Government facilities:</p>
            <p style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"16px", lineHeight:1.7 }}>
              Rockville's municipal facilities, county offices, and government-adjacent properties are candidates for our MBE-certified commercial and government plumbing services.
            </p>
          </div>
        </div>
      </section>

      {/* S5: Commercial */}
      <section className="py-16" style={{ background:"#003060" }}>
        <div className="container text-center">
          <SectionHeading eyebrow="COMMERCIAL & GOVERNMENT" heading="Commercial & Government Plumbing in Rockville" light />
          <p style={{ fontFamily:"'Barlow',sans-serif", color:"rgba(255,255,255,0.85)", fontSize:"16px", lineHeight:1.7, maxWidth:"700px", margin:"0 auto 24px" }}>
            Definitive Mechanical holds City of Rockville License #PLL-0002113, MDOT MBE Certification (Cert No. 20-134), and CAGE Code 8HCF6 — providing full commercial compliance credentials for Rockville businesses and government facilities.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6 mb-6">
            {["City of Rockville #PLL-0002113","MDOT MBE Cert 20-134","CAGE 8HCF6"].map((badge, i) => (
              <span key={i} style={{ background:"white", color:"#003060", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"11px", textTransform:"uppercase", padding:"4px 12px", borderRadius:"2px" }}>{badge}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/commercial-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"'Barlow',sans-serif", fontSize:"14px", fontWeight:500 }}>Commercial Plumbing →</Link>
            <Link href="/government-municipal-plumbing" style={{ color:"white", textDecoration:"underline", fontFamily:"'Barlow',sans-serif", fontSize:"14px", fontWeight:500 }}>Government & Municipal →</Link>
          </div>
        </div>
      </section>

      {/* S7: Nearby Areas */}
      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading eyebrow="NEARBY SERVICE AREAS" heading="Areas near Rockville we also serve" />
          <div className="mb-3">
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, color:"#003060", fontSize:"13px", textTransform:"uppercase", marginRight:"8px" }}>Nearby:</span>
            <Link href="/service-areas/maryland/montgomery-county/bethesda-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Bethesda, MD</Link>
            <Link href="/service-areas/maryland/montgomery-county/potomac-md" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", marginRight:"12px" }}>Potomac, MD</Link>
            {["Gaithersburg, MD","Germantown, MD","North Bethesda, MD","Derwood, MD","Travilah, MD","Darnestown, MD","Cabin John, MD"].map((city, i) => (
              <span key={i} style={{ fontFamily:"'Barlow',sans-serif", color:"#484848", fontSize:"14px", marginRight:"12px" }}>{city}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/service-areas/maryland/montgomery-county" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>Montgomery County Plumbing Services →</Link>
            <Link href="/service-areas" style={{ fontFamily:"'Barlow',sans-serif", color:"#009EC6", fontSize:"14px", fontWeight:500 }}>View Full Service Area →</Link>
          </div>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-20" style={{ background:"#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" heading="Plumbing FAQ — Rockville, MD" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} schema={true} />
          </div>
        </div>
      </section>

      {/* S9: CTA Banner */}
      <CTABanner
        heading="Need a licensed plumber in Rockville, MD?"
        subtext="Serving Rockville from our Largo, MD location. City of Rockville #PLL-0002113 · WSSC #73696 · MD State #96958 · 24/7 Emergency."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
