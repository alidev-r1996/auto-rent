"use client";

import Image from "next/image";
import {
  SiBmw,
  SiHonda,
  SiHyundai,
  SiJeep,
  SiKia,
  SiMercedes,
  SiNissan,
  SiToyota,
  SiLandrover,
  SiPorsche,
} from "react-icons/si";

const logos = [
  SiMercedes,
  SiHyundai,
  SiJeep,
  SiNissan,
  SiToyota,
  SiBmw,
  SiKia,
  SiHonda,
  SiLandrover,
  SiPorsche,
];

export default function LogoSlider() {
  return (
    <div className="max-w-[1920px] w-screen overflow-x-auto  flex items-center gap-10 p-4 scroll-none mt-5 mb-8">
      <div className="w-max lg:min-w-full flex items-center gap-10 animate-infinite-slider">
        {logos.map((i, index) => {
          const Logo = i;
          return (
            <p key={index} className="p-3 flex-1">
              <Logo className="md:size-25 lg:size-full size-15 text-slate-300" />
            </p>
          );
        })}
      </div>
      <div className="w-max lg:min-w-full flex items-center gap-10 animate-infinite-slider">
        {logos.map((i, index) => {
          const Logo = i;
          return (
            <p key={index} className="p-3 flex-1">
              <Logo className="md:size-25 lg:size-full size-15 text-slate-300" />
            </p>
          );
        })}
      </div>
    </div>
  );
}
