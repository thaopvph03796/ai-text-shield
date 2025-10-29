import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, SearchCheck, Wand2, FileCheck, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tools = [
  {
    icon: SearchCheck,
    title: "AI Detector",
    description: "Công cụ kiểm tra nội dung AI",
    detail: "Phát hiện nội dung được tạo bởi ChatGPT, GPT-4, Claude và các AI khác với độ chính xác cao. Tích hợp 8+ AI detectors hàng đầu thế giới.",
    route: "/ai-detector",
    badge: "Phổ biến nhất",
    badgeColor: "bg-primary/10 text-primary"
  },
  {
    icon: Wand2,
    title: "AI Bypass",
    description: "Công cụ humanize nội dung AI",
    detail: "Chuyển đổi nội dung AI thành văn bản tự nhiên như người viết, vượt qua mọi AI detector. Giữ nguyên ý nghĩa, nâng cao chất lượng nội dung.",
    route: "/ai-bypass",
    badge: "Mới",
    badgeColor: "bg-success/10 text-success"
  },
  {
    icon: FileCheck,
    title: "Plagiarism Checker",
    description: "Kiểm tra đạo văn",
    detail: "Kiểm tra độc đáo của nội dung, phát hiện đạo văn từ hàng tỷ trang web và tài liệu. Đảm bảo tính nguyên bản cho nội dung của bạn.",
    route: "/plagiarism-checker",
    badge: "Sắp ra mắt",
    badgeColor: "bg-muted text-muted-foreground"
  },
  {
    icon: Brain,
    title: "Content Optimizer",
    description: "Tối ưu nội dung SEO",
    detail: "Phân tích và tối ưu nội dung cho SEO, cải thiện khả năng xếp hạng trên công cụ tìm kiếm. Gợi ý từ khóa và cấu trúc nội dung hiệu quả.",
    route: "/content-optimizer",
    badge: "Sắp ra mắt",
    badgeColor: "bg-muted text-muted-foreground"
  }
];

export const ToolsShowcase = () => {
  const navigate = useNavigate();

  const handleToolClick = (route: string) => {
    if (route === "/plagiarism-checker" || route === "/content-optimizer") {
      return; // Chưa có trang này
    }
    navigate(route);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Các công cụ AI Marketing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lựa chọn công cụ phù hợp với nhu cầu của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 hover:border-primary/50 ${
                tool.route === "/plagiarism-checker" || tool.route === "/content-optimizer" 
                  ? "opacity-75 cursor-not-allowed" 
                  : "cursor-pointer"
              }`}
              onClick={() => handleToolClick(tool.route)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>
                <CardTitle className="text-2xl mb-2">{tool.title}</CardTitle>
                <CardDescription className="text-base">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tool.detail}
                </p>
                {tool.route !== "/plagiarism-checker" && tool.route !== "/content-optimizer" && (
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Sử dụng ngay
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
