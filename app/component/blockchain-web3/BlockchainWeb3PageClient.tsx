"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Network,
  FileCode2,
  ShieldCheck,
  AppWindow,
  Blocks,
  Coins,
  Wallet,
  KeyRound,
  Link2,
  Database,
  GitBranch,
  Brain,
  Target,
  Lock,
  Plug,
  Sparkles,
  Rocket,
} from "lucide-react";
import { blockchainWeb3PageContent } from "@/app/content/blockchain-web3-content";
import { EASE_PREMIUM } from "../v2/motion";
import BlockchainNetworkVisual from "./BlockchainNetworkVisual";
import "../mvp-studio/mvp-studio.css";
import "./blockchain-web3.css";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: EASE_PREMIUM },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const SERVICE_ICONS = [
  Network,
  FileCode2,
  ShieldCheck,
  AppWindow,
  Blocks,
  Coins,
  Wallet,
  KeyRound,
  Link2,
  Database,
  GitBranch,
  Brain,
] as const;

const ADV_ICONS = [Target, Lock, Plug, Sparkles, Rocket] as const;

function Canvas({ children }: { children: ReactNode }) {
  return (
    <div className="mvp-canvas bc-page">
      <div className="mvp-ambient" aria-hidden />
      <div className="bc-ambient-cyan" aria-hidden />
      {children}
    </div>
  );
}

function ServiceCard({
  item,
  index,
}: {
  item: (typeof blockchainWeb3PageContent.coreServices.items)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const Icon = SERVICE_ICONS[index] ?? Network;

  return (
    <motion.article
      className="mvp-glass bc-service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: EASE_PREMIUM }}
    >
      <button
        type="button"
        className="bc-service-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mvp-icon bc-service-icon">
          <Icon size={18} aria-hidden />
        </span>
        <h3>{item.title}</h3>
        <ChevronDown
          size={18}
          className={`mvp-chevron ${open ? "is-open" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="bc-service-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE_PREMIUM }}
          >
            <div className="bc-service-inner">
              {item.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
              <h4 className="bc-enables-title">{item.enablesTitle}</h4>
              <ul className="bc-enables-list">
                {item.enables.map((line) => (
                  <li key={line}>
                    <span className="mvp-check" aria-hidden>
                      <Check size={14} />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function BlockchainWeb3PageClient() {
  const {
    brand,
    hero,
    solutionBrief,
    coreServices,
    execution,
    advantage,
    outcomes,
  } = blockchainWeb3PageContent;

  return (
    <Canvas>
      {/* Hero — network visualization personality */}
      <section className="mvp-inner bc-hero" aria-labelledby="bc-brand">
        <div className="bc-hero-grid">
          <div className="bc-hero-copy">
            <motion.p
              className="bc-hero-label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            >
              {hero.label}
            </motion.p>
            <motion.h1
              id="bc-brand"
              className="mvp-hero-brand bc-hero-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              className="mvp-hero-subtitle bc-hero-desc"
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
                Schedule Consultation
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href={`#${execution.id}`} className="mvp-btn-secondary">
                Discuss Your Project
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE_PREMIUM }}
          >
            <BlockchainNetworkVisual />
          </motion.div>
        </div>
      </section>

      {/* Solution Brief — stacked brief layout */}
      <section className="mvp-inner mvp-section" aria-labelledby="bc-brief">
        <div className="bc-brief-layout">
          <motion.h2
            id="bc-brief"
            className="mvp-section-title bc-brief-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {solutionBrief.title}
          </motion.h2>
          <motion.div
            className="bc-brief-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE_PREMIUM }}
          >
            {solutionBrief.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Services — expandable service panels */}
      <section className="mvp-inner mvp-section" aria-labelledby="bc-services">
        <div className="mvp-section-header">
          <h2 id="bc-services" className="mvp-section-title">
            {coreServices.title}
          </h2>
        </div>
        <div className="bc-services-grid">
          {coreServices.items.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* How Astrenox Executes — chain / timeline */}
      <section
        id={execution.id}
        className="mvp-inner mvp-section"
        aria-labelledby="bc-execution"
      >
        <div className="mvp-section-header">
          <h2 id="bc-execution" className="mvp-section-title">
            {execution.title}
          </h2>
        </div>
        <div className="bc-exec-intro">
          {execution.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <div className="mvp-timeline bc-exec-timeline">
          {execution.steps.map((step, i) => (
            <motion.div
              key={step}
              className="mvp-step"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: EASE_PREMIUM }}
            >
              <div className="mvp-rail" aria-hidden>
                <span className="mvp-dot">{i + 1}</span>
                {i < execution.steps.length - 1 && <span className="mvp-line" />}
              </div>
              <div className="mvp-glass mvp-step-card bc-exec-step">
                <p>{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Astrenox Advantage */}
      <section className="mvp-inner mvp-section" aria-labelledby="bc-advantage">
        <div className="mvp-section-header">
          <h2 id="bc-advantage" className="mvp-section-title">
            {advantage.title}
          </h2>
        </div>
        <motion.div
          className="bc-advantage-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantage.items.map((item, i) => {
            const Icon = ADV_ICONS[i] ?? Sparkles;
            return (
              <motion.article
                key={item.title}
                className="mvp-glass mvp-card bc-advantage-card"
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

      {/* Business Outcomes */}
      <section className="mvp-inner mvp-section" aria-labelledby="bc-outcomes">
        <div className="mvp-section-header">
          <h2 id="bc-outcomes" className="mvp-section-title">
            {outcomes.title}
          </h2>
        </div>
        <motion.ul
          className="bc-outcomes-list"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {outcomes.items.map((item, i) => (
            <motion.li
              key={item}
              className="mvp-glass bc-outcome-item"
              custom={i}
              variants={fadeUp}
            >
              <span className="mvp-check" aria-hidden>
                <Check size={14} />
              </span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Final CTA — document brand + hero description only */}
      <section className="mvp-inner mvp-section" aria-label={brand}>
        <div className="mvp-glass mvp-cta bc-cta">
          <h2>{brand}</h2>
          <p className="bc-cta-text">{hero.description}</p>
          <div className="mvp-cta-buttons">
            <Link href="/contact" className="mvp-btn-primary">
              Schedule Consultation
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/contact" className="mvp-btn-secondary">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </Canvas>
  );
}
