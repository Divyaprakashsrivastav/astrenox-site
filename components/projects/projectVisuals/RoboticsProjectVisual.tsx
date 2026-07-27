"use client";

import { motion } from "framer-motion";
import { VisualSvgFrame } from "../../features/visuals/VisualSvgFrame";
import { COLORS, loop } from "../../features/visuals/motion";
import type { ProjectVisualProps } from "../ProjectCardVisual";

export function RoboticsProjectVisual({ active, reducedMotion }: ProjectVisualProps) {
  const speed = active ? 0.7 : 1;

  return (
    <VisualSvgFrame viewBox="0 0 400 200">
      <g>
        <rect x={32} y={155} width={336} height={6} rx={2} fill={COLORS.lineMuted} />
        {[80, 160, 240, 310].map((x, i) => (
          <rect key={i} x={x - 14} y={132} width={28} height={18} rx={2} fill="#fff" stroke={COLORS.line} strokeWidth={1} />
        ))}
        <g transform="translate(88, 155)">
          <rect x={-14} y={-9} width={28} height={9} rx={2} fill={COLORS.lineMuted} stroke={COLORS.line} strokeWidth={1} />
          <line x1={0} y1={0} x2={52} y2={-48} stroke={COLORS.primary} strokeWidth={3} strokeLinecap="round" />
          <line x1={52} y1={-48} x2={92} y2={-58} stroke={COLORS.primary} strokeWidth={2.5} strokeLinecap="round" />
          <line x1={92} y1={-58} x2={112} y2={-50} stroke={COLORS.primary} strokeWidth={2} strokeLinecap="round" />
          <circle cx={0} cy={0} r={5} fill="#fff" stroke={COLORS.primary} strokeWidth={1.5} />
          <circle cx={52} cy={-48} r={4} fill={COLORS.secondary} stroke={COLORS.primary} strokeWidth={1} />
        </g>
        <text x={300} y={36} fontSize={9} fill={COLORS.primary} fontWeight={600} fontFamily="system-ui,sans-serif">
          CYCLE 847
        </text>
        <text x={300} y={50} fontSize={8} fill="#667085" fontFamily="system-ui,sans-serif">
          ±0.02mm
        </text>
      </g>

      {!reducedMotion && (
        <g>
          <motion.g
            transform="translate(88, 155)"
            style={{ originX: 0, originY: 0 }}
            animate={{ rotate: active ? [-32, -14, -32] : [-28, -18, -28] }}
            transition={loop(reducedMotion, { duration: 3.2 * speed, ease: "easeInOut" })}
          >
            <line x1={0} y1={0} x2={52} y2={-48} stroke={COLORS.primary} strokeWidth={3} strokeLinecap="round" />
            <motion.g
              transform="translate(52, -48)"
              style={{ originX: 0, originY: 0 }}
              animate={{ rotate: active ? [18, 52, 18] : [24, 42, 24] }}
              transition={loop(reducedMotion, { duration: 2.6 * speed, delay: 0.1, ease: "easeInOut" })}
            >
              <line x1={0} y1={0} x2={40} y2={-10} stroke={COLORS.primary} strokeWidth={2.5} strokeLinecap="round" />
              <motion.g
                transform="translate(40, -10)"
                style={{ originX: 0, originY: 0 }}
                animate={{ rotate: [-20, 6, -20] }}
                transition={loop(reducedMotion, { duration: 2 * speed, delay: 0.2, ease: "easeInOut" })}
              >
                <line x1={0} y1={0} x2={20} y2={5} stroke={COLORS.primary} strokeWidth={2} strokeLinecap="round" />
              </motion.g>
            </motion.g>
          </motion.g>
          {[80, 160, 240, 310].map((x, i) => (
            <motion.rect
              key={i}
              x={x - 14}
              width={28}
              height={18}
              rx={2}
              fill="#fff"
              stroke={COLORS.secondary}
              strokeWidth={1}
              animate={{ y: [132, 124, 132] }}
              transition={loop(reducedMotion, { duration: 2.4 * speed, delay: i * 0.3, ease: "easeInOut" })}
            />
          ))}
        </g>
      )}
    </VisualSvgFrame>
  );
}
