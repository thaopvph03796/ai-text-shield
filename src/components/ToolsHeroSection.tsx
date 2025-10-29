import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ToolsHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Công cụ AI Marketing miễn phí
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Bộ công cụ AI Marketing{" "}
            <span className="text-primary">toàn diện</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Khám phá bộ công cụ AI Marketing mạnh mẽ giúp bạn tối ưu nội dung, 
            kiểm tra chất lượng và nâng cao hiệu quả công việc.
          </p>
        </div>
      </div>
    </section>
  );
};
