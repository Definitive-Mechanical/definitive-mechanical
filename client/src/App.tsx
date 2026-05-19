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

// Emergency
import EmergencyPlumbing from "./pages/EmergencyPlumbing";

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

// Fixtures
import FaucetToiletRepair from "./pages/FaucetToiletRepair";
import ResidentialPlumbing from "./pages/ResidentialPlumbing";

// Service Area Pages — Maryland
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

// Service Area Pages — Northern Virginia
import AlexandriaVA from "./pages/service-areas/AlexandriaVA";
import ArlingtonVA from "./pages/service-areas/ArlingtonVA";
import McLeanVA from "./pages/service-areas/McLeanVA";
import SpringfieldVA from "./pages/service-areas/SpringfieldVA";
import ViennaVA from "./pages/service-areas/ViennaVA";

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
      <Route path="/licenses-certifications" component={() => <Layout><LicensesCertifications /></Layout>} />

      {/* Emergency */}
      <Route path="/emergency-plumbing" component={() => <Layout><EmergencyPlumbing /></Layout>} />

      {/* Drain & Sewer */}
      <Route path="/drain-cleaning" component={() => <Layout><DrainCleaning /></Layout>} />
      <Route path="/sewer-line-repair" component={() => <Layout><SewerLineRepair /></Layout>} />
      <Route path="/sewer-line-installation" component={() => <Layout><SewerLineInstallation /></Layout>} />
      <Route path="/hydro-jetting" component={() => <Layout><HydroJetting /></Layout>} />
      <Route path="/video-camera-inspection" component={() => <Layout><VideoCameraInspection /></Layout>} />

      {/* Water Heater */}
      <Route path="/water-heater-repair" component={() => <Layout><WaterHeaterRepair /></Layout>} />
      <Route path="/water-heater-installation" component={() => <Layout><WaterHeaterInstallation /></Layout>} />
      <Route path="/tankless-water-heaters" component={() => <Layout><TanklessWaterHeaters /></Layout>} />

      {/* Water Line */}
      <Route path="/water-line-repair" component={() => <Layout><WaterLineRepair /></Layout>} />
      <Route path="/water-line-installation" component={() => <Layout><WaterLineInstallation /></Layout>} />

      {/* Gas */}
      <Route path="/gas-line-repair" component={() => <Layout><GasLineRepair /></Layout>} />
      <Route path="/gas-line-installation" component={() => <Layout><GasLineInstallation /></Layout>} />
      <Route path="/gas-leak-repair" component={() => <Layout><GasLeakRepair /></Layout>} />

      {/* Backflow */}
      <Route path="/backflow-prevention" component={() => <Layout><BackflowPrevention /></Layout>} />
      <Route path="/backflow-certification" component={() => <Layout><BackflowCertification /></Layout>} />
      <Route path="/backflow-preventer-repair" component={() => <Layout><BackflowPreventerRepair /></Layout>} />

      {/* Boiler & Furnace */}
      <Route path="/boiler-furnace-repair" component={() => <Layout><BoilerFurnaceRepair /></Layout>} />
      <Route path="/boiler-furnace-installation" component={() => <Layout><BoilerFurnaceInstallation /></Layout>} />

      {/* Fixtures & Residential */}
      <Route path="/faucet-toilet-repair" component={() => <Layout><FaucetToiletRepair /></Layout>} />
      <Route path="/residential-plumbing" component={() => <Layout><ResidentialPlumbing /></Layout>} />

      {/* Service Areas — Maryland */}
      <Route path="/service-areas/maryland/prince-georges-county/largo-md" component={() => <Layout><LargoMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/bowie-md" component={() => <Layout><BowieMD /></Layout>} />
      <Route path="/service-areas/maryland/prince-georges-county/fort-washington-md" component={() => <Layout><FortWashingtonMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/rockville-md" component={() => <Layout><RockvilleMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/bethesda-md" component={() => <Layout><BethesdaMD /></Layout>} />
      <Route path="/service-areas/maryland/montgomery-county/potomac-md" component={() => <Layout><PotomacMD /></Layout>} />
      <Route path="/service-areas/maryland/howard-county/ellicott-city-md" component={() => <Layout><EllicottCityMD /></Layout>} />
      <Route path="/service-areas/maryland/charles-county/waldorf-md" component={() => <Layout><WaldorfMD /></Layout>} />

      {/* Service Areas — Washington DC */}
      <Route path="/service-areas/washington-dc" component={() => <Layout><WashingtonDC /></Layout>} />

      {/* Service Areas — Northern Virginia */}
      <Route path="/service-areas/northern-virginia/fairfax-county/alexandria-va" component={() => <Layout><AlexandriaVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/arlington-county/arlington-va" component={() => <Layout><ArlingtonVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/mclean-va" component={() => <Layout><McLeanVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/springfield-va" component={() => <Layout><SpringfieldVA /></Layout>} />
      <Route path="/service-areas/northern-virginia/fairfax-county/vienna-va" component={() => <Layout><ViennaVA /></Layout>} />

      {/* Commercial / Government */}
      <Route path="/commercial-plumbing" component={() => <Layout><CommercialPlumbing /></Layout>} />
      <Route path="/government-municipal-plumbing" component={() => <Layout><GovernmentMunicipalPlumbing /></Layout>} />

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
