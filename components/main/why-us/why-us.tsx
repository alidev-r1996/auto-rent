import Image from "next/image";
import coverWhy from "@/public/assets/images/cover-why.png";
import { whyCardItems } from "./why-us.constant";
import { WhyCard } from "./why-us.card";

const WhyUs = () => {
  return (
    <section className="max-w-[1690px] md:h-80  mx-auto flex flex-col md:flex-row items-center gap-8 relative p-10 ">
      <Image
        alt="cover-why"
        src={coverWhy}
        fill
        placeholder="blur"
        className="brightness-50 contrast-125 bg-contain"
      />
      <div className="flex flex-col gap-10 md:w-1/2 mx-auto z-10">
        <h2 className="font-bold text-2xl md:text-4xl text-center  text-amber-400">
          چــــــرا اُتو رِنت؟
        </h2>
        <p className="leading-7 text-center  text-slate-200 text-xs md:text-base">
          اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در مسافرت ها، قرار
          ملاقات‌ های مهم، مجالس و مراسم‌های خانوادگی ماشین مناسب خود را در اختیار داشته باشید. اگر
          شما اصلا خودرویی در اختیار ندارید یا خودروی شما مطمئن نیست، می‌توانید از سوییچ، خودروی
          مناسب خود را کرایه کرده و با آسودگی به سفر بروید.
        </p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row  gap-3 w-full z-10 md:w-2/3 ">
        {whyCardItems.map((i, index) => (
          <WhyCard key={index} {...i} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
