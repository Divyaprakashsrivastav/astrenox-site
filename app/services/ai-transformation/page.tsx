import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import SectionHeader from "@/app/component/ui/SectionHeader";
import {
  BulletListSection,
  CardGridSection,
} from "@/app/component/pages/ServiceDetailSections";
import { aiTransformationPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "AI Transformation | Astrenox",
  description: aiTransformationPage.hero.description,
};

export default function AITransformationPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service"
        title={aiTransformationPage.hero.title}
        description={aiTransformationPage.hero.description}
      />
      <section className="section-shell relative bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Strategy"
            title={aiTransformationPage.strategy.title}
            description={aiTransformationPage.strategy.description}
          />
        </div>
      </section>
      <CardGridSection
        label="Framework"
        title="Our execution framework"
        items={aiTransformationPage.framework.map(({ title, description }) => ({
          title,
          description: description.split(" Just interested")[0],
        }))}
        columns={3}
      />
      <p className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 mb-4 text-sm text-muted">
        <Link href="/services/ai-engineering" className="text-primary hover:underline">
          Learn more about AI Engineering →
        </Link>
      </p>
      <BulletListSection
        label="Differentiation"
        title="Why you need us"
        description="Traditional consultancies sell slides. We ship systems."
        items={aiTransformationPage.whyNeedUs}
      />
      <CardGridSection
        label="Offerings"
        title="We are your Chief AI Officer"
        items={aiTransformationPage.offerings}
        columns={3}
      />
      <PageCTA />
    </SiteLayout>
  );
}
