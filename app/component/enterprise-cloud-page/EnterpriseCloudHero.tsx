"use client";

import { motion } from "framer-motion";
import { enterpriseCloudPageContent as c } from "@/app/content/enterprise-cloud-page-content";
import { EASE_PREMIUM } from "../v2/motion";
import EnterpriseCloudHeroBackdrop from "./EnterpriseCloudHeroBackdrop";

export default function EnterpriseCloudHero() {
  return (
    <section className="ecms-hero">
      <EnterpriseCloudHeroBackdrop />
      <div className="ecms-hero-inner">
        <motion.p
          className="ecms-hero-eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          Infrastructure Solutions
        </motion.p>
        <motion.h1
          className="ecms-hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: EASE_PREMIUM }}
        >
          {c.pageTitle}
        </motion.h1>
        <motion.p
          className="ecms-hero-desc"
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
