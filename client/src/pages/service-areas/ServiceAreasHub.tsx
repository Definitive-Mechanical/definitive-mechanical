import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { MapPin } from "lucide-react";
import BreadcrumbList from "@/components/ui/BreadcrumbList";
import TrustBadges from "@/components/ui/TrustBadges";
import BookNowButton from "@/components/ui/BookNowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

const regions = [
  {
    name: "Maryland",
    href: "/service-areas/maryland",
    counties: [
      { name: "Prince George's County", cities: [
        { name: "Largo, MD", href: "/service-areas/maryland/prince-georges-county/largo-md" },
        { name: "Bowie, MD", href: "/service-areas/maryland/prince-georges-county/bowie-md" },
        { name: "Fort Washington, MD", href: "/service-areas/maryland/prince-georges-county/fort-washington-md" },
      ]},
      { name: "Montgomery County", cities: [
        { name: "Rockville, MD", href: "/service-areas/maryland/montgomery-county/rockville-md" },
        { name: "Bethesda, MD", href: "/service-areas/maryland/montgomery-county/bethesda-md" },
        { name: "Potomac, MD", href: "/service-areas/maryland/montgomery-county/potomac-md" },
      ]},
      { name: "Howard County", cities: [
        { name: "Ellicott City, MD", href: "/service-areas/maryland/howard-county/ellicott-city-md" },
      ]},
      { name: "Charles County", cities: [
        { name: "Waldorf, MD", href: "/service-areas/maryland/charles-county/waldorf-md" },
      ]},
    ]
  },
  {
    name: "Washington DC",
    href: "/service-areas/washington-dc",
    counties: [
      { name: "All DC Wards", cities: [
        { name: "Washington, DC", href: "/service-areas/washington-dc" },
      ]},
    ]
  },
  {
    name: "Northern Virginia",
    href: "/service-areas/northern-virginia",
    counties: [
      { name: "Fairfax County", cities: [
        { name: "Alexandria, VA", href: "/service-areas/northern-virginia/fairfax-county/alexandria-va" },
        { name: "McLean, VA", href: "/service-areas/northern-virginia/fairfax-county/mclean-va" },
        { name: "Springfield, VA", href: "/service-areas/northern-virginia/fairfax-county/springfield-va" },
        { name: "Vienna, VA", href: "/service-areas/northern-virginia/fairfax-county/vienna-va" },
      ]},
      { name: "Arlington County", cities: [
        { name: "Arlington, VA", href: "/service-areas/northern-virginia/arlington-county/arlington-va" },
      ]},
    ]
  },
];

export default function ServiceAreasHub() {
  return (
    <>
      <Helmet>
        <title>Plumbing Service Areas — MD, DC & Northern VA | Definitive Mechanical</title>
        <meta name="description" content={`Definitive Mechanical serves Maryland, Washington DC, and Northern Virginia. Licensed plumbing in Prince George's County, Montgomery County, Fairfax County, Arlington, and more. Call (301) 679-5849.`} />
        <link rel="canonical" href="https://definitivemechanical.com/service-areas/" />
      </Helmet>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #003060 0%, #001830 100%)", minHeight: "40vh" }} className="py-16">
        <div className="container">
          <BreadcrumbList items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
          <div className="mt-6">
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }} className="mb-3">
              SERVICE AREAS · MARYLAND · WASHINGTON DC · NORTHERN VIRGINIA
            </p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", color: "white", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.15 }} className="mb-4">
              Plumbing Service Areas
            </h1>
            <p style={{ fontFamily: "'Barlow',sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "600px", lineHeight: 1.7 }} className="mb-6">
              Definitive Mechanical provides licensed plumbing service across the full Maryland, Washington DC, and Northern Virginia corridor from our base in Largo, MD. Emergency service is available 24/7 across the entire service area. Master Plumber and Master Gasfitter licensed in Maryland, DC, Virginia, and Delaware.
            </p>
            <TrustBadges variant="dark" badges={["Based in Largo, MD", "Serving MD · DC · VA · DE", "24/7 Emergency", "MDOT MBE · VA SWaM"]} />
            <div className="flex flex-wrap gap-4 mt-8">
              <BookNowButton variant="phone" size="lg" text="CALL (301) 679-5849" href="tel:+13016795849" />
              <BookNowButton variant="outline" size="md" text="REQUEST SERVICE" href="/contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeading eyebrow="COVERAGE AREA" heading="Where does Definitive Mechanical provide plumbing service?" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {regions.map((region, ri) => (
              <div key={ri} className="rounded-md overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,48,96,0.08)", border: "1px solid #E8EFF5" }}>
                <div className="p-5" style={{ background: "#003060" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={18} style={{ color: "#009EC6" }} />
                    <Link href={region.href} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "white", fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
                      {region.name}
                    </Link>
                  </div>
                  <Link href={region.href} style={{ fontFamily: "'Barlow Condensed',sans-serif", color: "#009EC6", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
                    View {region.name} →
                  </Link>
                </div>
                <div className="p-5">
                  {region.counties.map((county, ci) => (
                    <div key={ci} className="mb-4 last:mb-0">
                      <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: "#003060", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em" }} className="mb-2">{county.name}</p>
                      <div className="space-y-1">
                        {county.cities.map((city, cii) => (
                          <Link key={cii} href={city.href} style={{ display: "block", fontFamily: "'Barlow',sans-serif", color: "#009EC6", fontSize: "14px", textDecoration: "none" }}
                            className="hover:underline">
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Coverage */}
      <section className="py-16" style={{ background: "#F0F0F0" }}>
        <div className="container">
          <SectionHeading eyebrow="FULL COVERAGE" heading="Additional cities and communities we serve" />
          <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "15px", lineHeight: 1.7, maxWidth: "700px" }} className="mb-8">
            In addition to the priority cities listed above, Definitive Mechanical provides plumbing service to many additional communities across the DMV. If your city is not listed, call (301) 679-5849 — we likely serve your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {[
              "Upper Marlboro, MD","Hyattsville, MD","College Park, MD","Greenbelt, MD","Laurel, MD",
              "Silver Spring, MD","Takoma Park, MD","Chevy Chase, MD","Gaithersburg, MD","Germantown, MD",
              "Columbia, MD","Annapolis, MD","Clinton, MD","Oxon Hill, MD","Temple Hills, MD",
              "Capitol Heights, MD","Seat Pleasant, MD","Landover, MD","Lanham, MD","Glenn Dale, MD",
              "Falls Church, VA","Annandale, VA","Burke, VA","Lorton, VA","Reston, VA",
              "Herndon, VA","Tysons, VA","Great Falls, VA","Oakton, VA","Centreville, VA",
            ].map((city, i) => (
              <div key={i} className="bg-white rounded px-3 py-2 text-center" style={{ boxShadow: "0 1px 4px rgba(0,48,96,0.06)" }}>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#484848", fontSize: "13px" }}>{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not seeing your city? We likely serve your area."
        subtext="Call (301) 679-5849 — a live dispatcher answers 24/7. We serve the full Maryland, DC, and Northern Virginia corridor."
        primaryBtn={{ text: "CALL (301) 679-5849", href: "tel:+13016795849" }}
        secondaryBtn={{ text: "REQUEST SERVICE", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
