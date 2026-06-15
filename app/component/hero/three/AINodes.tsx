"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { SceneNode } from "./sceneData";

interface AINodesProps {
  nodes: SceneNode[];
}

export default function AINodes({ nodes }: AINodesProps) {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    nodes.forEach((node, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;
      const floatY = Math.sin(t * node.floatSpeed + node.phase) * 0.32;
      const floatX = Math.cos(t * node.floatSpeed * 0.7 + node.phase) * 0.15;
      mesh.position.set(
        node.basePosition[0] + floatX,
        node.basePosition[1] + floatY,
        node.basePosition[2]
      );
      const pulse = 0.75 + Math.sin(t * 1.4 + node.phase) * 0.25;
      mesh.scale.setScalar(node.radius * pulse * 2);
      (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity =
        1.2 + Math.sin(t * 2 + node.phase) * 0.35;
    });
  });

  return (
    <group>
      {nodes.map((node, i) => (
        <mesh
          key={node.id}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={1.3}
            toneMapped={false}
            transparent
            opacity={0.92}
          />
        </mesh>
      ))}
    </group>
  );
}
