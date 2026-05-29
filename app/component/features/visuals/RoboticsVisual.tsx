"use client";

import { motion } from "framer-motion";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop } from "./motion";

export function RoboticsVisual({ active, reducedMotion }: VisualProps) {
  const speed = active ? 0.7 : 1;

  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect x={16} y={148} width={288} height={6} rx={2} fill={COLORS.lineMuted} />
      <line x1={16} y1={154} x2={304} y2={154} stroke={COLORS.line} strokeWidth={1} />

      {[70, 140, 210, 260].map((x, i) => (
        <motion.g key={x}>
          <motion.rect
            x={x - 14}
            y={128}
            width={28}
            height={18}
            rx={2}
            fill={COLORS.fill}
            stroke={COLORS.line}
            strokeWidth={1}
            animate={reducedMotion ? {} : { y: [128, 120, 128], opacity: [0.55, 1, 0.55] }}
            transition={loop(reducedMotion, { duration: 2.2 * speed, delay: i * 0.3, ease: "easeInOut" })}
          />
          <motion.line
            x1={x}
            y1={128}
            x2={x}
            y2={100}
            stroke={COLORS.secondary}
            strokeWidth={0.75}
            strokeDasharray="2 3"
            strokeOpacity={0.5}
            animate={reducedMotion ? {} : { strokeDashoffset: [0, -8] }}
            transition={loop(reducedMotion, { duration: 1.2 * speed, delay: i * 0.15, ease: "linear" })}
          />
        </motion.g>
      ))}

      <g transform="translate(72, 154)">
        <rect x={-16} y={-10} width={32} height={10} rx={2} fill={COLORS.lineMuted} stroke={COLORS.line} strokeWidth={1} />
        <motion.g
          style={{ originX: 0, originY: 0 }}
          animate={reducedMotion ? { rotate: -28 } : { rotate: active ? [-38, -12, -38] : [-32, -18, -32] }}
          transition={loop(reducedMotion, { duration: 3.2 * speed, ease: "easeInOut" })}
        >
          <line x1={0} y1={0} x2={58} y2={-52} stroke={COLORS.primary} strokeWidth={3} strokeLinecap="round" />
          <circle cx={0} cy={0} r={5} fill={COLORS.fill} stroke={COLORS.primary} strokeWidth={1.5} />
          <motion.g
            transform="translate(58, -52)"
            style={{ originX: 0, originY: 0 }}
            animate={reducedMotion ? { rotate: 42 } : { rotate: active ? [20, 58, 20] : [28, 48, 28] }}
            transition={loop(reducedMotion, { duration: 2.6 * speed, delay: 0.12, ease: "easeInOut" })}
          >
            <line x1={0} y1={0} x2={48} y2={-10} stroke={COLORS.primary} strokeWidth={2.5} strokeLinecap="round" />
            <circle cx={0} cy={0} r={4} fill={COLORS.secondary} stroke={COLORS.primary} strokeWidth={1} />
            <motion.g
              transform="translate(48, -10)"
              style={{ originX: 0, originY: 0 }}
              animate={reducedMotion ? { rotate: -12 } : { rotate: active ? [-28, 8, -28] : [-20, -5, -20] }}
              transition={loop(reducedMotion, { duration: 2 * speed, delay: 0.25, ease: "easeInOut" })}
            >
              <line x1={0} y1={0} x2={22} y2={6} stroke={COLORS.primary} strokeWidth={1.75} strokeLinecap="round" />
              <path d="M 16 3 L 26 8 L 16 13 Z" fill={COLORS.fill} stroke={COLORS.primary} strokeWidth={1} />
            </motion.g>
          </motion.g>
        </motion.g>
      </g>

      <g transform="translate(220, 154)" opacity={0.85}>
        <motion.g
          style={{ originX: 0, originY: 0 }}
          animate={reducedMotion ? { rotate: 15 } : { rotate: [10, 25, 10] }}
          transition={loop(reducedMotion, { duration: 4 * speed, ease: "easeInOut" })}
        >
          <line x1={0} y1={0} x2={40} y2={-36} stroke={COLORS.line} strokeWidth={2} strokeLinecap="round" />
          <line x1={40} y1={-36} x2={68} y2={-28} stroke={COLORS.line} strokeWidth={1.5} strokeLinecap="round" />
        </motion.g>
      </g>

      <motion.circle
        cx={280}
        cy={132}
        r={4}
        fill={COLORS.secondary}
        animate={reducedMotion ? {} : { scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
        transition={loop(reducedMotion, { duration: 1.4 * speed })}
        style={{ transformOrigin: "280px 132px" }}
      />
    </svg>
  );
}
