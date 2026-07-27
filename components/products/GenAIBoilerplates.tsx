"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { genAiSection } from "@/app/content/products-content";
import ProductsSectionShell from "./ProductsSectionShell";
import ProductsAccordion from "./ProductsAccordion";
import { EASE_PREMIUM } from "../v2/motion";

function GenAIBoilerplates() {
  const [activeIndustry, setActiveIndustry] = useState<string>(genAiSection.industries[0].id);
  const industry = genAiSection.industries.find((i) => i.id === activeIndustry)!;

  return (
    <section className="products-section products-inner">
      <ProductsSectionShell
        eyebrow={genAiSection.label}
        title={genAiSection.title}
        description={genAiSection.description}
      />

      <div className="mt-10">
        <ProductsAccordion
          items={[
            {
              id: "pillars",
              title: genAiSection.pillars.title,
              defaultOpen: true,
              content: (
                <ul className="products-detail-list">
                  {genAiSection.pillars.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
      </div>

      <h3 className="products-card-title mt-12">{genAiSection.industriesTitle}</h3>

      <div className="products-tabs mt-8" role="tablist">
        {genAiSection.industries.map((ind) => (
          <button
            key={ind.id}
            type="button"
            role="tab"
            aria-selected={activeIndustry === ind.id}
            className={`products-tab ${activeIndustry === ind.id ? "products-tab--active" : ""}`}
            onClick={() => setActiveIndustry(ind.id)}
          >
            {ind.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndustry}
          role="tabpanel"
          className="products-glass p-6 mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        >
          <h4 className="products-card-title">{industry.title}</h4>
          <ul className="products-detail-list mt-6">
            {industry.solutions.map((solution) => (
              <li key={solution}>{solution}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default memo(GenAIBoilerplates);
