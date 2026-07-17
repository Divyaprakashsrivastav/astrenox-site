"use client";

import "./testimonials-showcase.css";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  useCallback,
  useMemo,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { homeFaqContent } from "@/app/content/home-faq-content";
import TestimonialsAmbient from "./TestimonialsAmbient";

const FAQ_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const FAQ_DURATION = 0.25;

type FaqEntry = {
  id: string;
  categoryId: string;
  categoryTitle: string;
  q: string;
  a: readonly string[];
};

const ALL_ENTRIES: FaqEntry[] = homeFaqContent.categories.flatMap((category) =>
  category.items.map((item, i) => ({
    id: `${category.id}-${i}`,
    categoryId: category.id,
    categoryTitle: category.title,
    q: item.q,
    a: item.a,
  })),
);

function FaqAnswerPanel({ entry }: { entry: FaqEntry }) {
  return (
    <motion.div
      key={entry.id}
      className="tst-faq-panel-body"
      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
      transition={{ duration: FAQ_DURATION, ease: FAQ_EASE }}
    >
      <span className="tst-faq-panel-shimmer" aria-hidden />
      <p className="tst-faq-panel-category">{entry.categoryTitle}</p>
      <h3 className="tst-faq-panel-question">{entry.q}</h3>
      <div className="tst-faq-panel-scroll">
        <motion.div
          className="tst-faq-panel-copy"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
        >
          {entry.a.map((paragraph) => (
            <motion.p
              key={paragraph}
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: FAQ_DURATION, ease: FAQ_EASE },
                },
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HomeTestimonials() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    homeFaqContent.categories[0].id,
  );
  const [activeId, setActiveId] = useState<string>(ALL_ENTRIES[0].id);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(28);
  const springX = useSpring(mouseX, { stiffness: 42, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 42, damping: 20, mass: 0.8 });
  const glowX = useTransform(springX, (value) => `${value}%`);
  const glowY = useTransform(springY, (value) => `${value}%`);

  const categoryQuestions = useMemo(
    () => ALL_ENTRIES.filter((entry) => entry.categoryId === activeCategoryId),
    [activeCategoryId],
  );

  const activeEntry =
    ALL_ENTRIES.find((entry) => entry.id === activeId) ?? ALL_ENTRIES[0];

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
      mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
    },
    [mouseX, mouseY],
  );

  const selectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const first = ALL_ENTRIES.find((entry) => entry.categoryId === categoryId);
    if (first) setActiveId(first.id);
  };

  return (
    <motion.section
      id="testimonials"
      className="tst-section tst-faq-section scroll-mt-28"
      onMouseMove={handleMouseMove}
      style={
        {
          "--faq-glow-x": glowX,
          "--faq-glow-y": glowY,
        } as CSSProperties
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.75, ease: FAQ_EASE }}
    >
      <TestimonialsAmbient />
      <div className="tst-faq-ambient" aria-hidden>
        <span className="tst-faq-ambient-glow" />
        <span className="tst-faq-ambient-grid" />
        <span className="tst-faq-ambient-noise" />
        <span className="tst-faq-ambient-particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="tst-faq-particle"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </span>
      </div>

      <div className="tst-inner">
        <motion.header
          className="tst-header"
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: FAQ_EASE }}
        >
          <p className="tst-eyebrow">{homeFaqContent.label}</p>
          <motion.h2
            className="tst-title"
            initial={{ letterSpacing: "0.015em" }}
            whileInView={{ letterSpacing: "-0.03em" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: FAQ_EASE }}
          >
            {homeFaqContent.title}
          </motion.h2>
          <motion.p
            className="tst-description"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.12, ease: FAQ_EASE }}
          >
            {homeFaqContent.description}
          </motion.p>
        </motion.header>

        <div className="tst-faq-shell">
          <nav className="tst-faq-cats" aria-label="FAQ categories">
            {homeFaqContent.categories.map((category, i) => {
              const isActive = category.id === activeCategoryId;
              return (
                <motion.button
                  key={category.id}
                  type="button"
                  className={`tst-faq-cat${isActive ? " is-active" : ""}`}
                  onClick={() => selectCategory(category.id)}
                  aria-pressed={isActive}
                  initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.04,
                    ease: FAQ_EASE,
                  }}
                >
                  {category.title}
                </motion.button>
              );
            })}
          </nav>

          <div className="tst-faq-workspace">
            <div className="tst-faq-questions">
              {categoryQuestions.map((entry, i) => {
                const isActive = entry.id === activeId;
                return (
                  <motion.button
                    key={entry.id}
                    type="button"
                    className={`tst-faq-q${isActive ? " is-active" : ""}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveId(entry.id)}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.05,
                      ease: FAQ_EASE,
                    }}
                  >
                    <span className="tst-faq-q-accent" aria-hidden />
                    <span className="tst-faq-q-text">{entry.q}</span>
                    <ArrowUpRight
                      size={16}
                      className="tst-faq-q-arrow"
                      aria-hidden
                    />
                  </motion.button>
                );
              })}
            </div>

            <aside className="tst-faq-panel" aria-live="polite">
              <span className="tst-faq-panel-glow" aria-hidden />
              <AnimatePresence mode="wait" initial={false}>
                <FaqAnswerPanel key={activeEntry.id} entry={activeEntry} />
              </AnimatePresence>
            </aside>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
