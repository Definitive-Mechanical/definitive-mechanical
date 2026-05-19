import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Core Pages
import Home from "./pages/Home";
import About from "./pages/About";
import LicensesCertifications from "./pages/LicensesCertifications";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";

// Emergency
import EmergencyPlumbing from "./pages/EmergencyPlumbing";

// Emergency City Pages
import EmergencyRockvilleMD from "./pages/emergency/EmergencyRockvilleMD";
import EmergencyArlingtonVA from "./pages/emergency/EmergencyArlingtonVA";
import EmergencyWashingtonDC from "./pages/emergency/EmergencyWashingtonDC";
import EmergencyAlexandriaVA from "./pages/emergency/EmergencyAlexandriaVA";
import EmergencyBethesdaMD from "./pages/emergency/EmergencyBethesdaMD";
import EmergencyLargoMD from "./pages/emergency/EmergencyLargoMD";
import EmergencyBowieMD from "./pages/emergency/EmergencyBowieMD";

// Drain & Sewer
import DrainCleaning from "./pages/DrainCleaning";
import SewerLineRepair from "./pages/SewerLineRepair";
import SewerLineInstallation from "./pages/SewerLineInstallation";
import HydroJetting from "./pages/HydroJetting";
import VideoCameraInspection from "./pages/VideoCameraInspection";

// Water Heater
import WaterHeaterRepair from "./pages/WaterHeaterRepair";
import WaterHeaterInstallation from "./pages/WaterHeaterInstallation";
import TanklessWaterHeaters from "./pages/TanklessWaterHeaters";

// Water Line
import WaterLineRepair from "./pages/WaterLineRepair";
import WaterLineInstallation from "./pages/WaterLineInstallation";

// Gas
import GasLineRepair from "./pages/GasLineRepair";
import GasLineInstallation from "./pages/GasLineInstallation";
import GasLeakRepair from "./pages/GasLeakRepair";

// Backflow
import BackflowPrevention from "./pages/BackflowPrevention";
import BackflowCertification from "./pages/BackflowCertification";
import BackflowPreventerRepair from "./pages/BackflowPreventerRepair";

// Boiler & Furnace
import BoilerFurnaceRepair from "./pages/BoilerFurnaceRepair";
import BoilerFurnaceInstallation from "./pages/BoilerFurnaceInstallation";

// Fixtures & Residential
import FaucetToiletRepair from "./pages/FaucetToiletRepair";
import ResidentialPlumbing from "./pages/ResidentialPlumbing";

// Service Area Pages — Maryland (City Level)
import LargoMD from "./pages/service-areas/LargoMD";
import BowieMD from "./pages/service-areas/BowieMD";
import FortWashingtonMD from "./pages/service-areas/FortWashingtonMD";
import RockvilleMD from "./pages/service-areas/RockvilleMD";
import BethesdaMD from "./pages/service-areas/BethesdaMD";
import PotomacMD from "./pages/service-areas/PotomacMD";
import EllicottCityMD from "./pages/service-areas/EllicottCityMD";
import WaldorfMD from "./pages/service-areas/WaldorfMD";

// Service Area Pages — Washington DC
import WashingtonDC from "./pages/service-areas/WashingtonDC";

// Service Area Pages — Northern Virginia (City Level)
import AlexandriaVA from "./pages/service-areas/AlexandriaVA";
import ArlingtonVA from "./pages/service-areas/ArlingtonVA";
import McLeanVA from "./pages/service-areas/McLeanVA";
import SpringfieldVA from "./pages/service-areas/SpringfieldVA";
import ViennaVA from "./pages/service-areas/ViennaVA";

// Contact & Financing
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import AllServices from "./pages/AllServices";

// Government Certifications
import MBECertified from "./pages/MBECertified";
import SWaMCertified from "./pages/SWaMCertified";

// Service Area Hubs
import ServiceAreasHub from "./pages/service-areas/ServiceAreasHub";
import MarylandHub from "./pages/service-areas/MarylandHub";
import WashingtonDCHub from "./pages/service-areas/WashingtonDCHub";
import NorthernVirginiaHub from "./pages/service-areas/NorthernVirginiaHub";

