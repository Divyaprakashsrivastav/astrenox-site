"use client";

import { motion } from "framer-motion";
import { homeTriFlywheel } from "@/app/content/homepage-content";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";

type Flywheel = (typeof homeTriFlywheel.flywheels)[number];

interface FlywheelPillarProps {
  flywheel: Flywheel;
  index: number;
  inView: boolean;
}

export default function FlywheelPillar({ flywheel, index, inView }: FlywheelPillarProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className={`flywheel-pillar flywheel-pillar--${flywheel.id}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.75,
        delay: 0.15 + index * 0.12,
        ease: EASE_PREMIUM,
      }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE_PREMIUM } }}
      data-cursor-hover
    >
      <div className="flywheel-pillar-glass">
        <div className="flywheel-pillar-shine" aria-hidden />
        <div className="flywheel-pillar-inner">
          <div className="flywheel-pillar-meta">
            <span className="flywheel-pillar-index">{num}</span>
            <span className="flywheel-pillar-tag">{flywheel.tabLabel}</span>
          </div>

          <h3 className="flywheel-pillar-title">{flywheel.title}</h3>

          <div className="flywheel-pillar-copy">
            <p className="flywheel-pillar-body">
              <FormattedText text={flywheel.description} />
            </p>
          </div>

          {flywheel.steps.length > 0 ? (
            <ol className="flywheel-pillar-steps">
              {flywheel.steps.map((step) => (
                <li key={step}>
                  <FormattedText text={step} />
                </li>
              ))}
            </ol>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
