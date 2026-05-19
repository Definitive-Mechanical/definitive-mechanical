import Tier3CityPage from "@/components/layout/Tier3CityPage";
export default function ScaggsMD() {
  return <Tier3CityPage
    metaTitle="Plumber in Scaggsville, MD | Licensed Plumbing | Definitive Mechanical"
    metaDescription="Licensed plumber serving Scaggsville, MD. Plumbing, water heater, gas & emergency service. Howard County License #20020096958. Call (301) 679-5849."
    canonicalUrl="https://definitivemechanical.com/service-areas/maryland/howard-county/scaggsville-md/"
    schemaCity="Scaggsville" schemaState="MD"
    schemaUrl="https://definitivemechanical.com/service-areas/maryland/howard-county/scaggsville-md/"
    breadcrumbs={[
      {label:"Home",href:"/"},
      {label:"Service Areas",href:"/service-areas/"},
      {label:"Maryland",href:"/service-areas/maryland/"},
      {label:"Howard County",href:"/service-areas/maryland/howard-county/"},
      {label:"Scaggsville MD"}
    ]}
    eyebrow="Plumber in Scaggsville, MD · Howard County · Serving from Largo, MD"
    h1="Plumber in Scaggsville, MD"
    intro="Definitive Mechanical serves Scaggsville, Maryland — a community in Howard County along the US-29 corridor near Laurel and Fulton, with a mix of established residential neighborhoods and newer development. We hold Howard County Master Plumber/Gasfitter License #20020096958 and Maryland State License #96958."
    trustItems={["Howard County License #20020096958","MD Master Plumber #96958","MDOT MBE Cert 20-134","24/7 Emergency"]}
    servicesHeading="What plumbing services are available in Scaggsville?"
    services={[
      {label:"24/7 Emergency Plumbing",href:"/emergency-plumbing/"},
      {label:"Water Heater Repair & Installation",href:"/water-heater-repair/"},
      {label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning/"},
      {label:"Gas Line Repair",href:"/gas-line-repair/"},
      {label:"Backflow Prevention & Annual Certification",href:"/backflow-certification/"}
    ]}
    localContextHeading="Unique context for Scaggsville"
    localContextBody="Scaggsville's location along the US-29 growth corridor means a mix of older housing stock and newer subdivisions. Howard County License #20020096958 is required for all permitted plumbing work. WSSC serves portions of the community for water and sewer."
    nearbyAreas={[
      {label:"Fulton",href:"/service-areas/maryland/howard-county/fulton-md/"},
      {label:"Ellicott City",href:"/service-areas/maryland/ellicott-city-md/"},
      {label:"Laurel",href:"/service-areas/maryland/prince-georges-county/laurel-md/"}
    ]}
    countyHubLabel="Howard County"
    countyHubHref="/service-areas/maryland/howard-county/"
    bottomCtaLicenseLine="Howard County License #20020096958 | MD Master Plumber #96958"
    bottomCtaCity="Scaggsville"
  />;
}
