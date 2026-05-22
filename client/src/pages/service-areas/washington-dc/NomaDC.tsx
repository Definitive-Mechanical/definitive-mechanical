import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving NoMa, DC","url":"https://definitivemechanical.com/service-areas/washington-dc/noma/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"Place","name":"NoMa, Washington DC"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"],"geo":{"@type":"GeoCoordinates","latitude":38.9076,"longitude":-77.0032}},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Washington DC","item":"https://definitivemechanical.com/service-areas/washington-dc/"},{"@type":"ListItem","position":4,"name":"NoMa","item":"https://definitivemechanical.com/service-areas/washington-dc/noma/"}]}
];
export default function NomaDC() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in NoMa, DC | Licensed Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving NoMa (North of Massachusetts Avenue), DC. Plumbing for NoMa's condos, apartments & commercial buildings. DC #PGM1002236. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/washington-dc/noma/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Washington DC",href:"/service-areas/washington-dc"},{label:"NoMa"}]}
      eyebrow="Plumber in NoMa, DC  DC License #PGM1002236"
      h1="Plumber in NoMa, DC"
      introParagraph={"Definitive Mechanical provides licensed plumbing, emergency, and commercial services in NoMa (North of Massachusetts Avenue NE) — a rapidly growing DC neighborhood that has transformed from light-industrial to a dense mixed-use district of apartment towers, condominiums, hotels, office buildings, and retail around the NoMa-Gallaudet Metro station. We hold DC Master Plumber/Gasfitter License #PGM1002236 for all licensed plumbing work in the District."}
      trustItems={["DC Master Plumber/Gasfitter #PGM1002236","MDOT MBE Cert 20-134","24/7 Emergency","CAGE 8HCF6"]}
      services={[{label:"24/7 Emergency Plumbing — high-rise and mid-rise residential response",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning & Backflow Certification — DC Water compliant",href:"/drain-cleaning"},{label:"Gas Line Repair — DC DCRA-licensed",href:"/gas-line-repair"},{label:"Commercial Plumbing — serving NoMa's hotel, office, and retail sector",href:"/commercial-plumbing"}]}
      localContextHeading="What makes NoMa unique for plumbing?"
      localContextBody={"NoMa is a neighborhood of largely new construction — built from 2005 forward — with modern plumbing systems, building-wide pressure management, and commercial infrastructure for hotels and office towers. Plumbing service in NoMa frequently involves coordination with building engineers and property management for high-rise access. The commercial density of NoMa's restaurant and hotel sector generates steady demand for backflow certification, grease trap coordination, and commercial drain maintenance."}
      licenseHeading="Are you licensed for NoMa plumbing work?"
      credentials={[{label:"DC Master Plumber/Gasfitter License #PGM1002236 (DCRA-issued)"},{label:"MDOT MBE Certification No. 20-134"},{label:"CAGE Code 8HCF6"}]}
      nearbyAreas={[{label:"Capitol Hill",href:"/service-areas/washington-dc/capitol-hill"},{label:"Navy Yard",href:"/service-areas/washington-dc/navy-yard"},{label:"Washington DC Hub",href:"/service-areas/washington-dc"}]}
      countyHubLabel="Washington DC"
      countyHubHref="/service-areas/washington-dc"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/noma-dc-QdDF3gj4ZaMBMLivkLoYa2.webp"
        cityMapQuery="NoMa, Washington DC"
      ctaCity="NoMa"
      ctaLicenseLine="DC Master Plumber/Gasfitter #PGM1002236"
      schemaJson={schema}
    />
  );
}
