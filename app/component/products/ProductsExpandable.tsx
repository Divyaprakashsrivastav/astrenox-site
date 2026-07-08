"use client";

import { memo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";

interface ProductsExpandableProps {
  preview: ReactNode;
  expanded: ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
  className?: string;
}

function ProductsExpandable({
  preview,
  expanded,
  expandLabel = "Read more",
  collapseLabel = "Show less",
  className = "",
}: ProductsExpandableProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`products-expandable ${className}`}>
      <div className="products-expandable-preview">{preview}</div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="products-expandable-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
          >
            {expanded}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        className="products-expandable-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? collapseLabel : expandLabel}
      </button>
    </div>
  );
}

export default memo(ProductsExpandable);
