
import { useState } from "react";
import { PageLayout } from "@/components/Layout/PageLayout";
import { HeroSection } from "@/components/Homepage/HeroSection";
import { AIUpdatesSection } from "@/components/Homepage/AIUpdatesSection";
import { FeatureSection } from "@/components/Homepage/FeatureSection";
import { SubscriptionSection } from "@/components/Homepage/SubscriptionSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <PageLayout gradient>
      <div className="container mt-8 mb-12">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for AI tools, papers, models..."
              className="pl-10 pr-20 h-12 rounded-full border-2 border-primary/20 focus:border-primary transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="absolute right-1 top-1 h-10 bg-gradient-ai rounded-full px-4"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
      
      <HeroSection />
      <AIUpdatesSection />
      <FeatureSection />
      <SubscriptionSection />
    </PageLayout>
  );
};

export default Index;
