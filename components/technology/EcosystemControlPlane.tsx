"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM_STATUS } from "./ecosystem-data";
import { useReducedMotion } from "../features/useReducedMotion";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

interface EcosystemControlPlaneProps {
  active?: boolean;
}

export default function EcosystemControlPlane({ active = false }: EcosystemControlPlaneProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="tech-eco-hub"
      initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
      animate={
        active
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.92, filter: "blur(4px)" }
      }
      transition={{ duration: 0.45, ease: EASE_OUT }}
    >
      <div className="tech-eco-hub-glow" aria-hidden />
      <div
        className={`tech-eco-hub-ring-outer ${reduced ? "" : "is-rotating"}`}
        aria-hidden
      />
      <div className="tech-eco-hub-pulse" aria-hidden />
      <div className="tech-eco-hub-pulse tech-eco-hub-pulse-b" aria-hidden />

      {ECOSYSTEM_STATUS.map((item, i) => (
        <motion.div
          key={item.id}
          className={`tech-eco-hub-status tech-eco-hub-status--${item.position}`}
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 + i * 0.08, duration: 0.4, ease: EASE_OUT }}
        >
          <span
            className="tech-eco-hub-status-dot"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
          {item.label}
        </motion.div>
      ))}

      <div className="tech-eco-hub-inner">
        <div className="tech-eco-hub-live">
          <span className="tech-eco-hub-live-dot" />
          Operational
        </div>
        <h3 className="font-heading text-lg font-semibold text-text tracking-tight">
          Astrenox
        </h3>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mt-1">
          Control Plane
        </p>
      </div>
    </motion.div>
  );
}
