"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

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

function createParticles(w: number, h: number, count = 48): Particle[] {
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

  useEffect(() => {
    if (reduced) return;

    const mount = mountRef.current;
    if (!mount) return;

    const glowCanvas = document.createElement("canvas");
    glowCanvas.className = "hero-particles-glow-canvas";
    glowCanvas.setAttribute("aria-hidden", "true");

    const particleCanvas = document.createElement("canvas");
    particleCanvas.className = "hero-particles-canvas";
    particleCanvas.setAttribute("aria-hidden", "true");

    mount.appendChild(glowCanvas);
    mount.appendChild(particleCanvas);

    let disposed = false;
    let animRaf = 0;
    let particles: Particle[] = [];
    let elapsed = 0;
    let sweepT = 0;

    let cursorX = 0;
    let cursorY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let hasCursor = false;

    const glowCtx = glowCanvas.getContext("2d");
    const pCtx = particleCanvas.getContext("2d");

    function resize() {
      const w = mount!.clientWidth;
      const h = mount!.clientHeight;
      if (w < 2 || h < 2) return;

      const dpr = Math.min(window.devicePixelRatio, 2);
      for (const c of [glowCanvas, particleCanvas]) {
        c.width = w * dpr;
        c.height = h * dpr;
        c.style.width = `${w}px`;
        c.style.height = `${h}px`;
      }
      glowCtx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      pCtx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) particles = createParticles(w, h);
      if (!hasCursor) {
        smoothX = w * 0.5;
        smoothY = h * 0.44;
      }
    }

    function drawGlow(w: number, h: number) {
      if (!glowCtx) return;
      glowCtx.clearRect(0, 0, w, h);

      sweepT += 0.007;
      const sweepX = (Math.sin(sweepT) * 0.5 + 0.5) * w;
      const sweepY = h * (0.4 + Math.sin(sweepT * 0.65) * 0.1);

      glowCtx.save();
      glowCtx.filter = "blur(80px)";
      const sweep = glowCtx.createRadialGradient(sweepX, sweepY, 0, sweepX, sweepY, 240);
      sweep.addColorStop(0, "rgba(180, 108, 255, 0.18)");
      sweep.addColorStop(0.55, "rgba(180, 108, 255, 0.08)");
      sweep.addColorStop(1, "rgba(180, 108, 255, 0)");
      glowCtx.fillStyle = sweep;
      glowCtx.fillRect(0, 0, w, h);
      glowCtx.restore();

      if (!hasCursor) return;

      glowCtx.save();
      glowCtx.filter = "blur(90px)";
      const bloom = glowCtx.createRadialGradient(
        smoothX, smoothY, 0,
        smoothX, smoothY, 360
      );
      bloom.addColorStop(0, `rgba(180, 108, 255, ${GLOW_OPACITY})`);
      bloom.addColorStop(0.5, "rgba(180, 108, 255, 0.08)");
      bloom.addColorStop(1, "rgba(180, 108, 255, 0)");
      glowCtx.fillStyle = bloom;
      glowCtx.fillRect(0, 0, w, h);
      glowCtx.restore();
    }

    function drawParticles(time: number) {
      if (!pCtx) return;
      const w = mount!.clientWidth;
      const h = mount!.clientHeight;
      pCtx.clearRect(0, 0, w, h);

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
        const grad = pCtx.createRadialGradient(px, py, 0, px, py, drawSize * 2.4);
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(0.45, `rgba(${r},${g},${b},${alpha * 0.35})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

        pCtx.beginPath();
        pCtx.fillStyle = grad;
        pCtx.arc(px, py, drawSize, 0, Math.PI * 2);
        pCtx.fill();
      }
    }

    function animate() {
      if (disposed) return;
      const w = mount!.clientWidth;
      const h = mount!.clientHeight;

      smoothX = lerp(smoothX, cursorX, CURSOR_LERP);
      smoothY = lerp(smoothY, cursorY, CURSOR_LERP);

      elapsed += 0.016;
      drawGlow(w, h);
      drawParticles(elapsed);

      animRaf = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = mount!.getBoundingClientRect();
      cursorX = e.clientX - rect.left;
      cursorY = e.clientY - rect.top;
      hasCursor = true;
    }

    function onMouseLeave() {
      hasCursor = false;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();
    animate();

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(animRaf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      if (mount.contains(glowCanvas)) mount.removeChild(glowCanvas);
      if (mount.contains(particleCanvas)) mount.removeChild(particleCanvas);
    };
  }, [reduced]);

  if (reduced) return null;

  return <div ref={mountRef} className="hero-particles-layer" aria-hidden="true" />;
}
