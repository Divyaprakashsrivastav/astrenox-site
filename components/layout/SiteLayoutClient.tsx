"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import ConditionalFooter from "../footer/ConditionalFooter";
import SiteEffects from "../ui/SiteEffects";
import RouteReset from "./RouteReset";
import { TooltipProvider } from "../ui/primitives/tooltip";

const PremiumCursor = dynamic(() => import("../design/PremiumCursor"), { ssr: false });
const AstrenoxChatbot = dynamic(() => import("../chat/AstrenoxChatbot"), { ssr: false });

/**
 * Remount page content on every route change (including browser back/forward)
 * and force a full reload when the page is restored from bfcache — otherwise
 * Framer Motion / page-enter can leave the previous view half-initialized.
 */
function useNavigationRemountKey() {
  const pathname = usePathname();
  const [epoch, setEpoch] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    const onPopState = () => {
      setEpoch((n) => n + 1);
    };

    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, epoch]);

  return `${pathname}:${epoch}`;
}

export default function SiteLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const remountKey = useNavigationRemountKey();

  return (
    <TooltipProvider delayDuration={200}>
      <RouteReset />
      <PremiumCursor />
      <SiteEffects />
      <Navbar />
      <main className="min-h-screen">
        <div key={remountKey} className="page-enter">
          {children}
        </div>
      </main>
      <ConditionalFooter />
      <AstrenoxChatbot />
    </TooltipProvider>
  );
}
