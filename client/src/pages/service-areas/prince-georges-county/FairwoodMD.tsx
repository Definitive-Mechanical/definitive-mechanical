import Tier2CityPage from "@/components/layout/Tier2CityPage";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    "name": "Definitive Mechanical",
    "description": "Licensed plumber serving Fairwood, MD",
    "url": "https://definitivemechanical.com/service-areas/maryland/prince-georges-county/fairwood-md/",
    "telephone": "+13016795849",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9701 Apollo Drive, Suite 100",
      "addressLocality": "Largo",
      "addressRegion": "MD",
      "postalCode": "20774",
      "addressCountry": "US"
    },
    "areaServed": { "@type": "City", "name": "Fairwood, MD" },
    "openingHours": ["Mo-Fr 09:00-17:00", "Sa 09:00-14:00"]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://definitivemechanical.com/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://definitivemechanical.com/service-areas/" },
      { "@type": "ListItem", "position": 3, "name": "Maryland", "item": "https://definitivemechanical.com/service-areas/maryland/" },
      { "@type": "ListItem", "position": 4, "name": "Prince George's County", "item": "https://definitivemechanical.com/service-areas/maryland/prince-georges-county/" },
      { "@type": "ListItem", "position": 5, "name": "Fairwood, MD", "item": "https://definitivemechanical.com/service-areas/maryland/prince-georges-county/fairwood-md/" }
    ]
  }
];

export default function FairwoodMD() {
  return (
    <Tier2CityPage
      metaTitle="Plumber in Fairwood, MD | Licensed Plumbing | Definitive Mechanical"
      metaDescription="Licensed plumber serving Fairwood, MD. Emergency plumbing, water heater repair, drain cleaning & gas service. WSSC-licensed. MD #96958. Call (301) 679-5849."
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/fairwood-md/"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "Maryland", href: "/service-areas/maryland" },
        { label: "Prince George's County", href: "/service-areas/maryland/prince-georges-county" },
        { label: "Fairwood MD" }
      ]}
      eyebrow="Plumber in Fairwood, MD · Prince George's County · Serving from Largo, MD"
      h1="Plumber in Fairwood, MD"
      introParagraph="Definitive Mechanical serves Fairwood, Maryland — a master-planned community in Prince George's County developed in the late 1990s and early 2000s with a mix of single-family homes, townhouses, and upscale community amenities. We hold Maryland State Master Plumber License #96958 and WSSC License #73696, and provide emergency, residential, and commercial plumbing service throughout Fairwood from our nearby Largo location."
      trustItems={["MD Master Plumber #96958", "WSSC #73696", "MDOT MBE Cert 20-134", "24/7 Emergency"]}
      services={[
        { label: "24/7 Emergency Plumbing", href: "/emergency-plumbing" },
        { label: "Drain Cleaning & Hydro-Jetting", href: "/drain-cleaning" },
        { label: "Water Heater Repair & Installation — including tankless upgrades popular in Fairwood's newer homes", href: "/water-heater-repair" },
        { label: "Sewer Line Repair & Video Camera Inspection", href: "/sewer-line-repair" },
        { label: "Gas Line Repair & Gas Leak Response", href: "/gas-line-repair" },
        { label: "Backflow Prevention & Annual Certification", href: "/backflow-certification" }
      ]}
      localContextHeading="What are the common plumbing needs in Fairwood?"
      localContextBody="Fairwood's housing stock — built primarily 1997–2008 — uses PVC drain lines and copper or CPVC supply lines. As these systems approach 20–25 years of age, fitting failures, water heater replacement cycles, and water pressure regulator issues become the most common service calls. Fairwood's HOA amenities (clubhouse, pool, community facilities) also require commercial-grade plumbing service and annual backflow certification."
      calloutNote="WSSC serves Fairwood. All permitted plumbing requires a WSSC-licensed contractor."
      licenseHeading="Are you licensed for plumbing in Fairwood?"
      credentials={[
        { label: "Maryland State Master Plumber License #96958" },
        { label: "WSSC License #73696" },
        { label: "MDOT MBE Certification No. 20-134" }
      ]}
      nearbyAreas={[
        { label: "Woodmore", href: "/service-areas/maryland/prince-georges-county/woodmore-md" },
        { label: "Largo", href: "/service-areas/maryland/prince-georges-county/largo-md" },
        { label: "Bowie", href: "/service-areas/maryland/prince-georges-county/bowie-md" }
      ]}
      countyHubLabel="Prince George's County"
      countyHubHref="/service-areas/maryland/prince-georges-county"
      ctaCity="Fairwood"
      ctaLicenseLine="MD Master Plumber #96958 | WSSC #73696"
      schemaJson={schema}
    />
  );
}
