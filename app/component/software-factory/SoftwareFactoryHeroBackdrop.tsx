"use client";

import { motion } from "framer-motion";
import { softwareFactorySdlcStages } from "@/app/content/software-factory-content";
import { useReducedMotion } from "../features/useReducedMotion";

const CODE_SNIPPETS = [
  "const pipeline = await factory.plan(intent);",
  "await agents.execute(workOrders);",
  "runSecurityScan({ stride: true });",
  "deploy({ target: 'production' });",
];

export default function SoftwareFactoryHeroBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div className="asf-hero-backdrop" aria-hidden>
      <div className="asf-hero-backdrop-noise" />
      <div className="asf-hero-backdrop-grid" />
      <motion.div
        className="asf-hero-backdrop-aurora"
        animate={reduced ? { opacity: 0.3 } : { opacity: [0.25, 0.42, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="asf-hero-pipeline">
        {softwareFactorySdlcStages.map((stage, i) => (
          <motion.div
            key={stage}
            className="asf-hero-stage"
            animate={reduced ? {} : { opacity: [0.45, 1, 0.45] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            <span className="asf-hero-stage-dot" />
            <span className="asf-hero-stage-label">{stage}</span>
            {i < softwareFactorySdlcStages.length - 1 ? (
              <span className="asf-hero-stage-connector" />
            ) : null}
          </motion.div>
        ))}
      </div>

      <div className="asf-hero-code-stream">
        {CODE_SNIPPETS.map((line, i) => (
          <motion.div
            key={line}
            className="asf-hero-code-line"
            animate={reduced ? {} : { x: ["-8%", "108%"] }}
            transition={{
              duration: 14 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2.5,
            }}
          >
            <span className="asf-hero-code-prompt">$</span>
            {line}
            <span className="asf-hero-cursor">▋</span>
          </motion.div>
        ))}
      </div>

      <div className="asf-hero-build-nodes">
        {["CI", "CD", "PR", "OTEL"].map((node, i) => (
          <motion.span
            key={node}
            className="asf-hero-build-node"
            style={{ left: `${18 + i * 22}%`, top: `${28 + (i % 2) * 38}%` }}
            animate={reduced ? {} : { scale: [1, 1.08, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {node}
          </motion.span>
        ))}
      </div>

      <div className="asf-hero-particles">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.span
            key={i}
            className="asf-hero-particle"
            style={{ left: `${(i * 17) % 95}%`, top: `${(i * 23) % 88}%` }}
            animate={
              reduced
                ? { opacity: 0.2 }
                : { opacity: [0.1, 0.5, 0.1], y: [0, -14, 0] }
            }
            transition={{ duration: 8 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="asf-hero-backdrop-vignette" />
    </div>
  );
}
