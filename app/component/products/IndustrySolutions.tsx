"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { industrySolutionsSection } from "@/app/content/products-content";
import ProductsSectionShell from "./ProductsSectionShell";
import ProductsAccordion from "./ProductsAccordion";
import { EASE_PREMIUM } from "../v2/motion";

function IndustrySolutions() {
  const [activeOverview, setActiveOverview] = useState<string>(
    industrySolutionsSection.overviews[0].id
  );
  const overview = industrySolutionsSection.overviews.find(
    (o) => o.id === activeOverview
  )!;

  return (
    <section className="products-section products-inner">
      <ProductsSectionShell
        eyebrow={industrySolutionsSection.label}
        title={industrySolutionsSection.subtitle}
      />

      <h3 className="products-card-title mt-10">Industry Overviews</h3>

      <div className="products-tabs mt-6" role="tablist">
        {industrySolutionsSection.overviews.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeOverview === item.id}
            className={`products-tab ${activeOverview === item.id ? "products-tab--active" : ""}`}
            onClick={() => setActiveOverview(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeOverview}
          role="tabpanel"
          className="products-glass p-8 mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        >
          <h3 className="products-card-title">{overview.title}</h3>

          <div className="mt-6">
            <h4 className="products-detail-block h4-inline">{overview.strategicOverview.title}</h4>
            <p className="products-body mt-3">{overview.strategicOverview.text}</p>
          </div>

          <div className="mt-8">
            <h4 className="products-detail-block h4-inline">{overview.portfolio.title}</h4>
            <ul className="products-detail-list mt-4">
              {overview.portfolio.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="products-detail-block h4-inline">{overview.businessValue.title}</h4>
            <p className="products-body mt-3">{overview.businessValue.text}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <h3 className="products-card-title mt-16">{industrySolutionsSection.detailedTitle}</h3>

      <div className="mt-8">
        <ProductsAccordion
          allowMultiple
          items={industrySolutionsSection.detailed.map((industry) => ({
            id: industry.id,
            title: industry.title,
            content: (
              <>
                <p className="products-body">{industry.intro}</p>

                <h4 className="products-card-title mt-8 text-base">{industry.aiSolutions.title}</h4>
                <ul className="products-detail-list mt-4">
                  {industry.aiSolutions.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="products-card-title mt-8 text-base">{industry.customDev.title}</h4>
                <ul className="products-detail-list mt-4">
                  {industry.customDev.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ),
          }))}
        />
      </div>
    </section>
  );
}

export default memo(IndustrySolutions);
