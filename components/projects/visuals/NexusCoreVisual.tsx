"use client";

import { motion } from "framer-motion";
import VisualFrame from "./VisualFrame";
import { useReducedMotion } from "../../features/useReducedMotion";

const CX = 200;
const CY = 88;
const NODES = [
  { id: "a", x: 80, y: 50 },
  { id: "b", x: 320, y: 45 },
  { id: "c", x: 340, y: 110 },
  { id: "d", x: 290, y: 140 },
  { id: "e", x: 110, y: 135 },
  { id: "f", x: 60, y: 100 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 2],
  [4, 5],
];

export default function NexusCoreVisual({
  active,
  dark = false,
  hideChrome = false,
}: {
  active: boolean;
  dark?: boolean;
  hideChrome?: boolean;
}) {
  const reduced = useReducedMotion();
  const speed = active ? 0.75 : 1;
  const line = dark ? "rgba(168, 85, 247, 0.28)" : "#E5E7EB";
  const accent = dark ? "#a855f7" : "#8E2F74";
  const nodeFill = dark ? "rgba(139, 92, 246, 0.35)" : "#fff";
  const nodeStroke = dark ? "rgba(192, 132, 252, 0.45)" : "#E5E7EB";
  const label = dark ? "rgba(192, 132, 252, 0.55)" : "#5F6778";

  return (
    <VisualFrame
      label="Orchestration graph"
      active={active}
      dark={dark}
      hideChrome={hideChrome}
    >
      <svg viewBox="0 0 400 176" className="w-full h-full" aria-hidden>
        {EDGES.map(([a, b]) => {
          const na = NODES[a];
          const nb = NODES[b];
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={line}
              strokeWidth="1"
            />
          );
        })}
        {EDGES.map(([a, b], i) => {
          const na = NODES[a];
          const nb = NODES[b];
          if (reduced) return null;
          return (
            <motion.circle
              key={`pulse-${a}-${b}`}
              r="2.5"
              fill={accent}
              animate={{
                cx: [na.x, nb.x],
                cy: [na.y, nb.y],
              }}
              transition={{
                duration: 2.2 * speed,
                delay: i * 0.35,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
        <motion.circle
          cx={CX}
          cy={CY}
          r={active ? 34 : 30}
          fill={accent}
          fillOpacity={active ? 0.18 : 0.1}
          animate={reduced ? {} : { opacity: active ? [0.5, 1, 0.5] : [0.35, 0.7, 0.35] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <circle cx={CX} cy={CY} r="10" fill={accent} />
        <circle
          cx={CX}
          cy={CY}
          r="14"
          fill="none"
          stroke={accent}
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        {NODES.map((n) => (
          <g key={n.id}>
            <line
              x1={CX}
              y1={CY}
              x2={n.x}
              y2={n.y}
              stroke={accent}
              strokeWidth="0.8"
              strokeOpacity="0.3"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="5"
              fill={nodeFill}
              stroke={nodeStroke}
              strokeWidth="1"
            />
          </g>
        ))}
        <text
          x="16"
          y="24"
          fontSize="9"
          fill={label}
          fontFamily="system-ui,sans-serif"
          fontWeight="600"
        >
          LANGGRAPH · ROUTING · OBSERVABILITY
        </text>
      </svg>
    </VisualFrame>
  );
}
