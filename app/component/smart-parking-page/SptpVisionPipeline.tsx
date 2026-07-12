"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { smartParkingPageContent as c } from "@/app/content/smart-parking-page-content";

export default function SptpVisionPipeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const stages = c.visionPipeline;

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
      const isMobile = w < 640;
      if (isMobile) {
        const step = h / (stages.length + 1);
        stages.forEach((s, i) => {
          nodes.push({ x: w / 2, y: step * (i + 1), label: s.label });
        });
      } else {
        const step = w / (stages.length + 1);
        stages.forEach((s, i) => {
          nodes.push({ x: step * (i + 1), y: h / 2, label: s.label });
        });
      }
    }

    function frame() {
      if (disposed) return;
      tick += 1;
      g.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length - 1; i++) {
        const a = nodes[i];
        const b = nodes[i + 1];
        const isMobile = w < 640;

        g.strokeStyle = "rgba(56, 189, 248, 0.22)";
        g.lineWidth = 1.5;
        g.beginPath();
        if (isMobile) {
          g.moveTo(a.x, a.y + 18);
          g.lineTo(b.x, b.y - 18);
        } else {
          g.moveTo(a.x + 50, a.y);
          g.lineTo(b.x - 50, b.y);
        }
        g.stroke();

        const progress = (tick * 0.012 + i * 0.2) % 1;
        if (isMobile) {
          const py = a.y + 18 + (b.y - a.y - 36) * progress;
          g.fillStyle = "rgba(125, 211, 252, 0.9)";
          g.beginPath();
          g.arc(a.x, py, 3, 0, Math.PI * 2);
          g.fill();
        } else {
          const px = a.x + 50 + (b.x - a.x - 100) * progress;
          g.fillStyle = "rgba(125, 211, 252, 0.9)";
          g.beginPath();
          g.arc(px, a.y, 3, 0, Math.PI * 2);
          g.fill();
        }

        if (i === 2) {
          const scanY = a.y + Math.sin(tick * 0.04) * 20;
          g.strokeStyle = "rgba(52, 211, 153, 0.35)";
          g.lineWidth = 1;
          g.beginPath();
          g.moveTo(a.x - 30, scanY);
          g.lineTo(a.x + 30, scanY);
          g.stroke();
        }
      }

      nodes.forEach((n, i) => {
        const pulse = 0.4 + Math.sin(tick * 0.025 + i) * 0.15;
        g.fillStyle = "rgba(8, 16, 32, 0.92)";
        g.strokeStyle = `rgba(56, 189, 248, ${0.18 + pulse * 0.25})`;
        g.lineWidth = 1;
        const rw = Math.min(100, w * 0.14);
        const rh = 32;
        const rx = n.x - rw / 2;
        const ry = n.y - rh / 2;
        g.beginPath();
        if (typeof g.roundRect === "function") g.roundRect(rx, ry, rw, rh, 6);
        else g.rect(rx, ry, rw, rh);
        g.fill();
        g.stroke();

        g.fillStyle = `rgba(186, 230, 253, ${0.65 + pulse * 0.25})`;
        g.font = "500 10px system-ui, sans-serif";
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
  }, [reduced, stages]);

  return (
    <div className="sptp-vision">
      <canvas ref={canvasRef} className="sptp-vision-canvas" aria-hidden />
      <div className="sptp-vision-details">
        {stages.map((stage) => (
          <article key={stage.id} className="sptp-vision-card">
            <h3 className="sptp-vision-stage">{stage.label}</h3>
            <p className="sptp-verbatim">
              <strong>{stage.title}</strong> {stage.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
