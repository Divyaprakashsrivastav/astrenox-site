"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

interface VisualProps {
  progress: MotionValue<number>;
  index: number;
}

const MAX_INDEX = 4;

function useStepMotion(progress: MotionValue<number>, index: number) {
  const floatY = useTransform(progress, (p) => {
    const dist = Math.abs(p * MAX_INDEX - index);
    return Math.max(0, 1 - dist * 1.4) * -5;
  });

  const emphasis = useTransform(progress, (p) => {
    const dist = Math.abs(p * MAX_INDEX - index);
    return Math.max(0.35, 1 - dist * 0.5);
  });

  return { floatY, emphasis };
}

export function ReviewVisual({ progress, index }: VisualProps) {
  const { floatY, emphasis } = useStepMotion(progress, index);

  return (
    <motion.svg
      viewBox="0 0 120 80"
      className="w-full h-full"
      style={{ y: floatY }}
      aria-hidden
    >
      <rect x="8" y="12" width="104" height="56" rx="6" fill="#F7F8FA" stroke="#D9DEE5" strokeWidth="1" />
      <motion.circle
        cx="60"
        cy="40"
        r="14"
        fill="none"
        stroke="#7D2E68"
        strokeWidth="1"
        style={{ opacity: emphasis }}
      />
      {[24, 44, 64, 84].map((x) => (
        <rect key={x} x={x} y="58" width="12" height="4" rx="1" fill="#D9DEE5" opacity="0.6" />
      ))}
    </motion.svg>
  );
}

export function DeliveryVisual({ progress, index }: VisualProps) {
  const { floatY, emphasis } = useStepMotion(progress, index);

  return (
    <motion.svg viewBox="0 0 120 80" className="w-full h-full" style={{ y: floatY }} aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={14 + i * 34}
          y={22}
          width="28"
          height="36"
          rx="4"
          fill="#F7F8FA"
          stroke="#7D2E68"
          strokeWidth="1"
          style={{ opacity: emphasis }}
        />
      ))}
      <motion.line
        x1="28"
        y1="40"
        x2="90"
        y2="40"
        stroke="#7D2E68"
        strokeWidth="1"
        strokeDasharray="3 4"
        style={{ opacity: emphasis }}
      />
    </motion.svg>
  );
}

export function ProductionVisual({ progress, index }: VisualProps) {
  const { floatY, emphasis } = useStepMotion(progress, index);

  return (
    <motion.svg viewBox="0 0 120 80" className="w-full h-full" style={{ y: floatY }} aria-hidden>
      <motion.rect
        x="20"
        y="20"
        width="80"
        height="44"
        rx="6"
        fill="#F7F8FA"
        stroke="#7D2E68"
        strokeWidth="1"
        style={{ strokeOpacity: emphasis }}
      />
      <circle cx="40" cy="42" r="6" fill="#7D2E68" opacity="0.2" />
      <circle cx="60" cy="42" r="6" fill="#7D2E68" opacity="0.35" />
      <circle cx="80" cy="42" r="6" fill="#7D2E68" opacity="0.5" />
    </motion.svg>
  );
}

export function OptimizationVisual({ progress, index }: VisualProps) {
  const { floatY, emphasis } = useStepMotion(progress, index);

  return (
    <motion.svg viewBox="0 0 120 80" className="w-full h-full" style={{ y: floatY }} aria-hidden>
      <motion.path
        d="M 16 55 Q 40 25 60 40 T 104 30"
        fill="none"
        stroke="#7D2E68"
        strokeWidth="1.5"
        style={{ opacity: emphasis }}
      />
      {[30, 50, 70].map((h, i) => (
        <rect
          key={i}
          x={22 + i * 28}
          y={60 - h * 0.4}
          width="12"
          height={h * 0.4}
          rx="2"
          fill="#7D2E68"
          opacity={0.2 + i * 0.15}
        />
      ))}
    </motion.svg>
  );
}

export function ScaleVisual({ progress, index }: VisualProps) {
  const { floatY, emphasis } = useStepMotion(progress, index);

  const ringScale = useTransform(progress, (p) => {
    const dist = Math.abs(p * 4 - index);
    return 0.88 + Math.max(0, 1 - dist) * 0.15;
  });

  return (
    <motion.svg viewBox="0 0 120 80" className="w-full h-full" style={{ y: floatY }} aria-hidden>
      <motion.circle
        cx="60"
        cy="40"
        r="22"
        fill="none"
        stroke="#7D2E68"
        strokeWidth="1"
        style={{ scale: ringScale, opacity: emphasis, transformOrigin: "60px 40px" }}
      />
      <motion.circle cx="60" cy="40" r="10" fill="#7D2E68" style={{ opacity: emphasis }} />
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="60"
          y1="40"
          x2={60 + Math.cos((i * Math.PI) / 2) * 28}
          y2={40 + Math.sin((i * Math.PI) / 2) * 28}
          stroke="#D9DEE5"
          strokeWidth="1"
        />
      ))}
    </motion.svg>
  );
}
