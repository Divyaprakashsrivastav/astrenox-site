"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  FileText,
  ArrowLeftRight,
  Receipt,
  Boxes,
  FolderOpen,
} from "lucide-react";
import { whitelabelSection } from "@/app/content/products-content";
import ProductsSectionShell from "./ProductsSectionShell";
import ProductsAccordion from "./ProductsAccordion";
import { EASE_PREMIUM } from "../v2/motion";

const ICONS: Record<string, typeof Building2> = {
  property: Building2,
  tendering: FileText,
  p2p: ArrowLeftRight,
  invoice: Receipt,
  asset: Boxes,
  dms: FolderOpen,
};

function Whitelabel() {
  return (
    <section className="products-section">
      <div className="products-inner">
        <ProductsSectionShell
          eyebrow={whitelabelSection.label}
          title={whitelabelSection.title}
          description={whitelabelSection.description}
        />

        <div className="mt-10">
          <ProductsAccordion
            items={[
              {
                id: "framework",
                title: whitelabelSection.framework.title,
                defaultOpen: true,
                content: (
                  <ul className="products-detail-list">
                    {whitelabelSection.framework.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>

        <h3 className="products-card-title mt-12">{whitelabelSection.solutionsTitle}</h3>
      </div>

      <div className="products-inner mt-8">
        <div className="products-scroll-row">
          {whitelabelSection.solutions.map((sol, i) => {
            const Icon = ICONS[sol.id] ?? Building2;
            return (
              <motion.article
                key={sol.id}
                className="products-glass products-scroll-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: EASE_PREMIUM }}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              >
                <div className="products-scroll-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="products-card-title">{sol.title}</h3>
                <p className="products-body mt-3 text-sm">{sol.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Whitelabel);
