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
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Công cụ kiểm tra đạo văn AI miễn phí 100% tốt nhất. Phát hiện ChatGPT, GPT-4, Claude với 8+ AI detectors. Kết quả trong 5 giây, hỗ trợ tiếng Việt.");
    }
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
