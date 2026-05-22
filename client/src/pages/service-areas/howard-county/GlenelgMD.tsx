import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Glenelg, MD","url":"https://definitivemechanical.com/service-areas/maryland/howard-county/glenelg-md/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Glenelg, MD"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"],"geo":{"@type":"GeoCoordinates","latitude":39.2654,"longitude":-77.0188}},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},{"@type":"ListItem","position":4,"name":"Howard County","item":"https://definitivemechanical.com/service-areas/maryland/howard-county/"},{"@type":"ListItem","position":5,"name":"Glenelg, MD","item":"https://definitivemechanical.com/service-areas/maryland/howard-county/glenelg-md/"}]}
];
export default function GlenelgMD() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Glenelg, MD | Licensed Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Glenelg, MD. Plumbing, water heater, gas & emergency service for Glenelg's rural properties. Howard County License #20020096958. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/howard-county/glenelg-md/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Maryland",href:"/service-areas/maryland"},{label:"Howard County",href:"/service-areas/maryland/howard-county"},{label:"Glenelg MD"}]}
      eyebrow="Plumber in Glenelg, MD  Howard County  Serving from Largo, MD"
      h1="Plumber in Glenelg, MD"
      introParagraph="Definitive Mechanical serves Glenelg, Maryland — a rural western Howard County community of horse farms, large custom homes, and wooded estate properties. We hold Howard County Master Plumber/Gasfitter License #20020096958 and Maryland State License #96958, covering all permitted plumbing and gas work in Glenelg and the surrounding western Howard County area."
      trustItems={["Howard County License #20020096958","MD Master Plumber #96958","MDOT MBE Cert 20-134","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning"},{label:"Gas Line Repair — propane and natural gas, licensed Master Gasfitter",href:"/gas-line-repair"},{label:"Well system plumbing — indoor plumbing for properties on private wells",href:"/water-line-repair"},{label:"Backflow Prevention & Annual Certification — for irrigation and agricultural connections",href:"/backflow-certification"}]}
      localContextHeading="What makes Glenelg unique for plumbing?"
      localContextBody={`Glenelg is predominantly rural with many properties on private wells and septic systems. We service the plumbing side of these properties — indoor supply and drain lines — but do not pump septic or service well pumps. Properties in Glenelg frequently use propane for water heating, cooking, and heating systems; we service propane gas lines and appliance connections under our Howard County Master Gasfitter license.

Large irrigation systems on Glenelg's agricultural and estate properties require backflow preventer installation and annual certification under Howard County regulations.`}
      licenseHeading="Are you licensed for plumbing in Glenelg?"
      credentials={[{label:"Howard County Master Plumber/Gasfitter License #20020096958"},{label:"Maryland State Master Plumber License #96958"},{label:"MDOT MBE Certification No. 20-134"}]}
      nearbyAreas={[{label:"Clarksville",href:"/service-areas/maryland/howard-county/clarksville-md"},{label:"Ellicott City",href:"/service-areas/maryland/howard-county/ellicott-city-md"}]}
      countyHubLabel="Howard County"
      countyHubHref="/service-areas/maryland/howard-county"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/98106163/Mxa9FkjQjimhEb95Dyj8bk/glenelg-md-EkUh5FrXL9Xeo4ZS4pbYmT.webp"
        cityMapQuery="Glenelg, MD"
      ctaCity="Glenelg"
      ctaLicenseLine="Howard County License #20020096958 | MD Master Plumber #96958"
      schemaJson={schema}
    />
  );
}
