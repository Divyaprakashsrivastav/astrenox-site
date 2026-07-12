"use client";

import { memo, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";

export type FanOverviewCard = {
  heading: string;
  body: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE_PREMIUM },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function FanOverviewCards({ cards }: { cards: FanOverviewCard[] }) {
  const reduced = useReducedMotion();
  const count = cards.length;
  const cardMid = (count - 1) / 2;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openFan = useCallback(() => setIsOpen(true), []);
  const closeFan = useCallback(() => setIsOpen(false), []);

  const selectCard = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const activeCard = cards[activeIndex];

  if (reduced) {
    return (
      <motion.div
        className="mvp-about-text mvp-about-text-cards"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {cards.map((card, i) => (
          <motion.article
            key={card.heading}
            className="mvp-glass-card mvp-about-paragraph-card"
            custom={i}
            variants={fadeUp}
          >
            <h4 className="mvp-fan-detail-heading">{card.heading}</h4>
            <p>{card.body}</p>
          </motion.article>
        ))}
      </motion.div>
    );
  }

  const handStyle = {
    "--card-count": count,
    "--card-mid": cardMid,
  } as React.CSSProperties;

  return (
    <motion.div
      className="mvp-about-text mvp-about-text-cards mvp-about-text-cards-fan"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE_PREMIUM }}
    >
      <div
        className={`mvp-fan-hand${isOpen ? " is-open" : ""}${count >= 6 ? " mvp-fan-hand--dense" : ""}`}
        style={handStyle}
        onMouseEnter={openFan}
        onMouseLeave={closeFan}
        onFocus={openFan}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            closeFan();
          }
        }}
      >
        <div className="mvp-fan-stage" role="list" aria-label="Solution brief highlights">
          {cards.map((card, i) => (
            <button
              key={card.heading}
              type="button"
              role="listitem"
              className={`mvp-fan-card${activeIndex === i ? " is-active" : ""}`}
              style={{ "--i": i } as React.CSSProperties}
              aria-pressed={activeIndex === i}
              aria-label={card.heading}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => selectCard(i)}
              onClick={() => selectCard(i)}
            >
              <span className="mvp-fan-card-face mvp-glass-card">
                <span className="mvp-fan-card-index" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mvp-fan-card-heading">{card.heading}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mvp-fan-detail mvp-glass-card" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: EASE_PREMIUM }}
          >
            <span className="mvp-fan-detail-label">
              Point {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <h4 className="mvp-fan-detail-heading">{activeCard.heading}</h4>
            <p className="mvp-fan-detail-text">{activeCard.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default memo(FanOverviewCards);
