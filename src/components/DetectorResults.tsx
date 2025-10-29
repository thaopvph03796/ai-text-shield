import { Card } from "@/components/ui/card";

interface DetectorScore {
  name: string;
  score: number;
  icon: string;
}

interface DetectorResultsProps {
  scores: DetectorScore[];
}

export const DetectorResults = ({ scores }: DetectorResultsProps) => {
  const getScoreColor = (score: number) => {
    if (score < 30) return "text-success";
    if (score < 60) return "text-warning";
    return "text-destructive";
  };

  if (scores.length === 0) {
    return null;
  }

  return (
    <Card className="p-6">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">KẾT QUẢ TỪ CÁC DETECTOR</h3>
      <div className="space-y-3">
        {scores.map((detector, index) => (
          <div 
            key={detector.name}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            style={{
              animation: `fadeIn 0.3s ease-out ${index * 0.1}s both`
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{detector.icon}</span>
              <span className="text-sm font-medium text-foreground">{detector.name}</span>
            </div>
            <span className={`text-sm font-bold ${getScoreColor(detector.score)}`}>
              {detector.score}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};
