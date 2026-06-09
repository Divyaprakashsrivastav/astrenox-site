"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { homeTriFlywheel } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

export default function TriFlywheel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <DesignSection id="flywheel" className="ax-section-surface">
      <DesignHeader
        label={homeTriFlywheel.label}
        title={homeTriFlywheel.title}
        description={homeTriFlywheel.description}
      />

      <div
        ref={ref}
        className="flywheel-stage"
        onMouseLeave={() => setHovered(null)}
      >
        <motion.div
          className="flywheel-rings"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <div className={`flywheel-ring flywheel-ring-3 ${hovered ? "is-paused" : ""}`} aria-hidden />
          <div className={`flywheel-ring flywheel-ring-2 ${hovered ? "is-paused" : ""}`} aria-hidden />
          <div className={`flywheel-ring flywheel-ring-1 ${hovered ? "is-paused" : ""}`} aria-hidden />
          <div className="flywheel-core">
            <span>{homeTriFlywheel.centerLabel}</span>
          </div>
        </motion.div>

        <div className="flywheel-cards">
          {homeTriFlywheel.flywheels.map((fw, i) => (
            <motion.article
              key={fw.id}
              className={`flywheel-card ${hovered === fw.id ? "is-active" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: EASE_OUT }}
              onMouseEnter={() => setHovered(fw.id)}
              whileHover={{ y: -4 }}
              data-cursor-hover
            >
              <p className="flywheel-card-index">Ring {i + 1}</p>
              <h3 className="flywheel-card-title">{fw.title}</h3>
              <p className="flywheel-card-desc">{fw.description}</p>
              <ul className="flywheel-card-tags">
                {fw.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </DesignSection>
  );
}
