import Navbar from "../Navbar";
import Footer from "../Footer";
import SiteEffects from "../ui/SiteEffects";
import NewsTicker from "../home/NewsTicker";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteEffects />
      <NewsTicker />
      <Navbar />
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
    </>
  );
}
