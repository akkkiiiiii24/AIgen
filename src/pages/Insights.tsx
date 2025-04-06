
import { useState, useRef, useEffect } from "react";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  categoryDistribution, 
  sourceDistribution, 
  weeklyTrends, 
  popularTags, 
  chartColors 
} from "@/data/mockData";
import { LineChart, PieChart } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Download, Calendar, FileDown, ArrowDownToLine } from "lucide-react";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const Insights = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month" | "year">("week");
  const [filteredData, setFilteredData] = useState(weeklyTrends);
  
  // Create refs for each chart container and the entire report
  const categoriesChartRef = useRef<HTMLDivElement>(null);
  const sourcesChartRef = useRef<HTMLDivElement>(null);
  const trendsChartRef = useRef<HTMLDivElement>(null);
  const tagsChartRef = useRef<HTMLDivElement>(null);
  const fullReportRef = useRef<HTMLDivElement>(null);

  // Apply time range filter to data
  useEffect(() => {
    // In a real app, this would fetch different data based on the time range
    // For demo purposes, we'll just simulate different data
    let filtered = [...weeklyTrends];
    if (timeRange === "day") {
      filtered = weeklyTrends.slice(6, 8); // Last two data points
    } else if (timeRange === "week") {
      filtered = weeklyTrends; // All data
    } else if (timeRange === "month") {
      // Add more data points for month view
      filtered = [
        ...weeklyTrends,
        { week: 'Week 9', count: 44 },
        { week: 'Week 10', count: 47 },
        { week: 'Week 11', count: 43 },
        { week: 'Week 12', count: 50 }
      ];
    } else if (timeRange === "year") {
      // Use month labels for year view
      filtered = [
        { week: 'Jan', count: 28 },
        { week: 'Feb', count: 32 },
        { week: 'Mar', count: 38 },
        { week: 'Apr', count: 42 },
        { week: 'May', count: 45 },
        { week: 'Jun', count: 50 },
        { week: 'Jul', count: 48 },
        { week: 'Aug', count: 52 },
        { week: 'Sep', count: 60 },
        { week: 'Oct', count: 58 },
        { week: 'Nov', count: 62 },
        { week: 'Dec', count: 68 }
      ];
    }
    
    setFilteredData(filtered);
  }, [timeRange]);

  // Handle time range change
  const handleTimeRangeChange = (range: "day" | "week" | "month" | "year") => {
    setTimeRange(range);
    toast.success(`Time range updated to ${range}`);
  };
  
  const handleDownloadReport = async () => {
    toast.success("Generating insights report", { 
      description: "Your report will be downloaded shortly" 
    });
    
    if (fullReportRef.current) {
      try {
        // Create a new PDF document
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [800, 1100]
        });
        
        // Get the charts as images
        const tabs = ["categories", "sources", "trends", "tags"];
        const chartRefs = [categoriesChartRef, sourcesChartRef, trendsChartRef, tagsChartRef];
        
        pdf.setFontSize(24);
        pdf.text("AIgen Insights Report", 40, 40);
        pdf.setFontSize(12);
        pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 40, 60);
        pdf.text(`Report period: Last ${timeRange}`, 40, 80);
        
        let yPosition = 120;
        
        // Add each chart to the PDF
        for (let i = 0; i < tabs.length; i++) {
          if (chartRefs[i].current) {
            const dataUrl = await toPng(chartRefs[i].current);
            pdf.text(tabs[i].charAt(0).toUpperCase() + tabs[i].slice(1), 40, yPosition);
            yPosition += 20;
            pdf.addImage(dataUrl, "PNG", 40, yPosition, 500, 250);
            yPosition += 280;
          }
        }
        
        // Save the PDF
        pdf.save(`aigen_insights_report_${new Date().toISOString().split('T')[0]}.pdf`);
        
        toast.success("Report downloaded successfully");
      } catch (error) {
        console.error("Error generating PDF:", error);
        toast.error("Failed to generate report", {
          description: "Please try again later"
        });
      }
    }
  };
  
  const handleDownloadChart = async (chartRef: React.RefObject<HTMLDivElement>, chartName: string) => {
    if (chartRef.current) {
      toast.success("Generating chart PDF", {
        description: "Your chart will be downloaded shortly"
      });
      
      try {
        const dataUrl = await toPng(chartRef.current, { quality: 0.95 });
        
        // Create PDF
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [600, 400]
        });
        
        pdf.setFontSize(18);
        pdf.text(`AIgen - ${chartName} Chart`, 40, 30);
        pdf.setFontSize(10);
        pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 40, 45);
        pdf.text(`Time period: ${timeRange}`, 40, 55);
        
        pdf.addImage(dataUrl, "PNG", 40, 70, 520, 280);
        
        pdf.save(`aigen_${chartName.toLowerCase().replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
        
        toast.success("Chart PDF downloaded successfully");
      } catch (error) {
        console.error("Error downloading chart:", error);
        toast.error("Failed to download chart", {
          description: "Please try again later"
        });
      }
    }
  };
  
  return (
    <PageLayout>
      <div className="container py-8 md:py-12" ref={fullReportRef}>
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
            
            <div className="flex gap-2">
              <Button
                variant={timeRange === "day" ? "default" : "outline"}
                onClick={() => handleTimeRangeChange("day")}
                className="px-3"
              >
                Day
              </Button>
              <Button
                variant={timeRange === "week" ? "default" : "outline"}
                onClick={() => handleTimeRangeChange("week")}
                className="px-3"
              >
                Week
              </Button>
              <Button
                variant={timeRange === "month" ? "default" : "outline"}
                onClick={() => handleTimeRangeChange("month")}
                className="px-3"
              >
                Month
              </Button>
              <Button
                variant={timeRange === "year" ? "default" : "outline"}
                onClick={() => handleTimeRangeChange("year")}
                className="px-3"
              >
                Year
              </Button>
            </div>
            
            <Button 
              className="bg-gradient-ai flex gap-2"
              onClick={handleDownloadReport}
            >
              <FileDown className="h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="categories" className="mt-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="sources">Sources</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="tags">Popular Tags</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="categories">
            <Card className="bg-card shadow-lg border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>AI Categories Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of AI updates by category
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownloadChart(categoriesChartRef, "Categories")}
                  className="flex gap-2"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent className="px-2 pt-6 pb-6">
                <div 
                  className="h-[400px] bg-white dark:bg-black rounded-md p-4" 
                  ref={categoriesChartRef}
                >
                  <LineChart
                    data={categoryDistribution}
                    index="name"
                    categories={["count"]}
                    colors={['#9b87f5', '#5310c0']}
                    valueFormatter={(value) => `${value} repos`}
                    yAxisWidth={48}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sources">
            <Card className="bg-card shadow-lg border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>AI Source Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of AI updates by source platform
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownloadChart(sourcesChartRef, "Sources")}
                  className="flex gap-2"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent className="px-2 pt-6 pb-6">
                <div 
                  className="h-[400px] bg-white dark:bg-black rounded-md p-4" 
                  ref={sourcesChartRef}
                >
                  <PieChart
                    data={sourceDistribution}
                    index="name"
                    categories={["count"]}
                    colors={['#D6BCFA', '#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED']}
                    valueFormatter={(value) => `${value} repos`}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends">
            <Card className="bg-card shadow-lg border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>AI Updates Trend</CardTitle>
                  <CardDescription>
                    Number of new AI updates over time
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownloadChart(trendsChartRef, "Trends")}
                  className="flex gap-2"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent className="px-2 pt-6 pb-6">
                <div 
                  className="h-[400px] bg-white dark:bg-black rounded-md p-4" 
                  ref={trendsChartRef}
                >
                  <LineChart
                    data={filteredData}
                    index="week"
                    categories={["count"]}
                    colors={['#9b87f5', '#5310c0']}
                    valueFormatter={(value) => `${value} updates`}
                    yAxisWidth={48}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tags">
            <Card className="bg-card shadow-lg border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>Most Popular Tags</CardTitle>
                  <CardDescription>
                    Frequency of tags across all AI updates
                  </CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownloadChart(tagsChartRef, "Tags")}
                  className="flex gap-2"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent className="px-2 pt-6 pb-6">
                <div 
                  className="h-[400px] bg-white dark:bg-black rounded-md p-4" 
                  ref={tagsChartRef}
                >
                  <LineChart
                    data={popularTags}
                    index="name"
                    categories={["count"]}
                    colors={['#FCD34D', '#F59E0B']}
                    valueFormatter={(value) => `${value} occurrences`}
                    yAxisWidth={48}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="bg-card shadow-lg border-border/50">
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
          
          <Card className="bg-card shadow-lg border-border/50">
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
