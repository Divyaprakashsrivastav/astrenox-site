"use client";

import { memo, useState } from "react";
import FormattedText from "../../ui/FormattedText";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { CatalogChip } from "@/app/content/products-catalog";

type FeatureChipsProps = {
  chips: CatalogChip[];
};

function FeatureChips({ chips }: FeatureChipsProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  if (!chips.length) return null;

  return (
    <div className="products-chips-wrap">
      <h4 className="products-showcase-label">Key Features</h4>
      <div className="products-chips" role="list">
        {chips.map((chip) => {
          const open = expanded === chip.id;
          return (
            <div key={chip.id} className="products-chip-item" role="listitem">
              <button
                type="button"
                className={`products-chip ${open ? "products-chip--open" : ""}`}
                onClick={() => setExpanded(open ? null : chip.id)}
                aria-expanded={open}
              >
                {chip.label}
                <ChevronDown
                  size={14}
                  className={`products-chip-chevron ${open ? "products-chip-chevron--open" : ""}`}
                  aria-hidden
                />
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="products-chip-detail"
                  >
                    <p className="products-chip-detail-title">{chip.title}</p>
                    <p className="products-chip-detail-text"><FormattedText text={chip.text} /></p>
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

export default memo(FeatureChips);
