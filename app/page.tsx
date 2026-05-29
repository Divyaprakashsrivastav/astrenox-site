import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TrustedCompanies from "./component/TrustedCompanies";
import Features from "./component/Features";
import ProcessTimeline from "./component/ProcessTimeline";
import Projects from "./component/Projects";
import Research from "./component/Research";
import Statistics from "./component/Statistics";
import FAQSection from "./component/FAQSection";
import CTABanner from "./component/CTABanner";
import Footer from "./component/Footer";
import SiteEffects from "./component/ui/SiteEffects";

export default function Home() {
  return (
    <>
      <SiteEffects />
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <TrustedCompanies />
        <Features />
        <ProcessTimeline />
        <Projects />
        <Research />
        <Statistics />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
