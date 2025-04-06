
import { PageLayout } from "@/components/Layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoryDistribution, sourceDistribution, weeklyTrends, popularTags } from "@/data/mockData";
import { BarChart, PieChart, LineChart } from "@/components/ui/chart";

const Insights = () => {
  return (
    <PageLayout>
      <div className="container py-8 md:py-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">AI Insights & Trends</h1>
          <p className="text-muted-foreground">
            Visualize and analyze the latest AI trends and statistics
          </p>
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
              <CardHeader>
                <CardTitle>AI Categories Distribution</CardTitle>
                <CardDescription>
                  Breakdown of AI updates by category
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[400px]">
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
              <CardHeader>
                <CardTitle>AI Source Distribution</CardTitle>
                <CardDescription>
                  Breakdown of AI updates by source platform
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[400px]">
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
              <CardHeader>
                <CardTitle>Weekly AI Updates Trend</CardTitle>
                <CardDescription>
                  Number of new AI updates per week
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[400px]">
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
              <CardHeader>
                <CardTitle>Most Popular Tags</CardTitle>
                <CardDescription>
                  Frequency of tags across all AI updates
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[400px]">
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
