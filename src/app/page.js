"use client";

import { useState } from "react";
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
import WaitlistModal from "@/components/WaitlistModal";
import DemoRequestModal from "@/components/DemoRequestModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistSource, setWaitlistSource] = useState("landing-page");
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoSource, setDemoSource] = useState("landing-page");

  const openWaitlist = (source = "landing-page") => {
    setWaitlistSource(source);
    setIsWaitlistOpen(true);
  };

  const openDemo = (source = "landing-page") => {
    setDemoSource(source);
    setIsDemoOpen(true);
  };

  return (
    <>
      <BordsAnimation />
      <Navbar onWaitlistClick={() => openWaitlist("navbar")} />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <ProductDepthSection />
          <CollaborationSection />
          <CanvasToolsSection />
          <LogicSection />
          <WorkspacesSection />
          <FeaturesSection />
          <PricingSection onWaitlistClick={(source) => openWaitlist(source || "pricing")} onDemoClick={(source) => openDemo(source || "pricing-dedicated")} />
          <ManifestoSection />
          <CTASection onWaitlistClick={() => openWaitlist("cta")} onDemoClick={() => openDemo("cta")} />
          <Footer />
        </div>
      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        source={waitlistSource}
        onClose={() => setIsWaitlistOpen(false)}
      />
      <DemoRequestModal
        isOpen={isDemoOpen}
        source={demoSource}
        onClose={() => setIsDemoOpen(false)}
      />
    </>
  );
}
