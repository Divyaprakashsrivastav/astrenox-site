"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { safeSvgId } from "../features/visuals/motion";

const CX = 50;
const CY = 50;
const RINGS = [32, 46, 60];

interface Connection {
  id: string;
  x: number;
  y: number;
}

interface EcosystemNetworkCanvasProps {
  connections: Connection[];
  hoveredId: string | null;
  inView: boolean;
  coreVisible: boolean;
  ringsVisible: boolean[];
  coreLabel: string; // reserved for a11y / future label sync
}

export default function EcosystemNetworkCanvas({
  connections,
  hoveredId,
  inView,
  coreVisible,
  ringsVisible,
  coreLabel,
}: EcosystemNetworkCanvasProps) {
  const uid = safeSvgId(useId());
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 100 100"
      className="eco-network-canvas"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id={`${uid}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7D2E68" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7D2E68" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#7D2E68" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#C97B84" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      <circle cx={CX} cy={CY} r="68" fill={`url(#${uid}-core)`} />

      {RINGS.map((r, ri) => (
        <motion.circle
          key={r}
          cx={CX}
          cy={CY}
          r={r}
          fill="none"
          stroke="#7D2E68"
          strokeWidth="0.35"
          strokeDasharray="4 6"
          strokeOpacity={ringsVisible[ri] ? 0.35 : 0}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            inView && ringsVisible[ri]
              ? { pathLength: 1, opacity: 0.35, rotate: reduced ? 0 : 360 }
              : {}
          }
          transition={{
            pathLength: { duration: 1, delay: 0.2 + ri * 0.25 },
            opacity: { duration: 0.6, delay: 0.2 + ri * 0.25 },
            rotate: reduced ? {} : { duration: 120 + ri * 30, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: `${CX}% ${CY}%` }}
        />
      ))}

      {connections.map((c) => {
        const highlighted = hoveredId === c.id;
        const dimmed = hoveredId !== null && !highlighted;
        return (
          <g key={c.id}>
            <motion.line
              x1={CX}
              y1={CY}
              x2={c.x}
              y2={c.y}
              stroke={`url(#${uid}-line)`}
              strokeWidth={highlighted ? 0.9 : 0.5}
              strokeOpacity={dimmed ? 0.12 : highlighted ? 0.85 : 0.35}
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            {!reduced && inView && !dimmed ? (
              <motion.line
                x1={CX}
                y1={CY}
                x2={c.x}
                y2={c.y}
                stroke={highlighted ? "#C97B84" : "#7D2E68"}
                strokeWidth="0.6"
                strokeDasharray="2 8"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                strokeOpacity={highlighted ? 0.9 : 0.35}
              />
            ) : null}
          </g>
        );
      })}

      <motion.circle
        cx={CX}
        cy={CY}
        r="8"
        fill="#fff"
        stroke="#7D2E68"
        strokeWidth="0.8"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          coreVisible
            ? { scale: 1, opacity: 1 }
            : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx={CX}
        cy={CY}
        r="12"
        fill="none"
        stroke="#7D2E68"
        strokeWidth="0.5"
        animate={
          coreVisible && !reduced
            ? { r: [12, 16, 12], opacity: [0.5, 0, 0.5] }
            : {}
        }
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}
