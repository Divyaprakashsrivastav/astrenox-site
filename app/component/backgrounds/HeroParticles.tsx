"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { useAnimationActiveRef } from "../features/useAnimationActiveRef";
import { createAnimationScheduler } from "../features/animationScheduler";

const PARTICLE_COLORS = ["#B46CFF", "#8A2BE2", "#5B8CFF", "#C084FC"];

const MAGNET_RADIUS = 165;
const CURSOR_LERP = 0.14;
const GLOW_OPACITY = 0.24;

interface Particle {
  baseX: number;
  baseY: number;
  size: number;
  baseSize: number;
  opacity: number;
  color: string;
  phase: number;
  drift: number;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function createParticles(w: number, h: number, count = 12): Particle[] {
  return Array.from({ length: count }, () => {
    const cx = w * 0.5 + (Math.random() - 0.5) * w * 0.85;
    const cy = h * 0.45 + (Math.random() - 0.5) * h * 0.55;
    const size = 3.5 + Math.random() * 4;
    return {
      baseX: cx,
      baseY: cy,
      size,
      baseSize: size,
      opacity: 0.28 + Math.random() * 0.32,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      phase: Math.random() * Math.PI * 2,
      drift: 0.06 + Math.random() * 0.1,
    };
  });
}

export default function HeroParticles() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const activeRef = useAnimationActiveRef(mountRef);

  useEffect(() => {
    const { requestAnimationFrame, cancelAnimationFrame } = createAnimationScheduler(activeRef, 30);
    if (reduced) return;

    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.className = "hero-particles-glow-canvas hero-particles-canvas";
    canvas.setAttribute("aria-hidden", "true");
    mount.appendChild(canvas);

    let disposed = false;
    let animRaf = 0;
    let particles: Particle[] = [];
    let elapsed = 0;
    let sweepT = 0;
    let lastTs = 0;

    let cursorX = 0;
    let cursorY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let hasCursor = false;

    const ctx = canvas.getContext("2d");

    function resize() {
      const w = mount!.clientWidth;
      const h = mount!.clientHeight;
      if (w < 2 || h < 2) return;

      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) particles = createParticles(w, h);
      if (!hasCursor) {
        smoothX = w * 0.5;
        smoothY = h * 0.44;
      }
    }

    function drawGlow(w: number, h: number) {
      if (!ctx) return;

      sweepT += 0.007;
      const sweepX = (Math.sin(sweepT) * 0.5 + 0.5) * w;
      const sweepY = h * (0.4 + Math.sin(sweepT * 0.65) * 0.1);

      const sweep = ctx.createRadialGradient(sweepX, sweepY, 0, sweepX, sweepY, 320);
      sweep.addColorStop(0, "rgba(180, 108, 255, 0.16)");
      sweep.addColorStop(0.45, "rgba(180, 108, 255, 0.07)");
      sweep.addColorStop(1, "rgba(180, 108, 255, 0)");
      ctx.fillStyle = sweep;
      ctx.fillRect(0, 0, w, h);

      if (!hasCursor) return;

      const bloom = ctx.createRadialGradient(
        smoothX, smoothY, 0,
        smoothX, smoothY, 420
      );
      bloom.addColorStop(0, `rgba(180, 108, 255, ${GLOW_OPACITY})`);
      bloom.addColorStop(0.45, "rgba(180, 108, 255, 0.06)");
      bloom.addColorStop(1, "rgba(180, 108, 255, 0)");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, w, h);
    }

    function drawParticles(time: number) {
      if (!ctx) return;

      for (const p of particles) {
        const ox = Math.sin(time * p.drift + p.phase) * 14;
        const oy = Math.cos(time * p.drift * 0.85 + p.phase) * 10;
        let px = p.baseX + ox;
        let py = p.baseY + oy;

        const dist = Math.hypot(px - smoothX, py - smoothY);
        let scale = 1;
        let bright = 1;

        if (hasCursor && dist < MAGNET_RADIUS) {
          const t = 1 - dist / MAGNET_RADIUS;
          const ease = t * t * (3 - 2 * t);
          scale = 1 + ease * 0.55;
          bright = 1 + ease * 0.35;
          px += (smoothX - px) * ease * 0.06;
          py += (smoothY - py) * ease * 0.06;
        }

        const twinkle = 0.85 + Math.sin(time * 0.4 + p.phase) * 0.15;
        const alpha = Math.min(p.opacity * twinkle * bright, 0.8);
        const drawSize = p.baseSize * scale;

        const r = parseInt(p.color.slice(1, 3), 16);
        const g = parseInt(p.color.slice(3, 5), 16);
        const b = parseInt(p.color.slice(5, 7), 16);
        const grad = ctx.createRadialGradient(px, py, 0, px, py, drawSize * 2.4);
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(0.45, `rgba(${r},${g},${b},${alpha * 0.35})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(px, py, drawSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animate(timestamp: number) {
      if (disposed) return;

      if (activeRef.current) {
        const w = mount!.clientWidth;
        const h = mount!.clientHeight;
        ctx?.clearRect(0, 0, w, h);

        const dt = lastTs ? Math.min((timestamp - lastTs) / 1000, 0.05) : 0.016;
        lastTs = timestamp;

        smoothX = lerp(smoothX, cursorX, CURSOR_LERP);
        smoothY = lerp(smoothY, cursorY, CURSOR_LERP);

        elapsed += dt;
        drawGlow(w, h);
        drawParticles(elapsed);
      } else {
        lastTs = 0;
      }

      animRaf = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = mount!.getBoundingClientRect();
      cursorX = e.clientX - rect.left;
      cursorY = e.clientY - rect.top;
      hasCursor =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
    }

    function onMouseLeave() {
      hasCursor = false;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();
    animRaf = requestAnimationFrame(animate);

    mount.addEventListener("mousemove", onMouseMove, { passive: true });
    mount.addEventListener("mouseleave", onMouseLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(animRaf);
      ro.disconnect();
      mount.removeEventListener("mousemove", onMouseMove);
      mount.removeEventListener("mouseleave", onMouseLeave);
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, [activeRef, reduced]);

  if (reduced) return null;

  return <div ref={mountRef} className="hero-particles-layer" aria-hidden="true" />;
}
