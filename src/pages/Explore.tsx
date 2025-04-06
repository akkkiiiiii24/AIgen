
import { useState } from "react";
import { PageLayout } from "@/components/Layout/PageLayout";
import { AIUpdateCard } from "@/components/Homepage/AIUpdateCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { aiUpdates, AIUpdate } from "@/data/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  
  const filteredUpdates = aiUpdates.filter(update => {
    // Apply search filter
    const matchesSearch = searchQuery === "" ||
      update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      update.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      update.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Apply category filter
    const matchesCategory = categoryFilter === "all" || update.category === categoryFilter;
    
    // Apply source filter
    const matchesSource = sourceFilter === "all" || update.source === sourceFilter;
    
    return matchesSearch && matchesCategory && matchesSource;
  });
  
  return (
    <PageLayout>
      <div className="container py-8 md:py-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Explore AI Updates</h1>
          <p className="text-muted-foreground">
            Browse and filter the latest AI tools, research papers, and models
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="my-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search updates..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="sm:hidden">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Category:</span>
              <Select
                value={categoryFilter}
                onValueChange={setCategoryFilter}
              >
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="NLP">NLP</SelectItem>
                  <SelectItem value="CV">Computer Vision</SelectItem>
                  <SelectItem value="RL">Reinforcement Learning</SelectItem>
                  <SelectItem value="Multimodal">Multimodal</SelectItem>
                  <SelectItem value="LLM">LLM</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Source:</span>
              <Select
                value={sourceFilter}
                onValueChange={setSourceFilter}
              >
                <SelectTrigger className="h-9 w-[180px]">
                  <SelectValue placeholder="All Sources" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="GitHub">GitHub</SelectItem>
                  <SelectItem value="HuggingFace">Hugging Face</SelectItem>
                  <SelectItem value="ArXiv">ArXiv</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map((update) => (
              <AIUpdateCard key={update.id} update={update} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-muted-foreground">No results found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
        
        {/* Load more button */}
        {filteredUpdates.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Explore;
