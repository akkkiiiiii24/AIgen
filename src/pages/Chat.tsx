
import { PageLayout } from "@/components/Layout/PageLayout";

const Chat = () => {
  return (
    <PageLayout>
      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">AI Research Assistant</h1>
            <p className="text-muted-foreground">
              Chat with our AI assistant to get answers about AI research, tools, and trends
            </p>
          </div>
          
          <div className="border rounded-lg h-[700px] overflow-hidden">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/trUKho81CWVamoQtWJLUO"
              width="100%"
              height="100%"
              frameBorder="0"
              title="AI Research Assistant Chatbot"
            ></iframe>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>
              This AI assistant is trained on AI research, tools, and trends. It can help you:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Find specific AI research papers and models</li>
              <li>Explain complex AI concepts</li>
              <li>Compare different AI approaches</li>
              <li>Recommend tools for your specific use case</li>
              <li>Stay updated on the latest AI trends</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Chat;
