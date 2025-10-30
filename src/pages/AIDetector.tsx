import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PlagiarismChecker } from "@/components/PlagiarismChecker";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TrustSection } from "@/components/TrustSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const AIDetector = () => {
  useEffect(() => {
    document.title = "Công cụ kiểm tra đạo văn AI miễn phí | Vua Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div id="checker">
          <PlagiarismChecker />
        </div>
        <WhyChooseSection />
        <FeaturesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AIDetector;
