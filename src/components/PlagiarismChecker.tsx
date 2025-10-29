import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Copy, Globe } from "lucide-react";
import { toast } from "sonner";
import { ScoreDisplay } from "./ScoreDisplay";
import { DetectorResults } from "./DetectorResults";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const EXAMPLE_TEXTS = {
  vi: `Trí tuệ nhân tạo (AI) đang thay đổi cách chúng ta làm việc và sống. Công nghệ này có khả năng xử lý dữ liệu lớn, nhận dạng mẫu và đưa ra quyết định thông minh. AI được ứng dụng rộng rãi trong nhiều lĩnh vực như y tế, giáo dục, kinh doanh và giải trí. Tuy nhiên, việc sử dụng AI cũng đặt ra nhiều câu hỏi về đạo đức và tác động xã hội.`,
  en: `Artificial Intelligence (AI) is transforming the way we work and live. This technology has the ability to process large amounts of data, recognize patterns, and make intelligent decisions. AI is widely applied in various fields such as healthcare, education, business, and entertainment. However, the use of AI also raises many questions about ethics and social impact.`,
  zh: `人工智能（AI）正在改变我们的工作和生活方式。这项技术能够处理大量数据，识别模式，并做出智能决策。人工智能广泛应用于医疗、教育、商业和娱乐等多个领域。然而，人工智能的使用也引发了许多关于道德和社会影响的问题。`,
  ja: `人工知能（AI）は、私たちの働き方や生活を変えています。この技術は、大量のデータを処理し、パターンを認識し、知的な決定を下す能力を持っています。AIは、医療、教育、ビジネス、エンターテインメントなど、さまざまな分野で広く応用されています。しかし、AIの使用は倫理と社会的影響に関する多くの質問も提起しています。`,
  es: `La Inteligencia Artificial (IA) está transformando la forma en que trabajamos y vivimos. Esta tecnología tiene la capacidad de procesar grandes cantidades de datos, reconocer patrones y tomar decisiones inteligentes. La IA se aplica ampliamente en diversos campos como la salud, la educación, los negocios y el entretenimiento. Sin embargo, el uso de la IA también plantea muchas preguntas sobre la ética y el impacto social.`,
  fr: `L'Intelligence Artificielle (IA) transforme notre façon de travailler et de vivre. Cette technologie a la capacité de traiter de grandes quantités de données, de reconnaître des modèles et de prendre des décisions intelligentes. L'IA est largement appliquée dans divers domaines tels que la santé, l'éducation, les affaires et le divertissement. Cependant, l'utilisation de l'IA soulève également de nombreuses questions sur l'éthique et l'impact social.`,
};

const LANGUAGES = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export const PlagiarismChecker = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("vi");
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
    const exampleText = EXAMPLE_TEXTS[language as keyof typeof EXAMPLE_TEXTS] || EXAMPLE_TEXTS.vi;
    setText(exampleText);
    setAiScore(null);
    setDetectorScores([]);
    toast.info("Đã tải văn bản mẫu");
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    const selectedLang = LANGUAGES.find(lang => lang.code === value);
    toast.success(`Đã chuyển sang ${selectedLang?.name}`);
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

        <Tabs defaultValue="ai-detector" className="mb-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="ai-detector">
              AI Detector
            </TabsTrigger>
            <TabsTrigger value="bypass-ai" onClick={() => window.location.href = '/ai-bypass'}>
              Bypass AI
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Select value={language} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-[200px]">
                      <Globe className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          <span className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-muted-foreground">
                    {wordCount} / 5000 từ
                  </span>
                </div>
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
