import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, FileCheck, Users } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Giáo viên & Giảng viên",
    description: "Kiểm tra bài tập, luận văn, đề tài của học sinh, sinh viên có sử dụng AI không. Đảm bảo tính nguyên bản và chất lượng học thuật.",
    benefits: ["Tiết kiệm thời gian chấm bài", "Phát hiện gian lận học tập", "Đánh giá năng lực thực sự"]
  },
  {
    icon: Briefcase,
    title: "Doanh nghiệp & Marketer",
    description: "Xác minh nội dung marketing, blog, báo cáo được viết bởi nhân viên hay AI. Đảm bảo chất lượng content và tính chuyên nghiệp.",
    benefits: ["Kiểm soát chất lượng content", "Đảm bảo tính độc đáo", "Tránh penalty từ Google"]
  },
  {
    icon: FileCheck,
    title: "Biên tập viên & Nhà xuất bản",
    description: "Kiểm tra bài viết, tin tức, nội dung trước khi xuất bản. Đảm bảo tính chân thực và độ tin cậy của thông tin.",
    benefits: ["Duy trì uy tín thương hiệu", "Tránh nội dung spam", "Đảm bảo chất lượng biên tập"]
  },
  {
    icon: Users,
    title: "Người viết & Content Creator",
    description: "Tự kiểm tra nội dung của mình để đảm bảo không bị coi là AI-generated. Tối ưu hóa content trước khi xuất bản.",
    benefits: ["Tự đánh giá content", "Cải thiện văn phong", "Tăng tính tự nhiên"]
  }
];

export const UseCasesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ai nên sử dụng Vua Marketing?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Công cụ kiểm tra AI phù hợp cho mọi người cần xác minh tính nguyên bản của nội dung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-all duration-300"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
