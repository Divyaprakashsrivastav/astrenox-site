"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { useReducedMotion } from "../features/useReducedMotion";
import { useMouseParallax } from "../v2/motion";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const MODULES = [
  { id: "models", label: "AI Models", x: 50, y: 8 },
  { id: "router", label: "Agent Router", x: 82, y: 22 },
  { id: "cloud", label: "Cloud", x: 90, y: 50 },
  { id: "enterprise", label: "Enterprise", x: 82, y: 78 },
  { id: "automation", label: "Automation", x: 50, y: 92 },
  { id: "vision", label: "Vision", x: 18, y: 78 },
  { id: "memory", label: "Memory", x: 10, y: 50 },
  { id: "control", label: "Control Plane", x: 18, y: 22 },
] as const;

const STATUSES = [
  "Processing...",
  "Routing...",
  "Executing...",
  "Completed...",
  "Monitoring...",
  "Optimizing...",
] as const;

const FLOAT_METRICS = [
  { id: "rel", value: 99.9, suffix: "%", label: "Reliability", decimals: 1, delay: 0 },
  { id: "tasks", value: 2841, suffix: "", label: "Tasks/hr", decimals: 0, delay: 0.4 },
  { id: "wf", value: 47, suffix: "", label: "Active Workflows", decimals: 0, delay: 0.8 },
  { id: "models", value: 12, suffix: "", label: "Models Connected", decimals: 0, delay: 1.2 },
  { id: "lat", value: 18, suffix: "ms", label: "Routing Latency", decimals: 0, delay: 1.6 },
] as const;

export default function HeroIntelligenceEngine() {
  const reduced = useReducedMotion();
  const { ref, transform, onMove, onLeave } = useMouseParallax(5);
  const inView = useInView(ref, { once: true, margin: "-6%" });
  const [activeId, setActiveId] = useState<string>(MODULES[0].id);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const cycle = setInterval(() => {
      setActiveId((prev) => {
        const i = MODULES.findIndex((m) => m.id === prev);
        return MODULES[(i + 1) % MODULES.length].id;
      });
      setStatusIdx((s) => (s + 1) % STATUSES.length);
    }, 2800);
    return () => clearInterval(cycle);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      className="hero-engine"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label="Astrenox Intelligence Engine"
    >
      <motion.div
        className="hero-engine-stage"
        style={reduced ? undefined : { transform }}
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.75, delay: 0.12, ease: EASE_OUT }}
      >
        <div className="hero-engine-glass">
          <div className="hero-engine-topbar">
            <span className="hero-engine-live">
              <span className="hero-engine-live-dot" />
              Live
            </span>
            <span className="hero-engine-title">Astrenox Intelligence Engine</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={statusIdx}
                className="hero-engine-status"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35 }}
              >
                {STATUSES[statusIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="hero-engine-board">
            <svg className="hero-engine-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              {MODULES.map((mod) => (
                <line
                  key={mod.id}
                  x1={mod.x}
                  y1={mod.y}
                  x2={50}
                  y2={50}
                  className={`hero-engine-link-line ${activeId === mod.id ? "is-active" : ""}`}
                />
              ))}
            </svg>

            <motion.div
              className="hero-engine-core-card"
              animate={reduced ? {} : { boxShadow: ["0 12px 40px rgba(125,46,104,0.1)", "0 16px 48px rgba(125,46,104,0.16)", "0 12px 40px rgba(125,46,104,0.1)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="hero-engine-core-tag">Core</span>
              <strong>ASTRENOX CORE</strong>
            </motion.div>

            {MODULES.map((mod) => {
              const isActive = activeId === mod.id;
              return (
                <motion.div
                  key={mod.id}
                  className={`hero-engine-module ${isActive ? "is-active" : ""}`}
                  style={{ left: `${mod.x}%`, top: `${mod.y}%` }}
                  animate={
                    isActive && !reduced
                      ? { scale: 1.04, boxShadow: "0 12px 32px rgba(177,70,131,0.2)" }
                      : { scale: 1, boxShadow: "0 4px 16px rgba(17,17,17,0.06)" }
                  }
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {isActive && !reduced && (
                    <motion.span
                      className="hero-engine-module-pulse"
                      layoutId="module-pulse"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                  <span>{mod.label}</span>
                </motion.div>
              );
            })}

          </div>
        </div>

        {FLOAT_METRICS.map((m) => (
          <motion.div
            key={m.id}
            className={`hero-float-metric hero-float-metric--${m.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: reduced ? 0 : [-8, 8, -8],
                  }
                : {}
            }
            transition={{
              opacity: { duration: 0.5, delay: m.delay },
              y: reduced
                ? { duration: 0 }
                : { duration: 5 + m.delay, repeat: Infinity, ease: "easeInOut", delay: m.delay },
            }}
            whileHover={{ scale: 1.03, y: -4 }}
          >
            <p className="hero-float-metric-val">
              <AnimatedCounter value={m.value} suffix={m.suffix} decimals={m.decimals} immediate={inView} />
            </p>
            <p className="hero-float-metric-lbl">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
