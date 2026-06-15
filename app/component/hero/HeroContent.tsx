"use client";

import { motion } from "framer-motion";
import HeroCta from "./HeroCta";
import HeroKpis from "./HeroKpis";
import { homeHero } from "@/app/content/homepage-content";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay, ease: EASE },
  };
}

export default function HeroContent() {
  return (
    <div className="hero-content">
      <motion.p className="hero-eyebrow" {...fadeUp(0)}>
        {homeHero.eyebrow}
      </motion.p>

      <motion.h1 className="hero-title" {...fadeUp(0.15)}>
        Creating Sustainable Business Value Through{" "}
        <span className="hero-title-highlight">AI-First</span> Digital{" "}
        <span className="hero-title-highlight">Transformation</span>
      </motion.h1>

      <motion.p className="hero-description" {...fadeUp(0.3)}>
        {homeHero.description}
      </motion.p>

      <motion.div className="hero-cta-row" {...fadeUp(0.45)}>
        <HeroCta href={homeHero.primaryHref} variant="primary">
          {homeHero.primaryCta}
        </HeroCta>
        <HeroCta href={homeHero.secondaryHref} variant="ghost">
          {homeHero.secondaryCta}
        </HeroCta>
      </motion.div>

      <motion.div className="hero-metrics" {...fadeUp(0.6)}>
        <HeroKpis />
      </motion.div>
    </div>
  );
}
