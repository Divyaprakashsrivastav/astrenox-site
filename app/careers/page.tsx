import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import SectionHeader from "@/app/component/ui/SectionHeader";
import { CardGridSection } from "@/app/component/pages/ServiceDetailSections";
import {
  careerCategories,
  careerHighlights,
} from "@/app/content/astrenox-content";
import { careersPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Careers | Astrenox",
  description: careersPage.hero.description,
};

export default function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Careers & Talent"
        title={careersPage.hero.title}
        description={careersPage.hero.description}
        primaryCta={{ label: "Get a shortlist", href: "/contact" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />

      <CardGridSection
        label="Why Astrenox"
        title="Speed, quality, and accountability—in one motion"
        items={careersPage.valueProps}
        columns={3}
      />

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Impact" title="Snapshots of impact" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careersPage.impactSnapshots.map((snap) => (
              <article key={snap.title} className="premium-card p-7">
                <p className="text-sm font-semibold text-primary">{snap.metric}</p>
                <h3 className="mt-2 font-heading font-semibold text-text">{snap.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{snap.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Talent"
            title="Builders for every layer of your stack"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerCategories.map((cat) => (
              <article key={cat.title} className="premium-card p-6">
                <h3 className="font-heading font-semibold text-text">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{cat.roles}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Process" title="How it works" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careersPage.howItWorks.map((step) => (
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
          <SectionHeader label="Vetting" title="Proof over promises" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {careersPage.vetting.map((item) => (
              <li key={item} className="glass-card px-5 py-4 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CardGridSection
        label="Models"
        title="Engagement models"
        items={careersPage.engagementModels}
        columns={2}
      />
      <CardGridSection
        label="SLAs"
        title="SLAs & guarantees"
        items={careersPage.slas}
        columns={2}
      />

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Highlights" title="Why teams choose us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerHighlights.map((h) => (
              <div key={h.title} className="glass-card p-5">
                <p className="text-sm font-semibold text-text">{h.title}</p>
                <p className="mt-1 text-xs text-muted">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Pricing" title="Pricing signals" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {careersPage.pricing.map((p) => (
              <article key={p.title} className="premium-card p-7 text-center">
                <h3 className="font-heading font-semibold text-text">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background pb-8">
        <div className="section-divider" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeader label="FAQ" title="Hiring questions" align="left" />
          <dl className="space-y-4">
            {careersPage.faq.map((item) => (
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
