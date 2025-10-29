import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Heart } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "100% Miễn phí mãi mãi",
    description: "Không phí ẩn, không yêu cầu thẻ tín dụng. CheckAI cam kết cung cấp dịch vụ kiểm tra AI detector miễn phí cho tất cả người dùng tại Việt Nam và toàn thế giới."
  },
  {
    icon: Shield,
    title: "Độ chính xác vượt trội",
    description: "Tích hợp 8+ AI detectors hàng đầu thế giới như ZeroGPT, Undetectable.ai, Grammarly, Crossplag. Kết quả tổng hợp giúp phát hiện chính xác nội dung AI với tỷ lệ chính xác >95%."
  },
  {
    icon: Zap,
    title: "Nhanh như chớp",
    description: "Phân tích văn bản trong 5 giây. Không cần đợi đợi, không cần đăng ký tài khoản phức tạp. Dán văn bản và nhận kết quả ngay lập tức."
  },
  {
    icon: CheckCircle2,
    title: "Hỗ trợ tiếng Việt",
    description: "Một trong số ít công cụ AI detector hỗ trợ kiểm tra nội dung tiếng Việt. Ngoài ra còn hỗ trợ tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Tây Ban Nha và tiếng Pháp."
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tại sao chọn CheckAI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CheckAI là công cụ kiểm tra đạo văn AI miễn phí tốt nhất với công nghệ tiên tiến và giao diện thân thiện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
