"use client";

import "./testimonials-showcase.css";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { homeFaqContent } from "@/app/content/home-faq-content";
import { EASE_PREMIUM } from "../v2/motion";
import TestimonialsAmbient from "./TestimonialsAmbient";

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: readonly string[] };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="tst-faq-item"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
    >
      <button
        type="button"
        className="tst-faq-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <ChevronDown
          size={18}
          className={`tst-faq-chevron${isOpen ? " is-open" : ""}`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            className="tst-faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
          >
            <div className="tst-faq-answer-inner">
              {item.a.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HomeTestimonials() {
  const [openId, setOpenId] = useState<string | null>(
    `${homeFaqContent.categories[0].id}-0`,
  );

  return (
    <section id="testimonials" className="tst-section scroll-mt-28">
      <TestimonialsAmbient />

      <div className="tst-inner">
        <motion.header
          className="tst-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <p className="tst-eyebrow">{homeFaqContent.label}</p>
          <h2 className="tst-title">{homeFaqContent.title}</h2>
          <p className="tst-description">{homeFaqContent.description}</p>
        </motion.header>

        <div className="tst-faq-categories">
          {homeFaqContent.categories.map((category) => (
            <div key={category.id} className="tst-faq-category">
              <motion.h3
                className="tst-faq-category-title"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              >
                {category.title}
              </motion.h3>
              <div className="tst-faq-list">
                {category.items.map((item, i) => {
                  const id = `${category.id}-${i}`;
                  return (
                    <FaqItem
                      key={id}
                      item={item}
                      isOpen={openId === id}
                      onToggle={() => setOpenId(openId === id ? null : id)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
