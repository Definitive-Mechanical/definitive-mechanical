import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Crownsville, MD","url":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/crownsville-md/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Crownsville, MD"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},{"@type":"ListItem","position":4,"name":"Anne Arundel County","item":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/"},{"@type":"ListItem","position":5,"name":"Crownsville, MD","item":"https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/crownsville-md/"}]}
];
export default function CrownsvilleMD() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Crownsville, MD | Licensed Plumbing | Definitive Mechanical"
      metaDescription="Licensed plumber serving Crownsville, MD. Plumbing, water heater, gas & emergency service for Crownsville. Anne Arundel County License #A2-6139. Call (301) 679-5849."
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/anne-arundel-county/crownsville-md/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Maryland",href:"/service-areas/maryland"},{label:"Anne Arundel County",href:"/service-areas/maryland/anne-arundel-county"},{label:"Crownsville MD"}]}
      eyebrow="Plumber in Crownsville, MD  Anne Arundel County  Serving from Largo, MD"
      h1="Plumber in Crownsville, MD"
      introParagraph={`Definitive Mechanical serves Crownsville, Maryland — a community in northern Anne Arundel County between Annapolis and the Prince George's County border, with a mix of established suburban neighborhoods and newer developments. We hold Anne Arundel County Master Plumber/Gasfitter License #A2-6139 and Maryland State License #96958. Crownsville is among the western Anne Arundel communities closest to our Largo, MD base.`}
      trustItems={["Anne Arundel County License #A2-6139","WSSC #73696","MD Master Plumber #96958","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning & Hydro-Jetting",href:"/drain-cleaning"},{label:"Sewer Line Repair & Video Camera Inspection",href:"/sewer-line-repair"},{label:"Gas Line Repair",href:"/gas-line-repair"},{label:"Backflow Prevention & Annual Certification",href:"/backflow-certification"}]}
      localContextHeading="What are the common plumbing needs in Crownsville?"
      localContextBody={"Crownsville's housing spans several decades, from mid-century homes to 1980s-2000s subdivisions. Older sections have galvanized supply lines and clay sewer laterals at various stages of their service life. The community's position between Prince George's and Anne Arundel counties means some properties on the western edge may be served by WSSC — confirm your water authority before scheduling permitted work. We hold both WSSC (#73696) and Anne Arundel (#A2-6139) credentials."}
      licenseHeading="Are you licensed for plumbing in Crownsville?"
      credentials={[{label:"Anne Arundel County Master Plumber/Gasfitter License #A2-6139"},{label:"WSSC License #73696"},{label:"Maryland State Master Plumber License #96958"}]}
      nearbyAreas={[{label:"Galesville",href:"/service-areas/maryland/anne-arundel-county/galesville-md"},{label:"Riva",href:"/service-areas/maryland/anne-arundel-county/riva-md"},{label:"Largo",href:"/service-areas/maryland/prince-georges-county/largo-md"}]}
      countyHubLabel="Anne Arundel County"
      countyHubHref="/service-areas/maryland/anne-arundel-county"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/crownsville-md-RkRdcULSsbnUB546WTMQuG.webp"
        cityMapQuery="Crownsville, MD"
      ctaCity="Crownsville"
      ctaLicenseLine="Anne Arundel County License #A2-6139 | MD Master Plumber #96958"
      schemaJson={schema}
    />
  );
}
