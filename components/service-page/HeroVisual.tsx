"use client";

import { memo, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useReducedMotion } from "../features/useReducedMotion";
import { EASE_PREMIUM } from "../v2/motion";

const CAROUSEL_INTERVAL_MS = 2800;

export type HeroVisualCard = {
  label: string;
  icon: LucideIcon;
  className: string;
  delay: number;
};

type HeroVisualProps = {
  cards: HeroVisualCard[];
  connections: string[];
};

function HeroVisual({ cards, connections }: HeroVisualProps) {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (reducedMotion || isPaused || cards.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [cards.length, isPaused, reducedMotion]);

  return (
    <div
      className={`mvp-dashboard${isPaused ? " mvp-dashboard--paused" : ""}`}
      aria-hidden
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          resume();
        }
      }}
    >
      <svg className="mvp-dashboard-svg" viewBox="0 0 400 380" fill="none">
        <defs>
          <linearGradient id="mvp-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(79, 140, 255, 0.4)" />
          </linearGradient>
        </defs>
        {connections.map((d) => (
          <motion.path
            key={d}
            d={d}
            className="mvp-dashboard-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE_PREMIUM }}
          />
        ))}
      </svg>

      {cards.map(({ label, icon: Icon, className, delay }, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={label}
            className={`mvp-dashboard-card ${className}${isActive ? " is-active" : " is-inactive"}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: isActive ? 1 : 0.72,
              y: isPaused || reducedMotion ? 0 : isActive ? [0, -8, 0] : [0, -4, 0],
              scale: isActive ? 1.05 : 1,
            }}
            transition={{
              opacity: { duration: 0.45, delay: 0.2 + delay },
              y: {
                duration: isActive ? 3.6 : 4.8,
                repeat: isPaused || reducedMotion ? 0 : Infinity,
                ease: "easeInOut",
                delay,
              },
              scale: { duration: 0.35, ease: EASE_PREMIUM },
            }}
          >
            <Icon size={14} aria-hidden />
            {label}
          </motion.div>
        );
      })}

      <div className="mvp-dashboard-dots" aria-hidden>
        {cards.map((card, index) => (
          <span
            key={card.label}
            className={`mvp-dashboard-dot${index === activeIndex ? " is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(HeroVisual);
