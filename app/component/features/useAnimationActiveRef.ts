"use client";

import { useEffect, useState, type MutableRefObject, type RefObject } from "react";
import { useReducedMotion } from "./useReducedMotion";

export type AnimationActivityRef = MutableRefObject<boolean> & {
  subscribe: (listener: (active: boolean) => void) => () => void;
};

type InternalAnimationActivityRef = AnimationActivityRef & {
  listeners: Set<(active: boolean) => void>;
};

/**
 * Mutable ref — true when element is in view, tab is visible, and motion is allowed.
 * Subscribers allow the shared scheduler to fully stop off-screen loops and
 * resume them without polling.
 */
export function useAnimationActiveRef(elementRef: RefObject<Element | null>) {
  const [activeRef] = useState<InternalAnimationActivityRef>(() => {
    const listeners = new Set<(active: boolean) => void>();
    return {
      current: true,
      listeners,
      subscribe(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
    };
  });
  const reduced = useReducedMotion();

  useEffect(() => {
    const setActive = (next: boolean) => {
      if (activeRef.current === next) return;
      activeRef.current = next;
      activeRef.listeners.forEach((listener) => listener(next));
    };

    if (reduced) {
      setActive(false);
      return;
    }

    const el = elementRef.current;
    if (!el) return;

    let intersecting = true;

    const sync = () => {
      setActive(intersecting && !document.hidden && !reduced);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting;
        sync();
      },
      { rootMargin: "120px 0px 120px 0px", threshold: 0 }
    );

    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      setActive(false);
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [activeRef, elementRef, reduced]);

  return activeRef;
}
