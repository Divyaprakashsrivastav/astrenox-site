import SiteLayout from "./component/layout/SiteLayout";
import Hero from "./component/Hero";
import ProcessSection from "./component/home/ProcessSection";
import TriFlywheel from "./component/home/TriFlywheel";
import EnterpriseEcosystem from "./component/home/EnterpriseEcosystem";
import HomeIndustries from "./component/home/HomeIndustries";
import HomeMetrics from "./component/home/HomeMetrics";
import ServicesSection from "./component/home/ServicesSection";
import TechnologyEcosystem from "./component/home/TechnologyEcosystem";
import HomeProducts from "./component/home/HomeProducts";
import ProjectsSection from "./component/home/ProjectsSection";
import HomeTestimonials from "./component/home/HomeTestimonials";
import HomeSiteEnding from "./component/home/HomeSiteEnding";
import HomeFlow from "./component/home/HomeFlow";

export default function Home() {
  return (
    <SiteLayout>
      <HomeFlow>
        <Hero />
        <ProcessSection />
        <TriFlywheel />
        <EnterpriseEcosystem />
        <HomeIndustries />
        <HomeMetrics />
        <ServicesSection />
        <TechnologyEcosystem />
        <HomeProducts />
        <ProjectsSection />
        <HomeTestimonials />
      </HomeFlow>
      <HomeSiteEnding />
    </SiteLayout>
  );
}
