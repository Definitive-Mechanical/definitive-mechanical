import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Riva, MD","url":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/riva-md/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Riva, MD"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"],"geo":{"@type":"GeoCoordinates","latitude":38.9454,"longitude":-76.5788}},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},{"@type":"ListItem","position":4,"name":"Anne Arundel County","item":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/"},{"@type":"ListItem","position":5,"name":"Riva, MD","item":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/riva-md/"}]}
];
export default function RivaMD() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Riva, MD | Licensed Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Riva, MD. Plumbing, water heater, gas & emergency service for Riva's waterfront and suburban homes. Anne Arundel #A2-6139. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/riva-md/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Maryland",href:"/service-areas/maryland"},{label:"Anne Arundel County",href:"/service-areas/maryland/anne-arundel-county"},{label:"Riva MD"}]}
      eyebrow="Plumber in Riva, MD  Anne Arundel County  Serving from Largo, MD"
      h1="Plumber in Riva, MD"
      introParagraph="Definitive Mechanical serves Riva, Maryland — a community on the South River in Anne Arundel County with a mix of waterfront homes, established suburban neighborhoods, and proximity to Annapolis. We hold Anne Arundel County Master Plumber/Gasfitter License #A2-6139 and Maryland State License #96958 for all permitted plumbing work in Riva and the surrounding area."
      trustItems={["Anne Arundel County License #A2-6139","MD Master Plumber #96958","MDOT MBE Cert 20-134","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning"},{label:"Gas Line Repair — natural gas and propane",href:"/gas-line-repair"},{label:"Backflow Prevention & Annual Certification — waterfront and irrigation systems",href:"/backflow-certification"},{label:"Water Line Repair",href:"/water-line-repair"}]}
      localContextHeading="What makes Riva unique for plumbing?"
      localContextBody={"Riva's waterfront properties on the South River face accelerated corrosion on metallic plumbing components from the marine environment — a consideration for both supply line material selection and gas line maintenance. The community includes a mix of older cottage-style waterfront homes and newer construction subdivisions inland."}
      calloutNote="Anne Arundel County requires its own plumbing license (#A2-6139) beyond the Maryland state credential — we hold both."
      licenseHeading="Are you licensed for plumbing in Riva?"
      credentials={[{label:"Anne Arundel County Master Plumber/Gasfitter License #A2-6139"},{label:"Maryland State Master Plumber License #96958"},{label:"MDOT MBE Certification No. 20-134"}]}
      nearbyAreas={[{label:"Crownsville",href:"/service-areas/maryland/anne-arundel-county/crownsville-md"},{label:"Galesville",href:"/service-areas/maryland/anne-arundel-county/galesville-md"}]}
      countyHubLabel="Anne Arundel County"
      countyHubHref="/service-areas/maryland/anne-arundel-county"
      heroImage="/images/riva-md-fdBLEvGok8N2Vbx2UcUQiQ.webp"
        cityMapQuery="Riva, MD"
      ctaCity="Riva"
      ctaLicenseLine="Anne Arundel County License #A2-6139 | MD Master Plumber #96958"
      schemaJson={schema}
    />
  );
}
