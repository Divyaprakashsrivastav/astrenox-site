"use client";

import { motion } from "framer-motion";
import { homeHero } from "@/app/content/homepage-content";
import FormattedText from "../ui/FormattedText";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay, ease: EASE },
  };
}

const HERO_PARAGRAPHS = homeHero.description.split("\n\n").filter(Boolean);

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

      <motion.div className="hero-description" {...fadeUp(0.3)}>
        {HERO_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>
            <FormattedText text={paragraph} />
          </p>
        ))}
      </motion.div>
    </div>
  );
}
