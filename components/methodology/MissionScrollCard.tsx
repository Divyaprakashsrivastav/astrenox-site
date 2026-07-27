"use client";

import {
  motion,
  useMotionTemplate,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

export interface CardMotionProps {
  x: MotionValue<string>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  zIndex: MotionValue<number>;
  pointerEvents: MotionValue<"auto" | "none">;
}

interface MissionScrollCardProps {
  motionProps: CardMotionProps;
  children: ReactNode;
}

export default function MissionScrollCard({ motionProps, children }: MissionScrollCardProps) {
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);

  const transform = useMotionTemplate`translate3d(${motionProps.x}, 0, 0) scale(${motionProps.scale})`;

  if (reduced) {
    return <article className="mission-card">{children}</article>;
  }

  return (
    <motion.article
      ref={cardRef}
      className="mission-card mission-card--interactive"
      style={{
        transform,
        opacity: motionProps.opacity,
        zIndex: motionProps.zIndex,
        pointerEvents: motionProps.pointerEvents,
      }}
    >
      <div className="mission-card-glow" aria-hidden />
      {children}
    </motion.article>
  );
}

export function useCardPointerEvents(opacity: MotionValue<number>) {
  return useTransform(opacity, (v) => (v > 0.55 ? "auto" : "none"));
}

export function useCardVisibility(opacity: MotionValue<number>) {
  return useTransform(opacity, (v) => (v > 0.02 ? "visible" : "hidden"));
}
