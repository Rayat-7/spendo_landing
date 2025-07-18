import { FeaturesList } from "@/components/features";
import SpeondoFinishSection from "@/components/footer";
import {  Hero } from "@/components/hero";
import  { Header } from "@/components/navbar";
import { VioletPricing } from "@/components/price";
import { SideFeatures } from "@/components/sidefeature";

import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen  p-2">
      <Header/>
      <Hero/>
      
      <FeaturesList heading={{
        subtitle: " Discover the Power of Spendo",
        tag: " Features",
        title: " Transform Your Financial Management",
      }} features={[]}/>
      <SideFeatures/>
      <VioletPricing/>
      <SpeondoFinishSection/>
    </div>
  );
}
