"use client";

import { motion } from "framer-motion";
import LivingNeuralCore from "./LivingNeuralCore";

export default function HeroArchitecturePreview() {
  return (
    <motion.div
      className="hero-arch-preview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <div className="hero-arch-preview-glass">
        <LivingNeuralCore />
      </div>
    </motion.div>
  );
}
