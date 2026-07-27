"use client";

import { useEffect } from "react";

const REGION_SELECTOR = "main section, footer, [data-animation-region]";
const PAUSED_ATTRIBUTE = "data-animation-visibility";

/**
 * One shared observer pauses CSS animations in every off-screen page region.
 * This avoids one observer/listener per animated component.
 */
export default function AnimationVisibilityController() {
  useEffect(() => {
    const observed = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.removeAttribute(PAUSED_ATTRIBUTE);
          } else {
            entry.target.setAttribute(PAUSED_ATTRIBUTE, "paused");
          }
        }
      },
      { rootMargin: "160px 0px", threshold: 0 }
    );

    const observe = (element: Element) => {
      if (observed.has(element)) return;
      observed.add(element);
      observer.observe(element);
    };

    const scan = (root: ParentNode) => {
      if (root instanceof Element && root.matches(REGION_SELECTOR)) observe(root);
      root.querySelectorAll(REGION_SELECTOR).forEach(observe);
    };

    scan(document);

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) scan(node);
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    const syncDocumentVisibility = () => {
      document.documentElement.classList.toggle(
        "animations-page-hidden",
        document.hidden
      );
    };
    document.addEventListener("visibilitychange", syncDocumentVisibility);
    syncDocumentVisibility();

    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.removeEventListener("visibilitychange", syncDocumentVisibility);
      document.documentElement.classList.remove("animations-page-hidden");
    };
  }, []);

  return null;
}
