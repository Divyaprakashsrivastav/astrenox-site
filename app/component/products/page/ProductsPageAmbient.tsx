"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../features/useReducedMotion";

export default function ProductsPageAmbient() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.className = "pp-ambient-canvas";
    canvas.setAttribute("aria-hidden", "true");
    mount.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let disposed = false;
    let w = 0;
    let h = 0;

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let particles: P[] = [];

    function resize() {
      const rect = mount!.getBoundingClientRect();
      w = Math.max(rect.width, 1);
      h = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: w < 768 ? 28 : 48 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.028,
        r: 0.4 + Math.random() * 1,
        a: 0.03 + Math.random() * 0.07,
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
    <div ref={mountRef} className="pp-ambient" aria-hidden>
      <div className="pp-ambient-noise" />
      <motion.div
        className="pp-ambient-aurora"
        animate={reduced ? { opacity: 0.35 } : { opacity: [0.3, 0.46, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pp-ambient-beam pp-ambient-beam--a" />
      <div className="pp-ambient-beam pp-ambient-beam--b" />
      <div className="pp-ambient-glow" />
    </div>
  );
}
