"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeTechnology } from "@/app/content/homepage-content";

const VB = 400;
const CX = 200;
const CY = 200;

const NODE_LAYOUT = [
  { id: "models", label: "AI Models", angle: -90 },
  { id: "cloud", label: "Cloud", angle: -30 },
  { id: "databases", label: "Data", angle: 30 },
  { id: "devops", label: "DevOps", angle: 90 },
  { id: "integrations", label: "Enterprise", angle: 150 },
  { id: "automation", label: "Automation", angle: 210 },
  { id: "agents", label: "Frameworks", angle: 270 },
] as const;

function polar(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * r, y: CY + Math.sin(rad) * r };
}

interface TechEcosystemLiveProps {
  active: boolean;
}

export default function TechEcosystemLive({ active }: TechEcosystemLiveProps) {
  const reduced = useReducedMotion();
  const R = 128;

  const nodes = useMemo(
    () =>
      NODE_LAYOUT.map((n) => {
        const cat = homeTechnology.categories.find((c) => c.id === n.id);
        return { ...n, title: cat?.title ?? n.label, items: cat?.items ?? [] };
      }),
    []
  );

  return (
    <div className="tech-live" aria-label="Astrenox technology ecosystem">
      <div className="tech-live-ambient" aria-hidden>
        <div className="tech-live-mesh" />
      </div>

      <svg viewBox={`0 0 ${VB} ${VB}`} className="tech-live-svg" aria-hidden>
        <defs>
          <radialGradient id="tech-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7D2E68" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tech-packet" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7D2E68" stopOpacity="0" />
            <stop offset="50%" stopColor="#C97B84" />
            <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx={CX} cy={CY} r={72} fill="url(#tech-core-glow)" />

        {nodes.map((node, i) => {
          const { x, y } = polar(node.angle, R);
          const d = `M ${CX} ${CY} L ${x} ${y}`;
          return (
            <g key={node.id}>
              <path d={d} className="tech-live-path" />
              {active && !reduced && (
                <circle r="3" fill="url(#tech-packet)">
                  <animateMotion
                    dur={`${2.4 + i * 0.3}s`}
                    repeatCount="indefinite"
                    path={d}
                    begin={`${i * 0.35}s`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        <g className="tech-live-core">
          <rect
            x={CX - 52}
            y={CY - 22}
            width={104}
            height={44}
            rx={12}
            className="tech-live-core-box"
          />
          <text x={CX} y={CY - 2} className="tech-live-core-label">
            {homeTechnology.coreLabel}
          </text>
          <text x={CX} y={CY + 14} className="tech-live-core-sub">
            Orchestration
          </text>
        </g>

        {nodes.map((node) => {
          const { x, y } = polar(node.angle, R);
          return (
            <g key={`node-${node.id}`} transform={`translate(${x}, ${y})`}>
              <motion.rect
                x={-44}
                y={-18}
                width={88}
                height={36}
                rx={10}
                className="tech-live-node"
                animate={active ? { opacity: [0.85, 1, 0.85] } : {}}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <text y={4} className="tech-live-node-label">
                {node.title}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="tech-live-legend">
        {nodes.slice(0, 4).map((n) => (
          <span key={n.id} className="tech-live-chip">
            {n.items[0]}
          </span>
        ))}
      </div>
    </div>
  );
}
