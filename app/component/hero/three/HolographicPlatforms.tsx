"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { GLOW_HEX } from "./colors";
import { generatePlatforms } from "./sceneData";
import type { HeroQuality } from "./useHeroQuality";
import { QUALITY_CONFIG } from "./useHeroQuality";

interface HolographicPlatformsProps {
  quality: HeroQuality;
}

export default function HolographicPlatforms({ quality }: HolographicPlatformsProps) {
  const cfg = QUALITY_CONFIG[quality];
  const platforms = useMemo(() => generatePlatforms(cfg.platforms), [cfg.platforms]);
  const groupRefs = useRef<(THREE.Group | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    platforms.forEach((plat, i) => {
      const g = groupRefs.current[i];
      if (!g) return;
      const floatY = Math.sin(t * plat.floatSpeed + plat.phase) * 0.2;
      g.position.set(plat.position[0], plat.position[1] + floatY, plat.position[2]);
      g.rotation.y = plat.rotation[1] + t * 0.015;
    });
  });

  return (
    <group>
      {platforms.map((plat, i) => (
        <group
          key={i}
          ref={(el) => {
            groupRefs.current[i] = el;
          }}
        >
          <mesh scale={plat.scale as [number, number, number]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={GLOW_HEX.purple}
              emissive={GLOW_HEX.violet}
              emissiveIntensity={0.45}
              transparent
              opacity={0.22}
              metalness={0.5}
              roughness={0.15}
              toneMapped={false}
            />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
            <ringGeometry args={[plat.scale[0] * 0.35, plat.scale[0] * 0.48, 48]} />
            <meshBasicMaterial
              color={GLOW_HEX.soft}
              transparent
              opacity={0.35}
              toneMapped={false}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
