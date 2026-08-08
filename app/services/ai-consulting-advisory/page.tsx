import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import ServicePage from "@/components/service-page/ServicePage";
import AdvisoryImmersiveHero from "@/components/ai-consulting-advisory/AdvisoryImmersiveHero";
import AdvisoryOverview from "@/components/ai-consulting-advisory/AdvisoryOverview";
import AdvisoryStrategyJourney from "@/components/ai-consulting-advisory/AdvisoryStrategyJourney";
import AdvisoryCapabilityMap from "@/components/ai-consulting-advisory/AdvisoryCapabilityMap";
import AdvisoryServiceOfferings from "@/components/ai-consulting-advisory/AdvisoryServiceOfferings";
import { aiConsultingAdvisoryContent } from "@/app/content/service-pages";
import "@/components/ai-consulting-advisory/ai-consulting-advisory-hero.css";
import "@/components/ai-consulting-advisory/advisory-overview.css";
import "@/components/ai-consulting-advisory/advisory-capability-map.css";
import "@/components/ai-consulting-advisory/advisory-service-offerings.css";

export const metadata: Metadata = {
  title: aiConsultingAdvisoryContent.metadata.title,
  description: aiConsultingAdvisoryContent.metadata.description,
};

export default function AIConsultingAdvisoryPage() {
  return (
    <SiteLayout>
      <ServicePage
        content={aiConsultingAdvisoryContent}
        visual="advisory"
        HeroComponent={AdvisoryImmersiveHero}
        OverviewComponent={AdvisoryOverview}
        WorkflowComponent={AdvisoryStrategyJourney}
        CapabilitiesComponent={AdvisoryCapabilityMap}
        ServiceOfferingsComponent={AdvisoryServiceOfferings}
      />
    </SiteLayout>
  );
}
