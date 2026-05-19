import Tier3CityPage from "@/components/layout/Tier3CityPage";
export default function SouthRunVA() {
  return <Tier3CityPage
    metaTitle="Plumber in South Run, VA | Licensed Plumbing | Definitive Mechanical"
    metaDescription="Licensed plumber serving South Run, VA. Plumbing, water heater, gas & emergency service for South Run. VA #2710064008. Call (301) 679-5849."
    canonicalUrl="https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/south-run-va/"
    schemaCity="South Run" schemaState="VA"
    schemaUrl="https://definitivemechanical.com/service-areas/northern-virginia/fairfax-county/south-run-va/"
    breadcrumbs={[
      {label:"Home",href:"/"},
      {label:"Service Areas",href:"/service-areas/"},
      {label:"Northern Virginia",href:"/service-areas/northern-virginia/"},
      {label:"Fairfax County",href:"/service-areas/northern-virginia/fairfax-county/"},
      {label:"South Run VA"}
    ]}
    eyebrow="Plumber in South Run, VA · Fairfax County · Serving from Largo, MD"
    h1="Plumber in South Run, VA"
    intro="Definitive Mechanical serves South Run, Virginia — a residential community in southern Fairfax County near Burke and Springfield, featuring single-family homes and townhouses built in the 1980s–1990s. We hold Virginia Master Plumber/Gasfitter License #2710064008 and are SWaM Certified."
    trustItems={["VA Master Plumber #2710064008","SWaM Certified","MDOT MBE Cert 20-134","24/7 Emergency"]}
    servicesHeading="What plumbing services are available in South Run?"
    services={[
      {label:"24/7 Emergency Plumbing",href:"/emergency-plumbing/"},
      {label:"Water Heater Repair & Tankless Water Heaters — 1980s–1990s homes in replacement cycle",href:"/water-heater-repair/"},
      {label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning/"},
      {label:"Gas Line Repair — licensed VA Master Gasfitter",href:"/gas-line-repair/"},
      {label:"Backflow Prevention & Annual Certification",href:"/backflow-certification/"}
    ]}
    localContextHeading="Unique context for South Run"
    localContextBody={"South Run's 1980s–1990s homes are in the active water heater and drain service cycle. Fairfax Water serves the community. Virginia License #2710064008 covers all permitted plumbing work in Fairfax County."}
    nearbyAreas={[
      {label:"Springfield",href:"/service-areas/northern-virginia/springfield-va/"},
      {label:"Burke",href:"/service-areas/northern-virginia/fairfax-county/burke-va/"},
      {label:"Vienna",href:"/service-areas/northern-virginia/vienna-va/"}
    ]}
    countyHubLabel="Fairfax County"
    countyHubHref="/service-areas/northern-virginia/fairfax-county/"
    bottomCtaLicenseLine="VA Master Plumber #2710064008 | SWaM Certified"
    bottomCtaCity="South Run"
  />;
}
