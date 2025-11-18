import { CarType } from "./car.type";
import { carFuelConveter, carGearConveter, carSteeringConveter } from "@/lib/utils";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { notFound } from "next/navigation";

export async function getCarInfo(carId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cars/${carId}`, {
    next: { revalidate: 36000 },
  });
  const data = await res.json();

  if (data.code == 404) return notFound();

  const car: CarType = data.car;

  const featureItems = [
    { id: 1, title: "مسافت پیموده", text: `${car.mile_age}کیلومتر `, icon: AiOutlineDashboard },
    { id: 2, title: "نوع دنده", text: `${carGearConveter(car.gear)}`, icon: GiGearStickPattern },
    { id: 3, title: "سوخت", text: `${carFuelConveter(car.fuel)}`, icon: BsFillFuelPumpFill },
    { id: 4, title: "ظرفیت", text: `${car.capacity}`, icon: MdOutlineAirlineSeatReclineExtra },
    {
      id: 5,
      title: "فرمان",
      text: `${carSteeringConveter(car.steering)}`,
      icon: TbSteeringWheelFilled,
    },
    { id: 6, title: "مدل", text: `${car.model}`, icon: SiTicktick },
  ];

  return { car, featureItems };
}
