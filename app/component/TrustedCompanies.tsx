"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TrustedBackground from "./trusted/TrustedBackground";
import EcosystemNetwork from "./trusted/EcosystemNetwork";
import ClientLogoGrid from "./trusted/ClientLogoGrid";
import TrustedStatsBar from "./trusted/TrustedStatsBar";

export default function TrustedCompanies() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="trusted"
      className="trusted-section relative overflow-hidden"
      aria-labelledby="trusted-heading"
    >
      <TrustedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="trusted-header"
        >
          <p className="trusted-eyebrow">Industry network</p>
          <h2 id="trusted-heading" className="trusted-title">
            Trusted Across Critical Industries
          </h2>
          <p className="trusted-subtitle">
            Building intelligent autonomous systems for aerospace, defense, robotics,
            manufacturing, and enterprise AI.
          </p>
        </motion.header>

        <div className="trusted-ecosystem-wrap">
          <EcosystemNetwork inView={inView} />
        </div>

        <ClientLogoGrid inView={inView} />

        <TrustedStatsBar />
      </div>
    </section>
  );
}
