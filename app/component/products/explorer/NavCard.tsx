"use client";

import { memo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Brain,
  Workflow,
  GitBranch,
  Users,
  Layers,
  Sparkles,
  Factory,
  Shield,
  Landmark,
  Cloud,
  Network,
  Globe2,
  Building,
  Car,
  Server,
  HeartPulse,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { ProductCatalogItem } from "@/app/content/products-catalog";

const ICONS: Record<string, LucideIcon> = {
  brain: Brain,
  workflow: Workflow,
  "git-branch": GitBranch,
  users: Users,
  layers: Layers,
  sparkles: Sparkles,
  factory: Factory,
  shield: Shield,
  landmark: Landmark,
  cloud: Cloud,
  network: Network,
  globe: Globe2,
  building: Building,
  car: Car,
  server: Server,
  "heart-pulse": HeartPulse,
  briefcase: Briefcase,
  "arrow-right": ArrowRight,
};

type NavCardProps = {
  item: ProductCatalogItem;
  active: boolean;
  onSelect: () => void;
};

function NavCard({ item, active, onSelect }: NavCardProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 24 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 24 });
  const Icon = ICONS[item.icon] ?? Sparkles;

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
    setHovered(false);
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onSelect}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      className={`products-nav-card ${active ? "products-nav-card--active" : ""}`}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        y: active ? 0 : hovered ? -2 : [0, -3, 0],
      }}
      transition={
        active || hovered
          ? { type: "spring", stiffness: 400, damping: 28 }
          : { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }
      aria-current={active ? "true" : undefined}
      aria-label={`${item.title}: ${item.summary}`}
    >
      <motion.span
        className="products-nav-card-icon"
        animate={{ scale: active ? [1, 1.08, 1] : 1 }}
        transition={{ duration: 2.5, repeat: active ? Infinity : 0, ease: "easeInOut" }}
      >
        <Icon size={18} strokeWidth={1.75} aria-hidden />
      </motion.span>
      <span className="products-nav-card-body">
        <span className="products-nav-card-title">{item.title}</span>
        <span className="products-nav-card-summary">{item.summary}</span>
      </span>
      {active && <span className="products-nav-card-glow" aria-hidden />}
    </motion.button>
  );
}

export default memo(NavCard);
