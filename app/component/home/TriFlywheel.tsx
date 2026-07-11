"use client";

import "./tri-flywheel.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "../design/FadeUp";
import { homeTriFlywheel } from "@/app/content/homepage-content";
import { ParagraphExpand } from "./disclosure/HomeDisclosure";
import FlywheelStoryAmbient from "./FlywheelStoryAmbient";
import FlywheelPillar from "./FlywheelPillar";
import { EASE_PREMIUM } from "../v2/motion";

export default function TriFlywheel() {
  const pillarsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(pillarsRef, { once: true, margin: "-8%" });

  return (
    <section id="flywheel" className="flywheel-story scroll-mt-28">
      <FlywheelStoryAmbient />

      <div className="flywheel-story-inner">
        <FadeUp className="flywheel-story-header">
          <p className="flywheel-story-eyebrow">{homeTriFlywheel.label}</p>
          <h2 className="flywheel-story-title">{homeTriFlywheel.title}</h2>
          <div className="flywheel-story-intro">
            <ParagraphExpand
              paragraphs={homeTriFlywheel.description.split("\n\n").filter(Boolean)}
              visibleCount={1}
            />
          </div>
        </FadeUp>

        <motion.div
          className="flywheel-story-core"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.65, ease: EASE_PREMIUM }}
        >
          <span className="flywheel-story-core-label">{homeTriFlywheel.centerLabel}</span>
        </motion.div>

        <div ref={pillarsRef} className="flywheel-story-pillars">
          {homeTriFlywheel.flywheels.map((flywheel, index) => (
            <FlywheelPillar
              key={flywheel.id}
              flywheel={flywheel}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
