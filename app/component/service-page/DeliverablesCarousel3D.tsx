"use client";

import { memo, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";

export type DeliverableCarouselItem = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  afterBullets?: string[];
  description?: string;
};

function DeliverableCardBody({ item }: { item: DeliverableCarouselItem }) {
  const paragraphs = item.paragraphs ?? (item.description ? [item.description] : []);

  return (
    <>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      {item.bullets && item.bullets.length > 0 ? (
        <ul className="mvp-cap-enables-list">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {item.afterBullets?.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
    </>
  );
}

function DeliverablesCarousel3D({ items }: { items: DeliverableCarouselItem[] }) {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const count = items.length;

  if (count === 0) return null;

  const safeIndex = activeIndex >= 0 && activeIndex < count ? activeIndex : 0;
  const activeItem = items[safeIndex];

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);

  return (
    <motion.div
      className="svc-deliverable-carousel"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE_PREMIUM }}
    >
      <div className="svc-deliverable-carousel-card">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeItem.title}
            className="mvp-glass-card mvp-cap-card mvp-deliverable-card svc-deliverable-carousel-panel"
            initial={{ opacity: 0, x: reduced ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduced ? 0 : -20 }}
            transition={{ duration: 0.38, ease: EASE_PREMIUM }}
          >
            <h3>{activeItem.title}</h3>
            <DeliverableCardBody item={activeItem} />
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="svc-deliverable-carousel-controls">
        <button
          type="button"
          className="svc-deliverable-carousel-btn"
          onClick={goPrev}
          aria-label="Previous item"
        >
          <ChevronLeft size={18} aria-hidden />
        </button>
        <span className="svc-deliverable-carousel-counter" aria-live="polite">
          {String(safeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <button
          type="button"
          className="svc-deliverable-carousel-btn"
          onClick={goNext}
          aria-label="Next item"
        >
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </motion.div>
  );
}

export default memo(DeliverablesCarousel3D);
