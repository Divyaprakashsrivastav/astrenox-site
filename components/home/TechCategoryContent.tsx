"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import FormattedText from "../ui/FormattedText";

const PREVIEW_MIN_CHARS = 180;

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
  const visibleItems = expanded || !hasMore ? items : items.slice(0, previewCount);

  useEffect(() => {
    setExpanded(false);
  }, [categoryKey]);

  return (
    <div className={`tech-eco-content-body${expanded ? " is-expanded" : " is-collapsed"}`}>
      <div className="tech-eco-content-expand-wrap">
        <ul className="tech-eco-content-list">
          {visibleItems.map((item) => (
            <li key={item} className={itemClassName(item)}>
              <FormattedText text={item} />
            </li>
          ))}
        </ul>
        {hasMore && !expanded ? <div className="tech-eco-content-fade" aria-hidden /> : null}
      </div>

      {hasMore ? (
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
      ) : null}
    </div>
  );
}
