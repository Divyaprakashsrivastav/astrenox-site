"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceIconName, ServicePageChapter } from "@/app/content/service-pages/types";
import { EASE_PREMIUM } from "../v2/motion";
import CapabilitiesShowcase from "./CapabilitiesShowcase";
import DeliverablesCarousel3D from "./DeliverablesCarousel3D";
import FanOverviewCards from "./FanOverviewCards";
import OverviewTimeline from "./OverviewTimeline";
import StackCarousel3D from "./StackCarousel3D";
import StrategyJourneyTimeline from "./StrategyJourneyTimeline";
import TagMarquee from "./TagMarquee";
import FormattedText from "../ui/FormattedText";
import "./service-page-extra.css";

const OVERVIEW_GRID_ICONS: ServiceIconName[] = [
  "FileCheck",
  "Workflow",
  "Layers",
  "Monitor",
  "Database",
  "Target",
  "ShieldCheck",
  "Brain",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE_PREMIUM },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function SectionHeaderBlock({ label, title }: { label?: string; title?: string }) {
  if (!label && !title) return null;
  return (
    <div className="mvp-section-header">
      {label ? <p className="mvp-eyebrow">{label}</p> : null}
      {title ? <h2 className="mvp-section-title">{title}</h2> : null}
    </div>
  );
}

function SectionIntro({ intro }: { intro?: string }) {
  if (!intro) return null;
  return (
    <p className="mvp-section-intro">
      <FormattedText text={intro} />
    </p>
  );
}

function isCompactChapterCta(cta: NonNullable<ServicePageChapter["cta"]>) {
  return !cta.title && !cta.subtitle && !(cta.paragraphs && cta.paragraphs.length > 0);
}

