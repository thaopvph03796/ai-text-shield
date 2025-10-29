import { Card } from "@/components/ui/card";
import { Sparkles, Target, RefreshCw, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Nhân hóa văn bản AI",
    description: "Chuyển đổi nội dung được tạo bởi ChatGPT, GPT-4, Claude thành văn bản tự nhiên như người viết thật"
  },
  {
    icon: Target,
    title: "Vượt qua 10+ AI Detectors",
    description: "Được tối ưu để vượt qua ZeroGPT, Undetectable.ai, Grammarly, Crossplag, Sapling và nhiều detector khác"
  },
  {
    icon: RefreshCw,
    title: "4 chế độ bypass",
    description: "Tiêu chuẩn, Mở rộng, Rút gọn, Sáng tạo - Chọn chế độ phù hợp với mục đích sử dụng của bạn"
  },
  {
    icon: Shield,
    title: "Giữ nguyên ý nghĩa",
    description: "Đảm bảo nội dung sau bypass vẫn giữ nguyên thông điệp và ý nghĩa ban đầu"
  }
];

export const BypassFeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tính năng AI Bypass
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Công nghệ tiên tiến giúp nhân hóa văn bản AI một cách tự nhiên và hiệu quả
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
