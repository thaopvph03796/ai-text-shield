import { Card } from "@/components/ui/card";
import { FileText, Search, BarChart } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Bước 1: Nhập văn bản",
    description: "Dán nội dung cần kiểm tra hoặc upload tài liệu của bạn vào hệ thống"
  },
  {
    icon: Search,
    title: "Bước 2: Phân tích AI",
    description: "Hệ thống sử dụng nhiều AI detector để quét và phân tích nội dung"
  },
  {
    icon: BarChart,
    title: "Bước 3: Nhận kết quả",
    description: "Xem báo cáo chi tiết với điểm số từ các detector khác nhau"
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cách hoạt động
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chỉ với 3 bước đơn giản, bạn có thể kiểm tra nội dung AI một cách nhanh chóng và chính xác
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
