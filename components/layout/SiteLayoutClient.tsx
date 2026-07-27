"use client";

import dynamic from "next/dynamic";
import Navbar from "../Navbar";
import ConditionalFooter from "../footer/ConditionalFooter";
import SiteEffects from "../ui/SiteEffects";
import { TooltipProvider } from "../ui/primitives/tooltip";

const PremiumCursor = dynamic(() => import("../design/PremiumCursor"), { ssr: false });
const AstrenoxChatbot = dynamic(() => import("../chat/AstrenoxChatbot"), { ssr: false });

export default function SiteLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider delayDuration={200}>
      <PremiumCursor />
      <SiteEffects />
      <Navbar />
      <main className="min-h-screen">
        <div className="page-enter">{children}</div>
      </main>
      <ConditionalFooter />
      <AstrenoxChatbot />
    </TooltipProvider>
  );
}
