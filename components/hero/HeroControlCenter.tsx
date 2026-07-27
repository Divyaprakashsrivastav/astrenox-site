"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { useReducedMotion } from "../features/useReducedMotion";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const NODES = [
  { id: "router", label: "Router", x: 72, y: 58 },
  { id: "models", label: "Models", x: 168, y: 42 },
  { id: "memory", label: "Memory", x: 248, y: 72 },
  { id: "agents", label: "Agents", x: 288, y: 138 },
  { id: "policy", label: "Policy", x: 220, y: 178 },
  { id: "data", label: "Data", x: 108, y: 168 },
  { id: "core", label: "Core", x: 168, y: 118 },
] as const;

const PATHS = [
  "M 168 118 L 72 58",
  "M 168 118 L 168 42",
  "M 168 118 L 248 72",
  "M 168 118 L 288 138",
  "M 168 118 L 220 178",
  "M 168 118 L 108 168",
] as const;

export default function HeroControlCenter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const reduced = useReducedMotion();
  const [tick, setTick] = useState(0);
  const [agents, setAgents] = useState(47);
  const [throughput, setThroughput] = useState(2841);

  const particles = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        id: i,
        x: 12 + ((i * 41) % 76),
        y: 10 + ((i * 29) % 80),
        d: 5 + (i % 4),
      })),
    []
  );

  useEffect(() => {
    if (!inView || reduced) return;
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setAgents((v) => Math.max(44, Math.min(52, v + (Math.random() > 0.5 ? 1 : -1))));
      setThroughput((v) => Math.max(2700, Math.min(3100, v + Math.floor(Math.random() * 40) - 18)));
    }, 3200);
    return () => clearInterval(id);
  }, [inView, reduced]);

  return (
    <motion.div
      ref={ref}
      className="hero-control-center"
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.75, delay: 0.2, ease: EASE_OUT }}
      aria-label="Live AI orchestration control center"
    >
      <div className="hero-control-center-glow" aria-hidden />
      <div className="hero-control-center-frame">
        <div className="hero-control-topbar">
          <span className="hero-control-live">
            <span className="hero-control-live-dot" />
            Live Orchestration
          </span>
          <span className="hero-control-ts">SYS · NOMINAL</span>
        </div>

        <div className="hero-control-canvas-wrap">
          <div className="hero-control-particles" aria-hidden>
            {particles.map((p) => (
              <motion.span
                key={p.id}
                className="hero-control-particle"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                animate={
                  reduced
                    ? { opacity: 0.2 }
                    : { opacity: [0.15, 0.45, 0.15], y: [0, -6, 0] }
                }
                transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>

          <svg viewBox="0 0 360 220" className="hero-control-svg" aria-hidden>
            <defs>
              <linearGradient id="hero-signal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7D2E68" stopOpacity="0" />
                <stop offset="50%" stopColor="#C97B84" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
              </linearGradient>
            </defs>
            {PATHS.map((d, i) => (
              <g key={d}>
                <path d={d} className="hero-control-path" />
                {!reduced && (
                  <circle r="2.5" fill="url(#hero-signal-grad)">
                    <animateMotion
                      dur={`${2.2 + i * 0.35}s`}
                      repeatCount="indefinite"
                      path={d}
                      begin={`${i * 0.4}s`}
                    />
                  </circle>
                )}
              </g>
            ))}
            {NODES.map((node) => (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                <circle
                  r={node.id === "core" ? 14 : 8}
                  className={`hero-control-node ${node.id === "core" ? "is-core" : ""}`}
                />
                <text y={node.id === "core" ? 26 : 18} className="hero-control-node-label">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="hero-control-metrics">
          <div className="hero-control-metric">
            <p className="hero-control-metric-val">
              <AnimatedCounter value={agents} immediate={inView} duration={1.2} />
            </p>
            <p className="hero-control-metric-lbl">Active Agents</p>
          </div>
          <div className="hero-control-metric">
            <p className="hero-control-metric-val">
              <AnimatedCounter value={throughput} immediate={inView} duration={1.4} />
            </p>
            <p className="hero-control-metric-lbl">Tasks / hr</p>
          </div>
          <div className="hero-control-metric">
            <p className="hero-control-metric-val">99.99%</p>
            <p className="hero-control-metric-lbl">Health</p>
          </div>
        </div>
      </div>
      <span className="sr-only">Orchestration tick {tick}</span>
    </motion.div>
  );
}
