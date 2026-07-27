"use client";

import { AnimatePresence, motion } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import type { LucideIcon } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";
import IndustryPanelAmbient from "../home/IndustryPanelAmbient";
import type { IndustriesSector } from "@/app/content/industries-content";

type IndustriesSectorPanelProps = {
  sector: IndustriesSector;
  icon: LucideIcon;
  index: number;
};

export default function IndustriesSectorPanel({
  sector,
  icon: Icon,
  index,
}: IndustriesSectorPanelProps) {
  const reduced = useReducedMotion();

  return (
    <div className="ind-showcase-panel-shell">
      <AnimatePresence mode="wait">
        <motion.div
          key={sector.id}
          className="ind-showcase-panel ind-page-panel"
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
              {sector.title}
            </motion.h3>

            <motion.p
              className="ind-page-tagline"
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12, ease: EASE_PREMIUM }}
            >
              {sector.tagline}
            </motion.p>

            <motion.div
              className="ind-page-intro"
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14, ease: EASE_PREMIUM }}
            >
              {sector.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}><FormattedText text={paragraph} /></p>
              ))}
            </motion.div>

            {sector.blocks.map((block, blockIndex) => (
              <motion.div
                key={block.title}
                className="ind-panel-block ind-page-block"
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.42,
                  delay: 0.16 + blockIndex * 0.04,
                  ease: EASE_PREMIUM,
                }}
              >
                <p className="ind-panel-label">{block.title}</p>
                <div className="ind-page-block-copy">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}><FormattedText text={paragraph} /></p>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              className="ind-page-impact"
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.28, ease: EASE_PREMIUM }}
            >
              <p className="ind-panel-label">{sector.impact.label}</p>
              <p className="ind-page-impact-copy"><FormattedText text={sector.impact.description} /></p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
