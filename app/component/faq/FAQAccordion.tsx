"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: index * 0.06,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`rounded-xl border bg-surface transition-colors duration-400 ${
              isOpen
                ? "border-primary/35 shadow-sm shadow-primary/5"
                : "border-border hover:border-primary/20"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
              aria-expanded={isOpen}
            >
              <span
                className={`text-sm sm:text-base font-medium leading-snug transition-colors duration-300 ${
                  isOpen ? "text-text" : "text-text/90"
                }`}
              >
                {item.question}
              </span>
              <span className="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <motion.span
                  animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.25 }}
                  className="absolute"
                >
                  <Plus size={14} strokeWidth={1.5} className="text-muted" />
                </motion.span>
                <motion.span
                  animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute"
                >
                  <Minus size={14} strokeWidth={1.5} className="text-primary" />
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ y: -6 }}
                    animate={{ y: 0 }}
                    exit={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6"
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
