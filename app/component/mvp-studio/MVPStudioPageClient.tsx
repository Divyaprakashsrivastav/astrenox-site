"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Bot,
  Database,
  Plug,
  ShieldCheck,
  Brain,
  Rocket,
  Code2,
  Handshake,
} from "lucide-react";
import { mvpStudioContent } from "@/app/content/mvp-studio-content";
import { EASE_PREMIUM } from "../v2/motion";
import "./mvp-studio.css";

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

const ADDON_ICONS = [Bot, Database, Plug, ShieldCheck] as const;
const ADV_ICONS = [Brain, Rocket, Code2, Handshake] as const;

function Canvas({ children }: { children: ReactNode }) {
  return (
    <div className="mvp-canvas">
      <div className="mvp-ambient" aria-hidden />
      {children}
    </div>
  );
}

function StepCard({
  step,
  index,
  total,
}: {
  step: (typeof mvpStudioContent.process.steps)[number];
  index: number;
  total: number;
}) {
  const [open, setOpen] = useState(index === 0);

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
        {index < total - 1 && <span className="mvp-line" />}
      </div>

      <div className="mvp-glass mvp-step-card">
        <button
          type="button"
          className="mvp-step-trigger"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <h3 className="mvp-step-title">{step.heading}</h3>
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
                <p className="mvp-step-desc">{step.description}</p>
                <div className="mvp-meta-grid">
                  <div className="mvp-meta">{step.activities}</div>
                  <div className="mvp-meta">{step.deliverables}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq } = mvpStudioContent;

  return (
    <div className="mvp-faq-list">
      {faq.items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={item.q}
            className="mvp-glass mvp-faq-item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: EASE_PREMIUM }}
          >
            <button
              type="button"
              className="mvp-faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.q}
              <ChevronDown
                size={18}
                className={`mvp-chevron ${isOpen ? "is-open" : ""}`}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="mvp-faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function MVPStudioPageClient() {
  const { brand, process, pricing, addons, advantages, faq } = mvpStudioContent;

  return (
    <Canvas>
      {/* Hero — document brand + process intro only */}
      <section className="mvp-inner mvp-hero" aria-labelledby="mvp-brand">
        <motion.h1
          id="mvp-brand"
          className="mvp-hero-brand"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          {brand}
        </motion.h1>
        <motion.p
          className="mvp-hero-subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
        >
          {process.intro}
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
          <Link href={`#${process.id}`} className="mvp-btn-secondary">
            {process.title}
          </Link>
        </motion.div>
      </section>

      {/* Process Timeline */}
      <section id={process.id} className="mvp-inner mvp-section" aria-labelledby="mvp-process">
        <div className="mvp-section-header">
          <h2 id="mvp-process" className="mvp-section-title">
            {process.title}
          </h2>
          <p className="mvp-section-intro">{process.intro}</p>
        </div>
        <div className="mvp-timeline">
          {process.steps.map((step, i) => (
            <StepCard
              key={step.heading}
              step={step}
              index={i}
              total={process.steps.length}
            />
          ))}
        </div>
      </section>

      {/* Pricing + What's Included */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-pricing">
        <div className="mvp-section-header">
          <h2 id="mvp-pricing" className="mvp-section-title">
            {pricing.title}
          </h2>
          <p className="mvp-section-intro">{pricing.intro}</p>
        </div>

        <div className="mvp-pricing-wrap">
          <div className="mvp-glass mvp-pricing-card">
            <div className="mvp-price-badge">{pricing.price}</div>
            <h3>{pricing.cardTitle}</h3>
            <p className="mvp-pricing-best">{pricing.bestFor}</p>

            <div className="mvp-included">
              <h4>{pricing.includedTitle}</h4>
              <motion.ul
                className="mvp-included-list"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {pricing.included.map((item, i) => (
                  <motion.li key={item} custom={i} variants={fadeUp}>
                    <span className="mvp-check" aria-hidden>
                      <Check size={14} />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed-Fee Add-ons */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-addons">
        <div className="mvp-section-header">
          <h2 id="mvp-addons" className="mvp-section-title">
            {addons.title}
          </h2>
          <p className="mvp-section-intro">{addons.intro}</p>
        </div>
        <motion.div
          className="mvp-grid-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {addons.items.map((item, i) => {
            const Icon = ADDON_ICONS[i];
            return (
              <motion.article key={item} className="mvp-glass mvp-card" custom={i} variants={fadeUp}>
                <div className="mvp-icon">
                  <Icon size={20} aria-hidden />
                </div>
                <p>{item}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* AI-First advantage cards — titles/descriptions from document */}
      <section className="mvp-inner mvp-section" aria-label={advantages.items[0].title}>
        <motion.div
          className="mvp-grid-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.items.map((item, i) => {
            const Icon = ADV_ICONS[i];
            const continuation =
              "continuation" in item ? item.continuation : undefined;
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
                <p>
                  {item.description}
                  {continuation ? ` ${continuation}` : null}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="mvp-inner mvp-section" aria-labelledby="mvp-faq">
        <div className="mvp-section-header">
          <h2 id="mvp-faq" className="mvp-section-title">
            {faq.title}
          </h2>
        </div>
        <FAQ />
      </section>

      {/* CTA — uses document brand + process heading only */}
      <section className="mvp-inner mvp-section" aria-label={brand}>
        <div className="mvp-glass mvp-cta">
          <h2>{brand}</h2>
          <div className="mvp-cta-buttons">
            <Link href="/contact" className="mvp-btn-primary">
              {brand}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={`#${process.id}`} className="mvp-btn-secondary">
              {process.title}
            </Link>
          </div>
        </div>
      </section>
    </Canvas>
  );
}
