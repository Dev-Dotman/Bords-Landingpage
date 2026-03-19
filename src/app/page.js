import BordsAnimation from "@/components/BordsAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductDepthSection from "@/components/ProductDepthSection";
import CollaborationSection from "@/components/CollaborationSection";
import CanvasToolsSection from "@/components/CanvasToolsSection";
import LogicSection from "@/components/LogicSection";
import WorkspacesSection from "@/components/WorkspacesSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import ManifestoSection from "@/components/ManifestoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BordsAnimation />
      <Navbar />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <ProductDepthSection />
          <CollaborationSection />
          <CanvasToolsSection />
          <LogicSection />
          <WorkspacesSection />
          <FeaturesSection />
          <PricingSection />
          <ManifestoSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
