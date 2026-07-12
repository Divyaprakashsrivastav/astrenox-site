"use client";

import { memo, type ComponentType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import type { ServicePageContent, ServiceIconName } from "@/app/content/service-pages/types";
import { EASE_PREMIUM } from "../v2/motion";
import AnimatedCounter from "../mvp-studio/AnimatedCounter";
import MVPStudioFAQ from "../mvp-studio/MVPStudioFAQ";
import { SERVICE_ICONS } from "./service-icons";
import StackCarousel3D from "./StackCarousel3D";
import CapabilitiesShowcase from "./CapabilitiesShowcase";

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

function SectionHeaderBlock({
  label,
  title,
  titleId,
}: {
  label: string;
  title: string;
  titleId?: string;
}) {
  return (
    <div className="mvp-section-header">
      {label ? <p className="mvp-eyebrow">{label}</p> : null}
      {title ? (
        <h2 id={titleId} className="mvp-section-title">
          {title}
        </h2>
      ) : null}
    </div>
  );
}

function SectionIntro({ intro }: { intro?: string }) {
  if (!intro) return null;
  return <p className="mvp-section-intro">{intro}</p>;
}

type WorkflowSection = NonNullable<ServicePageContent["workflow"]>;
type CapabilitiesSection = NonNullable<ServicePageContent["capabilities"]>;
type OverviewSection = NonNullable<ServicePageContent["overview"]>;
type ServiceOfferingsSection = NonNullable<ServicePageContent["serviceOfferings"]>;

function ServicePageSections({
  content,
  OverviewComponent,
  WorkflowComponent,
  CapabilitiesComponent,
  ServiceOfferingsComponent,
}: {
  content: ServicePageContent;
  OverviewComponent?: ComponentType<{ overview: OverviewSection }>;
  WorkflowComponent?: ComponentType<{ workflow: WorkflowSection }>;
  CapabilitiesComponent?: ComponentType<{ capabilities: CapabilitiesSection }>;
  ServiceOfferingsComponent?: ComponentType<{ serviceOfferings: ServiceOfferingsSection }>;
}) {
  const {
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
    capabilitiesAfterInterventions,
    serviceOfferingsAfterImpact,
  } = content;

  const isEngineeringLayout = Boolean(engineeringCapabilities);

  const stackSection = stack ? (
    <section className="mvp-inner mvp-section" aria-labelledby="service-stack-title">
      <SectionHeaderBlock
        label={stack.label}
        title={stack.title}
        titleId="service-stack-title"
      />
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
        <StackCarousel3D
          items={
            stack.items as Array<{
              title: string;
              description: string;
              icon?: ServiceIconName;
            }>
          }
        />
      )}
    </section>
  ) : null;

  const capabilitiesSection = capabilities ? (
    CapabilitiesComponent ? (
      <CapabilitiesComponent capabilities={capabilities} />
    ) : (
      <section
        id={capabilities.id}
        className="mvp-inner mvp-section"
        aria-labelledby="service-cap-title"
      >
        <SectionHeaderBlock
          label={capabilities.label ?? ""}
          title={capabilities.title}
          titleId="service-cap-title"
        />
        <SectionIntro intro={capabilities.intro} />
        <CapabilitiesShowcase
          items={capabilities.items}
          icons={capabilities.items.map((cap) => cap.icon)}
          navLabel={capabilities.title || "Capabilities"}
        />
      </section>
    )
  ) : null;

  const workflowSection = workflow ? (
    WorkflowComponent ? (
      <WorkflowComponent workflow={workflow} />
    ) : (
      <section
        id={workflow.id}
        className="mvp-inner mvp-section"
        aria-labelledby="service-workflow-title"
      >
        <SectionHeaderBlock label={workflow.label ?? ""} title={workflow.title} titleId="service-workflow-title" />
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
    )
  ) : null;

  const serviceOfferingsSection = serviceOfferings ? (
    ServiceOfferingsComponent ? (
      <ServiceOfferingsComponent serviceOfferings={serviceOfferings} />
    ) : (
      <section className="mvp-inner mvp-section" aria-labelledby="service-offerings-title">
        <SectionHeaderBlock
          label={serviceOfferings.label}
          title={serviceOfferings.title}
          titleId="service-offerings-title"
        />
        <SectionIntro intro={serviceOfferings.intro} />
        <div className="mvp-timeline mvp-timeline--roadmap">
          {serviceOfferings.items.map((item, i) => (
            <motion.div
              key={item.service}
              className="mvp-timeline-step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: EASE_PREMIUM }}
            >
              <div className="mvp-glass-card mvp-timeline-step-inner">
                <h3>{item.service}</h3>
                <p>{item.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
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
      <StackCarousel3D items={impact.items} variant="compact" />
    </section>
  ) : null;

  return (
    <>
      {overview ? (
        OverviewComponent ? (
          <OverviewComponent overview={overview} />
        ) : overview.items && overview.items.length > 0 ? (
          <section className="mvp-inner mvp-section" aria-labelledby="service-overview-title">
            <SectionHeaderBlock
              label={overview.label ?? ""}
              title={overview.title ?? ""}
              titleId="service-overview-title"
            />
            <SectionIntro intro={overview.intro} />
            <CapabilitiesShowcase
              items={overview.items}
              icons={overview.items.map((item) => item.icon)}
              navLabel={overview.title || "Product brief"}
              compact
            />
          </section>
        ) : (
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
                {(overview.paragraphs ?? []).map((p, i) => (
                  <motion.article
                    key={p.slice(0, 48)}
                    className="mvp-glass-card mvp-about-paragraph-card"
                    custom={i}
                    variants={fadeUp}
                  >
                    <p>{p}</p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        )
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
          {capabilitiesAfterInterventions ? (
            <>
              {interventionsSection}
              {capabilitiesSection}
            </>
          ) : (
            <>
              {capabilitiesSection}
              {interventionsSection}
            </>
          )}
          {serviceOfferingsAfterImpact ? (
            <>
              {workflowSection}
              {impactSection}
              {serviceOfferingsSection}
            </>
          ) : (
            <>
              {serviceOfferingsSection}
              {workflowSection}
              {impactSection}
            </>
          )}
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
