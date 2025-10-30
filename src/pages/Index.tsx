import { Header } from "@/components/Header";
import { ToolsHeroSection } from "@/components/ToolsHeroSection";
import { ToolsShowcase } from "@/components/ToolsShowcase";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Công cụ AI miễn phí | Vua Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ToolsHeroSection />
        <ToolsShowcase />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
