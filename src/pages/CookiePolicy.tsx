import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Chính sách Cookie | Vua Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Chính sách Cookie
          </h1>
          <p className="text-muted-foreground mb-8">
            Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
          </p>

          <Card className="p-8">
            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Cookie là gì?</h2>
                <p className="text-muted-foreground mb-4">
                  Cookie là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn (máy tính, điện thoại, tablet) 
                  khi bạn truy cập website. Chúng giúp website "nhớ" thông tin về lượt truy cập của bạn, làm cho 
                  trải nghiệm sử dụng trở nên thuận tiện và hiệu quả hơn.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Vua Marketing sử dụng Cookie như thế nào?</h2>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi sử dụng các loại cookie sau:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cookie cần thiết</h3>
                    <p className="text-muted-foreground">
                      Những cookie này là cần thiết để website hoạt động và không thể tắt trong hệ thống của chúng tôi. 
                      Chúng thường chỉ được đặt để đáp ứng các hành động của bạn như cài đặt tùy chọn bảo mật, 
                      đăng nhập hoặc điền vào biểu mẫu.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cookie hiệu suất</h3>
                    <p className="text-muted-foreground">
                      Cookie này cho phép chúng tôi đếm số lượt truy cập và nguồn lưu lượng truy cập để đo lường 
                      và cải thiện hiệu suất của website. Chúng giúp chúng tôi biết trang nào phổ biến nhất và 
                      ít phổ biến nhất.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cookie chức năng</h3>
                    <p className="text-muted-foreground">
                      Cookie này cho phép website cung cấp chức năng và cá nhân hóa nâng cao. Chúng có thể được 
                      thiết lập bởi chúng tôi hoặc bởi các nhà cung cấp bên thứ ba có dịch vụ chúng tôi đã thêm 
                      vào trang của mình (ví dụ: lưu ngôn ngữ ưa thích).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cookie phân tích</h3>
                    <p className="text-muted-foreground">
                      Chúng tôi sử dụng Google Analytics để hiểu cách người dùng tương tác với website. 
                      Thông tin này giúp chúng tôi cải thiện trải nghiệm người dùng.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookie của bên thứ ba</h2>
                <p className="text-muted-foreground mb-4">
                  Ngoài cookie của chúng tôi, chúng tôi cũng sử dụng một số dịch vụ của bên thứ ba có thể đặt 
                  cookie trên thiết bị của bạn:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Google Analytics:</strong> Để phân tích lưu lượng truy cập website</li>
                  <li><strong>Social Media:</strong> Nếu bạn chia sẻ nội dung qua mạng xã hội</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Quản lý Cookie</h2>
                <p className="text-muted-foreground mb-4">
                  Bạn có quyền chấp nhận hoặc từ chối cookie. Hầu hết trình duyệt web tự động chấp nhận cookie, 
                  nhưng bạn có thể thay đổi cài đặt trình duyệt để từ chối cookie nếu muốn.
                </p>
                <p className="text-muted-foreground mb-4">
                  Lưu ý rằng việc vô hiệu hóa cookie có thể ảnh hưởng đến chức năng của website. Một số tính năng 
                  và dịch vụ có thể không hoạt động đúng cách.
                </p>
                <p className="text-muted-foreground">
                  Để tìm hiểu cách quản lý cookie trên trình duyệt của bạn:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Thay đổi Chính sách Cookie</h2>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi có thể cập nhật Chính sách Cookie này theo thời gian để phản ánh những thay đổi 
                  trong các phương thức của chúng tôi hoặc vì các lý do hoạt động, pháp lý hoặc quy định khác.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Liên hệ</h2>
                <p className="text-muted-foreground">
                  Nếu bạn có câu hỏi về Chính sách Cookie của chúng tôi, vui lòng liên hệ:
                  <br />
                  Email: <a href="mailto:privacy@vuamarketing.com" className="text-primary hover:underline">privacy@vuamarketing.com</a>
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

export default CookiePolicy;
