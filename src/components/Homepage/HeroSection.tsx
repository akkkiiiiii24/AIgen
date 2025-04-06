
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Discover the <span className="ai-gradient-text">Future of AI</span> in One Place
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                AIgen tracks and summarizes the latest AI tools, research papers, and models from GitHub, Hugging Face, and ArXiv
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-gradient-ai hover:opacity-90 transition-opacity">
                <Link to="/explore">Explore AI Updates</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/subscription">Subscribe to Digest</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square md:aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-lg bg-muted/50">
              <div className="absolute inset-0 bg-gradient-to-br from-aigen-500/50 to-aigen-900/50 opacity-70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">1.5K+</div>
                    <div className="text-sm font-medium">AI Models</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">3K+</div>
                    <div className="text-sm font-medium">Research Papers</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">5K+</div>
                    <div className="text-sm font-medium">GitHub Repos</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm font-medium">Daily Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
