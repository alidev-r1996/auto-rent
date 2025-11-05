import { FC } from "react";
import { howToProps } from "./how-to.type";

const HowToCards: FC<howToProps> = ({ id, text, title, titleColor, icon }) => {
  const Icon = icon;
  return (
    <div key={id} className={`md:even:mr-auto flex items-center gap-2`}>
      <p className="md:p-3 p-2 min-w-13 md:min-w-14 min-h-13 md:min-h-14 relative z-10 rounded-lg bg-blue-500 text-white shadow-blue-500">
        <Icon className="size-full" />
      </p>
      <div className="flex flex-col md:gap-1 gap-0.5 relative">
        <h2 className="font-bold flex items-center gap-1">
          <strong className="text-amber-400 md:text-base text-sm">{titleColor}</strong>
          {title}
        </h2>
        <p className="md:text-sm text-[10px] text-slate-500 w-[95%]">{text}</p>
      </div>
    </div>
  );
};

export default HowToCards;
