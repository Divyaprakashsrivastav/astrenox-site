"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mvpStudioContent } from "@/app/content/mvp-studio-content";
import { EASE_PREMIUM } from "../v2/motion";
import MVPStudioDashboard from "./MVPStudioDashboard";

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

function MVPStudioHero() {
  const { hero } = mvpStudioContent;
  const titleLines = hero.title.split("\n");

  return (
    <section className="mvp-inner mvp-hero-section" aria-labelledby="mvp-hero-title">
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

          <motion.h1 id="mvp-hero-title" className="mvp-hero-headline" variants={fadeUp}>
            {titleLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p className="mvp-hero-subtitle" variants={fadeUp}>
            {hero.subtitle}
          </motion.p>

          <motion.div className="mvp-hero-ctas" variants={fadeUp}>
            <Link href={hero.primaryHref} className="mvp-btn-primary">
              {hero.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={hero.secondaryHref} className="mvp-btn-secondary">
              {hero.secondaryCta}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: EASE_PREMIUM }}
        >
          <MVPStudioDashboard />
        </motion.div>
      </div>
    </section>
  );
}

export default memo(MVPStudioHero);
