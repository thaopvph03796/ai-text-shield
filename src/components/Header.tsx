import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "AI DETECTOR", href: "/" },
    { name: "AI BYPASS", href: "/ai-bypass" },
    { name: "BẢNG GIÁ", href: "/pricing" },
    { name: "HƯỚNG DẪN", href: "/guide" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CD</span>
            </div>
            <span className="text-xl font-bold text-foreground">Checkdaovan</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button className="hidden sm:flex">Đăng nhập</Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="mt-4 w-full">Đăng nhập</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
