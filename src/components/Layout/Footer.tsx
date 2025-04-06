
import { Link } from "react-router-dom";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative size-6 rounded-full bg-gradient-ai p-[1.5px]">
              <div className="size-full bg-background dark:bg-black rounded-full flex items-center justify-center">
                <span className="font-bold text-sm ai-gradient-text">A</span>
              </div>
            </div>
            <span className="font-bold text-lg"><span className="ai-gradient-text">AI</span>gen</span>
          </Link>
          <p className="text-sm text-muted-foreground">Discover and track the latest AI tools, research papers, and models</p>
        </div>
        
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <nav className="flex gap-4 md:gap-6">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="https://github.com" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link to="https://twitter.com" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mt-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AIgen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
