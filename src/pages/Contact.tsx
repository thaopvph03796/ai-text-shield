import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    document.title = "Liên hệ | Vua Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Liên hệ với Vua Marketing để được hỗ trợ. Email: support@vuamarketing.com, Telegram: @VuaMarketingAI. Chúng tôi luôn sẵn sàng giúp đỡ bạn.");
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to a backend
    toast.success("Cảm ơn bạn! Chúng tôi sẽ phản hồi trong vòng 24 giờ.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Có câu hỏi hoặc cần hỗ trợ? Chúng tôi luôn sẵn sàng giúp đỡ bạn!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-2">Gửi email cho chúng tôi</p>
              <a href="mailto:support@vuamarketing.com" className="text-primary hover:underline">
                support@vuamarketing.com
              </a>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Telegram</h3>
              <p className="text-muted-foreground text-sm mb-2">Tham gia cộng đồng</p>
              <a href="#" className="text-primary hover:underline">
                @VuaMarketing_Group
              </a>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Hỗ trợ</h3>
              <p className="text-muted-foreground text-sm mb-2">Thời gian làm việc</p>
              <p className="text-primary">
                T2 - T6: 9:00 - 18:00
              </p>
            </Card>
          </div>

          <Card className="p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Gửi tin nhắn cho chúng tôi
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Họ và tên *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tiêu đề *
                </label>
                <Input
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Vấn đề bạn cần hỗ trợ"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nội dung *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mô tả chi tiết về vấn đề của bạn..."
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Gửi tin nhắn
              </Button>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