// County Hubs — Maryland
import PrinceGeorgesCounty from "./pages/service-areas/PrinceGeorgesCounty";
import MontgomeryCounty from "./pages/service-areas/MontgomeryCounty";
import HowardCounty from "./pages/service-areas/HowardCounty";
import AnneArundelCounty from "./pages/service-areas/AnneArundelCounty";
import CharlesCounty from "./pages/service-areas/CharlesCounty";

// County Hubs — Northern Virginia
import FairfaxCounty from "./pages/service-areas/FairfaxCounty";
import ArlingtonCounty from "./pages/service-areas/ArlingtonCounty";
import LoudounCounty from "./pages/service-areas/LoudounCounty";
import PrinceWilliamCounty from "./pages/service-areas/PrinceWilliamCounty";

// Commercial Differentiation — Regional
import CommercialPlumberMaryland from "./pages/CommercialPlumberMaryland";
import CommercialPlumberDC from "./pages/CommercialPlumberDC";
import CommercialPlumberNorthernVirginia from "./pages/CommercialPlumberNorthernVirginia";

// Backflow Certification — Regional
import BackflowCertificationMaryland from "./pages/BackflowCertificationMaryland";
import BackflowCertificationDC from "./pages/BackflowCertificationDC";
import BackflowCertificationVirginia from "./pages/BackflowCertificationVirginia";

// Tier 2 City Pages — Maryland (Prince George's)
import WoodmoreMD from "./pages/service-areas/prince-georges-county/WoodmoreMD";
import FairwoodMD from "./pages/service-areas/prince-georges-county/FairwoodMD";

// Tier 2 City Pages — Maryland (Montgomery)
import ChevyChaseMD from "./pages/service-areas/montgomery-county/ChevyChaseMD";
import CabinJohnMD from "./pages/service-areas/montgomery-county/CabinJohnMD";
import DarnestownMD from "./pages/service-areas/montgomery-county/DarnestownMD";

// Tier 2 City Pages — Maryland (Howard)
import ClarksvilleMD from "./pages/service-areas/howard-county/ClarksvilleMD";
import GlenelgMD from "./pages/service-areas/howard-county/GlenelgMD";

// Tier 2 City Pages — Maryland (Anne Arundel)
import GalesvilleMD from "./pages/service-areas/anne-arundel-county/GalesvilleMD";
import CrownsvilleMD from "./pages/service-areas/anne-arundel-county/CrownsvilleMD";
import RivaMD from "./pages/service-areas/anne-arundel-county/RivaMD";

// Tier 2 City Pages — Washington DC Neighborhoods
import GeorgetownDC from "./pages/service-areas/washington-dc/GeorgetownDC";
import CapitolHillDC from "./pages/service-areas/washington-dc/CapitolHillDC";
import DupontCircleDC from "./pages/service-areas/washington-dc/DupontCircleDC";
import NavyYardDC from "./pages/service-areas/washington-dc/NavyYardDC";
import NomaDC from "./pages/service-areas/washington-dc/NomaDC";

// Tier 2 City Pages — Northern Virginia
import GreatFallsVA from "./pages/service-areas/fairfax-county/GreatFallsVA";
import BrambletonVA from "./pages/service-areas/loudoun-county/BrambletonVA";
import OneLoudounVA from "./pages/service-areas/loudoun-county/OneLoudounVA";

// Blog
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPost1Emergency from "./pages/blog/BlogPost1Emergency";
import BlogPost2Cost from "./pages/blog/BlogPost2Cost";
import BlogPost3LicensedPlumber from "./pages/blog/BlogPost3LicensedPlumber";
import BlogPost4BeforePlumber from "./pages/blog/BlogPost4BeforePlumber";

// Commercial / Government
import CommercialPlumbing from "./pages/CommercialPlumbing";
import GovernmentMunicipalPlumbing from "./pages/GovernmentMunicipalPlumbing";

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

      {/* Fallback */}
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
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
