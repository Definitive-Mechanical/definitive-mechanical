import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Galesville, MD","url":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/galesville-md/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Galesville, MD"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},{"@type":"ListItem","position":4,"name":"Anne Arundel County","item":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/"},{"@type":"ListItem","position":5,"name":"Galesville, MD","item":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/galesville-md/"}]}
];
export default function GalesvilleMD() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Galesville, MD | Licensed Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Galesville, MD. Plumbing, water heater, gas & emergency service for Galesville's waterfront community. Anne Arundel #A2-6139. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/galesville-md/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Maryland",href:"/service-areas/maryland"},{label:"Anne Arundel County",href:"/service-areas/maryland/anne-arundel-county"},{label:"Galesville MD"}]}
      eyebrow="Plumber in Galesville, MD · Anne Arundel County · Serving from Largo, MD"
      h1="Plumber in Galesville, MD"
      introParagraph="Definitive Mechanical serves Galesville, Maryland — a historic waterfront community on the West River in Anne Arundel County, known for its marina, older homes, and proximity to Chesapeake Bay tributaries. We hold Anne Arundel County Master Plumber/Gasfitter License #A2-6139 and Maryland State License #96958, covering all permitted plumbing work in Galesville and western Anne Arundel County."
      trustItems={["Anne Arundel County License #A2-6139","MD Master Plumber #96958","MDOT MBE Cert 20-134","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning"},{label:"Gas Line Repair — propane and natural gas",href:"/gas-line-repair"},{label:"Backflow Prevention & Annual Certification — marina and waterfront properties frequently require backflow protection",href:"/backflow-certification"},{label:"Water Line Repair",href:"/water-line-repair"}]}
      localContextHeading="What makes Galesville unique for plumbing?"
      localContextBody={"Galesville's older housing stock — many homes dating from the early and mid-20th century — has aging plumbing infrastructure consistent with properties of that era. The waterfront setting and marine environment accelerate corrosion on metal pipes and fittings. Some Galesville properties are on private wells and private septic; we service the plumbing side of these properties."}
      calloutNote="Anne Arundel County note: Anne Arundel County requires a county-specific plumbing license. Definitive Mechanical holds Anne Arundel County License #A2-6139 in addition to the Maryland state credential."
      licenseHeading="Are you licensed for plumbing in Galesville?"
      credentials={[{label:"Anne Arundel County Master Plumber/Gasfitter License #A2-6139"},{label:"Maryland State Master Plumber License #96958"},{label:"MDOT MBE Certification No. 20-134"}]}
      nearbyAreas={[{label:"Crownsville",href:"/service-areas/maryland/anne-arundel-county/crownsville-md"},{label:"Riva",href:"/service-areas/maryland/anne-arundel-county/riva-md"}]}
      countyHubLabel="Anne Arundel County"
      countyHubHref="/service-areas/maryland/anne-arundel-county"
      ctaCity="Galesville"
      ctaLicenseLine="Anne Arundel County License #A2-6139 | MD Master Plumber #96958"
      schemaJson={schema}
    />
  );
}
