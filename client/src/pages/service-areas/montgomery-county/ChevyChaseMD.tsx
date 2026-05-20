import Tier1CityPage from "@/components/layout/Tier1CityPage";
const schema = [
  {"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","description":"Licensed plumber serving Chevy Chase, MD","url":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/chevy-chase-md/","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"Chevy Chase, MD"},"openingHours":["Mo-Fr 09:00-17:00","Sa 09:00-14:00"]},
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Chevy Chase have its own permit requirements?","acceptedAnswer":{"@type":"Answer","text":"Chevy Chase (unincorporated) falls under Montgomery County DPIE for permits and inspections. The incorporated village portions (Chevy Chase Village, Town of Chevy Chase) have their own municipal processes. We are familiar with all local permitting authorities in the area."}},{"@type":"Question","name":"Are you licensed to work on older Chevy Chase homes with original plumbing?","acceptedAnswer":{"@type":"Answer","text":"Yes. We work extensively in homes with galvanized supply lines, cast iron drain lines, and aging clay laterals — common in Chevy Chase's pre-1960 housing stock."}}]},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://definitivemechanical.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://definitivemechanical.com/service-areas/"},{"@type":"ListItem","position":3,"name":"Maryland","item":"https://definitivemechanical.com/service-areas/maryland/"},{"@type":"ListItem","position":4,"name":"Montgomery County","item":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/"},{"@type":"ListItem","position":5,"name":"Chevy Chase, MD","item":"https://definitivemechanical.com/service-areas/maryland/montgomery-county/chevy-chase-md/"}]}
];
export default function ChevyChaseMD() {
  return (
    <Tier1CityPage
      metaTitle="Plumber in Chevy Chase, MD | 24/7 Emergency Plumbing | Definitive Mechanical"
      metaDescription={`Licensed plumber in Chevy Chase, MD. Expert plumbing, gas, water heater & emergency service for Chevy Chase's historic homes. WSSC #73696. Call (301) 679-5849.`}
      canonicalUrl="https://definitivemechanical.com/service-areas/maryland/montgomery-county/chevy-chase-md/"
      breadcrumbs={[{label:"Home",href:"/"},{label:"Service Areas",href:"/service-areas"},{label:"Maryland",href:"/service-areas/maryland"},{label:"Montgomery County",href:"/service-areas/maryland/montgomery-county"},{label:"Chevy Chase MD"}]}
      eyebrow="Plumber in Chevy Chase, MD  Montgomery County  Serving from Largo, MD"
      h1="Plumber in Chevy Chase, MD"
      introParagraph="Definitive Mechanical provides licensed plumbing, gas, emergency, and residential services in Chevy Chase, Maryland — one of the most affluent and historically significant communities in Montgomery County, with a housing stock dating from the early 1900s through mid-century and significant estate-style properties on large wooded lots. We hold Maryland State Master Plumber/Gasfitter License #96958 and WSSC License #73696, covering all permitted plumbing work in Chevy Chase."
      trustItems={["MD Master Plumber #96958","WSSC #73696","City of Rockville #PLL-0002113","MDOT MBE Cert 20-134","24/7 Emergency"]}
      services={[{label:"24/7 Emergency Plumbing — available for Chevy Chase addresses around the clock",href:"/emergency-plumbing"},{label:"Water Heater Repair & Installation — including high-recovery units for large estate homes",href:"/water-heater-repair"},{label:"Drain Cleaning & Sewer Line Repair — including camera inspection of aging clay laterals",href:"/drain-cleaning"},{label:"Gas Line Repair — licensed Master Gasfitter, MD #96958",href:"/gas-line-repair"},{label:"Water Line Repair — including aging galvanized and copper supply line replacement",href:"/water-line-repair"},{label:"Backflow Certification",href:"/backflow-certification"}]}
      localContextHeading="What makes Chevy Chase unique for plumbing?"
      localContextBody={`Chevy Chase's pre-war and mid-century housing stock creates specific challenges: original galvanized supply lines from the 1920s-1950s that are well past their service life, clay sewer laterals with decades of root intrusion from the community's famous tree canopy, and large estate homes with complex mechanical systems. The high value of Chevy Chase properties means water damage from a burst pipe or failed water heater carries significant financial stakes.

We respond to Chevy Chase plumbing jobs with the care these properties require — careful access point selection, attention to finished surfaces, and clear documentation for insurance purposes.`}
      calloutNote="WSSC serves Chevy Chase for water and sewer. Note: Portions of Chevy Chase along the DC border may fall under DC Water jurisdiction — confirm your service provider before scheduling permitted work."
      licenseHeading="Are you licensed for plumbing in Chevy Chase?"
      credentials={[{label:"Maryland State Master Plumber/Gasfitter License #96958"},{label:"WSSC License #73696"},{label:"City of Rockville License #PLL-0002113"},{label:"MDOT MBE Certification No. 20-134"}]}
      nearbyAreas={[{label:"Bethesda",href:"/service-areas/maryland/montgomery-county/bethesda-md"},{label:"Cabin John",href:"/service-areas/maryland/montgomery-county/cabin-john-md"},{label:"Potomac",href:"/service-areas/maryland/montgomery-county/potomac-md"},{label:"Rockville",href:"/service-areas/maryland/montgomery-county/rockville-md"}]}
      countyHubLabel="Montgomery County"
      countyHubHref="/service-areas/maryland/montgomery-county"
      faqs={[{q:"Does Chevy Chase have its own permit requirements?",a:"Chevy Chase (unincorporated) falls under Montgomery County DPIE for permits and inspections. The incorporated village portions (Chevy Chase Village, Town of Chevy Chase) have their own municipal processes. We are familiar with all local permitting authorities in the area."},{q:"Are you licensed to work on older Chevy Chase homes with original plumbing?",a:"Yes. We work extensively in homes with galvanized supply lines, cast iron drain lines, and aging clay laterals — common in Chevy Chase's pre-1960 housing stock."}]}
      ctaCity="Chevy Chase"
      ctaLicenseLine="MD Master Plumber #96958 | WSSC #73696"
      schemaJson={schema}
    />
  );
}
