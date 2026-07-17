"use client";

/**
 * WebGL hex grid, Kevin Levron CodePen MYgbRwg
 * https://codepen.io/soju22/pen/MYgbRwg
 * via threejs-components Grid1Background (CC BY-NC-SA 4.0)
 */

import { useEffect, useRef } from "react";
import { Color } from "three";
import { useReducedMotion } from "@/app/component/features/useReducedMotion";
import { useAnimationActiveRef } from "@/app/component/features/useAnimationActiveRef";

const GRID_CDN =
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js";

const C_PRIMARY = 0xb46cff;
const C_SECONDARY = 0x8a2be2;
const C_ACCENT = 0x5b8cff;
const C_SOFT = 0xd8c4ff;

const PULSE_COLORS = [0xc084fc, 0x8b5cf6, 0x60a5fa, 0xd8b4fe, 0x93c5fd];
const BASE_LIGHT1 = 950;
const BASE_LIGHT2 = 520;

interface GridMesh {
  count: number;
  setColors: (colors: number[]) => void;
  setColorAt: (index: number, color: Color) => void;
  getColorAt: (index: number, color: Color) => void;
  instanceColor: { needsUpdate: boolean } | null;
  light1: { color: { set: (c: number) => void }; intensity: number };
  light2: { color: { set: (c: number) => void }; intensity: number };
}

interface GridBgInstance {
  dispose: () => void;
  grid: GridMesh;
  three: {
    resize: () => void;
    dispose: () => void;
    onBeforeRender: (time: { elapsed: number; delta: number }) => void;
  };
}

type Grid1Factory = (
  canvas: HTMLCanvasElement,
  opts?: Record<string, unknown>
) => GridBgInstance;

interface CellPulse {
  index: number;
  target: Color;
  startMs: number;
}

function applyAstrenoxTheme(bg: GridBgInstance) {
  bg.grid.setColors([C_SOFT, C_PRIMARY, C_ACCENT, C_SECONDARY]);
  bg.grid.light1.color.set(C_PRIMARY);
  bg.grid.light1.intensity = BASE_LIGHT1;
  bg.grid.light2.color.set(C_ACCENT);
  bg.grid.light2.intensity = BASE_LIGHT2;
}

function snapshotCellColors(grid: GridMesh): Color[] {
  const colors: Color[] = [];
  const tmp = new Color();
  for (let i = 0; i < grid.count; i++) {
    grid.getColorAt(i, tmp);
    colors.push(tmp.clone());
  }
  return colors;
}

function pulseStrength(t: number) {
  if (t <= 0) return 0;
  if (t >= 1) return 0;
  if (t < 0.25) return t / 0.25;
  if (t > 0.65) return (1 - t) / 0.35;
  return 1;
}

