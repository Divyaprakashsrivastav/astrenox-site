"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { EASE_PREMIUM } from "../v2/motion";

const PREVIEW_MIN_CHARS = 180;
const EXPAND_TRANSITION = { duration: 0.5, ease: EASE_PREMIUM };

function getPreviewCount(items: readonly string[]): number {
  if (items.length <= 1) return items.length;

  let chars = 0;
  for (let i = 0; i < items.length; i++) {
    chars += items[i].length;
    const count = i + 1;
    if (count >= 2 && chars >= PREVIEW_MIN_CHARS) return count;
    if (count >= 3) return count;
  }

  return items.length;
}

function itemClassName(item: string) {
  return item.startsWith("Technologies:")
    ? "tech-eco-content-item tech-eco-content-item--tech"
    : "tech-eco-content-item";
}

type TechCategoryContentProps = {
  items: readonly string[];
  categoryKey: string;
};

export default function TechCategoryContent({ items, categoryKey }: TechCategoryContentProps) {
  const [expanded, setExpanded] = useState(false);
  const previewCount = useMemo(() => getPreviewCount(items), [items]);
  const hasMore = previewCount < items.length;

  const previewItems = items.slice(0, previewCount);
  const restItems = items.slice(previewCount);

  const previewRef = useRef<HTMLUListElement>(null);
  const restRef = useRef<HTMLUListElement>(null);
  const [previewHeight, setPreviewHeight] = useState(0);
  const [restHeight, setRestHeight] = useState(0);

  useEffect(() => {
    setExpanded(false);
  }, [categoryKey]);

  useLayoutEffect(() => {
    setPreviewHeight(previewRef.current?.scrollHeight ?? 0);
    setRestHeight(restRef.current?.scrollHeight ?? 0);
  }, [items, previewCount, categoryKey]);

  if (!hasMore) {
    return (
      <ul className="tech-eco-content-list">
        {items.map((item) => (
          <li key={item} className={itemClassName(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  const collapsedHeight = previewHeight || undefined;
  const expandedHeight = previewHeight + restHeight || undefined;

  return (
    <div className={`tech-eco-content-body${expanded ? " is-expanded" : " is-collapsed"}`}>
      <div className="tech-eco-content-expand-wrap">
        <motion.div
          className="tech-eco-content-expand"
          initial={false}
          animate={{ height: expanded ? expandedHeight : collapsedHeight }}
          transition={EXPAND_TRANSITION}
        >
          <ul ref={previewRef} className="tech-eco-content-list">
            {previewItems.map((item) => (
              <li key={item} className={itemClassName(item)}>
                {item}
              </li>
            ))}
          </ul>

          <motion.ul
            ref={restRef}
            className="tech-eco-content-list tech-eco-content-list--rest"
            initial={false}
            animate={{ opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.45, delay: expanded ? 0.08 : 0, ease: EASE_PREMIUM }}
          >
            {restItems.map((item) => (
              <li key={item} className={itemClassName(item)}>
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {!expanded ? <div className="tech-eco-content-fade" aria-hidden /> : null}
      </div>

      <button
        type="button"
        className="tech-eco-read-more"
        aria-expanded={expanded}
        onClick={() => setExpanded((open) => !open)}
      >
        <span>{expanded ? "Read Less" : "Read More"}</span>
        <ChevronDown
          size={15}
          strokeWidth={2.25}
          className={`tech-eco-read-more-icon${expanded ? " is-flipped" : ""}`}
          aria-hidden
        />
      </button>
    </div>
  );
}
