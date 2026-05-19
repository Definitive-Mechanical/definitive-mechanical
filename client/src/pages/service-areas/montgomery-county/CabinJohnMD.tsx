import Tier2CityPage from "@/components/layout/Tier2CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Cabin John, MD","url":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/cabin-john-md/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Cabin John, MD"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},{"@type":"ListItem","position":4,"name":"Montgomery County","item":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/"},{"@type":"ListItem","position":5,"name":"Cabin John, MD","item":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/cabin-john-md/"}]}
];
export default function CabinJohnMD() {
  return (
    <Tier2CityPage
      metaTitle="Plumber in Cabin John, MD | Licensed Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Cabin John, MD. Plumbing, gas, water heater & emergency service for Cabin John's wooded community. WSSC-licensed. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/montgomery-county/cabin-john-md/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Maryland",href:"/service-areas/maryland"},{label:"Montgomery County",href:"/service-areas/maryland/montgomery-county"},{label:"Cabin John MD"}]}
      eyebrow="Plumber in Cabin John, MD · Montgomery County · Serving from Largo, MD"
      h1="Plumber in Cabin John, MD"
      introParagraph="Definitive Mechanical serves Cabin John, Maryland — a small, historic, wooded community between the Potomac River and the Capital Beltway, with a mix of mid-century homes and renovated properties on large forested lots. We hold Maryland State Master Plumber/Gasfitter License #96958 and WSSC License #73696 for all permitted plumbing work in Cabin John and the surrounding Montgomery County area."
      trustItems={["MD Master Plumber #96958","WSSC #73696","MDOT MBE Cert 20-134","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation",href:"/water-heater-repair"},{label:"Drain Cleaning — including floor drains common in Cabin John's older construction",href:"/drain-cleaning"},{label:"Sewer Line Repair & Video Camera Inspection",href:"/sewer-line-repair"},{label:"Gas Line Repair & Gas Leak Response",href:"/gas-line-repair"},{label:"Water Line Repair",href:"/water-line-repair"}]}
      localContextHeading="What are the common plumbing needs in Cabin John?"
      localContextBody={"Cabin John's homes were built primarily between the 1940s and 1970s — many as more modest cottages that have since been significantly renovated and expanded. The plumbing in these properties often reflects multiple renovation eras: original galvanized supply lines, mid-century copper, and modern PEX in updated areas, sometimes all in the same home. Sewer laterals are predominantly clay and subject to root intrusion from Cabin John's dense tree cover. The community's proximity to the C&O Canal and Cabin John Creek means basement flooding from storm events is a periodic concern."}
      licenseHeading="Are you licensed for plumbing in Cabin John?"
      credentials={[{label:"Maryland State Master Plumber/Gasfitter License #96958"},{label:"WSSC License #73696"},{label:"MDOT MBE Certification No. 20-134"}]}
      nearbyAreas={[{label:"Bethesda",href:"/service-areas/maryland/montgomery-county/bethesda-md"},{label:"Chevy Chase",href:"/service-areas/maryland/montgomery-county/chevy-chase-md"},{label:"Potomac",href:"/service-areas/maryland/montgomery-county/potomac-md"}]}
      countyHubLabel="Montgomery County"
      countyHubHref="/service-areas/maryland/montgomery-county"
      ctaCity="Cabin John"
      ctaLicenseLine="MD Master Plumber #96958 | WSSC #73696"
      schemaJson={schema}
    />
  );
}
