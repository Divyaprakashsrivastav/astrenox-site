"use client";

import { memo, useEffect, useRef } from "react";

type Node = { id: string; label: string; x: number; y: number };
type Edge = { from: string; to: string };

const NODES: Node[] = [
  { id: "llm", label: "LLM", x: 0.5, y: 0.12 },
  { id: "router", label: "API Router", x: 0.22, y: 0.28 },
  { id: "agents", label: "Agents", x: 0.78, y: 0.28 },
  { id: "vector", label: "Vector DB", x: 0.14, y: 0.52 },
  { id: "micro", label: "Microservices", x: 0.5, y: 0.48 },
  { id: "infer", label: "Inference", x: 0.86, y: 0.52 },
  { id: "k8s", label: "Kubernetes", x: 0.32, y: 0.76 },
  { id: "obs", label: "Observability", x: 0.68, y: 0.76 },
];

const EDGES: Edge[] = [
  { from: "llm", to: "router" },
  { from: "llm", to: "agents" },
  { from: "router", to: "vector" },
  { from: "router", to: "micro" },
  { from: "agents", to: "micro" },
  { from: "agents", to: "infer" },
  { from: "vector", to: "micro" },
  { from: "micro", to: "k8s" },
  { from: "micro", to: "obs" },
  { from: "infer", to: "obs" },
  { from: "k8s", to: "obs" },
];

type Particle = { edge: number; t: number; speed: number };

function AIEngineeringHeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    particlesRef.current = EDGES.map((_, i) => ({
      edge: i,
      t: Math.random(),
      speed: 0.0008 + Math.random() * 0.0012,
    }));

    const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

    const draw = (time: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const pulse = 0.35 + Math.sin(time * 0.0008) * 0.08;

      EDGES.forEach(({ from, to }, i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        if (!a || !b) return;
        const x1 = a.x * width;
        const y1 = a.y * height;
        const x2 = b.x * width;
        const y2 = b.y * height;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(124, 92, 255, ${0.12 + pulse * 0.08})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (!reduced) {
          const p = particlesRef.current[i];
          if (p) {
            p.t += p.speed;
            if (p.t > 1) p.t = 0;
            const px = x1 + (x2 - x1) * p.t;
            const py = y1 + (y2 - y1) * p.t;
            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(167, 139, 250, 0.85)";
            ctx.fill();
          }
        }
      });

      NODES.forEach((node, i) => {
        const x = node.x * width;
        const y = node.y * height;
        const glow = 0.4 + Math.sin(time * 0.001 + i) * 0.15;

        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${0.5 + glow * 0.3})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(167, 139, 250, ${0.08 + glow * 0.06})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = "500 10px ui-sans-serif, system-ui, sans-serif";
        ctx.fillStyle = `rgba(228, 225, 255, ${0.35 + glow * 0.2})`;
        ctx.textAlign = "center";
        ctx.fillText(node.label, x, y - 14);
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="aie-hero-network"
      aria-hidden
    />
  );
}

export default memo(AIEngineeringHeroNetwork);
