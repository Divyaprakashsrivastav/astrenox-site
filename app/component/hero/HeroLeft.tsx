"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HeroCta from "./HeroCta";
import HeroKpis from "./HeroKpis";
import { homeHero } from "@/app/content/homepage-content";
import { lineRevealVariant, MOTION } from "../motion/home-motion";

export default function HeroLeft() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });
  const { headline } = homeHero;
  const show = isInView ? "visible" : "hidden";

  return (
    <div ref={ref} className="hero-left">
      <motion.p
        custom={0}
        initial="hidden"
        animate={show}
        variants={lineRevealVariant}
        className="hero-eyebrow"
      >
        {homeHero.eyebrow}
      </motion.p>

      <h1 className="hero-title">
        <motion.span
          className="hero-title-line"
          custom={MOTION.lineReveal.stagger}
          initial="hidden"
          animate={show}
          variants={lineRevealVariant}
        >
          {headline.line1}
        </motion.span>
        <motion.span
          className="hero-title-line"
          custom={MOTION.lineReveal.stagger * 2}
          initial="hidden"
          animate={show}
          variants={lineRevealVariant}
        >
          {headline.highlightA}
          {headline.line2After} {headline.highlightB} {headline.line3}
        </motion.span>
      </h1>

      <motion.p
        custom={MOTION.lineReveal.stagger * 3}
        initial="hidden"
        animate={show}
        variants={lineRevealVariant}
        className="hero-description"
      >
        {homeHero.description}
      </motion.p>

      <motion.div
        className="hero-cta-row"
        initial="hidden"
        animate={show}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: MOTION.lineReveal.stagger,
              delayChildren: MOTION.lineReveal.stagger * 4,
            },
          },
        }}
      >
        <HeroCta href={homeHero.primaryHref} variant="primary">
          {homeHero.primaryCta}
        </HeroCta>
        <HeroCta href={homeHero.secondaryHref} variant="ghost">
          {homeHero.secondaryCta}
        </HeroCta>
      </motion.div>

      <HeroKpis className="hero-kpis-inline" />
    </div>
  );
}
