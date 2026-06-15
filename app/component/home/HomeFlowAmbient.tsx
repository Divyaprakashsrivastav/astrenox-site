"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

const COLORS = ["#A855F7", "#7C3AED", "#C084FC", "#4F8BFF"];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  color: string;
}

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function createParticles(w: number, h: number, count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.05,
    vy: (Math.random() - 0.5) * 0.04,
    r: 0.8 + Math.random() * 1.4,
    alpha: 0.08 + Math.random() * 0.14,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));
}

export default function HomeFlowAmbient() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.className = "home-flow-canvas";
    canvas.setAttribute("aria-hidden", "true");
    mount.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const g = ctx;
    let raf = 0;
    let disposed = false;
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

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
      particles = createParticles(w, h, w < 768 ? 20 : 36);
    }

    function frame() {
      if (disposed) return;
      g.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        const grad = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, hexToRgba(p.color, p.alpha));
        grad.addColorStop(1, hexToRgba(p.color, 0));
        g.fillStyle = grad;
        g.beginPath();
        g.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        g.fill();
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
    <div ref={mountRef} className="home-flow-ambient" aria-hidden="true">
      <div className="home-flow-vignette" />
      <div className="home-flow-noise" />
    </div>
  );
}
