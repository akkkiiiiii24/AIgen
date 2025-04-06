
import { AIUpdateCard } from "./AIUpdateCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aiUpdates } from "@/data/mockData";

export function AIUpdatesSection() {
  // Display only the latest 6 updates on the homepage
  const latestUpdates = aiUpdates.slice(0, 6);

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Latest AI Updates</h2>
          <p className="text-muted-foreground">
            Discover the most recent developments in AI research and tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {latestUpdates.map((update) => (
            <AIUpdateCard key={update.id} update={update} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="group">
            <Link to="/explore" className="flex items-center gap-2">
              View All Updates
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
