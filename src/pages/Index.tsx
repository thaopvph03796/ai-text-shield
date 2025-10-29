import { Header } from "@/components/Header";
import { ToolsHeroSection } from "@/components/ToolsHeroSection";
import { ToolsShowcase } from "@/components/ToolsShowcase";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
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
