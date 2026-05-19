import Tier2CityPage from "@/components/layout/Tier2CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Brambleton, VA","url":"https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/brambleton-va/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Brambleton, VA"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Northern Virginia","item":"https://definitivemechanical.com/service-areas/northern-virginia/"},{"@type":"ListItem","position":4,"name":"Loudoun County","item":"https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/"},{"@type":"ListItem","position":5,"name":"Brambleton, VA","item":"https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/brambleton-va/"}]}
];
export default function BrambletonVA() {
  return (
    <Tier2CityPage
      metaTitle="Plumber in Brambleton, VA | Licensed Plumbing | Definitive Mechanical"
      metaDescription="Licensed plumber serving Brambleton, VA. Plumbing, water heater, gas & emergency service for Brambleton's planned community. VA Master Plumber #2710064209. Call (301) 679-5849."
      canonicalUrl="https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/brambleton-va/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Northern Virginia",href:"/service-areas/northern-virginia"},{label:"Loudoun County",href:"/service-areas/northern-virginia/loudoun-county"},{label:"Brambleton VA"}]}
      eyebrow="Plumber in Brambleton, VA · Loudoun County · Serving from Largo, MD"
      h1="Plumber in Brambleton, VA"
      introParagraph={"Definitive Mechanical provides licensed plumbing, gas, emergency, and residential services in Brambleton — one of Loudoun County's flagship planned communities, developed from the early 2000s with a range of single-family homes, townhouses, and multi-family units built around the Brambleton Town Center commercial core. We hold Virginia Master Plumber/Gasfitter License #2710064209 and Virginia Class A Contractor License #2705181061 for all permitted plumbing work in Loudoun County."}
      trustItems={["VA Master Plumber #2710064209","VA Class A Contractor #2705181061","SWaM Cert 815255","CAGE 8HCF6","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Tankless Water Heaters — Brambleton's modern construction is a strong market for tankless upgrades",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning"},{label:"Gas Line Repair — natural gas is common in Brambleton",href:"/gas-line-repair"},{label:"Backflow Prevention & Annual Certification — Loudoun Water compliant",href:"/backflow-certification"},{label:"Commercial Plumbing — Brambleton Town Center commercial properties",href:"/commercial-plumbing"}]}
      localContextHeading="What are the common plumbing needs in Brambleton?"
      localContextBody={"Brambleton's housing was built primarily from 2003 through 2015 — PEX supply lines, modern drain systems, and gas water heaters are the standard. As these systems age into the 15–20 year range, water heater replacement is the most active service category. PRV (pressure reducing valve) failures — common on Loudoun Water's distribution system at the upper pressure range — are also a frequent service call. The community's HOA amenities require commercial plumbing maintenance and backflow certification under Loudoun Water's requirements."}
      licenseHeading="Are you licensed for plumbing in Brambleton?"
      credentials={[{label:"Virginia Master Plumber/Gasfitter License #2710064209"},{label:"Virginia Class A Contractor License #2705181061"},{label:"Virginia SWaM Certification No. 815255"},{label:"CAGE Code 8HCF6"}]}
      nearbyAreas={[{label:"One Loudoun",href:"/service-areas/northern-virginia/loudoun-county/one-loudoun-va"},{label:"Loudoun County Hub",href:"/service-areas/northern-virginia/loudoun-county"}]}
      countyHubLabel="Loudoun County"
      countyHubHref="/service-areas/northern-virginia/loudoun-county"
      ctaCity="Brambleton"
      ctaLicenseLine="VA Master Plumber #2710064209 | VA Class A Contractor #2705181061"
      schemaJson={schema}
    />
  );
}
