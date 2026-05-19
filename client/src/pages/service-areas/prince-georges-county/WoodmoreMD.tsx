import Tier2CityPage from "@/components/layout/Tier2CityPage";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    "name": "Definitive Mechanical",
    "description": "Licensed plumber serving Woodmore, MD",
    "url": "https://definitivemechanical.com/service-areas/maryland/prince-georges-county/woodmore-md/",
    "telephone": "+13016795849",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9701 Apollo Drive, Suite 100",
      "addressLocality": "Largo",
      "addressRegion": "MD",
      "postalCode": "20774",
      "addressCountry": "US"
    },
    "areaServed": { "@type": "City", "name": "Woodmore, MD" },
    "openingHours": ["Mo-Fr 09:00-17:00", "Sa 09:00-14:00"]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can you respond to a Woodmore emergency?",
        "acceptedAnswer": { "@type": "Answer", "text": "Woodmore is approximately 10–20 minutes from our Largo location depending on the specific address within the community. Emergency dispatch is immediate." }
      },
      {
        "@type": "Question",
        "name": "Are you WSSC-licensed for work in Woodmore?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. WSSC License #73696 covers all permitted plumbing and gas work in Woodmore and throughout the WSSC service territory in Prince George's County." }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://definitivemechanical.com/service-areas/" },
      { "@type": "ListItem", "position": 3, "name": "Maryland", "item": "https://definitivemechanical.com/service-areas/maryland/" },
      { "@type": "ListItem", "position": 4, "name": "Prince George's County", "item": "https://definitivemechanical.com/service-areas/maryland/prince-georges-county/" },
      { "@type": "ListItem", "position": 5, "name": "Woodmore, MD", "item": "https://definitivemechanical.com/service-areas/maryland/prince-georges-county/woodmore-md/" }
    ]
  }
];

export default function WoodmoreMD() {
  return (
    <Tier2CityPage
      metaTitle="Plumber in Woodmore, MD | 24/7 Emergency Plumbing | Definitive Mechanical"
      metaDescription="Licensed plumber serving Woodmore, MD. Water heater repair, drain cleaning, sewer line service & emergency plumbing. MD Master Plumber #96958 + WSSC #73696. Call (301) 679-5849."
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/woodmore-md/"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "Maryland", href: "/service-areas/maryland" },
        { label: "Prince George's County", href: "/service-areas/maryland/prince-georges-county" },
        { label: "Woodmore MD" }
      ]}
      eyebrow={`Plumber in Woodmore, MD · Prince George's County · Serving from Largo, MD`}
      h1="Plumber in Woodmore, MD"
      introParagraph={`Definitive Mechanical provides licensed plumbing, gas, emergency, and commercial services in Woodmore, Maryland — a premier planned community in Prince George's County built around the Woodmore Country Club golf course, known for its large custom homes on wooded lots. We hold Maryland State Master Plumber/Gasfitter License #96958 and WSSC License #73696, and serve Woodmore from our nearby Largo, MD location.`}
      trustItems={["MD Master Plumber #96958", "WSSC #73696", "MDOT MBE Cert 20-134", "24/7 Emergency", "11 Years in Business"]}
      services={[
        { label: "24/7 Emergency Plumbing", href: "/emergency-plumbing" },
        { label: "Water Heater Repair & Installation", href: "/water-heater-repair" },
        { label: "Drain Cleaning & Hydro-Jetting", href: "/drain-cleaning" },
        { label: "Sewer Line Repair & Video Camera Inspection", href: "/sewer-line-repair" },
        { label: "Gas Line Repair — licensed Master Gasfitter, MD #96958", href: "/gas-line-repair" },
        { label: "Backflow Certification — WSSC-compliant annual testing", href: "/backflow-certification" },
        { label: "Commercial Plumbing for HOA and community facilities", href: "/commercial-plumbing" }
      ]}
      localContextHeading="What are the common plumbing issues in Woodmore?"
      localContextBody={`Woodmore's custom homes — many built in the 1990s and early 2000s — are relatively newer but face distinct plumbing needs. Large lot sizes mean longer water service line runs and sewer laterals, increasing the likelihood of root intrusion from Woodmore's mature tree canopy. The community's affluent housing profile means finished basements and high-end mechanical rooms are common — making burst pipe and water damage events more costly than average.`}
      calloutNote="WSSC serves Woodmore for water and sewer. All permitted plumbing work requires a WSSC-licensed contractor."
      licenseHeading="Are you licensed for plumbing in Woodmore?"
      credentials={[
        { label: "Maryland State Master Plumber/Gasfitter License #96958" },
        { label: "WSSC License #73696" },
        { label: "MDOT MBE Certification No. 20-134" }
      ]}
      nearbyAreas={[
        { label: "Largo", href: "/service-areas/maryland/prince-georges-county/largo-md" },
        { label: "Bowie", href: "/service-areas/maryland/prince-georges-county/bowie-md" },
        { label: "Fairwood", href: "/service-areas/maryland/prince-georges-county/fairwood-md" },
        { label: "Fort Washington", href: "/service-areas/maryland/prince-georges-county/fort-washington-md" }
      ]}
      countyHubLabel={`Prince George's County`}
      countyHubHref="/service-areas/maryland/prince-georges-county"
      faqs={[
        { q: "How quickly can you respond to a Woodmore emergency?", a: "Woodmore is approximately 10–20 minutes from our Largo location depending on the specific address within the community. Emergency dispatch is immediate." },
        { q: "Are you WSSC-licensed for work in Woodmore?", a: "Yes. WSSC License #73696 covers all permitted plumbing and gas work in Woodmore and throughout the WSSC service territory in Prince George's County." }
      ]}
      ctaCity="Woodmore"
      ctaLicenseLine="MD Master Plumber #96958 | WSSC #73696"
      schemaJson={schema}
    />
  );
}
