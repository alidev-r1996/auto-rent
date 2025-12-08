
import { ChevronLeft } from "lucide-react";
// import { Button } from "../ui/button";
import Link from "next/link";
import CarList from "./carlist";

const Reserve = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cars/main`, { cache: "no-store" });
  const { cars } = await res.json();
  return (
    <section className="max-w-[1690px] flex flex-col md:gap-8 mx-auto md:p-8 gap-2 p-2 md:my-8">
      <h2 className="font-bold md:text-4xl md:mb-4 text-2xl text-center flex items-center gap-4 justify-center">
        رزرو خودرو در <p className="text-amber-400"> اُتـــورِنت</p>
      </h2>
      <div className="flex items-center justify-end mt-5 md:p-2">
        {/* <div className="flex items-center gap-1">
          <Button variant={"outline_blue"}>پرطرفدار</Button>
          <Button variant={"outline_blue"}>لوکس</Button>
          <Button variant={"outline_blue"}>اقتصادی</Button>
        </div> */}
        <Link href="/cars">
          <div className="mr-auto flex items-center gap-2 text-sm md:text-base text-indigo-600 justify-end group">
            <p> مشاهده همه</p>
            <ChevronLeft className="size-5 group-hover:-translate-x-1" />
          </div>
        </Link>
      </div>
      <CarList cars={cars}/>
    </section>
  );
};

export default Reserve;
