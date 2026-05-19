import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import EmergencyPlumbing from "./pages/EmergencyPlumbing";
import DrainCleaning from "./pages/DrainCleaning";
import WaterHeaterRepair from "./pages/WaterHeaterRepair";
import CommercialPlumbing from "./pages/CommercialPlumbing";
import GovernmentMunicipalPlumbing from "./pages/GovernmentMunicipalPlumbing";
import LicensesCertifications from "./pages/LicensesCertifications";
import About from "./pages/About";

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
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/emergency-plumbing" component={() => <Layout><EmergencyPlumbing /></Layout>} />
      <Route path="/drain-cleaning" component={() => <Layout><DrainCleaning /></Layout>} />
      <Route path="/water-heater-repair" component={() => <Layout><WaterHeaterRepair /></Layout>} />
      <Route path="/commercial-plumbing" component={() => <Layout><CommercialPlumbing /></Layout>} />
      <Route path="/government-municipal-plumbing" component={() => <Layout><GovernmentMunicipalPlumbing /></Layout>} />
      <Route path="/licenses-certifications" component={() => <Layout><LicensesCertifications /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
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
