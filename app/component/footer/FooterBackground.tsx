"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

interface FooterBackgroundProps {
  active?: boolean;
}

export default function FooterBackground({ active = true }: FooterBackgroundProps) {
  const reduced = useReducedMotion();

  return (
    <div className="ax-footer-bg" aria-hidden>
      <div className="ax-footer-bg-base" />
      <div className="ax-footer-bg-radial" />
      <div className="footer-grain ax-footer-grain" />
      <motion.div
        className="ax-footer-orb"
        animate={
          active && !reduced
            ? { x: ["-12%", "12%", "-12%"] }
            : { x: 0 }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
