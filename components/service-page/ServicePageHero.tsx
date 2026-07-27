"use client";

import { memo, type ComponentType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import { EASE_PREMIUM } from "../v2/motion";
import GradientHeadline from "../ui/GradientHeadline";
import FormattedText from "../ui/FormattedText";
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
  intro?: ServicePageContent["intro"];
  visual: HeroVisualVariant;
  HeroVisualComponent?: ComponentType | null;
  HeroAmbientComponent?: ComponentType;
  heroSectionClassName?: string;
};

function ServicePageHero({
  hero,
  intro,
  visual,
  HeroVisualComponent,
  HeroAmbientComponent,
  heroSectionClassName,
}: ServicePageHeroProps) {
  const titleLines = hero.title.split("\n");
  const visualConfig = heroVisualConfigs[visual];
  const showHeroVisual = HeroVisualComponent !== null;

  return (
    <section
      className={`mvp-inner mvp-hero-section${!showHeroVisual ? " mvp-hero-section--copy-only" : ""}${heroSectionClassName ? ` ${heroSectionClassName}` : ""}`}
      aria-labelledby="service-hero-title"
    >
      {HeroAmbientComponent ? <HeroAmbientComponent /> : null}

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

          <motion.div variants={fadeUp}>
            <GradientHeadline id="service-hero-title" className="mvp-hero-headline">
              {titleLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </GradientHeadline>
          </motion.div>

          {hero.subtitle ? (
            <motion.p className="mvp-hero-subtitle" variants={fadeUp}>
              <FormattedText text={hero.subtitle} />
            </motion.p>
          ) : null}

          {intro && intro.paragraphs.length > 0 ? (
            <motion.div className="mvp-hero-intro" variants={fadeUp}>
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>
                  <FormattedText text={paragraph} />
                </p>
              ))}
            </motion.div>
          ) : null}

          {hero.primaryCta && hero.primaryHref ? (
            <motion.div className="mvp-hero-ctas" variants={fadeUp}>
              <Link href={hero.primaryHref} className="mvp-btn-primary">
                {hero.primaryCta}
                <ArrowRight size={16} aria-hidden />
              </Link>
              {hero.secondaryCta && hero.secondaryHref ? (
                <Link href={hero.secondaryHref} className="mvp-btn-secondary">
                  {hero.secondaryCta}
                </Link>
              ) : null}
            </motion.div>
          ) : null}

          {hero.trustLine && (
            <motion.p className="mvp-hero-trust" variants={fadeUp}>
              <FormattedText text={hero.trustLine} />
            </motion.p>
          )}
        </motion.div>

        {showHeroVisual ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE_PREMIUM }}
          >
            {HeroVisualComponent ? (
              <HeroVisualComponent />
            ) : (
              <HeroVisual cards={visualConfig.cards} connections={[...visualConfig.connections]} />
            )}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

export default memo(ServicePageHero);
