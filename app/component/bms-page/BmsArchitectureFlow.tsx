"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { bmsPageContent as c } from "@/app/content/bms-page-content";

export default function BmsArchitectureFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const layers = c.architectureLayers;

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g = ctx;

    let raf = 0;
    let disposed = false;
    let tick = 0;
    let w = 0;
    let h = 0;
    const nodes: { x: number; y: number; label: string }[] = [];

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      w = Math.max(rect.width, 1);
      h = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.length = 0;
      const step = h / (layers.length + 1);
      layers.forEach((label, i) => {
        nodes.push({ x: w / 2, y: step * (i + 1), label });
      });
    }

    function frame() {
      if (disposed) return;
      tick += 1;
      g.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i];
        const b = nodes[i + 1];
        g.strokeStyle = "rgba(168, 85, 247, 0.28)";
        g.lineWidth = 1.5;
        g.beginPath();
        g.moveTo(a.x, a.y + 16);
        g.lineTo(b.x, b.y - 16);
        g.stroke();

        const progress = (tick * 0.01 + i * 0.18) % 1;
        const py = a.y + 16 + (b.y - a.y - 32) * progress;
        g.fillStyle = "rgba(196, 181, 253, 0.85)";
        g.beginPath();
        g.arc(a.x, py, 2.5, 0, Math.PI * 2);
        g.fill();
      }

      nodes.forEach((n, i) => {
        const pulse = 0.45 + Math.sin(tick * 0.022 + i) * 0.12;
        g.fillStyle = "rgba(18, 24, 42, 0.9)";
        g.strokeStyle = `rgba(168, 85, 247, ${0.2 + pulse * 0.2})`;
        g.lineWidth = 1;
        const rw = Math.min(210, w * 0.44);
        const rh = 34;
        const rx = n.x - rw / 2;
        const ry = n.y - rh / 2;
        g.beginPath();
        if (typeof g.roundRect === "function") g.roundRect(rx, ry, rw, rh, 8);
        else g.rect(rx, ry, rw, rh);
        g.fill();
        g.stroke();

        g.fillStyle = `rgba(233, 213, 255, ${0.7 + pulse * 0.2})`;
        g.font = "500 11px system-ui, sans-serif";
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.fillText(n.label, n.x, n.y);
      });

      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduced, layers]);

  return (
    <div className="bmsp-arch">
      <canvas ref={canvasRef} className="bmsp-arch-canvas" aria-hidden />
      <ol className="bmsp-arch-sr">
        {layers.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ol>
    </div>
  );
}
