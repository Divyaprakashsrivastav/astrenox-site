import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PlatformHero from "@/app/component/platform/PlatformHero";
import EnterpriseSearchSection from "@/app/component/platform/EnterpriseSearchSection";
import KnowledgeGraphPipeline from "@/app/component/platform/KnowledgeGraphPipeline";
import AIAgentsSection from "@/app/component/platform/AIAgentsSection";
import WorkflowAutomationSection from "@/app/component/platform/WorkflowAutomationSection";
import IntegrationsHub from "@/app/component/platform/IntegrationsHub";
import PlatformSecuritySection from "@/app/component/platform/PlatformSecuritySection";
import PlatformDemoCTA from "@/app/component/platform/PlatformDemoCTA";
import { intelligencePlatform } from "@/app/content/platform-content";

export const metadata: Metadata = {
  title: "Astrenox Intelligence Platform | Astrenox",
  description: intelligencePlatform.positioning,
};

export default function PlatformPage() {
  return (
    <SiteLayout>
      <PlatformHero />
      <EnterpriseSearchSection />
      <KnowledgeGraphPipeline />
      <AIAgentsSection />
      <WorkflowAutomationSection />
      <IntegrationsHub />
      <PlatformSecuritySection />
      <PlatformDemoCTA />
    </SiteLayout>
  );
}
