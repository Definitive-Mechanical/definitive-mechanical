import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Great Falls, VA","url":"https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/great-falls-va/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Great Falls, VA"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do you serve Great Falls properties on private wells?","acceptedAnswer":{"@type":"Answer","text":"We serve the plumbing inside the home — supply lines, fixtures, drain lines, water heaters, and gas lines. We do not service well pumps or septic systems. Call (301) 679-5849 to confirm what we can handle for your specific property."}},{"@type":"Question","name":"Are you licensed for all plumbing in Fairfax County?","acceptedAnswer":{"@type":"Answer","text":"Yes. Virginia Master Plumber/Gasfitter License #2710064209 and Class A Contractor #2705181061 cover all permitted plumbing work in Fairfax County, including Great Falls."}}]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Northern Virginia","item":"https://definitivemechanical.com/service-areas/northern-virginia/"},{"@type":"ListItem","position":4,"name":"Fairfax County","item":"https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/"},{"@type":"ListItem","position":5,"name":"Great Falls, VA","item":"https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/great-falls-va/"}]}
];
export default function GreatFallsVA() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Great Falls, VA | Estate Home Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber serving Great Falls, VA. Expert plumbing for Great Falls' luxury estate homes on large wooded lots. VA Master Plumber #2710064209. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/great-falls-va/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Northern Virginia",href:"/service-areas/northern-virginia"},{label:"Fairfax County",href:"/service-areas/northern-virginia/fairfax-county"},{label:"Great Falls VA"}]}
      eyebrow="Plumber in Great Falls, VA  Fairfax County  Serving from Largo, MD"
      h1="Plumber in Great Falls, VA"
      introParagraph={`Definitive Mechanical provides licensed plumbing, gas, emergency, and residential services in Great Falls, Virginia — one of the most affluent communities in the DC metro area, characterized by large luxury estate homes on multi-acre wooded lots, many on private wells and septic systems. We hold Virginia Master Plumber/Gasfitter License #2710064209 and Virginia Class A Contractor License #2705181061 for all licensed plumbing work throughout Fairfax County and Great Falls.`}
      trustItems={["VA Master Plumber #2710064209","VA Class A Contractor #2705181061","SWaM Cert 815255","CAGE 8HCF6","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Tankless Water Heaters — high demand for whole-home tankless systems in Great Falls estate homes",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning"},{label:"Gas Line Repair — propane and natural gas, licensed Master Gasfitter",href:"/gas-line-repair"},{label:"Backflow Prevention & Annual Certification — large irrigation systems common on Great Falls estates",href:"/backflow-certification"},{label:"Water Line Repair — including long service line runs common on large lots",href:"/water-line-repair"},{label:"Well system plumbing — indoor plumbing for properties on private wells",href:"/water-line-repair"}]}
      localContextHeading="What makes Great Falls unique for plumbing?"
      localContextBody={`Great Falls properties are among the highest-value residential properties in Northern Virginia, many with custom construction featuring multiple water heaters, sophisticated irrigation systems, outdoor kitchens with propane or natural gas connections, and backup generators with gas supply. These systems create substantial annual maintenance requirements — and substantial damage exposure if any component fails.

A significant portion of Great Falls is on private wells and septic systems. We serve the plumbing side of these properties — indoor supply and drain lines — but do not service well pumps or pump septic tanks. Irrigation systems throughout Great Falls require backflow preventer installation and annual certification under Fairfax County and Fairfax Water requirements.

The large lot sizes mean water service line runs of 100+ feet from the main to the house — and sewer lateral runs of similar length — both of which represent elevated failure and root intrusion risk.`}
      licenseHeading="Are you licensed for plumbing in Great Falls?"
      credentials={[{label:"Virginia Master Plumber/Gasfitter License #2710064209"},{label:"Virginia Class A Contractor License #2705181061"},{label:"Virginia SWaM Certification No. 815255"},{label:"CAGE Code 8HCF6"}]}
      faqs={[{q:"Do you serve Great Falls properties on private wells?",a:"We serve the plumbing inside the home — supply lines, fixtures, drain lines, water heaters, and gas lines. We do not service well pumps or septic systems. Call us at (301) 679-5849 to confirm what we can handle for your specific property."},{q:"Are you licensed for all plumbing in Fairfax County?",a:"Yes. Virginia Master Plumber/Gasfitter License #2710064209 and Class A Contractor #2705181061 cover all permitted plumbing work in Fairfax County, including Great Falls."}]}
      nearbyAreas={[{label:"McLean",href:"/service-areas/northern-virginia/fairfax-county/mclean-va"},{label:"Vienna",href:"/service-areas/northern-virginia/fairfax-county/vienna-va"},{label:"Springfield",href:"/service-areas/northern-virginia/fairfax-county/springfield-va"}]}
      countyHubLabel="Fairfax County"
      countyHubHref="/service-areas/northern-virginia/fairfax-county"
      ctaCity="Great Falls"
      ctaLicenseLine="VA Master Plumber #2710064209 | VA Class A Contractor #2705181061"
      schemaJson={schema}
    />
  );
}
