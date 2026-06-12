"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeTechnology } from "@/app/content/homepage-content";

const VB = 440;
const CX = 220;
const CY = 220;
const R = 140;

const PARTNERS = [
  { id: "openai", label: "OpenAI", angle: -90 },
  { id: "anthropic", label: "Anthropic", angle: -45 },
  { id: "aws", label: "AWS", angle: 0 },
  { id: "azure", label: "Azure", angle: 45 },
  { id: "gcp", label: "Google Cloud", angle: 90 },
  { id: "databricks", label: "Databricks", angle: 135 },
  { id: "snowflake", label: "Snowflake", angle: 180 },
  { id: "palantir", label: "Palantir", angle: -135 },
] as const;

function polar(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * r, y: CY + Math.sin(rad) * r };
}

interface TechEcosystemLiveProps {
  active: boolean;
}

export default function TechEcosystemLive({ active }: TechEcosystemLiveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const live = active && inView && !reduced;

  return (
    <div
      ref={ref}
      className={`tech-eco-live${live ? " is-live" : ""}`}
      aria-label="Interactive ecosystem architecture"
    >
      <div className="tech-eco-live-ambient" aria-hidden>
        <div className="tech-eco-live-mesh" />
      </div>

      <svg viewBox={`0 0 ${VB} ${VB}`} className="tech-eco-live-svg" aria-hidden>
        <defs>
          <linearGradient id="eco-packet" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b14683" stopOpacity="0" />
            <stop offset="50%" stopColor="#d27ca8" />
            <stop offset="100%" stopColor="#b14683" stopOpacity="0" />
          </linearGradient>
        </defs>

        {PARTNERS.map((node, i) => {
          const { x, y } = polar(node.angle, R);
          const d = `M ${x} ${y} L ${CX} ${CY}`;
          const lit = hovered === node.id || hovered === null;
          const pathActive = live && (hovered === node.id || hovered === null);
          return (
            <g key={node.id}>
              <path
                d={d}
                className={`tech-eco-live-path ${lit ? "" : "is-dim"} ${hovered === node.id ? "is-active" : ""} ${pathActive ? "is-flowing" : ""}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
              {live && (
                <circle r="3" fill="url(#eco-packet)">
                  <animateMotion
                    dur={`${2.6 + i * 0.2}s`}
                    repeatCount="indefinite"
                    path={d}
                    begin={`${i * 0.3}s`}
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      <motion.div
        className="tech-eco-live-core"
        animate={live ? { scale: [1, 1.03, 1] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="tech-eco-live-core-tag">Orchestration</span>
        <strong>{homeTechnology.coreLabel}</strong>
      </motion.div>

      {PARTNERS.map((node) => {
        const { x, y } = polar(node.angle, R);
        const pct = (v: number) => `${(v / VB) * 100}%`;
        const isHov = hovered === node.id;
        return (
          <motion.button
            key={node.id}
            type="button"
            className={`tech-eco-live-node ${isHov ? "is-active" : ""} ${hovered && hovered !== node.id ? "is-dim" : ""} ${live ? "is-pulsing" : ""}`}
            style={{ left: pct(x), top: pct(y) }}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.04 }}
            animate={
              live && isHov
                ? { boxShadow: "0 12px 32px rgba(177,70,131,0.2)" }
                : {}
            }
          >
            {node.label}
          </motion.button>
        );
      })}
    </div>
  );
}
