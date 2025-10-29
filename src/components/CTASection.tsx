import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sẵn sàng kiểm tra nội dung của bạn?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bắt đầu sử dụng CheckAI miễn phí ngay hôm nay. Không cần đăng ký, không cần thẻ tín dụng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Bắt đầu kiểm tra
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Xem bảng giá
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Hơn 10,000+ người dùng đã tin tưởng CheckAI
          </p>
        </div>
      </div>
    </section>
  );
};
