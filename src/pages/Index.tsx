
import { PageLayout } from "@/components/Layout/PageLayout";
import { HeroSection } from "@/components/Homepage/HeroSection";
import { AIUpdatesSection } from "@/components/Homepage/AIUpdatesSection";
import { FeatureSection } from "@/components/Homepage/FeatureSection";
import { SubscriptionSection } from "@/components/Homepage/SubscriptionSection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AIUpdatesSection />
      <FeatureSection />
      <SubscriptionSection />
    </PageLayout>
  );
};

export default Index;
