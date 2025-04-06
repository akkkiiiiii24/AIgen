
import { useState, useRef } from "react";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoryDistribution, sourceDistribution, weeklyTrends, popularTags } from "@/data/mockData";
import { BarChart, PieChart, LineChart } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { toPng } from "html-to-image";

const Insights = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month" | "year">("week");
  
  // Create refs for each chart container
  const categoriesChartRef = useRef<HTMLDivElement>(null);
  const sourcesChartRef = useRef<HTMLDivElement>(null);
  const trendsChartRef = useRef<HTMLDivElement>(null);
  const tagsChartRef = useRef<HTMLDivElement>(null);
  
  const handleDownloadReport = () => {
    toast.success("Generating insights report", { 
      description: "Your report will be downloaded shortly" 
    });
    
    // Simulate download after a delay
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#';
      link.download = `aigen_insights_report_${new Date().toISOString().split('T')[0]}.pdf`;
      link.click();
    }, 1500);
  };
  
  const handleDownloadChart = (chartRef: React.RefObject<HTMLDivElement>, chartName: string) => {
    if (chartRef.current) {
      toast.success("Generating chart image", {
        description: "Your chart will be downloaded shortly"
      });
      
      toPng(chartRef.current, { quality: 0.95 })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `aigen_${chartName.toLowerCase().replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          toast.error("Failed to download chart", {
            description: "Please try again later"
          });
          console.error("Error downloading chart:", error);
        });
    }
  };
  
  return (
    <PageLayout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">AI Insights & Trends</h1>
            <p className="text-muted-foreground">
              Visualize and analyze the latest AI trends and statistics
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[180px] flex gap-2 justify-between">
                  <Calendar className="h-4 w-4" />
                  {selectedDate ? selectedDate.toLocaleDateString() : "Pick date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <Button 
              className="bg-gradient-ai flex gap-2"
              onClick={handleDownloadReport}
            >
              <Download className="h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="categories" className="mt-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="sources">Sources</TabsTrigger>
              <TabsTrigger value="trends">Weekly Trends</TabsTrigger>
              <TabsTrigger value="tags">Popular Tags</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="categories">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>AI Categories Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of AI updates by category
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleDownloadChart(categoriesChartRef, "Categories")}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Chart
                </Button>
              </CardHeader>
              <CardContent className="px-2 pt-4">
                <div className="h-[400px]" ref={categoriesChartRef}>
                  <BarChart
                    data={categoryDistribution}
                    index="name"
                    categories={["count"]}
                    colors={["#833eff"]}
                    valueFormatter={(value) => `${value} repos`}
                    yAxisWidth={48}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sources">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>AI Source Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of AI updates by source platform
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleDownloadChart(sourcesChartRef, "Sources")}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Chart
                </Button>
              </CardHeader>
              <CardContent className="px-2 pt-4">
                <div className="h-[400px]" ref={sourcesChartRef}>
                  <PieChart
                    data={sourceDistribution}
                    index="name"
                    categories={["count"]}
                    colors={["#833eff", "#5310c0", "#9f75ff"]}
                    valueFormatter={(value) => `${value} repos`}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>Weekly AI Updates Trend</CardTitle>
                  <CardDescription>
                    Number of new AI updates per week
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleDownloadChart(trendsChartRef, "Trends")}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Chart
                </Button>
              </CardHeader>
              <CardContent className="px-2 pt-4">
                <div className="h-[400px]" ref={trendsChartRef}>
                  <LineChart
                    data={weeklyTrends}
                    index="week"
                    categories={["count"]}
                    colors={["#833eff"]}
                    valueFormatter={(value) => `${value} updates`}
                    yAxisWidth={48}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tags">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>Most Popular Tags</CardTitle>
                  <CardDescription>
                    Frequency of tags across all AI updates
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleDownloadChart(tagsChartRef, "Tags")}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Chart
                </Button>
              </CardHeader>
              <CardContent className="px-2 pt-4">
                <div className="h-[400px]" ref={tagsChartRef}>
                  <BarChart
                    data={popularTags}
                    index="name"
                    categories={["count"]}
                    colors={["#833eff"]}
                    valueFormatter={(value) => `${value} occurrences`}
                    yAxisWidth={48}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>AI Growth Insights</CardTitle>
              <CardDescription>Key metrics about AI industry growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total AI Models</p>
                  <p className="text-2xl font-bold">8,547</p>
                  <p className="text-xs text-muted-foreground">↑ 24% from last month</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Research Papers</p>
                  <p className="text-2xl font-bold">12,389</p>
                  <p className="text-xs text-muted-foreground">↑ 18% from last month</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Average Stars</p>
                  <p className="text-2xl font-bold">867</p>
                  <p className="text-xs text-muted-foreground">↑ 12% from last month</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Average Downloads</p>
                  <p className="text-2xl font-bold">23.5K</p>
                  <p className="text-xs text-muted-foreground">↑ 32% from last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AI Technology Adoption</CardTitle>
              <CardDescription>Tracking industry adoption of AI technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Large Language Models</p>
                    <p className="text-sm font-medium">92%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-aigen-500" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Computer Vision</p>
                    <p className="text-sm font-medium">78%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-aigen-500" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Multimodal Models</p>
                    <p className="text-sm font-medium">64%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-aigen-500" style={{ width: "64%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Reinforcement Learning</p>
                    <p className="text-sm font-medium">42%</p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-aigen-500" style={{ width: "42%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Insights;
