"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures soft navigations (and back/forward) don't leave scroll locks or
 * stale body styles from the previous route.
 */
export default function RouteReset() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.removeProperty("overflow");
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("paddingRight");
    document.body.classList.remove("overflow-hidden");
  }, [pathname]);

  return null;
}
