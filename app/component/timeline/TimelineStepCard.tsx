"use client";

import {
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { ComponentType } from "react";

interface TimelineStepCardProps {
  index: number;
  step: string;
  title: string;
  description: string;
  Visual: ComponentType<{ progress: MotionValue<number>; index: number }>;
  progress: MotionValue<number>;
  totalSteps: number;
}

export default function TimelineStepCard({
  index,
  step,
  title,
  description,
  Visual,
  progress,
  totalSteps,
}: TimelineStepCardProps) {
  const maxIndex = totalSteps - 1;

  const opacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    if (dist < 0.35) return 1;
    if (dist < 1) return 0.55 + (1 - dist) * 0.35;
    return 0.42;
  });

  const scale = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    if (dist < 0.35) return 1.03;
    return 0.96 + Math.max(0, 0.04 - dist * 0.04);
  });

  const borderColor = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    const t = Math.max(0, 1 - dist * 1.2);
    const r = Math.round(111 + (217 - 111) * (1 - t));
    const g = Math.round(163 + (222 - 163) * (1 - t));
    const b = Math.round(184 + (229 - 184) * (1 - t));
    return `rgba(${r}, ${g}, ${b}, ${0.5 + t * 0.5})`;
  });

  const shadow = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    const t = Math.max(0, 1 - dist * 1.1);
    return `0 ${4 + t * 8}px ${24 + t * 24}px rgba(111, 163, 184, ${0.06 + t * 0.12}), 0 0 ${t * 40}px rgba(111, 163, 184, ${t * 0.15})`;
  });

  const grayscale = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return `grayscale(${Math.min(0.45, dist * 0.35)})`;
  });

  const y = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return dist < 0.4 ? -4 : 0;
  });

  const labelOpacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return dist < 0.5 ? 1 : 0.45;
  });

  const glowOpacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return Math.max(0, 1 - dist * 1.15) * 0.85;
  });

  return (
    <motion.article
      style={{
        opacity,
        scale,
        y,
        borderColor,
        boxShadow: shadow,
        filter: grayscale,
      }}
      whileHover={{
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
      className="group relative flex flex-col rounded-xl border bg-surface/90 backdrop-blur-sm p-5 lg:p-6 min-w-[260px] lg:min-w-0 flex-1"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-b from-primary/10 via-transparent to-transparent"
        aria-hidden
      />

      <motion.span
        style={{ opacity: labelOpacity }}
        className="text-[10px] font-medium tracking-[0.2em] text-primary uppercase mb-3"
      >
        {step}
      </motion.span>

      <h3 className="font-heading text-lg lg:text-xl font-semibold text-text tracking-tight mb-2">
        {title}
      </h3>

      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
        {description}
      </p>

      <div className="h-16 lg:h-20 flex items-center justify-center opacity-90">
        <Visual progress={progress} index={index} />
      </div>
    </motion.article>
  );
}
