import { Header } from "@/components/Header";
import { AIBypassTool } from "@/components/AIBypassTool";
import { BypassFeaturesSection } from "@/components/BypassFeaturesSection";
import { BypassBenefitsSection } from "@/components/BypassBenefitsSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const AIBypass = () => {
  useEffect(() => {
    document.title = "AI Bypass - Công cụ nhân hóa nội dung AI | Vua Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AIBypassTool />
        <BypassFeaturesSection />
        <BypassBenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AIBypass;
