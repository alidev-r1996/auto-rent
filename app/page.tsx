import HeroSection from "@/components/main/hero-section";
import LogoSlider from "@/components/main/logo-slider";
import Image, { StaticImageData } from "next/image";
import WhyUs from "@/components/main/why-us/why-us";
import CarCategory from "@/components/main/category/category.car";
import { Button } from "@/components/ui/button";
import Reserve from "@/components/reserve/reserver";
import HowTo from "@/components/main/how-to/how-to";
import Faq from "@/components/faq/faq";

export default function Home() {
  return (
    <main className="h-[150vh]">
      <HeroSection />
      <LogoSlider />
      <WhyUs />
      <CarCategory />
      <Reserve />
      <HowTo />
      <Faq />
      <section className="max-w-[1690px] mx-auto mt-12">
        <h2 className="font-bold md:text-4xl mb-4 text-2xl text-center flex items-center gap-4 justify-center">
          نظرات <p className="text-amber-400">مشتریان</p>
        </h2>
        <p className=" text-slate-400 text-center">آنچه مشتریان ما درموردمان گفته‌اند.</p>
      </section>
    </main>
  );
}
