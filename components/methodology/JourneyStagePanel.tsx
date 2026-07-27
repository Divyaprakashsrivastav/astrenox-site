"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import IntelligenceModule from "./IntelligenceModule";
import { useReducedMotion } from "../features/useReducedMotion";

type StageItem = string;

type StageData = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  items: readonly StageItem[];
};

interface JourneyStagePanelProps {
  stage: StageData;
  index: number;
  active: boolean;
  visual: ReactNode;
}

export default function JourneyStagePanel({
  stage,
  index,
  active,
  visual,
}: JourneyStagePanelProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 24,
  });
  const lift = useSpring(active ? -6 : 0, { stiffness: 260, damping: 22 });
  const transform = useMotionTemplate`perspective(900px) translateY(${lift}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduced ? undefined : { transform }}
      animate={{
        opacity: active ? 1 : 0.72,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 26 }}
      className={`journey-stage-panel ${active ? "journey-stage-panel-active" : ""}`}
    >
      <div className="journey-stage-border-glow" aria-hidden />
      <div className="journey-stage-inner">
        <header className="journey-stage-header">
          <div>
            <span className="journey-stage-num">STAGE {stage.number}</span>
            <h3 className="journey-stage-title">{stage.title}</h3>
            <p className="journey-stage-tagline">{stage.tagline}</p>
          </div>
          <motion.div
            className="journey-stage-status"
            animate={{ opacity: active ? 1 : 0.4 }}
          >
            {active ? "● LIVE" : "STANDBY"}
          </motion.div>
        </header>

        <div className="journey-stage-visual">{visual}</div>

        <div className="journey-stage-modules">
          {stage.items.map((item, ii) => (
            <IntelligenceModule
              key={item}
              title={item}
              description=""
              index={ii}
              visible={active}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
