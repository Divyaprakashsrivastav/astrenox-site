"use client";

import "./bms-page.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { bmsPageContent as c } from "@/app/content/bms-page-content";
import { EASE_PREMIUM } from "../v2/motion";
import { useScrollActiveIndex } from "../features/useScrollActiveIndex";
import BmsHero from "./BmsHero";
import BmsArchitectureFlow from "./BmsArchitectureFlow";
import BmsTechMarquee from "./BmsTechMarquee";

const FLOOR_ZONES: Record<string, string> = {
  hvac: "bmsp-zone--a",
  lighting: "bmsp-zone--b",
  fire: "bmsp-zone--c",
  access: "bmsp-zone--d",
  energy: "bmsp-zone--e",
  parking: "bmsp-zone--f",
  cctv: "bmsp-zone--g",
  elevators: "bmsp-zone--h",
  occupancy: "bmsp-zone--i",
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.55, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

function VerbatimInline({ title, body }: { title: string; body: string }) {
  return (
    <p className="bmsp-verbatim">
      <strong>{title}</strong> {body}
    </p>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1300;
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
    <span ref={ref} className="bmsp-count">
      {display}
      {suffix}
    </span>
  );
}

export default function BmsPageClient() {
  const [activeModule, setActiveModule] = useState<(typeof c.buildingModules)[number]["id"]>(
    c.buildingModules[0].id
  );
  const module =
    c.buildingModules.find((m) => m.id === activeModule) ?? c.buildingModules[0];

  const [activeCompare, setActiveCompare] = useState(0);
  const [expandedApp, setExpandedApp] = useState<number | null>(null);

  const workflowRef = useRef<HTMLDivElement>(null);
  const activeWorkflow = useScrollActiveIndex(workflowRef, c.integrationWorkflow.length, {
    itemSelector: "[data-workflow]",
  });

  const compare = c.legacyComparisons[activeCompare];

  return (
    <div className="bmsp-page">
      <BmsHero />

      {/* Modern Building Ecosystem */}
      <section className="bmsp-section bmsp-section--ecosystem">
        <div className="bmsp-wrap">
          <Reveal>
            <p className="bmsp-eyebrow">Modern Building Ecosystem</p>
          </Reveal>
          <div className="bmsp-ecosystem-layout">
            <div className="bmsp-floorplan" aria-label="Interactive building layout">
              {c.buildingModules.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  className={`bmsp-floor-zone ${FLOOR_ZONES[mod.id]}${mod.id === activeModule ? " is-active" : ""}`}
                  onMouseEnter={() => setActiveModule(mod.id)}
                  onFocus={() => setActiveModule(mod.id)}
                  onClick={() => setActiveModule(mod.id)}
                >
                  <span className="bmsp-floor-zone-label">{mod.label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={module.id}
                className="bmsp-ecosystem-panel"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
              >
                <h3 className="bmsp-panel-title">{module.label}</h3>
                <VerbatimInline title={module.title} body={module.body} />
              </motion.div>
            </AnimatePresence>
          </div>

          <Reveal className="bmsp-domain-block" delay={0.08}>
            <h3 className="bmsp-subheading">{c.enterprisePlatform.title}</h3>
            <p className="bmsp-body">{c.enterprisePlatform.intro}</p>
            {c.enterprisePlatform.items.map((item) => (
              <VerbatimInline key={item.title} title={item.title} body={item.body} />
            ))}
          </Reveal>
          <Reveal className="bmsp-domain-block" delay={0.1}>
            <h3 className="bmsp-subheading">{c.coreFacility.title}</h3>
            <p className="bmsp-body">{c.coreFacility.intro}</p>
            {c.coreFacility.items.map((item) => (
              <VerbatimInline key={item.title} title={item.title} body={item.body} />
            ))}
          </Reveal>
          <Reveal className="bmsp-domain-block" delay={0.12}>
            <h3 className="bmsp-subheading">{c.aiReadyFacilities.title}</h3>
            <p className="bmsp-body">{c.aiReadyFacilities.intro}</p>
            {c.aiReadyFacilities.items.map((item) => (
              <VerbatimInline key={item.title} title={item.title} body={item.body} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Legacy Building Problems */}
      <section className="bmsp-section bmsp-section--legacy">
        <div className="bmsp-wrap">
          <Reveal>
            <p className="bmsp-eyebrow">Challenges in Legacy Buildings</p>
          </Reveal>
          <div className="bmsp-legacy-nav">
            {c.legacyComparisons.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`bmsp-legacy-tab${activeCompare === i ? " is-active" : ""}`}
                onClick={() => setActiveCompare(i)}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompare}
              className="bmsp-legacy-compare"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: EASE_PREMIUM }}
            >
              <article className="bmsp-legacy-panel bmsp-legacy-panel--old">
                <span className="bmsp-legacy-tag">Traditional Building</span>
                <p className="bmsp-body">{compare.traditional}</p>
              </article>
              <div className="bmsp-legacy-divider" aria-hidden />
              <article className="bmsp-legacy-panel bmsp-legacy-panel--new">
                <span className="bmsp-legacy-tag">Astrenox Smart Building</span>
                {compare.smart.map((item) => (
                  <VerbatimInline key={item.title} title={item.title} body={item.body} />
                ))}
              </article>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Integration Methodology */}
      <section ref={workflowRef} className="bmsp-section bmsp-section--workflow">
        <div className="bmsp-wrap">
          <Reveal>
            <p className="bmsp-eyebrow">Our Integration Approach</p>
          </Reveal>
        </div>
        <div className="bmsp-workflow-track" tabIndex={0}>
          <div className="bmsp-workflow-inner">
            {c.integrationWorkflow.map((stage, i) => (
              <article
                key={stage.id}
                data-workflow
                className={`bmsp-workflow-card${activeWorkflow === i ? " is-expanded" : ""}`}
              >
                <span className="bmsp-workflow-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="bmsp-workflow-label">{stage.label}</h3>
                <div className="bmsp-workflow-body">
                  {stage.paragraphs.map((para) => (
                    <p key={para} className="bmsp-body bmsp-workflow-para">
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Building Modules */}
      <section className="bmsp-section bmsp-section--connected">
        <div className="bmsp-wrap">
          <Reveal>
            <p className="bmsp-eyebrow">Connected Building Modules</p>
          </Reveal>
          <div className="bmsp-hub-layout">
            <div className="bmsp-hub-grid">
              {c.connectedSystems.map((sys) => (
                <article key={sys.id} className="bmsp-hub-tile" data-system={sys.id}>
                  <span className="bmsp-hub-tile-label">{sys.label}</span>
                  <span className="bmsp-hub-pulse" aria-hidden />
                </article>
              ))}
            </div>
            <div className="bmsp-hub-center">
              <span className="bmsp-hub-center-label">Astrenox Integration Hub</span>
            </div>
          </div>
          <div className="bmsp-hub-details">
            {c.connectedSystems.map((sys) => (
              <VerbatimInline key={sys.id} title={sys.title} body={sys.body} />
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="bmsp-section bmsp-section--architecture">
        <div className="bmsp-wrap">
          <Reveal>
            <p className="bmsp-eyebrow">System Architecture</p>
          </Reveal>
          <BmsArchitectureFlow />
        </div>
      </section>

      {/* Industry Applications */}
      <section className="bmsp-section bmsp-section--applications">
        <div className="bmsp-wrap">
          <Reveal>
            <p className="bmsp-eyebrow">Industry Applications</p>
          </Reveal>
          <div className="bmsp-apps-grid">
            {c.industryApplications.map((app, i) => (
              <Reveal key={app.title} delay={i * 0.06}>
                <article
                  className={`bmsp-app-card${expandedApp === i ? " is-expanded" : ""}`}
                  onMouseEnter={() => setExpandedApp(i)}
                  onFocus={() => setExpandedApp(i)}
                >
                  <h2 className="bmsp-app-title">{app.title}</h2>
                  <p className="bmsp-body bmsp-body--lead">{app.intro}</p>
                  {"items" in app &&
                    app.items?.map((item) => (
                      <VerbatimInline key={item.title} title={item.title} body={item.body} />
                    ))}
                  {"sections" in app &&
                    app.sections?.map((sec) => (
                      <div key={sec.heading} className="bmsp-app-section">
                        <h3 className="bmsp-subheading">{sec.heading}</h3>
                        <p className="bmsp-body">{sec.intro}</p>
                        {sec.items.map((item) => (
                          <VerbatimInline key={item.title} title={item.title} body={item.body} />
                        ))}
                      </div>
                    ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="bmsp-section bmsp-section--outcomes">
        <div className="bmsp-wrap">
          <Reveal>
            <p className="bmsp-eyebrow">Business Outcomes</p>
          </Reveal>
          <div className="bmsp-outcomes-grid">
            {c.businessOutcomes.map((outcome, i) => (
              <Reveal key={i} delay={i * 0.06} className="bmsp-outcome-card">
                <span className="bmsp-outcome-display">{outcome.display}</span>
                <p className="bmsp-outcome-label">{outcome.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bmsp-section bmsp-section--tech">
        <div className="bmsp-wrap">
          <Reveal>
            <p className="bmsp-eyebrow">Technology Ecosystem</p>
          </Reveal>
        </div>
        <BmsTechMarquee />
        <div className="bmsp-wrap">
          <div className="bmsp-metrics-row">
            {c.infrastructureMetrics.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 0.05} className="bmsp-metric">
                <CountUp value={metric.value} />
                <p className="bmsp-metric-label">{metric.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bmsp-section bmsp-section--cta">
        <div className="bmsp-cta-backdrop" aria-hidden>
          <div className="bmsp-cta-ring bmsp-cta-ring--a" />
          <div className="bmsp-cta-ring bmsp-cta-ring--b" />
        </div>
        <div className="bmsp-wrap bmsp-cta-inner">
          <Reveal>
            <h2 className="bmsp-cta-title">{c.cta.headline}</h2>
            <p className="bmsp-cta-desc">{c.cta.supporting}</p>
            <div className="bmsp-cta-actions">
              <Link href={c.cta.primaryHref} className="bmsp-cta-btn bmsp-cta-btn--primary">
                {c.cta.primary}
              </Link>
              <Link href={c.cta.secondaryHref} className="bmsp-cta-btn bmsp-cta-btn--secondary">
                {c.cta.secondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
