import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import { CardGridSection } from "@/app/component/pages/ServiceDetailSections";
import SectionHeader from "@/app/component/ui/SectionHeader";
import { automationsPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Intelligent Automations | Astrenox",
  description: automationsPage.hero.description,
};

export default function IntelligentAutomationsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service"
        title={automationsPage.hero.title}
        description={automationsPage.hero.description}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-4">
        <Link
          href="/contact"
          className="inline-flex text-sm font-medium text-primary hover:underline"
        >
          Scope my first use case →
        </Link>
      </div>
      <CardGridSection
        label="Solutions"
        title="What we build"
        description="Custom AI solutions designed for enterprise-scale impact."
        items={automationsPage.builds}
        columns={3}
      />
      <CardGridSection
        label="Delivery"
        title="How we build it"
        description="A streamlined path from data to deployed intelligence."
        items={automationsPage.howWeBuild}
        columns={3}
      />
      <CardGridSection
        label="Outcomes"
        title="What you get"
        items={automationsPage.outcomes}
      />
      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Engagement"
            title="Our engagement model"
            description="Five steps to automation success."
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {automationsPage.engagement.map((step) => (
              <li key={step.step} className="premium-card p-6">
                <span className="text-xs font-semibold text-primary">{step.step}</span>
                <h3 className="mt-2 font-heading font-semibold text-text text-sm">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <PageCTA />
    </SiteLayout>
  );
}
