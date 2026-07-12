"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whitelabelCommerceContent as c } from "@/app/content/whitelabel-commerce-content";
import { EASE_PREMIUM } from "../v2/motion";
import WhitelabelCommerceHero from "./WhitelabelCommerceHero";
import "./whitelabel-commerce.css";

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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

function MetricCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setN(value);
      return;
    }
    let frame = 0;
    const total = 36;
    const tick = () => {
      frame += 1;
      setN(Math.round((value * frame) / total));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="wlc-metric-num">
      {n}
      {suffix}
    </span>
  );
}

function VerbatimLine({ label, body }: { label: string; body: string }) {
  return (
    <p className="wlc-verbatim">
      <strong>{label}</strong>
      {body}
    </p>
  );
}

export default function WhitelabelCommercePageClient() {
  const [activeIndustry, setActiveIndustry] = useState<(typeof c.genAi.industries)[number]["id"]>(
    c.genAi.industries[0].id,
  );

  return (
    <div className="wlc-page">
      <WhitelabelCommerceHero />

      <section id="wlc-framework" className="wlc-framework" aria-labelledby="wlc-framework-title">
        <div className="wlc-container wlc-framework-grid">
          <div className="wlc-framework-sticky">
            <Reveal>
              <h2 id="wlc-framework-title" className="wlc-section-title">
                {c.framework.title}
              </h2>
            </Reveal>
          </div>
          <div className="wlc-framework-list">
            {c.framework.items.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <article className="wlc-framework-item">
                  <span className="wlc-framework-index">{String(i + 1).padStart(2, "0")}</span>
                  <VerbatimLine label={item.label} body={item.body} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="wlc-solutions" className="wlc-solutions" aria-labelledby="wlc-solutions-title">
        <div className="wlc-container">
          <Reveal>
            <h2 id="wlc-solutions-title" className="wlc-section-title">
              {c.solutions.title}
            </h2>
          </Reveal>
        </div>
        <div className="wlc-timeline-wrap">
          <div className="wlc-timeline-rail" aria-hidden />
          <div className="wlc-timeline-scroll">
            {c.solutions.items.map((sol, i) => (
              <motion.article
                key={sol.id}
                className="wlc-timeline-card"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: EASE_PREMIUM }}
                whileHover={{ y: -6 }}
              >
                <span className="wlc-timeline-step">{String(i + 1).padStart(2, "0")}</span>
                <VerbatimLine label={sol.label} body={sol.body} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="wlc-genai" className="wlc-genai" aria-labelledby="wlc-genai-title">
        <div className="wlc-container wlc-genai-split">
          <Reveal className="wlc-genai-copy">
            <h2 id="wlc-genai-title" className="wlc-section-title">
              {c.genAi.title}
            </h2>
            <p className="wlc-section-lead">{c.genAi.description}</p>
          </Reveal>
          <Reveal className="wlc-genai-visual" delay={0.1}>
            <div className="wlc-arch-diagram" aria-hidden>
              <div className="wlc-arch-ring wlc-arch-ring--outer" />
              <div className="wlc-arch-ring wlc-arch-ring--mid" />
              <div className="wlc-arch-core">Gen AI Core</div>
              {["Agents", "MLOps", "ERP", "CRM"].map((label, i) => (
                <motion.span
                  key={label}
                  className="wlc-arch-node"
                  style={{ "--wlc-angle": `${i * 90}deg` } as CSSProperties}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4 }}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="wlc-pillars" aria-labelledby="wlc-pillars-title">
        <div className="wlc-container">
          <Reveal>
            <h2 id="wlc-pillars-title" className="wlc-section-title wlc-section-title--center">
              {c.genAi.pillars.title}
            </h2>
          </Reveal>
          <div className="wlc-pillars-grid">
            {c.genAi.pillars.items.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <article className="wlc-pillar-card">
                  <span className="wlc-pillar-num">{String(i + 1).padStart(2, "0")}</span>
                  <VerbatimLine label={item.label} body={item.body} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="wlc-industries" className="wlc-industries" aria-labelledby="wlc-industries-title">
        <div className="wlc-container">
          <Reveal>
            <h2 id="wlc-industries-title" className="wlc-section-title">
              {c.genAi.industriesTitle}
            </h2>
          </Reveal>

          <div className="wlc-industry-tabs" role="navigation" aria-label="Industry categories">
            {c.genAi.industries.map((ind) => (
              <a
                key={ind.id}
                href={`#wlc-industry-${ind.id}`}
                className={`wlc-industry-tab${activeIndustry === ind.id ? " is-active" : ""}`}
                onClick={() => setActiveIndustry(ind.id)}
              >
                {ind.title}
              </a>
            ))}
          </div>

          <div className="wlc-industry-stack">
            {c.genAi.industries.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.06}>
                <article id={`wlc-industry-${ind.id}`} className="wlc-industry-panel">
                  <h3 className="wlc-industry-heading">{ind.title}</h3>
                  <ul className="wlc-industry-list">
                    {ind.solutions.map((sol) => (
                      <li key={sol.label} className="wlc-industry-item">
                        <VerbatimLine label={sol.label} body={sol.body} />
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="wlc-metrics" aria-label="Performance metrics referenced in solutions">
            <Reveal className="wlc-metric">
              <MetricCounter value={60} suffix="%" />
              <span className="wlc-metric-label">reducing document processing times by 60%.</span>
            </Reveal>
            <Reveal className="wlc-metric" delay={0.08}>
              <MetricCounter value={80} suffix="%" />
              <span className="wlc-metric-label">accelerates credit evaluations by 80%</span>
            </Reveal>
            <Reveal className="wlc-metric" delay={0.12}>
              <MetricCounter value={40} suffix="%" />
              <span className="wlc-metric-label">driving a 40% lift in direct sales.</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wlc-cta">
        <motion.div
          className="wlc-cta-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE_PREMIUM }}
        >
          <span className="wlc-cta-glow" aria-hidden />
          <h2 className="wlc-cta-title">{c.hero.title}</h2>
          <p className="wlc-cta-desc">{c.hero.description}</p>
          <div className="wlc-cta-actions">
            <Link href={c.hero.secondaryHref} className="wlc-btn wlc-btn--primary wlc-btn--pulse">
              {c.hero.secondaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={c.hero.primaryHref} className="wlc-btn wlc-btn--ghost">
              {c.hero.primaryCta}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
