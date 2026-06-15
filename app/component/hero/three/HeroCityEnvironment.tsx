"use client";

import { Environment, Float } from "@react-three/drei";
import { useMemo } from "react";
import AINodes from "./AINodes";
import AmbientParticles from "./AmbientParticles";
import BackgroundStructures from "./BackgroundStructures";
import ConnectionNetwork from "./ConnectionNetwork";
import FloatingStructures from "./FloatingStructures";
import HolographicPlatforms from "./HolographicPlatforms";
import PostEffects from "./PostEffects";
import SceneCamera from "./SceneCamera";
import SceneLighting from "./SceneLighting";
import { generateNodes } from "./sceneData";
import { useHeroQuality, QUALITY_CONFIG } from "./useHeroQuality";

export default function HeroCityEnvironment() {
  const quality = useHeroQuality();
  const cfg = QUALITY_CONFIG[quality];
  const nodes = useMemo(() => generateNodes(cfg.nodes), [cfg.nodes]);

  return (
    <>
      <SceneCamera />
      <SceneLighting />

      <BackgroundStructures />

      <Float speed={0.6} rotationIntensity={0.08} floatIntensity={0.35}>
        <FloatingStructures quality={quality} />
      </Float>

      <Float speed={0.45} rotationIntensity={0.05} floatIntensity={0.28}>
        <HolographicPlatforms quality={quality} />
      </Float>

      <AINodes nodes={nodes} />
      <ConnectionNetwork nodes={nodes} quality={quality} />
      <AmbientParticles quality={quality} />

      <Environment preset="night" environmentIntensity={0.14} />

      <PostEffects quality={quality} />
    </>
  );
}
