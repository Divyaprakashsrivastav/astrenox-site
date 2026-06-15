"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

const PALETTE = [
  { r: 180, g: 108, b: 255 },
  { r: 91, g: 140, b: 255 },
  { r: 255, g: 107, b: 214 },
] as const;

const NODE_COUNT = 58;
const MAX_EDGES = 95;
const CONNECT_DIST = 0.52;
const MOUSE_RADIUS = 140;

interface Node3D {
  bx: number;
  by: number;
  bz: number;
  x: number;
  y: number;
  z: number;
  phase: number;
  drift: number;
  colorIdx: number;
  radius: number;
}

interface Edge {
  a: number;
  b: number;
  life: number;
  fade: number;
  packetT: number;
  packetSpeed: number;
}

function randSphere(rMin: number, rMax: number) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = rMin + Math.random() * (rMax - rMin);
  return {
    x: r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.sin(phi) * Math.sin(theta),
    z: r * Math.cos(phi),
  };
}

function createNodes(): Node3D[] {
  return Array.from({ length: NODE_COUNT }, () => {
    const p = randSphere(0.22, 0.92);
    return {
      bx: p.x,
      by: p.y,
      bz: p.z,
      x: p.x,
      y: p.y,
      z: p.z,
      phase: Math.random() * Math.PI * 2,
      drift: 0.25 + Math.random() * 0.55,
      colorIdx: Math.floor(Math.random() * PALETTE.length),
      radius: 1.1 + Math.random() * 1.6,
    };
  });
}

function rotateY(x: number, y: number, z: number, a: number) {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: x * c + z * s, y, z: -x * s + z * c };
}

function rotateX(x: number, y: number, z: number, a: number) {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x, y: y * c - z * s, z: y * s + z * c };
}

function dist3(a: Node3D, b: Node3D) {
  return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

function rebuildEdges(nodes: Node3D[], edges: Edge[]) {
  const pairs: { a: number; b: number; d: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = dist3(nodes[i], nodes[j]);
      if (d < CONNECT_DIST) pairs.push({ a: i, b: j, d });
    }
  }
  pairs.sort((p, q) => p.d - q.d);

  const keep = new Set<string>();
  const next: Edge[] = [];

  for (const edge of edges) {
    const key = `${Math.min(edge.a, edge.b)}-${Math.max(edge.a, edge.b)}`;
    const stillClose =
      dist3(nodes[edge.a], nodes[edge.b]) < CONNECT_DIST + 0.08;
    if (stillClose && edge.life < edge.fade) {
      keep.add(key);
      next.push(edge);
    }
  }

  for (const pair of pairs) {
    if (next.length >= MAX_EDGES) break;
    const key = `${pair.a}-${pair.b}`;
    if (keep.has(key)) continue;
    if (Math.random() > 0.42) continue;
    keep.add(key);
    next.push({
      a: pair.a,
      b: pair.b,
      life: 0,
      fade: 0.55 + Math.random() * 0.45,
      packetT: Math.random(),
      packetSpeed: 0.12 + Math.random() * 0.22,
    });
  }

  return next;
}

