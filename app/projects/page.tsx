import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import Projects from "@/app/component/Projects";
import SectionHeader from "@/app/component/ui/SectionHeader";
import { projectsPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Projects | Astrenox",
  description: projectsPage.hero.description,
};

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={projectsPage.hero.eyebrow}
        title={projectsPage.hero.title}
        description={projectsPage.hero.description}
      />

      <section className="section-shell relative bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Flagship" title="Our platforms" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsPage.flagship.map((p) => (
              <article key={p.title} className="premium-card p-6">
                <h3 className="font-heading text-2xl font-semibold text-text">{p.title}</h3>
                <p className="mt-4 text-muted leading-relaxed">{p.description}</p>
                <a
                  href={p.href}
                  className="mt-6 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Request access →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Projects />

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Outcomes" title="Client impact" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsPage.quotes.map((q) => (
              <blockquote key={q.metric} className="premium-card p-8">
                <p className="font-heading text-4xl font-semibold text-primary">{q.metric}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">{q.label}</p>
                <p className="mt-5 text-sm text-muted italic leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
