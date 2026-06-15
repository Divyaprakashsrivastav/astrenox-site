"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroCityEnvironment from "./HeroCityEnvironment";
import { HERO_BG } from "./colors";
import { useHeroQuality, QUALITY_CONFIG } from "./useHeroQuality";

interface HeroCanvasProps {
  active: boolean;
}

function HeroCanvas({ active }: HeroCanvasProps) {
  const quality = useHeroQuality();
  const cfg = QUALITY_CONFIG[quality];

  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, cfg.dpr]}
      gl={{
        antialias: quality !== "mobile",
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
      }}
      camera={{ position: [0, 1.2, 14], fov: 45, near: 0.1, far: 80 }}
    >
      <color attach="background" args={[HERO_BG]} />
      <fog attach="fog" args={[HERO_BG, 10, 48]} />
      <Suspense fallback={null}>
        <HeroCityEnvironment />
      </Suspense>
    </Canvas>
  );
}

export default HeroCanvas;
