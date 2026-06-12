import type { Transition } from "framer-motion";

export const COLORS = {
  primary: "#6F2C91",
  secondary: "#B65C8A",
  accent: "#19D3C5",
  line: "#D0D5DD",
  lineMuted: "#E8E8EE",
  fill: "#FFFFFF",
  glow: "rgba(111, 44, 145, 0.1)",
} as const;

export function safeSvgId(reactId: string): string {
  return `v${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
}

export function loop(
  reduced: boolean,
  transition: Transition
): Transition | undefined {
  if (reduced) return { duration: 0, repeat: 0 };
  return { repeat: Infinity, ...transition };
}

export function pulseOpacity(reduced: boolean) {
  return reduced ? { opacity: 0.9 } : { opacity: [0.55, 1, 0.55] };
}

export function pulseTransition(reduced: boolean, duration = 2.4) {
  return loop(reduced, { duration, ease: "easeInOut" });
}
