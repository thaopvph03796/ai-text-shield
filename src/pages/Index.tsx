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
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Bộ công cụ AI miễn phí toàn diện từ Vua Marketing. Kiểm tra đạo văn AI, nhân hóa nội dung, và nhiều công cụ AI khác. Kết quả nhanh, chính xác 100%.");
    }
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
