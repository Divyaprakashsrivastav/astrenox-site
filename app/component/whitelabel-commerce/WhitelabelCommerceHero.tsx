"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { whitelabelCommerceContent as c } from "@/app/content/whitelabel-commerce-content";
import { EASE_PREMIUM } from "../v2/motion";
import WhitelabelCommerceHeroBackdrop from "./WhitelabelCommerceHeroBackdrop";

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const RISE = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export default function WhitelabelCommerceHero() {
  return (
    <section className="wlc-hero" aria-labelledby="wlc-hero-title">
      <WhitelabelCommerceHeroBackdrop />

      <div className="wlc-hero-content">
        <motion.div className="wlc-hero-copy" variants={STAGGER} initial="hidden" animate="show">
          <motion.h1 id="wlc-hero-title" className="wlc-hero-title" variants={RISE}>
            {c.hero.title}
          </motion.h1>
          <motion.p className="wlc-hero-desc" variants={RISE}>
            {c.hero.description}
          </motion.p>
          <motion.div className="wlc-hero-actions" variants={RISE}>
            <Link href={c.hero.primaryHref} className="wlc-btn wlc-btn--primary">
              {c.hero.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={c.hero.secondaryHref} className="wlc-btn wlc-btn--ghost">
              {c.hero.secondaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
