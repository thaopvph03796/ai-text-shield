import { Header } from "@/components/Header";
import { AIBypassTool } from "@/components/AIBypassTool";
import { BypassFeaturesSection } from "@/components/BypassFeaturesSection";
import { BypassBenefitsSection } from "@/components/BypassBenefitsSection";
import { Footer } from "@/components/Footer";

const AIBypass = () => {
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
