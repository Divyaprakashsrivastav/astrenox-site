"use client";

import { motion } from "framer-motion";
import HeroCta from "./HeroCta";
import HeroKpis from "./HeroKpis";
import { homeHero } from "@/app/content/homepage-content";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
});

export default function HeroLeft() {
  return (
    <div className="hero-left">
      <motion.h1 className="hero-title" {...fadeUp(0.1)}>
        {homeHero.headline}
      </motion.h1>

      <motion.p className="hero-description" {...fadeUp(0.22)}>
        {homeHero.description}
      </motion.p>

      <motion.div className="hero-cta-row" {...fadeUp(0.34)}>
        <HeroCta href={homeHero.primaryHref} variant="primary">
          {homeHero.primaryCta}
        </HeroCta>
        <HeroCta href={homeHero.secondaryHref} variant="ghost">
          {homeHero.secondaryCta}
        </HeroCta>
      </motion.div>

      <motion.div className="hero-metrics-glass" {...fadeUp(0.46)}>
        <HeroKpis />
      </motion.div>
    </div>
  );
}
