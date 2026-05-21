import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Darnestown, MD","url":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/darnestown-md/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Darnestown, MD"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},{"@type":"ListItem","position":4,"name":"Montgomery County","item":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/"},{"@type":"ListItem","position":5,"name":"Darnestown, MD","item":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/darnestown-md/"}]}
];
export default function DarnestownMD() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Darnestown, MD | Licensed Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Darnestown, MD. Plumbing, gas, water heater & emergency service for Darnestown's estate homes. MD #96958. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/montgomery-county/darnestown-md/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Maryland",href:"/service-areas/maryland"},{label:"Montgomery County",href:"/service-areas/maryland/montgomery-county"},{label:"Darnestown MD"}]}
      eyebrow="Plumber in Darnestown, MD  Montgomery County  Serving from Largo, MD"
      h1="Plumber in Darnestown, MD"
      introParagraph="Definitive Mechanical serves Darnestown, Maryland — a largely rural and semi-rural community in western Montgomery County characterized by large estate properties, horse farms, and upscale custom homes on significant acreage. We hold Maryland State Master Plumber/Gasfitter License #96958 and WSSC License #73696, and serve Darnestown alongside the City of Rockville (License #PLL-0002113) and the broader Montgomery County area."
      trustItems={["MD Master Plumber #96958","WSSC #73696","City of Rockville #PLL-0002113","MDOT MBE Cert 20-134"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair — including high-capacity units for large homes",href:"/water-heater-repair"},{label:"Drain Cleaning & Hydro-Jetting",href:"/drain-cleaning"},{label:"Sewer Line Repair & Video Camera Inspection",href:"/sewer-line-repair"},{label:"Gas Line Repair — propane and natural gas service",href:"/gas-line-repair"},{label:"Backflow Prevention & Annual Certification",href:"/backflow-certification"},{label:"Well system plumbing service — indoor plumbing for well-served properties",href:"/water-line-repair"}]}
      localContextHeading="What makes Darnestown unique for plumbing?"
      localContextBody={`Darnestown's rural character means some properties are served by private wells and septic systems rather than WSSC public water and sewer. We serve the plumbing side of these properties — supply lines, pressure tanks, indoor distribution, and drain lines — but do not pump septic systems or service well pumps. For WSSC-served portions of Darnestown, our full range of services applies. Many Darnestown properties use propane rather than natural gas — we service both.

The large lot sizes in Darnestown mean long lateral runs, extended water service lines, and irrigation systems that all require backflow preventer installation and annual certification.`}
      licenseHeading="Are you licensed for plumbing in Darnestown?"
      credentials={[{label:"Maryland State Master Plumber/Gasfitter License #96958"},{label:"WSSC License #73696"},{label:"City of Rockville License #PLL-0002113"},{label:"MDOT MBE Certification No. 20-134"}]}
      nearbyAreas={[{label:"Rockville",href:"/service-areas/maryland/montgomery-county/rockville-md"},{label:"Potomac",href:"/service-areas/maryland/montgomery-county/potomac-md"},{label:"Cabin John",href:"/service-areas/maryland/montgomery-county/cabin-john-md"}]}
      countyHubLabel="Montgomery County"
      countyHubHref="/service-areas/maryland/montgomery-county"
      cityMapQuery="Darnestown, MD"
      ctaCity="Darnestown"
      ctaLicenseLine="MD Master Plumber #96958 | WSSC #73696"
      schemaJson={schema}
    />
  );
}
