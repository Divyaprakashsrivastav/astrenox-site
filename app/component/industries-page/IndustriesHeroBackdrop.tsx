"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

const INDUSTRY_NODES = [
  "Healthcare",
  "Finance",
  "Manufacturing",
  "Retail",
  "Real Estate",
  "Construction",
  "Energy",
  "Logistics",
  "Education",
  "Government",
];

type Node = { x: number; y: number; vx: number; vy: number; label: string; pulse: number };

export default function IndustriesHeroBackdrop() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.className = "indp-hero-canvas";
    canvas.setAttribute("aria-hidden", "true");
    mount.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const g = ctx;
    let raf = 0;
    let disposed = false;
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let tick = 0;

    function resize() {
      const rect = mount!.getBoundingClientRect();
      w = Math.max(rect.width, 1);
      h = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = INDUSTRY_NODES.map((label, i) => ({
        x: (w * (0.12 + (i % 5) * 0.18)) % w,
        y: (h * (0.15 + Math.floor(i / 5) * 0.35)) % h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.08,
        label,
        pulse: Math.random() * Math.PI * 2,
      }));
    }

    function frame() {
      if (disposed) return;
      tick += 1;
      g.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.018;
        if (n.x < 40) n.vx = Math.abs(n.vx);
        if (n.x > w - 40) n.vx = -Math.abs(n.vx);
        if (n.y < 40) n.vy = Math.abs(n.vy);
        if (n.y > h - 40) n.vy = -Math.abs(n.vy);
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 220) continue;
          const alpha = (1 - dist / 220) * 0.22;
          const grad = g.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(168, 85, 247, ${alpha})`);
          grad.addColorStop(0.5, `rgba(124, 58, 237, ${alpha * 1.4})`);
          grad.addColorStop(1, `rgba(99, 102, 241, ${alpha})`);
          g.strokeStyle = grad;
          g.lineWidth = 1;
          g.beginPath();
          g.moveTo(a.x, a.y);
          const mx = (a.x + b.x) / 2 + Math.sin(tick * 0.02 + i) * 18;
          const my = (a.y + b.y) / 2 + Math.cos(tick * 0.018 + j) * 14;
          g.quadraticCurveTo(mx, my, b.x, b.y);
          g.stroke();
        }
      }

      for (const n of nodes) {
        const glow = 0.35 + Math.sin(n.pulse) * 0.15;
        const r = 2.5 + Math.sin(n.pulse) * 0.8;
        const grad = g.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
        grad.addColorStop(0, `rgba(196, 181, 253, ${glow})`);
        grad.addColorStop(1, "rgba(124, 58, 237, 0)");
        g.fillStyle = grad;
        g.beginPath();
        g.arc(n.x, n.y, r * 6, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = `rgba(233, 213, 255, ${0.5 + glow * 0.4})`;
        g.beginPath();
        g.arc(n.x, n.y, r, 0, Math.PI * 2);
        g.fill();
      }

      for (let s = 0; s < 3; s++) {
        const y = ((tick * 0.4 + s * (h / 3)) % h);
        const beam = g.createLinearGradient(0, y - 40, w, y + 40);
        beam.addColorStop(0, "rgba(124, 58, 237, 0)");
        beam.addColorStop(0.5, "rgba(168, 85, 247, 0.04)");
        beam.addColorStop(1, "rgba(124, 58, 237, 0)");
        g.fillStyle = beam;
        g.fillRect(0, y - 40, w, 80);
      }

      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, [reduced]);

  return (
    <div ref={mountRef} className="indp-hero-backdrop" aria-hidden>
      <div className="indp-hero-backdrop-noise" />
      <div className="indp-hero-backdrop-grid" />
      <div className="indp-hero-backdrop-aurora" />
    </div>
  );
}
