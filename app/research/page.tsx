import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/pages/PageHero"));
const PageCTA = dynamic(() => import("@/components/pages/PageCTA"));
const ResearchLibraryGrid = dynamic(() => import("@/components/pages/ResearchLibraryGrid"));
const Research = dynamic(() => import("@/components/Research"));
const SectionHeader = dynamic(() => import("@/components/ui/SectionHeader"));
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
