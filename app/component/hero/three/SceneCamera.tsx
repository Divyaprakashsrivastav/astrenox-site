"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useHeroMouse } from "./HeroMouseProvider";

const BASE = new THREE.Vector3(0, 1.2, 14);
const LOOK = new THREE.Vector3(0, -0.2, 0);

export default function SceneCamera() {
  const { camera } = useThree();
  const mouse = useHeroMouse();
  const smooth = useRef({ x: 0, y: 0, intensity: 0.5 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    smooth.current.x += (mouse.x - smooth.current.x) * 0.045;
    smooth.current.y += (mouse.y - smooth.current.y) * 0.045;
    smooth.current.intensity += (mouse.intensity - smooth.current.intensity) * 0.06;

    const breathe = Math.sin(t * 0.28) * 0.22;
    const drift = Math.sin(t * 0.11) * 0.35;

    camera.position.x = BASE.x + smooth.current.x * 1.1 + drift * 0.15;
    camera.position.y = BASE.y + breathe + smooth.current.y * 0.55;
    camera.position.z = BASE.z + Math.cos(t * 0.09) * 0.45;

    camera.lookAt(
      LOOK.x + smooth.current.x * 0.35,
      LOOK.y + smooth.current.y * 0.2,
      LOOK.z
    );
  });

  return null;
}
