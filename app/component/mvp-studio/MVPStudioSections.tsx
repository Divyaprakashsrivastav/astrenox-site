"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Users,
  ShieldCheck,
  Layers,
  Palette,
  Monitor,
  Server,
  Cloud,
  Brain,
  Target,
  ArrowRight,
  Download,
} from "lucide-react";
import { mvpStudioContent, type MVPIconName } from "@/app/content/mvp-studio-content";
import { EASE_PREMIUM } from "../v2/motion";
import AnimatedCounter from "./AnimatedCounter";
import MVPStudioFAQ from "./MVPStudioFAQ";

const ICONS: Record<MVPIconName, typeof Zap> = {
  Zap,
  Users,
  ShieldCheck,
  Layers,
  Palette,
  Monitor,
  Server,
  Cloud,
  Brain,
  Target,
};

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

function SectionHeaderBlock({ label, title }: { label: string; title: string }) {
  return (
    <div className="mvp-section-header">
      <p className="mvp-eyebrow">{label}</p>
      <h2 className="mvp-section-title">{title}</h2>
    </div>
  );
}

function MVPStudioSections() {
  const { about, process, capabilities, stack, projects, stats, testimonials, faq, cta } =
    mvpStudioContent;

  return (
    <>
      {/* Section 2 — What is MVP Studio */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-about-title">
        <div className="mvp-about-grid">
          <motion.h2
            id="mvp-about-title"
            className="mvp-about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {about.title}
          </motion.h2>
          <motion.div
            className="mvp-about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_PREMIUM }}
          >
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mvp-feature-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {about.features.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <motion.article
                key={f.title}
                className="mvp-glass-card mvp-feature-card"
                custom={i}
                variants={fadeUp}
              >
                <div className="mvp-feature-icon">
                  <Icon size={20} aria-hidden />
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* Section 3 — Development Process */}
      <section
        id={process.id}
        className="mvp-inner mvp-section"
        aria-labelledby="mvp-process-title"
      >
        <SectionHeaderBlock label={process.label} title={process.title} />
        <div className="mvp-timeline">
          {process.steps.map((step, i) => (
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

      {/* Section 4 — Capabilities */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-cap-title">
        <SectionHeaderBlock label={capabilities.label} title={capabilities.title} />
        <motion.div
          className="mvp-cap-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {capabilities.items.map((cap, i) => {
            const Icon = ICONS[cap.icon];
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
                <p>{cap.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* Section 5 — Technology Stack */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-stack-title">
        <SectionHeaderBlock label={stack.label} title={stack.title} />
        <motion.div
          className="mvp-pills"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stack.items.map((tech, i) => (
            <motion.span
              key={tech}
              className="mvp-pill"
              custom={i}
              variants={fadeUp}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Section 6 — Featured Projects */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-projects-title">
        <SectionHeaderBlock label={projects.label} title={projects.title} />
        <motion.div
          className="mvp-projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.items.map((project, i) => (
            <motion.article
              key={project.name}
              className="mvp-glass-card mvp-project-card"
              custom={i}
              variants={fadeUp}
            >
              <div className="mvp-project-shot">
                <span className="mvp-project-shot-label">Case Study Preview</span>
              </div>
              <div className="mvp-project-body">
                <h3>{project.name}</h3>
                <p className="mvp-project-meta">{project.industry}</p>
                <p className="mvp-project-detail">
                  <strong>Timeline:</strong> {project.timeline}
                </p>
                <p className="mvp-project-detail">
                  <strong>Tech:</strong> {project.stack.join(", ")}
                </p>
                <p className="mvp-project-outcome">{project.outcome}</p>
                <Link href="/contact" className="mvp-project-link">
                  View Case Study
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Section 7 — Why Astrenox */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-stats-title">
        <SectionHeaderBlock label={stats.label} title={stats.title} />
        <div className="mvp-stats-grid">
          {stats.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="mvp-glass-card mvp-stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_PREMIUM }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mvp-stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 8 — Testimonials */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-testimonials-title">
        <SectionHeaderBlock label={testimonials.label} title={testimonials.title} />
        <motion.div
          className="mvp-testimonials-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.items.map((t, i) => (
            <motion.blockquote
              key={t.author}
              className="mvp-glass-card mvp-testimonial-card"
              custom={i}
              variants={fadeUp}
            >
              <p className="mvp-testimonial-quote">{t.quote}</p>
              <footer>
                <cite className="mvp-testimonial-author not-italic">{t.author}</cite>
                <p className="mvp-testimonial-role">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </section>

      {/* Section 9 — FAQ */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-faq-title">
        <SectionHeaderBlock label={faq.label} title={faq.title} />
        <MVPStudioFAQ items={faq.items} />
      </section>

      {/* Section 10 — Final CTA */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-cta-title">
        <motion.div
          className="mvp-glass-card mvp-cta-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <h2 id="mvp-cta-title">{cta.title}</h2>
          <p>{cta.subtitle}</p>
          <div className="mvp-cta-buttons">
            <Link href={cta.primaryHref} className="mvp-btn-primary">
              {cta.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={cta.secondaryHref} className="mvp-btn-secondary">
              <Download size={16} aria-hidden />
              {cta.secondaryCta}
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default memo(MVPStudioSections);
