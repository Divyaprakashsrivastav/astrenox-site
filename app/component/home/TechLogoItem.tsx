"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type TechLogoDef } from "./technology-ecosystem-config";
import TechSvgLogo from "./TechSvgLogo";
import { EASE_PREMIUM } from "../v2/motion";

type TechLogoItemProps = {
  logo: TechLogoDef;
  index: number;
  floatDelay?: number;
};

export default function TechLogoItem({ logo, index, floatDelay = 0 }: TechLogoItemProps) {
  const reduced = useReducedMotion();

  return (
    <motion.li
      className="tech-eco-logo-item"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.04, ease: EASE_PREMIUM }}
    >
      <motion.div
        className="tech-eco-logo-shell"
        animate={reduced ? {} : { y: [0, -4, 0] }}
        transition={{
          duration: 4.5 + (index % 5) * 0.35,
          repeat: reduced ? 0 : Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        whileHover={reduced ? {} : { scale: 1.08 }}
      >
        <span className="tech-eco-logo-glow" aria-hidden />
        <TechSvgLogo file={logo.file} name={logo.name} size={48} />
      </motion.div>
    </motion.li>
  );
}
