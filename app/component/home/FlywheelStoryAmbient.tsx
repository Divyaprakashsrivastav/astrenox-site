"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

export default function FlywheelStoryAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let disposed = false;
    let w = 0;
    let h = 0;

    type P = { x: number; y: number; vx: number; vy: number; a: number };
    let particles: P[] = [];

    function resize() {
      const rect = parent!.getBoundingClientRect();
      w = Math.max(rect.width, 1);
      h = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: w < 640 ? 20 : 36 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.025,
        vy: (Math.random() - 0.5) * 0.018,
        a: 0.025 + Math.random() * 0.05,
      }));
    }

    function frame() {
      if (disposed) return;
      ctx!.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx!.fillStyle = `rgba(196, 181, 253, ${p.a})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 0.6, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduced]);

  return (
    <div className="flywheel-story-ambient" aria-hidden>
      <div className="flywheel-story-beam flywheel-story-beam--a" />
      <div className="flywheel-story-beam flywheel-story-beam--b" />
      <div className="flywheel-story-beam flywheel-story-beam--c" />
      {!reduced && <canvas ref={canvasRef} className="flywheel-story-particles" />}
    </div>
  );
}
