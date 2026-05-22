import Tier1CityPage from "@/components/layout/Tier1CityPage";
export default function BelmontVA() {
  return <Tier1CityPage
    metaTitle="Plumber in Belmont, VA | Licensed Plumbing | Definitive Mechanical"
    metaDescription="Licensed plumber serving Belmont, VA (Loudoun County). Plumbing, water heater, gas & emergency service. VA #2710064209. Call (301) 679-5849."
    canonicalUrl="https://definitivemechanical.com/service-areas/northern-virginia/loudoun-county/belmont-va/"
    schemaJson={[{"@context":"https://schema.org","@type":["LocalBusiness","Plumber"],"name":"Definitive Mechanical","telephone":"+13016795849","address":{"@type":"PostalAddress","streetAddress":"9701 Apollo Drive, Suite 100","addressLocality":"Largo","addressRegion":"MD","postalCode":"20774","addressCountry":"US"},"areaServed":{"@type":"City","name":"loudoun-county/BelmontVA"},"geo":{"@type":"GeoCoordinates","latitude":38.8626,"longitude":-77.3497}}]}
    breadcrumbs={[
      {label:"Home",href:"/"},
      {label:"Service Areas",href:"/service-areas/"},
      {label:"Northern Virginia",href:"/service-areas/northern-virginia/"},
      {label:"Loudoun County",href:"/service-areas/northern-virginia/loudoun-county/"},
      {label:"Belmont VA"}
    ]}
    eyebrow="Plumber in Belmont, VA  Loudoun County  Serving from Largo, MD"
    h1="Plumber in Belmont, VA"
    introParagraph="Definitive Mechanical serves Belmont, Virginia — a community in Loudoun County near Ashburn and Leesburg, featuring a mix of estate properties and newer residential development. We hold Virginia Master Plumber/Gasfitter License #2710064209 and are SWaM Certified."
    trustItems={["VA Master Plumber #2710064209","SWaM Certified","MDOT MBE Cert 20-134","24/7 Emergency"]}
    services={[
      {label:"24/7 Emergency Plumbing",href:"/emergency-plumbing/"},
      {label:"Water Heater Repair & Tankless Water Heaters",href:"/water-heater-repair/"},
      {label:"Gas Line Repair — natural gas and propane",href:"/gas-line-repair/"},
      {label:"Drain Cleaning & Sewer Line Repair",href:"/drain-cleaning/"},
      {label:"Backflow Prevention & Annual Certification — estate irrigation systems",href:"/backflow-certification/"}
    ]}
    localContextHeading="Unique context for Belmont"
    localContextBody={"Belmont's estate properties often have large irrigation systems requiring annual backflow certification. Loudoun Water serves portions of the community. Virginia License #2710064209 covers all permitted plumbing work in Loudoun County."}
    licenseHeading="Licensed in Virginia, Maryland & DC"
    credentials={[{label:"VA Master Plumber #2710064209"},{label:"SWaM Certified"},{label:"MDOT MBE Cert 20-134"},{label:"24/7 Emergency"}]}
    nearbyAreas={[
      {label:"Broadlands",href:"/service-areas/northern-virginia/loudoun-county/broadlands-va/"},
      {label:"Ashburn",href:"/service-areas/northern-virginia/loudoun-county/ashburn-va/"},
      {label:"Vienna",href:"/service-areas/northern-virginia/vienna-va/"}
    ]}
    countyHubLabel="Loudoun County"
    countyHubHref="/service-areas/northern-virginia/loudoun-county/"
    heroImage="/images/belmont-va-Lw2jzTvQFWyYwhaq2dyttr.webp"
        cityMapQuery="Belmont, VA"
    ctaCity="Belmont"
    ctaLicenseLine="VA Master Plumber #2710064209 | SWaM Certified"
  />;
}
