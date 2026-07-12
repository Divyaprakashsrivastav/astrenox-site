"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

type Vehicle = { x: number; y: number; vx: number; vy: number; lane: "h" | "v"; color: string };
type Signal = { x: number; y: number; phase: number };
type Detection = { x: number; y: number; w: number; h: number; phase: number };

export default function SptpHeroBackdrop() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.className = "sptp-hero-canvas";
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
    let vehicles: Vehicle[] = [];
    let signals: Signal[] = [];
    let detections: Detection[] = [];
    let routes: { x1: number; y1: number; x2: number; y2: number; phase: number }[] = [];

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

      const roads = [
        { x: w * 0.2, y: 0, w: w * 0.08, h: h },
        { x: w * 0.55, y: 0, w: w * 0.07, h: h },
        { x: 0, y: h * 0.35, w: w, h: h * 0.06 },
        { x: 0, y: h * 0.68, w: w, h: h * 0.05 },
      ];

      vehicles = Array.from({ length: 14 }, (_, i) => {
        const horizontal = i % 2 === 0;
        const colors = ["#38bdf8", "#a78bfa", "#34d399", "#f472b6"];
        return {
          x: horizontal ? (i * 73) % w : w * (0.22 + (i % 3) * 0.17),
          y: horizontal ? h * (0.36 + (i % 2) * 0.33) : (i * 61) % h,
          vx: horizontal ? 0.4 + (i % 4) * 0.15 : 0,
          vy: horizontal ? 0 : 0.35 + (i % 3) * 0.12,
          lane: horizontal ? "h" : "v",
          color: colors[i % colors.length],
        } as Vehicle;
      });

      signals = [
        { x: w * 0.24, y: h * 0.35, phase: 0 },
        { x: w * 0.59, y: h * 0.68, phase: 1.2 },
        { x: w * 0.55, y: h * 0.35, phase: 2.4 },
      ];

      detections = [
        { x: w * 0.12, y: h * 0.18, w: 48, h: 32, phase: 0 },
        { x: w * 0.72, y: h * 0.52, w: 56, h: 36, phase: 1.5 },
        { x: w * 0.38, y: h * 0.78, w: 44, h: 28, phase: 2.8 },
      ];

      routes = [
        { x1: w * 0.1, y1: h * 0.2, x2: w * 0.85, y2: h * 0.45, phase: 0 },
        { x1: w * 0.85, y1: h * 0.55, x2: w * 0.15, y2: h * 0.75, phase: 1.8 },
      ];
    }

    function frame() {
      if (disposed) return;
      tick += 1;
      g.clearRect(0, 0, w, h);

      g.strokeStyle = "rgba(56, 189, 248, 0.04)";
      g.lineWidth = 1;
      const gs = 40;
      for (let x = 0; x < w; x += gs) {
        g.beginPath();
        g.moveTo(x, 0);
        g.lineTo(x, h);
        g.stroke();
      }
      for (let y = 0; y < h; y += gs) {
        g.beginPath();
        g.moveTo(0, y);
        g.lineTo(w, y);
        g.stroke();
      }

      g.fillStyle = "rgba(15, 23, 42, 0.55)";
      g.fillRect(w * 0.2, 0, w * 0.08, h);
      g.fillRect(w * 0.55, 0, w * 0.07, h);
      g.fillRect(0, h * 0.35, w, h * 0.06);
      g.fillRect(0, h * 0.68, w, h * 0.05);

      g.strokeStyle = "rgba(56, 189, 248, 0.12)";
      g.lineWidth = 1;
      g.setLineDash([6, 10]);
      g.strokeRect(w * 0.2, 0, w * 0.08, h);
      g.strokeRect(w * 0.55, 0, w * 0.07, h);
      g.setLineDash([]);

      routes.forEach((r) => {
        const pulse = 0.3 + Math.sin(tick * 0.02 + r.phase) * 0.15;
        g.strokeStyle = `rgba(167, 139, 250, ${pulse})`;
        g.lineWidth = 1;
        g.setLineDash([4, 8]);
        g.beginPath();
        g.moveTo(r.x1, r.y1);
        g.lineTo(r.x2, r.y2);
        g.stroke();
        g.setLineDash([]);
      });

      detections.forEach((d) => {
        const alpha = 0.25 + Math.sin(tick * 0.03 + d.phase) * 0.12;
        g.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
        g.lineWidth = 1;
        g.strokeRect(d.x, d.y, d.w, d.h);
        g.fillStyle = `rgba(52, 211, 153, ${alpha * 0.15})`;
        g.fillRect(d.x, d.y, d.w, d.h);
        const corners = [
          [d.x, d.y],
          [d.x + d.w, d.y],
          [d.x, d.y + d.h],
          [d.x + d.w, d.y + d.h],
        ];
        g.fillStyle = `rgba(52, 211, 153, ${alpha + 0.2})`;
        corners.forEach(([cx, cy]) => {
          g.fillRect(cx - 2, cy - 2, 4, 4);
        });
      });

      signals.forEach((s) => {
        const cycle = (tick * 0.008 + s.phase) % 3;
        const colors = ["#ef4444", "#eab308", "#22c55e"];
        const active = Math.floor(cycle);
        g.fillStyle = "rgba(15, 23, 42, 0.8)";
        g.fillRect(s.x - 4, s.y - 14, 8, 28);
        colors.forEach((c, i) => {
          g.fillStyle = i === active ? c : "rgba(100, 116, 139, 0.35)";
          g.beginPath();
          g.arc(s.x, s.y - 8 + i * 8, 2.5, 0, Math.PI * 2);
          g.fill();
        });
      });

      const spots = [
        { x: w * 0.08, y: h * 0.12, occupied: true },
        { x: w * 0.08, y: h * 0.16, occupied: false },
        { x: w * 0.88, y: h * 0.82, occupied: true },
        { x: w * 0.88, y: h * 0.86, occupied: false },
        { x: w * 0.42, y: h * 0.12, occupied: Math.sin(tick * 0.01) > 0 },
        { x: w * 0.46, y: h * 0.12, occupied: Math.sin(tick * 0.01 + 1) > 0 },
      ];
      spots.forEach((sp) => {
        g.fillStyle = sp.occupied ? "rgba(248, 113, 113, 0.35)" : "rgba(52, 211, 153, 0.3)";
        g.fillRect(sp.x, sp.y, 10, 16);
      });

      vehicles.forEach((v) => {
        if (v.lane === "h") {
          v.x += v.vx;
          if (v.x > w + 20) v.x = -20;
        } else {
          v.y += v.vy;
          if (v.y > h + 20) v.y = -20;
        }
        const glow = g.createRadialGradient(v.x, v.y, 0, v.x, v.y, 12);
        glow.addColorStop(0, v.color + "cc");
        glow.addColorStop(1, "transparent");
        g.fillStyle = glow;
        g.beginPath();
        g.arc(v.x, v.y, 12, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = v.color;
        g.beginPath();
        g.arc(v.x, v.y, 2.5, 0, Math.PI * 2);
        g.fill();
      });

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
      canvas.remove();
    };
  }, [reduced]);

  return (
    <div ref={mountRef} className="sptp-hero-backdrop" aria-hidden>
      <div className="sptp-hero-noise" />
      <div className="sptp-hero-ambient" />
    </div>
  );
}
