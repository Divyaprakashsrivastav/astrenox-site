"use client";

import "./enterprise-cloud-page.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { enterpriseCloudPageContent as c } from "@/app/content/enterprise-cloud-page-content";
import { EASE_PREMIUM } from "../v2/motion";
import { useScrollActiveIndex } from "../features/useScrollActiveIndex";
import EnterpriseCloudHero from "./EnterpriseCloudHero";
import EnterpriseCloudTechMarquee from "./EnterpriseCloudTechMarquee";
import ArchitectureFlow from "./ArchitectureFlow";

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

function VerbatimInline({ title, body }: { title: string; body: string }) {
  return (
    <p className="ecms-verbatim">
      <strong>{title}</strong> {body}
    </p>
  );
}

function CountUp({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const raw = eased * value;
      setDisplay(decimals > 0 ? parseFloat(raw.toFixed(decimals)) : Math.round(raw));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="ecms-count">
      {decimals > 0 ? display.toFixed(decimals) : display}
      {suffix}
    </span>
  );
}

export default function EnterpriseCloudPageClient() {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [expandedOffering, setExpandedOffering] = useState<number | null>(null);

  const lifecycleRef = useRef<HTMLDivElement>(null);
  const activeLifecycle = useScrollActiveIndex(lifecycleRef, c.lifecycleStages.length, {
    itemSelector: "[data-lifecycle]",
    focusRatio: 0.45,
  });

  const capabilityPanels = [
    {
      title: c.cloudModernization.title,
      body: c.cloudModernization.intro,
      isHeading: true,
    },
    ...c.cloudModernization.items.map((item) => ({
      title: item.title,
      body: item.body,
      isHeading: false,
    })),
    {
      title: c.managedServices.title,
      body: c.managedServices.intro,
      isHeading: true,
    },
    ...c.managedServices.items.map((item) => ({
      title: item.title,
      body: item.body,
      isHeading: false,
    })),
  ];

  const challenge = c.challengePairs[activeChallenge];

  return (
    <div className="ecms-page">
      <EnterpriseCloudHero />

      {/* Cloud Capabilities — floating glass panels */}
      <section className="ecms-section ecms-section--capabilities">
        <div className="ecms-wrap">
          <Reveal>
            <p className="ecms-eyebrow">Cloud Capabilities</p>
          </Reveal>
        </div>
        <div className="ecms-cap-grid">
          {capabilityPanels.map((panel, i) => (
            <Reveal key={`${panel.title}-${i}`} delay={i * 0.04} className="ecms-cap-panel-wrap">
              <article className={`ecms-cap-panel${panel.isHeading ? " ecms-cap-panel--lead" : ""}`}>
                {panel.isHeading ? (
                  <>
                    <h3 className="ecms-cap-title">{panel.title}</h3>
                    <p className="ecms-body">{panel.body}</p>
                  </>
                ) : (
                  <p className="ecms-verbatim">
                    <strong>{panel.title}</strong> {panel.body}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <div className="ecms-wrap">
          <Reveal className="ecms-consult-strip">
            <h3 className="ecms-subheading">{c.consultativeEngineering.title}</h3>
            <p className="ecms-body">{c.consultativeEngineering.body}</p>
          </Reveal>
        </div>
      </section>

      {/* Infrastructure Challenges — problem → solution */}
      <section className="ecms-section ecms-section--challenges">
        <div className="ecms-wrap">
          <Reveal>
            <p className="ecms-eyebrow">Infrastructure Challenges</p>
          </Reveal>
          <div className="ecms-challenge-nav" role="tablist">
            {c.challengePairs.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={activeChallenge === i}
                className={`ecms-challenge-tab${activeChallenge === i ? " is-active" : ""}`}
                onClick={() => setActiveChallenge(i)}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChallenge}
              className="ecms-challenge-compare"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.38, ease: EASE_PREMIUM }}
            >
              <div className="ecms-challenge-problem">
                <span className="ecms-challenge-label">Problem</span>
                <p className="ecms-body">{challenge.problem}</p>
              </div>
              <div className="ecms-challenge-arrow" aria-hidden>
                →
              </div>
              <div className="ecms-challenge-solution">
                <span className="ecms-challenge-label">Solution</span>
                {challenge.solutions.map((item) => (
                  <VerbatimInline key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Managed Operations — horizontal lifecycle */}
      <section ref={lifecycleRef} className="ecms-section ecms-section--lifecycle">
        <div className="ecms-wrap">
          <Reveal>
            <p className="ecms-eyebrow">Our Managed Operations Model</p>
          </Reveal>
        </div>
        <div className="ecms-lifecycle-rail" aria-hidden>
          {c.lifecycleStages.map((stage, i) => (
            <span
              key={stage.id}
              className={`ecms-lifecycle-dot${activeLifecycle === i ? " is-active" : ""}`}
            />
          ))}
        </div>
        <div className="ecms-lifecycle-track" tabIndex={0}>
          <div className="ecms-lifecycle-inner">
            {c.lifecycleStages.map((stage, i) => (
              <article
                key={stage.id}
                data-lifecycle
                className={`ecms-lifecycle-card${activeLifecycle === i ? " is-expanded" : ""}`}
              >
                <span className="ecms-lifecycle-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="ecms-lifecycle-label">{stage.label}</h3>
                <div className="ecms-lifecycle-content">
                  {stage.paragraphs.map((para) => (
                    <p key={para} className="ecms-body ecms-lifecycle-para">
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="ecms-section ecms-section--tech">
        <div className="ecms-wrap">
          <Reveal>
            <p className="ecms-eyebrow">Technology Stack</p>
          </Reveal>
        </div>
        <EnterpriseCloudTechMarquee />
      </section>

      {/* Architecture Workflow */}
      <section className="ecms-section ecms-section--architecture">
        <div className="ecms-wrap">
          <Reveal>
            <p className="ecms-eyebrow">Architecture Workflow</p>
          </Reveal>
          <ArchitectureFlow />
        </div>
      </section>

      {/* Service Offerings */}
      <section className="ecms-section ecms-section--offerings">
        <div className="ecms-wrap">
          <Reveal>
            <p className="ecms-eyebrow">Service Offerings</p>
          </Reveal>
          <div className="ecms-offerings-grid">
            {c.serviceOfferings.map((offering, oi) => (
              <Reveal key={offering.title} delay={oi * 0.08}>
                <article
                  className={`ecms-offering${expandedOffering === oi ? " is-expanded" : ""}`}
                  onMouseEnter={() => setExpandedOffering(oi)}
                  onFocus={() => setExpandedOffering(oi)}
                >
                  <div className="ecms-offering-head">
                    <h2 className="ecms-offering-title">{offering.title}</h2>
                    <span className="ecms-offering-arrow" aria-hidden>
                      →
                    </span>
                  </div>
                  <p className="ecms-body ecms-body--lead">{offering.intro}</p>

                  {"items" in offering &&
                    offering.items?.map((item) => (
                      <VerbatimInline key={item.title} title={item.title} body={item.body} />
                    ))}

                  {"sections" in offering &&
                    offering.sections?.map((sec) => (
                      <div key={sec.heading} className="ecms-offering-block">
                        <h3 className="ecms-subheading">{sec.heading}</h3>
                        <p className="ecms-body">{sec.intro}</p>
                        {sec.items.map((item) => (
                          <VerbatimInline key={item.title} title={item.title} body={item.body} />
                        ))}
                      </div>
                    ))}

                  {"subsections" in offering &&
                    offering.subsections?.map((sub) => (
                      <div key={sub.heading} className="ecms-offering-block">
                        <h3 className="ecms-subheading">{sub.heading}</h3>
                        <p className="ecms-body">{sub.intro}</p>
                        {sub.items.map((item) => (
                          <VerbatimInline key={item.title} title={item.title} body={item.body} />
                        ))}
                      </div>
                    ))}

                  {"footer" in offering && offering.footer && (
                    <div className="ecms-offering-footer">
                      <h3 className="ecms-subheading">{offering.footer.title}</h3>
                      <p className="ecms-body">{offering.footer.body}</p>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="ecms-section ecms-section--outcomes">
        <div className="ecms-wrap">
          <Reveal>
            <p className="ecms-eyebrow">Business Outcomes</p>
          </Reveal>
          <div className="ecms-outcomes-grid">
            {c.businessOutcomes.map((outcome, i) => (
              <Reveal key={i} delay={i * 0.06} className="ecms-outcome-card">
                {outcome.type === "metric" ? (
                  <CountUp value={outcome.value} suffix={outcome.suffix} decimals={2} />
                ) : (
                  <span className="ecms-outcome-phrase">{outcome.display}</span>
                )}
                <p className="ecms-outcome-label">{outcome.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Metrics */}
      <section className="ecms-section ecms-section--metrics">
        <div className="ecms-wrap">
          <Reveal>
            <p className="ecms-eyebrow">Infrastructure Metrics</p>
          </Reveal>
          <div className="ecms-metrics-row">
            {c.infrastructureMetrics.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 0.05} className="ecms-metric">
                <CountUp value={metric.value} />
                <p className="ecms-metric-label">{metric.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ecms-section ecms-section--cta">
        <div className="ecms-cta-backdrop" aria-hidden>
          <div className="ecms-cta-glow ecms-cta-glow--a" />
          <div className="ecms-cta-glow ecms-cta-glow--b" />
        </div>
        <div className="ecms-wrap ecms-cta-inner">
          <Reveal>
            <h2 className="ecms-cta-title">{c.cta.headline}</h2>
            <p className="ecms-cta-desc">{c.cta.supporting}</p>
            <div className="ecms-cta-actions">
              <Link href={c.cta.primaryHref} className="ecms-cta-btn ecms-cta-btn--primary">
                {c.cta.primary}
              </Link>
              <Link href={c.cta.secondaryHref} className="ecms-cta-btn ecms-cta-btn--secondary">
                {c.cta.secondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
