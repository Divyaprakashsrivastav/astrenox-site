import Navbar from "../Navbar";
import Footer from "../Footer";
import SiteEffects from "../ui/SiteEffects";
import AstrenoxChatbot from "../chat/AstrenoxChatbot";
import PageTransition from "../design/PageTransition";
import PremiumCursor from "../design/PremiumCursor";
import { TooltipProvider } from "../ui/primitives/tooltip";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider delayDuration={200}>
      <PremiumCursor />
      <SiteEffects />
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <AstrenoxChatbot />
    </TooltipProvider>
  );
}
