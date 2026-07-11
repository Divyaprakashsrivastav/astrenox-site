"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

export default function TechEcosystemAmbient() {
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

    type P = { x: number; y: number; vx: number; vy: number; a: number; r: number };
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
      particles = Array.from({ length: w < 640 ? 24 : 42 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.022,
        vy: (Math.random() - 0.5) * 0.016,
        a: 0.02 + Math.random() * 0.045,
        r: 0.45 + Math.random() * 0.55,
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
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
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
    <div className="tech-eco-ambient" aria-hidden>
      <div className="tech-eco-ambient-grid" />
      <motion.div
        className="tech-eco-ambient-gradient"
        animate={reduced ? { opacity: 0.35 } : { opacity: [0.28, 0.42, 0.28] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="tech-eco-ambient-beam tech-eco-ambient-beam--a" />
      <div className="tech-eco-ambient-beam tech-eco-ambient-beam--b" />
      <div className="tech-eco-ambient-beam tech-eco-ambient-beam--c" />
      {!reduced && <canvas ref={canvasRef} className="tech-eco-ambient-particles" />}
      <div className="tech-eco-ambient-orb tech-eco-ambient-orb--a" />
      <div className="tech-eco-ambient-orb tech-eco-ambient-orb--b" />
      <div className="tech-eco-ambient-orb tech-eco-ambient-orb--c" />
    </div>
  );
}
