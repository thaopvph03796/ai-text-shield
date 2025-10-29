import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Chính sách bảo mật
          </h1>
          <p className="text-muted-foreground mb-8">
            Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
          </p>

          <Card className="p-8">
            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Cam kết bảo mật</h2>
                <p className="text-muted-foreground mb-4">
                  CheckAI cam kết bảo vệ quyền riêng tư của người dùng. Chính sách này giải thích cách chúng tôi 
                  thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi sử dụng dịch vụ của chúng tôi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Thông tin chúng tôi thu thập</h2>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi có thể thu thập các loại thông tin sau:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Thông tin cá nhân:</strong> Email, tên (nếu bạn đăng ký tài khoản)</li>
                  <li><strong>Dữ liệu sử dụng:</strong> Số lần kiểm tra, loại ngôn ngữ, thời gian sử dụng</li>
                  <li><strong>Thông tin kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, hệ điều hành</li>
                  <li><strong>Cookies:</strong> Để cải thiện trải nghiệm người dùng (xem Chính sách Cookie)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Cách chúng tôi sử dụng thông tin</h2>
                <p className="text-muted-foreground mb-4">
                  Thông tin thu thập được sử dụng để:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Cung cấp và cải thiện dịch vụ CheckAI</li>
                  <li>Phân tích xu hướng sử dụng và tối ưu hóa hiệu suất</li>
                  <li>Gửi thông báo về cập nhật và tính năng mới (nếu bạn đăng ký)</li>
                  <li>Bảo vệ chống lại gian lận và lạm dụng dịch vụ</li>
                  <li>Tuân thủ các yêu cầu pháp lý</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Bảo vệ nội dung người dùng</h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Cam kết quan trọng:</strong> Chúng tôi KHÔNG lưu trữ nội dung văn bản 
                  mà bạn gửi lên để kiểm tra hoặc bypass. Văn bản của bạn chỉ được xử lý trong thời gian thực và bị xóa 
                  ngay sau khi hoàn tất phân tích. Chúng tôi không chia sẻ, bán hoặc sử dụng nội dung của bạn cho 
                  bất kỳ mục đích nào khác.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Chia sẻ thông tin với bên thứ ba</h2>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ thông tin với:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Nhà cung cấp dịch vụ:</strong> Để hỗ trợ vận hành dịch vụ (hosting, analytics)</li>
                  <li><strong>Yêu cầu pháp lý:</strong> Khi được yêu cầu bởi cơ quan có thẩm quyền</li>
                  <li><strong>Bảo vệ quyền lợi:</strong> Để bảo vệ quyền, tài sản hoặc an toàn của CheckAI và người dùng</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Bảo mật dữ liệu</h2>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi sử dụng các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ thông tin của bạn, bao gồm:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Mã hóa SSL/TLS cho tất cả truyền tải dữ liệu</li>
                  <li>Mã hóa dữ liệu nhạy cảm khi lưu trữ</li>
                  <li>Kiểm soát truy cập nghiêm ngặt</li>
                  <li>Giám sát và kiểm tra bảo mật định kỳ</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Quyền của người dùng</h2>
                <p className="text-muted-foreground mb-4">
                  Bạn có quyền:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Truy cập và xem thông tin cá nhân của bạn</li>
                  <li>Yêu cầu sửa đổi hoặc xóa thông tin cá nhân</li>
                  <li>Từ chối nhận email marketing (opt-out)</li>
                  <li>Rút lại sự đồng ý xử lý dữ liệu bất kỳ lúc nào</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies và công nghệ theo dõi</h2>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi sử dụng cookies và công nghệ tương tự để cải thiện trải nghiệm người dùng. 
                  Xem <a href="/cookie-policy" className="text-primary hover:underline">Chính sách Cookie</a> để biết thêm chi tiết.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Thay đổi chính sách</h2>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Chúng tôi sẽ thông báo về 
                  các thay đổi quan trọng qua email hoặc thông báo nổi bật trên website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Liên hệ</h2>
                <p className="text-muted-foreground">
                  Nếu bạn có câu hỏi về Chính sách bảo mật hoặc muốn thực hiện quyền của mình, vui lòng liên hệ:
                  <br />
                  Email: <a href="mailto:privacy@checkai.com" className="text-primary hover:underline">privacy@checkai.com</a>
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

export default Privacy;