function ChapterCtaCard({
  cta,
  index,
}: {
  cta: NonNullable<ServicePageChapter["cta"]>;
  index: number;
}) {
  return (
    <motion.article
      className="mvp-glass-card mvp-cap-card mvp-deliverable-card mvp-impact-cta-card"
      custom={index}
      variants={fadeUp}
    >
      <div className="mvp-impact-cta-card-buttons mvp-cta-buttons mvp-cta-buttons-wrap">
        <Link href={cta.primaryHref} className="mvp-btn-primary">
          {cta.primaryCta}
          <ArrowRight size={16} aria-hidden />
        </Link>
        {cta.secondaryCta && cta.secondaryHref ? (
          <Link href={cta.secondaryHref} className="mvp-btn-secondary">
            {cta.secondaryCta}
          </Link>
        ) : null}
        {cta.tertiaryCta && cta.tertiaryHref ? (
          <Link href={cta.tertiaryHref} className="mvp-btn-secondary">
            {cta.tertiaryCta}
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}

function ChapterImpactGrid({
  items,
  cta,
}: {
  items: Array<{ title: string; description: string }>;
  cta?: NonNullable<ServicePageChapter["cta"]>;
}) {
  return (
    <motion.div
      className={`mvp-cap-grid mvp-deliverables-grid svc-stack-grid--compact${cta ? " svc-impact-grid-with-cta" : ""}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {items.map((item, i) => (
        <motion.article
          key={item.title}
          className="mvp-glass-card mvp-cap-card mvp-deliverable-card"
          custom={i}
          variants={fadeUp}
        >
          <h3>{item.title}</h3>
          <p>
            <FormattedText text={item.description} />
          </p>
        </motion.article>
      ))}
      {cta ? <ChapterCtaCard cta={cta} index={items.length} /> : null}
    </motion.div>
  );
}

function ChapterHeroCtas({ links }: { links: Array<{ label: string; href: string }> }) {
  if (links.length === 0) return null;
  return (
    <motion.div
      className="mvp-cta-buttons mvp-cta-buttons-wrap"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE_PREMIUM }}
    >
      {links.map((link, i) => (
        <Link
          key={link.label}
          href={link.href}
          className={i === 0 ? "mvp-btn-primary" : "mvp-btn-secondary"}
        >
          {link.label}
          {i === 0 ? <ArrowRight size={16} aria-hidden /> : null}
        </Link>
      ))}
    </motion.div>
  );
}

function ChapterCtaPanel({ cta }: { cta: NonNullable<ServicePageChapter["cta"]> }) {
  return (
    <motion.div
      className="mvp-glass-card mvp-cta-panel"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE_PREMIUM }}
    >
      {cta.title ? <h3 className="mvp-chapter-cta-title">{cta.title}</h3> : null}
      {cta.paragraphs?.map((p) => (
        <p key={p.slice(0, 48)}><FormattedText text={p} /></p>
      ))}
      {cta.subtitle ? (
        <p>
          <FormattedText text={cta.subtitle} />
        </p>
      ) : null}
      <div className="mvp-cta-buttons mvp-cta-buttons-wrap">
        <Link href={cta.primaryHref} className="mvp-btn-primary">
          {cta.primaryCta}
          <ArrowRight size={16} aria-hidden />
        </Link>
        {cta.secondaryCta && cta.secondaryHref ? (
          <Link href={cta.secondaryHref} className="mvp-btn-secondary">
            {cta.secondaryCta}
          </Link>
        ) : null}
        {cta.tertiaryCta && cta.tertiaryHref ? (
          <Link href={cta.tertiaryHref} className="mvp-btn-secondary">
            {cta.tertiaryCta}
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
}

function ServicePageChapterBlock({ chapter }: { chapter: ServicePageChapter }) {
  const {
    id,
    label,
    title,
    subtitle,
    heroCtas,
    overview,
    contentSections,
    methodology,
    featureItems,
    capabilities,
    tags,
    integrations,
    workflow,
    impact,
    cta,
  } = chapter;

  const heroCtasInOverview = Boolean(heroCtas?.length && overview?.layout === "timeline");
  const overviewCards =
    overview?.cards ??
    overview?.paragraphs?.map((body, i) => ({
      heading: `Point ${i + 1}`,
      body,
    })) ??
    [];

  return (
    <div id={id} className="mvp-chapter">
      <section className="mvp-inner mvp-section mvp-chapter-hero" aria-labelledby={`${id}-title`}>
        {label ? <p className="mvp-eyebrow">{label}</p> : null}
        <motion.h2
          id={`${id}-title`}
          className="mvp-chapter-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          {title}
        </motion.h2>
        {subtitle ? (
          <p className="mvp-chapter-subtitle">
            <FormattedText text={subtitle} />
          </p>
        ) : null}
        {heroCtas && heroCtas.length > 0 && !heroCtasInOverview ? (
          <ChapterHeroCtas links={heroCtas} />
        ) : null}
      </section>

      {overview ? (
        <section
          className={`mvp-inner mvp-section mvp-chapter-overview${overview.layout === "timeline" ? " mvp-chapter-overview--timeline" : ""}`}
          aria-labelledby={overview.title ? `${id}-overview` : undefined}
        >
          {overview.layout === "timeline" ? (
            <>
              <OverviewTimeline
                title={overview.title}
                titleId={overview.title ? `${id}-overview` : undefined}
                steps={
                  overview.steps ??
                  overview.cards?.map((card) => ({
                    name: card.heading,
                    description: card.body,
                  })) ??
                  overview.paragraphs.map((description, i) => ({
                    name: `Point ${i + 1}`,
                    description,
                  }))
                }
              />
              {heroCtasInOverview && heroCtas ? (
                <div className="mvp-overview-timeline-ctas">
                  <ChapterHeroCtas links={heroCtas} />
                </div>
              ) : null}
            </>
          ) : (
          <div className="mvp-about-grid">
            {overview.title ? (
              <motion.h3
                id={`${id}-overview`}
                className="mvp-about-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: EASE_PREMIUM }}
              >
                {overview.title}
              </motion.h3>
            ) : null}
            {overview.layout === "fan" ? (
              <FanOverviewCards cards={overviewCards} />
            ) : overview.layout === "grid" ? (
              <CapabilitiesShowcase
                items={overviewCards.map((card) => ({
                  title: card.heading,
                  paragraphs: [card.body],
                }))}
                icons={overviewCards.map(
                  (_, i) => OVERVIEW_GRID_ICONS[i % OVERVIEW_GRID_ICONS.length]
                )}
                navLabel={overview.title || "Product brief"}
              />
            ) : (
            <motion.div
              className={
                overview.title
                  ? "mvp-about-text mvp-about-text-cards"
                  : "mvp-about-text mvp-about-text-full mvp-about-text-cards"
              }
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {overview.paragraphs.map((p, i) => (
                <motion.article
                  key={p.slice(0, 48)}
                  className="mvp-glass-card mvp-about-paragraph-card"
                  custom={i}
                  variants={fadeUp}
                >
                  <p>
                    <FormattedText text={p} />
                  </p>
                </motion.article>
              ))}
            </motion.div>
            )}
          </div>
          )}
        </section>
      ) : null}

      {contentSections?.map((section, index) => (
        <section
          key={section.title ?? `content-${index}`}
          className="mvp-inner mvp-section"
        >
          {section.title ? (
            <motion.h3
              className="mvp-about-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: EASE_PREMIUM }}
            >
              {section.title}
            </motion.h3>
          ) : null}
          {section.paragraphs && section.paragraphs.length > 0 ? (
            <motion.div
              className="mvp-about-text mvp-about-text-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE_PREMIUM }}
            >
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}><FormattedText text={p} /></p>
              ))}
            </motion.div>
          ) : null}
          {section.tags && section.tags.length > 0 ? (
            <TagMarquee tags={section.tags} label={section.title ?? "Topic tags"} />
          ) : null}
        </section>
      ))}

      {tags && tags.length > 0 ? (
        <section className="mvp-inner mvp-section">
          <TagMarquee tags={tags} label="Topic tags" />
        </section>
      ) : null}

      {methodology ? (
        <section className="mvp-inner mvp-section" aria-labelledby={`${id}-methodology`}>
          <SectionHeaderBlock title={methodology.title} />
          <StackCarousel3D
            items={methodology.items.map((item) => ({
              title: item.title,
              description: item.description,
            }))}
          />
        </section>
      ) : null}

      {featureItems ? (
        <section className="mvp-inner mvp-section" aria-labelledby={`${id}-features`}>
          <SectionHeaderBlock label={featureItems.label} title={featureItems.title} />
          <SectionIntro intro={featureItems.intro} />
          <motion.div
            className="mvp-offerings-table"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {featureItems.items.map((item, i) => (
              <motion.div
                key={item.title}
                className="mvp-glass-card mvp-offerings-row"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: EASE_PREMIUM }}
              >
                <h3 className="mvp-offerings-service">{item.title}</h3>
                <p className="mvp-offerings-outcome"><FormattedText text={item.description} /></p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ) : null}

      {capabilities ? (
        <section
          id={capabilities.id}
          className="mvp-inner mvp-section"
          aria-labelledby={`${id}-capabilities`}
        >
          <SectionHeaderBlock label={capabilities.label} title={capabilities.title} />
          <SectionIntro intro={capabilities.intro} />
          <CapabilitiesShowcase
            items={capabilities.items}
            icons={capabilities.items.map((cap) => cap.icon)}
            navLabel={capabilities.title || "Capabilities"}
          />
        </section>
      ) : null}

      {integrations ? (
        <section className="mvp-inner mvp-section" aria-labelledby={`${id}-integrations`}>
          <SectionHeaderBlock label={integrations.label} title={integrations.title} />
          <SectionIntro intro={integrations.intro} />
          <DeliverablesCarousel3D items={integrations.items} />
        </section>
      ) : null}

      {workflow ? (
        <StrategyJourneyTimeline
          id={workflow.id ?? `${id}-workflow`}
          label={workflow.label}
          title={workflow.title}
          intro={workflow.intro}
          steps={workflow.steps}
          titleId={`${id}-workflow`}
        />
      ) : null}

      {impact ? (
        <section className="mvp-inner mvp-section" aria-labelledby={`${id}-impact`}>
          <SectionHeaderBlock label={impact.label} title={impact.title} />
          <SectionIntro intro={impact.intro} />
          <ChapterImpactGrid
            items={impact.items}
            cta={cta && isCompactChapterCta(cta) ? cta : undefined}
          />
        </section>
      ) : null}

      {cta && !isCompactChapterCta(cta) ? (
        <section className="mvp-inner mvp-section">
          <ChapterCtaPanel cta={cta} />
        </section>
      ) : null}
    </div>
  );
}

function ServicePageChapterSections({ chapters }: { chapters: ServicePageChapter[] }) {
  return (
    <>
      {chapters.map((chapter, i) => (
        <div key={chapter.id}>
          {i > 0 ? <div className="mvp-chapter-divider" aria-hidden /> : null}
          <ServicePageChapterBlock chapter={chapter} />
        </div>
      ))}
    </>
  );
}

export default memo(ServicePageChapterSections);
