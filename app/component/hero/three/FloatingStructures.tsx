"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { GLOW_HEX } from "./colors";
import { generateStructures, type StructureInstance } from "./sceneData";
import type { HeroQuality } from "./useHeroQuality";
import { QUALITY_CONFIG } from "./useHeroQuality";

interface FloatingStructuresProps {
  quality: HeroQuality;
}

function useInstances(count: number, kind: "cube" | "server" | "block") {
  return useMemo(() => generateStructures(count, kind), [count, kind]);
}

function InstancedGlassCubes({ instances }: { instances: StructureInstance[] }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < instances.length; i++) {
      const inst = instances[i];
      const floatY = Math.sin(t * inst.floatSpeed + inst.phase) * 0.35;
      const floatX = Math.cos(t * inst.drift + inst.phase) * 0.18;
      dummy.position.set(
        inst.position[0] + floatX,
        inst.position[1] + floatY,
        inst.position[2]
      );
      dummy.rotation.set(
        inst.rotation[0] + t * 0.04,
        inst.rotation[1] + t * 0.06,
        inst.rotation[2]
      );
      dummy.scale.set(inst.scale[0], inst.scale[1], inst.scale[2]);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, instances.length]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color={GLOW_HEX.violet}
        emissive={GLOW_HEX.soft}
        emissiveIntensity={0.35}
        metalness={0.15}
        roughness={0.08}
        transmission={0.72}
        thickness={0.8}
        transparent
        opacity={0.55}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

function InstancedServers({ instances }: { instances: StructureInstance[] }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < instances.length; i++) {
      const inst = instances[i];
      const floatY = Math.sin(t * inst.floatSpeed + inst.phase) * 0.28;
      dummy.position.set(inst.position[0], inst.position[1] + floatY, inst.position[2]);
      dummy.rotation.set(inst.rotation[0], inst.rotation[1] + t * 0.03, inst.rotation[2]);
      dummy.scale.set(inst.scale[0], inst.scale[1], inst.scale[2]);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, instances.length]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={0x12082a}
        emissive={GLOW_HEX.blue}
        emissiveIntensity={0.55}
        metalness={0.65}
        roughness={0.35}
        transparent
        opacity={0.88}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

function InstancedDataBlocks({ instances }: { instances: StructureInstance[] }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < instances.length; i++) {
      const inst = instances[i];
      const pulse = 0.85 + Math.sin(t * 1.2 + inst.phase) * 0.15;
      const floatY = Math.sin(t * inst.floatSpeed + inst.phase) * 0.22;
      dummy.position.set(inst.position[0], inst.position[1] + floatY, inst.position[2]);
      dummy.rotation.set(
        inst.rotation[0] + t * 0.08,
        inst.rotation[1] + t * 0.1,
        inst.rotation[2]
      );
      dummy.scale.set(
        inst.scale[0] * pulse,
        inst.scale[1] * pulse,
        inst.scale[2] * pulse
      );
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, instances.length]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={GLOW_HEX.purple}
        emissive={GLOW_HEX.soft}
        emissiveIntensity={1.4}
        metalness={0.4}
        roughness={0.2}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

export default function FloatingStructures({ quality }: FloatingStructuresProps) {
  const cfg = QUALITY_CONFIG[quality];
  const cubes = useInstances(cfg.cubes, "cube");
  const servers = useInstances(cfg.servers, "server");
  const blocks = useInstances(cfg.blocks, "block");

  return (
    <group>
      <InstancedGlassCubes instances={cubes} />
      <InstancedServers instances={servers} />
      <InstancedDataBlocks instances={blocks} />
    </group>
  );
}
