"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLOW_HEX } from "./colors";
import { useHeroMouse } from "./HeroMouseProvider";

export default function SceneLighting() {
  const mouse = useHeroMouse();
  const key = useRef<THREE.PointLight>(null);
  const rim = useRef<THREE.DirectionalLight>(null);
  const fill = useRef<THREE.PointLight>(null);
  const smooth = useRef({ x: 0, y: 0, intensity: 0.5 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    smooth.current.x += (mouse.x - smooth.current.x) * 0.05;
    smooth.current.y += (mouse.y - smooth.current.y) * 0.05;
    smooth.current.intensity += (mouse.intensity - smooth.current.intensity) * 0.07;

    if (key.current) {
      key.current.position.x = smooth.current.x * 6;
      key.current.position.y = 4 + smooth.current.y * 2;
      key.current.intensity = 2.2 + smooth.current.intensity * 1.4 + Math.sin(t * 0.6) * 0.15;
    }
    if (rim.current) {
      rim.current.intensity = 1.1 + smooth.current.intensity * 0.35;
    }
    if (fill.current) {
      fill.current.intensity = 0.9 + Math.sin(t * 0.45) * 0.12 + smooth.current.intensity * 0.25;
      fill.current.position.x = -smooth.current.x * 4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.08} color={GLOW_HEX.violet} />
      <pointLight
        ref={key}
        position={[0, 4, 8]}
        color={GLOW_HEX.soft}
        intensity={2.4}
        distance={42}
        decay={2}
      />
      <directionalLight
        ref={rim}
        position={[-8, 6, -4]}
        color={GLOW_HEX.blue}
        intensity={1.2}
      />
      <pointLight
        ref={fill}
        position={[0, -2, 12]}
        color={GLOW_HEX.purple}
        intensity={0.95}
        distance={35}
        decay={2}
      />
      <spotLight
        position={[0, 10, 0]}
        angle={0.55}
        penumbra={0.85}
        intensity={0.35}
        color={GLOW_HEX.violet}
        distance={50}
      />
    </>
  );
}
