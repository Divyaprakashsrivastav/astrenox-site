"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { aiEngineeringPageContent as c } from "@/app/content/ai-engineering-content";
import { EASE_PREMIUM } from "../v2/motion";
import AIEngineeringFailurePipeline from "./AIEngineeringFailurePipeline";
import AIEngineeringTechStack from "./AIEngineeringTechStack";
import AIEngineeringHeroBackdrop from "./AIEngineeringHeroBackdrop";
import AIEngineeringStackVisual from "./AIEngineeringStackVisual";
import AIEngineeringTerminal from "./AIEngineeringTerminal";
import "./ai-engineering.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: EASE_PREMIUM },
  }),
};

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="aie-shell">
      <div className="aie-bg" aria-hidden>
        <div className="aie-bg-grid" />
        <div className="aie-bg-gradient" />
        <div className="aie-bg-noise" />
        <div className="aie-bg-fog" />
      </div>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="aie-label">{children}</p>;
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setN(value);
      return;
    }
    let frame = 0;
    const total = 40;
    const tick = () => {
      frame += 1;
      setN(Math.round((value * frame) / total));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="aie-metric-value">
      {n}
      {suffix}
    </span>
  );
}

export default function AIEngineeringPageClient() {
  const pipelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pipelineRef,
    offset: ["start 0.7", "end 0.3"],
  });

  const onCtaMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    e.currentTarget.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const heroTitle = c.hero.title.split("\n");

  return (
    <Shell>
      {/* Hero, cinematic backdrop + deployment console */}
      <section className="aie-hero" aria-labelledby="aie-hero-title">
        <AIEngineeringHeroBackdrop />
        <div className="aie-inner aie-hero-grid">
          <motion.div
            className="aie-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <SectionLabel>{c.hero.label}</SectionLabel>
            <h1 id="aie-hero-title" className="aie-hero-title">
              {heroTitle.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < heroTitle.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p className="aie-hero-sub">{c.hero.subtitle}</p>
            <p className="aie-hero-trust">{c.hero.trustLine}</p>
            <div className="aie-hero-ctas">
              <Link href={c.hero.primaryHref} className="aie-btn aie-btn--primary" onMouseMove={onCtaMove}>
                {c.hero.primaryCta}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href={c.hero.secondaryHref} className="aie-btn aie-btn--ghost">
                {c.hero.secondaryCta}
              </Link>
            </div>
          </motion.div>
          <AIEngineeringTerminal variant="hero" />
        </div>
      </section>

      {/* Section 1, Overview + failure pipeline */}
      <section className="aie-inner aie-block aie-overview" aria-labelledby="aie-overview-title">
        <div className="aie-split aie-overview-split">
          <motion.div
            className="aie-overview-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2 id="aie-overview-title" className="aie-overview-title" variants={fadeUp} custom={0}>
              {c.overview.title}
            </motion.h2>
            {c.overview.paragraphs.map((p, i) => (
              <motion.p key={i} className="aie-overview-body" variants={fadeUp} custom={i + 1}>
                {p}
              </motion.p>
            ))}
          </motion.div>
          <AIEngineeringFailurePipeline />
        </div>
      </section>

      {/* Section 2, Horizontal capability cards */}
      <section className="aie-block aie-block--alt" aria-labelledby="aie-cap-title">
        <div className="aie-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          >
            <SectionLabel>{c.engineeringCapabilities.label}</SectionLabel>
            <h2 id="aie-cap-title">{c.engineeringCapabilities.title}</h2>
            <p className="aie-section-intro"><FormattedText text={c.engineeringCapabilities.intro} /></p>
          </motion.div>
          <div className="aie-hscroll">
            {c.engineeringCapabilities.items.map((item, i) => (
              <motion.article
                key={item.capability}
                className="aie-hcard"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE_PREMIUM }}
                whileHover={{ y: -4 }}
              >
                <span className="aie-hcard-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.capability}</h3>
                <p className="aie-hcard-tech">
                  <strong>Technical Focus:</strong> {item.technicalFocus}
                </p>
                <p className="aie-hcard-outcome">
                  <strong>Business Outcome:</strong> {item.businessOutcome}
                </p>
                {item.businessOutcome.includes("70–90%") && (
                  <p className="aie-hcard-metric" aria-label="Reduce manual effort by 70 to 90 percent">
                    <CountUp value={70} suffix="–90%" /> manual effort reduction
                  </p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3, Architecture stack + animated visual */}
      <section className="aie-inner aie-block aie-stack-section" aria-labelledby="aie-stack-title">
        <div className="aie-split aie-split--reverse">
          <div>
            <SectionLabel>{c.stack.label}</SectionLabel>
            <h2 id="aie-stack-title">{c.stack.title}</h2>
            <p className="aie-section-intro"><FormattedText text={c.stack.intro} /></p>
            <ul className="aie-stack-list">
              {c.stack.items.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: EASE_PREMIUM }}
                >
                  <h3>{item.title}</h3>
                  <p><FormattedText text={item.description} /></p>
                </motion.li>
              ))}
            </ul>
          </div>
          <AIEngineeringStackVisual />
        </div>
      </section>

      {/* Section 4, Code terminal */}
      <section className="aie-block aie-block--terminal" aria-hidden>
        <div className="aie-inner aie-terminal-wrap">
          <AIEngineeringTerminal />
        </div>
      </section>

      {/* Section 5, Use cases horizontal cards */}
      <section className="aie-inner aie-block" aria-labelledby="aie-usecases-title">
        <SectionLabel>{c.interventions.label}</SectionLabel>
        <h2 id="aie-usecases-title">{c.interventions.title}</h2>
        <p className="aie-section-intro"><FormattedText text={c.interventions.intro} /></p>
        <div className="aie-use-grid">
          {c.interventions.items.map((item, i) => (
            <motion.article
              key={item.title}
              className="aie-use-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: EASE_PREMIUM }}
              whileHover={{ y: -3 }}
            >
              <span className="aie-use-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p><FormattedText text={item.description} /></p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Section 6, Deployment pipeline timeline */}
      <section
        ref={pipelineRef}
        className="aie-block aie-block--alt aie-pipeline-section"
        aria-labelledby="aie-lifecycle-title"
      >
        <div className="aie-inner">
          <SectionLabel>{c.workflow.label}</SectionLabel>
          <h2 id="aie-lifecycle-title">{c.workflow.title}</h2>
          <p className="aie-section-intro"><FormattedText text={c.workflow.intro} /></p>
          <div className="aie-pipeline">
            <div className="aie-pipeline-track" aria-hidden>
              <motion.div
                className="aie-pipeline-progress"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
            {c.workflow.steps.map((step, i) => (
              <PipelineStep
                key={step.name}
                step={step}
                index={i}
                total={c.workflow.steps.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7, Metrics dashboard */}
      <section className="aie-inner aie-block aie-metrics" aria-labelledby="aie-security-title">
        <div className="aie-metrics-grid">
          <div className="aie-metrics-copy">
            <SectionLabel>{c.security.label}</SectionLabel>
            <h2 id="aie-security-title">{c.security.title}</h2>
            <p className="aie-section-intro"><FormattedText text={c.security.intro} /></p>
            <ul className="aie-security-list">
              {c.security.items.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p><FormattedText text={item.description} /></p>
                </li>
              ))}
            </ul>
          </div>
          <div className="aie-dashboard" aria-hidden>
            <div className="aie-dashboard-head">{c.stack.items[4]?.title ?? "Observability & MLOps"}</div>
            <div className="aie-dashboard-grid">
              <div className="aie-dash-panel aie-dash-panel--wide">
                <p><FormattedText text={c.stack.items[4]?.description} /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8, Deliverables */}
      <section className="aie-block aie-block--alt" aria-labelledby="aie-deliverables-title">
        <div className="aie-inner">
          <SectionLabel>{c.deliverables.label}</SectionLabel>
          <h2 id="aie-deliverables-title">{c.deliverables.title}</h2>
          <p className="aie-section-intro"><FormattedText text={c.deliverables.intro} /></p>
          <div className="aie-deliver-grid">
            {c.deliverables.items.map((item, i) => (
              <motion.article
                key={item.title}
                className="aie-deliver-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_PREMIUM }}
                whileHover={{ y: -3 }}
              >
                <h3>{item.title}</h3>
                <p><FormattedText text={item.description} /></p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AIEngineeringTechStack />

      {/* Section 10, Engagement comparison */}
      <section className="aie-block aie-block--alt" aria-labelledby="aie-engage-title">
        <div className="aie-inner">
          <SectionLabel>{c.serviceOfferings.label}</SectionLabel>
          <h2 id="aie-engage-title">{c.serviceOfferings.title}</h2>
          <p className="aie-section-intro"><FormattedText text={c.serviceOfferings.intro} /></p>
          <div className="aie-compare">
            {c.serviceOfferings.items.map((item, i) => (
              <motion.article
                key={item.service}
                className="aie-compare-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_PREMIUM }}
              >
                <h3>{item.service}</h3>
                <p><FormattedText text={item.outcome} /></p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="aie-inner aie-block aie-faq" aria-labelledby="aie-faq-title">
        <SectionLabel>{c.faq.label}</SectionLabel>
        <h2 id="aie-faq-title">{c.faq.title}</h2>
        <div className="aie-faq-list">
          {c.faq.items.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="aie-block aie-cta-section" aria-labelledby="aie-cta-title">
        <div className="aie-inner aie-cta-panel">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            <h2 id="aie-cta-title">{c.cta.title}</h2>
            <p className="aie-cta-sub">{c.cta.subtitle}</p>
            <div className="aie-hero-ctas">
              <Link href={c.cta.primaryHref} className="aie-btn aie-btn--primary" onMouseMove={onCtaMove}>
                {c.cta.primaryCta}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href={c.cta.secondaryHref} className="aie-btn aie-btn--ghost">
                {c.cta.secondaryCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Shell>
  );
}

function PipelineStep({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: { name: string; description: string };
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const progress = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0.35, 1]
  );
  const glow = useTransform(progress, (v) => `0 0 ${12 + v * 16}px rgba(124,92,255,${0.2 + v * 0.4})`);

  return (
    <motion.article className="aie-pipeline-step" style={{ opacity: progress }}>
      <div className="aie-pipeline-node">
        <motion.span className="aie-pipeline-dot" style={{ boxShadow: glow }} />
        <span className="aie-pipeline-stage">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <h3>{step.name}</h3>
        <p><FormattedText text={step.description} /></p>
      </div>
    </motion.article>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="aie-faq-item">
      <button type="button" className="aie-faq-trigger" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <ChevronDown size={18} className={open ? "is-open" : ""} aria-hidden />
      </button>
      {open && <div className="aie-faq-body"><p>{a}</p></div>}
    </article>
  );
}
