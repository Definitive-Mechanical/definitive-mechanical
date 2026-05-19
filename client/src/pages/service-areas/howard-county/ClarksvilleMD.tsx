import Tier2CityPage from "@/components/layout/Tier2CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Clarksville, MD","url":"https://definitivemechanical.com/service-areas/maryland/howard-county/clarksville-md/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Clarksville, MD"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},{"@type":"ListItem","position":4,"name":"Howard County","item":"https://definitivemechanical.com/service-areas/maryland/howard-county/"},{"@type":"ListItem","position":5,"name":"Clarksville, MD","item":"https://definitivemechanical.com/service-areas/maryland/howard-county/clarksville-md/"}]}
];
export default function ClarksvilleMD() {
  return (
    <Tier2CityPage
      metaTitle="Plumber in Clarksville, MD | Licensed Plumbing | Definitive Mechanical"
      metaDescription="Licensed plumber serving Clarksville, MD. Emergency plumbing, water heater, drain cleaning & gas service. Howard County License #20020096958. Call (301) 679-5849."
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/howard-county/clarksville-md/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Maryland",href:"/service-areas/maryland"},{label:"Howard County",href:"/service-areas/maryland/howard-county"},{label:"Clarksville MD"}]}
      eyebrow="Plumber in Clarksville, MD · Howard County · Serving from Largo, MD"
      h1="Plumber in Clarksville, MD"
      introParagraph="Definitive Mechanical provides licensed plumbing, gas, emergency, and residential services in Clarksville, Maryland — an affluent Howard County community bordering Montgomery County, with a mix of large single-family homes, newer construction subdivisions, and established neighborhoods developed from the 1970s through the 2000s. We hold Howard County Master Plumber/Gasfitter License #20020096958 — the county-specific credential required for permitted work in Howard County — in addition to Maryland State License #96958."
      trustItems={["Howard County License #20020096958","MD Master Plumber #96958","MDOT MBE Cert 20-134","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing",href:"/emergency-plumbing"},{label:"Water Heater Repair & Tankless Water Heaters — high demand for tankless upgrades in Clarksville's newer homes",href:"/water-heater-repair"},{label:"Drain Cleaning & Hydro-Jetting",href:"/drain-cleaning"},{label:"Sewer Line Repair & Video Camera Inspection",href:"/sewer-line-repair"},{label:"Gas Line Repair — licensed Master Gasfitter, Howard County License #20020096958",href:"/gas-line-repair"},{label:"Backflow Prevention & Annual Certification",href:"/backflow-certification"}]}
      localContextHeading="What makes Clarksville unique for plumbing?"
      localContextBody={"Clarksville sits in a narrow corridor between the Patuxent River to the south and Montgomery County to the west. Its older neighborhoods have the typical mid-century plumbing issues — galvanized supply lines, aging clay laterals — while newer subdivisions are approaching the 20–25 year mark where water heaters cycle out and pressure regulators begin to fail. The community's high-income demographics mean finished basements and premium fixtures throughout, raising the damage profile of any water event."}
      calloutNote="Howard County licensing note: Howard County requires a county-specific plumbing license beyond the Maryland state credential. Definitive Mechanical holds Howard County License #20020096958, allowing us to pull permits through Howard County DILP."
      licenseHeading="Are you licensed for plumbing in Clarksville?"
      credentials={[{label:"Howard County Master Plumber/Gasfitter License #20020096958"},{label:"Maryland State Master Plumber License #96958"},{label:"MDOT MBE Certification No. 20-134"}]}
      nearbyAreas={[{label:"Ellicott City",href:"/service-areas/maryland/howard-county/ellicott-city-md"},{label:"Glenelg",href:"/service-areas/maryland/howard-county/glenelg-md"},{label:"Rockville",href:"/service-areas/maryland/montgomery-county/rockville-md"}]}
      countyHubLabel="Howard County"
      countyHubHref="/service-areas/maryland/howard-county"
      ctaCity="Clarksville"
      ctaLicenseLine="Howard County License #20020096958 | MD Master Plumber #96958"
      schemaJson={schema}
    />
  );
}
