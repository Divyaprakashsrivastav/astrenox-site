"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import { EASE_PREMIUM } from "../v2/motion";
import HeroVisual from "./HeroVisual";
import type { HeroVisualVariant } from "./hero-visual-configs";
import { heroVisualConfigs } from "./hero-visual-configs";
import "../mvp-studio/mvp-studio.css";
import "./service-page-extra.css";

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

type ServicePageHeroProps = {
  hero: ServicePageContent["hero"];
  visual: HeroVisualVariant;
};

function ServicePageHero({ hero, visual }: ServicePageHeroProps) {
  const titleLines = hero.title.split("\n");
  const visualConfig = heroVisualConfigs[visual];

  return (
    <section className="mvp-inner mvp-hero-section" aria-labelledby="service-hero-title">
      <div className="mvp-hero-grid">
        <motion.div
          className="mvp-hero-copy"
          variants={STAGGER}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="mvp-hero-label" variants={fadeUp}>
            {hero.label}
          </motion.p>

          <motion.h1 id="service-hero-title" className="mvp-hero-headline" variants={fadeUp}>
            {titleLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {hero.subtitle ? (
            <motion.p className="mvp-hero-subtitle" variants={fadeUp}>
              {hero.subtitle}
            </motion.p>
          ) : null}

          <motion.div className="mvp-hero-ctas" variants={fadeUp}>
            <Link href={hero.primaryHref} className="mvp-btn-primary">
              {hero.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={hero.secondaryHref} className="mvp-btn-secondary">
              {hero.secondaryCta}
            </Link>
          </motion.div>

          {hero.trustLine && (
            <motion.p className="mvp-hero-trust" variants={fadeUp}>
              {hero.trustLine}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: EASE_PREMIUM }}
        >
          <HeroVisual cards={visualConfig.cards} connections={[...visualConfig.connections]} />
        </motion.div>
      </div>
    </section>
  );
}

export default memo(ServicePageHero);
