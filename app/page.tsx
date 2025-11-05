import HeroSection from "@/components/main/hero-section";
import LogoSlider from "@/components/main/logo-slider";
import Image, { StaticImageData } from "next/image";
import WhyUs from "@/components/main/why-us/why-us";
import { FC } from "react";
import CarCategory from "@/components/main/category/category.car";



export default function Home() {
  return (
    <main className="h-[150vh]">
      <HeroSection />
      <LogoSlider />
      <WhyUs />
      <CarCategory />
    </main>
  );
}


