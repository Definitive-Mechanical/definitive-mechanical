import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { ScrollToTop } from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Core Pages
import Home from "./pages/Home";
const ServicesDirectory = lazy(() => import("./pages/ServicesDirectory"));
const About = lazy(() => import("./pages/About"));
const LicensesCertifications = lazy(() => import("./pages/LicensesCertifications"));
const Reviews = lazy(() => import("./pages/Reviews"));
const FAQ = lazy(() => import("./pages/FAQ"));
// Emergency
const EmergencyPlumbing = lazy(() => import("./pages/EmergencyPlumbing"));
// Emergency City Pages
const EmergencyRockvilleMD = lazy(() => import("./pages/emergency/EmergencyRockvilleMD"));
const EmergencyArlingtonVA = lazy(() => import("./pages/emergency/EmergencyArlingtonVA"));
const EmergencyWashingtonDC = lazy(() => import("./pages/emergency/EmergencyWashingtonDC"));
const EmergencyAlexandriaVA = lazy(() => import("./pages/emergency/EmergencyAlexandriaVA"));
const EmergencyBethesdaMD = lazy(() => import("./pages/emergency/EmergencyBethesdaMD"));
const EmergencyLargoMD = lazy(() => import("./pages/emergency/EmergencyLargoMD"));
const EmergencyBowieMD = lazy(() => import("./pages/emergency/EmergencyBowieMD"));
// Drain & Sewer
const DrainCleaning = lazy(() => import("./pages/DrainCleaning"));
const SewerLineRepair = lazy(() => import("./pages/SewerLineRepair"));
const SewerLineInstallation = lazy(() => import("./pages/SewerLineInstallation"));
const HydroJetting = lazy(() => import("./pages/HydroJetting"));
const VideoCameraInspection = lazy(() => import("./pages/VideoCameraInspection"));
// Water Heater
const WaterHeaterRepair = lazy(() => import("./pages/WaterHeaterRepair"));
const WaterHeaterInstallation = lazy(() => import("./pages/WaterHeaterInstallation"));
const TanklessWaterHeaters = lazy(() => import("./pages/TanklessWaterHeaters"));
// Water Line
const WaterLineRepair = lazy(() => import("./pages/WaterLineRepair"));
const WaterLineInstallation = lazy(() => import("./pages/WaterLineInstallation"));
// Gas
const GasLineRepair = lazy(() => import("./pages/GasLineRepair"));
const GasLineInstallation = lazy(() => import("./pages/GasLineInstallation"));
const GasLeakRepair = lazy(() => import("./pages/GasLeakRepair"));
// Backflow
const BackflowPrevention = lazy(() => import("./pages/BackflowPrevention"));
const BackflowCertification = lazy(() => import("./pages/BackflowCertification"));
const BackflowPreventerRepair = lazy(() => import("./pages/BackflowPreventerRepair"));
// Boiler & Furnace
const BoilerFurnaceRepair = lazy(() => import("./pages/BoilerFurnaceRepair"));
const BoilerFurnaceInstallation = lazy(() => import("./pages/BoilerFurnaceInstallation"));
// Fixtures & Residential
const FaucetToiletRepair = lazy(() => import("./pages/FaucetToiletRepair"));
const ResidentialPlumbing = lazy(() => import("./pages/ResidentialPlumbing"));
// Service Area Pages — Maryland (City Level)
const LargoMD = lazy(() => import("./pages/service-areas/LargoMD"));
const BowieMD = lazy(() => import("./pages/service-areas/BowieMD"));
const FortWashingtonMD = lazy(() => import("./pages/service-areas/FortWashingtonMD"));
const RockvilleMD = lazy(() => import("./pages/service-areas/RockvilleMD"));
const BethesdaMD = lazy(() => import("./pages/service-areas/BethesdaMD"));
const PotomacMD = lazy(() => import("./pages/service-areas/PotomacMD"));
const EllicottCityMD = lazy(() => import("./pages/service-areas/EllicottCityMD"));
const WaldorfMD = lazy(() => import("./pages/service-areas/WaldorfMD"));
// Service Area Pages — Washington DC
const WashingtonDC = lazy(() => import("./pages/service-areas/WashingtonDC"));
// Service Area Pages — Northern Virginia (City Level)
const AlexandriaVA = lazy(() => import("./pages/service-areas/AlexandriaVA"));
const ArlingtonVA = lazy(() => import("./pages/service-areas/ArlingtonVA"));
const McLeanVA = lazy(() => import("./pages/service-areas/McLeanVA"));
const SpringfieldVA = lazy(() => import("./pages/service-areas/SpringfieldVA"));
const ViennaVA = lazy(() => import("./pages/service-areas/ViennaVA"));
// Contact & Financing
const Contact = lazy(() => import("./pages/Contact"));
const Financing = lazy(() => import("./pages/Financing"));
const AllServices = lazy(() => import("./pages/AllServices"));
// Government Certifications
const MBECertified = lazy(() => import("./pages/MBECertified"));
const SWaMCertified = lazy(() => import("./pages/SWaMCertified"));
// Service Area Hubs
const ServiceAreasHub = lazy(() => import("./pages/service-areas/ServiceAreasHub"));
const MarylandHub = lazy(() => import("./pages/service-areas/MarylandHub"));
const WashingtonDCHub = lazy(() => import("./pages/service-areas/WashingtonDCHub"));
const NorthernVirginiaHub = lazy(() => import("./pages/service-areas/NorthernVirginiaHub"));
// County Hubs — Maryland
const PrinceGeorgesCounty = lazy(() => import("./pages/service-areas/PrinceGeorgesCounty"));
const MontgomeryCounty = lazy(() => import("./pages/service-areas/MontgomeryCounty"));
const HowardCounty = lazy(() => import("./pages/service-areas/HowardCounty"));
const AnneArundelCounty = lazy(() => import("./pages/service-areas/AnneArundelCounty"));
const CharlesCounty = lazy(() => import("./pages/service-areas/CharlesCounty"));
// County Hubs — Northern Virginia
const FairfaxCounty = lazy(() => import("./pages/service-areas/FairfaxCounty"));
const ArlingtonCounty = lazy(() => import("./pages/service-areas/ArlingtonCounty"));
const LoudounCounty = lazy(() => import("./pages/service-areas/LoudounCounty"));
const PrinceWilliamCounty = lazy(() => import("./pages/service-areas/PrinceWilliamCounty"));
// Commercial Differentiation — Regional
const CommercialPlumberMaryland = lazy(() => import("./pages/CommercialPlumberMaryland"));
const CommercialPlumberDC = lazy(() => import("./pages/CommercialPlumberDC"));
const CommercialPlumberNorthernVirginia = lazy(() => import("./pages/CommercialPlumberNorthernVirginia"));
// Backflow Certification — Regional
const BackflowCertificationMaryland = lazy(() => import("./pages/BackflowCertificationMaryland"));
const BackflowCertificationDC = lazy(() => import("./pages/BackflowCertificationDC"));
const BackflowCertificationVirginia = lazy(() => import("./pages/BackflowCertificationVirginia"));
// Tier 2 City Pages — Maryland (Prince George's)
const WoodmoreMD = lazy(() => import("./pages/service-areas/prince-georges-county/WoodmoreMD"));
const FairwoodMD = lazy(() => import("./pages/service-areas/prince-georges-county/FairwoodMD"));
// Tier 2 City Pages — Maryland (Montgomery)
const ChevyChaseMD = lazy(() => import("./pages/service-areas/montgomery-county/ChevyChaseMD"));
const CabinJohnMD = lazy(() => import("./pages/service-areas/montgomery-county/CabinJohnMD"));
const DarnestownMD = lazy(() => import("./pages/service-areas/montgomery-county/DarnestownMD"));
// Tier 2 City Pages — Maryland (Howard)
const ClarksvilleMD = lazy(() => import("./pages/service-areas/howard-county/ClarksvilleMD"));
const GlenelgMD = lazy(() => import("./pages/service-areas/howard-county/GlenelgMD"));
// Tier 2 City Pages — Maryland (Anne Arundel)
const GalesvilleMD = lazy(() => import("./pages/service-areas/anne-arundel-county/GalesvilleMD"));
const CrownsvilleMD = lazy(() => import("./pages/service-areas/anne-arundel-county/CrownsvilleMD"));
const RivaMD = lazy(() => import("./pages/service-areas/anne-arundel-county/RivaMD"));
// Tier 2 City Pages — Washington DC Neighborhoods
const GeorgetownDC = lazy(() => import("./pages/service-areas/washington-dc/GeorgetownDC"));
const CapitolHillDC = lazy(() => import("./pages/service-areas/washington-dc/CapitolHillDC"));
const DupontCircleDC = lazy(() => import("./pages/service-areas/washington-dc/DupontCircleDC"));
const NavyYardDC = lazy(() => import("./pages/service-areas/washington-dc/NavyYardDC"));
const NomaDC = lazy(() => import("./pages/service-areas/washington-dc/NomaDC"));
// Tier 2 City Pages — Northern Virginia
const GreatFallsVA = lazy(() => import("./pages/service-areas/fairfax-county/GreatFallsVA"));
const BrambletonVA = lazy(() => import("./pages/service-areas/loudoun-county/BrambletonVA"));
const OneLoudounVA = lazy(() => import("./pages/service-areas/loudoun-county/OneLoudounVA"));
// Tier 3 — Maryland (PG County)
const UniversityParkMD = lazy(() => import("./pages/service-areas/prince-georges-county/UniversityParkMD"));
const BrockHallMD = lazy(() => import("./pages/service-areas/prince-georges-county/BrockHallMD"));
const QueenslandMD = lazy(() => import("./pages/service-areas/prince-georges-county/QueenslandMD"));
const CroomMD = lazy(() => import("./pages/service-areas/prince-georges-county/CroomMD"));
// Tier 3 — Maryland (Montgomery County)
const TravilahMD = lazy(() => import("./pages/service-areas/montgomery-county/TravilahMD"));
const SomersetMD = lazy(() => import("./pages/service-areas/montgomery-county/SomersetMD"));
const MartinsAdditionsMD = lazy(() => import("./pages/service-areas/montgomery-county/MartinsAdditionsMD"));
const ChevyChaseVillageMD = lazy(() => import("./pages/service-areas/montgomery-county/ChevyChaseVillageMD"));
const ChevyChaseViewMD = lazy(() => import("./pages/service-areas/montgomery-county/ChevyChaseViewMD"));
const BrookmontMD = lazy(() => import("./pages/service-areas/montgomery-county/BrookmontMD"));
// Tier 3 — Maryland (Howard County)
const HighlandMD = lazy(() => import("./pages/service-areas/howard-county/HighlandMD"));
const FultonMD = lazy(() => import("./pages/service-areas/howard-county/FultonMD"));
const WestFriendshipMD = lazy(() => import("./pages/service-areas/howard-county/WestFriendshipMD"));
const ScaggsMD = lazy(() => import("./pages/service-areas/howard-county/ScaggsMD"));
// Tier 3 — Maryland (Charles County)
const BensvilleMD = lazy(() => import("./pages/service-areas/charles-county/BensvilleMD"));
// DC Sub-Hubs
const DCWardsHub = lazy(() => import("./pages/service-areas/washington-dc/DCWardsHub"));
const DCNeighborhoodsHub = lazy(() => import("./pages/service-areas/washington-dc/DCNeighborhoodsHub"));
// Tier 3 — DC Wards
const Ward1DC = lazy(() => import("./pages/service-areas/washington-dc/Ward1DC"));
const Ward2DC = lazy(() => import("./pages/service-areas/washington-dc/Ward2DC"));
const Ward3DC = lazy(() => import("./pages/service-areas/washington-dc/Ward3DC"));
const Ward4DC = lazy(() => import("./pages/service-areas/washington-dc/Ward4DC"));
const Ward5DC = lazy(() => import("./pages/service-areas/washington-dc/Ward5DC"));
const Ward6DC = lazy(() => import("./pages/service-areas/washington-dc/Ward6DC"));
const Ward7DC = lazy(() => import("./pages/service-areas/washington-dc/Ward7DC"));
const Ward8DC = lazy(() => import("./pages/service-areas/washington-dc/Ward8DC"));
// Tier 3 — Northern Virginia (Fairfax County)
const DunnLoringVA = lazy(() => import("./pages/service-areas/fairfax-county/DunnLoringVA"));
const FlorisVA = lazy(() => import("./pages/service-areas/fairfax-county/FlorisVA"));
const CrosspointeVA = lazy(() => import("./pages/service-areas/fairfax-county/CrosspointeVA"));
const DifficultRunVA = lazy(() => import("./pages/service-areas/fairfax-county/DifficultRunVA"));
const GreatFallsCrossingVA = lazy(() => import("./pages/service-areas/fairfax-county/GreatFallsCrossingVA"));
const SouthRunVA = lazy(() => import("./pages/service-areas/fairfax-county/SouthRunVA"));
const UnionMillVA = lazy(() => import("./pages/service-areas/fairfax-county/UnionMillVA"));
const WolfTrapVA = lazy(() => import("./pages/service-areas/fairfax-county/WolfTrapVA"));
// Tier 3 — Northern Virginia (Loudoun County)
const BelmontVA = lazy(() => import("./pages/service-areas/loudoun-county/BelmontVA"));
const BroadlandsVA = lazy(() => import("./pages/service-areas/loudoun-county/BroadlandsVA"));
// Tier 3 — Northern Virginia (Prince William County)
const BullRunMountainVA = lazy(() => import("./pages/service-areas/prince-william-county/BullRunMountainVA"));
const IndependentHillVA = lazy(() => import("./pages/service-areas/prince-william-county/IndependentHillVA"));
const BuckhallVA = lazy(() => import("./pages/service-areas/prince-william-county/BuckhallVA"));
// Blog
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const BlogPost1Emergency = lazy(() => import("./pages/blog/BlogPost1Emergency"));
const BlogPost2Cost = lazy(() => import("./pages/blog/BlogPost2Cost"));
const BlogPost3LicensedPlumber = lazy(() => import("./pages/blog/BlogPost3LicensedPlumber"));
const BlogPost4BeforePlumber = lazy(() => import("./pages/blog/BlogPost4BeforePlumber"));
// Commercial / Government
const CommercialPlumbing = lazy(() => import("./pages/CommercialPlumbing"));
const GovernmentMunicipalPlumbing = lazy(() => import("./pages/GovernmentMunicipalPlumbing"));
// Sitemap (HTML directory of all pages)
const Sitemap = lazy(() => import("./pages/Sitemap"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
      <Switch>
      {/* Core */}
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
      <Route path="/about/" component={() => <Layout><About /></Layout>} />
      <Route path="/licenses-certifications" component={() => <Layout><LicensesCertifications /></Layout>} />
      <Route path="/licenses-certifications/" component={() => <Layout><LicensesCertifications /></Layout>} />
      <Route path="/reviews" component={() => <Layout><Reviews /></Layout>} />
      <Route path="/reviews/" component={() => <Layout><Reviews /></Layout>} />
      <Route path="/faq" component={() => <Layout><FAQ /></Layout>} />
      <Route path="/faq/" component={() => <Layout><FAQ /></Layout>} />

      {/* Emergency */}
      <Route path="/emergency-plumbing" component={() => <Layout><EmergencyPlumbing /></Layout>} />
      <Route path="/emergency-plumbing/" component={() => <Layout><EmergencyPlumbing /></Layout>} />

      {/* Emergency City Pages */}
      <Route path="/emergency-plumber-rockville-md" component={() => <Layout><EmergencyRockvilleMD /></Layout>} />
      <Route path="/emergency-plumber-rockville-md/" component={() => <Layout><EmergencyRockvilleMD /></Layout>} />
      <Route path="/emergency-plumber-arlington-va" component={() => <Layout><EmergencyArlingtonVA /></Layout>} />
      <Route path="/emergency-plumber-arlington-va/" component={() => <Layout><EmergencyArlingtonVA /></Layout>} />
      <Route path="/emergency-plumber-washington-dc" component={() => <Layout><EmergencyWashingtonDC /></Layout>} />
      <Route path="/emergency-plumber-washington-dc/" component={() => <Layout><EmergencyWashingtonDC /></Layout>} />
      <Route path="/emergency-plumber-alexandria-va" component={() => <Layout><EmergencyAlexandriaVA /></Layout>} />
      <Route path="/emergency-plumber-alexandria-va/" component={() => <Layout><EmergencyAlexandriaVA /></Layout>} />
      <Route path="/emergency-plumber-bethesda-md" component={() => <Layout><EmergencyBethesdaMD /></Layout>} />
      <Route path="/emergency-plumber-bethesda-md/" component={() => <Layout><EmergencyBethesdaMD /></Layout>} />
      <Route path="/emergency-plumber-largo-md" component={() => <Layout><EmergencyLargoMD /></Layout>} />
      <Route path="/emergency-plumber-largo-md/" component={() => <Layout><EmergencyLargoMD /></Layout>} />
      <Route path="/emergency-plumber-bowie-md" component={() => <Layout><EmergencyBowieMD /></Layout>} />
      <Route path="/emergency-plumber-bowie-md/" component={() => <Layout><EmergencyBowieMD /></Layout>} />

      {/* Drain & Sewer */}
      <Route path="/drain-cleaning" component={() => <Layout><DrainCleaning /></Layout>} />
      <Route path="/drain-cleaning/" component={() => <Layout><DrainCleaning /></Layout>} />
      <Route path="/sewer-line-repair" component={() => <Layout><SewerLineRepair /></Layout>} />
      <Route path="/sewer-line-repair/" component={() => <Layout><SewerLineRepair /></Layout>} />
      <Route path="/sewer-line-installation" component={() => <Layout><SewerLineInstallation /></Layout>} />
      <Route path="/sewer-line-installation/" component={() => <Layout><SewerLineInstallation /></Layout>} />
      <Route path="/hydro-jetting" component={() => <Layout><HydroJetting /></Layout>} />
      <Route path="/hydro-jetting/" component={() => <Layout><HydroJetting /></Layout>} />
      <Route path="/video-camera-inspection" component={() => <Layout><VideoCameraInspection /></Layout>} />
      <Route path="/video-camera-inspection/" component={() => <Layout><VideoCameraInspection /></Layout>} />

      {/* Water Heater */}
      <Route path="/water-heater-repair" component={() => <Layout><WaterHeaterRepair /></Layout>} />
      <Route path="/water-heater-repair/" component={() => <Layout><WaterHeaterRepair /></Layout>} />
      <Route path="/water-heater-installation" component={() => <Layout><WaterHeaterInstallation /></Layout>} />
      <Route path="/water-heater-installation/" component={() => <Layout><WaterHeaterInstallation /></Layout>} />
      <Route path="/tankless-water-heaters" component={() => <Layout><TanklessWaterHeaters /></Layout>} />
      <Route path="/tankless-water-heaters/" component={() => <Layout><TanklessWaterHeaters /></Layout>} />

      {/* Water Line */}
      <Route path="/water-line-repair" component={() => <Layout><WaterLineRepair /></Layout>} />
      <Route path="/water-line-repair/" component={() => <Layout><WaterLineRepair /></Layout>} />
      <Route path="/water-line-installation" component={() => <Layout><WaterLineInstallation /></Layout>} />
      <Route path="/water-line-installation/" component={() => <Layout><WaterLineInstallation /></Layout>} />

      {/* Gas */}
      <Route path="/gas-line-repair" component={() => <Layout><GasLineRepair /></Layout>} />
      <Route path="/gas-line-repair/" component={() => <Layout><GasLineRepair /></Layout>} />
      <Route path="/gas-line-installation" component={() => <Layout><GasLineInstallation /></Layout>} />
      <Route path="/gas-line-installation/" component={() => <Layout><GasLineInstallation /></Layout>} />
      <Route path="/gas-leak-repair" component={() => <Layout><GasLeakRepair /></Layout>} />
      <Route path="/gas-leak-repair/" component={() => <Layout><GasLeakRepair /></Layout>} />

      {/* Backflow */}
      <Route path="/backflow-prevention" component={() => <Layout><BackflowPrevention /></Layout>} />
      <Route path="/backflow-prevention/" component={() => <Layout><BackflowPrevention /></Layout>} />
      <Route path="/backflow-certification" component={() => <Layout><BackflowCertification /></Layout>} />
      <Route path="/backflow-certification/" component={() => <Layout><BackflowCertification /></Layout>} />
      <Route path="/backflow-preventer-repair" component={() => <Layout><BackflowPreventerRepair /></Layout>} />
      <Route path="/backflow-preventer-repair/" component={() => <Layout><BackflowPreventerRepair /></Layout>} />

      {/* Boiler & Furnace */}
      <Route path="/boiler-furnace-repair" component={() => <Layout><BoilerFurnaceRepair /></Layout>} />
      <Route path="/boiler-furnace-repair/" component={() => <Layout><BoilerFurnaceRepair /></Layout>} />
      <Route path="/boiler-furnace-installation" component={() => <Layout><BoilerFurnaceInstallation /></Layout>} />
      <Route path="/boiler-furnace-installation/" component={() => <Layout><BoilerFurnaceInstallation /></Layout>} />

      {/* Fixtures & Residential */}
      <Route path="/faucet-toilet-repair" component={() => <Layout><FaucetToiletRepair /></Layout>} />
      <Route path="/faucet-toilet-repair/" component={() => <Layout><FaucetToiletRepair /></Layout>} />
      <Route path="/residential-plumbing" component={() => <Layout><ResidentialPlumbing /></Layout>} />
      <Route path="/residential-plumbing/" component={() => <Layout><ResidentialPlumbing /></Layout>} />

      {/* Service Area Hubs — MUST come before city routes */}
      <Route path="/service-areas" component={() => <Layout><ServiceAreasHub /></Layout>} />
      <Route path="/service-areas/" component={() => <Layout><ServiceAreasHub /></Layout>} />
      <Route path="/service-areas/maryland" component={() => <Layout><MarylandHub /></Layout>} />
      <Route path="/service-areas/maryland/" component={() => <Layout><MarylandHub /></Layout>} />
      <Route path="/service-areas/washington-dc" component={() => <Layout><WashingtonDCHub /></Layout>} />
      <Route path="/service-areas/washington-dc/" component={() => <Layout><WashingtonDCHub /></Layout>} />
      <Route path="/service-areas/washington-dc/wards" component={() => <Layout><DCWardsHub /></Layout>} />
      <Route path="/service-areas/washington-dc/wards/" component={() => <Layout><DCWardsHub /></Layout>} />
      <Route path="/service-areas/washington-dc/neighborhoods" component={() => <Layout><DCNeighborhoodsHub /></Layout>} />
      <Route path="/service-areas/washington-dc/neighborhoods/" component={() => <Layout><DCNeighborhoodsHub /></Layout>} />
      <Route path="/service-areas/northern-virginia" component={() => <Layout><NorthernVirginiaHub /></Layout>} />
      <Route path="/service-areas/northern-virginia/" component={() => <Layout><NorthernVirginiaHub /></Layout>} />

      {/* County Hubs — Maryland */}
      <Route path="/service-areas/maryland/prince-georges-county" component={() => <Layout><PrinceGeorgesCounty /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/" component={() => <Layout><PrinceGeorgesCounty /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county" component={() => <Layout><MontgomeryCounty /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/" component={() => <Layout><MontgomeryCounty /></Layout>} />
      <Route path="/service-areas/maryland/howard-county" component={() => <Layout><HowardCounty /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/" component={() => <Layout><HowardCounty /></Layout>} />
      <Route path="/service-areas/maryland/anne-arundel-county" component={() => <Layout><AnneArundelCounty /></Layout>} />
      <Route path="/service-areas/maryland/anne-arundel-county/" component={() => <Layout><AnneArundelCounty /></Layout>} />
      <Route path="/service-areas/maryland/charles-county" component={() => <Layout><CharlesCounty /></Layout>} />
      <Route path="/service-areas/maryland/charles-county/" component={() => <Layout><CharlesCounty /></Layout>} />

      {/* County Hubs — Northern Virginia */}
      <Route path="/service-areas/northern-virginia/fairfax-county" component={() => <Layout><FairfaxCounty /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/" component={() => <Layout><FairfaxCounty /></Layout>} />
      <Route path="/service-areas/northern-virginia/arlington-county" component={() => <Layout><ArlingtonCounty /></Layout>} />
      <Route path="/service-areas/northern-virginia/arlington-county/" component={() => <Layout><ArlingtonCounty /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county" component={() => <Layout><LoudounCounty /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county/" component={() => <Layout><LoudounCounty /></Layout>} />
      <Route path="/service-areas/northern-virginia/prince-william-county" component={() => <Layout><PrinceWilliamCounty /></Layout>} />
      <Route path="/service-areas/northern-virginia/prince-william-county/" component={() => <Layout><PrinceWilliamCounty /></Layout>} />

      {/* Service Area Pages — Maryland City Level */}
      <Route path="/service-areas/maryland/prince-georges-county/largo-md" component={() => <Layout><LargoMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/largo-md/" component={() => <Layout><LargoMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/bowie-md" component={() => <Layout><BowieMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/bowie-md/" component={() => <Layout><BowieMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/fort-washington-md" component={() => <Layout><FortWashingtonMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/fort-washington-md/" component={() => <Layout><FortWashingtonMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/rockville-md" component={() => <Layout><RockvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/rockville-md/" component={() => <Layout><RockvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/bethesda-md" component={() => <Layout><BethesdaMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/bethesda-md/" component={() => <Layout><BethesdaMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/potomac-md" component={() => <Layout><PotomacMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/potomac-md/" component={() => <Layout><PotomacMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/ellicott-city-md" component={() => <Layout><EllicottCityMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/ellicott-city-md/" component={() => <Layout><EllicottCityMD /></Layout>} />
      <Route path="/service-areas/maryland/charles-county/waldorf-md" component={() => <Layout><WaldorfMD /></Layout>} />
      <Route path="/service-areas/maryland/charles-county/waldorf-md/" component={() => <Layout><WaldorfMD /></Layout>} />

      {/* Service Area Pages — Washington DC */}
      <Route path="/service-areas/washington-dc/washington-dc" component={() => <Layout><WashingtonDC /></Layout>} />
      <Route path="/service-areas/washington-dc/washington-dc/" component={() => <Layout><WashingtonDC /></Layout>} />

      {/* Service Area Pages — Northern Virginia City Level */}
      <Route path="/service-areas/northern-virginia/fairfax-county/alexandria-va" component={() => <Layout><AlexandriaVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/alexandria-va/" component={() => <Layout><AlexandriaVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/arlington-county/arlington-va" component={() => <Layout><ArlingtonVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/arlington-county/arlington-va/" component={() => <Layout><ArlingtonVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/mclean-va" component={() => <Layout><McLeanVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/mclean-va/" component={() => <Layout><McLeanVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/springfield-va" component={() => <Layout><SpringfieldVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/springfield-va/" component={() => <Layout><SpringfieldVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/vienna-va" component={() => <Layout><ViennaVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/vienna-va/" component={() => <Layout><ViennaVA /></Layout>} />

      {/* Contact & Financing */}
      <Route path="/contact" component={() => <Layout><Contact /></Layout>} />
      <Route path="/contact/" component={() => <Layout><Contact /></Layout>} />
      <Route path="/financing" component={() => <Layout><Financing /></Layout>} />
      <Route path="/financing/" component={() => <Layout><Financing /></Layout>} />
      <Route path="/plumbing" component={() => <Layout><AllServices /></Layout>} />
      <Route path="/plumbing/" component={() => <Layout><AllServices /></Layout>} />
      <Route path="/services" component={() => <Layout><ServicesDirectory /></Layout>} />
      <Route path="/services/" component={() => <Layout><ServicesDirectory /></Layout>} />

      {/* Government Certifications */}
      <Route path="/mbe-certified-plumbing-contractor-maryland" component={() => <Layout><MBECertified /></Layout>} />
      <Route path="/mbe-certified-plumbing-contractor-maryland/" component={() => <Layout><MBECertified /></Layout>} />
      <Route path="/swam-certified-plumbing-contractor-virginia" component={() => <Layout><SWaMCertified /></Layout>} />
      <Route path="/swam-certified-plumbing-contractor-virginia/" component={() => <Layout><SWaMCertified /></Layout>} />

      {/* Commercial Differentiation — Regional */}
      <Route path="/commercial-plumber-maryland" component={() => <Layout><CommercialPlumberMaryland /></Layout>} />
      <Route path="/commercial-plumber-maryland/" component={() => <Layout><CommercialPlumberMaryland /></Layout>} />
      <Route path="/commercial-plumber-washington-dc" component={() => <Layout><CommercialPlumberDC /></Layout>} />
      <Route path="/commercial-plumber-washington-dc/" component={() => <Layout><CommercialPlumberDC /></Layout>} />
      <Route path="/commercial-plumber-northern-virginia" component={() => <Layout><CommercialPlumberNorthernVirginia /></Layout>} />
      <Route path="/commercial-plumber-northern-virginia/" component={() => <Layout><CommercialPlumberNorthernVirginia /></Layout>} />

      {/* Backflow Certification — Regional */}
      <Route path="/backflow-certification-maryland" component={() => <Layout><BackflowCertificationMaryland /></Layout>} />
      <Route path="/backflow-certification-maryland/" component={() => <Layout><BackflowCertificationMaryland /></Layout>} />
      <Route path="/backflow-certification-washington-dc" component={() => <Layout><BackflowCertificationDC /></Layout>} />
      <Route path="/backflow-certification-washington-dc/" component={() => <Layout><BackflowCertificationDC /></Layout>} />
      <Route path="/backflow-certification-virginia" component={() => <Layout><BackflowCertificationVirginia /></Layout>} />
      <Route path="/backflow-certification-virginia/" component={() => <Layout><BackflowCertificationVirginia /></Layout>} />

      {/* Commercial / Government */}
      <Route path="/commercial-plumbing" component={() => <Layout><CommercialPlumbing /></Layout>} />
      <Route path="/commercial-plumbing/" component={() => <Layout><CommercialPlumbing /></Layout>} />
      <Route path="/government-municipal-plumbing" component={() => <Layout><GovernmentMunicipalPlumbing /></Layout>} />
      <Route path="/government-municipal-plumbing/" component={() => <Layout><GovernmentMunicipalPlumbing /></Layout>} />

      {/* Blog */}
      <Route path="/blog" component={() => <BlogIndex />} />
      <Route path="/blog/" component={() => <BlogIndex />} />
      <Route path="/blog/what-qualifies-as-a-plumbing-emergency" component={() => <BlogPost1Emergency />} />
      <Route path="/blog/what-qualifies-as-a-plumbing-emergency/" component={() => <BlogPost1Emergency />} />
      <Route path="/blog/emergency-plumber-cost-maryland-dc-va" component={() => <BlogPost2Cost />} />
      <Route path="/blog/emergency-plumber-cost-maryland-dc-va/" component={() => <BlogPost2Cost />} />
      <Route path="/blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia" component={() => <BlogPost3LicensedPlumber />} />
      <Route path="/blog/how-to-choose-a-licensed-plumber-maryland-dc-virginia/" component={() => <BlogPost3LicensedPlumber />} />
      <Route path="/blog/what-to-do-before-the-plumber-arrives" component={() => <BlogPost4BeforePlumber />} />
      <Route path="/blog/what-to-do-before-the-plumber-arrives/" component={() => <BlogPost4BeforePlumber />} />

      {/* Tier 2 City Pages — Maryland (Prince George's) */}
      <Route path="/service-areas/maryland/prince-georges-county/woodmore-md" component={() => <Layout><WoodmoreMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/woodmore-md/" component={() => <Layout><WoodmoreMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/fairwood-md" component={() => <Layout><FairwoodMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/fairwood-md/" component={() => <Layout><FairwoodMD /></Layout>} />

      {/* Tier 2 City Pages — Maryland (Montgomery) */}
      <Route path="/service-areas/maryland/montgomery-county/chevy-chase-md" component={() => <Layout><ChevyChaseMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/chevy-chase-md/" component={() => <Layout><ChevyChaseMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/cabin-john-md" component={() => <Layout><CabinJohnMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/cabin-john-md/" component={() => <Layout><CabinJohnMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/darnestown-md" component={() => <Layout><DarnestownMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/darnestown-md/" component={() => <Layout><DarnestownMD /></Layout>} />

      {/* Tier 2 City Pages — Maryland (Howard) */}
      <Route path="/service-areas/maryland/howard-county/clarksville-md" component={() => <Layout><ClarksvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/clarksville-md/" component={() => <Layout><ClarksvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/glenelg-md" component={() => <Layout><GlenelgMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/glenelg-md/" component={() => <Layout><GlenelgMD /></Layout>} />

      {/* Tier 2 City Pages — Maryland (Anne Arundel) */}
      <Route path="/service-areas/maryland/anne-arundel-county/galesville-md" component={() => <Layout><GalesvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/anne-arundel-county/galesville-md/" component={() => <Layout><GalesvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/anne-arundel-county/crownsville-md" component={() => <Layout><CrownsvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/anne-arundel-county/crownsville-md/" component={() => <Layout><CrownsvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/anne-arundel-county/riva-md" component={() => <Layout><RivaMD /></Layout>} />
      <Route path="/service-areas/maryland/anne-arundel-county/riva-md/" component={() => <Layout><RivaMD /></Layout>} />

      {/* Tier 2 City Pages — Washington DC Neighborhoods */}
      <Route path="/service-areas/washington-dc/georgetown" component={() => <Layout><GeorgetownDC /></Layout>} />
      <Route path="/service-areas/washington-dc/georgetown/" component={() => <Layout><GeorgetownDC /></Layout>} />
      <Route path="/service-areas/washington-dc/capitol-hill" component={() => <Layout><CapitolHillDC /></Layout>} />
      <Route path="/service-areas/washington-dc/capitol-hill/" component={() => <Layout><CapitolHillDC /></Layout>} />
      <Route path="/service-areas/washington-dc/dupont-circle" component={() => <Layout><DupontCircleDC /></Layout>} />
      <Route path="/service-areas/washington-dc/dupont-circle/" component={() => <Layout><DupontCircleDC /></Layout>} />
      <Route path="/service-areas/washington-dc/navy-yard" component={() => <Layout><NavyYardDC /></Layout>} />
      <Route path="/service-areas/washington-dc/navy-yard/" component={() => <Layout><NavyYardDC /></Layout>} />
      <Route path="/service-areas/washington-dc/noma" component={() => <Layout><NomaDC /></Layout>} />
      <Route path="/service-areas/washington-dc/noma/" component={() => <Layout><NomaDC /></Layout>} />

      {/* Tier 2 City Pages — Northern Virginia */}
      <Route path="/service-areas/northern-virginia/fairfax-county/great-falls-va" component={() => <Layout><GreatFallsVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/great-falls-va/" component={() => <Layout><GreatFallsVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county/brambleton-va" component={() => <Layout><BrambletonVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county/brambleton-va/" component={() => <Layout><BrambletonVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county/one-loudoun-va" component={() => <Layout><OneLoudounVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county/one-loudoun-va/" component={() => <Layout><OneLoudounVA /></Layout>} />

      {/* Tier 3 — Maryland (PG County) */}
      <Route path="/service-areas/maryland/prince-georges-county/university-park-md" component={() => <Layout><UniversityParkMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/university-park-md/" component={() => <Layout><UniversityParkMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/brock-hall-md" component={() => <Layout><BrockHallMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/brock-hall-md/" component={() => <Layout><BrockHallMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/queensland-md" component={() => <Layout><QueenslandMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/queensland-md/" component={() => <Layout><QueenslandMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/croom-md" component={() => <Layout><CroomMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/croom-md/" component={() => <Layout><CroomMD /></Layout>} />

      {/* Tier 3 — Maryland (Montgomery County) */}
      <Route path="/service-areas/maryland/montgomery-county/travilah-md" component={() => <Layout><TravilahMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/travilah-md/" component={() => <Layout><TravilahMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/somerset-md" component={() => <Layout><SomersetMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/somerset-md/" component={() => <Layout><SomersetMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/martins-additions-md" component={() => <Layout><MartinsAdditionsMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/martins-additions-md/" component={() => <Layout><MartinsAdditionsMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/chevy-chase-village-md" component={() => <Layout><ChevyChaseVillageMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/chevy-chase-village-md/" component={() => <Layout><ChevyChaseVillageMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/chevy-chase-view-md" component={() => <Layout><ChevyChaseViewMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/chevy-chase-view-md/" component={() => <Layout><ChevyChaseViewMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/brookmont-md" component={() => <Layout><BrookmontMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/brookmont-md/" component={() => <Layout><BrookmontMD /></Layout>} />

      {/* Tier 3 — Maryland (Howard County) */}
      <Route path="/service-areas/maryland/howard-county/highland-md" component={() => <Layout><HighlandMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/highland-md/" component={() => <Layout><HighlandMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/fulton-md" component={() => <Layout><FultonMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/fulton-md/" component={() => <Layout><FultonMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/west-friendship-md" component={() => <Layout><WestFriendshipMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/west-friendship-md/" component={() => <Layout><WestFriendshipMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/scaggsville-md" component={() => <Layout><ScaggsMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/scaggsville-md/" component={() => <Layout><ScaggsMD /></Layout>} />

      {/* Tier 3 — Maryland (Charles County) */}
      <Route path="/service-areas/maryland/charles-county/bensville-md" component={() => <Layout><BensvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/charles-county/bensville-md/" component={() => <Layout><BensvilleMD /></Layout>} />

      {/* Tier 3 — DC Wards */}
      <Route path="/service-areas/washington-dc/ward-1" component={() => <Layout><Ward1DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-1/" component={() => <Layout><Ward1DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-2" component={() => <Layout><Ward2DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-2/" component={() => <Layout><Ward2DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-3" component={() => <Layout><Ward3DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-3/" component={() => <Layout><Ward3DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-4" component={() => <Layout><Ward4DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-4/" component={() => <Layout><Ward4DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-5" component={() => <Layout><Ward5DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-5/" component={() => <Layout><Ward5DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-6" component={() => <Layout><Ward6DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-6/" component={() => <Layout><Ward6DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-7" component={() => <Layout><Ward7DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-7/" component={() => <Layout><Ward7DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-8" component={() => <Layout><Ward8DC /></Layout>} />
      <Route path="/service-areas/washington-dc/ward-8/" component={() => <Layout><Ward8DC /></Layout>} />

      {/* Tier 3 — Northern Virginia (Fairfax County) */}
      <Route path="/service-areas/northern-virginia/fairfax-county/dunn-loring-va" component={() => <Layout><DunnLoringVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/dunn-loring-va/" component={() => <Layout><DunnLoringVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/floris-va" component={() => <Layout><FlorisVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/floris-va/" component={() => <Layout><FlorisVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/crosspointe-va" component={() => <Layout><CrosspointeVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/crosspointe-va/" component={() => <Layout><CrosspointeVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/difficult-run-va" component={() => <Layout><DifficultRunVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/difficult-run-va/" component={() => <Layout><DifficultRunVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/great-falls-crossing-va" component={() => <Layout><GreatFallsCrossingVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/great-falls-crossing-va/" component={() => <Layout><GreatFallsCrossingVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/south-run-va" component={() => <Layout><SouthRunVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/south-run-va/" component={() => <Layout><SouthRunVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/union-mill-va" component={() => <Layout><UnionMillVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/union-mill-va/" component={() => <Layout><UnionMillVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/wolf-trap-va" component={() => <Layout><WolfTrapVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/wolf-trap-va/" component={() => <Layout><WolfTrapVA /></Layout>} />

      {/* Tier 3 — Northern Virginia (Loudoun County) */}
      <Route path="/service-areas/northern-virginia/loudoun-county/belmont-va" component={() => <Layout><BelmontVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county/belmont-va/" component={() => <Layout><BelmontVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county/broadlands-va" component={() => <Layout><BroadlandsVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/loudoun-county/broadlands-va/" component={() => <Layout><BroadlandsVA /></Layout>} />

      {/* Tier 3 — Northern Virginia (Prince William County) */}
      <Route path="/service-areas/northern-virginia/prince-william-county/bull-run-mountain-estates-va" component={() => <Layout><BullRunMountainVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/prince-william-county/bull-run-mountain-estates-va/" component={() => <Layout><BullRunMountainVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/prince-william-county/independent-hill-va" component={() => <Layout><IndependentHillVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/prince-william-county/independent-hill-va/" component={() => <Layout><IndependentHillVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/prince-william-county/buckhall-va" component={() => <Layout><BuckhallVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/prince-william-county/buckhall-va/" component={() => <Layout><BuckhallVA /></Layout>} />

      {/* Sitemap (HTML directory) */}
      <Route path="/sitemap" component={() => <Layout><Sitemap /></Layout>} />
      <Route path="/sitemap/" component={() => <Layout><Sitemap /></Layout>} />

      {/* Legal */}
      <Route path="/terms-and-conditions" component={() => <Layout><TermsAndConditions /></Layout>} />
      <Route path="/terms-and-conditions/" component={() => <Layout><TermsAndConditions /></Layout>} />
      <Route path="/privacy-policy" component={() => <Layout><PrivacyPolicy /></Layout>} />
      <Route path="/privacy-policy/" component={() => <Layout><PrivacyPolicy /></Layout>} />

      {/* Fallback */}
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
    </Suspense>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
