"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { GLOW_HEX } from "./colors";

const COUNT = 18;

export default function BackgroundStructures() {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const instances = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        x: (Math.random() - 0.5) * 28,
        y: (Math.random() - 0.5) * 6 - 1,
        z: -28 - Math.random() * 18,
        h: 4 + Math.random() * 10,
        w: 0.8 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
      })),
    []
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    instances.forEach((inst, i) => {
      dummy.position.set(inst.x, inst.y + Math.sin(t * 0.08 + inst.phase) * 0.15, inst.z);
      dummy.scale.set(inst.w, inst.h, inst.w);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, COUNT]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={GLOW_HEX.purple}
        emissive={GLOW_HEX.violet}
        emissiveIntensity={0.25}
        transparent
        opacity={0.12}
        metalness={0.3}
        roughness={0.5}
        toneMapped={false}
      />
    </instancedMesh>
  );
}
