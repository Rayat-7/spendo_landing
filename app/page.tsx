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
      
      <FeaturesList/>
      <SideFeatures/>
      <VioletPricing/>
      <SpeondoFinishSection/>
    </div>
  );
}
