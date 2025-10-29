import { Card } from "@/components/ui/card";
import { Shield, Zap, Globe, TrendingUp, Lock, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "8+ AI Detectors tích hợp",
    description: "Kết hợp ZeroGPT, Undetectable.ai, Grammarly, Crossplag, Sapling, SEO.ai và nhiều detector khác để đảm bảo độ chính xác cao nhất"
  },
  {
    icon: Zap,
    title: "Phân tích trong 5 giây",
    description: "Công nghệ AI tiên tiến giúp kiểm tra văn bản cực nhanh. Dán nội dung và nhận kết quả ngay lập tức, tiết kiệm thời gian quý báu"
  },
  {
    icon: Globe,
    title: "Hỗ trợ 6+ ngôn ngữ",
    description: "Kiểm tra nội dung bằng tiếng Việt, tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Tây Ban Nha và tiếng Pháp với độ chính xác cao"
  },
  {
    icon: TrendingUp,
    title: "Báo cáo chi tiết trực quan",
    description: "Nhận điểm số AI tổng hợp và phân tích từng detector riêng biệt. Dễ dàng hiểu và đưa ra quyết định chính xác"
  },
  {
    icon: Lock,
    title: "Bảo mật tuyệt đối",
    description: "Văn bản của bạn được xử lý an toàn với mã hóa SSL. Chúng tôi không lưu trữ hay chia sẻ nội dung của bạn"
  },
  {
    icon: CheckCircle,
    title: "Upload tài liệu trực tiếp",
    description: "Hỗ trợ upload file Word, PDF và nhiều định dạng khác. Không cần copy-paste, chỉ cần kéo thả file vào"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tính năng chính
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Công cụ kiểm tra đạo văn AI miễn phí với các tính năng chuyên nghiệp, được tin dùng bởi hàng nghìn người dùng
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
