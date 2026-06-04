import Navbar from "../Navbar";
import Footer from "../Footer";
import SiteEffects from "../ui/SiteEffects";
import AstrenoxChatbot from "../chat/AstrenoxChatbot";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteEffects />
      <Navbar />
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
      <AstrenoxChatbot />
    </>
  );
}
