"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop } from "./motion";

export function AerospaceVisual({ active, reducedMotion }: VisualProps) {
  const uid = useId().replace(/:/g, "");
  const speed = active ? 0.65 : 1;
  const cx = 160;
  const cy = 95;

  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id={`${uid}-trail`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0" />
          <stop offset="50%" stopColor={COLORS.primary} stopOpacity={active ? 0.5 : 0.3} />
          <stop offset="100%" stopColor={COLORS.primary} stopOpacity="0" />
        </linearGradient>
      </defs>

      {[72, 92, 112].map((rx, i) => (
        <ellipse
          key={rx}
          cx={cx}
          cy={cy}
          rx={rx}
          ry={rx * 0.28}
          fill="none"
          stroke={COLORS.line}
          strokeWidth={0.75}
          strokeOpacity={0.45}
          transform={`rotate(${-22 + i * 14} ${cx} ${cy})`}
        />
      ))}

      <motion.g
        style={{ originX: `${cx}px`, originY: `${cy}px` }}
        animate={reducedMotion ? {} : { rotate: 360 }}
        transition={loop(reducedMotion, { duration: (active ? 14 : 22) * speed, ease: "linear" })}
      >
        <ellipse
          cx={cx}
          cy={cy}
          rx={112}
          ry={32}
          fill="none"
          stroke={COLORS.primary}
          strokeWidth={1}
          strokeOpacity={0.35}
          strokeDasharray="4 8"
        />
        <motion.g
          style={{ originX: `${cx + 112}px`, originY: `${cy}px` }}
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={loop(reducedMotion, { duration: (active ? 5 : 8) * speed, ease: "linear" })}
        >
          <g transform={`translate(${cx + 112}, ${cy})`}>
            <rect x={-8} y={-4} width={16} height={8} rx={1} fill={COLORS.fill} stroke={COLORS.primary} strokeWidth={1} />
            <line x1={-10} y1={0} x2={-18} y2={0} stroke={COLORS.secondary} strokeWidth={1} />
            <circle r={2} fill={COLORS.primary} />
          </g>
        </motion.g>
      </motion.g>

      <motion.g
        style={{ originX: `${cx}px`, originY: `${cy + 4}px` }}
        animate={reducedMotion ? {} : { rotate: 360 }}
        transition={loop(reducedMotion, { duration: (active ? 20 : 32) * speed, ease: "linear" })}
      >
        <circle cx={cx} cy={cy + 4} r={28} fill="none" stroke={COLORS.primary} strokeWidth={0.75} strokeOpacity={0.2} />
        {[-55, 0, 55].map((deg) => (
          <ellipse
            key={deg}
            cx={cx}
            cy={cy + 4}
            rx={28}
            ry={9}
            fill="none"
            stroke={COLORS.primary}
            strokeWidth={0.75}
            strokeOpacity={0.35}
            transform={`rotate(${deg} ${cx} ${cy + 4})`}
          />
        ))}
        {[-30, 30, 90].map((deg) => (
          <ellipse
            key={`v-${deg}`}
            cx={cx}
            cy={cy + 4}
            rx={9}
            ry={28}
            fill="none"
            stroke={COLORS.line}
            strokeWidth={0.5}
            strokeOpacity={0.4}
            transform={`rotate(${deg} ${cx} ${cy + 4})`}
          />
        ))}
        <circle cx={cx} cy={cy + 4} r={4} fill={COLORS.primary} fillOpacity={0.25} />
        <circle cx={cx} cy={cy + 4} r={2} fill={COLORS.primary} />
      </motion.g>

      <motion.g
        style={{ originX: `${cx}px`, originY: `${cy}px` }}
        animate={reducedMotion ? {} : { rotate: -360 }}
        transition={loop(reducedMotion, { duration: 10 * speed, ease: "linear" })}
      >
        <circle cx={cx - 70} cy={cy + 20} r={2.5} fill={COLORS.secondary} />
      </motion.g>

      <motion.path
        d={`M 24 150 Q ${cx} 40 296 140`}
        fill="none"
        stroke={`url(#${uid}-trail)`}
        strokeWidth={1}
        strokeDasharray="4 6"
        animate={reducedMotion ? {} : { strokeDashoffset: [0, -30] }}
        transition={loop(reducedMotion, { duration: 2.8 * speed, ease: "linear" })}
      />
    </svg>
  );
}
