"use client";

import { useEffect, useState, type RefObject } from "react";

type Options = {
  /** Viewport ratio for focus line (0–1). Default 0.42 */
  focusRatio?: number;
  /** Selector for items inside container. Default "[data-scroll-item]" */
  itemSelector?: string;
  /** data attribute written on items if missing, use data-scroll-item */
};

/**
 * Passive, rAF-throttled scroll tracking for horizontal workflow / lifecycle sections.
 */
export function useScrollActiveIndex(
  containerRef: RefObject<HTMLElement | null>,
  itemCount: number,
  options: Options = {}
) {
  const { focusRatio = 0.42, itemSelector = "[data-scroll-item]" } = options;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || itemCount < 1) return;

    let raf = 0;
    let last = -1;

    const measure = () => {
      raf = 0;
      const cards = el.querySelectorAll<HTMLElement>(itemSelector);
      if (!cards.length) return;

      const center = window.innerHeight * focusRatio;
      let closest = 0;
      let min = Infinity;

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - center);
        if (dist < min) {
          min = dist;
          closest = i;
        }
      });

      if (closest !== last) {
        last = closest;
        setActiveIndex(closest);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [containerRef, itemCount, focusRatio, itemSelector]);

  return activeIndex;
}
