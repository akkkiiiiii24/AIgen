
import { PageLayout } from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Twitter, Mail, Send } from "lucide-react";
import { useState } from "react";

const AboutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };
  
  return (
    <PageLayout>
      <div className="container py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About <span className="ai-gradient-text">AIgen</span></h1>
          <p className="text-muted-foreground text-lg mb-6">
            Discover, summarize, and track the latest in AI innovation, all in one place.
          </p>
        </div>
        
        {/* Mission Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  At AIgen, our mission is to democratize access to cutting-edge AI research and tools, making them discoverable and understandable for everyone from beginners to experts.
                </p>
                <p>
                  We believe that keeping up with the rapidly evolving field of artificial intelligence shouldn't be a full-time job. That's why we've built an aggregation and summarization platform that brings together the latest AI models, research papers, and tools from top sources like GitHub, Hugging Face, and ArXiv — all in one place.
                </p>
                <p>
                  By providing concise summaries, categorization, and personalized digests, we help researchers, developers, students, and AI enthusiasts stay informed without information overload.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* How It Works Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">How AIgen Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold text-center mb-2">Data Collection</h3>
                <p className="text-center text-sm text-muted-foreground">
                  We continuously scan repositories, model hubs, and research sites for the newest AI developments.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold text-center mb-2">Smart Summarization</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Our AI generates concise summaries and extracts key information, making complex topics accessible.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold text-center mb-2">Personalized Delivery</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Users receive custom digests via email and can explore content based on their interests.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Meet the Team</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/lovable-uploads/05d8aa3e-f8c6-4143-ba86-aa40ce7e8eb5.png" 
                    alt="Akshat Singh" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">Akshat Singh</h3>
                    <p className="text-white/80 text-sm">Co-Founder & CTO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/lovable-uploads/4ee008cc-cb7d-4ee2-83e1-553b1169f60c.png" 
                    alt="Sejal Mishra" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">Sejal Mishra</h3>
                    <p className="text-white/80 text-sm">Co-Founder & CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What makes AIgen different from just browsing research sites?</h3>
                <p className="text-muted-foreground text-sm">
                  AIgen aggregates content from multiple sources, provides AI-generated summaries, and delivers personalized digests, saving you hours of reading and searching across different platforms.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">How often is content updated?</h3>
                <p className="text-muted-foreground text-sm">
                  We scan our sources multiple times daily, ensuring you get the most recent updates from the AI community as they happen.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Is AIgen suitable for non-technical users?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! While we serve technical AI researchers, our summaries are designed to make complex topics accessible to anyone interested in AI advancements.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What's included in the free plan?</h3>
                <p className="text-muted-foreground text-sm">
                  Free users get access to our daily feed of AI updates, basic search functionality, and a weekly digest of the top 5 most important updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4">Contact Us</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-ai">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Connect With Us</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <h4 className="text-sm font-medium">Email</h4>
                      <a href="mailto:hello@aigen.tech" className="text-sm text-primary">
                        hello@aigen.tech
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 flex items-center">
                    <Github className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <h4 className="text-sm font-medium">GitHub</h4>
                      <a href="https://github.com/aigen" target="_blank" rel="noopener noreferrer" className="text-sm text-primary">
                        github.com/aigen
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 flex items-center">
                    <Twitter className="h-5 w-5 mr-3 text-muted-foreground" />
                    <div>
                      <h4 className="text-sm font-medium">Twitter</h4>
                      <a href="https://twitter.com/aigen_tech" target="_blank" rel="noopener noreferrer" className="text-sm text-primary">
                        @aigen_tech
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
