"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Stagger, StaggerItem } from "../design/FadeUp";
import { AISystemsVisual } from "../features/visuals/AISystemsVisual";
import { DroneVisual } from "../features/visuals/DroneVisual";
import { RoboticsVisual } from "../features/visuals/RoboticsVisual";
import { AerospaceVisual } from "../features/visuals/AerospaceVisual";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeCapabilities } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const VISUALS = {
  "enterprise-ai": AISystemsVisual,
  drones: DroneVisual,
  robotics: RoboticsVisual,
  aerospace: AerospaceVisual,
} as const;

export default function CapabilitiesSection() {
  const [active, setActive] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <DesignSection id="capabilities">
      <DesignHeader
        label={homeCapabilities.label}
        title={homeCapabilities.title}
        description={homeCapabilities.description}
      />
      <Stagger className="ax-cap-grid">
        {homeCapabilities.items.map((cap) => {
          const Visual = VISUALS[cap.id];
          const isActive = active === cap.id;
          return (
            <StaggerItem key={cap.id}>
              <motion.article
                className="ax-cap-card"
                onMouseEnter={() => setActive(cap.id)}
                onMouseLeave={() => setActive(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: EASE_PREMIUM }}
                data-cursor-hover
              >
                <div className="ax-cap-visual">
                  <Visual active={isActive} reducedMotion={reduced} />
                </div>
                <h3 className="ax-cap-title">{cap.title}</h3>
                <p className="ax-cap-desc">{cap.description}</p>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </DesignSection>
  );
}
