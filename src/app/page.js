import BordsAnimation from "@/components/BordsAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductDepthSection from "@/components/ProductDepthSection";
import LogicSection from "@/components/LogicSection";
import FeaturesSection from "@/components/FeaturesSection";
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
          <LogicSection />
          <FeaturesSection />
          <ManifestoSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
