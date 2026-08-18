"use client";

import { motion } from "framer-motion";
import { softwareFactoryContent as c } from "@/app/content/software-factory-content";
import { EASE_PREMIUM } from "../v2/motion";
import SoftwareFactoryHeroBackdrop from "./SoftwareFactoryHeroBackdrop";

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

const RISE = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export default function SoftwareFactoryHero() {
  return (
    <section className="asf-hero" aria-labelledby="asf-hero-title">
      <SoftwareFactoryHeroBackdrop />

      <div className="asf-hero-content">
        <motion.div variants={STAGGER} initial="hidden" animate="show" className="asf-hero-copy">
          <motion.p className="asf-hero-label" variants={RISE}>
            {c.label}
          </motion.p>
          <motion.h1 id="asf-hero-title" className="asf-hero-title" variants={RISE}>
            {c.title}
          </motion.h1>
          <motion.p className="asf-hero-desc" variants={RISE}>
            {c.intro}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
