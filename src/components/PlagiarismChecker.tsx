import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Copy } from "lucide-react";
import { toast } from "sonner";
import { ScoreDisplay } from "./ScoreDisplay";
import { DetectorResults } from "./DetectorResults";

const EXAMPLE_TEXT = `Trí tuệ nhân tạo (AI) đang thay đổi cách chúng ta làm việc và sống. Công nghệ này có khả năng xử lý dữ liệu lớn, nhận dạng mẫu và đưa ra quyết định thông minh. AI được ứng dụng rộng rãi trong nhiều lĩnh vực như y tế, giáo dục, kinh doanh và giải trí. Tuy nhiên, việc sử dụng AI cũng đặt ra nhiều câu hỏi về đạo đức và tác động xã hội.`;

export const PlagiarismChecker = () => {
  const [text, setText] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(null);
  const [detectorScores, setDetectorScores] = useState<Array<{name: string, score: number, icon: string}>>([]);

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  const handleCheck = async () => {
    if (!text.trim()) {
      toast.error("Vui lòng nhập văn bản cần kiểm tra");
      return;
    }

    setIsChecking(true);
    
    // Simulate AI checking with realistic delays
    setTimeout(() => {
      const baseScore = Math.floor(Math.random() * 40) + 30; // 30-70%
      setAiScore(0);
      
      // Animate score counting up
      let currentScore = 0;
      const increment = baseScore / 30;
      const scoreInterval = setInterval(() => {
        currentScore += increment;
        if (currentScore >= baseScore) {
          setAiScore(baseScore);
          clearInterval(scoreInterval);
        } else {
          setAiScore(Math.floor(currentScore));
        }
      }, 50);

      // Generate detector results
      const detectors = [
        { name: "zerogpt.com", icon: "🔍" },
        { name: "undetectable.ai", icon: "🎯" },
        { name: "grammarly.com", icon: "✍️" },
        { name: "crossplag.com", icon: "📝" },
        { name: "sapling.ai", icon: "🌿" },
        { name: "seo.ai", icon: "🔎" },
        { name: "detecting-ai.com", icon: "🤖" },
        { name: "contentdetector.ai", icon: "📊" }
      ];

      const results = detectors.map(detector => ({
        name: detector.name,
        score: Math.floor(Math.random() * 30) + baseScore - 10,
        icon: detector.icon
      }));

      setDetectorScores(results);
      setIsChecking(false);
      toast.success("Kiểm tra hoàn tất!");
    }, 2000);
  };

  const handleTryExample = () => {
    setText(EXAMPLE_TEXT);
    setAiScore(null);
    setDetectorScores([]);
    toast.info("Đã tải văn bản mẫu");
  };

  const handleUpload = () => {
    toast.info("Tính năng upload đang được phát triển");
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      toast.success("Đã dán văn bản từ clipboard");
    } catch (err) {
      toast.error("Không thể truy cập clipboard");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Công cụ kiểm tra đạo văn AI
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tính năng Kiểm tra Đạo văn AI cho phép người dùng xác minh và phát hiện nội dung được tạo bởi 
            trí tuệ nhân tạo (AI) hoặc sao chép từ các nguồn khác trên internet
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  số từ: {wordCount} / 5000
                </span>
                <span className="text-sm text-muted-foreground">
                  Còn lại 5000 từ
                </span>
              </div>

              <Textarea
                placeholder="Nhập văn bản hoặc tải lên tài liệu của bạn để kiểm tra..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[300px] resize-none text-base"
              />

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={handleUpload}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Doc
                </Button>
                <Button variant="outline" onClick={handleTryExample}>
                  <FileText className="w-4 h-4 mr-2" />
                  Thử ví dụ
                </Button>
                <Button variant="outline" onClick={handlePaste}>
                  <Copy className="w-4 h-4 mr-2" />
                  Dán văn bản
                </Button>
              </div>

              <Button 
                onClick={handleCheck}
                disabled={isChecking || !text.trim()}
                className="w-full"
                size="lg"
              >
                {isChecking ? "Đang kiểm tra..." : "Check AI"}
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <ScoreDisplay score={aiScore} isChecking={isChecking} />
            <DetectorResults scores={detectorScores} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Nếu bạn cần trợ giúp, tham gia nhóm Telegram của chúng tôi.{" "}
            <a href="#" className="text-primary hover:underline">
              Telegram Group
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
