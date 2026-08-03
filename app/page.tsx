import dynamic from "next/dynamic";
import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/Hero";
import HomeFlow from "@/components/home/HomeFlow";

/* Below-fold sections: split into separate chunks so first paint stays light */
const ProcessSection = dynamic(() => import("@/components/home/ProcessSection"));
const TriFlywheel = dynamic(() => import("@/components/home/TriFlywheel"));
const EnterpriseEcosystem = dynamic(() => import("@/components/home/EnterpriseEcosystem"));
const HomeIndustries = dynamic(() => import("@/components/home/HomeIndustries"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const TechnologyEcosystem = dynamic(() => import("@/components/home/TechnologyEcosystem"));
const HomeProducts = dynamic(() => import("@/components/home/HomeProducts"));
const ProjectsSection = dynamic(() => import("@/components/home/ProjectsSection"));
const HomeTestimonials = dynamic(() => import("@/components/home/HomeTestimonials"));
const HomeSiteEnding = dynamic(() => import("@/components/home/HomeSiteEnding"));

export default function Home() {
  return (
    <SiteLayout>
      <HomeFlow>
        <Hero />
        <ProcessSection />
        <TriFlywheel />
        <EnterpriseEcosystem />
        <HomeIndustries />
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
