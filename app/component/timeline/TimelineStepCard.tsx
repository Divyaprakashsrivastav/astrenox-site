"use client";

import {
  motion,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import type { ComponentType } from "react";

const CARD_MIN_HEIGHT = 300;

const SHADOW_REST =
  "0 1px 2px rgba(16,24,40,0.05), 0 2px 8px rgba(16,24,40,0.04), inset 0 1px 0 rgba(255,255,255,0.95)";

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
  const maxIndex = Math.max(totalSteps - 1, 1);

  const activeStrength = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    if (dist < 0.3) return 1;
    if (dist < 0.85) return Math.max(0, 1 - ((dist - 0.3) / 0.55) * 0.85);
    return 0;
  });

  const smoothStrength = useSpring(activeStrength, {
    stiffness: 95,
    damping: 24,
    mass: 0.8,
  });

  const opacity = useTransform(smoothStrength, (t) =>
    t > 0.45 ? 1 : 0.92 + t * 0.08
  );

  const scale = useTransform(smoothStrength, (t) => 0.985 + t * 0.055);

  const y = useTransform(smoothStrength, (t) => -t * 8);

  const borderWidth = useTransform(smoothStrength, (t) =>
    t > 0.45 ? "1.5px" : "1px"
  );

  const borderColor = useTransform(smoothStrength, (t) => {
    const alpha = 0.55 + t * 0.4;
    return t > 0.45
      ? `rgba(125, 46, 104, ${0.45 + t * 0.35})`
      : `rgba(229, 231, 235, ${alpha})`;
  });

  const boxShadow = useTransform(smoothStrength, (t) => {
    if (t < 0.25) return SHADOW_REST;
    return [
      SHADOW_REST,
      `0 8px 24px rgba(16,24,40,${0.06 + t * 0.04})`,
      `0 20px 48px rgba(125,46,104,${0.06 + t * 0.08})`,
      `0 0 0 1px rgba(125,46,104,${0.04 + t * 0.06})`,
    ].join(", ");
  });

  const surfaceGlow = useTransform(smoothStrength, (t) => t);
  const titleColor = useTransform(smoothStrength, (t) =>
    t > 0.45 ? "#0a0a0a" : "#1d2939"
  );
  const descOpacity = useTransform(smoothStrength, (t) => 0.78 + t * 0.22);
  const stepBadgeOpacity = useTransform(smoothStrength, (t) => 0.85 + t * 0.15);

  const iconY = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    if (dist >= 0.45) return 0;
    return Math.sin(p * Math.PI * 3 + index * 0.8) * 2.5 * (1 - dist * 1.2);
  });

  return (
    <motion.article
      style={{
        opacity,
        scale,
        y,
        borderColor,
        boxShadow,
        borderWidth,
        minHeight: CARD_MIN_HEIGHT,
      }}
      whileHover={{
        y: -8,
        rotateX: 1.5,
        rotateY: index % 2 === 0 ? -1.25 : 1.25,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }}
      className="group relative flex h-full w-full flex-col rounded-[1.125rem] border bg-card [transform-style:preserve-3d] will-change-transform"
    >
      <motion.div
        style={{ opacity: surfaceGlow }}
        className="absolute inset-0 rounded-[1.125rem] pointer-events-none bg-gradient-to-b from-white via-card to-[#fafafa]"
        aria-hidden
      />
      <motion.div
        style={{ opacity: surfaceGlow }}
        className="absolute inset-0 rounded-[1.125rem] pointer-events-none bg-gradient-to-br from-primary/[0.06] via-transparent to-secondary/[0.04]"
        aria-hidden
      />
      <motion.div
        style={{ opacity: surfaceGlow }}
        className="absolute -inset-px rounded-[1.125rem] pointer-events-none shadow-[0_0_32px_rgba(125,46,104,0.1)]"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col p-6">
        <motion.div style={{ opacity: stepBadgeOpacity }} className="mb-5">
          <span className="inline-flex items-center rounded-md border border-primary/15 bg-primary/[0.06] px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
            {step}
          </span>
        </motion.div>

        <motion.h3
          style={{ color: titleColor }}
          className="font-heading text-[1.125rem] lg:text-xl font-semibold tracking-[-0.02em] leading-[1.25] mb-4 min-h-[3.5rem] lg:min-h-[3.75rem]"
        >
          {title}
        </motion.h3>

        <motion.p
          style={{ opacity: descOpacity }}
          className="text-[0.8125rem] leading-[1.65] text-muted mb-7 min-h-[4.75rem] flex-1"
        >
          {description}
        </motion.p>

        <motion.div
          style={{ y: iconY }}
          className="mt-auto flex h-[76px] shrink-0 items-center justify-center rounded-xl border border-border bg-[#fafbfc] shadow-[inset_0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-500 group-hover:border-primary/20 group-hover:bg-white group-hover:shadow-[inset_0_1px_2px_rgba(16,24,40,0.03),0_4px_12px_rgba(16,24,40,0.04)]"
        >
          <div className="h-[52px] w-full max-w-[148px] px-3 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <Visual progress={progress} index={index} />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
