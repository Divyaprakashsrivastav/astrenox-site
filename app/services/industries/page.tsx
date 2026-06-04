import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import SectionHeader from "@/app/component/ui/SectionHeader";
import { industriesPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Industries | Astrenox",
  description: industriesPage.hero.description,
};

export default function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title={industriesPage.hero.title}
        description={industriesPage.hero.description}
      />

      <section className="section-shell relative bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industriesPage.stats.map((s) => (
              <div key={s.label} className="premium-card p-8 text-center">
                <p className="font-heading text-3xl font-semibold text-text">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Process"
            title="Our transformation process"
            description="How we apply elite engineering to industry-specific constraints."
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industriesPage.process.map((step) => (
              <li key={step.step} className="premium-card p-6">
                <span className="text-xs font-semibold text-primary">{step.step}</span>
                <h3 className="mt-2 font-heading font-semibold text-text">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Verticals"
            title="Deep expertise across global industries"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industriesPage.verticals.map((v, i) => (
              <article key={v.sector} className="premium-card p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-text">{v.sector}</h3>
                  <span className="text-[10px] font-medium text-primary shrink-0">
                    Sector {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-primary">{v.metric}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {v.domains.map((d) => (
                    <li
                      key={d}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-border text-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted max-w-2xl mx-auto">
            Don&apos;t see your industry? We solve complex constraints across high-stakes
            sectors—our cross-domain approach ports intelligence patterns between verticals.
          </p>
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
