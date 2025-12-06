import Image from "next/image";
import { CardCategoryProps } from "./category.type";
import { FC } from "react";
import Link from "next/link";

export const CardCategory: FC<CardCategoryProps> = ({ alt, img, variant, text, href }) => {
  const bgStyle = {
    orange: "shadow-orange-500 bg-radial from-orange-300 from-20% to-orange-700",
    gray: "shadow-slate-500 bg-radial from-slate-300 from-20% to-slate-700",
    white: "shadow-slate-100 bg-radial from-slate-50 from-20% to-slate-400",
    blue: "shadow-blue-500 bg-radial from-blue-300 from-20% to-blue-700",
    black: "shadow-stone-500 bg-radial from-stone-500 from-20% to-stone-900",
  };
  return (
    <Link href={href}
      className={`rounded-full ${bgStyle[variant]} mx-auto p-2 relative size-40 md:size-70 px-4 flex items-center justify-center group cursor-pointer`}
    >
      <div className="relative rounded-full flex-1 p-2 group-hover:p-1 transtion-all duration-300 aspect-video">
        <Image
          src={img}
          fill
          alt={alt}
          className="group-hover:scale-115 transtion-all duration-300"
        />
      </div>
      <div className="top-1/2 group-hover:scale-100 scale-0 left-1/2 size-full rounded-full absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-linear-to-t from-slate-800 from-20% to-transparent text-slate-200">
        <p className="font-semibold text-2xl md:text-3xl">{text}</p>
      </div>
    </Link>
  );
};
