"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";
import type { HeroQuality } from "./useHeroQuality";
import { QUALITY_CONFIG } from "./useHeroQuality";

interface PostEffectsProps {
  quality: HeroQuality;
}

export default function PostEffects({ quality }: PostEffectsProps) {
  const cfg = QUALITY_CONFIG[quality];

  return (
    <EffectComposer multisampling={quality === "mobile" ? 0 : 4}>
      <Bloom
        luminanceThreshold={0.15}
        luminanceSmoothing={0.85}
        intensity={cfg.bloom}
        mipmapBlur
      />
    </EffectComposer>
  );
}
