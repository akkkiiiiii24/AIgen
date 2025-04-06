
import { useState } from "react";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { User, Mail, Bell, Download, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [email, setEmail] = useState("john.doe@example.com");
  const [name, setName] = useState("John Doe");
  const [digests, setDigests] = useState<"daily" | "weekly" | "monthly">("weekly");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully");
  };
  
  const handleSubscriptionManage = () => {
    toast.info("Redirecting to subscription management");
  };
  
  const exportData = () => {
    toast.success("Your data has been exported", {
      description: "Check your email for the download link"
    });
  };
  
  const handleLogout = () => {
    setIsLoggingOut(true);
    
    // Simulate logout process
    setTimeout(() => {
      toast.success("Successfully logged out");
      navigate("/login");
    }, 1000);
  };
  
  return (
    <PageLayout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subscription Plan</span>
                    <span className="font-medium text-aigen-500">Pro</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Member Since</span>
                    <span>April 2023</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleSubscriptionManage}
                >
                  Manage Subscription
                </Button>
                <Button 
                  variant="destructive" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? (
                    "Logging out..."
                  ) : (
                    <>
                      <LogOut className="h-4 w-4" />
                      Logout
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
            
            {/* Authentication Info Card */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-sm">Authentication Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Provider</span>
                    <span className="font-medium">GitHub</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Login</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions</span>
                    <span>1 active</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full text-xs"
                  onClick={() => toast.info("This would open account security settings")}
                >
                  Manage Security Settings
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="data">Data & Privacy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>
                      Update your account details and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveProfile} className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="flex items-center">
                          <User className="text-muted-foreground w-4 h-4 mr-2" />
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="flex items-center">
                          <Mail className="text-muted-foreground w-4 h-4 mr-2" />
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <Button type="submit">
                        Save Changes
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Email & Notification Preferences</CardTitle>
                    <CardDescription>
                      Configure how you receive updates and digests
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">AI Research Digest Frequency</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <Button 
                          variant={digests === "daily" ? "default" : "outline"}
                          onClick={() => setDigests("daily")}
                          className="w-full"
                        >
                          Daily
                        </Button>
                        <Button 
                          variant={digests === "weekly" ? "default" : "outline"}
                          onClick={() => setDigests("weekly")}
                          className="w-full"
                        >
                          Weekly
                        </Button>
                        <Button 
                          variant={digests === "monthly" ? "default" : "outline"}
                          onClick={() => setDigests("monthly")}
                          className="w-full"
                        >
                          Monthly
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Notification Settings</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Bell className="h-4 w-4 text-muted-foreground" />
                            <Label htmlFor="notifications" className="cursor-pointer">
                              Enable Notifications
                            </Label>
                          </div>
                          <Switch 
                            id="notifications" 
                            checked={notificationsEnabled}
                            onCheckedChange={setNotificationsEnabled}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button onClick={() => toast.success("Preferences saved")}>
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="data">
                <Card>
                  <CardHeader>
                    <CardTitle>Data & Privacy</CardTitle>
                    <CardDescription>
                      Manage your data and privacy settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Export Your Data</h3>
                      <p className="text-sm text-muted-foreground">
                        Download a copy of your AIgen data, including your profile information, 
                        saved items, and preferences.
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-2"
                        onClick={exportData}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Export Data
                      </Button>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t">
                      <h3 className="text-sm font-medium text-destructive">Danger Zone</h3>
                      <p className="text-sm text-muted-foreground">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button 
                        variant="destructive" 
                        className="mt-2"
                        onClick={() => toast.error("Account deletion requires confirmation via email")}
                      >
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
