"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import type { ServicePageContent, ServiceIconName } from "@/app/content/service-pages/types";
import { EASE_PREMIUM } from "../v2/motion";
import AnimatedCounter from "../mvp-studio/AnimatedCounter";
import MVPStudioFAQ from "../mvp-studio/MVPStudioFAQ";
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

function SectionHeaderBlock({ label, title }: { label: string; title: string }) {
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

function ServicePageSections({ content }: { content: ServicePageContent }) {
  const {
    intro,
    overview,
    engineeringCapabilities,
    capabilities,
    workflow,
    stack,
    serviceOfferings,
    interventions,
    deliverables,
    impact,
    outcomes,
    projects,
    industries,
    testimonials,
    faq,
    cta,
  } = content;

  const isEngineeringLayout = Boolean(engineeringCapabilities);

  const stackSection = stack ? (
    <section className="mvp-inner mvp-section" aria-labelledby="service-stack-title">
      <SectionHeaderBlock label={stack.label} title={stack.title} />
      <SectionIntro intro={stack.intro} />
      {typeof stack.items[0] === "string" ? (
        <motion.div
          className="mvp-pills"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stack.items.map((tech, i) => (
            <motion.span key={tech as string} className="mvp-pill" custom={i} variants={fadeUp}>
              {tech as string}
            </motion.span>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="mvp-cap-grid mvp-deliverables-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stack.items.map((item, i) => {
            const deliverable = item as { title: string; description: string; icon?: ServiceIconName };
            const Icon = deliverable.icon ? SERVICE_ICONS[deliverable.icon] : null;
            return (
              <motion.article
                key={deliverable.title}
                className="mvp-glass-card mvp-cap-card mvp-deliverable-card"
                custom={i}
                variants={fadeUp}
              >
                {Icon && (
                  <div className="mvp-feature-icon">
                    <Icon size={20} aria-hidden />
                  </div>
                )}
                <h3>{deliverable.title}</h3>
                <p>{deliverable.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      )}
    </section>
  ) : null;

  const capabilitiesSection = capabilities ? (
    <section
      id={capabilities.id}
      className="mvp-inner mvp-section"
      aria-labelledby="service-cap-title"
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
              {cap.enables && cap.enables.length > 0 && (
                <div className="mvp-cap-enables">
                  <p className="mvp-cap-enables-label">What it enables:</p>
                  <ul>
                    {cap.enables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  ) : null;

  const workflowSection = workflow ? (
    <section
      id={workflow.id}
      className="mvp-inner mvp-section"
      aria-labelledby="service-workflow-title"
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
  ) : null;

  const serviceOfferingsSection = serviceOfferings ? (
    <section className="mvp-inner mvp-section" aria-labelledby="service-offerings-title">
      <SectionHeaderBlock label={serviceOfferings.label} title={serviceOfferings.title} />
      <SectionIntro intro={serviceOfferings.intro} />
      <motion.div
        className="mvp-offerings-table"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: EASE_PREMIUM }}
      >
        <div className="mvp-offerings-header" aria-hidden>
          <span>Service</span>
          <span>Business Outcome</span>
        </div>
        {serviceOfferings.items.map((item, i) => (
          <motion.div
            key={item.service}
            className="mvp-glass-card mvp-offerings-row"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: EASE_PREMIUM }}
          >
            <h3 className="mvp-offerings-service">{item.service}</h3>
            <p className="mvp-offerings-outcome">{item.outcome}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  ) : null;

  const interventionsSection = interventions ? (
    <section className="mvp-inner mvp-section" aria-labelledby="service-interventions-title">
      <SectionHeaderBlock label={interventions.label} title={interventions.title} />
      <SectionIntro intro={interventions.intro} />
      <motion.div
        className="mvp-cap-grid mvp-interventions-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {interventions.items.map((item, i) => {
          const Icon = SERVICE_ICONS[item.icon];
          return (
            <motion.article
              key={item.title}
              className="mvp-glass-card mvp-cap-card"
              custom={i}
              variants={fadeUp}
            >
              <div className="mvp-feature-icon">
                <Icon size={20} aria-hidden />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  ) : null;

  const deliverablesSection = deliverables ? (
    <section className="mvp-inner mvp-section" aria-labelledby="service-deliverables-title">
      <SectionHeaderBlock label={deliverables.label} title={deliverables.title} />
      <SectionIntro intro={deliverables.intro} />
      <motion.div
        className="mvp-cap-grid mvp-deliverables-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {deliverables.items.map((item, i) => {
          const Icon = item.icon ? SERVICE_ICONS[item.icon] : null;
          return (
            <motion.article
              key={item.title}
              className="mvp-glass-card mvp-cap-card mvp-deliverable-card"
              custom={i}
              variants={fadeUp}
            >
              {Icon && (
                <div className="mvp-feature-icon">
                  <Icon size={20} aria-hidden />
                </div>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  ) : null;

  const impactSection = impact ? (
    <section className="mvp-inner mvp-section" aria-labelledby="service-impact-title">
      <SectionHeaderBlock label={impact.label ?? ""} title={impact.title} />
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
  ) : null;

  return (
    <>
      {intro ? (
        <section className="mvp-inner mvp-section" aria-labelledby="service-intro-title">
          <motion.div
            className="mvp-about-text mvp-about-text-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </motion.div>
        </section>
      ) : null}

      {overview ? (
      <section className="mvp-inner mvp-section" aria-labelledby="service-overview-title">
        <div className="mvp-about-grid">
          {overview.title ? (
          <motion.h2
            id="service-overview-title"
            className="mvp-about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {overview.title}
          </motion.h2>
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

      {engineeringCapabilities && (
        <section className="mvp-inner mvp-section" aria-labelledby="service-eng-cap-title">
          <SectionHeaderBlock
            label={engineeringCapabilities.label}
            title={engineeringCapabilities.title}
          />
          <SectionIntro intro={engineeringCapabilities.intro} />
          <motion.div
            className="mvp-capabilities-table"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            <div className="mvp-capabilities-header" aria-hidden>
              <span>Capability</span>
              <span>Technical Focus</span>
              <span>Business Outcome</span>
            </div>
            {engineeringCapabilities.items.map((item, i) => (
              <motion.div
                key={item.capability}
                className="mvp-glass-card mvp-capabilities-row"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: EASE_PREMIUM }}
              >
                <h3 className="mvp-capabilities-capability">{item.capability}</h3>
                <p className="mvp-capabilities-focus">{item.technicalFocus}</p>
                <p className="mvp-capabilities-outcome">{item.businessOutcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {isEngineeringLayout ? (
        <>
          {stackSection}
          {interventionsSection}
          {workflowSection}
          {capabilitiesSection}
          {deliverablesSection}
          {serviceOfferingsSection}
        </>
      ) : (
        <>
          {capabilitiesSection}
          {interventionsSection}
          {serviceOfferingsSection}
          {workflowSection}
          {impactSection}
          {stackSection}
          {deliverablesSection}
        </>
      )}

      {outcomes && (
      <section className="mvp-inner mvp-section" aria-labelledby="service-outcomes-title">
        <SectionHeaderBlock label={outcomes.label} title={outcomes.title} />
        <div className="mvp-stats-grid">
          {outcomes.items.map((stat, i) => (
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
      )}

      {projects && (
      <section className="mvp-inner mvp-section" aria-labelledby="service-projects-title">
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
      )}

      {industries && (
      <section className="mvp-inner mvp-section" aria-labelledby="service-industries-title">
        <SectionHeaderBlock label={industries.label} title={industries.title} />
        <motion.div
          className="mvp-industries-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {industries.items.map((industry, i) => {
            const Icon = SERVICE_ICONS[industry.icon];
            return (
              <motion.div
                key={industry.name}
                className="mvp-glass-card mvp-industry-card"
                custom={i}
                variants={fadeUp}
              >
                <div className="mvp-industry-icon">
                  <Icon size={20} aria-hidden />
                </div>
                <span>{industry.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      )}

      {testimonials && (
      <section className="mvp-inner mvp-section" aria-labelledby="service-testimonials-title">
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
      )}

      {faq && (
      <section className="mvp-inner mvp-section" aria-labelledby="service-faq-title">
        <SectionHeaderBlock label={faq.label} title={faq.title} />
        <MVPStudioFAQ items={faq.items} />
      </section>
      )}

      {cta ? (
      <section className="mvp-inner mvp-section" aria-labelledby="service-cta-title">
        <motion.div
          className="mvp-glass-card mvp-cta-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <h2 id="service-cta-title">{cta.title}</h2>
          {cta.paragraphs?.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          {cta.subtitle ? <p>{cta.subtitle}</p> : null}
          <div className="mvp-cta-buttons">
            <Link href={cta.primaryHref} className="mvp-btn-primary">
              {cta.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            {cta.secondaryCta && cta.secondaryHref ? (
            <Link href={cta.secondaryHref} className="mvp-btn-secondary">
              <Download size={16} aria-hidden />
              {cta.secondaryCta}
            </Link>
            ) : null}
          </div>
        </motion.div>
      </section>
      ) : null}
    </>
  );
}

export default memo(ServicePageSections);
