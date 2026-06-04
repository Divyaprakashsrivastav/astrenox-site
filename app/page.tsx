import SiteLayout from "./component/layout/SiteLayout";
import Hero from "./component/Hero";
import IntelligencePlatformTeaser from "./component/home/IntelligencePlatformTeaser";
import EmailCaptureSection from "./component/home/EmailCaptureSection";
import Features from "./component/Features";
import MethodologyBottleneck from "./component/home/MethodologyBottleneck";
import ProcessTimeline from "./component/ProcessTimeline";
import EcosystemProviders from "./component/home/EcosystemProviders";
import Projects from "./component/Projects";
import Research from "./component/Research";
import DisruptionSection from "./component/home/DisruptionSection";
import Statistics from "./component/Statistics";
import TrustedCompanies from "./component/TrustedCompanies";
import TrustMarquee from "./component/home/TrustMarquee";
import DeliveryProofBar from "./component/home/DeliveryProofBar";
import TalkToExperts from "./component/home/TalkToExperts";
import FAQSection from "./component/FAQSection";
import CTABanner from "./component/CTABanner";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <IntelligencePlatformTeaser />
      <EmailCaptureSection />
      <Features />
      <MethodologyBottleneck />
      <ProcessTimeline />
      <EcosystemProviders />
      <Projects />
      <Research />
      <DisruptionSection />
      <Statistics />
      <TrustedCompanies />
      <TrustMarquee />
      <DeliveryProofBar />
      <TalkToExperts />
      <FAQSection />
      <CTABanner />
    </SiteLayout>
  );
}
