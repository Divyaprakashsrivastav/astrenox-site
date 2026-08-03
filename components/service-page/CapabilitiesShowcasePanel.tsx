"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";
import IndustryPanelAmbient from "../home/IndustryPanelAmbient";
import FormattedText from "../ui/FormattedText";

export type CapabilityShowcaseItem = {
  title: string;
  description?: string;
  paragraphs?: string[];
  enables?: string[];
  enablesLabel?: string;
  afterEnables?: string[];
};

type CapabilitiesShowcasePanelProps = {
  item: CapabilityShowcaseItem;
  icon: LucideIcon;
  index: number;
};

export default function CapabilitiesShowcasePanel({
  item,
  icon: Icon,
  index,
}: CapabilitiesShowcasePanelProps) {
  const reduced = useReducedMotion();
  const body = item.paragraphs ?? (item.description ? [item.description] : []);

  return (
    <div className="ind-showcase-panel-shell">
      <div className="ind-showcase-panel-track">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.title}
            className="ind-showcase-panel"
          initial={{ opacity: 0, x: reduced ? 0 : 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reduced ? 0 : -20 }}
          transition={{ duration: 0.42, ease: EASE_PREMIUM }}
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
                <Icon size={18} strokeWidth={1.65} aria-hidden />
              </motion.div>
              <span className="ind-panel-index">{String(index + 1).padStart(2, "0")}</span>
            </motion.div>

            <motion.h3
              className="ind-panel-title"
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: EASE_PREMIUM }}
            >
              {item.title}
            </motion.h3>

            {body.map((paragraph, i) => (
              <motion.p
                key={paragraph.slice(0, 48)}
                className="ind-panel-desc"
                initial={{ opacity: 0, y: reduced ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 + i * 0.04, ease: EASE_PREMIUM }}
              >
                <FormattedText text={paragraph} />
              </motion.p>
            ))}

            {item.enables && item.enables.length > 0 ? (
              <motion.div
                className="ind-panel-block"
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.18, ease: EASE_PREMIUM }}
              >
                <p className="ind-panel-label">{item.enablesLabel ?? "What it enables"}</p>
                <ul className="ind-panel-list">
                  {item.enables.map((entry) => (
                    <li key={entry} className="ind-panel-list-item">
                      {entry}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}

            {item.afterEnables?.map((paragraph, i) => (
              <motion.p
                key={paragraph.slice(0, 48)}
                className="ind-panel-desc"
                initial={{ opacity: 0, y: reduced ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.22 + i * 0.04, ease: EASE_PREMIUM }}
              >
                <FormattedText text={paragraph} />
              </motion.p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
}
