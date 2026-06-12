"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DesignSection from "../design/DesignSection";
import TechEcosystemLive from "../technology/TechEcosystemLive";
import { homeTechnology } from "@/app/content/homepage-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

export default function TechnologyEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <DesignSection id="technology" className="tech-cmd-section" ambient="alt">
      <div ref={ref} className="tech-cmd-layout">
        <motion.div
          className="tech-cmd-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <p className="tech-cmd-label">{homeTechnology.label}</p>
          <h2 className="tech-cmd-title">{homeTechnology.title}</h2>
          <p className="tech-cmd-description">{homeTechnology.description}</p>
        </motion.div>

        <div className="tech-cmd-panel-wrap">
          <div className="tech-cmd-panel-glow" aria-hidden />
          <motion.div
            className="tech-live-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE_OUT, delay: 0.1 }}
          >
            <TechEcosystemLive active={inView} />
          </motion.div>
        </div>
      </div>
    </DesignSection>
  );
}
