import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Capitol Hill, DC","url":"https://definitivemechanical.com/service-areas/washington-dc/capitol-hill/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"Place","name":"Capitol Hill, Washington DC"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Washington DC","item":"https://definitivemechanical.com/service-areas/washington-dc/"},{"@type":"ListItem","position":4,"name":"Capitol Hill","item":"https://definitivemechanical.com/service-areas/washington-dc/capitol-hill/"}]}
];
export default function CapitolHillDC() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Capitol Hill, DC | Rowhouse & Condo Plumbing | Definitive Mechanical"
      metaDescription="Licensed plumber serving Capitol Hill, DC. Emergency plumbing, water heater, drain & gas service for Capitol Hill rowhouses and condos. DC #PGM1002236. Call (301) 679-5849."
      canonicalUrl="https://definitivemechanical.com/service-areas/washington-dc/capitol-hill/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Washington DC",href:"/service-areas/washington-dc"},{label:"Capitol Hill"}]}
      eyebrow="Plumber in Capitol Hill, DC · DC License #PGM1002236"
      h1="Plumber in Capitol Hill, DC"
      introParagraph={`Definitive Mechanical provides licensed plumbing, emergency, and gas services in Capitol Hill — one of the most densely populated and historically significant residential neighborhoods in Washington DC. Capitol Hill's housing stock is defined by its iconic Victorian and late-Federal rowhouses, built primarily between 1870 and 1920, alongside English basement apartments, converted rowhouse condominiums, and newer mid-rise developments near the Navy Yard and Barracks Row corridors. We hold DC Master Plumber/Gasfitter License #PGM1002236.`}
      trustItems={["DC Master Plumber/Gasfitter #PGM1002236","MDOT MBE Cert 20-134","24/7 Emergency","CAGE 8HCF6"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning — kitchen and bathroom drains, floor drains",href:"/drain-cleaning"},{label:"Sewer Line Repair & Video Camera Inspection — essential for Capitol Hill's 100+ year-old lateral infrastructure",href:"/sewer-line-repair"},{label:"Gas Line Repair — Capitol Hill has a high proportion of gas-heated older rowhouses",href:"/gas-line-repair"},{label:"Backflow Certification — DC Water compliant",href:"/backflow-certification"},{label:"Commercial Plumbing — Barracks Row commercial corridor and Pennsylvania Avenue retail",href:"/commercial-plumbing"}]}
      localContextHeading="What are the common plumbing issues in Capitol Hill rowhouses?"
      localContextBody={`Capitol Hill's Edwardian and Victorian rowhouses share a common set of plumbing challenges. Original galvanized supply lines from the 1920s and 1930s are at or past their service life in many blocks — producing low pressure, rust-colored water, and sudden pipe failures. Cast iron drain lines in these properties are typically 60–80 years old and prone to cracking at joints and horizontal runs.

English basement apartments — a common rental unit type on Capitol Hill — are particularly vulnerable to sewer backup during DC's frequent heavy rain events, when the combined sewer system can surcharge. Many Capitol Hill rowhouse owners have installed sewer backup valves as a protective measure.

Gas service is prevalent throughout Capitol Hill — the neighborhood has a high density of gas-heated rowhouses with original iron gas distribution that warrants periodic inspection.`}
      licenseHeading="Are you licensed for Capitol Hill plumbing work?"
      credentials={[{label:"DC Master Plumber/Gasfitter License #PGM1002236 (DCRA-issued)"},{label:"MDOT MBE Certification No. 20-134"},{label:"CAGE Code 8HCF6"}]}
      nearbyAreas={[{label:"Georgetown",href:"/service-areas/washington-dc/georgetown"},{label:"Dupont Circle",href:"/service-areas/washington-dc/dupont-circle"},{label:"Navy Yard",href:"/service-areas/washington-dc/navy-yard"},{label:"Washington DC Hub",href:"/service-areas/washington-dc"}]}
      countyHubLabel="Washington DC"
      countyHubHref="/service-areas/washington-dc"
      ctaCity="Capitol Hill"
      ctaLicenseLine="DC Master Plumber/Gasfitter #PGM1002236"
      schemaJson={schema}
    />
  );
}
