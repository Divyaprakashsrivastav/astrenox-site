import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import SectionHeader from "@/app/component/ui/SectionHeader";
import { aboutPage, partnerLogos } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "About | Astrenox",
  description: aboutPage.hero.description,
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
        primaryCta={{ label: aboutPage.hero.primaryCta, href: "/contact" }}
        secondaryCta={{ label: aboutPage.hero.secondaryCta, href: "/services" }}
      />

      <section className="section-shell relative bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="What we believe"
            title="Core principles for the AI supercycle"
            description="How we think about the future of business and technology."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutPage.beliefs.map((b) => (
              <article key={b.num} className="premium-card p-8">
                <span className="text-xs font-semibold text-primary tracking-widest">
                  {b.num}
                </span>
                <h3 className="mt-3 font-heading text-xl font-semibold text-text">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{b.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Leadership" title="Meet the builders behind Astrenox" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {aboutPage.leadership.map((person) => (
              <article key={person.name} className="premium-card p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-heading text-xl font-semibold text-primary">
                  {person.name.charAt(0)}
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-text">
                  {person.name}
                </h3>
                <p className="text-sm text-primary font-medium mt-1">{person.role}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted mb-6">
            Trusted by teams building with AI
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {partnerLogos.map((name) => (
              <li
                key={name}
                className="px-4 py-2 rounded-full border border-border text-xs font-medium text-muted"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell relative bg-background">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title={aboutPage.hiringTeaser.title}
            description={aboutPage.hiringTeaser.description}
          />
          <blockquote className="premium-card p-8 max-w-3xl mx-auto text-center italic text-muted">
            &ldquo;{aboutPage.hiringTeaser.quote}&rdquo;
          </blockquote>
          <div className="mt-8 space-y-3 max-w-2xl mx-auto">
            {aboutPage.openings.map((job) => (
              <Link
                key={job.title}
                href="/careers"
                className="glass-card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-primary/30 transition-colors block"
              >
                <div>
                  <h3 className="font-heading font-semibold text-text">{job.title}</h3>
                  <p className="text-sm text-muted mt-1">
                    {job.team} · {job.location}
                  </p>
                </div>
                <span className="text-sm font-medium text-primary">{job.compensation}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={aboutPage.hiringTeaser.href}
              className="text-sm font-medium text-primary hover:underline"
            >
              {aboutPage.hiringTeaser.cta} →
            </Link>
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteLayout>
  );
}
