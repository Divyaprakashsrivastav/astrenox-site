"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { GLOW } from "./colors";
import {
  generateConnections,
  type ConnectionEdge,
  type SceneNode,
} from "./sceneData";
import type { HeroQuality } from "./useHeroQuality";
import { QUALITY_CONFIG } from "./useHeroQuality";

interface ConnectionNetworkProps {
  nodes: SceneNode[];
  quality: HeroQuality;
}

function applyNodePosition(node: SceneNode, t: number, target: THREE.Vector3) {
  const floatY = Math.sin(t * node.floatSpeed + node.phase) * 0.32;
  const floatX = Math.cos(t * node.floatSpeed * 0.7 + node.phase) * 0.15;
  return target.set(
    node.basePosition[0] + floatX,
    node.basePosition[1] + floatY,
    node.basePosition[2]
  );
}

function PulsingLine({
  fromNode,
  toNode,
  pulsePhase,
}: {
  fromNode: SceneNode;
  toNode: SceneNode;
  pulsePhase: number;
}) {
  const a = useMemo(() => new THREE.Vector3(), []);
  const b = useMemo(() => new THREE.Vector3(), []);
  const lineObj = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(6, 3));
    const mat = new THREE.LineBasicMaterial({
      color: GLOW.soft,
      transparent: true,
      opacity: 0.38,
      toneMapped: false,
    });
    return new THREE.Line(geom, mat);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    a.copy(applyNodePosition(fromNode, t, a));
    b.copy(applyNodePosition(toNode, t, b));

    const pos = lineObj.geometry.attributes.position as THREE.BufferAttribute;
    pos.setXYZ(0, a.x, a.y, a.z);
    pos.setXYZ(1, b.x, b.y, b.z);
    pos.needsUpdate = true;
    (lineObj.material as THREE.LineBasicMaterial).opacity =
      0.2 + Math.sin(t * 1.8 + pulsePhase) * 0.22;
  });

  return <primitive object={lineObj} />;
}

function DataPacket({
  fromNode,
  toNode,
  edge,
}: {
  fromNode: SceneNode;
  toNode: SceneNode;
  edge: ConnectionEdge;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const fromVec = useRef(new THREE.Vector3());
  const toVec = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    edge.packetT += edge.packetSpeed * delta;
    if (edge.packetT > 1) edge.packetT = 0;

    fromVec.current.copy(applyNodePosition(fromNode, t, fromVec.current));
    toVec.current.copy(applyNodePosition(toNode, t, toVec.current));
    ref.current.position.lerpVectors(fromVec.current, toVec.current, edge.packetT);

    const pulse = 0.55 + Math.sin(t * 4 + edge.pulsePhase) * 0.45;
    ref.current.scale.setScalar(0.045 * pulse);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={GLOW.white} toneMapped={false} transparent opacity={0.9} />
    </mesh>
  );
}

export default function ConnectionNetwork({ nodes, quality }: ConnectionNetworkProps) {
  const cfg = QUALITY_CONFIG[quality];
  const edges = useMemo(
    () => generateConnections(nodes, cfg.connections),
    [nodes, cfg.connections]
  );

  return (
    <group>
      {edges.map((edge, i) => {
        const fromNode = nodes[edge.from];
        const toNode = nodes[edge.to];
        if (!fromNode || !toNode) return null;

        return (
          <group key={i}>
            <PulsingLine fromNode={fromNode} toNode={toNode} pulsePhase={edge.pulsePhase} />
            <DataPacket fromNode={fromNode} toNode={toNode} edge={edge} />
          </group>
        );
      })}
    </group>
  );
}
