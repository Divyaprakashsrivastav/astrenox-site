import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import ResearchLibraryGrid from "@/app/component/pages/ResearchLibraryGrid";
import Research from "@/app/component/Research";
import SectionHeader from "@/app/component/ui/SectionHeader";
import { researchPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Research | Astrenox",
  description: researchPage.hero.description,
};

export default function ResearchPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={researchPage.hero.eyebrow}
        title={researchPage.hero.title}
        description={researchPage.hero.description}
      />

      <section className="section-shell relative bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Library" title="Research & ecosystem programs" />
          <ResearchLibraryGrid />
        </div>
      </section>

      <Research />

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center premium-card p-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            {researchPage.disruption.title}
          </h2>
          <p className="mt-5 text-muted leading-relaxed">{researchPage.disruption.description}</p>
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
