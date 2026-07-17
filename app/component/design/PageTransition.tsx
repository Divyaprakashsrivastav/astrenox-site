import type { ReactNode } from "react";

/** CSS-only route enter — no Framer Motion on the global shell */
export default function PageTransition({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