export default function HexGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const activeRef = useAnimationActiveRef(containerRef);

  useEffect(() => {
    if (reduced) return;

    const root = containerRef.current;
    if (!root) return;

    let disposed = false;
    let bg: GridBgInstance | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let initRaf = 0;
    let pulseTimer: ReturnType<typeof setTimeout> | null = null;
    let unsubscribeActivity: (() => void) | null = null;
    let mounting = false;
    let baseCellColors: Color[] = [];
    const activePulses: CellPulse[] = [];
    const mixColor = new Color();
    let mouseBoost = 0;

    const canvas = document.createElement("canvas");
    canvas.className = "hex-grid-canvas";
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.display = "block";
    root.appendChild(canvas);

    const resize = () => {
      if (disposed || !bg) return;
      try {
        bg.three.resize();
      } catch {
        /* parent not sized yet */
      }
    };

    function schedulePulse() {
      if (disposed || !bg || !bg.grid.instanceColor) return;

      const count = 2 + Math.floor(Math.random() * 2);
      const used = new Set<number>();
      const startMs = performance.now();

      while (used.size < count) {
        const index = Math.floor(Math.random() * bg.grid.count);
        if (used.has(index)) continue;
        used.add(index);
        activePulses.push({
          index,
          target: new Color(
            PULSE_COLORS[Math.floor(Math.random() * PULSE_COLORS.length)]
          ),
          startMs,
        });
      }

      const delay = 3000 + Math.random() * 2000;
      pulseTimer = setTimeout(schedulePulse, delay);
    }

    function onPointerMove() {
      mouseBoost = Math.min(mouseBoost + 0.08, 1);
    }

    async function mountGrid() {
      if (disposed || mounting || bg || !activeRef.current) return;
      mounting = true;
      if (!root!.contains(canvas)) root!.appendChild(canvas);
      const { default: Grid1Background } = (await import(
        /* webpackIgnore: true */ GRID_CDN
      )) as { default: Grid1Factory };

      mounting = false;
      if (disposed || !activeRef.current) return;

      bg = Grid1Background(canvas, {
        type: "hexagon",
        n: 26,
        timeCoef: 0.55,
        depthScale: 0.38,
        tiltRotationX: 0.04,
        tiltRotationY: 0.04,
        materialParams: {
          metalness: 0.2,
          roughness: 0.78,
          clearcoat: 0.22,
          clearcoatRoughness: 0.48,
        },
      });

      applyAstrenoxTheme(bg);
      if (bg.grid.instanceColor) {
        baseCellColors = snapshotCellColors(bg.grid);
      }

      const libraryBeforeRender = bg.three.onBeforeRender;
      bg.three.onBeforeRender = (time) => {
        if (!activeRef.current) return;
        libraryBeforeRender(time);

        if (!bg?.grid.instanceColor || baseCellColors.length === 0) return;

        mouseBoost *= 0.94;
        const boost = 1 + mouseBoost * 0.35;
        bg.grid.light1.intensity = BASE_LIGHT1 * boost;
        bg.grid.light2.intensity = BASE_LIGHT2 * boost;

        if (mouseBoost > 0.15) {
          bg.grid.light1.color.set(C_PRIMARY);
          bg.grid.light2.color.set(C_ACCENT);
        }

        const now = performance.now();
        for (let i = activePulses.length - 1; i >= 0; i--) {
          const pulse = activePulses[i];
          const t = (now - pulse.startMs) / 1500;
          const strength = pulseStrength(t);

          if (strength <= 0) {
            bg.grid.setColorAt(pulse.index, baseCellColors[pulse.index]);
            activePulses.splice(i, 1);
            continue;
          }

          mixColor
            .copy(baseCellColors[pulse.index])
            .lerp(pulse.target, strength * 0.92);
          bg.grid.setColorAt(pulse.index, mixColor);
        }

        if (activePulses.length > 0) {
          bg.grid.instanceColor.needsUpdate = true;
        }
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      pulseTimer = setTimeout(schedulePulse, 3200 + Math.random() * 1500);
      resize();
    }

    function disposeGrid() {
      if (pulseTimer) {
        clearTimeout(pulseTimer);
        pulseTimer = null;
      }
      window.removeEventListener("pointermove", onPointerMove);
      activePulses.length = 0;
      baseCellColors = [];
      bg?.dispose();
      bg = null;
    }

    const waitForSize = () => {
      if (disposed || !activeRef.current) return;
      if (root.clientWidth < 2 || root.clientHeight < 2) {
        initRaf = requestAnimationFrame(waitForSize);
        return;
      }
      mountGrid().catch((err) => {
        console.error("[HexGridBackground] failed to mount:", err);
      });
    };

    waitForSize();

    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);
    unsubscribeActivity = activeRef.subscribe((active) => {
      cancelAnimationFrame(initRaf);
      if (active) {
        if (!bg) {
          waitForSize();
        } else if (pulseTimer == null) {
          pulseTimer = setTimeout(schedulePulse, 3200 + Math.random() * 1500);
        }
        return;
      }

      // Pause pulses while off-screen, keep WebGL instance mounted so
      // scrolling back to the hero does not flash a blank canvas.
      if (pulseTimer) {
        clearTimeout(pulseTimer);
        pulseTimer = null;
      }
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(initRaf);
      unsubscribeActivity?.();
      resizeObserver?.disconnect();
      disposeGrid();
      if (root.contains(canvas)) {
        root.removeChild(canvas);
      }
    };
  }, [activeRef, reduced]);

  if (reduced) return null;

  return (
    <div ref={containerRef} className="hex-grid-background" aria-hidden="true" />
  );
}
