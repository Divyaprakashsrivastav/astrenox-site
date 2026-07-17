"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../features/useReducedMotion";
import { useAnimationActiveRef } from "../features/useAnimationActiveRef";
import { createAnimationScheduler } from "../features/animationScheduler";

const COLORS = ["#A855F7", "#7C3AED", "#C084FC", "#6366F1"];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function MethodStoryAtmosphere() {
  const mountRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const activeRef = useAnimationActiveRef(mountRef);

  useEffect(() => {
    const { requestAnimationFrame, cancelAnimationFrame } = createAnimationScheduler(activeRef, 30);
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
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

    function createParticles(count: number): Particle[] {
      return Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.07,
        r: 0.7 + Math.random() * 1.6,
        alpha: 0.06 + Math.random() * 0.14,
      }));
    }

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
      particles = createParticles(w < 640 ? 10 : 17);
    }

    function frame() {
      if (disposed) return;
      if (!activeRef.current) {
        raf = requestAnimationFrame(frame);
        return;
      }
      g.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const grad = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, hexToRgba(color, p.alpha));
        grad.addColorStop(1, hexToRgba(color, 0));
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
  }, [activeRef, reduced]);

  return (
    <div className="method-story-atmosphere" aria-hidden>
      <div className="method-story-atmosphere-base" />
      <div ref={gridRef} className="method-story-atmosphere-grid" />
      <div ref={glowRef} className="method-story-atmosphere-glow" />
      {!reduced && <div ref={mountRef} className="method-story-atmosphere-particles" />}
      <div className="method-story-atmosphere-vignette" />
      <div className="method-story-atmosphere-noise" />
    </div>
  );
}

export function useMethodStoryParallax(
  sectionRef: React.RefObject<HTMLElement | null>,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const grid = sectionRef.current.querySelector(".method-story-atmosphere-grid");
    const glow = sectionRef.current.querySelector(".method-story-atmosphere-glow");

    const triggers: ScrollTrigger[] = [];

    if (grid) {
      triggers.push(
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          animation: gsap.to(grid, { x: -120, ease: "none" }),
        })
      );
    }

    if (glow) {
      triggers.push(
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          animation: gsap.fromTo(
            glow,
            { x: 0, y: 0 },
            { x: 60, y: -40, ease: "none" }
          ),
        })
      );
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [sectionRef, enabled]);
}
