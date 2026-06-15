"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { MOTION } from "../motion/home-motion";

type StageItem = string;

type StageData = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  items: readonly StageItem[];
};

interface SignalJourneyStageProps {
  stage: StageData;
  active: boolean;
  past: boolean;
  icon: LucideIcon;
  visual: ReactNode;
}

export default function SignalJourneyStage({
  stage,
  active,
  past,
  icon: Icon,
  visual,
}: SignalJourneyStageProps) {
  return (
    <motion.article
      className={`signal-journey-stage ${active ? "is-active" : ""} ${past ? "is-past" : ""}`}
      animate={{
        opacity: active ? 1 : past ? 0.88 : 0.58,
        y: active ? -10 : 0,
        scale: active ? 1.02 : 1,
      }}
      transition={{ duration: 0.45, ease: MOTION.lineReveal.ease }}
      data-cursor-hover
    >
      <div className="signal-journey-stage-glow" aria-hidden />
      <div className="signal-journey-stage-inner">
        <header className="signal-journey-stage-head">
          <div className="signal-journey-stage-meta">
            <span className="signal-journey-stage-num">{stage.number}</span>
            <motion.div
              className="signal-journey-stage-icon"
              animate={
                active
                  ? { scale: [1, 1.08, 1], rotate: [0, -2, 0] }
                  : { scale: 1, rotate: 0 }
              }
              transition={
                active
                  ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
            >
              <Icon size={18} strokeWidth={1.75} />
            </motion.div>
          </div>
          <div>
            <h3 className="signal-journey-stage-title">{stage.title}</h3>
            <p className="signal-journey-stage-tagline">{stage.tagline}</p>
          </div>
        </header>

        <div className="signal-journey-stage-visual">{visual}</div>

        <ul className="signal-journey-stage-list">
          {stage.items.map((item, i) => (
            <motion.li
              key={item}
              initial={false}
              animate={
                active
                  ? { opacity: 1, x: 0 }
                  : { opacity: past ? 0.65 : 0.4, x: 0 }
              }
              transition={{
                duration: 0.4,
                delay: active ? 0.08 + i * 0.07 : 0,
                ease: MOTION.lineReveal.ease,
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
