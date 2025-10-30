import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";
import { useEffect } from "react";

const ApiDocs = () => {
  useEffect(() => {
    document.title = "API Documentation | Vua Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Tài liệu API của Vua Marketing. Tích hợp kiểm tra đạo văn AI và nhân hóa nội dung vào ứng dụng của bạn. RESTful API đơn giản, dễ sử dụng.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              <Code className="w-3 h-3 mr-1" />
              For Developers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              API Documentation
            </h1>
            <p className="text-lg text-muted-foreground">
              Tích hợp Vua Marketing vào ứng dụng của bạn với RESTful API
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Authentication</h2>
              <p className="text-muted-foreground mb-4">
                Tất cả API requests đều yêu cầu API key. Bạn có thể lấy API key trong trang tài khoản của mình.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Check AI Content</h2>
              <Badge className="mb-4">POST</Badge>
              <p className="text-muted-foreground mb-4">
                Kiểm tra xem nội dung có được tạo bởi AI hay không
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">Endpoint</h3>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <code className="text-sm">
                  POST https://api.vuamarketing.com/v1/detect
                </code>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">Request Body</h3>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <pre className="text-sm overflow-x-auto">
{`{
  "text": "Your content here...",
  "language": "vi"
}`}
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">Response</h3>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "ai_score": 75,
    "detectors": [
      {
        "name": "zerogpt",
        "score": 72
      },
      {
        "name": "undetectable",
        "score": 78
      }
    ]
  }
}`}
                </pre>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Bypass AI Detection</h2>
              <Badge className="mb-4">POST</Badge>
              <p className="text-muted-foreground mb-4">
                Chuyển đổi nội dung AI thành văn bản tự nhiên
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">Endpoint</h3>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <code className="text-sm">
                  POST https://api.vuamarketing.com/v1/bypass
                </code>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">Request Body</h3>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <pre className="text-sm overflow-x-auto">
{`{
  "text": "AI generated content...",
  "language": "vi",
  "mode": "standard"
}`}
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">Response</h3>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "original_text": "AI generated content...",
    "bypassed_text": "Humanized content...",
    "word_count": 150
  }
}`}
                </pre>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Rate Limits</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Free Plan: 100 requests/day</li>
                <li>Pro Plan: 1,000 requests/day</li>
                <li>Enterprise: Custom limits</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Error Codes</h2>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <code className="text-sm bg-muted px-3 py-1 rounded">400</code>
                  <span className="text-muted-foreground">Bad Request - Invalid parameters</span>
                </div>
                <div className="flex gap-4">
                  <code className="text-sm bg-muted px-3 py-1 rounded">401</code>
                  <span className="text-muted-foreground">Unauthorized - Invalid API key</span>
                </div>
                <div className="flex gap-4">
                  <code className="text-sm bg-muted px-3 py-1 rounded">429</code>
                  <span className="text-muted-foreground">Too Many Requests - Rate limit exceeded</span>
                </div>
                <div className="flex gap-4">
                  <code className="text-sm bg-muted px-3 py-1 rounded">500</code>
                  <span className="text-muted-foreground">Internal Server Error</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Cần hỗ trợ?
              </h3>
              <p className="text-muted-foreground">
                Liên hệ với team technical support của chúng tôi tại{" "}
                <a href="mailto:api@vuamarketing.com" className="text-primary hover:underline">
                  api@vuamarketing.com
                </a>
              </p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiDocs;
