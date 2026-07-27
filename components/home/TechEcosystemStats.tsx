"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { TECH_ECOSYSTEM_STATS } from "./technology-ecosystem-config";
import { EASE_PREMIUM } from "../v2/motion";

export default function TechEcosystemStats() {
  return (
    <motion.ul
      className="tech-eco-stats"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE_PREMIUM }}
      aria-label="Technology ecosystem capabilities"
    >
      {TECH_ECOSYSTEM_STATS.map((stat, i) => (
        <motion.li
          key={stat.id}
          className="tech-eco-stat-badge"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.06 + i * 0.07, ease: EASE_PREMIUM }}
          whileHover={{ y: -2 }}
        >
          <Check className="tech-eco-stat-icon" size={14} strokeWidth={2.5} aria-hidden />
          <span className="tech-eco-stat-label">
            {"value" in stat ? (
              <>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.8} />
                {" Integrations"}
              </>
            ) : (
              stat.display
            )}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
