"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { useAnimationActiveRef } from "../features/useAnimationActiveRef";
import { createAnimationScheduler } from "../features/animationScheduler";

// Elegant flowing connection paths (viewBox 0 0 1000 600)
const FLOW_PATHS = [
  "M -50 180 C 220 120, 360 300, 620 220 S 980 160, 1080 260",
  "M -50 420 C 180 460, 380 320, 600 400 S 920 480, 1080 380",
  "M 200 -40 C 300 160, 520 200, 560 380 S 700 600, 760 660",
];

export default function HeroAmbient() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useAnimationActiveRef(wrapRef);

  // ── Mouse parallax (max ~10px) ──
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const particleX = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 50,
    damping: 20,
  });
  const particleY = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), {
    stiffness: 50,
    damping: 20,
  });
  // Blobs drift opposite for depth
  const blobX = useSpring(useTransform(mx, [-0.5, 0.5], [9, -9]), {
    stiffness: 38,
    damping: 22,
  });
  const blobY = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 38,
    damping: 22,
  });

  // ── Scroll reaction ──
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 560], [1, 0]);
  const scrollShift = useTransform(scrollY, [0, 560], [0, 70]);

  // ── Particle field (canvas + rAF) ──
  useEffect(() => {
    const { requestAnimationFrame, cancelAnimationFrame } = createAnimationScheduler(activeRef, 30);
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number; r: number; o: number };
    let particles: P[] = [];

    const seed = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(23, Math.max(10, Math.ceil((w * h) / 30000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.7 + 0.6,
        o: Math.random() * 0.45 + 0.12,
      }));
    };
    seed();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(seed, 180);
    };
    window.addEventListener("resize", onResize);

    const CONNECT = 118;
    const render = () => {
      if (!activeRef.current) {
        raf = requestAnimationFrame(render);
        return;
      }
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -10) a.x = w + 10;
        else if (a.x > w + 10) a.x = -10;
        if (a.y < -10) a.y = h + 10;
        else if (a.y > h + 10) a.y = -10;

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT) {
            const alpha = (1 - dist / CONNECT) * 0.12;
            ctx.strokeStyle = `rgba(139,61,125,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(139,61,125,${p.o})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [activeRef, reduced]);

  // ── Pointer tracking ──
  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, mx, my]);

  return (
    <motion.div
      ref={wrapRef}
      className="hero-ambient"
      aria-hidden
      style={reduced ? undefined : { opacity: scrollOpacity, y: scrollShift }}
    >
      {/* Soft gradient glow blobs */}
      <motion.div
        className="hero-ambient-blobs"
        style={reduced ? undefined : { x: blobX, y: blobY }}
      >
        <span className="hero-blob hero-blob--purple" />
        <span className="hero-blob hero-blob--pink" />
        <span className="hero-blob hero-blob--lavender" />
      </motion.div>

      {/* Particle field */}
      <motion.canvas
        ref={canvasRef}
        className="hero-ambient-canvas"
        style={reduced ? undefined : { x: particleX, y: particleY }}
      />

      {/* Flowing connection lines with moving light pulses */}
      {!reduced && (
        <svg
          className="hero-ambient-flows"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="heroFlowStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139,61,125,0)" />
              <stop offset="50%" stopColor="rgba(183,110,157,0.35)" />
              <stop offset="100%" stopColor="rgba(139,61,125,0)" />
            </linearGradient>
          </defs>
          {FLOW_PATHS.map((d, i) => (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke="rgba(139,61,125,0.08)"
                strokeWidth="1"
              />
              <motion.path
                d={d}
                fill="none"
                stroke="url(#heroFlowStroke)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray="60 740"
                animate={{ strokeDashoffset: [0, -800] }}
                transition={{
                  duration: 7 + i * 1.6,
                  delay: i * 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </g>
          ))}
        </svg>
      )}

      {/* Left readability veil so headline stays crisp */}
      <div className="hero-ambient-veil" />
    </motion.div>
  );
}
