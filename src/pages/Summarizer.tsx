
import { useState } from "react";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Link as LinkIcon, Upload, Volume2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Summarizer = () => {
  const [url, setUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [summaryGenerated, setSummaryGenerated] = useState(false);
  
  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setSummaryGenerated(true);
      toast.success("Summary generated successfully!");
    }, 2000);
  };
  
  const handleFileUpload = () => {
    toast.info("File upload functionality would be implemented here");
  };
  
  const samplePrompts = [
    "Summarize this research paper on LLMs",
    "Extract key methodology details",
    "Compare with similar research",
    "List technical limitations",
    "Explain the practical applications"
  ];
  
  return (
    <PageLayout>
      <div className="container py-8 md:py-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">AI Research Summarizer</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Save hours of reading by generating concise summaries of AI research papers and technical content
          </p>
        </div>
        
        <div className="mt-12 mx-auto max-w-4xl">
          <Tabs defaultValue="url" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="url">URL</TabsTrigger>
              <TabsTrigger value="upload">Upload File</TabsTrigger>
            </TabsList>
            
            <TabsContent value="url" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Enter Research URL</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUrlSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="url">Research Paper or Article URL</Label>
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="url"
                            placeholder="https://arxiv.org/abs/..."
                            className="pl-10"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="bg-gradient-ai hover:opacity-90 transition-opacity"
                          disabled={isGenerating}
                        >
                          {isGenerating ? "Generating..." : "Summarize"}
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="upload" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Upload Research Paper</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="border border-dashed rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-muted/50 transition-colors" onClick={handleFileUpload}>
                      <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                      <p className="font-medium">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground">PDF, TXT (max 20MB)</p>
                    </div>
                    <Button onClick={handleFileUpload}>Select File</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {summaryGenerated && (
            <div className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Generated Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    className="min-h-[200px] resize-none"
                    value="This research paper introduces a novel approach to fine-tuning large language models that significantly reduces computational requirements while maintaining performance comparable to full fine-tuning. The authors propose a parameter-efficient transfer learning method that selectively updates only critical components of the model architecture.

Key findings include:
1. 90% reduction in computational resources compared to traditional fine-tuning
2. Minimal performance degradation (less than 2% on benchmark tasks)
3. Improved transferability across domains
4. Potential for deployment on edge devices due to efficiency gains

The method works by identifying and updating only the most influential parameters while keeping the rest frozen, dramatically reducing memory usage and training time."
                    readOnly
                  />
                  
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      Copy to clipboard
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Volume2 className="h-4 w-4" />
                      Listen
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Key Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-aigen-500 mt-0.5 flex-shrink-0" />
                      <span>Parameter-efficient fine-tuning reduces resource usage by 90%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-aigen-500 mt-0.5 flex-shrink-0" />
                      <span>Performance remains within 2% of full fine-tuning on standard benchmarks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-aigen-500 mt-0.5 flex-shrink-0" />
                      <span>Method works by selectively updating only the most influential parameters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-aigen-500 mt-0.5 flex-shrink-0" />
                      <span>Enables deployment on resource-constrained environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-aigen-500 mt-0.5 flex-shrink-0" />
                      <span>Shows improved transferability across different domains</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Try These Prompts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {samplePrompts.map((prompt, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        className="justify-start h-auto py-2 px-4 text-left"
                        onClick={() => toast.info(`Would generate response for: "${prompt}"`)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  Click on any prompt to generate a specialized response
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Summarizer;
