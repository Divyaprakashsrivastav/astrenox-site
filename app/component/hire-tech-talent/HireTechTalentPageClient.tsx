"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Workflow,
  Zap,
  Users,
  Boxes,
  Crown,
  Rocket,
  Scale,
  Network,
} from "lucide-react";
import { hireTechTalentPageContent } from "@/app/content/hire-tech-talent-content";
import { EASE_PREMIUM } from "../v2/motion";
import TalentOrgVisual from "./TalentOrgVisual";
import "../mvp-studio/mvp-studio.css";
import "./hire-tech-talent.css";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: EASE_PREMIUM },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const CAP_ICONS = [Workflow, Zap] as const;
const ADV_ICONS = [Scale, Network] as const;
const MODEL_ICONS = [Users, Boxes, Crown, Rocket] as const;

function Canvas({ children }: { children: ReactNode }) {
  return (
    <div className="mvp-canvas htt-page">
      <div className="mvp-ambient" aria-hidden />
      {children}
    </div>
  );
}

function ModelCard({
  model,
  index,
}: {
  model: (typeof hireTechTalentPageContent.engagement.models)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const Icon = MODEL_ICONS[index] ?? Boxes;

  return (
    <motion.article
      className="mvp-step"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_PREMIUM }}
    >
      <div className="mvp-rail" aria-hidden>
        <span className="mvp-dot">{index + 1}</span>
        {index < hireTechTalentPageContent.engagement.models.length - 1 && (
          <span className="mvp-line" />
        )}
      </div>

      <div className="mvp-glass mvp-step-card">
        <button
          type="button"
          className="mvp-step-trigger"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="htt-model-trigger-left">
            <span className="mvp-icon htt-model-icon">
              <Icon size={18} aria-hidden />
            </span>
            <h3 className="mvp-step-title">{model.heading}</h3>
          </div>
          <ChevronDown
            size={18}
            className={`mvp-chevron ${open ? "is-open" : ""}`}
            aria-hidden
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="mvp-step-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_PREMIUM }}
            >
              <div className="mvp-step-inner">
                <p className="mvp-step-desc">{model.description}</p>
                <ul className="htt-point-list">
                  {model.points.map((point) => (
                    <li key={point.title}>
                      <span className="mvp-check" aria-hidden>
                        <Check size={14} />
                      </span>
                      <span>
                        <strong>{point.title}:</strong> {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function HireTechTalentPageClient() {
  const { brand, hero, overview, capabilities, advantages, engagement } =
    hireTechTalentPageContent;

  return (
    <Canvas>
      {/* Hero */}
      <section className="mvp-inner htt-hero" aria-labelledby="htt-brand">
        <div className="htt-hero-grid">
          <div className="htt-hero-copy">
            <motion.p
              className="htt-hero-label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            >
              {hero.label}
            </motion.p>
            <motion.h1
              id="htt-brand"
              className="mvp-hero-brand"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              className="mvp-hero-subtitle htt-hero-desc"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
            >
              {hero.description}
            </motion.p>
            <motion.div
              className="mvp-hero-ctas"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE_PREMIUM }}
            >
              <Link href="/contact" className="mvp-btn-primary">
                {brand}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href={`#${engagement.id}`} className="mvp-btn-secondary">
                {engagement.title}
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="htt-hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE_PREMIUM }}
          >
            <TalentOrgVisual />
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="mvp-inner mvp-section" aria-labelledby="htt-overview">
        <div className="htt-overview-grid">
          <motion.h2
            id="htt-overview"
            className="mvp-section-title htt-overview-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {overview.title}
          </motion.h2>
          <motion.div
            className="htt-overview-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_PREMIUM }}
          >
            {overview.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seamless Workflow Integration, Core Services */}
      <section className="mvp-inner mvp-section" aria-labelledby="htt-capabilities">
        <div className="mvp-section-header">
          <h2 id="htt-capabilities" className="mvp-section-title">
            {capabilities.title}
          </h2>
          <p className="mvp-section-intro">{capabilities.intro}</p>
        </div>
        <motion.div
          className="mvp-grid-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {capabilities.items.map((item, i) => {
            const Icon = CAP_ICONS[i];
            return (
              <motion.article
                key={item.title}
                className="mvp-glass mvp-card"
                custom={i}
                variants={fadeUp}
              >
                <div className="mvp-icon">
                  <Icon size={20} aria-hidden />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* Elastic Resource Scaling, Why Choose */}
      <section className="mvp-inner mvp-section" aria-labelledby="htt-advantages">
        <div className="mvp-section-header">
          <h2 id="htt-advantages" className="mvp-section-title">
            {advantages.title}
          </h2>
          <p className="mvp-section-intro">{advantages.intro}</p>
        </div>
        <motion.div
          className="mvp-grid-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.items.map((item, i) => {
            const Icon = ADV_ICONS[i];
            return (
              <motion.article
                key={item.title}
                className="mvp-glass mvp-card"
                custom={i}
                variants={fadeUp}
              >
                <div className="mvp-icon">
                  <Icon size={20} aria-hidden />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* Engagement Models, timeline comparison */}
      <section
        id={engagement.id}
        className="mvp-inner mvp-section"
        aria-labelledby="htt-engagement"
      >
        <div className="mvp-section-header">
          <h2 id="htt-engagement" className="mvp-section-title">
            {engagement.title}
          </h2>
          <p className="mvp-section-intro">{engagement.intro}</p>
        </div>
        <div className="mvp-timeline">
          {engagement.models.map((model, i) => (
            <ModelCard key={model.heading} model={model} index={i} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mvp-inner mvp-section" aria-label={brand}>
        <div className="mvp-glass mvp-cta">
          <h2>{brand}</h2>
          <p className="htt-cta-text">{hero.description}</p>
          <div className="mvp-cta-buttons">
            <Link href="/contact" className="mvp-btn-primary">
              {brand}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={`#${engagement.id}`} className="mvp-btn-secondary">
              {engagement.title}
            </Link>
          </div>
        </div>
      </section>
    </Canvas>
  );
}
