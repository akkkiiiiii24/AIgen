
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowUpRight, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

interface AIUpdate {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  category: string;
  tags: string[];
  stars?: number;
  url?: string;
}

interface AIUpdateCardProps {
  update: AIUpdate;
  onView?: () => void;
}

export function AIUpdateCard({ update, onView }: AIUpdateCardProps) {
  const sourceColors = {
    GitHub: "bg-gray-800 text-white",
    ArXiv: "bg-red-600 text-white",
    HuggingFace: "bg-yellow-500 text-black",
  };
  
  const categoryColors = {
    NLP: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    CV: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    RL: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Multimodal: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    LLM: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    Other: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  };
  
  const handleOpenSource = () => {
    if (onView) {
      onView();
      return;
    }
    
    // Default behavior if no onView is provided
    let url = "";
    if (update.url) {
      url = update.url;
    } else if (update.source === "GitHub") {
      url = `https://github.com/search?q=${encodeURIComponent(update.title)}`;
    } else if (update.source === "HuggingFace") {
      url = `https://huggingface.co/models?search=${encodeURIComponent(update.title)}`;
    } else if (update.source === "ArXiv") {
      url = `https://arxiv.org/search/?query=${encodeURIComponent(update.title)}`;
    }
    
    if (url) {
      window.open(url, "_blank");
      toast.info("Opening source link", {
        description: `Viewing details on ${update.source}`
      });
    }
  };
  
  return (
    <Card className="overflow-hidden card-hover-effect transition-all">
      <CardHeader className="p-4 pb-0 flex flex-row justify-between items-start">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Badge className={sourceColors[update.source as keyof typeof sourceColors]}>
              {update.source}
            </Badge>
            <Badge className={categoryColors[update.category as keyof typeof categoryColors]}>
              {update.category}
            </Badge>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          {update.date}
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-base leading-tight">
          {update.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {update.summary}
        </p>
        <div className="flex flex-wrap gap-1 pt-2">
          {update.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {update.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{update.tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="text-xs text-muted-foreground flex items-center">
          {update.stars && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-yellow-500 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {update.stars.toLocaleString()}
            </div>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs text-primary"
          onClick={handleOpenSource}
        >
          <LinkIcon className="h-3 w-3 mr-1" />
          Open Source
        </Button>
      </CardFooter>
    </Card>
  );
}
