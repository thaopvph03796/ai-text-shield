import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "Điều khoản sử dụng | Vua Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Điều khoản sử dụng
          </h1>
          <p className="text-muted-foreground mb-8">
            Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
          </p>

          <Card className="p-8">
            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Chấp nhận điều khoản</h2>
                <p className="text-muted-foreground mb-4">
                  Bằng cách truy cập và sử dụng Vua Marketing, bạn đồng ý tuân theo các điều khoản và điều kiện sau đây. 
                  Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng dịch vụ của chúng tôi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Sử dụng dịch vụ</h2>
                <p className="text-muted-foreground mb-4">
                  Vua Marketing cung cấp công cụ kiểm tra đạo văn AI và bypass nội dung AI. Bạn đồng ý sử dụng dịch vụ:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Chỉ cho mục đích hợp pháp và không vi phạm quyền của bên thứ ba</li>
                  <li>Không sử dụng để tạo, phân phối nội dung gây hại, lừa đảo hoặc vi phạm pháp luật</li>
                  <li>Không cố gắng hack, phá hoại hoặc làm gián đoạn dịch vụ</li>
                  <li>Không sử dụng để vi phạm quyền sở hữu trí tuệ của người khác</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Quyền sở hữu trí tuệ</h2>
                <p className="text-muted-foreground mb-4">
                  Tất cả nội dung, tính năng và chức năng của Vua Marketing (bao gồm nhưng không giới hạn ở văn bản, đồ họa, 
                  logo, mã nguồn) là tài sản của Vua Marketing và được bảo vệ bởi luật bản quyền quốc tế.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Nội dung người dùng</h2>
                <p className="text-muted-foreground mb-4">
                  Bạn giữ quyền sở hữu đối với nội dung mà bạn gửi lên Vua Marketing. Chúng tôi không lưu trữ, chia sẻ 
                  hoặc sử dụng nội dung của bạn cho bất kỳ mục đích nào ngoài việc cung cấp dịch vụ kiểm tra và bypass.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Miễn trừ trách nhiệm</h2>
                <p className="text-muted-foreground mb-4">
                  Vua Marketing được cung cấp "như hiện tại" mà không có bất kỳ bảo đảm nào. Chúng tôi không đảm bảo 
                  tính chính xác 100% của kết quả kiểm tra AI. Người dùng chịu trách nhiệm về việc sử dụng kết quả 
                  từ dịch vụ của chúng tôi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Giới hạn trách nhiệm</h2>
                <p className="text-muted-foreground mb-4">
                  Vua Marketing không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc 
                  hậu quả phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ của chúng tôi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Thay đổi điều khoản</h2>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi có quyền sửa đổi các điều khoản này bất kỳ lúc nào. Những thay đổi quan trọng sẽ 
                  được thông báo qua email hoặc thông báo trên website. Việc tiếp tục sử dụng dịch vụ sau khi 
                  có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Luật áp dụng</h2>
                <p className="text-muted-foreground mb-4">
                  Các điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam. Mọi tranh chấp 
                  phát sinh sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Liên hệ</h2>
                <p className="text-muted-foreground">
                  Nếu bạn có bất kỳ câu hỏi nào về Điều khoản sử dụng này, vui lòng liên hệ với chúng tôi qua 
                  email: <a href="mailto:support@vuamarketing.com" className="text-primary hover:underline">support@vuamarketing.com</a>
                </p>
              </section>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
