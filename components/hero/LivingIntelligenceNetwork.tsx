"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { EASE_PREMIUM, useMouseParallax } from "../v2/motion";

const VB = 480;
const CORE = { id: "core", x: 240, y: 240 };

const SATELLITES = [
  {
    id: "models",
    label: "AI Models",
    description: "Model-agnostic routing across frontier LLMs with governance and observability.",
    x: 108,
    y: 138,
  },
  {
    id: "agents",
    label: "Agents",
    description: "Autonomous agent fleets operating under policy constraints and audit trails.",
    x: 372,
    y: 122,
  },
  {
    id: "systems",
    label: "Enterprise Systems",
    description: "ERP, CRM, and operational workflows unified through the intelligence core.",
    x: 392,
    y: 252,
  },
  {
    id: "robotics",
    label: "Robotics",
    description: "Closed-loop industrial automation with real-time telemetry and safety gates.",
    x: 332,
    y: 378,
  },
  {
    id: "drones",
    label: "Drones",
    description: "Mission routing, fleet coordination, and human-in-the-loop aerial autonomy.",
    x: 240,
    y: 402,
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Decision intelligence layer synthesizing signals into executive-grade insight.",
    x: 108,
    y: 362,
  },
  {
    id: "cloud",
    label: "Cloud Infrastructure",
    description: "Multi-cloud deployment fabric with policy-aware workload placement.",
    x: 92,
    y: 242,
  },
] as const;

const FLOW = ["Data", "Intelligence", "Decisions", "Autonomous Action"] as const;

const STATUS = [
  { label: "Routing", active: true },
  { label: "Policies", active: true },
  { label: "Integrations", active: true },
] as const;

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

function pct(v: number) {
  return `${(v / VB) * 100}%`;
}

