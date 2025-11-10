import { PersianDigits } from "@/lib/utils";
import Image from "next/image";
import { profileMenuItems } from "./sidebar.costant";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-2 min-w-full! max-w-full!">
      <div className="rounded-lg h-20 p-4 w-full flex items-center bg-white gap-2 text-sm border border-slate-200 shadow-xs">
        <Image src="/assets/images/avatar.png" alt="avatar" width={60} height={60} />
        <div className="flex flex-col gap-1">
          <p className="font-bold">علی رحیمی</p>
          <p className="text-slate-500">{PersianDigits(`${"09358865344"}`)}</p>
        </div>
      </div>
      <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 w-full flex flex-col text-slate-700">
        {profileMenuItems.map(({ icon, title, englishTitle }, index) => {
          const Icon = icon;
          return (
            <div
              key={index}
              className="flex gap-2 p-4 cursor-pointer text-sm md:text-base transition-colors duration-300 last:hover:bg-rose-100 hover:bg-slate-100 rounded-xl first:bg-blue-500 first:text-white"
            >
              <Icon className="size-6" />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
