"use client";

import { memo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

interface ProductsAccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

function ProductsAccordion({
  items,
  className = "",
  allowMultiple = false,
}: ProductsAccordionProps) {
  const defaultOpen = items.filter((i) => i.defaultOpen).map((i) => i.id);
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpen.length > 0 ? defaultOpen : items[0] ? [items[0].id] : []
  );

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  return (
    <div className={`products-accordion ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="products-accordion-item">
            <button
              type="button"
              className={`products-accordion-trigger ${isOpen ? "products-accordion-trigger--open" : ""}`}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: EASE_PREMIUM }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="products-accordion-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                >
                  <div className="products-accordion-content">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default memo(ProductsAccordion);
