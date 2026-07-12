"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { productsPageHero } from "@/app/content/products-page-content";
import { EASE_PREMIUM } from "../../v2/motion";
import ProductsPageHeroBackground from "./ProductsPageHeroBackground";
import ProductsPageHeroVisual from "./ProductsPageHeroVisual";

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_PREMIUM } },
};

export default function ProductsPageHero() {
  return (
    <section className="pp-hero" aria-labelledby="pp-hero-title">
      <ProductsPageHeroBackground />

      <div className="pp-hero-shell">
        <div className="pp-hero-grid">
          <motion.div
            className="pp-hero-copy"
            variants={STAGGER}
            initial="hidden"
            animate="show"
          >
            <motion.p className="pp-hero-label" variants={FADE_UP}>
              {productsPageHero.label}
            </motion.p>

            <motion.h1 id="pp-hero-title" className="pp-hero-headline" variants={FADE_UP}>
              <span className="pp-hero-headline-line">{productsPageHero.titleLine1}</span>
              <span className="pp-hero-headline-line pp-hero-headline-line--accent">
                {productsPageHero.titleLine2}
              </span>
              <span className="pp-hero-headline-line pp-hero-headline-line--accent">
                {productsPageHero.titleLine3}
              </span>
            </motion.h1>

            <motion.p className="pp-hero-desc" variants={FADE_UP}>
              {productsPageHero.description}
            </motion.p>

            <motion.div className="pp-hero-actions" variants={FADE_UP}>
              <Link href={productsPageHero.primaryHref} className="pp-hero-btn pp-hero-btn--primary">
                {productsPageHero.primaryCta}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href={productsPageHero.secondaryHref} className="pp-hero-btn pp-hero-btn--secondary">
                {productsPageHero.secondaryCta}
              </Link>
            </motion.div>

            <motion.ul className="pp-hero-ribbon" variants={FADE_UP} aria-label="Product suite">
              {productsPageHero.ribbon.map((name, i) => (
                <motion.li
                  key={name}
                  className="pp-hero-ribbon-pill"
                  animate={{ y: [0, -3 - (i % 2), 0] }}
                  transition={{
                    duration: 4 + i * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <Check size={11} strokeWidth={2.5} aria-hidden />
                  {name}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="pp-hero-visual-col"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE_PREMIUM }}
          >
            <ProductsPageHeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
