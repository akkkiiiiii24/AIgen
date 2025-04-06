
import { PropsWithChildren } from "react";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps extends PropsWithChildren {
  className?: string;
  gradient?: boolean;
}

export function PageLayout({ 
  children, 
  className,
  gradient = false
}: PageLayoutProps) {
  return (
    <div className={cn(
      "flex min-h-screen flex-col",
      gradient && "bg-gradient-to-b from-background to-black/5 dark:to-white/5",
      className
    )}>
      <MainNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
