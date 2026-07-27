"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Quote } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";
import FormattedText from "../ui/FormattedText";
import { useReducedMotion } from "../features/useReducedMotion";

type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  projectType: string;
  outcome: string;
};

type TestimonialShowcasePanelProps = {
  item: TestimonialItem;
  panelKey: string;
};

export default function TestimonialShowcasePanel({
  item,
  panelKey,
}: TestimonialShowcasePanelProps) {
  const reduced = useReducedMotion();

  return (
    <div className="tst-panel-area">
      <AnimatePresence mode="wait">
        <motion.article
          key={panelKey}
          className="tst-panel"
          initial={{ opacity: 0, y: reduced ? 0 : 28, x: reduced ? 0 : 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, x: reduced ? 0 : -24, y: reduced ? 0 : 8 }}
          transition={{ duration: 0.48, ease: EASE_PREMIUM }}
        >
          <span className="tst-panel-border" aria-hidden />

          <motion.div
            className="tst-panel-float"
            animate={reduced ? {} : { y: [0, -3, 0] }}
            transition={{
              duration: 6,
              repeat: reduced ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="tst-panel-scroll">
              <motion.div
                className="tst-quote-mark"
                aria-hidden
                animate={reduced ? {} : { y: [0, -5, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: reduced ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              >
                <Quote size={44} strokeWidth={1.25} />
              </motion.div>

              <blockquote className="tst-panel-quote">
                &ldquo;<FormattedText text={item.quote} />&rdquo;
              </blockquote>

              <footer className="tst-panel-footer">
                <p className="tst-panel-author">{item.author}</p>
                <p className="tst-panel-role">{item.role}</p>

                <div className="tst-panel-tags">
                  <motion.span
                    className="tst-tag tst-tag--industry"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.38, delay: 0.1, ease: EASE_PREMIUM }}
                  >
                    {item.projectType}
                  </motion.span>
                  <motion.span
                    className="tst-tag tst-tag--outcome"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.38, delay: 0.16, ease: EASE_PREMIUM }}
                  >
                    {item.outcome}
                  </motion.span>
                </div>

                <div className="tst-verified-badge">
                  <BadgeCheck size={14} strokeWidth={2.25} aria-hidden />
                  Verified Client
                </div>
              </footer>
            </div>
          </motion.div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
