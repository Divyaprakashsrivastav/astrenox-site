"use client";

import { memo, useState } from "react";
import FormattedText from "../ui/FormattedText";
import { motion, AnimatePresence } from "framer-motion";
import { flagshipProducts, productsFlagship, type ProductId } from "@/app/content/products-content";
import ProductVisual from "./ProductVisual";
import { EASE_PREMIUM } from "../v2/motion";

const tabVariants = {
  enter: { opacity: 0, y: 16, scale: 0.98 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.98 },
};

function ProductSelector() {
  const [active, setActive] = useState<ProductId>("solvoris");
  const product = flagshipProducts.find((p) => p.id === active)!;

  return (
    <section id="product-selector" className="products-section products-inner">
      <p className="products-eyebrow">{productsFlagship.label}</p>
      <h2 className="products-section-title">{productsFlagship.title}</h2>

      <div className="products-tabs mt-10" role="tablist">
        {flagshipProducts.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={active === p.id}
            className={`products-tab ${active === p.id ? "products-tab--active" : ""}`}
            onClick={() => setActive(p.id)}
          >
            {p.name}
            {active === p.id && (
              <motion.span
                layoutId="products-tab-indicator"
                className="products-tab-indicator"
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          variants={tabVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: EASE_PREMIUM }}
        >
          <div className="products-detail-grid">
            <ProductVisual productId={active} />

            <div className="products-glass products-detail-panel">
              <p className="text-sm font-medium text-[#8b5cf6]">
                {product.name} | {product.tagline}
              </p>
              <p className="products-body mt-4"><FormattedText text={product.description} /></p>

              {product.features.map((feature) => (
                <div key={feature.label} className="products-detail-block">
                  <h4>{feature.label}</h4>
                  <p className="products-body"><FormattedText text={feature.text} /></p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default memo(ProductSelector);
