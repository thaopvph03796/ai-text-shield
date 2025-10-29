import { Card } from "@/components/ui/card";

interface ScoreDisplayProps {
  score: number | null;
  isChecking: boolean;
}

export const ScoreDisplay = ({ score, isChecking }: ScoreDisplayProps) => {
  const getScoreColor = (score: number) => {
    if (score < 30) return "text-success";
    if (score < 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score < 30) return "Nội dung gốc";
    if (score < 60) return "Có khả năng AI";
    return "AI tạo nội dung";
  };

  return (
    <Card className="p-6">
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground mb-4">AI SCORE</p>
        
        <div className="relative w-40 h-40 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="hsl(var(--border))"
              strokeWidth="12"
              fill="none"
            />
            {score !== null && (
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke={score < 30 ? "hsl(var(--success))" : score < 60 ? "hsl(var(--warning))" : "hsl(var(--destructive))"}
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${(score / 100) * 439.6} 439.6`}
                className="transition-all duration-1000 ease-out"
              />
            )}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-5xl font-bold ${score !== null ? getScoreColor(score) : "text-muted-foreground"}`}>
              {isChecking ? "..." : score !== null ? `${score}%` : "0%"}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {isChecking 
            ? "Đang phân tích..." 
            : score !== null 
              ? getScoreLabel(score)
              : "Dán nội dung và bấm kiểm tra"
          }
        </p>
      </div>
    </Card>
  );
};
