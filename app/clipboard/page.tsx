import React from "react";
import HeroSection from "@/components/clipboard/HeroSection";
import SnippetsSection from "@/components/clipboard/SnippetsSection";
import FeaturesSection from "@/components/clipboard/FeaturesSection";
import SuperChargeSection from "@/components/clipboard/SuperChargeSection";
import ReferencesSection from "@/components/clipboard/ReferencesSection";
import BottomCTAButton from "@/components/clipboard/BottomCTAButton";
import Footer from "@/components/clipboard/Footer";

export default function ClipBoardPage() {
  return (
    <div className="clipboard-page font-BaiJam">
      <HeroSection />
      <SnippetsSection />
      <FeaturesSection />
      <SuperChargeSection />
      <ReferencesSection />
      <BottomCTAButton />
      <Footer />
    </div>
  );
}
