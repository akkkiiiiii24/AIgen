
import { PropsWithChildren } from "react";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
