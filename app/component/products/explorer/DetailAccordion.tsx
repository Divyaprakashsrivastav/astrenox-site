"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { CatalogAccordion } from "@/app/content/products-catalog";

type DetailAccordionProps = {
  items: CatalogAccordion[];
};

function DetailAccordion({ items }: DetailAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  if (!items.length) return null;

  return (
    <div className="products-accordion-wrap">
      <h4 className="products-showcase-label">Technical Details</h4>
      <div className="products-accordion">
        {items.map((item) => {
          const open = openId === item.id;
          return (
            <div key={item.id} className={`products-accordion-item ${open ? "products-accordion-item--open" : ""}`}>
              <button
                type="button"
                className="products-accordion-trigger"
                onClick={() => setOpenId(open ? null : item.id)}
                aria-expanded={open}
              >
                {item.title}
                <ChevronDown
                  size={16}
                  className={`products-accordion-chevron ${open ? "products-accordion-chevron--open" : ""}`}
                  aria-hidden
                />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="products-accordion-panel"
                  >
                    {item.paragraphs.map((p) => (
                      <p key={p} className="products-showcase-body">
                        {p}
                      </p>
                    ))}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="products-detail-list">
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(DetailAccordion);
