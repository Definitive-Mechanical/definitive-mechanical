import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Georgetown, DC","url":"https://definitivemechanical.com/service-areas/washington-dc/georgetown/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"Place","name":"Georgetown, Washington DC"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do you work on historic Georgetown rowhouses with original plumbing?","acceptedAnswer":{"@type":"Answer","text":"Yes. We have experience working in pre-war and 19th-century masonry construction where access and material choices require particular care. We discuss access options with homeowners before opening any wall or floor."}},{"@type":"Question","name":"Are you licensed by DCRA for Georgetown plumbing work?","acceptedAnswer":{"@type":"Answer","text":"Yes. DC Master Plumber/Gasfitter License #PGM1002236, verifiable at dcra.dc.gov."}}]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Washington DC","item":"https://definitivemechanical.com/service-areas/washington-dc/"},{"@type":"ListItem","position":4,"name":"Georgetown","item":"https://definitivemechanical.com/service-areas/washington-dc/georgetown/"}]}
];
export default function GeorgetownDC() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Georgetown, DC | Historic Property Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Georgetown, DC. Expert plumbing for Georgetown's historic rowhouses, condos & commercial properties. DC Master Plumber #PGM1002236. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/washington-dc/georgetown/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Washington DC",href:"/service-areas/washington-dc"},{label:"Georgetown"}]}
      eyebrow="Plumber in Georgetown, DC  All Services Available  DC License #PGM1002236"
      h1="Plumber in Georgetown, DC"
      introParagraph={`Definitive Mechanical provides licensed plumbing, gas, emergency, and commercial services in Georgetown — Washington DC's oldest neighborhood and one of the oldest planned communities in the United States. Georgetown's housing stock spans three centuries: pre-Federal rowhouses from the 1790s through Federal-style townhouses of the early 1800s, Victorian-era construction, and 20th-century renovations and additions. We hold DC Master Plumber/Gasfitter License #PGM1002236 — the DCRA-issued credential required for all licensed plumbing work in the District.`}
      trustItems={["DC Master Plumber/Gasfitter #PGM1002236","MDOT MBE Cert 20-134","24/7 Emergency","CAGE 8HCF6"]}
      services={[{label:"24/7 Emergency Plumbing — serving Georgetown addresses around the clock",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning — including historic masonry drain systems",href:"/drain-cleaning"},{label:"Sewer Line Repair & Video Camera Inspection — Georgetown has some of DC's oldest sewer laterals",href:"/sewer-line-repair"},{label:"Gas Line Repair — DC DCRA-licensed Master Gasfitter",href:"/gas-line-repair"},{label:"Backflow Certification — DC Water compliant annual testing",href:"/backflow-certification"},{label:"Commercial Plumbing — serving Georgetown's M Street and Wisconsin Avenue commercial corridors",href:"/commercial-plumbing"}]}
      localContextHeading="What makes Georgetown unique for plumbing?"
      localContextBody={`Georgetown presents some of the most complex plumbing work in the DC metro area. Pre-Civil War masonry construction means supply lines run through 12-24 inch brick walls that cannot be opened without significant care and restoration. Many Georgetown properties have plumbing systems from multiple eras — lead pipe from the 1920s municipal connections, galvanized from mid-century, copper from the 1970s, and PEX from recent kitchen and bath renovations — all coexisting in the same building.

Georgetown's original sewer system dates to the 1800s and uses brick-lined combined sewer infrastructure. Sewer lateral conditions vary enormously from property to property. A camera inspection is essential before any sewer recommendation.

Georgetown's dense canopy — one of the most mature urban tree canopies in DC — contributes to root intrusion in aging clay laterals on residential blocks throughout the neighborhood.`}
      calloutNote="All plumbing work in Georgetown requires a DCRA-licensed plumber. We hold DC Master Plumber/Gasfitter License #PGM1002236, independently issued — not a Maryland or Virginia reciprocal license."
      licenseHeading="Are you licensed for plumbing in Georgetown, DC?"
      credentials={[{label:"DC Master Plumber/Gasfitter License #PGM1002236 (DCRA-issued, verifiable at dcra.dc.gov)"},{label:"MDOT MBE Certification No. 20-134"},{label:"CAGE Code 8HCF6"}]}
      faqs={[{q:"Do you work on historic Georgetown rowhouses with original plumbing?",a:"Yes. We have experience working in pre-war and 19th-century masonry construction where access and material choices require particular care. We discuss access options with homeowners before opening any wall or floor."},{q:"Are you licensed by DCRA for Georgetown plumbing work?",a:"Yes. DC Master Plumber/Gasfitter License #PGM1002236, verifiable at dcra.dc.gov."}]}
      nearbyAreas={[{label:"Capitol Hill",href:"/service-areas/washington-dc/capitol-hill"},{label:"Dupont Circle",href:"/service-areas/washington-dc/dupont-circle"},{label:"Washington DC Hub",href:"/service-areas/washington-dc"}]}
      countyHubLabel="Washington DC"
      countyHubHref="/service-areas/washington-dc"
      ctaCity="Georgetown"
      ctaLicenseLine="DC Master Plumber/Gasfitter #PGM1002236"
      schemaJson={schema}
    />
  );
}
