"use client";

import "./industries-page.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { industriesPageContent as c } from "@/app/content/industries-page-content";
import { EASE_PREMIUM } from "../v2/motion";
import IndustriesHero from "./IndustriesHero";

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
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
      transition={{ duration: 0.6, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

/** Strategic portfolio items: title and body are separate paragraphs in the document. */
function VerbatimSplit({ title, body }: { title: string; body: string }) {
  return (
    <div className="indp-verbatim-split">
      <p className="indp-verbatim indp-verbatim--title">
        <strong>{title}</strong>
      </p>
      <p className="indp-body">{body}</p>
    </div>
  );
}

/** Custom solution items: title and body are one paragraph in the document. */
function VerbatimInline({ title, body }: { title: string; body: string }) {
  return (
    <p className="indp-verbatim">
      <strong>{title}</strong> {body}
    </p>
  );
}

type StrategicId = (typeof c.strategicIndustries)[number]["id"];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
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
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="indp-metric-value">
      {display}
      {suffix}
    </span>
  );
}

export default function IndustriesPageClient() {
  const [activeStrategic, setActiveStrategic] = useState<StrategicId>(c.strategicIndustries[0].id);
  const strategic =
    c.strategicIndustries.find((s) => s.id === activeStrategic) ?? c.strategicIndustries[0];

  const [activeCustom, setActiveCustom] = useState(0);

  const journeyRef = useRef<HTMLDivElement>(null);
  const [journeyProgress, setJourneyProgress] = useState(0);

  useEffect(() => {
    const el = journeyRef.current;
    if (!el) return;
    let raf = 0;
    const measure = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setJourneyProgress(scrolled / total);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(measure);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="indp-page">
      <IndustriesHero />

      {/* Industries We Transform — interactive selector */}
      <section className="indp-section indp-section--transform">
        <div className="indp-wrap">
          <Reveal>
            <p className="indp-eyebrow">Industries We Transform</p>
          </Reveal>
          <div className="indp-transform-layout">
            <nav className="indp-transform-nav" aria-label="Strategic industries">
              {c.strategicIndustries.map((ind, i) => (
                <button
                  key={ind.id}
                  type="button"
                  className={`indp-transform-btn${ind.id === activeStrategic ? " is-active" : ""}`}
                  onMouseEnter={() => setActiveStrategic(ind.id)}
                  onFocus={() => setActiveStrategic(ind.id)}
                  onClick={() => setActiveStrategic(ind.id)}
                >
                  <span className="indp-transform-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="indp-transform-label">{ind.title}</span>
                </button>
              ))}
            </nav>

            <AnimatePresence mode="wait">
              <motion.div
                key={strategic.id}
                className="indp-transform-panel"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.4, ease: EASE_PREMIUM }}
              >
                <h2 className="indp-panel-title">{strategic.title}</h2>

                <div className="indp-split-block">
                  <h3 className="indp-subheading">{strategic.strategicOverview.heading}</h3>
                  <p className="indp-body">{strategic.strategicOverview.body}</p>
                </div>

                <div className="indp-solutions-block">
                  <h3 className="indp-subheading">{strategic.solutionsPortfolio.heading}</h3>
                  <div className="indp-solutions-list">
                    {strategic.solutionsPortfolio.items.map((item, i) => (
                      <motion.div
                        key={item.title}
                        className="indp-solution-row"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.08 + i * 0.08, ease: EASE_PREMIUM }}
                      >
                        <VerbatimSplit title={item.title} body={item.body} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="indp-glass-value">
                  <h3 className="indp-subheading">{strategic.architecturalValue.heading}</h3>
                  <p className="indp-body">{strategic.architecturalValue.body}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Custom solutions — section title */}
      <section className="indp-section indp-section--custom-intro">
        <div className="indp-wrap">
          <Reveal>
            <h2 className="indp-section-title">{c.customSolutions.sectionTitle}</h2>
          </Reveal>
        </div>
      </section>

      {/* Banking — alternating split */}
      <section className="indp-section indp-section--banking">
        <div className="indp-wrap">
          <Reveal className="indp-alt-split">
            <div className="indp-alt-split-copy">
              <h2 className="indp-vertical-title">{c.customSolutions.verticals[0].title}</h2>
              <p className="indp-body indp-body--lead">{c.customSolutions.verticals[0].intro}</p>
            </div>
            <div className="indp-alt-split-aside">
              <h3 className="indp-subheading">{c.customSolutions.verticals[0].aiNative.heading}</h3>
              {c.customSolutions.verticals[0].aiNative.items.map((item) => (
                <VerbatimInline key={item.title} title={item.title} body={item.body} />
              ))}
            </div>
          </Reveal>
          <Reveal className="indp-alt-split indp-alt-split--reverse" delay={0.1}>
            <div className="indp-alt-split-copy">
              <h3 className="indp-subheading">{c.customSolutions.verticals[0].customSoftware.heading}</h3>
            </div>
            <div className="indp-alt-split-aside">
              {c.customSolutions.verticals[0].customSoftware.items.map((item) => (
                <VerbatimInline key={item.title} title={item.title} body={item.body} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Logistics — horizontal scroll */}
      <section className="indp-section indp-section--logistics">
        <div className="indp-wrap">
          <Reveal>
            <h2 className="indp-vertical-title">{c.customSolutions.verticals[1].title}</h2>
            <p className="indp-body indp-body--lead indp-logistics-intro">
              {c.customSolutions.verticals[1].intro}
            </p>
          </Reveal>
        </div>
        <div className="indp-hscroll-track" tabIndex={0}>
          <div className="indp-hscroll-inner">
            <article className="indp-hscroll-card">
              <h3 className="indp-subheading">{c.customSolutions.verticals[1].aiNative.heading}</h3>
              {c.customSolutions.verticals[1].aiNative.items.map((item) => (
                <VerbatimInline key={item.title} title={item.title} body={item.body} />
              ))}
            </article>
            <article className="indp-hscroll-card">
              <h3 className="indp-subheading">{c.customSolutions.verticals[1].customSoftware.heading}</h3>
              {c.customSolutions.verticals[1].customSoftware.items.map((item) => (
                <VerbatimInline key={item.title} title={item.title} body={item.body} />
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* Healthcare custom — sticky journey */}
      <section ref={journeyRef} className="indp-section indp-section--journey">
        <div className="indp-journey-sticky">
          <div className="indp-wrap indp-journey-grid">
            <div className="indp-journey-rail">
              <div className="indp-journey-line">
                <div
                  className="indp-journey-line-fill"
                  style={{ transform: `scaleY(${journeyProgress})` }}
                />
              </div>
              <h2 className="indp-vertical-title">{c.customSolutions.verticals[2].title}</h2>
              <p className="indp-body">{c.customSolutions.verticals[2].intro}</p>
            </div>
            <div className="indp-journey-steps">
              <div className="indp-journey-step">
                <h3 className="indp-subheading">{c.customSolutions.verticals[2].aiNative.heading}</h3>
                {c.customSolutions.verticals[2].aiNative.items.map((item) => (
                  <VerbatimInline key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
              <div className="indp-journey-step">
                <h3 className="indp-subheading">{c.customSolutions.verticals[2].customSoftware.heading}</h3>
                {c.customSolutions.verticals[2].customSoftware.items.map((item) => (
                  <VerbatimInline key={item.title} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail — timeline horizontal */}
      <section className="indp-section indp-section--retail">
        <div className="indp-wrap">
          <Reveal>
            <h2 className="indp-vertical-title">{c.customSolutions.verticals[3].title}</h2>
            <p className="indp-body indp-body--lead">{c.customSolutions.verticals[3].intro}</p>
          </Reveal>
          <div className="indp-timeline">
            <div className="indp-timeline-rail" aria-hidden />
            <article className="indp-timeline-node">
              <span className="indp-timeline-dot" />
              <h3 className="indp-subheading">{c.customSolutions.verticals[3].aiNative.heading}</h3>
              {c.customSolutions.verticals[3].aiNative.items.map((item) => (
                <VerbatimInline key={item.title} title={item.title} body={item.body} />
              ))}
            </article>
            <article className="indp-timeline-node">
              <span className="indp-timeline-dot" />
              <h3 className="indp-subheading">{c.customSolutions.verticals[3].customSoftware.heading}</h3>
              {c.customSolutions.verticals[3].customSoftware.items.map((item) => (
                <VerbatimInline key={item.title} title={item.title} body={item.body} />
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* Manufacturing — glass panels + selector tabs */}
      <section className="indp-section indp-section--manufacturing">
        <div className="indp-wrap">
          <Reveal>
            <div className="indp-mfg-header">
              <h2 className="indp-vertical-title">{c.customSolutions.verticals[4].title}</h2>
              <p className="indp-body indp-body--lead">{c.customSolutions.verticals[4].intro}</p>
            </div>
          </Reveal>
          <div className="indp-mfg-tabs" role="tablist">
            {(["aiNative", "customSoftware"] as const).map((tab, i) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeCustom === i}
                className={`indp-mfg-tab${activeCustom === i ? " is-active" : ""}`}
                onClick={() => setActiveCustom(i)}
              >
                {i === 0
                  ? c.customSolutions.verticals[4].aiNative.heading
                  : c.customSolutions.verticals[4].customSoftware.heading}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCustom}
              className="indp-mfg-panels"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            >
              {(activeCustom === 0
                ? c.customSolutions.verticals[4].aiNative.items
                : c.customSolutions.verticals[4].customSoftware.items
              ).map((item) => (
                <article key={item.title} className="indp-mfg-panel">
                  <VerbatimInline title={item.title} body={item.body} />
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Industry Outcomes — architectural value from each strategic industry */}
      <section className="indp-section indp-section--outcomes">
        <div className="indp-wrap">
          <Reveal>
            <p className="indp-eyebrow">Industry Outcomes</p>
          </Reveal>
          <div className="indp-outcomes-grid">
            {c.strategicIndustries.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.08} className="indp-outcome-card">
                <span className="indp-outcome-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="indp-subheading">{ind.architecturalValue.heading}</h3>
                <p className="indp-outcome-industry">{ind.title}</p>
                <p className="indp-body">{ind.architecturalValue.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Document scope metrics */}
      <section className="indp-section indp-section--metrics">
        <div className="indp-wrap">
          <div className="indp-metrics-row">
            {c.documentMetrics.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 0.06} className="indp-metric">
                <CountUp value={metric.value} />
                <p className="indp-metric-label">{metric.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Ecosystem — verbatim technology references from the document */}
      <section className="indp-section indp-section--tech">
        <div className="indp-wrap">
          <Reveal>
            <p className="indp-eyebrow">Technology Ecosystem</p>
          </Reveal>
        </div>
        <div className="indp-tech-orbit" aria-hidden>
          {c.technologyEcosystem.map((term, i) => (
            <span
              key={term}
              className="indp-tech-chip"
              style={{
                ["--indp-chip-x" as string]: `${12 + (i % 6) * 14}%`,
                ["--indp-chip-y" as string]: `${18 + Math.floor(i / 6) * 22}%`,
                ["--indp-chip-d" as string]: `${i * 0.35}s`,
              }}
            >
              {term}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="indp-section indp-section--cta">
        <div className="indp-cta-backdrop" aria-hidden>
          <div className="indp-cta-glow indp-cta-glow--a" />
          <div className="indp-cta-glow indp-cta-glow--b" />
        </div>
        <div className="indp-wrap indp-cta-inner">
          <Reveal>
            <h2 className="indp-cta-title">{c.cta.headline}</h2>
            <p className="indp-cta-desc">{c.cta.supporting}</p>
            <div className="indp-cta-actions">
              <Link href={c.cta.primaryHref} className="indp-cta-btn indp-cta-btn--primary">
                {c.cta.primary}
              </Link>
              <Link href={c.cta.secondaryHref} className="indp-cta-btn indp-cta-btn--secondary">
                {c.cta.secondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
