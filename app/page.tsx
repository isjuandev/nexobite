import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MetricsBar } from "@/components/metrics-bar";
import { ProblemSection } from "@/components/problem-section";
import { SolutionsSection } from "@/components/solutions-section";
import { ProductDemo } from "@/components/product-demo";
import { BeforeAfterSection } from "@/components/before-after-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />
      <HeroSection />
      <MetricsBar />
      <ProblemSection />
      <SolutionsSection />
      <ProductDemo />
      <BeforeAfterSection />
      <ProcessSection />
      <ServicesSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
