"use client";

import { motion } from "framer-motion";
import { bmsPageContent as c } from "@/app/content/bms-page-content";
import { EASE_PREMIUM } from "../v2/motion";
import BmsHeroBackdrop from "./BmsHeroBackdrop";

export default function BmsHero() {
  return (
    <section className="bmsp-hero">
      <BmsHeroBackdrop />
      <div className="bmsp-hero-inner">
        <motion.p
          className="bmsp-hero-eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          Infrastructure Solutions
        </motion.p>
        <motion.h1
          className="bmsp-hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: EASE_PREMIUM }}
        >
          {c.pageTitle}
        </motion.h1>
        <motion.p
          className="bmsp-hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: EASE_PREMIUM }}
        >
          {c.heroIntro}
        </motion.p>
      </div>
    </section>
  );
}
