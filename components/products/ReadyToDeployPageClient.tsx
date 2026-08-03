"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  ShoppingCart,
  FlaskConical,
  Megaphone,
  Store,
  Building2,
  GraduationCap,
  Cpu,
  Factory,
  HeartPulse,
  TrendingUp,
  BarChart3,
  Fuel,
  Package,
  Shirt,
  Sparkles,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { readyToDeployContent as c } from "@/app/content/products/ready-to-deploy-content";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";
import IndustryPanelAmbient from "../home/IndustryPanelAmbient";
import DeliverablesCarousel3D from "../service-page/DeliverablesCarousel3D";
import "../home/industries-sector.css";
import "../mvp-studio/mvp-studio.css";
import "../service-page/service-page-extra.css";
import "./ready-to-deploy.css";

const industryIcons: LucideIcon[] = [
  Landmark, // BFSI
  ShoppingCart, // E-Commerce
  FlaskConical, // Life Sciences
  Megaphone, // Marketing Technology
  Store, // Retail Operations Management
  Building2, // Real Estate
  GraduationCap, // EdTech
  Cpu, // Information Technology
  Factory, // Manufacturing
  HeartPulse, // Healthcare
  TrendingUp, // Sales
  BarChart3, // Data Analytics
  Fuel, // Energy, Oil and Gas
  Package, // Consumer Products
  Shirt, // Fashion
  Sparkles, // Personal Development
  Plane, // Travel and Tourism
];

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

