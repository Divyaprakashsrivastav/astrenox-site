"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";
import { AI_ENGINEERING_TECH_STACK } from "./tech-stack-config";
import TechSvgLogo from "../home/TechSvgLogo";

function AIEngineeringTechStack() {
  return (
    <section className="aie-tech" aria-labelledby="aie-tech-heading">
      <div className="aie-tech-bg" aria-hidden>
        <div className="aie-tech-grid" />
        <div className="aie-tech-glow" />
        <div className="aie-tech-particles">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="aie-tech-particle"
              style={{
                left: `${(i * 19 + 5) % 100}%`,
                top: `${(i * 27 + 10) % 100}%`,
                animationDelay: `${(i % 6) * 0.65}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="aie-inner aie-tech-inner">
        <motion.div
          className="aie-tech-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        >
          <p className="aie-label">Technology Stack</p>
          <h2 id="aie-tech-heading">Production stack technologies from our engineering architecture</h2>
        </motion.div>

        <ul className="aie-tech-grid-cards">
          {AI_ENGINEERING_TECH_STACK.map((tech, i) => (
            <motion.li
              key={tech.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.05, ease: EASE_PREMIUM }}
            >
              <article className="aie-tech-card">
                <div className="aie-tech-card-glow" aria-hidden />
                <div className="aie-tech-logo-wrap">
                  <TechSvgLogo file={tech.file} name={tech.name} size={48} />
                </div>
                <p className="aie-tech-name">{tech.name}</p>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default memo(AIEngineeringTechStack);
