import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Dupont Circle, DC","url":"https://definitivemechanical.com/service-areas/washington-dc/dupont-circle/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"Place","name":"Dupont Circle, Washington DC"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"],"geo":{"@type":"GeoCoordinates","latitude":38.9096,"longitude":-77.0434}},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Washington DC","item":"https://definitivemechanical.com/service-areas/washington-dc/"},{"@type":"ListItem","position":4,"name":"Dupont Circle","item":"https://definitivemechanical.com/service-areas/washington-dc/dupont-circle/"}]}
];
export default function DupontCircleDC() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Dupont Circle, DC | Licensed Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Dupont Circle, DC. Plumbing, gas, water heater & emergency service for Dupont Circle's rowhouses, condos & embassies. DC #PGM1002236. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/washington-dc/dupont-circle/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Washington DC",href:"/service-areas/washington-dc"},{label:"Dupont Circle"}]}
      eyebrow="Plumber in Dupont Circle, DC  DC License #PGM1002236"
      h1="Plumber in Dupont Circle, DC"
      introParagraph={`Definitive Mechanical provides licensed plumbing, gas, emergency, and commercial services in Dupont Circle — a vibrant, densely populated DC neighborhood characterized by Beaux-Arts and Victorian rowhouses, apartment buildings, embassy properties, and an active commercial corridor along Connecticut and Massachusetts Avenues. We hold DC Master Plumber/Gasfitter License #PGM1002236 for all licensed plumbing work in the District.`}
      trustItems={["DC Master Plumber/Gasfitter #PGM1002236","MDOT MBE Cert 20-134","24/7 Emergency","CAGE 8HCF6"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning"},{label:"Gas Line Repair — DC DCRA-licensed Master Gasfitter",href:"/gas-line-repair"},{label:"Backflow Certification — DC Water compliant",href:"/backflow-certification"},{label:"Commercial Plumbing — restaurant and retail on the Circle and nearby avenues",href:"/commercial-plumbing"}]}
      localContextHeading="What makes Dupont Circle unique for plumbing?"
      localContextBody={`Dupont Circle's housing stock dates primarily from 1890-1930, with significant apartment building construction in the 1920s-1950s. Pre-war apartment buildings in the neighborhood have central plumbing infrastructure — building-wide supply risers, shared sewer stacks, and aging boiler and steam heating systems — that requires coordination with building management for any repair or emergency response.

The neighborhood's embassy corridor along Massachusetts Avenue NW presents commercial-grade plumbing requirements, including backflow certification and gas compliance documentation.`}
      licenseHeading="Are you licensed for Dupont Circle plumbing work?"
      credentials={[{label:"DC Master Plumber/Gasfitter License #PGM1002236 (DCRA-issued)"},{label:"MDOT MBE Certification No. 20-134"},{label:"CAGE Code 8HCF6"}]}
      nearbyAreas={[{label:"Georgetown",href:"/service-areas/washington-dc/georgetown"},{label:"Capitol Hill",href:"/service-areas/washington-dc/capitol-hill"},{label:"NoMa",href:"/service-areas/washington-dc/noma"},{label:"Washington DC Hub",href:"/service-areas/washington-dc"}]}
      countyHubLabel="Washington DC"
      countyHubHref="/service-areas/washington-dc"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/dupont-circle-dc-Xsf2j3Pnb8hCW6tspTXytF.webp"
        cityMapQuery="Dupont Circle, Washington DC"
      ctaCity="Dupont Circle"
      ctaLicenseLine="DC Master Plumber/Gasfitter #PGM1002236"
      schemaJson={schema}
    />
  );
}
