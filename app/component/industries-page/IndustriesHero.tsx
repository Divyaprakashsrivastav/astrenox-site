"use client";

import { motion } from "framer-motion";
import { industriesPageContent as c } from "@/app/content/industries-page-content";
import { EASE_PREMIUM } from "../v2/motion";
import IndustriesHeroBackdrop from "./IndustriesHeroBackdrop";

export default function IndustriesHero() {
  return (
    <section className="indp-hero">
      <IndustriesHeroBackdrop />
      <div className="indp-hero-inner">
        <motion.p
          className="indp-hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          Industries
        </motion.p>
        <motion.h1
          className="indp-hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease: EASE_PREMIUM }}
        >
          {c.pageTitle}
        </motion.h1>
      </div>
    </section>
  );
}
