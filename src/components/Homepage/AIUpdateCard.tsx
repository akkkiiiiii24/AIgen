
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { AIUpdate } from "@/data/mockData";
import { formatDistanceToNow } from "date-fns";

interface AIUpdateCardProps {
  update: AIUpdate;
}

const sourceIcons = {
  GitHub: <Github className="h-4 w-4" />,
  HuggingFace: <span className="text-xs font-bold">🤗</span>,
  ArXiv: <FileText className="h-4 w-4" />,
};

const categoryColors = {
  NLP: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
  CV: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
  RL: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  Multimodal: "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100",
  LLM: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
  Other: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
};

export function AIUpdateCard({ update }: AIUpdateCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <Badge 
              className={categoryColors[update.category]} 
              variant="outline"
            >
              {update.category}
            </Badge>
            <h3 className="font-semibold text-lg">{update.title}</h3>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            {sourceIcons[update.source]}
            <span className="text-xs">{update.source}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {update.summary}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 pt-0">
        <div className="flex flex-wrap gap-1">
          {update.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {update.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{update.tags.length - 3}
            </Badge>
          )}
        </div>
        <div className="w-full flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDistanceToNow(new Date(update.date), { addSuffix: true })}</span>
          </div>
          <Link 
            to={`/update/${update.id}`} 
            className="text-primary hover:underline"
          >
            View details
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
