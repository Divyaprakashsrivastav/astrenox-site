"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HeroCta from "./HeroCta";
import HeroKpis from "./HeroKpis";
import { homeHero } from "@/app/content/homepage-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const lineReveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(5px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay, ease: EASE_OUT },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  }),
};

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
        variants={fadeUp}
        className="hero-eyebrow"
      >
        {homeHero.eyebrow}
      </motion.p>

      <h1 className="hero-title">
        <motion.span
          className="hero-title-line"
          custom={0.06}
          initial="hidden"
          animate={show}
          variants={lineReveal}
        >
          {headline.line1}
        </motion.span>
        <motion.span
          className="hero-title-line"
          custom={0.14}
          initial="hidden"
          animate={show}
          variants={lineReveal}
        >
          <span className="hero-gradient-text">{headline.highlightA}</span>
          {headline.line2After}
        </motion.span>
        <motion.span
          className="hero-title-line"
          custom={0.22}
          initial="hidden"
          animate={show}
          variants={lineReveal}
        >
          <span className="hero-gradient-text">{headline.highlightB}</span>{" "}
          {headline.line3}
        </motion.span>
      </h1>

      <motion.span
        className="hero-accent-line"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.32, ease: EASE_OUT }}
        aria-hidden
      />

      <motion.p
        custom={0.34}
        initial="hidden"
        animate={show}
        variants={fadeUp}
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
            transition: { staggerChildren: 0.1, delayChildren: 0.44 },
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
