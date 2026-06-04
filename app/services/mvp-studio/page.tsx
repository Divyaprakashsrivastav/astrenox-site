import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import SectionHeader from "@/app/component/ui/SectionHeader";
import { CardGridSection } from "@/app/component/pages/ServiceDetailSections";
import { mvpStudioPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "MVP Studio | Astrenox",
  description: mvpStudioPage.hero.description,
};

export default function MVPStudioPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service"
        title={mvpStudioPage.hero.title}
        description={mvpStudioPage.hero.description}
      />

      <section className="section-shell relative bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ul className="flex flex-col gap-3 max-w-2xl">
            {mvpStudioPage.highlights.map((h) => (
              <li key={h} className="glass-card px-5 py-4 text-sm text-muted">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {mvpStudioPage.stats.map((s) => (
              <div key={s.label} className="premium-card p-5 text-center">
                <p className="font-heading text-2xl font-semibold text-text">{s.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CardGridSection label="Portfolio" title="Our work" items={mvpStudioPage.work} columns={3} />

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Process"
            title="Define → Build → Launch and iterate"
            description="Designed to reduce uncertainty and accelerate validated progress."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mvpStudioPage.process.map((step) => (
              <article key={step.step} className="premium-card p-7">
                <span className="text-xs font-semibold text-primary">Step {step.step}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
                <p className="mt-4 text-xs text-primary/80">
                  <span className="font-medium">Output:</span> {step.output}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Package" title="What's included" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {mvpStudioPage.included.map((item) => (
              <li key={item} className="glass-card px-5 py-3 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 premium-card p-6 max-w-xl">
            <h3 className="font-heading text-2xl font-semibold text-text">
              {mvpStudioPage.pricing.title}
            </h3>
            <p className="mt-2 text-primary font-medium">{mvpStudioPage.pricing.price}</p>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              {mvpStudioPage.pricing.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {mvpStudioPage.pricing.addons.map((a) => (
                <li key={a}>• {a}</li>
              ))}
            </ul>
            <a
              href={`mailto:${mvpStudioPage.pricing.contact}`}
              className="mt-6 inline-block text-sm font-medium text-primary hover:underline"
            >
              {mvpStudioPage.pricing.contact}
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Testimonials" title="Founder feedback" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mvpStudioPage.testimonials.map((t) => (
              <blockquote key={t.author} className="premium-card p-7">
                <p className="text-sm text-muted italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-xs font-medium text-text">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background pb-8">
        <div className="section-divider" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeader label="FAQ" title="MVP program questions" align="left" />
          <dl className="space-y-4">
            {mvpStudioPage.faq.map((item) => (
              <div key={item.q} className="premium-card p-6">
                <dt className="font-heading font-semibold text-text">{item.q}</dt>
                <dd className="mt-2 text-sm text-muted leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
