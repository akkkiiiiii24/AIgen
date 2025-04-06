
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Bell, Menu, Search, User, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Logo } from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { mockNotifications } from "@/data/notifications";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

interface NavItem {
  title: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Explore", href: "/explore" },
  { title: "Insights", href: "/insights" },
  { title: "Research", href: "/research" },
  { title: "Summarizer", href: "/summarizer" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
  { title: "Chat", href: "/chat" }
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const isMobile = useIsMobile();
  const unreadCount = notifications.filter(n => !n.read).length;
  
  // Mock login status - in a real app this would come from auth context
  const isLoggedIn = true;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    toast.success("Marked all notifications as read");
  };
  
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          
          {!isMobile && (
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    item.isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSearchOpen(true)}
            className="relative"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setNotificationsOpen(true)} 
            className="relative"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-aigen-500 rounded-full"></span>
            )}
          </Button>
          
          <ThemeToggle />
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link to="/profile" className="flex w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="flex w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center" onClick={() => toast.info("Logged out successfully")}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="default" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          )}
          
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMobile && isOpen && (
        <div className="container py-4 border-t">
          <nav className="grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent",
                  item.isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
      
      {/* Notifications Dialog */}
      <Dialog open={notificationsOpen} onOpenChange={setNotificationsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Notifications</span>
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>Mark all as read</Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="max-h-[60vh] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="py-6 text-center text-muted-foreground">
                No notifications yet
              </div>
            ) : (
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={cn(
                      "p-3 rounded-lg border",
                      !notification.read ? "bg-accent/30" : ""
                    )}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground">{notification.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search AI Updates</DialogTitle>
          </DialogHeader>
          
          <div className="flex items-center border rounded-md px-3 py-2">
            <Search className="h-4 w-4 mr-2 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search for AI tools, papers, models..."
              className="flex-1 bg-transparent border-none outline-none"
            />
          </div>
          
          <div className="pt-2">
            <h3 className="text-sm font-medium mb-2">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {["LLM", "Gemini", "Vision Models", "NLP", "Multimodal"].map((term) => (
                <Button 
                  key={term} 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    toast.info(`Searching for ${term}`);
                    setSearchOpen(false);
                  }}
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
