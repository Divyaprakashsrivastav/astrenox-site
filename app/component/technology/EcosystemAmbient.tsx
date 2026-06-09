"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

interface EcosystemAmbientProps {
  active: boolean;
}

export default function EcosystemAmbient({ active }: EcosystemAmbientProps) {
  const reduced = useReducedMotion();

  return (
    <div className="tech-eco-ambient" aria-hidden>
      <div className="tech-eco-ambient-grid" />
      <div className="tech-eco-ambient-spotlight" />
      <motion.div
        className="tech-eco-ambient-gradient"
        animate={
          active && !reduced
            ? { opacity: [0.03, 0.045, 0.03] }
            : { opacity: 0.03 }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
