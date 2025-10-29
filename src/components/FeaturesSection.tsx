import { Card } from "@/components/ui/card";
import { Shield, Zap, Globe, TrendingUp, Lock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Độ chính xác cao",
    description: "Sử dụng 8+ AI detectors hàng đầu để đảm bảo kết quả chính xác nhất"
  },
  {
    icon: Zap,
    title: "Kiểm tra nhanh chóng",
    description: "Phân tích văn bản trong vài giây, tiết kiệm thời gian quý báu của bạn"
  },
  {
    icon: Globe,
    title: "Hỗ trợ đa ngôn ngữ",
    description: "Kiểm tra nội dung bằng tiếng Việt, tiếng Anh và nhiều ngôn ngữ khác"
  },
  {
    icon: TrendingUp,
    title: "Báo cáo chi tiết",
    description: "Nhận phân tích chi tiết từ nhiều nguồn detector uy tín"
  },
  {
    icon: Lock,
    title: "Bảo mật tuyệt đối",
    description: "Nội dung của bạn được mã hóa và không được lưu trữ"
  },
  {
    icon: Users,
    title: "Miễn phí sử dụng",
    description: "Kiểm tra miễn phí với hạn mức hào phóng cho mọi người dùng"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tính năng nổi bật
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CheckAI cung cấp các công cụ mạnh mẽ để phát hiện nội dung AI với độ chính xác cao nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
