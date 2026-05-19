import Tier3CityPage from "@/components/layout/Tier3CityPage";
export default function HighlandMD() {
  return <Tier3CityPage
    metaTitle="Plumber in Highland, MD | Licensed Plumbing | Definitive Mechanical"
    metaDescription="Licensed plumber serving Highland, MD. Plumbing, water heater, gas & emergency service. Howard County License #20020096958. Call (301) 679-5849."
    canonicalUrl="https://definitivemechanical.com/service-areas/maryland/howard-county/highland-md/"
    schemaCity="Highland" schemaState="MD"
    schemaUrl="https://definitivemechanical.com/service-areas/maryland/howard-county/highland-md/"
    breadcrumbs={[
      {label:"Home",href:"/"},
      {label:"Service Areas",href:"/service-areas/"},
      {label:"Maryland",href:"/service-areas/maryland/"},
      {label:"Howard County",href:"/service-areas/maryland/howard-county/"},
      {label:"Highland MD"}
    ]}
    eyebrow="Plumber in Highland, MD · Howard County · Serving from Largo, MD"
    h1="Plumber in Highland, MD"
    intro="Definitive Mechanical serves Highland, Maryland — a rural and semi-rural community in Howard County between Clarksville and Fulton, with a mix of custom estate homes, farm properties, and newer residential subdivisions. We hold Howard County Master Plumber/Gasfitter License #20020096958 — the county-specific credential required for permitted plumbing in Howard County — and Maryland State License #96958."
    trustItems={["Howard County License #20020096958","MD Master Plumber #96958","MDOT MBE Cert 20-134","24/7 Emergency"]}
    servicesHeading="What plumbing services are available in Highland?"
    services={[
      {label:"24/7 Emergency Plumbing",href:"/emergency-plumbing/"},
      {label:"Water Heater Repair & Tankless Water Heaters",href:"/water-heater-repair/"},
      {label:"Gas Line Repair — propane and natural gas, licensed Howard County Master Gasfitter",href:"/gas-line-repair/"},
      {label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning/"},
      {label:"Backflow Prevention & Annual Certification — irrigation systems common on larger lots",href:"/backflow-certification/"},
      {label:"Indoor plumbing for well-served properties (supply lines, pressure tanks, water heaters, fixtures)",href:""}
    ]}
    wellSepticNote="Highland&#39;s rural properties frequently use propane and private wells. We service propane gas lines and indoor plumbing for private well properties under our Howard County Master Gasfitter license. We do not service well pumps or pump septic tanks."
    localContextHeading="Unique context for Highland"
    localContextBody="Howard County requires a county-specific license beyond the Maryland state credential — we hold #20020096958. Highland&#39;s estate-scale properties often have long service line runs, complex irrigation systems requiring annual backflow certification, and propane gas serving multiple structures on large lots."
    nearbyAreas={[
      {label:"Clarksville",href:"/service-areas/maryland/howard-county/clarksville-md/"},
      {label:"Ellicott City",href:"/service-areas/maryland/ellicott-city-md/"},
      {label:"Rockville",href:"/service-areas/maryland/rockville-md/"}
    ]}
    countyHubLabel="Howard County"
    countyHubHref="/service-areas/maryland/howard-county/"
    bottomCtaLicenseLine="Howard County License #20020096958 | MD Master Plumber #96958"
    bottomCtaCity="Highland"
  />;
}
