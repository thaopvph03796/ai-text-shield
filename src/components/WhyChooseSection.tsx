import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Globe, Users, Target } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Giới thiệu về Vua Marketing - Công cụ kiểm tra đạo văn AI hàng đầu
            </h2>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card p-8 rounded-2xl shadow-lg mb-8 border border-border">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                <strong className="text-primary">ai.vuamarketing.com</strong> là nền tảng công nghệ tiên tiến chuyên cung cấp dịch vụ <strong>kiểm tra đạo văn AI miễn phí</strong> và <strong>nhận diện nội dung do trí tuệ nhân tạo tạo ra</strong>. Trong bối cảnh các công cụ AI như ChatGPT, GPT-4, Claude, Gemini ngày càng phổ biến, việc phân biệt giữa nội dung do con người viết và nội dung được tạo bởi AI trở nên vô cùng quan trọng đối với giáo dục, xuất bản và các lĩnh vực chuyên môn.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                Được phát triển bởi đội ngũ chuyên gia công nghệ và xử lý ngôn ngữ tự nhiên, <strong>Vua Marketing</strong> tích hợp hơn <strong>8 công cụ AI detector hàng đầu thế giới</strong> bao gồm ZeroGPT, Undetectable.ai, Grammarly AI Detector, Crossplag, GPTZero, và nhiều hệ thống phát hiện AI khác. Sự kết hợp đa dạng này giúp đảm bảo <strong>độ chính xác lên đến 95%</strong> trong việc phát hiện nội dung AI, vượt trội so với việc sử dụng một công cụ đơn lẻ.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">100% Miễn phí</h3>
                    <p className="text-muted-foreground">
                      Không giới hạn số lần kiểm tra, không yêu cầu đăng ký tài khoản hay thẻ tín dụng. Cam kết miễn phí vĩnh viễn cho mọi người dùng.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Tốc độ xử lý nhanh</h3>
                    <p className="text-muted-foreground">
                      Phân tích và trả về kết quả chỉ trong 5 giây, cho phép bạn kiểm tra hàng trăm văn bản mỗi ngày một cách hiệu quả.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Đa ngôn ngữ</h3>
                    <p className="text-muted-foreground">
                      Hỗ trợ kiểm tra tiếng Việt, tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Tây Ban Nha và tiếng Pháp với độ chính xác cao.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Bảo mật tuyệt đối</h3>
                    <p className="text-muted-foreground">
                      Văn bản của bạn được xử lý an toàn, không lưu trữ hay chia sẻ với bên thứ ba, đảm bảo quyền riêng tư tuyệt đối.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Sứ mệnh của chúng tôi
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Vua Marketing cam kết xây dựng một cộng đồng trung thực, minh bạch trong kỷ nguyên AI. Chúng tôi tin rằng công nghệ AI là công cụ hỗ trợ tuyệt vời, nhưng giá trị của sự sáng tạo và tư duy con người không thể thay thế. Sứ mệnh của chúng tôi là giúp mọi người sử dụng AI một cách có trách nhiệm, duy trì tính trung thực học thuật và bảo vệ chất lượng nội dung trong thời đại số.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
