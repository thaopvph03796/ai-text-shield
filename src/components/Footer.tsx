import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CD</span>
              </div>
              <span className="text-xl font-bold text-foreground">Checkdaovan</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Công cụ kiểm tra đạo văn AI hàng đầu. Phát hiện nội dung được tạo bởi AI với độ chính xác cao.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI Detector
                </a>
              </li>
              <li>
                <a href="/ai-bypass" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI Bypass
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Bảng giá
                </a>
              </li>
              <li>
                <a href="/api-docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <a href="/guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Hướng dẫn sử dụng
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Pháp lý</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Chính sách cookie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2024 Checkdaovan. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-sm text-muted-foreground text-center sm:text-right">
            Made with ❤️ in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
};
