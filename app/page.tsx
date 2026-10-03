import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MetricsBar } from "@/components/metrics-bar";
import { ProblemSection } from "@/components/problem-section";
import { SolutionsSection } from "@/components/solutions-section";
import { BeforeAfterSection } from "@/components/before-after-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/testimonials-section";

// Carga diferida de componentes interactivos bajo el pliegue (reduce el bundle JS inicial)
const ProductDemo = dynamic(
  () => import("@/components/product-demo").then((mod) => mod.ProductDemo)
);

const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => mod.PricingSection)
);

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
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
