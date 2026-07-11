"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";
import IndustryPanelAmbient from "./IndustryPanelAmbient";

type IndustryItem = {
  id: string;
  title: string;
  description: string;
  useCases: readonly string[];
};

type IndustryShowcasePanelProps = {
  industry: IndustryItem;
  icon: LucideIcon;
  index: number;
};

export default function IndustryShowcasePanel({
  industry,
  icon: Icon,
  index,
}: IndustryShowcasePanelProps) {
  const reduced = useReducedMotion();

  return (
    <div className="ind-showcase-panel-shell">
      <AnimatePresence mode="wait">
        <motion.div
          key={industry.id}
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
                <Icon size={28} strokeWidth={1.65} aria-hidden />
              </motion.div>
              <span className="ind-panel-index">{String(index + 1).padStart(2, "0")}</span>
            </motion.div>

            <motion.h3
              className="ind-panel-title"
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: EASE_PREMIUM }}
            >
              {industry.title}
            </motion.h3>

            <motion.p
              className="ind-panel-desc"
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14, ease: EASE_PREMIUM }}
            >
              {industry.description}
            </motion.p>

            <motion.div
              className="ind-panel-block"
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.18, ease: EASE_PREMIUM }}
            >
              <p className="ind-panel-label">Solution Areas &amp; Use Cases</p>
              <ul className="ind-panel-list">
                {industry.useCases.map((useCase) => (
                  <li key={useCase} className="ind-panel-list-item">
                    {useCase}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="ind-panel-cta-wrap"
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24, ease: EASE_PREMIUM }}
            >
              <Link href="/services/industries" className="ind-panel-cta" data-cursor-hover>
                Explore Industry Solutions
                <span className="ind-panel-cta-arrow" aria-hidden>
                  <ArrowRight size={16} strokeWidth={2} />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
