"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

type Region = { x: number; y: number; r: number; pulse: number };
type Packet = { x: number; y: number; tx: number; ty: number; t: number; speed: number };

export default function EnterpriseCloudHeroBackdrop() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.className = "ecms-hero-canvas";
    canvas.setAttribute("aria-hidden", "true");
    mount.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g = ctx;

    let raf = 0;
    let disposed = false;
    let w = 0;
    let h = 0;
    let tick = 0;
    let regions: Region[] = [];
    let packets: Packet[] = [];

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

      regions = [
        { x: w * 0.2, y: h * 0.28, r: 48, pulse: 0 },
        { x: w * 0.55, y: h * 0.22, r: 56, pulse: 1.2 },
        { x: w * 0.78, y: h * 0.42, r: 44, pulse: 2.1 },
        { x: w * 0.35, y: h * 0.58, r: 52, pulse: 0.8 },
        { x: w * 0.68, y: h * 0.68, r: 40, pulse: 1.7 },
      ];

      packets = Array.from({ length: 18 }, (_, i) => {
        const a = regions[i % regions.length];
        const b = regions[(i + 2) % regions.length];
        return {
          x: a.x,
          y: a.y,
          tx: b.x,
          ty: b.y,
          t: Math.random(),
          speed: 0.002 + Math.random() * 0.003,
        };
      });
    }

    function frame() {
      if (disposed) return;
      tick += 1;
      g.clearRect(0, 0, w, h);

      const gridStep = 56;
      g.strokeStyle = "rgba(96, 165, 250, 0.04)";
      g.lineWidth = 1;
      for (let x = 0; x < w; x += gridStep) {
        g.beginPath();
        g.moveTo(x, 0);
        g.lineTo(x, h);
        g.stroke();
      }
      for (let y = 0; y < h; y += gridStep) {
        g.beginPath();
        g.moveTo(0, y);
        g.lineTo(w, y);
        g.stroke();
      }

      for (let i = 0; i < regions.length; i++) {
        for (let j = i + 1; j < regions.length; j++) {
          const a = regions[i];
          const b = regions[j];
          const dist = Math.hypot(b.x - a.x, b.y - a.y);
          if (dist > w * 0.55) continue;
          const alpha = (1 - dist / (w * 0.55)) * 0.14;
          const grad = g.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(59, 130, 246, ${alpha})`);
          grad.addColorStop(0.5, `rgba(124, 58, 237, ${alpha * 1.3})`);
          grad.addColorStop(1, `rgba(99, 102, 241, ${alpha})`);
          g.strokeStyle = grad;
          g.lineWidth = 1;
          g.beginPath();
          g.moveTo(a.x, a.y);
          const cx = (a.x + b.x) / 2 + Math.sin(tick * 0.015 + i) * 12;
          const cy = (a.y + b.y) / 2 + Math.cos(tick * 0.013 + j) * 10;
          g.quadraticCurveTo(cx, cy, b.x, b.y);
          g.stroke();
        }
      }

      for (const r of regions) {
        r.pulse += 0.012;
        const glow = 0.22 + Math.sin(r.pulse) * 0.08;
        const grad = g.createRadialGradient(r.x, r.y, 0, r.x, r.y, r.r * 1.6);
        grad.addColorStop(0, `rgba(147, 197, 253, ${glow})`);
        grad.addColorStop(0.5, `rgba(99, 102, 241, ${glow * 0.4})`);
        grad.addColorStop(1, "rgba(59, 130, 246, 0)");
        g.fillStyle = grad;
        g.beginPath();
        g.arc(r.x, r.y, r.r * 1.6, 0, Math.PI * 2);
        g.fill();

        g.strokeStyle = `rgba(147, 197, 253, ${0.25 + glow * 0.3})`;
        g.lineWidth = 1;
        g.beginPath();
        g.arc(r.x, r.y, r.r * 0.55, 0, Math.PI * 2);
        g.stroke();

        g.fillStyle = `rgba(191, 219, 254, ${0.5 + glow})`;
        g.beginPath();
        g.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        g.fill();
      }

      for (const p of packets) {
        p.t += p.speed;
        if (p.t >= 1) {
          p.t = 0;
          const ri = Math.floor(Math.random() * regions.length);
          const rj = (ri + 2 + Math.floor(Math.random() * 2)) % regions.length;
          p.x = regions[ri].x;
          p.y = regions[ri].y;
          p.tx = regions[rj].x;
          p.ty = regions[rj].y;
        }
        const px = p.x + (p.tx - p.x) * p.t;
        const py = p.y + (p.ty - p.y) * p.t;
        g.fillStyle = "rgba(196, 181, 253, 0.85)";
        g.beginPath();
        g.arc(px, py, 2, 0, Math.PI * 2);
        g.fill();
      }

      for (let i = 0; i < 2; i++) {
        const y = ((tick * 0.25 + i * (h / 2)) % h);
        const beam = g.createLinearGradient(0, y - 30, w, y + 30);
        beam.addColorStop(0, "rgba(59, 130, 246, 0)");
        beam.addColorStop(0.5, "rgba(99, 102, 241, 0.035)");
        beam.addColorStop(1, "rgba(59, 130, 246, 0)");
        g.fillStyle = beam;
        g.fillRect(0, y - 30, w, 60);
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
    <div ref={mountRef} className="ecms-hero-backdrop" aria-hidden>
      <div className="ecms-hero-noise" />
      <div className="ecms-hero-ambient" />
    </div>
  );
}
