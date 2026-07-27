"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop } from "./motion";

const bars = [42, 58, 48, 72, 62, 88, 68, 95, 76];

export function AnalyticsVisual({ active, reducedMotion }: VisualProps) {
  const uid = useId().replace(/:/g, "");
  const speed = active ? 0.65 : 1;

  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id={`${uid}-area`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.primary} stopOpacity={active ? 0.2 : 0.12} />
          <stop offset="100%" stopColor={COLORS.primary} stopOpacity="0" />
        </linearGradient>
      </defs>

      <line x1={28} y1={148} x2={292} y2={148} stroke={COLORS.line} strokeWidth={1} />
      <line x1={28} y1={148} x2={28} y2={28} stroke={COLORS.line} strokeWidth={1} strokeOpacity={0.6} />

      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={40 + i * 28}
          width={16}
          rx={2}
          fill={COLORS.primary}
          fillOpacity={active ? 0.32 : 0.2}
          animate={
            reducedMotion
              ? { height: h, y: 148 - h }
              : { height: [h * 0.82, h, h * 0.88], y: [148 - h * 0.82, 148 - h, 148 - h * 0.88] }
          }
          transition={loop(reducedMotion, { duration: 2.2 * speed, delay: i * 0.08, ease: "easeInOut" })}
        />
      ))}

      <motion.path
        d="M 40 110 Q 100 70 160 82 T 280 48"
        fill="none"
        stroke={COLORS.primary}
        strokeWidth={2}
        strokeOpacity={active ? 0.75 : 0.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <path
        d="M 40 110 Q 100 70 160 82 T 280 48 L 280 148 L 40 148 Z"
        fill={`url(#${uid}-area)`}
      />

      <motion.path
        d="M 160 82 Q 210 55 280 48"
        fill="none"
        stroke={COLORS.secondary}
        strokeWidth={1.25}
        strokeDasharray="5 6"
        strokeOpacity={active ? 0.85 : 0.55}
        animate={reducedMotion ? {} : { strokeDashoffset: [0, -22] }}
        transition={loop(reducedMotion, { duration: 1.8 * speed, ease: "linear" })}
      />

      {!reducedMotion && (
        <motion.circle
          r={4}
          fill={COLORS.secondary}
          stroke="#fff"
          strokeWidth={1}
          animate={{
            cx: [40, 100, 160, 220, 280],
            cy: [110, 72, 82, 58, 48],
          }}
          transition={loop(reducedMotion, { duration: 5 * speed, ease: "easeInOut" })}
        />
      )}

      <text x={240} y={40} fontSize={8} fill={COLORS.primary} fontFamily="system-ui,sans-serif" fontWeight={600}>
        FORECAST
      </text>
      <text x={240} y={52} fontSize={7} fill={COLORS.secondary} fontFamily="system-ui,sans-serif">
        +12.4% Δ
      </text>
    </svg>
  );
}