export default function LivingIntelligenceNetwork() {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, margin: "-8%" });
  const reduced = useReducedMotion();
  const { ref: parallaxRef, transform, onMove, onLeave } = useMouseParallax(4);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pulsesOn, setPulsesOn] = useState(false);

  useEffect(() => {
    if (!isInView || reduced) {
      setPulsesOn(false);
      return;
    }
    const timer = setTimeout(() => setPulsesOn(true), 1200);
    return () => clearTimeout(timer);
  }, [isInView, reduced]);

  const active = isInView || reduced;

  return (
    <div ref={rootRef} className="hero-visual">
      <div
        ref={parallaxRef}
        className="hero-network"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        aria-label="Living intelligence network visualization"
      >
        <div className="hero-network-bg" aria-hidden>
          <div className="hero-network-mesh" />
          <div className="hero-network-grid" />
          <div className="hero-network-glow" />
        </div>

        <motion.div
          className="hero-network-stage"
          style={reduced ? undefined : { transform }}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={active ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.75, delay: 0.55, ease: EASE_OUT }}
        >
          <svg
            viewBox={`0 0 ${VB} ${VB}`}
            className="hero-network-svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="hero-net-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7D2E68" stopOpacity="0" />
                <stop offset="45%" stopColor="#C97B84" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hero-net-line-active" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7D2E68" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#C97B84" stopOpacity="0.8" />
              </linearGradient>
              <filter id="hero-net-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {SATELLITES.map((node, i) => {
              const highlighted = hoveredId === node.id || hoveredId === CORE.id;
              return (
                <g key={node.id}>
                  <motion.line
                    x1={CORE.x}
                    y1={CORE.y}
                    x2={node.x}
                    y2={node.y}
                    stroke={highlighted ? "url(#hero-net-line-active)" : "#E8E8EE"}
                    strokeWidth={highlighted ? 1.5 : 1}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      active
                        ? { pathLength: 1, opacity: highlighted ? 1 : 0.7 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: { delay: 0.55 + i * 0.05, duration: 0.75, ease: EASE_PREMIUM },
                      opacity: { delay: 0.55 + i * 0.05, duration: 0.4 },
                    }}
                  />
                  {pulsesOn && !reduced && (
                    <motion.line
                      x1={CORE.x}
                      y1={CORE.y}
                      x2={node.x}
                      y2={node.y}
                      stroke="url(#hero-net-pulse)"
                      strokeWidth={1.25}
                      strokeLinecap="round"
                      strokeDasharray="16 280"
                      initial={{ strokeDashoffset: 304, opacity: 0 }}
                      animate={{
                        strokeDashoffset: [304, 0],
                        opacity: [0, 0.35, 0.35, 0],
                      }}
                      transition={{
                        duration: 4.2 + i * 0.3,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.1, 0.9, 1],
                        delay: i * 0.55,
                      }}
                    />
                  )}
                  {pulsesOn && !reduced && i % 2 === 0 && (
                    <motion.circle
                      r="1.25"
                      fill="#C97B84"
                      opacity={0.45}
                      animate={{
                        cx: [CORE.x, node.x],
                        cy: [CORE.y, node.y],
                      }}
                      transition={{
                        duration: 5 + i * 0.4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.2 + i * 0.6,
                      }}
                    />
                  )}
                </g>
              );
            })}

            <motion.circle
              cx={CORE.x}
              cy={CORE.y}
              r={52}
              fill="rgba(125,46,104,0.04)"
              filter="url(#hero-net-soft-glow)"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                active
                  ? {
                      opacity: hoveredId ? 0.9 : 0.6,
                      scale: [1, 1.03, 1],
                    }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                opacity: { duration: 0.4, delay: 0.25 },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
              }}
            />
          </svg>

          <motion.div
            className="hero-network-core"
            style={{ left: pct(CORE.x), top: pct(CORE.y) }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.28, ease: EASE_PREMIUM }}
            onMouseEnter={() => setHoveredId(CORE.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.div
              className="hero-network-core-glass"
              animate={
                reduced
                  ? {}
                  : { scale: [1, 1.015, 1], boxShadow: hoveredId === CORE.id
                      ? "0 0 32px rgba(125,46,104,0.18), 0 8px 32px rgba(17,17,17,0.06)"
                      : "0 0 24px rgba(125,46,104,0.1), 0 4px 24px rgba(17,17,17,0.04)" }
              }
              transition={{
                scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 0.35 },
              }}
            >
              <span className="hero-network-core-dot" aria-hidden />
              <span className="hero-network-core-label">ASTRENOX CORE</span>
            </motion.div>
            {hoveredId === CORE.id && (
              <motion.div
                className="hero-network-tooltip hero-network-tooltip--core"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              >
                Central orchestration layer routing data to autonomous action.
              </motion.div>
            )}
          </motion.div>

          {SATELLITES.map((node, i) => (
            <motion.div
              key={node.id}
              className="hero-network-node"
              style={{ left: pct(node.x), top: pct(node.y) }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={active ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.68 + i * 0.06, ease: EASE_OUT }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="hero-network-node-ring"
                animate={
                  reduced
                    ? {}
                    : {
                        scale: hoveredId === node.id ? 1.1 : [1, 1.03, 1],
                        opacity: hoveredId === node.id ? 1 : [0.7, 1, 0.7],
                      }
                }
                transition={{
                  scale: { duration: hoveredId === node.id ? 0.25 : 4 + i * 0.3, repeat: hoveredId === node.id ? 0 : Infinity, ease: "easeInOut" },
                  opacity: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="hero-network-node-dot"
                animate={
                  hoveredId === node.id
                    ? { scale: 1.2, boxShadow: "0 0 16px rgba(201,123,132,0.45)" }
                    : { scale: 1, boxShadow: "0 0 0px transparent" }
                }
                transition={{ duration: 0.25, ease: EASE_PREMIUM }}
              />
              <span className="hero-network-node-label">{node.label}</span>
              {hoveredId === node.id && (
                <motion.div
                  className={
                    node.y > 300
                      ? "hero-network-tooltip hero-network-tooltip--above"
                      : "hero-network-tooltip"
                  }
                  initial={{ opacity: 0, y: node.y > 300 ? -4 : 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: EASE_PREMIUM }}
                >
                  {node.description}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hero-network-flow"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 1.2, ease: EASE_OUT }}
          aria-hidden
        >
          {FLOW.map((step, i) => (
            <span key={step} className="hero-network-flow-step">
              {i > 0 && <span className="hero-network-flow-arrow">→</span>}
              {step}
            </span>
          ))}
        </motion.div>

        <motion.ul
          className="hero-network-status"
          initial={{ opacity: 0, y: 6 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 1.35, ease: EASE_OUT }}
          aria-hidden
        >
          {STATUS.map((item, i) => (
            <li key={item.label}>
              <span
                className="hero-network-status-dot"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
              {item.label}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
