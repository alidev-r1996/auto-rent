import Image from "next/image";
import { Button } from "../ui/button";
import { CarFront, Headset } from "lucide-react";
import HeroCar from "@/public/assets/images/car-hero.png";
import HeroRoad from "@/public/assets/images/hero-road.png";

const HeroSection = () => {
  return (
    <header className="max-w-[1690px] h-[90vh] ">
      <div className="absolute  top-0 mx-auto max-w-screen w-[1905px] h-[95vh] -z-5">
        <Image
          src={HeroRoad}
          alt="Hero Section"
          fill
          placeholder="blur"
          priority
          className="object-cover brightness-55 contrast-115"
        />
      </div>
      <div className="p-4 flex flex-col md:flex-row items-center justify-center gap-4 md:h-full w-full md:-translate-y-10">
        <div className="flex flex-col space-y-12 justify-center items-center md:w-1/2 translate-y-10 md:translate-y-0">
          <div className="flex flex-col  gap-4">
            <h1 className="font-bold text-amber-400 text-4xl md:text-6xl">اُتـــو رِنت؛ سریع، </h1>
            <p className="font-bold text-amber-400 text-4xl md:text-6xl">آسان و به صرفه</p>
          </div>
          <p className="text-slate-300 text-sm">
            سرویس دهنده رزرو خودرو در ایران با کمترین زمان ممکن!
          </p>
          <div className="flex items-center gap-3">
            <Button variant={"amber"} className="px-8 py-5 md:text-base !important">
              <CarFront className="size-6" />
              رزرو خودرو
            </Button>
            <Button
              variant={"outline"}
              className="px-8 py-5 md:text-base text-white hover:text-slate-800 !important"
            >
              <Headset className="size-5" />
              تماس با ما
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-120 relative -translate-y-10 md:translate-y-0">
          <Image
            src={HeroCar}
            alt="Hero Section"
            fill
            className="object-contain  brightness-90 contrast-115 bg-blend-multiply"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
