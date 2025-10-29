import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Tránh bị phát hiện bởi AI Detector",
    description: "Nội dung sau khi bypass sẽ có điểm AI thấp hơn đáng kể, giúp vượt qua các công cụ kiểm tra AI"
  },
  {
    title: "Tăng tính tự nhiên của văn bản",
    description: "Văn phong trở nên gần gũi, tự nhiên hơn, giống như được viết bởi con người thực sự"
  },
  {
    title: "Phù hợp cho nhiều mục đích",
    description: "Sử dụng cho blog, bài viết học thuật, nội dung marketing, email và nhiều loại văn bản khác"
  },
  {
    title: "Tiết kiệm thời gian chỉnh sửa",
    description: "Không cần viết lại từ đầu, chỉ cần bypass và chỉnh sửa nhỏ là có nội dung hoàn hảo"
  },
  {
    title: "Giữ nguyên thông điệp gốc",
    description: "Đảm bảo ý nghĩa và thông tin quan trọng được giữ nguyên sau khi bypass"
  },
  {
    title: "Hỗ trợ đa ngôn ngữ",
    description: "Bypass văn bản tiếng Việt, tiếng Anh và nhiều ngôn ngữ khác với chất lượng cao"
  }
];

export const BypassBenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lợi ích khi sử dụng AI Bypass
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tối ưu hóa nội dung AI của bạn để trở nên tự nhiên và chuyên nghiệp hơn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Cách hoạt động của AI Bypass
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    1
                  </div>
                  <h4 className="font-semibold text-foreground">Phân tích văn bản</h4>
                  <p className="text-sm text-muted-foreground">
                    Hệ thống phân tích cấu trúc và đặc điểm của văn bản AI gốc
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    2
                  </div>
                  <h4 className="font-semibold text-foreground">Nhân hóa nội dung</h4>
                  <p className="text-sm text-muted-foreground">
                    Áp dụng các kỹ thuật để làm văn bản trở nên tự nhiên hơn
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    3
                  </div>
                  <h4 className="font-semibold text-foreground">Tối ưu kết quả</h4>
                  <p className="text-sm text-muted-foreground">
                    Kiểm tra và tối ưu để đảm bảo vượt qua AI detectors
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
