"use client";

import { memo, useRef, useState } from "react";
import FormattedText from "../../ui/FormattedText";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ProductCatalogItem } from "@/app/content/products-catalog";
import ProductIllustration from "./ProductIllustration";
import FeatureChips from "./FeatureChips";
import DetailAccordion from "./DetailAccordion";
import RippleButton from "./RippleButton";

const slideVariants = {
  enter: {
    opacity: 0,
    x: 48,
    filter: "blur(12px)",
  },
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    x: -48,
    filter: "blur(12px)",
  },
};

const stagger = {
  center: {
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};

const fadeUp = {
  enter: { opacity: 0, y: 20 },
  center: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 32 },
  },
};

type ShowcasePanelProps = {
  item: ProductCatalogItem;
};

function ShowcasePanel({ item }: ShowcasePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 30 });

  function onMove(e: React.MouseEvent) {
    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={item.id}
        ref={panelRef}
        className="products-showcase-panel"
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        onMouseMove={onMove}
        style={
          {
            "--spot-x": `${spot.x}%`,
            "--spot-y": `${spot.y}%`,
          } as React.CSSProperties
        }
        aria-labelledby={`showcase-title-${item.id}`}
      >
        <div className="products-showcase-spotlight" aria-hidden />

        <motion.div className="products-showcase-inner" variants={stagger} initial="enter" animate="center">
          {item.eyebrow && (
            <motion.p className="products-eyebrow" variants={fadeUp}>
              {item.eyebrow}
            </motion.p>
          )}

          <motion.div className="products-showcase-illustration" variants={fadeUp}>
            <ProductIllustration illustrationId={item.illustration} />
          </motion.div>

          <motion.h2
            id={`showcase-title-${item.id}`}
            className="products-showcase-h2"
            variants={fadeUp}
          >
            {item.title}
          </motion.h2>

          {item.subtitle && (
            <motion.p className="products-showcase-subtitle" variants={fadeUp}>
              {item.subtitle}
            </motion.p>
          )}

          <motion.div className="products-showcase-section" variants={fadeUp}>
            <h4 className="products-showcase-label">Overview</h4>
            {item.overview.map((p) => (
              <p key={p} className="products-showcase-body">
                {p}
              </p>
            ))}
          </motion.div>

          {item.timeline && item.timeline.length > 0 && (
            <motion.div className="products-showcase-section" variants={fadeUp}>
              <h4 className="products-showcase-label">Implementation Flow</h4>
              <div className="products-showcase-timeline">
                {item.timeline.map((step, i) => (
                  <div key={step.title} className="products-showcase-timeline-step">
                    <span className="products-showcase-timeline-index">{i + 1}</span>
                    <div>
                      <p className="products-showcase-timeline-title">{step.title}</p>
                      <p className="products-showcase-body"><FormattedText text={step.text} /></p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div variants={fadeUp}>
            <FeatureChips chips={item.chips} />
          </motion.div>

          {item.table && (
            <motion.div className="products-showcase-section" variants={fadeUp}>
              <h4 className="products-showcase-label">Use Cases</h4>
              <div className="products-table-wrap">
                <table className="products-table">
                  <thead>
                    <tr>
                      {item.table.headers.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.table.rows.map((row) => (
                      <tr key={row.join("-")}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {item.useCases && item.useCases.length > 0 && !item.table && (
            <motion.div className="products-showcase-section" variants={fadeUp}>
              <h4 className="products-showcase-label">Use Cases</h4>
              <ul className="products-detail-list">
                {item.useCases.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div variants={fadeUp}>
            <DetailAccordion items={item.accordions} />
          </motion.div>

          {item.deployment && item.deployment.length > 0 && (
            <motion.div className="products-showcase-section" variants={fadeUp}>
              <h4 className="products-showcase-label">Deployment</h4>
              <ul className="products-detail-list">
                {item.deployment.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {item.security && item.security.length > 0 && (
            <motion.div className="products-showcase-section" variants={fadeUp}>
              <h4 className="products-showcase-label">Security</h4>
              <ul className="products-detail-list">
                {item.security.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {item.businessOutcomes && item.businessOutcomes.length > 0 && (
            <motion.div className="products-showcase-section" variants={fadeUp}>
              <h4 className="products-showcase-label">Business Outcomes</h4>
              {item.businessOutcomes.map((b) => (
                <p key={b} className="products-showcase-body">
                  {b}
                </p>
              ))}
            </motion.div>
          )}

          {item.ctas && item.ctas.length > 0 && (
            <motion.div className="products-showcase-ctas" variants={fadeUp}>
              {item.ctas.map((cta) => (
                <RippleButton key={cta.label} href={cta.href} primary={cta.primary}>
                  {cta.label}
                  <ArrowRight size={14} aria-hidden />
                </RippleButton>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.article>
    </AnimatePresence>
  );
}

export default memo(ShowcasePanel);
