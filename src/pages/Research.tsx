
import { useState } from "react";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { aiUpdates } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Check, Download, Filter, Link, Search, X } from "lucide-react";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { AIUpdateCard } from "@/components/Homepage/AIUpdateCard";

const ResearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month" | "year">("week");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [subscribedToDigest, setSubscribedToDigest] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Extract all unique tags from the AI updates
  const allTags = Array.from(new Set(aiUpdates.flatMap(update => update.tags)));
  
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
    
    // Apply tag filter
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => update.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesSource && matchesTags;
  });
  
  const handleSubscribe = () => {
    setSubscribedToDigest(true);
    toast.success("Subscribed to research digest", {
      description: "You'll receive personalized research updates based on your filters"
    });
  };
  
  const handleDownloadReport = () => {
    toast.success("Research report downloading", {
      description: "Your report is being generated and will download shortly"
    });
    
    // Simulate download after a short delay
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#';
      link.download = 'aigen_research_report.pdf';
      link.click();
    }, 1500);
  };
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  return (
    <PageLayout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">AI Research Hub</h1>
            <p className="text-muted-foreground">
              Discover and analyze the latest AI research papers and models
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={handleDownloadReport}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Report
            </Button>
            <Tabs defaultValue={timeRange} onValueChange={(v) => setTimeRange(v as any)}>
              <TabsList>
                <TabsTrigger value="day">Daily</TabsTrigger>
                <TabsTrigger value="week">Weekly</TabsTrigger>
                <TabsTrigger value="month">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 mb-8">
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search research papers, tools, and models..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge 
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                  {selectedTags.includes(tag) && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Label htmlFor="category" className="whitespace-nowrap">Category:</Label>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger id="category" className="w-[140px]">
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
                <Label htmlFor="source" className="whitespace-nowrap">Source:</Label>
                <Select
                  value={sourceFilter}
                  onValueChange={setSourceFilter}
                >
                  <SelectTrigger id="source" className="w-[140px]">
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
              
              <div className="flex items-center gap-2">
                <Label className="whitespace-nowrap">Date:</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Research Digest</CardTitle>
              <CardDescription>
                Subscribe to receive AI research updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="subscribe-digest" 
                  checked={subscribedToDigest}
                  onCheckedChange={setSubscribedToDigest}
                />
                <Label htmlFor="subscribe-digest">
                  Email me {timeRange}ly digests
                </Label>
              </div>
              
              <div className="pt-2">
                <Button 
                  className="w-full bg-gradient-ai"
                  onClick={handleSubscribe}
                  disabled={subscribedToDigest}
                >
                  {subscribedToDigest ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Subscribed
                    </>
                  ) : "Subscribe to Digest"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Results */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map((update) => (
              <AIUpdateCard 
                key={update.id} 
                update={update} 
                onView={() => {
                  // Open original source in new tab
                  let url = "";
                  if (update.source === "GitHub") {
                    url = `https://github.com/search?q=${encodeURIComponent(update.title)}`;
                  } else if (update.source === "HuggingFace") {
                    url = `https://huggingface.co/models?search=${encodeURIComponent(update.title)}`;
                  } else if (update.source === "ArXiv") {
                    url = `https://arxiv.org/search/?query=${encodeURIComponent(update.title)}`;
                  }
                  
                  window.open(url, "_blank");
                  
                  toast.info("Opening original source", {
                    description: `Viewing details on ${update.source}`
                  });
                }}
              />
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
            <Button 
              variant="outline"
              onClick={() => toast.info("Loading more results...")}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ResearchPage;
