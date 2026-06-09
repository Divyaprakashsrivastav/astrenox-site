"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import HeroDashboardGraph from "./HeroDashboardGraph";
import { EASE_PREMIUM } from "../v2/motion";

const WIDGETS = [
  { id: "throughput", label: "Agent Throughput", value: 2564, suffix: "", format: "number" as const },
  { id: "workflows", label: "Workflow Activity", value: 47, suffix: "", format: "number" as const },
  { id: "compliance", label: "Policy Compliance", value: 100, suffix: "%", format: "number" as const },
  { id: "latency", label: "Latency", display: "142ms", format: "static" as const },
] as const;

const STATUS = [
  "Agents Active",
  "Policies Running",
  "Integrations Healthy",
  "Autonomous Operations",
] as const;

const widgetVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.32 + i * 0.07, duration: 0.4, ease: EASE_PREMIUM },
  }),
};

export default function HeroDashboard() {
  return (
    <motion.div
      className="hero-dashboard"
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.12, ease: EASE_PREMIUM }}
    >
      <div className="hero-dashboard-reflection" aria-hidden />

      <header className="hero-dashboard-top">
        <span className="hero-dashboard-title">ASTRENOX CONTROL PLANE</span>
        <span className="hero-dashboard-live">
          <span className="hero-dashboard-live-dot" />
          LIVE
        </span>
      </header>

      <motion.div
        className="hero-dashboard-widgets"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.28 } } }}
      >
        {WIDGETS.map((w, i) => (
          <motion.div key={w.id} custom={i} variants={widgetVariant} className="hero-dashboard-widget">
            <p className="hero-dashboard-widget-label">{w.label}</p>
            <p className="hero-dashboard-widget-value tabular-nums">
              {w.format === "static" ? (
                w.display
              ) : (
                <AnimatedCounter
                  value={w.value}
                  suffix={w.suffix}
                  duration={1.4}
                  immediate
                />
              )}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="hero-dashboard-graph">
        <HeroDashboardGraph />
      </div>

      <footer className="hero-dashboard-bottom">
        <p className="hero-dashboard-bottom-title">System Status</p>
        <ul className="hero-dashboard-status-list">
          {STATUS.map((item, i) => (
            <li key={item}>
              <span className="hero-dashboard-status-dot" style={{ animationDelay: `${i * 0.35}s` }} />
              {item}
            </li>
          ))}
        </ul>
      </footer>
    </motion.div>
  );
}
