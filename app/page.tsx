import SiteLayout from "./component/layout/SiteLayout";
import Hero from "./component/Hero";
import TrustedSection from "./component/home/TrustedSection";
import CapabilitiesSection from "./component/home/CapabilitiesSection";
import ProcessSection from "./component/home/ProcessSection";
import TriFlywheel from "./component/home/TriFlywheel";
import ControlPlaneSection from "./component/home/ControlPlaneSection";
import OperatingSystemSection from "./component/home/OperatingSystemSection";
import HomeIndustries from "./component/home/HomeIndustries";
import HomeServices from "./component/home/HomeServices";
import ProjectsSection from "./component/home/ProjectsSection";
import TechnologyEcosystem from "./component/home/TechnologyEcosystem";
import HomeMetrics from "./component/home/HomeMetrics";
import HomeTestimonials from "./component/home/HomeTestimonials";
import ResearchSection from "./component/home/ResearchSection";
import HomeContactCTA from "./component/home/HomeContactCTA";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustedSection />
      <CapabilitiesSection />
      <ProcessSection />
      <TriFlywheel />
      <ControlPlaneSection />
      <OperatingSystemSection />
      <HomeIndustries />
      <HomeServices />
      <TechnologyEcosystem />
      <ProjectsSection />
      <HomeMetrics />
      <HomeTestimonials />
      <ResearchSection />
      <HomeContactCTA />
    </SiteLayout>
  );
}
