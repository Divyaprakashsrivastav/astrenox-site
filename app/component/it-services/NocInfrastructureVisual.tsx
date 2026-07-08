"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Shield,
  Activity,
  Container,
  Network,
  Terminal,
} from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";

/** Labels taken only from technologies named in the approved document. */
const NODES = [
  { label: "Kubernetes", icon: Container, x: "8%", y: "14%", delay: 0 },
  { label: "Docker", icon: Container, x: "62%", y: "10%", delay: 0.1 },
  { label: "GraphQL", icon: Network, x: "38%", y: "30%", delay: 0.2 },
  { label: "Terraform", icon: Terminal, x: "10%", y: "52%", delay: 0.3 },
  { label: "Ansible", icon: Server, x: "68%", y: "48%", delay: 0.38 },
  { label: "Prometheus", icon: Activity, x: "72%", y: "74%", delay: 0.48 },
  { label: "Grafana", icon: Activity, x: "26%", y: "76%", delay: 0.56 },
  { label: "SIEM", icon: Shield, x: "48%", y: "58%", delay: 0.64 },
  { label: "AWS", icon: Cloud, x: "18%", y: "32%", delay: 0.2 },
  { label: "Azure", icon: Cloud, x: "78%", y: "28%", delay: 0.28 },
  { label: "GCP", icon: Cloud, x: "54%", y: "78%", delay: 0.7 },
] as const;

const EDGES = [
  "M 70 60 L 175 120",
  "M 280 50 L 195 120",
  "M 100 125 L 175 120",
  "M 175 120 L 80 200",
  "M 175 120 L 300 185",
  "M 80 200 L 140 285",
  "M 300 185 L 310 280",
  "M 175 120 L 210 220",
  "M 210 220 L 140 285",
  "M 210 220 L 230 295",
];

function NocInfrastructureVisual() {
  return (
    <div className="it-visual" aria-hidden>
      <div className="it-visual-grid" />
      <div className="it-visual-glow" />

      <svg className="it-visual-lines" viewBox="0 0 400 360" fill="none">
        {EDGES.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            className="it-flow-line"
            stroke="rgba(96, 165, 250, 0.35)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.2 + i * 0.06,
              ease: EASE_PREMIUM,
            }}
          />
        ))}
      </svg>

      {NODES.map((node) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className="it-node mvp-glass"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25 + node.delay,
              ease: EASE_PREMIUM,
            }}
          >
            <span className="it-node-icon">
              <Icon size={13} />
            </span>
            <span>{node.label}</span>
            <span className="it-node-pulse" />
          </motion.div>
        );
      })}
    </div>
  );
}

export default memo(NocInfrastructureVisual);
