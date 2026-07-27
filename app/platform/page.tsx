import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const PlatformHero = dynamic(() => import("@/components/platform/PlatformHero"));
const EnterpriseSearchSection = dynamic(() => import("@/components/platform/EnterpriseSearchSection"));
const KnowledgeGraphPipeline = dynamic(() => import("@/components/platform/KnowledgeGraphPipeline"));
const AIAgentsSection = dynamic(() => import("@/components/platform/AIAgentsSection"));
const WorkflowAutomationSection = dynamic(() => import("@/components/platform/WorkflowAutomationSection"));
const IntegrationsHub = dynamic(() => import("@/components/platform/IntegrationsHub"));
const PlatformSecuritySection = dynamic(() => import("@/components/platform/PlatformSecuritySection"));
const PlatformDemoCTA = dynamic(() => import("@/components/platform/PlatformDemoCTA"));
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
