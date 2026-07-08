"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productsExplorerHero } from "@/app/content/products-catalog";
import { EASE_PREMIUM } from "../v2/motion";
import ProductsHeroNetwork from "./ProductsHeroNetwork";
import ProductsHeroTrust from "./ProductsHeroTrust";

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

function ProductsHero() {
  return (
    <section className="products-inner products-hero-section" aria-labelledby="products-hero-title">
      <div className="products-hero-grid">
        <motion.div
          className="products-hero-copy"
          variants={STAGGER}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 id="products-hero-title" className="products-hero-headline" variants={fadeUp}>
            <span className="products-hero-headline-line">Enterprise AI Infrastructure</span>
            <span className="products-hero-headline-line products-hero-headline-accent">
              for Modern Businesses
            </span>
          </motion.h1>

          <motion.p className="products-hero-description" variants={fadeUp}>
            {productsExplorerHero.description}
          </motion.p>

          <motion.div className="products-hero-ctas" variants={fadeUp}>
            <Link href={productsExplorerHero.primaryHref} className="products-btn-primary products-hero-btn">
              {productsExplorerHero.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href={productsExplorerHero.secondaryHref}
              className="products-btn-secondary products-hero-btn"
            >
              {productsExplorerHero.secondaryCta}
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ProductsHeroTrust />
          </motion.div>
        </motion.div>

        <motion.div
          className="products-hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: EASE_PREMIUM }}
        >
          <ProductsHeroNetwork />
        </motion.div>
      </div>
    </section>
  );
}

export default memo(ProductsHero);
