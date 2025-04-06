
import { Code, FileSearch, Mail, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <FileSearch className="h-10 w-10 text-aigen-500" />,
    title: "AI Discovery",
    description: "Track the latest AI tools, research papers, and models from GitHub, Hugging Face, and ArXiv.",
  },
  {
    icon: <Code className="h-10 w-10 text-aigen-500" />,
    title: "Smart Summarization",
    description: "Get concise summaries and key insights of complex AI research and tools, saving you hours of reading.",
  },
  {
    icon: <Mail className="h-10 w-10 text-aigen-500" />,
    title: "Email Digest",
    description: "Receive personalized daily or weekly AI updates directly in your inbox.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-aigen-500" />,
    title: "AI Chatbot",
    description: "Ask questions about AI research and get instant answers from our specialized AI chatbot.",
  },
];

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Powerful AI Discovery Features</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Everything you need to stay on top of the rapidly evolving AI landscape
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start space-y-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border bg-background">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
