import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const pricingPlans = [
  {
    name: "Miễn phí",
    price: "0đ",
    period: "mãi mãi",
    description: "Hoàn hảo cho người dùng cá nhân",
    features: [
      "5,000 từ mỗi lần kiểm tra",
      "Không giới hạn số lần kiểm tra",
      "8+ AI detectors",
      "Hỗ trợ 6+ ngôn ngữ",
      "Bypass AI cơ bản",
      "Báo cáo chi tiết",
      "Không cần đăng ký"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "199,000đ",
    period: "tháng",
    description: "Dành cho chuyên gia và doanh nghiệp",
    features: [
      "50,000 từ mỗi lần kiểm tra",
      "Không giới hạn số lần kiểm tra",
      "8+ AI detectors cao cấp",
      "Hỗ trợ tất cả ngôn ngữ",
      "Bypass AI nâng cao",
      "Báo cáo chi tiết xuất PDF",
      "API access",
      "Hỗ trợ ưu tiên 24/7",
      "Không quảng cáo"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    description: "Giải pháp tùy chỉnh cho tổ chức lớn",
    features: [
      "Không giới hạn số từ",
      "Tài khoản team không giới hạn",
      "AI detectors tùy chỉnh",
      "Tích hợp hệ thống riêng",
      "Bypass AI custom",
      "Dedicated support",
      "SLA đảm bảo",
      "Training & Onboarding",
      "Custom API endpoints"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  useEffect(() => {
    document.title = "Bảng giá | Vua Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              <Zap className="w-3 h-3 mr-1" />
              Miễn phí mãi mãi
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Bảng giá Vua Marketing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lựa chọn gói dịch vụ phù hợp với nhu cầu của bạn. Tất cả gói đều bao gồm các tính năng cơ bản.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 ${plan.highlighted ? 'border-2 border-primary shadow-xl scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    Phổ biến nhất
                  </Badge>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <Button 
                  className="w-full mb-6" 
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Liên hệ ngay" : plan.name === "Miễn phí" ? "Bắt đầu miễn phí" : "Nâng cấp ngay"}
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Câu hỏi về giá?
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                Liên hệ với chúng tôi để được tư vấn gói dịch vụ phù hợp nhất cho nhu cầu của bạn
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline">
                  Liên hệ bán hàng
                </Button>
                <Button>
                  Xem câu hỏi thường gặp
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
