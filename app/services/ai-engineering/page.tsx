import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import {
  CardGridSection,
} from "@/app/component/pages/ServiceDetailSections";
import { aiEngineeringPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "AI Engineering | Astrenox",
  description: aiEngineeringPage.hero.description,
};

export default function AIEngineeringPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service"
        title={aiEngineeringPage.hero.title}
        description={aiEngineeringPage.hero.description}
      />
      <CardGridSection
        label="Culture"
        title="What we believe"
        description="Four pillars that drive velocity and quality."
        items={aiEngineeringPage.pillars}
        columns={2}
      />
      <CardGridSection
        label="Why Astrenox"
        title="Why you need us"
        items={aiEngineeringPage.whyNeedUs}
      />
      <CardGridSection
        label="Capabilities"
        title="What we do"
        description="Comprehensive AI engineering to build what's next."
        items={aiEngineeringPage.capabilities}
        columns={3}
      />
      <CardGridSection
        label="Engagement"
        title="Why work with us"
        items={aiEngineeringPage.engagement}
      />
      <PageCTA />
    </SiteLayout>
  );
}
