"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { safeSvgId } from "../features/visuals/motion";

const CX = 200;
const CY = 200;
const R = 148;

import { trustedSection } from "@/app/content/astrenox-content";

const NODE_ANGLES = [-90, -30, 30, 90, 150, 210];

const NODES = trustedSection.ecosystemNodes.map((label, i) => ({
  id: `node-${i}`,
  label,
  angle: NODE_ANGLES[i] ?? i * 60,
})).map((n) => {
  const rad = (n.angle * Math.PI) / 180;
  return {
    ...n,
    x: CX + Math.cos(rad) * R,
    y: CY + Math.sin(rad) * R,
  };
});

interface EcosystemNetworkProps {
  inView: boolean;
}

export default function EcosystemNetwork({ inView }: EcosystemNetworkProps) {
  const uid = safeSvgId(useId());
  const reducedMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const speed = hoveredId ? 0.55 : 1;

  return (
    <motion.div
      className="trusted-ecosystem"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg viewBox="0 0 400 400" className="trusted-ecosystem-svg" aria-hidden>
        <defs>
          <radialGradient id={`${uid}-hub`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7D2E68" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${uid}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D0D5DD" />
            <stop offset="50%" stopColor="#7D2E68" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C97B84" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <circle cx={CX} cy={CY} r={R + 24} fill={`url(#${uid}-hub)`} />
        {[R - 20, R, R + 20].map((r) => (
          <circle
            key={r}
            cx={CX}
            cy={CY}
            r={r}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={0.75}
            strokeDasharray="4 8"
            opacity={0.5}
          />
        ))}

        {NODES.map((node, i) => {
          const active = hoveredId === node.id || hoveredId === null;
          const highlighted = hoveredId === node.id;
          return (
            <g key={node.id}>
              <motion.path
                d={`M ${CX} ${CY} L ${node.x} ${node.y}`}
                fill="none"
                stroke={`url(#${uid}-line)`}
                strokeWidth={highlighted ? 1.5 : 1}
                strokeOpacity={active ? (highlighted ? 0.7 : 0.35) : 0.15}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  inView
                    ? { pathLength: 1, opacity: active ? (highlighted ? 0.85 : 0.45) : 0.2 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
              {!reducedMotion && inView && (
                <motion.circle
                  r={2.5}
                  fill={highlighted ? "#C97B84" : "#7D2E68"}
                  initial={{ cx: CX, cy: CY, opacity: 0 }}
                  animate={{
                    cx: [CX, node.x, CX],
                    cy: [CY, node.y, CY],
                    opacity: highlighted ? [0, 1, 0] : [0, 0.7, 0],
                  }}
                  transition={{
                    duration: (highlighted ? 1.2 : 2.2) * speed,
                    delay: i * 0.35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          );
        })}

        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <circle cx={CX} cy={CY} r={44} fill="#ffffff" stroke="#7D2E68" strokeWidth={1.5} strokeOpacity={0.25} />
          <circle cx={CX} cy={CY} r={36} fill="#7D2E68" fillOpacity={0.08} />
          <text
            x={CX}
            y={CY + 5}
            textAnchor="middle"
            fontSize={13}
            fontWeight={600}
            fill="#7D2E68"
            fontFamily="var(--font-heading), Georgia, serif"
          >
            Astrenox
          </text>
        </motion.g>

        {NODES.map((node, i) => {
          const highlighted = hoveredId === node.id;
          return (
            <motion.g
              key={`node-${node.id}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: highlighted ? 1.08 : 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ cursor: "default" }}
            >
              <foreignObject x={node.x - 72} y={node.y - 22} width={144} height={44}>
                <div className={`trusted-node-pill ${highlighted ? "is-active" : ""}`}>
                  {node.label}
                </div>
              </foreignObject>
              <circle
                cx={node.x}
                cy={node.y}
                r={highlighted ? 6 : 4}
                fill={highlighted ? "#7D2E68" : "#ffffff"}
                stroke="#7D2E68"
                strokeWidth={1.25}
              />
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}
