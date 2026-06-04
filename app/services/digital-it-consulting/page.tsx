import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import SectionHeader from "@/app/component/ui/SectionHeader";
import { CardGridSection } from "@/app/component/pages/ServiceDetailSections";
import { digitalItConsultingPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Digital & IT Consulting | Astrenox",
  description: digitalItConsultingPage.hero.description,
};

export default function DigitalITConsultingPage() {
  const page = digitalItConsultingPage;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service"
        title={page.hero.title}
        description={page.hero.description}
      />

      <CardGridSection
        label="Challenge"
        title="The digital transformation dilemma"
        description="Many organizations struggle with complexities that hinder innovation and competition."
        items={page.dilemmas}
        columns={2}
      />

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Approach"
            title="Strategy & build"
            description="AI-first blueprint plus elite engineering— innovative, scalable, future-proof solutions."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-text mb-4">The blueprint</h3>
              <div className="space-y-4">
                {page.blueprint.map((item) => (
                  <article key={item.title} className="premium-card p-5">
                    <h4 className="font-semibold text-text">{item.title}</h4>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-text mb-4">The build</h3>
              <div className="space-y-4">
                {page.build.map((item) => (
                  <article key={item.title} className="premium-card p-5">
                    <h4 className="font-semibold text-text">{item.title}</h4>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardGridSection
        label="Services"
        title="Comprehensive digital transformation services"
        items={page.services}
        columns={3}
      />
      <CardGridSection
        label="Outcomes"
        title="Practitioner-led, production-grade results"
        items={page.results}
        columns={2}
      />

      <section className="section-shell relative bg-background pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="premium-card card-pad lg:card-pad-lg text-center">
            <h2 className="font-heading text-2xl font-semibold text-text">{page.cta.title}</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">{page.cta.description}</p>
            <a
              href="/contact"
              className="mt-8 inline-flex px-8 py-3.5 text-sm font-medium text-white bg-primary hover:bg-[#6a2859] rounded-full transition-colors"
            >
              {page.cta.button}
            </a>
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
