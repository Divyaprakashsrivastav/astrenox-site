"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

type Room = { x: number; y: number; w: number; h: number; pulse: number };

export default function BmsHeroBackdrop() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.className = "bmsp-hero-canvas";
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
    let rooms: Room[] = [];
    let sensors: { x: number; y: number; phase: number }[] = [];

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

      const ox = w * 0.15;
      const oy = h * 0.12;
      const bw = w * 0.7;
      const bh = h * 0.76;
      rooms = [
        { x: ox, y: oy, w: bw * 0.45, h: bh * 0.35, pulse: 0 },
        { x: ox + bw * 0.48, y: oy, w: bw * 0.52, h: bh * 0.35, pulse: 0.8 },
        { x: ox, y: oy + bh * 0.38, w: bw * 0.32, h: bh * 0.58, pulse: 1.6 },
        { x: ox + bw * 0.35, y: oy + bh * 0.38, w: bw * 0.32, h: bh * 0.58, pulse: 2.2 },
        { x: ox + bw * 0.7, y: oy + bh * 0.38, w: bw * 0.3, h: bh * 0.58, pulse: 3 },
      ];

      sensors = rooms.flatMap((r, i) =>
        Array.from({ length: 3 }, (_, j) => ({
          x: r.x + r.w * (0.2 + j * 0.3),
          y: r.y + r.h * 0.5,
          phase: i * 0.7 + j * 0.4,
        }))
      );
    }

    function frame() {
      if (disposed) return;
      tick += 1;
      g.clearRect(0, 0, w, h);

      g.strokeStyle = "rgba(147, 197, 253, 0.06)";
      g.lineWidth = 1;
      const gs = 48;
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

      for (const r of rooms) {
        r.pulse += 0.01;
        g.strokeStyle = `rgba(96, 165, 250, ${0.12 + Math.sin(r.pulse) * 0.04})`;
        g.lineWidth = 1;
        g.strokeRect(r.x, r.y, r.w, r.h);

        const cx = r.x + r.w / 2;
        const cy = r.y + r.h / 2;
        g.strokeStyle = "rgba(168, 85, 247, 0.08)";
        g.beginPath();
        g.moveTo(cx, r.y);
        g.lineTo(cx, r.y + r.h);
        g.moveTo(r.x, cy);
        g.lineTo(r.x + r.w, cy);
        g.stroke();
      }

      for (const s of sensors) {
        const glow = 0.35 + Math.sin(tick * 0.04 + s.phase) * 0.25;
        const grad = g.createRadialGradient(s.x, s.y, 0, s.x, s.y, 14);
        grad.addColorStop(0, `rgba(196, 181, 253, ${glow})`);
        grad.addColorStop(1, "rgba(124, 58, 237, 0)");
        g.fillStyle = grad;
        g.beginPath();
        g.arc(s.x, s.y, 14, 0, Math.PI * 2);
        g.fill();

        const wave = (tick * 0.03 + s.phase) % 1;
        g.strokeStyle = `rgba(147, 197, 253, ${(1 - wave) * 0.35})`;
        g.lineWidth = 1;
        g.beginPath();
        g.arc(s.x, s.y, 4 + wave * 22, 0, Math.PI * 2);
        g.stroke();
      }

      for (let i = 0; i < 4; i++) {
        const r = rooms[i % rooms.length];
        const t = (tick * 0.008 + i * 0.25) % 1;
        const px = r.x + r.w * t;
        const py = r.y + r.h * 0.5 + Math.sin(t * Math.PI * 2) * 8;
        g.fillStyle = "rgba(191, 219, 254, 0.7)";
        g.beginPath();
        g.arc(px, py, 2, 0, Math.PI * 2);
        g.fill();
      }

      for (let i = 0; i < 2; i++) {
        const y = ((tick * 0.2 + i * (h / 2.2)) % h);
        const beam = g.createLinearGradient(0, y - 24, w, y + 24);
        beam.addColorStop(0, "rgba(124, 58, 237, 0)");
        beam.addColorStop(0.5, "rgba(96, 165, 250, 0.03)");
        beam.addColorStop(1, "rgba(124, 58, 237, 0)");
        g.fillStyle = beam;
        g.fillRect(0, y - 24, w, 48);
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
    <div ref={mountRef} className="bmsp-hero-backdrop" aria-hidden>
      <div className="bmsp-hero-noise" />
      <div className="bmsp-hero-ambient" />
    </div>
  );
}
