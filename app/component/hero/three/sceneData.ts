import { GLOW_ARRAY } from "./colors";

export interface SceneNode {
  id: number;
  position: [number, number, number];
  basePosition: [number, number, number];
  color: string;
  phase: number;
  floatSpeed: number;
  radius: number;
}

export interface StructureInstance {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  phase: number;
  floatSpeed: number;
  drift: number;
  colorIndex: number;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function generateNodes(count: number): SceneNode[] {
  return Array.from({ length: count }, (_, id) => {
    const depth = rand(6, 38);
    const spread = 2 + depth * 0.22;
    const x = rand(-spread, spread);
    const y = rand(-2.8, 2.2) - depth * 0.015;
    const z = -depth;
    return {
      id,
      position: [x, y, z],
      basePosition: [x, y, z],
      color: GLOW_ARRAY[id % GLOW_ARRAY.length],
      phase: Math.random() * Math.PI * 2,
      floatSpeed: rand(0.25, 0.55),
      radius: rand(0.06, 0.14),
    };
  });
}

export function generateStructures(
  count: number,
  kind: "cube" | "server" | "block"
): StructureInstance[] {
  return Array.from({ length: count }, (_, i) => {
    const depth = rand(4, 42);
    const spread = 3 + depth * 0.28;
    const x = rand(-spread, spread);
    const y = rand(-3.2, 2.8) - depth * 0.012;
    const z = -depth;

    let scale: [number, number, number];
    if (kind === "cube") {
      const s = rand(0.35, 1.1);
      scale = [s, s, s];
    } else if (kind === "server") {
      scale = [rand(0.5, 1.2), rand(1.2, 2.8), rand(0.35, 0.75)];
    } else {
      scale = [rand(0.18, 0.55), rand(0.18, 0.55), rand(0.18, 0.55)];
    }

    return {
      position: [x, y, z],
      rotation: [rand(0, Math.PI), rand(0, Math.PI), rand(0, Math.PI)],
      scale,
      phase: Math.random() * Math.PI * 2,
      floatSpeed: rand(0.18, 0.42),
      drift: rand(0.08, 0.22),
      colorIndex: (i + (kind === "server" ? 1 : kind === "block" ? 2 : 0)) % GLOW_ARRAY.length,
    };
  });
}

export interface ConnectionEdge {
  from: number;
  to: number;
  pulsePhase: number;
  packetT: number;
  packetSpeed: number;
}

export function generateConnections(nodes: SceneNode[], maxCount: number): ConnectionEdge[] {
  const edges: ConnectionEdge[] = [];
  const seen = new Set<string>();

  for (let i = 0; i < nodes.length; i++) {
    const dists = nodes
      .map((n, j) => ({
        j,
        d: Math.hypot(
          n.basePosition[0] - nodes[i].basePosition[0],
          n.basePosition[1] - nodes[i].basePosition[1],
          n.basePosition[2] - nodes[i].basePosition[2]
        ),
      }))
      .filter((x) => x.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);

    for (const { j } of dists) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({
        from: i,
        to: j,
        pulsePhase: Math.random() * Math.PI * 2,
        packetT: Math.random(),
        packetSpeed: 0.12 + Math.random() * 0.22,
      });
      if (edges.length >= maxCount) return edges;
    }
  }

  return edges;
}

export function generatePlatforms(count: number): StructureInstance[] {
  return Array.from({ length: count }, (_, i) => {
    const depth = rand(10, 32);
    const spread = 4 + depth * 0.18;
    return {
      position: [rand(-spread, spread), rand(-1.5, 1.2), -depth],
      rotation: [0, rand(0, Math.PI * 2), 0],
      scale: [rand(2.5, 5.5), 0.08, rand(2.5, 5.5)],
      phase: Math.random() * Math.PI * 2,
      floatSpeed: rand(0.12, 0.28),
      drift: rand(0.04, 0.12),
      colorIndex: i % GLOW_ARRAY.length,
    };
  });
}
