"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePageChapter } from "@/app/content/service-pages/types";
import { EASE_PREMIUM } from "../v2/motion";
import { SERVICE_ICONS } from "./service-icons";

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
  return <p className="mvp-section-intro">{intro}</p>;
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
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      {cta.subtitle ? <p>{cta.subtitle}</p> : null}
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
        {subtitle ? <p className="mvp-chapter-subtitle">{subtitle}</p> : null}
        {heroCtas && heroCtas.length > 0 ? (
          <div className="mvp-cta-buttons mvp-cta-buttons-wrap">
            {heroCtas.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className={i === 0 ? "mvp-btn-primary" : "mvp-btn-secondary"}
              >
                {link.label}
                {i === 0 ? <ArrowRight size={16} aria-hidden /> : null}
              </Link>
            ))}
          </div>
        ) : null}
      </section>

      {overview ? (
        <section className="mvp-inner mvp-section" aria-labelledby={`${id}-overview`}>
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
            <motion.div
              className={overview.title ? "mvp-about-text" : "mvp-about-text mvp-about-text-full"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE_PREMIUM }}
            >
              {overview.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </motion.div>
          </div>
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
          {section.tags && section.tags.length > 0 ? (
            <motion.div
              className="mvp-pills"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {section.tags.map((tag, i) => (
                <motion.span key={tag} className="mvp-pill" custom={i} variants={fadeUp}>
                  {tag}
                </motion.span>
              ))}
            </motion.div>
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
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </motion.div>
          ) : null}
        </section>
      ))}

      {tags && tags.length > 0 ? (
        <section className="mvp-inner mvp-section">
          <motion.div
            className="mvp-pills"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {tags.map((tag, i) => (
              <motion.span key={tag} className="mvp-pill" custom={i} variants={fadeUp}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </section>
      ) : null}

      {methodology ? (
        <section className="mvp-inner mvp-section" aria-labelledby={`${id}-methodology`}>
          <SectionHeaderBlock title={methodology.title} />
          <SectionIntro intro={methodology.intro} />
          <motion.div
            className="mvp-cap-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {methodology.items.map((item, i) => (
              <motion.article
                key={item.title}
                className="mvp-glass-card mvp-cap-card"
                custom={i}
                variants={fadeUp}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
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
                <p className="mvp-offerings-outcome">{item.description}</p>
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
          <motion.div
            className="mvp-cap-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {capabilities.items.map((cap, i) => {
              const Icon = SERVICE_ICONS[cap.icon];
              const body = cap.paragraphs ?? (cap.description ? [cap.description] : []);
              return (
                <motion.article
                  key={cap.title}
                  className="mvp-glass-card mvp-cap-card"
                  custom={i}
                  variants={fadeUp}
                >
                  <div className="mvp-feature-icon">
                    <Icon size={20} aria-hidden />
                  </div>
                  <h3>{cap.title}</h3>
                  {body.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                  {cap.enables && cap.enables.length > 0 ? (
                    <div className="mvp-cap-enables">
                      <p className="mvp-cap-enables-label">What it enables:</p>
                      <ul>
                        {cap.enables.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </motion.article>
              );
            })}
          </motion.div>
        </section>
      ) : null}

      {integrations ? (
        <section className="mvp-inner mvp-section" aria-labelledby={`${id}-integrations`}>
          <SectionHeaderBlock label={integrations.label} title={integrations.title} />
          <SectionIntro intro={integrations.intro} />
          <motion.div
            className="mvp-cap-grid mvp-deliverables-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {integrations.items.map((item, i) => (
              <motion.article
                key={item.title}
                className="mvp-glass-card mvp-cap-card mvp-deliverable-card"
                custom={i}
                variants={fadeUp}
              >
                <h3>{item.title}</h3>
                {item.paragraphs?.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {item.bullets && item.bullets.length > 0 ? (
                  <ul className="mvp-cap-enables-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {item.afterBullets?.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </motion.article>
            ))}
          </motion.div>
        </section>
      ) : null}

      {workflow ? (
        <section
          id={workflow.id}
          className="mvp-inner mvp-section"
          aria-labelledby={`${id}-workflow`}
        >
          <SectionHeaderBlock label={workflow.label} title={workflow.title} />
          <SectionIntro intro={workflow.intro} />
          <div className="mvp-timeline">
            {workflow.steps.map((step, i) => (
              <motion.div
                key={step.name}
                className="mvp-timeline-step"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: EASE_PREMIUM }}
              >
                <div className="mvp-glass-card mvp-timeline-step-inner">
                  <h3>{step.name}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ) : null}

      {impact ? (
        <section className="mvp-inner mvp-section" aria-labelledby={`${id}-impact`}>
          <SectionHeaderBlock label={impact.label} title={impact.title} />
          <SectionIntro intro={impact.intro} />
          <motion.div
            className="mvp-cap-grid mvp-deliverables-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {impact.items.map((item, i) => (
              <motion.article
                key={item.title}
                className="mvp-glass-card mvp-cap-card mvp-deliverable-card"
                custom={i}
                variants={fadeUp}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>
      ) : null}

      {cta ? (
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
