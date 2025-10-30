import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FileText, Upload, Wand2, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const Guide = () => {
  useEffect(() => {
    document.title = "Hướng dẫn sử dụng | Vua Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Hướng dẫn chi tiết cách sử dụng công cụ AI của Vua Marketing. Từ kiểm tra đạo văn AI đến nhân hóa nội dung, tất cả trong một nơi.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hướng dẫn sử dụng Vua Marketing
            </h1>
            <p className="text-lg text-muted-foreground">
              Tìm hiểu cách sử dụng Vua Marketing để kiểm tra và bypass nội dung AI hiệu quả
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Cách sử dụng AI Detector
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Bước 1: Nhập văn bản
                      </h3>
                      <p className="text-muted-foreground">
                        Dán văn bản cần kiểm tra vào ô nhập liệu. Bạn cũng có thể upload file Word hoặc PDF trực tiếp. 
                        Vua Marketing hỗ trợ kiểm tra lên đến 5,000 từ mỗi lần (gói miễn phí).
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Bước 2: Chọn ngôn ngữ
                      </h3>
                      <p className="text-muted-foreground">
                        Chọn ngôn ngữ của văn bản từ dropdown. Vua Marketing hỗ trợ tiếng Việt, tiếng Anh, tiếng Trung, 
                        tiếng Nhật, tiếng Tây Ban Nha và tiếng Pháp.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wand2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Bước 3: Nhận kết quả
                      </h3>
                      <p className="text-muted-foreground">
                        Nhấn "Check AI" và chờ 5 giây để nhận kết quả. Bạn sẽ thấy điểm AI tổng thể và phân tích 
                        từ 8+ AI detectors khác nhau. Điểm càng cao nghĩa là khả năng nội dung được tạo bởi AI càng lớn.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Cách sử dụng AI Bypass
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Bước 1: Nhập văn bản AI
                      </h3>
                      <p className="text-muted-foreground">
                        Dán văn bản được tạo bởi AI (ChatGPT, GPT-4, Claude, v.v.) vào ô bên trái. 
                        Bạn có thể upload file hoặc dán trực tiếp từ clipboard.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Bước 2: Chọn chế độ bypass
                      </h3>
                      <p className="text-muted-foreground">
                        Chọn một trong 4 chế độ: Tiêu chuẩn (cân bằng), Mở rộng (thêm chi tiết), 
                        Rút gọn (đơn giản hóa), hoặc Sáng tạo (phong cách độc đáo).
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wand2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Bước 3: Nhận văn bản đã nhân hóa
                      </h3>
                      <p className="text-muted-foreground">
                        Nhấn "Bypass AI" và chờ vài giây. Văn bản sau khi bypass sẽ xuất hiện ở ô bên phải, 
                        đã được tối ưu để trông tự nhiên hơn và vượt qua các AI detector.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Mẹo sử dụng hiệu quả
              </h2>
              
              <Card className="p-6">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">Kiểm tra nhiều lần:</strong> Để có kết quả chính xác nhất, 
                      hãy kiểm tra văn bản nhiều lần và so sánh kết quả từ các detector khác nhau.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">Chọn chế độ phù hợp:</strong> Với AI Bypass, chế độ "Tiêu chuẩn" 
                      thường cho kết quả tốt nhất cho hầu hết các loại văn bản.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">Đọc và chỉnh sửa:</strong> Sau khi bypass, hãy đọc lại và chỉnh sửa nhỏ 
                      để đảm bảo văn bản hoàn toàn tự nhiên và phù hợp với ngữ cảnh.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">Sử dụng kết hợp:</strong> Kiểm tra văn bản sau khi bypass để đảm bảo 
                      đã đạt điểm AI thấp như mong muốn.
                    </span>
                  </li>
                </ul>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guide;
