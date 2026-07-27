"use client";

import { motion, useInView } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import { useRef } from "react";
import AICommandCenter from "../control-plane/AICommandCenter";
import DesignSection from "../design/DesignSection";

const controlPlaneContent = {
  label: "Control Plane",
  title: "Control Plane",
  description: "Enterprise operating layer for autonomous systems.",
} as const;

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

export default function ControlPlaneSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <DesignSection id="control-plane" className="cp-section">
      <div ref={ref} className="cp-section-inner">
        <div className="cp-section-bg" aria-hidden>
          <div className="cp-section-grid" />
          <div className="cp-section-radial" />
        </div>

        <motion.header
          className="cp-header"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        >
          <motion.span
            className="cp-live-badge"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="cp-live-dot" />
            LIVE COMMAND
          </motion.span>
          <p className="cp-eyebrow">{controlPlaneContent.label}</p>
          <h2 className="cp-title">{controlPlaneContent.title}</h2>
          <p className="cp-subtitle"><FormattedText text={controlPlaneContent.description} /></p>
        </motion.header>

        <AICommandCenter active={inView} />
      </div>
    </DesignSection>
  );
}
