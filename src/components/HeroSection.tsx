import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const scrollToChecker = () => {
    const element = document.getElementById("checker");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            100% miễn phí trọn đời
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Công cụ kiểm tra đạo văn AI <span className="text-primary">miễn phí 100%</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Phát hiện nội dung được tạo bởi ChatGPT, GPT-4, Claude và các AI khác với độ chính xác cao. Sử dụng{" "}
            <strong className="text-foreground">8+ AI detectors</strong> hàng đầu thế giới, hỗ trợ{" "}
            <strong className="text-foreground">tiếng Việt</strong> và nhiều ngôn ngữ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base px-8" onClick={scrollToChecker}>
              Kiểm tra miễn phí ngay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" onClick={scrollToChecker}>
              Xem demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Không cần tài khoản</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Kết quả trong 5 giây</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Hỗ trợ 6+ ngôn ngữ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
