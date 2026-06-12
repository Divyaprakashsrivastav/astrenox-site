"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

const CX = 200;
const CY = 200;
const ORBIT_R = 138;

const NODES = [
  { label: "AI", angle: -90 },
  { label: "Robotics", angle: -30 },
  { label: "Drones", angle: 30 },
  { label: "Cloud", angle: 90 },
  { label: "Vision", angle: 150 },
  { label: "Enterprise", angle: 210 },
] as const;

function polar(angleDeg: number, radius = ORBIT_R) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function flowPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const bend = 14;
  const cx = mx + nx * bend;
  const cy = my + ny * bend;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export default function HeroIntelligenceVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-4%" });
  const reduced = useReducedMotion();

  const paths = useMemo(
    () =>
      NODES.map((node, i) => {
        const p = polar(node.angle);
        const d = flowPath(p.x, p.y, CX, CY);
        return { ...node, ...p, d, id: `hero-flow-${i}` };
      }),
    [],
  );

  return (
    <div ref={ref} className="hero-viz" aria-hidden>
      <div className="hero-viz-frame">
        <motion.div
          className="hero-viz-stage"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.75, ease: [0, 0, 0.2, 1] }}
        >
          <svg
          viewBox="0 0 400 400"
          className="hero-viz-svg"
          role="img"
          aria-label="Intelligence flowing through autonomous systems"
        >
          <defs>
            <radialGradient id="heroVizCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(177,70,131,0.14)" />
              <stop offset="55%" stopColor="rgba(210,124,168,0.06)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <linearGradient id="heroVizFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(177,70,131,0.08)" />
              <stop offset="45%" stopColor="rgba(177,70,131,0.42)" />
              <stop offset="100%" stopColor="rgba(201,123,132,0.12)" />
            </linearGradient>
            <filter id="heroVizSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx={CX}
            cy={CY}
            r={182}
            className="hero-viz-ambient"
          />

          <g className="hero-viz-orbit-group">
            <circle
              cx={CX}
              cy={CY}
              r={ORBIT_R + 10}
              className="hero-viz-orbit hero-viz-orbit--outer"
            >
              {!reduced && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${CX} ${CY}`}
                  to={`360 ${CX} ${CY}`}
                  dur="52s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
            <circle
              cx={CX}
              cy={CY}
              r={ORBIT_R * 0.58}
              className="hero-viz-orbit hero-viz-orbit--mid"
            >
              {!reduced && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`360 ${CX} ${CY}`}
                  to={`0 ${CX} ${CY}`}
                  dur="38s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
            <circle
              cx={CX}
              cy={CY}
              r={ORBIT_R * 0.32}
              className="hero-viz-orbit hero-viz-orbit--inner"
            >
              {!reduced && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${CX} ${CY}`}
                  to={`360 ${CX} ${CY}`}
                  dur="28s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
          </g>

          {paths.map((path) => (
            <path
              key={`link-${path.id}`}
              d={path.d}
              className="hero-viz-link"
            />
          ))}

          {paths.map((path, i) => (
            <path
              key={path.id}
              id={path.id}
              d={path.d}
              className={`hero-viz-flow${reduced ? "" : " is-animated"}`}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          ))}

          {!reduced &&
            paths.map((path, i) => (
              <circle
                key={`particle-${path.id}`}
                r="2.25"
                className="hero-viz-particle"
              >
                <animateMotion
                  dur={`${2.8 + i * 0.35}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.45}s`}
                >
                  <mpath href={`#${path.id}`} />
                </animateMotion>
              </circle>
            ))}

          <circle
            cx={CX}
            cy={CY}
            r={52}
            fill="url(#heroVizCoreGlow)"
            className={`hero-viz-core-glow${reduced ? "" : " is-pulsing"}`}
          />

          <circle
            cx={CX}
            cy={CY}
            r={34}
            className="hero-viz-core-ring"
            filter="url(#heroVizSoftGlow)"
          />

          <text
            x={CX}
            y={CY}
            textAnchor="middle"
            dominantBaseline="central"
            className="hero-viz-core-label"
          >
            ASTRENOX
          </text>

          {paths.map((path) => (
            <g
              key={`node-${path.label}`}
              transform={`translate(${path.x} ${path.y})`}
              className="hero-viz-node"
            >
              <circle r="3.5" className="hero-viz-node-dot" />
              <circle r="8" className="hero-viz-node-halo" />
              <text y="17" textAnchor="middle" className="hero-viz-node-label">
                {path.label}
              </text>
            </g>
          ))}
        </svg>
        </motion.div>
      </div>
    </div>
  );
}
