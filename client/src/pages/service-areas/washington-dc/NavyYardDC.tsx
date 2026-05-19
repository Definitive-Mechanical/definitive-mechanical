import Tier2CityPage from "@/components/layout/Tier2CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Navy Yard, DC","url":"https://definitivemechanical.com/service-areas/washington-dc/navy-yard/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"Place","name":"Navy Yard, Washington DC"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Washington DC","item":"https://definitivemechanical.com/service-areas/washington-dc/"},{"@type":"ListItem","position":4,"name":"Navy Yard","item":"https://definitivemechanical.com/service-areas/washington-dc/navy-yard/"}]}
];
export default function NavyYardDC() {
  return (
    <Tier2CityPage
      metaTitle="Plumber in Navy Yard, DC | New Construction & Commercial Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Navy Yard, DC. Plumbing for Navy Yard's condos, apartments & commercial properties. DC Master Plumber #PGM1002236. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/washington-dc/navy-yard/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Washington DC",href:"/service-areas/washington-dc"},{label:"Navy Yard"}]}
      eyebrow="Plumber in Navy Yard, DC · DC License #PGM1002236"
      h1="Plumber in Navy Yard, DC"
      introParagraph={"Definitive Mechanical provides licensed plumbing, emergency, and commercial services in Navy Yard — one of DC's most rapidly transformed neighborhoods, developed from a former federal shipyard into a mixed-use urban district anchored by Nationals Park and dense residential and commercial construction. Unlike most DC neighborhoods, Navy Yard's housing stock is predominantly new — built between 2005 and the present — with modern high-rise condominiums, apartment towers, and commercial buildings along the Anacostia riverfront. We hold DC Master Plumber/Gasfitter License #PGM1002236."}
      trustItems={["DC Master Plumber/Gasfitter #PGM1002236","MDOT MBE Cert 20-134","24/7 Emergency","CAGE 8HCF6"]}
      services={[{label:"24/7 Emergency Plumbing — high-rise condo emergency response",href:"/emergency-plumbing"},{label:"Water Heater Repair & Tankless Water Heaters — common in Navy Yard's modern construction",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning"},{label:"Gas Line Repair",href:"/gas-line-repair"},{label:"Backflow Certification — DC Water compliant for commercial properties",href:"/backflow-certification"},{label:"Commercial Plumbing — restaurants and retail along M Street SE and Half Street SE",href:"/commercial-plumbing"}]}
      localContextHeading="What makes Navy Yard unique for plumbing?"
      localContextBody={"Navy Yard's modern construction means PEX plumbing, high-efficiency tankless water heaters, and building-wide pressure booster systems — a different profile than DC's older neighborhoods. Plumbing issues in Navy Yard's condominiums are more likely to involve fitting failures, pressure regulator problems, and building system coordination than the aged pipe infrastructure common elsewhere in DC. Building management and HOA authorization is required for any work in common mechanical areas."}
      licenseHeading="Are you licensed for Navy Yard plumbing work?"
      credentials={[{label:"DC Master Plumber/Gasfitter License #PGM1002236 (DCRA-issued)"},{label:"MDOT MBE Certification No. 20-134"},{label:"CAGE Code 8HCF6"}]}
      nearbyAreas={[{label:"Capitol Hill",href:"/service-areas/washington-dc/capitol-hill"},{label:"NoMa",href:"/service-areas/washington-dc/noma"},{label:"Washington DC Hub",href:"/service-areas/washington-dc"}]}
      countyHubLabel="Washington DC"
      countyHubHref="/service-areas/washington-dc"
      ctaCity="Navy Yard"
      ctaLicenseLine="DC Master Plumber/Gasfitter #PGM1002236"
      schemaJson={schema}
    />
  );
}
