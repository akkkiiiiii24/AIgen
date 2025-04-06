
import { useState } from "react";
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  
  const handleSubscribe = (plan: string) => {
    if (plan === "free") {
      toast.success("You're already on the Free plan");
      return;
    }
    
    window.location.href = "https://book.stripe.com/test_14k5m05Mogl59Dq6oo";
  };
  
  const getStarted = () => {
    toast.success("Welcome to AIgen Free plan!");
  };
  
  const pricingFeatures = {
    basic: [
      "Daily AI updates feed",
      "Basic search and filtering",
      "Weekly email digest (5 items)",
      "Access to public AI models"
    ],
    pro: [
      "Everything in Free plan",
      "Advanced search and filtering",
      "Daily email digest (15 items)",
      "AI paper summarization (5/month)",
      "Trending analytics dashboard",
      "Priority support"
    ],
    proPlus: [
      "Everything in Pro plan",
      "Unlimited AI paper summarization",
      "Custom AI digest creation",
      "Advanced analytics with exports",
      "API access for developers",
      "Custom filters and alerts",
      "Dedicated support"
    ]
  };
  
  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground mb-8">
            Choose the plan that best fits your needs. All plans include access to our core platform.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="bg-secondary rounded-full p-1 flex">
              <Button 
                variant={billingPeriod === "monthly" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingPeriod("monthly")}
                className={billingPeriod === "monthly" ? "bg-gradient-ai" : ""}
              >
                Monthly Billing
              </Button>
              <Button 
                variant={billingPeriod === "annual" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingPeriod("annual")}
                className={billingPeriod === "annual" ? "bg-gradient-ai" : ""}
              >
                Annual Billing
                <span className="ml-1 text-xs bg-primary/20 text-aigen-500 px-2 py-0.5 rounded-full">
                  20% off
                </span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2 border-border">
            <CardHeader>
              <CardTitle className="text-xl">Free</CardTitle>
              <CardDescription>
                For casual AI enthusiasts
              </CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">₹0</span>
                <span className="text-muted-foreground ml-1">/ forever</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {pricingFeatures.basic.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={getStarted}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="border-2 border-aigen-500 shadow-lg relative">
            <div className="absolute top-0 right-0 left-0 bg-aigen-500 text-white font-medium text-xs py-1 text-center rounded-t-md">
              MOST POPULAR
            </div>
            <CardHeader className="pt-10">
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>
                For AI researchers and developers
              </CardDescription>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">₹149</span>
                <span className="text-muted-foreground ml-1">/ {billingPeriod}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {pricingFeatures.pro.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-gradient-ai"
                onClick={() => handleSubscribe("pro")}
              >
                Subscribe to Pro
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro+ Plan */}
          <Card className="border-2 border-border">
            <CardHeader>
              <CardTitle className="text-xl">Pro+</CardTitle>
              <CardDescription>
                For organizations and power users
              </CardDescription>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">₹399</span>
                <span className="text-muted-foreground ml-1">/ {billingPeriod}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {pricingFeatures.proPlus.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => handleSubscribe("proPlus")}
              >
                Subscribe to Pro+
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 text-left">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade or downgrade?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the end of your current billing cycle.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and Google Pay. All payments are securely processed by Stripe.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a refund policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer team plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, for teams of 5 or more, we offer special team pricing. Please contact our sales team for more information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PricingPage;
