"use client";

import { motion } from "framer-motion";
import { useMouseParallax } from "../v2/motion";

const NODES = [
  { id: "agents", label: "Agents", x: 80, y: 100 },
  { id: "models", label: "Models", x: 280, y: 80 },
  { id: "systems", label: "Systems", x: 300, y: 220 },
  { id: "drones", label: "Drones", x: 100, y: 240 },
] as const;

const HUB = { x: 190, y: 160 };

const EDGES = NODES.map((n) => [HUB, n] as const);

export default function HeroNetwork() {
  const { ref, transform, onMove, onLeave, reduced } = useMouseParallax(10);

  return (
    <div
      ref={ref}
      className="ax-hero-network"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label="AI operating system network"
    >
      <motion.div className="ax-hero-network-canvas" style={reduced ? undefined : { transform }}>
        <svg viewBox="0 0 380 320" className="w-full h-full" aria-hidden>
          {EDGES.map(([from, to], i) => (
            <g key={to.id}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#E8E8EE"
                strokeWidth="1"
              />
              {!reduced && (
                <motion.circle
                  r="2.5"
                  fill="#C97B84"
                  animate={{
                    cx: [from.x, to.x],
                    cy: [from.y, to.y],
                  }}
                  transition={{
                    duration: 2.8 + i * 0.3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          ))}

          <circle cx={HUB.x} cy={HUB.y} r="22" fill="rgba(125,46,104,0.06)" />
          <circle cx={HUB.x} cy={HUB.y} r="6" fill="#7D2E68" />

          {NODES.map((node) => (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r="14" fill="#FAFAFB" stroke="#E8E8EE" strokeWidth="1" />
              <circle cx={node.x} cy={node.y} r="4" fill="#7D2E68" />
            </g>
          ))}
        </svg>

        {NODES.map((node) => (
          <span
            key={`${node.id}-label`}
            className="ax-hero-network-label"
            style={{ left: `${(node.x / 380) * 100}%`, top: `${(node.y / 320) * 100}%` }}
          >
            {node.label}
          </span>
        ))}
        <span
          className="ax-hero-network-hub"
          style={{ left: `${(HUB.x / 380) * 100}%`, top: `${(HUB.y / 320) * 100}%` }}
        >
          Control Plane
        </span>
      </motion.div>
    </div>
  );
}
