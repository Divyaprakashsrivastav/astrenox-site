import type { Transition } from "framer-motion";

export const COLORS = {
  primary: "#7D2E68",
  secondary: "#C97B84",
  line: "#D0D5DD",
  lineMuted: "#E5E7EB",
  fill: "#FFFFFF",
  glow: "rgba(125, 46, 104, 0.12)",
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
