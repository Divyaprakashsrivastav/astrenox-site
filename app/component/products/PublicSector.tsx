"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { publicSectorSection } from "@/app/content/products-content";
import ProductsSectionShell from "./ProductsSectionShell";
import ProductsAccordion from "./ProductsAccordion";
import { EASE_PREMIUM } from "../v2/motion";

function PublicSector() {
  return (
    <section className="products-section products-inner">
      <ProductsSectionShell
        eyebrow={publicSectorSection.label}
        title={publicSectorSection.title}
        description={publicSectorSection.description}
      />

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM }}
      >
        <h3 className="products-card-title">{publicSectorSection.useCasesTitle}</h3>

        <div className="products-table-wrap mt-6">
          <table className="products-table">
            <thead>
              <tr>
                <th>Domain</th>
                <th>AI Application</th>
                <th>Operational Impact</th>
              </tr>
            </thead>
            <tbody>
              {publicSectorSection.table.map((row) => (
                <tr key={row.domain}>
                  <td>{row.domain}</td>
                  <td>{row.aiApplication}</td>
                  <td>{row.operationalImpact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="mt-12">
        <ProductsAccordion
          items={[
            {
              id: "challenges",
              title: publicSectorSection.challenges.title,
              defaultOpen: true,
              content: (
                <>
                  <p className="products-body">{publicSectorSection.challenges.intro}</p>
                  <h4 className="products-card-title mt-6 text-base">
                    {publicSectorSection.challenges.barriersTitle}
                  </h4>
                  <ul className="products-detail-list mt-4">
                    {publicSectorSection.challenges.barriers.map((barrier) => (
                      <li key={barrier}>{barrier}</li>
                    ))}
                  </ul>
                </>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}

export default memo(PublicSector);
