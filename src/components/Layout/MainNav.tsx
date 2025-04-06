
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Bell, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  title: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Explore", href: "/explore" },
  { title: "Insights", href: "/insights" },
  { title: "Research", href: "/research" },
  { title: "Summarizer", href: "/summarizer" },
  { title: "Chat", href: "/chat" }
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative size-8 rounded-full bg-gradient-ai p-[2px] animate-pulse-slow">
              <div className="size-full bg-background dark:bg-black rounded-full flex items-center justify-center">
                <span className="font-bold text-lg ai-gradient-text">A</span>
              </div>
            </div>
            <span className="font-bold text-xl"><span className="ai-gradient-text">AI</span>gen</span>
          </Link>
          
          {!isMobile && (
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    item.isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-aigen-500 rounded-full"></span>
          </Button>
          <ThemeToggle />
          <Button variant="default" size="sm" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMobile && isOpen && (
        <div className="container py-4 border-t">
          <nav className="grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent",
                  item.isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
