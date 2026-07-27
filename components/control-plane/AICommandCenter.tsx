"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { useReducedMotion } from "../features/useReducedMotion";

const FEED = [
  "Vision Agent Processing",
  "Drone Fleet Monitoring",
  "Policy Engine Active",
  "Knowledge Graph Synced",
  "Model Router Optimized",
  "Workflow batch routed to GPT-4o",
  "Agent health check nominal",
  "Latency within SLA threshold",
] as const;

const METRICS = [
  { label: "System Health", value: 99.99, suffix: "%", decimals: 2 },
  { label: "Routing Latency", value: 18, suffix: "ms", decimals: 0 },
  { label: "Active Agents", value: 47, suffix: "", decimals: 0 },
  { label: "Workflows/hr", value: 2841, suffix: "", decimals: 0 },
] as const;

interface AICommandCenterProps {
  active: boolean;
}

export default function AICommandCenter({ active }: AICommandCenterProps) {
  const reduced = useReducedMotion();
  const [feedIdx, setFeedIdx] = useState(0);
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    if (!active || reduced) return;
    const t = setInterval(() => {
      setFeedIdx((i) => (i + 1) % FEED.length);
      setHighlight((h) => (h + 1) % 4);
    }, 3200);
    return () => clearInterval(t);
  }, [active, reduced]);

  return (
    <div className="ai-cmd" aria-label="Interactive AI Command Center">
      <div className="ai-cmd-glass">
        <div className="ai-cmd-topbar">
          <span className="ai-cmd-live">
            <span className="ai-cmd-live-dot" />
            Command Center
          </span>
          <span className="ai-cmd-ts">Orchestration · Live</span>
        </div>

        <div className="ai-cmd-body">
          <div className="ai-cmd-metrics">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                className={`ai-cmd-metric ${highlight === i ? "is-live" : ""}`}
                animate={highlight === i && !reduced ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <p className="ai-cmd-metric-val">
                  <AnimatedCounter
                    value={m.value}
                    suffix={m.suffix}
                    decimals={m.decimals}
                    immediate={active}
                  />
                </p>
                <p className="ai-cmd-metric-lbl">{m.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="ai-cmd-panels">
            <div className="ai-cmd-panel">
              <p className="ai-cmd-panel-label">Live Workflow Activity</p>
              <div className="ai-cmd-bars">
                {[72, 58, 88, 64, 91, 55].map((h, i) => (
                  <motion.div
                    key={i}
                    className="ai-cmd-bar"
                    style={{ height: `${h}%` }}
                    animate={active && !reduced ? { opacity: [0.5, 1, 0.5] } : {}}
                    transition={{ duration: 2.4, delay: i * 0.15, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>

            <div className="ai-cmd-panel ai-cmd-feed-panel">
              <p className="ai-cmd-panel-label">Monitoring Feed</p>
              <ul className="ai-cmd-feed">
                <AnimatePresence mode="popLayout">
                  {[0, 1, 2].map((offset) => {
                    const idx = (feedIdx + offset) % FEED.length;
                    return (
                      <motion.li
                        key={`${idx}-${offset}`}
                        layout
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: offset === 0 ? 1 : 0.55 - offset * 0.15, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        className={offset === 0 ? "is-head" : ""}
                      >
                        <span className="ai-cmd-feed-dot" />
                        {FEED[idx]}
                      </motion.li>
                    );
                  })}
                </AnimatePresence>
              </ul>
            </div>
          </div>

          <div className="ai-cmd-indicators">
            {FEED.slice(0, 5).map((item, i) => (
              <motion.span
                key={item}
                className={`ai-cmd-chip ${feedIdx % 5 === i ? "is-active" : ""}`}
                animate={feedIdx % 5 === i && !reduced ? { opacity: [0.7, 1, 0.7] } : {}}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
