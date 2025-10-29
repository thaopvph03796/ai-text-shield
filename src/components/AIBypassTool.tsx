import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, Copy, Wand2, Loader2, Globe } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
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

const LANGUAGES = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

const MODES = [
  { id: "standard", name: "Tiêu chuẩn", description: "Cân bằng giữa tự nhiên và giữ nguyên ý" },
  { id: "expand", name: "Mở rộng", description: "Thêm chi tiết và làm phong phú nội dung" },
  { id: "simplify", name: "Rút gọn", description: "Đơn giản hóa và làm gọn văn bản" },
  { id: "creative", name: "Sáng tạo", description: "Viết lại với phong cách sáng tạo hơn" },
];

export const AIBypassTool = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [language, setLanguage] = useState("vi");
  const [mode, setMode] = useState("standard");
  const [isProcessing, setIsProcessing] = useState(false);

  const inputWordCount = inputText.trim().split(/\s+/).filter(word => word.length > 0).length;
  const outputWordCount = outputText.trim().split(/\s+/).filter(word => word.length > 0).length;

  const handleBypass = async () => {
    if (!inputText.trim()) {
      toast.error("Vui lòng nhập văn bản cần bypass");
      return;
    }

    setIsProcessing(true);
    setOutputText("");

    // Simulate AI processing with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));

    // Simple text transformation to simulate bypass (in production, this would call an AI API)
    let processed = inputText;
    
    switch (mode) {
      case "expand":
        processed = inputText.split(". ").map(sentence => {
          if (sentence.trim()) {
            return sentence + ", điều này rất quan trọng";
          }
          return sentence;
        }).join(". ");
        break;
      case "simplify":
        processed = inputText.replace(/rất /g, "").replace(/thực sự /g, "");
        break;
      case "creative":
        processed = inputText.replace(/là /g, "chính là ").replace(/có /g, "sở hữu ");
        break;
      default:
        // Standard mode - add slight variations
        processed = inputText
          .replace(/AI/g, "trí tuệ nhân tạo")
          .replace(/được/g, "đã được")
          .replace(/là một/g, "chính là một");
    }

    setOutputText(processed);
    setIsProcessing(false);
    toast.success("Đã bypass thành công!");
  };

  const handleCopy = async () => {
    if (!outputText) {
      toast.error("Chưa có nội dung để copy");
      return;
    }
    try {
      await navigator.clipboard.writeText(outputText);
      toast.success("Đã copy vào clipboard");
    } catch (err) {
      toast.error("Không thể copy");
    }
  };

  const handleUpload = () => {
    toast.info("Tính năng upload đang được phát triển");
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    toast.info("Đã xóa nội dung");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            <Wand2 className="w-3 h-3 mr-1" />
            Công cụ nhân hóa văn bản AI
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Công cụ vượt kiểm tra nội dung AI
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Chuyển đổi nội dung AI thành văn bản tự nhiên như người viết. Vượt qua 10+ AI detectors 
            như ZeroGPT, Undetectable.ai, Grammarly và nhiều công cụ khác
          </p>
        </div>

        <Tabs defaultValue="ai-detector" className="mb-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="ai-detector" onClick={() => window.location.href = '/'}>
              AI Detector
            </TabsTrigger>
            <TabsTrigger value="bypass-ai">
              Bypass AI
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Văn bản gốc</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleUpload}>
                    <Upload className="w-4 h-4 mr-1" />
                    Upload
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleClear}>
                    Xóa
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-full sm:w-[200px]">
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

                <Select value={mode} onValueChange={setMode}>
                  <SelectTrigger className="w-full sm:flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {MODES.map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        <div>
                          <div className="font-medium">{m.name}</div>
                          <div className="text-xs text-muted-foreground">{m.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Nhập hoặc dán văn bản AI cần bypass vào đây..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-[400px] resize-none text-base"
              />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Số từ: {inputWordCount}</span>
                <span>Còn lại 5000 từ</span>
              </div>

              <Button 
                onClick={handleBypass}
                disabled={isProcessing || !inputText.trim()}
                className="w-full"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Bypass AI
                  </>
                )}
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Kết quả sau bypass</h3>
                <Button variant="outline" size="sm" onClick={handleCopy} disabled={!outputText}>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </Button>
              </div>

              <Textarea
                placeholder="Kết quả sẽ hiển thị ở đây sau khi bypass..."
                value={outputText}
                readOnly
                className="min-h-[400px] resize-none text-base bg-muted/30"
              />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Số từ: {outputWordCount}</span>
                {outputText && (
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    ✓ Đã bypass
                  </Badge>
                )}
              </div>

              {outputText && (
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <p className="text-sm text-success font-medium mb-2">
                    ✓ Văn bản đã được nhân hóa thành công
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Nội dung này giờ đây trông tự nhiên hơn và có khả năng cao vượt qua các AI detector
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            💡 Mẹo: Sử dụng chế độ "Tiêu chuẩn" cho kết quả cân bằng nhất. 
            Chế độ "Sáng tạo" cho văn phong độc đáo hơn.
          </p>
        </div>
      </div>
    </div>
  );
};
