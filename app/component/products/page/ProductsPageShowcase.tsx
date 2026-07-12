"use client";

import "./products-page.css";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  productsPageBrief,
  productsPageGuidelines,
  productsOverviewTitle,
  productsInfrastructureHeading,
  productsInfrastructureIntro,
  productsInfrastructurePlatforms,
  productsBentoItems,
} from "@/app/content/products-page-content";
import { EASE_PREMIUM } from "../../v2/motion";
import { useReducedMotion } from "../../features/useReducedMotion";
import ProductsPageAmbient from "./ProductsPageAmbient";
import ProductsPageHero from "./ProductsPageHero";
import ProductPageVisual from "./ProductPageVisual";

const REVEAL = [
  { x: -24, rotate: -0.8, scale: 0.96 },
  { x: 24, rotate: 0.8, scale: 0.96 },
  { y: 28, rotate: 0.5, scale: 0.94 },
  { x: -18, rotate: -0.5, scale: 0.97 },
  { x: 20, rotate: 0.6, scale: 0.95 },
  { y: 24, rotate: -0.7, scale: 0.96 },
  { x: 0, y: 30, rotate: 1, scale: 0.93 },
];

function BentoCard({
  item,
  index,
}: {
  item: (typeof productsBentoItems)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const reveal = REVEAL[index] ?? REVEAL[0];

  const paragraphs = [
    item.guidelineLine,
    item.description,
    ...("extraDescription" in item && item.extraDescription ? [item.extraDescription] : []),
  ].filter((p, i, arr) => arr.indexOf(p) === i);

  const hasLongContent = paragraphs.length > 1 || item.bullets.length > 0;

  return (
    <motion.article
      ref={ref}
      id={`product-${item.id}`}
      className={`pp-bento-card pp-bento-card--${item.layout} pp-bento-card--fx-${item.effect}${hovered ? " is-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{
        opacity: 0,
        x: reduced ? 0 : reveal.x,
        y: reduced ? 0 : reveal.y ?? 0,
        rotate: reduced ? 0 : reveal.rotate,
        scale: reduced ? 1 : reveal.scale,
      }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
          : {
              opacity: 0,
              x: reduced ? 0 : reveal.x,
              y: reduced ? 0 : reveal.y ?? 0,
              rotate: reduced ? 0 : reveal.rotate,
              scale: reduced ? 1 : reveal.scale,
            }
      }
      transition={{ duration: 0.62, delay: 0.06 + index * 0.08, ease: EASE_PREMIUM }}
      whileHover={reduced ? undefined : { y: -4 }}
    >
      <span className="pp-bento-border" aria-hidden />
      {item.effect === "sweep" ? <span className="pp-bento-sweep" aria-hidden /> : null}

      <div className="pp-bento-visual-wrap">
        <ProductPageVisual visual={item.visual} active={hovered && !reduced} />
        <span className="pp-bento-num">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="pp-bento-body">
        <p className="pp-bento-category">{item.category}</p>
        <h3 className="pp-bento-title">{item.productLine}</h3>

        <div className={`pp-bento-content${expanded ? " is-expanded" : ""}`}>
          {paragraphs.map((p) => (
            <p key={p} className="pp-bento-desc">
              {p}
            </p>
          ))}
          {item.bullets.length > 0 ? (
            <ul className="pp-bento-bullets">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>

        {hasLongContent ? (
          <button
            type="button"
            className="pp-bento-read"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Read Less" : "Read More"}
            <ChevronDown size={14} className={expanded ? "is-flipped" : ""} aria-hidden />
          </button>
        ) : null}

        <div className="pp-bento-chips" aria-label="Technology">
          {item.bullets.length > 0
            ? item.bullets.map((b) => (
                <span key={b} className="pp-bento-chip">
                  {b}
                </span>
              ))
            : null}
        </div>

        <Link href={item.href} className="pp-bento-cta">
          {item.ctaLine}
          <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
}

export default function ProductsPageShowcase() {
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);

  return (
    <div className="pp-canvas">
      <ProductsPageAmbient />

      <div className="pp-inner">
        <ProductsPageHero />

        {/* Products Overview — document brief + guidelines */}
        <section id="products-overview" className="pp-overview" aria-label="Products overview">
          <motion.h2
            className="pp-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {productsOverviewTitle}
          </motion.h2>
          <p className="pp-overview-brief">{productsPageBrief}</p>
          <button
            type="button"
            className="pp-guidelines-toggle"
            onClick={() => setGuidelinesOpen((v) => !v)}
            aria-expanded={guidelinesOpen}
          >
            View product guidelines
            <ChevronDown size={16} className={guidelinesOpen ? "is-flipped" : ""} aria-hidden />
          </button>
          <AnimatePresence initial={false}>
            {guidelinesOpen ? (
              <motion.div
                className="pp-guidelines-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
              >
                <ul className="pp-guidelines-list">
                  {productsPageGuidelines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>

        {/* Bento */}
        <section id="products-bento" className="pp-bento-section" aria-label="Products showcase">
          <motion.h2
            className="pp-section-title pp-section-title--sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {productsPageBrief}
          </motion.h2>
          <div className="pp-bento-grid">
            {productsBentoItems.map((item, i) => (
              <BentoCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* Infrastructure */}
        <section id="infrastructure" className="pp-infra-section">
          <motion.header
            className="pp-infra-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <h2 className="pp-section-title">{productsInfrastructureHeading}</h2>
            <p className="pp-infra-intro">{productsInfrastructureIntro}</p>
          </motion.header>

          <div className="pp-infra-grid">
            {productsInfrastructurePlatforms.map((platform, i) => (
              <motion.article
                key={platform.id}
                id={`infrastructure-${platform.id}`}
                className={`pp-infra-card pp-infra-card--${platform.id}`}
                initial={{ opacity: 0, y: 32, x: i === 1 ? 0 : i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: EASE_PREMIUM }}
                whileHover={{ y: -6 }}
              >
                <span className="pp-infra-border" aria-hidden />
                <div className="pp-infra-visual">
                  <ProductPageVisual
                    visual={
                      platform.id === "solvoris"
                        ? "knowledge"
                        : platform.id === "astrenai"
                          ? "workflow"
                          : "pipeline"
                    }
                    active
                  />
                </div>
                <h3 className="pp-infra-heading">{platform.heading}</h3>
                <p className="pp-infra-desc">{platform.description}</p>
                <ul className="pp-infra-bullets">
                  {platform.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-compare-section" aria-label="Platform comparison">
          <motion.h2
            className="pp-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {productsInfrastructureHeading}
          </motion.h2>
          <div className="pp-compare-grid">
            {productsInfrastructurePlatforms.map((platform, i) => (
              <motion.div
                key={platform.id}
                className="pp-compare-card"
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_PREMIUM }}
              >
                <h3 className="pp-compare-title">{platform.heading}</h3>
                <p className="pp-compare-desc">{platform.description}</p>
                <ul className="pp-compare-list">
                  {platform.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pp-cta-section">
          <motion.div
            className="pp-cta-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE_PREMIUM }}
          >
            <span className="pp-cta-glow" aria-hidden />
            <h2 className="pp-cta-title">{productsInfrastructureHeading}</h2>
            <p className="pp-cta-desc">{productsInfrastructureIntro}</p>
            <div className="pp-cta-actions">
              <Link href="#products-bento" className="pp-btn-primary">
                CTA
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/contact" className="pp-btn-secondary">
                CTA
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
