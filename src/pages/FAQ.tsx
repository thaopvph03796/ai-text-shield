import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    document.title = "Câu hỏi thường gặp | Vua Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Câu hỏi thường gặp
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm câu trả lời cho các thắc mắc phổ biến về Vua Marketing
            </p>
          </div>
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
