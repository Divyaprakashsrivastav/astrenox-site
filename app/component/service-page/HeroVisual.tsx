"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";

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
  return (
    <div className="mvp-dashboard" aria-hidden>
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

      {cards.map(({ label, icon: Icon, className, delay }) => (
        <motion.div
          key={label}
          className={`mvp-dashboard-card ${className}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.2 + delay },
            y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon size={14} aria-hidden />
          {label}
        </motion.div>
      ))}
    </div>
  );
}

export default memo(HeroVisual);
