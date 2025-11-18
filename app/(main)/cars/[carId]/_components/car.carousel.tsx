import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import CarPrice from "./car.price";
import { CarCarouselProps } from "./car.type";
import { FC } from "react";

const CarCarousel: FC<CarCarouselProps> = ({ day_price, images, month_price, name }) => {
  return (
    <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
      <h2 className="font-bold text-slate-700 text-lg "> {name} </h2>
      <p className="border-b border-b-slate-300 -mt-2 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
      <Carousel className="md:w-4/5 w-3/4 md:p-8 p-4 mx-auto" dir="ltr">
        <CarouselContent>
          {images.map(i => (
            <CarouselItem
              key={i}
              className="flex items-center justify-center relative  md:min-w-full md:p-4 h-50 md:h-80 rounded-lg "
            >
              <Image src={`/assets/images/cars/${i}`} alt="car picture" fill />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <CarPrice day_price={day_price} month_price={month_price} />
    </div>
  );
};

export default CarCarousel;
