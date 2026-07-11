"use client";

import { motion } from "framer-motion";
import HeroCta from "./HeroCta";
import HeroKpis from "./HeroKpis";
import { homeHero } from "@/app/content/homepage-content";
import { ExpandableBlock } from "../home/disclosure/HomeDisclosure";

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
  const lead = HERO_PARAGRAPHS[0] ?? "";
  const rest = HERO_PARAGRAPHS.slice(1);

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
        <p>{lead}</p>
        {rest.length > 0 && (
          <ExpandableBlock expandLabel="Continue reading" collapseLabel="Show less">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ExpandableBlock>
        )}
      </motion.div>

      <motion.div className="hero-cta-row" {...fadeUp(0.45)}>
        <HeroCta href={homeHero.primaryHref} variant="primary">
          {homeHero.primaryCta}
        </HeroCta>
        <HeroCta href={homeHero.secondaryHref} variant="ghost">
          {homeHero.secondaryCta}
        </HeroCta>
      </motion.div>

      <motion.div className="hero-metrics-wrap hero-kpi-disclosure" {...fadeUp(0.6)}>
        <ExpandableBlock
          expandLabel="View performance indicators"
          collapseLabel="Hide performance indicators"
        >
          <div className="hero-metrics">
            <HeroKpis />
          </div>
        </ExpandableBlock>
      </motion.div>
    </div>
  );
}
