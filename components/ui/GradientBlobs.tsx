"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

export default function GradientBlobs() {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <div
          className="ax-blob ax-blob--purple"
          style={{
            top: "-10%",
            right: "-8%",
            animation: reduced ? "none" : undefined,
          }}
        />
        <div
          className="ax-blob ax-blob--magenta"
          style={{
            bottom: "-15%",
            left: "-10%",
            animation: reduced ? "none" : undefined,
          }}
        />
        <div
          className="ax-blob ax-blob--cyan"
          style={{
            top: "35%",
            right: "25%",
            opacity: 0.09,
            animation: reduced ? "none" : undefined,
          }}
        />
      </motion.div>
    </div>
  );
}
