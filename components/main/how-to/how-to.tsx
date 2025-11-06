import Image from "next/image";
import { timeLineItems } from "./how-to.constant";
import HowToCards from "./how-to.card";
import TimeLineImg from "@/public/assets/images/timeline.png";

const HowTo = () => {
  return (
    <section className="max-w-[1690px] mx-auto mt-20">
      <h2 className="font-bold md:text-4xl mb-4 text-2xl text-center flex flex-wrap items-center gap-4 justify-center">
        چگونه در وسایت <p className="text-amber-400">اُتـــورِنت، </p> خودرو رزرو کنیم؟
      </h2>
      <div className="flex flex-col gap-4 relative p-4 h-150">
        <div className="absolute top-7 md:top-0 left-0  md:left-1/2 md:-translate-x-1/2 h-130  md:w-1/6 w-[35%] mr-auto md:mx-auto mt-8">
          <Image src={TimeLineImg} alt="timeline picture" fill placeholder="blur" />
        </div>
        <div className="flex flex-col gap-20 mt-15 w-2/3 md:w-4/5 md:mx-auto relative">
          {timeLineItems.map((i, index) => (
            <HowToCards key={index} {...i} />
          ))}
          <p className="absolute w-1 h-full border-r border-dashed border-blue-300 md:hidden right-6"></p>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
