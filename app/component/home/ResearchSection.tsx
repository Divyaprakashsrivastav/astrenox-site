"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Stagger, StaggerItem } from "../design/FadeUp";
import { ResearchVisual } from "../features/visuals/ResearchVisual";
import { useReducedMotion } from "../features/useReducedMotion";
import { researchSection, researchPillars } from "@/app/content/astrenox-content";
import { EASE_PREMIUM } from "../v2/motion";

const PILLARS = researchPillars.slice(0, 3);

export default function ResearchSection() {
  const [active, setActive] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <DesignSection id="research" className="ax-section-surface">
      <DesignHeader
        label={researchSection.label}
        title={researchSection.title}
        description={researchSection.description}
      />

      <Stagger className="ax-research-grid">
        {PILLARS.map((pillar, i) => (
          <StaggerItem key={pillar.title}>
            <motion.article
              className="ax-research-card"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: EASE_PREMIUM }}
              data-cursor-hover
            >
              <div className={`ax-research-visual ${active === i ? "is-active" : ""}`}>
                <ResearchVisual active={active === i} reducedMotion={reduced} />
              </div>
              <h3 className="ax-research-title">{pillar.title}</h3>
              <p className="ax-research-desc">{pillar.description}</p>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </DesignSection>
  );
}
