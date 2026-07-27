"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";

type FAQItem = { q: string; a: string };

export default function MVPStudioFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mvp-faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={item.q}
            className="mvp-glass-card mvp-faq-item"
            data-open={isOpen}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: EASE_PREMIUM }}
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
                className={`mvp-faq-chevron mvp-chevron ${isOpen ? "is-open" : ""}`}
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
                  transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                >
                  <p className="mvp-faq-answer-inner">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
