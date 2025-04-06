
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function SubscriptionSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to AIgen Digest!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px] space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Stay Ahead of AI Innovation</h2>
            <p className="text-muted-foreground md:text-lg">
              Subscribe to receive personalized AI updates directly in your inbox
            </p>
          </div>
          
          <div className="mx-auto max-w-[500px] space-y-4">
            <div className="grid gap-4 p-4 border rounded-lg bg-secondary/30">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-ai hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? "Subscribing..." : "Subscribe to Digest"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our terms of service and privacy policy.
                We'll never share your email with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
