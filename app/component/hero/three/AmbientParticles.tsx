"use client";

import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLOW } from "./colors";
import { useHeroMouse } from "./HeroMouseProvider";
import type { HeroQuality } from "./useHeroQuality";
import { QUALITY_CONFIG } from "./useHeroQuality";

interface AmbientParticlesProps {
  quality: HeroQuality;
}

export default function AmbientParticles({ quality }: AmbientParticlesProps) {
  const cfg = QUALITY_CONFIG[quality];
  const mouse = useHeroMouse();
  const group = useRef<THREE.Group>(null);
  const smooth = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!group.current) return;
    smooth.current.x += (mouse.x - smooth.current.x) * 0.04;
    smooth.current.y += (mouse.y - smooth.current.y) * 0.04;
    group.current.rotation.y = smooth.current.x * 0.08;
    group.current.rotation.x = smooth.current.y * 0.04;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });

  return (
    <group ref={group}>
      <Sparkles
        count={cfg.sparkles}
        scale={[38, 22, 32]}
        size={2.2}
        speed={0.35}
        opacity={0.45}
        color={GLOW.soft}
      />
      <Sparkles
        count={Math.floor(cfg.sparkles * 0.45)}
        scale={[28, 16, 24]}
        size={1.4}
        speed={0.55}
        opacity={0.3}
        color={GLOW.blue}
      />
    </group>
  );
}
