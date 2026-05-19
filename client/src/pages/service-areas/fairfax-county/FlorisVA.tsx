import Tier3CityPage from "@/components/layout/Tier3CityPage";
export default function FlorisVA() {
  return <Tier3CityPage
    metaTitle="Plumber in Floris, VA | Licensed Plumbing | Definitive Mechanical"
    metaDescription="Licensed plumber serving Floris, VA. Plumbing, water heater, gas & emergency service for Floris. VA Master Plumber #2710064008. Call (301) 679-5849."
    canonicalUrl="https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/floris-va/"
    schemaCity="Floris" schemaState="VA"
    schemaUrl="https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/floris-va/"
    breadcrumbs={[
      {label:"Home",href:"/"},
      {label:"Service Areas",href:"/service-areas/"},
      {label:"Northern Virginia",href:"/service-areas/northern-virginia/"},
      {label:"Fairfax County",href:"/service-areas/northern-virginia/fairfax-county/"},
      {label:"Floris VA"}
    ]}
    eyebrow="Plumber in Floris, VA · Fairfax County · Serving from Largo, MD"
    h1="Plumber in Floris, VA"
    intro="Definitive Mechanical serves Floris, Virginia — a rural and semi-rural community in western Fairfax County near Herndon and Chantilly, with a mix of equestrian properties, custom homes on large lots, and newer residential subdivisions. We hold Virginia Master Plumber/Gasfitter License #2710064008 and are SWaM Certified."
    trustItems={["VA Master Plumber #2710064008","SWaM Certified","MDOT MBE Cert 20-134","24/7 Emergency"]}
    servicesHeading="What plumbing services are available in Floris?"
    services={[
      {label:"24/7 Emergency Plumbing",href:"/emergency-plumbing/"},
      {label:"Water Heater Repair & Tankless Water Heaters",href:"/water-heater-repair/"},
      {label:"Gas Line Repair — propane and natural gas",href:"/gas-line-repair/"},
      {label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning/"},
      {label:"Backflow Prevention & Annual Certification — large lot irrigation systems",href:"/backflow-certification/"},
      {label:"Indoor plumbing for well-system properties",href:""}
    ]}
    wellSepticNote="Some Floris properties are on private wells. We service indoor plumbing — supply lines, pressure tanks, water heaters, gas lines, and fixtures — but do not service well pumps or pump septic tanks."
    localContextHeading="Unique context for Floris"
    localContextBody={"Floris's large-lot properties often have complex propane systems and in-ground irrigation requiring annual backflow certification. Virginia License #2710064008 covers all permitted plumbing work in Fairfax County."}
    nearbyAreas={[
      {label:"Herndon",href:"/service-areas/northern-virginia/herndon-va/"},
      {label:"Vienna",href:"/service-areas/northern-virginia/vienna-va/"},
      {label:"Great Falls",href:"/service-areas/northern-virginia/great-falls-va/"}
    ]}
    countyHubLabel="Fairfax County"
    countyHubHref="/service-areas/northern-virginia/fairfax-county/"
    bottomCtaLicenseLine="VA Master Plumber #2710064008 | SWaM Certified"
    bottomCtaCity="Floris"
  />;
}
