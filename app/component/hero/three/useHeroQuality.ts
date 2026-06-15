"use client";

import { useEffect, useState } from "react";

export type HeroQuality = "mobile" | "tablet" | "desktop";

export const QUALITY_CONFIG = {
  desktop: {
    cubes: 52,
    servers: 36,
    blocks: 44,
    nodes: 26,
    connections: 40,
    sparkles: 140,
    platforms: 7,
    dpr: 2,
    bloom: 1.35,
  },
  tablet: {
    cubes: 30,
    servers: 20,
    blocks: 26,
    nodes: 16,
    connections: 24,
    sparkles: 80,
    platforms: 5,
    dpr: 1.5,
    bloom: 1.1,
  },
  mobile: {
    cubes: 18,
    servers: 12,
    blocks: 16,
    nodes: 10,
    connections: 14,
    sparkles: 45,
    platforms: 3,
    dpr: 1,
    bloom: 0.85,
  },
} as const;

export function useHeroQuality(): HeroQuality {
  const [quality, setQuality] = useState<HeroQuality>("desktop");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setQuality("mobile");
      else if (w < 1024) setQuality("tablet");
      else setQuality("desktop");
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return quality;
}
