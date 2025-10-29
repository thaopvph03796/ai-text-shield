import { Card } from "@/components/ui/card";
import { Star, Users, FileCheck, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Người dùng tin tưởng",
    description: "Tại Việt Nam và toàn cầu"
  },
  {
    icon: FileCheck,
    value: "100,000+",
    label: "Văn bản đã kiểm tra",
    description: "Mỗi tháng"
  },
  {
    icon: Star,
    value: "4.9/5.0",
    label: "Đánh giá từ người dùng",
    description: "Trên 2,000+ đánh giá"
  },
  {
    icon: Globe,
    value: "6+",
    label: "Ngôn ngữ hỗ trợ",
    description: "Bao gồm tiếng Việt"
  }
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Được tin tưởng bởi hàng nghìn người dùng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CheckAI là lựa chọn hàng đầu cho giáo viên, doanh nghiệp và content creator
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Cam kết của CheckAI
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🔒 Bảo mật</h4>
                  <p className="text-sm text-muted-foreground">
                    Văn bản của bạn được mã hóa và không bao giờ được lưu trữ trên hệ thống
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">⚡ Tốc độ</h4>
                  <p className="text-sm text-muted-foreground">
                    Kết quả kiểm tra được trả về trong vài giây, không phải chờ đợi lâu
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">💯 Miễn phí</h4>
                  <p className="text-sm text-muted-foreground">
                    Cam kết miễn phí mãi mãi, không có phí ẩn hay yêu cầu nâng cấp
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
