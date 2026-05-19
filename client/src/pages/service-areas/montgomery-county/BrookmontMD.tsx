import Tier3CityPage from "@/components/layout/Tier3CityPage";
export default function BrookmontMD() {
  return <Tier3CityPage
    metaTitle="Plumber in Brookmont, MD | Licensed Plumbing | Definitive Mechanical"
    metaDescription="Licensed plumber serving Brookmont, MD. Plumbing, water heater & emergency service for Brookmont. WSSC #73696. Call (301) 679-5849."
    canonicalUrl="https://definitivemechanical.com/service-areas/maryland/montgomery-county/brookmont-md/"
    schemaCity="Brookmont" schemaState="MD"
    schemaUrl="https://definitivemechanical.com/service-areas/maryland/montgomery-county/brookmont-md/"
    breadcrumbs={[
      {label:"Home",href:"/"},
      {label:"Service Areas",href:"/service-areas/"},
      {label:"Maryland",href:"/service-areas/maryland/"},
      {label:"Montgomery County",href:"/service-areas/maryland/montgomery-county/"},
      {label:"Brookmont MD"}
    ]}
    eyebrow="Plumber in Brookmont, MD · Montgomery County · Serving from Largo, MD"
    h1="Plumber in Brookmont, MD"
    intro="Definitive Mechanical serves Brookmont, Maryland — a small community in Montgomery County along the Potomac River, sandwiched between the Clara Barton Parkway and the D.C. border. Brookmont is a quiet neighborhood of mid-century homes with a wooded, riverine character and proximity to the C&O Canal. We hold Maryland State License #96958 and WSSC License #73696."
    trustItems={["MD Master Plumber #96958","WSSC #73696","MDOT MBE Cert 20-134","24/7 Emergency"]}
    servicesHeading="What plumbing services are available in Brookmont?"
    services={[
      {label:"24/7 Emergency Plumbing",href:"/emergency-plumbing/"},
      {label:"Water Heater Repair & Installation",href:"/water-heater-repair/"},
      {label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning/"},
      {label:"Gas Line Repair",href:"/gas-line-repair/"},
      {label:"Water Line Repair",href:"/water-line-repair/"}
    ]}
    localContextHeading="Unique context for Brookmont"
    localContextBody="Brookmont's position along the Potomac creates specific plumbing considerations: the proximity to the river and C&O Canal floodplain means basement flooding and sewer backup risk during high-water events. Several Brookmont streets have experienced flooding from the Potomac. Homes in the flood-prone portions of the neighborhood should consider sewer backup valves as a protective measure."
    nearbyAreas={[
      {label:"Cabin John",href:"/service-areas/maryland/montgomery-county/cabin-john-md/"},
      {label:"Chevy Chase",href:"/service-areas/maryland/montgomery-county/chevy-chase-md/"},
      {label:"Bethesda",href:"/service-areas/maryland/bethesda-md/"}
    ]}
    countyHubLabel="Montgomery County"
    countyHubHref="/service-areas/maryland/montgomery-county/"
    bottomCtaLicenseLine="MD Master Plumber #96958 | WSSC #73696"
    bottomCtaCity="Brookmont"
  />;
}
