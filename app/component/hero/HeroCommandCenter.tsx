"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";

/** Informational system map — not a live dashboard */
const LAYERS = [
  {
    id: "signal",
    label: "Signal",
    title: "Physical World Inputs",
    items: ["Fleet telemetry", "Vision & sensors", "Edge streams"],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    title: "Reasoning Layer",
    items: ["Multi-model routing", "Knowledge graph", "Agent cognition"],
  },
  {
    id: "orchestration",
    label: "Orchestration",
    title: "Control Plane",
    items: ["Policy gates", "Workflow engine", "30+ integrations"],
  },
  {
    id: "execution",
    label: "Execution",
    title: "Autonomous Output",
    items: ["Robotics dispatch", "Mission routing", "Plant operations"],
  },
] as const;

export default function HeroCommandCenter() {
  return (
    <div className="command-center" aria-label="Astrenox system architecture">
      <p className="command-center-label">System Architecture</p>
      <div className="command-center-stack">
        {LAYERS.map((layer, i) => (
          <motion.div
            key={layer.id}
            className="command-center-layer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: EASE_PREMIUM }}
          >
            <div className="command-center-layer-head">
              <span className="command-center-layer-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="command-center-layer-label">{layer.label}</p>
                <p className="command-center-layer-title">{layer.title}</p>
              </div>
            </div>
            <ul className="command-center-layer-items">
              {layer.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
