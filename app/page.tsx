import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TrustedCompanies from "./component/TrustedCompanies";
import About from "./component/About";
import Features from "./component/Features";
import ProcessTimeline from "./component/ProcessTimeline";
import Projects from "./component/Projects";
import Statistics from "./component/Statistics";
import Careers from "./component/Careers";
import CTABanner from "./component/CTABanner";
import FAQSection from "./component/FAQSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <TrustedCompanies />
        <About />
        <Features />
        <ProcessTimeline />
        <Projects />
        <Statistics />
        <Careers />
        <CTABanner />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
