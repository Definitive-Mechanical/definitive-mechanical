import Tier3CityPage from "@/components/layout/Tier3CityPage";
export default function UniversityParkMD() {
  return <Tier3CityPage
    metaTitle="Plumber in University Park, MD | Licensed Plumbing | Definitive Mechanical"
    metaDescription="Licensed plumber serving University Park, MD. Plumbing, water heater, drain & emergency service. MD Master Plumber #96958 + WSSC #73696. Call (301) 679-5849."
    canonicalUrl="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/university-park-md/"
    schemaCity="University Park" schemaState="MD"
    schemaUrl="https://definitivemechanical.com/service-areas/maryland/prince-georges-county/university-park-md/"
    faqs={[
      {question:"Are you licensed to work in University Park?",answer:"Yes. University Park is served by WSSC. We hold Maryland State License #96958 and WSSC License #73696 for all permitted plumbing work."},
      {question:"What is the most common repair in University Park homes?",answer:"Galvanized supply line repair and replacement — homes from the 1940s–1960s frequently need supply line updates as original pipes reach or exceed their service life."}
    ]}
    breadcrumbs={[
      {label:"Home",href:"/"},
      {label:"Service Areas",href:"/service-areas/"},
      {label:"Maryland",href:"/service-areas/maryland/"},
      {label:"Prince George's County",href:"/service-areas/maryland/prince-georges-county/"},
      {label:"University Park MD"}
    ]}
    eyebrow="Plumber in University Park, MD · Prince George's County · Serving from Largo, MD"
    h1="Plumber in University Park, MD"
    intro="Definitive Mechanical provides licensed plumbing, gas, emergency, and residential services in University Park, Maryland — a small incorporated town in Prince George's County bordering the City of College Park and the University of Maryland campus. University Park's housing stock is predominantly mid-century single-family homes built in the 1940s through 1960s, giving the community a distinct set of aging plumbing needs. We hold Maryland State Master Plumber License #96958 and WSSC License #73696."
    trustItems={["MD Master Plumber #96958","WSSC #73696","MDOT MBE Cert 20-134","24/7 Emergency"]}
    servicesHeading="What are the common plumbing issues in University Park?"
    services={[
      {label:"24/7 Emergency Plumbing",href:"/emergency-plumbing/"},
      {label:"Drain Cleaning & Water Heater Repair",href:"/drain-cleaning/"},
      {label:"Sewer Line Repair & Video Camera Inspection",href:"/sewer-line-repair/"},
      {label:"Gas Line Repair — licensed Master Gasfitter, MD #96958",href:"/gas-line-repair/"}
    ]}
    localContextHeading="About plumbing in University Park"
    localContextBody={"University Park's homes were built largely between 1940 and 1965 — placing their original galvanized steel supply lines well past the 60–70 year service life threshold. Low water pressure at fixtures, rust-tinted water, and sudden pipe failures are the predictable results. WSSC serves University Park for water and sewer; all permitted plumbing requires a WSSC-licensed contractor. We hold WSSC License #73696.

The community's proximity to the University of Maryland means some rental properties see above-average plumbing wear from higher occupancy rates — accelerating drain and fixture maintenance cycles."}
    nearbyAreas={[
      {label:"Largo",href:"/service-areas/maryland/prince-georges-county/largo-md/"},
      {label:"Bowie",href:"/service-areas/maryland/prince-georges-county/bowie-md/"},
      {label:"Woodmore",href:"/service-areas/maryland/prince-georges-county/woodmore-md/"}
    ]}
    countyHubLabel="Prince George's County"
    countyHubHref="/service-areas/maryland/prince-georges-county/"
    bottomCtaLicenseLine="MD Master Plumber #96958 | WSSC #73696"
    bottomCtaCity="University Park"
  />;
}
