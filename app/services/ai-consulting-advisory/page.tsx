import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import AdvisoryImmersiveHero from "@/app/component/ai-consulting-advisory/AdvisoryImmersiveHero";
import AdvisoryOverview from "@/app/component/ai-consulting-advisory/AdvisoryOverview";
import AdvisoryStrategyJourney from "@/app/component/ai-consulting-advisory/AdvisoryStrategyJourney";
import AdvisoryCapabilityMap from "@/app/component/ai-consulting-advisory/AdvisoryCapabilityMap";
import AdvisoryServiceOfferings from "@/app/component/ai-consulting-advisory/AdvisoryServiceOfferings";
import { aiConsultingAdvisoryContent } from "@/app/content/service-pages";
import "@/app/component/ai-consulting-advisory/ai-consulting-advisory-hero.css";
import "@/app/component/ai-consulting-advisory/advisory-overview.css";
import "@/app/component/ai-consulting-advisory/advisory-strategy-journey.css";
import "@/app/component/ai-consulting-advisory/advisory-capability-map.css";
import "@/app/component/ai-consulting-advisory/advisory-service-offerings.css";

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