export default function ReadyToDeployPageClient() {
  const reduced = useReducedMotion();
  const [activeIndustry, setActiveIndustry] = useState<
    (typeof c.genAiBoilerplates.industries)[number]["id"]
  >(c.genAiBoilerplates.industries[0].id);

  const activeIndex = c.genAiBoilerplates.industries.findIndex(
    (ind) => ind.id === activeIndustry,
  );
  const activeInd = c.genAiBoilerplates.industries[activeIndex >= 0 ? activeIndex : 0];
  const ActiveIcon = industryIcons[activeIndex >= 0 ? activeIndex : 0] ?? Landmark;

  const selectIndustry = useCallback((id: typeof activeIndustry) => {
    setActiveIndustry(id);
  }, []);

  return (
    <div className="rtd-page">
      <div className="rtd-ambient" aria-hidden />

      <section className="rtd-hero" aria-labelledby="rtd-hero-title">
        <motion.div
          className="rtd-hero-inner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE_PREMIUM }}
        >
          <p className="rtd-label">{c.hero.label}</p>
          <h1 id="rtd-hero-title" className="rtd-title">
            {c.hero.title}
          </h1>
          <p className="rtd-lead"><FormattedText text={c.hero.description} /></p>
          <div className="rtd-actions">
            <Link href={c.hero.primaryHref} className="rtd-btn rtd-btn--primary">
              {c.hero.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={c.hero.secondaryHref} className="rtd-btn rtd-btn--ghost">
              {c.hero.secondaryCta}
            </Link>
          </div>
        </motion.div>
      </section>

      <section
        id={c.appliedPlatforms.id}
        className="rtd-section"
        aria-labelledby="rtd-platforms-title"
      >
        <div className="rtd-container">
          <Reveal>
            {c.appliedPlatforms.label ? (
              <p className="rtd-section-label">{c.appliedPlatforms.label}</p>
            ) : null}
            <h2 id="rtd-platforms-title" className="rtd-section-title">
              {c.appliedPlatforms.title}
            </h2>
            <p className="rtd-section-intro"><FormattedText text={c.appliedPlatforms.intro} /></p>
          </Reveal>
          <div className="rtd-platform-grid">
            {c.appliedPlatforms.platforms.map((platform, i) => (
              <Reveal key={platform.id} delay={i * 0.08}>
                <article className="rtd-platform-card">
                  <h3 className="rtd-platform-name">{platform.name}</h3>
                  <p className="rtd-platform-desc"><FormattedText text={platform.description} /></p>
                  <p className="rtd-platform-consulting">{platform.consulting}</p>
                  <Link href={platform.href} className="rtd-link">
                    {platform.cta}
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id={c.genAiBoilerplates.id}
        className="rtd-section rtd-section--genai"
        aria-labelledby="rtd-genai-title"
      >
        <div className="rtd-container">
          <Reveal>
            {c.genAiBoilerplates.label ? (
              <p className="rtd-section-label">{c.genAiBoilerplates.label}</p>
            ) : null}
            <h2 id="rtd-genai-title" className="rtd-section-title">
              {c.genAiBoilerplates.title}
            </h2>
            <h3 className="rtd-subtitle">{c.genAiBoilerplates.industriesTitle}</h3>
          </Reveal>

          <div className="ind-showcase rtd-industry-showcase">
            <nav className="ind-showcase-nav" aria-label="Industry categories">
              <ul className="ind-nav-list">
                {c.genAiBoilerplates.industries.map((ind, i) => {
                  const isActive = ind.id === activeIndustry;
                  const Icon = industryIcons[i] ?? Landmark;

                  return (
                    <li key={ind.id} className="ind-nav-item">
                      <button
                        type="button"
                        className={`ind-nav-btn${isActive ? " is-active" : ""}`}
                        onMouseEnter={() => selectIndustry(ind.id)}
                        onFocus={() => selectIndustry(ind.id)}
                        onClick={() => selectIndustry(ind.id)}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span className="ind-nav-indicator" aria-hidden />
                        <span className="ind-nav-num">{String(i + 1).padStart(2, "0")}</span>
                        <span className="ind-nav-icon" aria-hidden>
                          <Icon size={16} strokeWidth={1.75} />
                        </span>
                        <span className="ind-nav-label">{ind.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="ind-showcase-panel-shell">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeInd.id}
                  id={`rtd-industry-${activeInd.id}`}
                  className="ind-showcase-panel"
                  initial={{ opacity: 0, x: reduced ? 0 : 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduced ? 0 : -20 }}
                  transition={{ duration: 0.42, ease: EASE_PREMIUM }}
                  layout
                >
                  <span className="ind-panel-border" aria-hidden />
                  <IndustryPanelAmbient />

                  <div className="ind-panel-scroll">
                    <motion.div
                      className="ind-panel-icon-wrap"
                      initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.06, ease: EASE_PREMIUM }}
                    >
                      <motion.div
                        className="ind-panel-icon"
                        animate={reduced ? {} : { y: [0, -5, 0] }}
                        transition={{
                          duration: 4.2,
                          repeat: reduced ? 0 : Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ActiveIcon size={28} strokeWidth={1.65} aria-hidden />
                      </motion.div>
                      <span className="ind-panel-index">
                        {String((activeIndex >= 0 ? activeIndex : 0) + 1).padStart(2, "0")}
                      </span>
                    </motion.div>

                    <motion.h4
                      className="ind-panel-title"
                      initial={{ opacity: 0, y: reduced ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: EASE_PREMIUM }}
                    >
                      {activeInd.title}
                    </motion.h4>

                    <motion.div
                      className="ind-panel-block"
                      initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.42, delay: 0.16, ease: EASE_PREMIUM }}
                    >
                      <p className="ind-panel-label">Ready-to-Deploy Solutions</p>
                      <ul className="ind-panel-list">
                        {activeInd.solutions.map((sol) => (
                          <li key={sol} className="ind-panel-list-item">
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section
        id={c.customCrm.id}
        className="rtd-section rtd-section--crm"
        aria-labelledby="rtd-crm-title"
      >
        <div className="mvp-inner">
          <Reveal>
            <div className="mvp-section-header">
              {c.customCrm.label ? (
                <p className="mvp-eyebrow">{c.customCrm.label}</p>
              ) : null}
              <h2 id="rtd-crm-title" className="mvp-section-title">
                {c.customCrm.title}
              </h2>
            </div>
            <p className="mvp-section-intro">{c.customCrm.subtitle}</p>
            <p className="mvp-section-intro rtd-crm-description"><FormattedText text={c.customCrm.description} /></p>
          </Reveal>
          <DeliverablesCarousel3D
            items={c.customCrm.subsections.map((sub) => ({
              title: sub.title,
              description: sub.body,
              photo: sub.photo,
            }))}
          />
        </div>
      </section>

      <section className="rtd-cta">
        <Reveal className="rtd-cta-inner">
          <h2 className="rtd-cta-title">{c.cta.title}</h2>
          <p className="rtd-cta-desc"><FormattedText text={c.cta.description} /></p>
          <div className="rtd-actions rtd-actions--center">
            <Link href={c.cta.primaryHref} className="rtd-btn rtd-btn--primary">
              {c.cta.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={c.cta.secondaryHref} className="rtd-btn rtd-btn--ghost">
              {c.cta.secondaryCta}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
