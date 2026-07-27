"use client";

import { memo } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import { customCrmSection } from "@/app/content/products-content";
import ProductsSectionShell from "./ProductsSectionShell";
import ProductsAccordion from "./ProductsAccordion";

function CustomCRM() {
  return (
    <section className="products-section products-inner">
      <ProductsSectionShell
        eyebrow={customCrmSection.label}
        title={customCrmSection.title}
        description={customCrmSection.description}
      />

      <div className="mt-10">
        <ProductsAccordion
          items={customCrmSection.subsections.map((subsection) => ({
            id: subsection.id,
            title: subsection.title,
            content: (
              <>
                <p className="products-body"><FormattedText text={subsection.intro} /></p>
                <ul className="products-detail-list mt-4">
                  {subsection.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </>
            ),
          }))}
        />
      </div>

      <motion.div
        className="products-crm-grid mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {customCrmSection.subsections.map((card) => (
          <motion.div
            key={card.id}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="products-glass products-crm-card"
          >
            <h3 className="products-card-title">{card.title}</h3>
            <p className="products-body mt-3 text-sm"><FormattedText text={card.intro} /></p>
            <ul className="products-detail-list mt-4">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="text-sm">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default memo(CustomCRM);
