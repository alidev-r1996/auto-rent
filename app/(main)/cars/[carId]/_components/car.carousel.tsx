"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import CarPrice from "./car.price";
import { CarCarouselProps } from "./car.type";
import { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CarCarousel: FC<CarCarouselProps> = ({ day_price, images, month_price, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  return (
    <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
      <h2 className="font-bold text-slate-700 text-lg">{name}</h2>

      <div className="border-b border-b-slate-300 -mt-2 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></div>

      {/* MAIN CAROUSEL */}
      <Carousel
        className="w-full mx-auto"
        dir="ltr"
        opts={{
          startIndex: currentIndex,
        }}
        setApi={(api: any) => {
          setCarouselApi(api);
          api.on("select", () => setCurrentIndex(api.selectedScrollSnap()));
        }}
      >
        <CarouselContent>
          {images.map(i => (
            <CarouselItem key={i} className="relative w-full aspect-16/10 md:aspect-9/3">
              <Image src={i} alt="car picture" fill className="object-contain rounded-lg" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* MOBILE BUTTONS - CUSTOM */}
      <div className="flex justify-between md:justify-around gap-8 mt-3">
        <Button
          variant={"outline"}
          onClick={() => carouselApi && carouselApi.scrollPrev()}
          className="px-4 py-2 rounded-lg bg-gray-200"
        >
          <ChevronRight />
        </Button>
        <Button
          variant={"outline"}
          onClick={() => carouselApi && carouselApi.scrollNext()}
          className="px-4 py-2 rounded-lg bg-gray-200"
        >
          <ChevronLeft />
        </Button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-0.5 md:gap-2 mt-3 overflow-x-auto p-2 mx-auto max-w-full">
        {images.map((i, idx) => (
          <button
            key={i}
            onClick={() => carouselApi && carouselApi.scrollTo(idx)}
            className={`relative md:size-24 size-20 rounded-md overflow-hidden 
              border-2 ${currentIndex === idx ? "border-amber-500" : "border-transparent"}`}
          >
            <Image src={i} alt="thumbnail" fill />
          </button>
        ))}
      </div>

      <CarPrice day_price={day_price} month_price={month_price} />
    </div>
  );
};

export default CarCarousel;
