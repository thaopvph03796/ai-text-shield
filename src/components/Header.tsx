import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold text-foreground">CheckAI</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              AI DETECTOR
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              AI BYPASS
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              AI TOOLS
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              BẢNG GIÁ
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              HƯỚNG DẪN
            </a>
          </nav>
          
          <Button>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
};
