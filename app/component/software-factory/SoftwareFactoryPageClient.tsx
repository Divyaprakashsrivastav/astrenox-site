"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { softwareFactoryContent as c } from "@/app/content/software-factory-content";
import { EASE_PREMIUM } from "../v2/motion";
import SoftwareFactoryHero from "./SoftwareFactoryHero";
import SoftwareFactoryHeroBackdrop from "./SoftwareFactoryHeroBackdrop";
import "./software-factory.css";

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
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.58, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

function Bullet({ text }: { text: string }) {
  const colon = text.indexOf(":");
  if (colon === -1) return <p className="asf-body">{text}</p>;
  return (
    <p className="asf-body">
      <strong>{text.slice(0, colon + 1)}</strong>
      {text.slice(colon + 1)}
    </p>
  );
}

export default function SoftwareFactoryPageClient() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const workflowRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: workflowRef });
  const workflowBar = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(i);
        },
        { threshold: 0.35, rootMargin: "-15% 0px -15% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const section1 = c.sections[0];
  const section2 = c.sections[1];
  const section3 = c.sections[2];

  return (
    <div className="asf-page">
      <SoftwareFactoryHero />

      <section
        id="asf-sdlc"
        className="asf-sdlc"
        aria-labelledby="asf-sdlc-title"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <div className="asf-container asf-sdlc-grid">
          <div className="asf-sdlc-rail-col">
            <div className="asf-sdlc-rail-sticky">
              <Reveal>
                <span className="asf-section-num">{section1.number}</span>
                <h2 id="asf-sdlc-title" className="asf-section-title">
                  {section1.title}
                </h2>
                <p className="asf-section-intro">{section1.intro}</p>
              </Reveal>
              <div className="asf-sdlc-rail" aria-hidden>
                {section1.bullets.map((_, i) => (
                  <span
                    key={i}
                    className={`asf-sdlc-rail-step${activeSection === 0 ? " is-active" : ""}`}
                    style={{ "--asf-step": i } as CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="asf-sdlc-bullets">
            {section1.bullets.map((bullet, i) => (
              <Reveal key={bullet} delay={i * 0.04}>
                <article className="asf-sdlc-bullet-card">
                  <span className="asf-bullet-index">{String(i + 1).padStart(2, "0")}</span>
                  <Bullet text={bullet} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="asf-execution"
        className="asf-execution"
        aria-labelledby="asf-execution-title"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <div className="asf-container">
          <Reveal>
            <span className="asf-section-num">{section2.number}</span>
            <h2 id="asf-execution-title" className="asf-section-title">
              {section2.title}
            </h2>
            <p className="asf-section-intro">{section2.intro}</p>
          </Reveal>
        </div>
        <div className="asf-workflow-wrap">
          <div className="asf-workflow-progress" aria-hidden>
            <motion.span className="asf-workflow-progress-bar" style={{ width: workflowBar }} />
          </div>
          <div ref={workflowRef} className="asf-workflow-scroll">
            {section2.bullets.map((bullet, i) => (
              <motion.article
                key={bullet}
                className="asf-workflow-card"
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE_PREMIUM }}
              >
                <Bullet text={bullet} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="asf-infrastructure"
        className="asf-infra"
        aria-labelledby="asf-infra-title"
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <div className="asf-container">
          <Reveal>
            <span className="asf-section-num">{section3.number}</span>
            <h2 id="asf-infra-title" className="asf-section-title">
              {section3.title}
            </h2>
            <p className="asf-section-intro">{section3.intro}</p>
          </Reveal>

          <div className="asf-infra-panels">
            {section3.bullets.map((bullet, i) => (
              <Reveal key={bullet} delay={i * 0.06}>
                <article className="asf-infra-panel">
                  <div className="asf-infra-panel-glow" aria-hidden />
                  <Bullet text={bullet} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="asf-cta" aria-labelledby="asf-cta-title">
        <div className="asf-cta-backdrop">
          <SoftwareFactoryHeroBackdrop />
        </div>
        <motion.div
          className="asf-cta-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE_PREMIUM }}
        >
          <span className="asf-cta-sweep" aria-hidden />
          <h2 id="asf-cta-title" className="asf-cta-title">
            {c.cta.headline}
          </h2>
          <div className="asf-cta-actions">
            <Link href={c.cta.primaryHref} className="asf-btn asf-btn--primary">
              {c.cta.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={c.cta.secondaryHref} className="asf-btn asf-btn--ghost">
              {c.cta.secondaryCta}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
