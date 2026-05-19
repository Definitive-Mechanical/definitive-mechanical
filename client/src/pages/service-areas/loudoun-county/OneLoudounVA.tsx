import Tier2CityPage from "@/components/layout/Tier2CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving One Loudoun, VA","url":"https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/one-loudoun-va/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"One Loudoun, VA"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Northern Virginia","item":"https://definitivemechanical.com/service-areas/northern-virginia/"},{"@type":"ListItem","position":4,"name":"Loudoun County","item":"https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/"},{"@type":"ListItem","position":5,"name":"One Loudoun, VA","item":"https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/one-loudoun-va/"}]}
];
export default function OneLoudounVA() {
  return (
    <Tier2CityPage
      metaTitle="Plumber in One Loudoun, VA | Licensed Plumbing | Definitive Mechanical"
      metaDescription="Licensed plumber serving One Loudoun, VA. Plumbing, water heater, gas & emergency service for One Loudoun's mixed-use community. VA #2710064209. Call (301) 679-5849."
      canonicalUrl="https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/one-loudoun-va/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Northern Virginia",href:"/service-areas/northern-virginia"},{label:"Loudoun County",href:"/service-areas/northern-virginia/loudoun-county"},{label:"One Loudoun VA"}]}
      eyebrow="Plumber in One Loudoun, VA · Loudoun County · Serving from Largo, MD"
      h1="Plumber in One Loudoun, VA"
      introParagraph={"Definitive Mechanical provides licensed plumbing, gas, emergency, residential, and commercial services in One Loudoun — Loudoun County's premier mixed-use development in Ashburn, combining upscale retail, restaurants, multi-family residences, and single-family homes in a walkable town center format. We hold Virginia Master Plumber/Gasfitter License #2710064209 and Virginia Class A Contractor License #2705181061 for all permitted plumbing work throughout Loudoun County."}
      trustItems={["VA Master Plumber #2710064209","VA Class A Contractor #2705181061","SWaM Cert 815255","CAGE 8HCF6","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Tankless Water Heaters",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning"},{label:"Gas Line Repair & Gas Leak Response",href:"/gas-line-repair"},{label:"Backflow Certification — Loudoun Water compliant annual testing",href:"/backflow-certification"},{label:"Commercial Plumbing — One Loudoun's retail and restaurant district on Loudoun Station Drive",href:"/commercial-plumbing"}]}
      localContextHeading="What makes One Loudoun unique for plumbing?"
      localContextBody={"One Loudoun's mixed-use character means plumbing service needs span from residential condominiums and townhouses to high-volume commercial kitchens and retail buildouts in the same development. The entire community was built from approximately 2012 forward — modern plumbing systems throughout — but commercial tenants cycle through the retail center regularly, creating ongoing buildout and renovation plumbing demand. Restaurant tenants require backflow certification, grease trap coordination, and commercial gas line capacity.

Residential units in One Loudoun's apartment and condo buildings require building management coordination for common-area work. We are experienced with the documentation and access requirements of mixed-use property management."}
      licenseHeading="Are you licensed for plumbing in One Loudoun?"
      credentials={[{label:"Virginia Master Plumber/Gasfitter License #2710064209"},{label:"Virginia Class A Contractor License #2705181061"},{label:"Virginia SWaM Certification No. 815255"},{label:"CAGE Code 8HCF6"}]}
      nearbyAreas={[{label:"Brambleton",href:"/service-areas/northern-virginia/loudoun-county/brambleton-va"},{label:"Loudoun County Hub",href:"/service-areas/northern-virginia/loudoun-county"}]}
      countyHubLabel="Loudoun County"
      countyHubHref="/service-areas/northern-virginia/loudoun-county"
      ctaCity="One Loudoun"
      ctaLicenseLine="VA Master Plumber #2710064209 | VA Class A Contractor #2705181061"
      schemaJson={schema}
    />
  );
}
