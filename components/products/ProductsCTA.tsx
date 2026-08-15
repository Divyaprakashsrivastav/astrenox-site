"use client";

import { memo } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productsCta } from "@/app/content/products-content";
import { isActionableCtaHref } from "@/lib/cta";
import { EASE_PREMIUM } from "../v2/motion";

function ProductsCTA() {
  return (
    <section className="products-section products-inner">
      <motion.div
        className="products-glass products-cta"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
      >
        <p className="products-eyebrow">{productsCta.eyebrow}</p>
        <h2 className="products-section-title mt-2">{productsCta.title}</h2>
        <p className="products-body mt-4 mx-auto"><FormattedText text={productsCta.description} /></p>
        <div className="products-cta-actions">
          <Link href={productsCta.primaryHref} className="products-btn-primary">
            {productsCta.primaryCta}
            <ArrowRight size={16} />
          </Link>
          {productsCta.secondaryCta && isActionableCtaHref(productsCta.secondaryHref) ? (
            <Link href={productsCta.secondaryHref} className="products-btn-secondary">
              {productsCta.secondaryCta}
            </Link>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}

export default memo(ProductsCTA);
