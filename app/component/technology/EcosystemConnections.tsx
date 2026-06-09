"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ECOSYSTEM_LAYERS, HUB_ANCHOR } from "./ecosystem-data";
import { useReducedMotion } from "../features/useReducedMotion";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const GRID_ANCHORS: Record<string, { x: number; y: number }> = {
  models: { x: 50, y: 14 },
  cloud: { x: 86, y: 38 },
  devops: { x: 86, y: 78 },
  enterprise: { x: 14, y: 78 },
  data: { x: 14, y: 38 },
};

interface EcosystemConnectionsProps {
  hoveredId: string | null;
  active?: boolean;
}

export default function EcosystemConnections({
  hoveredId,
  active = false,
}: EcosystemConnectionsProps) {
  const reduced = useReducedMotion();
  const hub = HUB_ANCHOR;
  const [flowing, setFlowing] = useState(false);

  useEffect(() => {
    if (!active || reduced) {
      setFlowing(false);
      return;
    }
    const t = setTimeout(() => setFlowing(true), 650);
    return () => clearTimeout(t);
  }, [active, reduced]);

  return (
    <svg
      viewBox="0 0 100 100"
      className="tech-eco-svg w-full h-full pointer-events-none"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="tech-eco-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7D2E68" stopOpacity="0" />
          <stop offset="50%" stopColor="#C97B84" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
        </linearGradient>
      </defs>

      {ECOSYSTEM_LAYERS.map((layer, i) => {
        const end = GRID_ANCHORS[layer.id] ?? layer.anchor;
        const highlighted = hoveredId === layer.id;
        const reverse = i % 2 === 1;

        return (
          <g key={layer.id}>
            <motion.line
              x1={hub.x}
              y1={hub.y}
              x2={end.x}
              y2={end.y}
              stroke={highlighted ? "#7D2E68" : "#E8E8EE"}
              strokeWidth={highlighted ? 0.34 : 0.22}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                active
                  ? { pathLength: 1, opacity: highlighted ? 1 : 0.75 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                pathLength: { delay: 0.15 + i * 0.08, duration: 0.55, ease: EASE_OUT },
                opacity: { delay: 0.15 + i * 0.08, duration: 0.35 },
              }}
            />

            {flowing && !reduced && (
              <>
                <motion.circle
                  r="0.55"
                  fill="#C97B84"
                  animate={{
                    cx: reverse ? [end.x, hub.x] : [hub.x, end.x],
                    cy: reverse ? [end.y, hub.y] : [hub.y, end.y],
                  }}
                  transition={{
                    duration: 3.2 + i * 0.35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  opacity={highlighted ? 0.75 : 0.35}
                />
                {i % 3 === 0 && (
                  <motion.circle
                    r="0.4"
                    fill="#7D2E68"
                    animate={{
                      cx: [end.x, hub.x],
                      cy: [end.y, hub.y],
                    }}
                    transition={{
                      duration: 4.8 + i * 0.4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1.6,
                    }}
                    opacity={0.25}
                  />
                )}
                <motion.line
                  x1={hub.x}
                  y1={hub.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="url(#tech-eco-flow)"
                  strokeWidth="0.35"
                  strokeLinecap="round"
                  strokeDasharray="3 40"
                  animate={{ strokeDashoffset: reverse ? [0, -43] : [-43, 0] }}
                  transition={{
                    duration: 2.8 + i * 0.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  opacity={highlighted ? 0.5 : 0.2}
                />
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
