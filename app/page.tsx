import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { MiniPlansSection } from "@/components/mini-plans-section";
import { PackagesSection } from "@/components/packages-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <MiniPlansSection />
      <PackagesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
