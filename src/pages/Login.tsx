
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Github, Mail, Send, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (provider: string) => {
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Logged in with ${provider}`);
      navigate("/profile");
    }, 1500);
  };
  
  const handleEmailLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      setIsLoading(false);
      return;
    }
    
    // Simulate email login
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Logged in successfully");
      navigate("/profile");
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="flex min-h-[calc(100vh-180px)] flex-col items-center justify-center py-12 bg-gradient-to-b from-background to-secondary/20">
        <div className="mx-auto w-full max-w-md space-y-6 px-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign In to <span className="ai-gradient-text">AIgen</span></h1>
            <p className="text-muted-foreground">
              Access personalized AI updates and tools
            </p>
          </div>
          
          {isEmailLogin ? (
            <div className="space-y-4">
              <form onSubmit={handleEmailLoginSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link 
                      to="/forgot-password" 
                      className="text-xs text-primary font-medium hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-ai hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Sign in with Email
                    </>
                  )}
                </Button>
              </form>
              
              <div className="text-center">
                <Button 
                  variant="link" 
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsEmailLogin(false)}
                >
                  Or use another sign in method
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => handleLogin("GitHub")}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Github className="mr-2 h-4 w-4" />
                )}
                Continue with GitHub
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => handleLogin("Google")}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <svg 
                    className="mr-2 h-4 w-4" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 48 48"
                  >
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                )}
                Continue with Google
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <Button 
                variant="default" 
                className="w-full bg-gradient-ai hover:opacity-90 transition-opacity"
                onClick={() => setIsEmailLogin(true)}
                disabled={isLoading}
              >
                <Mail className="mr-2 h-4 w-4" />
                Sign in with Email
              </Button>
            </div>
          )}
          
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link 
              to="/signup" 
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