export default function LivingNeuralCore() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.className = "living-neural-core-canvas";
    canvas.setAttribute("aria-hidden", "true");
    mount.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      if (mount.contains(canvas)) mount.removeChild(canvas);
      return;
    }
    const g = ctx;

    let disposed = false;
    let raf = 0;
    let nodes = createNodes();
    let edges: Edge[] = rebuildEdges(nodes, []);
    let elapsed = 0;
    let edgeTimer = 0;
    let rotY = 0;
    let rotX = 0.12;

    let mouseX = 0;
    let mouseY = 0;
    let smoothMX = 0;
    let smoothMY = 0;
    let hasMouse = false;

    const projected = nodes.map(() => ({ x: 0, y: 0, scale: 1, z: 0 }));

    function resize() {
      const w = mount!.clientWidth;
      const h = mount!.clientHeight;
      if (w < 2 || h < 2) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      if (disposed) return;
      const w = mount!.clientWidth;
      const h = mount!.clientHeight;
      if (w < 2 || h < 2) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const dt = reduced ? 0.008 : 0.016;
      elapsed += dt;
      edgeTimer += dt;

      if (!reduced && edgeTimer > 1.8) {
        edgeTimer = 0;
        edges = rebuildEdges(nodes, edges);
      }

      rotY += reduced ? 0.0004 : 0.0018;
      rotX = 0.1 + Math.sin(elapsed * 0.28) * 0.06;

      smoothMX += (mouseX - smoothMX) * 0.08;
      smoothMY += (mouseY - smoothMY) * 0.08;

      const breath = 1 + 0.08 * Math.sin((elapsed / 4) * Math.PI * 2);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const ox = Math.sin(elapsed * n.drift + n.phase) * 0.018;
        const oy = Math.cos(elapsed * n.drift * 0.9 + n.phase) * 0.016;
        const oz = Math.sin(elapsed * n.drift * 0.7 + n.phase * 1.3) * 0.014;

        let x = n.bx + ox;
        let y = n.by + oy;
        let z = n.bz + oz;

        const r1 = rotateY(x, y, z, rotY);
        const r2 = rotateX(r1.x, r1.y, r1.z, rotX);
        x = r2.x;
        y = r2.y;
        z = r2.z;

        const fov = 2.2;
        const scale = fov / (fov + z + 0.35);
        const px = w / 2 + x * scale * w * 0.36;
        const py = h / 2 + y * scale * h * 0.36;

        if (hasMouse && !reduced) {
          const dx = smoothMX - px;
          const dy = smoothMY - py;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_RADIUS) {
            const t = 1 - d / MOUSE_RADIUS;
            const pull = t * t * 0.035;
            x += (dx / (w * 0.36)) * pull;
            y += (dy / (h * 0.36)) * pull;
            const r1b = rotateY(x, y, z, rotY);
            const r2b = rotateX(r1b.x, r1b.y, r1b.z, rotX);
            const scaleB = fov / (fov + r2b.z + 0.35);
            projected[i].x = w / 2 + r2b.x * scaleB * w * 0.36;
            projected[i].y = h / 2 + r2b.y * scaleB * h * 0.36;
            projected[i].scale = scaleB;
            projected[i].z = r2b.z;
          } else {
            projected[i].x = px;
            projected[i].y = py;
            projected[i].scale = scale;
            projected[i].z = z;
          }
        } else {
          projected[i].x = px;
          projected[i].y = py;
          projected[i].scale = scale;
          projected[i].z = z;
        }

        n.x = x;
        n.y = y;
        n.z = z;
      }

      g.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const coreR = Math.min(w, h) * 0.14 * breath;

      const coreGrad = g.createRadialGradient(cx, cy, 0, cx, cy, coreR * 2.8);
      coreGrad.addColorStop(0, "rgba(255, 180, 255, 0.55)");
      coreGrad.addColorStop(0.35, "rgba(180, 108, 255, 0.28)");
      coreGrad.addColorStop(0.65, "rgba(91, 140, 255, 0.12)");
      coreGrad.addColorStop(1, "rgba(91, 140, 255, 0)");
      g.fillStyle = coreGrad;
      g.beginPath();
      g.arc(cx, cy, coreR * 2.8, 0, Math.PI * 2);
      g.fill();

      const coreInner = g.createRadialGradient(cx, cy, 0, cx, cy, coreR);
      coreInner.addColorStop(0, "rgba(255, 220, 255, 0.95)");
      coreInner.addColorStop(0.45, "rgba(200, 120, 255, 0.65)");
      coreInner.addColorStop(1, "rgba(91, 140, 255, 0)");
      g.fillStyle = coreInner;
      g.beginPath();
      g.arc(cx, cy, coreR, 0, Math.PI * 2);
      g.fill();

      const sortedEdges = [...edges].sort((ea, eb) => {
        const za = (projected[ea.a].z + projected[ea.b].z) * 0.5;
        const zb = (projected[eb.a].z + projected[eb.b].z) * 0.5;
        return za - zb;
      });

      for (const edge of sortedEdges) {
        edge.life += dt * 0.35;
        const fadeIn = Math.min(edge.life / 0.35, 1);
        const fadeOut = edge.life > edge.fade ? 1 - (edge.life - edge.fade) / 0.5 : 1;
        const alpha = Math.max(0, Math.min(fadeIn, fadeOut));
        if (alpha <= 0) continue;

        const pa = projected[edge.a];
        const pb = projected[edge.b];
        const pulse = 0.55 + 0.45 * Math.sin(elapsed * 2.2 + edge.a * 0.3);
        const lineA = alpha * pulse * 0.42;

        g.strokeStyle = `rgba(180, 108, 255, ${lineA})`;
        g.lineWidth = 0.6 + pa.scale * 0.5;
        g.beginPath();
        g.moveTo(pa.x, pa.y);
        g.lineTo(pb.x, pb.y);
        g.stroke();

        if (!reduced) {
          edge.packetT += edge.packetSpeed * dt;
          if (edge.packetT > 1) edge.packetT -= 1;
          const pktX = pa.x + (pb.x - pa.x) * edge.packetT;
          const pktY = pa.y + (pb.y - pa.y) * edge.packetT;
          const pktGrad = g.createRadialGradient(pktX, pktY, 0, pktX, pktY, 5);
          pktGrad.addColorStop(0, `rgba(255, 200, 255, ${alpha * 0.9})`);
          pktGrad.addColorStop(1, "rgba(91, 140, 255, 0)");
          g.fillStyle = pktGrad;
          g.beginPath();
          g.arc(pktX, pktY, 4, 0, Math.PI * 2);
          g.fill();
        }
      }

      edges = edges.filter((e) => e.life < e.fade + 0.55);

      const sortedNodes = nodes
        .map((n, i) => ({ n, i, z: projected[i].z }))
        .sort((a, b) => a.z - b.z);

      for (const { n, i } of sortedNodes) {
        const p = projected[i];
        const col = PALETTE[n.colorIdx];
        const pulse = 0.7 + 0.3 * Math.sin(elapsed * 1.4 + n.phase);
        const r = n.radius * p.scale * pulse;
        const a = (0.35 + p.scale * 0.45) * pulse;

        const glow = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3.2);
        glow.addColorStop(0, `rgba(${col.r},${col.g},${col.b},${a})`);
        glow.addColorStop(0.5, `rgba(${col.r},${col.g},${col.b},${a * 0.25})`);
        glow.addColorStop(1, `rgba(${col.r},${col.g},${col.b},0)`);
        g.fillStyle = glow;
        g.beginPath();
        g.arc(p.x, p.y, r * 3.2, 0, Math.PI * 2);
        g.fill();

        g.fillStyle = `rgba(255, 240, 255, ${0.55 + pulse * 0.35})`;
        g.beginPath();
        g.arc(p.x, p.y, r * 0.55, 0, Math.PI * 2);
        g.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = mount!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      hasMouse = true;
    }

    function onMouseLeave() {
      hasMouse = false;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();
    raf = requestAnimationFrame(draw);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    mount.addEventListener("mouseleave", onMouseLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      mount.removeEventListener("mouseleave", onMouseLeave);
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, [reduced]);

  return <div ref={mountRef} className="living-neural-core" aria-hidden />;
}
