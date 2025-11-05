import { FC } from "react";
import { WhyCardProps } from "./why-us.type";



export const WhyCard: FC<WhyCardProps> = ({ icon, text, title }) => {
  const Icon = icon;
  return (
    <div className="flex flex-col justify-center items-center gap-4 rounded-lg shadow border drop-shadow-lg border-slate-600 p-2 bg-slate-600/20 backdrop-blur-xs mx-auto">
      <p className="p-2 md:size-18 size-14 rounded-lg border border-indigo-400 bg-blue-500">
        <Icon className="size-full text-white stroke-1" />
      </p>
      <h3 className="font-bold text-indigo-400 text-center">{title} </h3>
      <p className="text-center text-slate-200 text-xs">{text}</p>
    </div>
  );
};