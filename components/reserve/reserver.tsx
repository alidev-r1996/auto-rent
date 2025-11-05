import { ChevronLeft, Link } from "lucide-react";
import { Button } from "../ui/button";
import CarList from "./carlist";

const Reserve = () => {
  return (
    <section className="max-w-[1690px] flex flex-col md:gap-8 mx-auto md:p-8 gap-2 p-2 my-8">
      <h2 className="font-bold md:text-4xl md:mb-4 text-2xl text-center flex items-center gap-4 justify-center">
        رزرو خودرو در <p className="text-amber-400"> اُتـــورِنت</p>
      </h2>
      <div className="flex items-center justify-between mt-5 p-3">
        <div className="flex items-center gap-1">
          <Button variant={"outline_blue"}>پرطرفدار</Button>
          <Button variant={"outline_blue"}>لوکس</Button>
          <Button variant={"outline_blue"}>اقتصادی</Button>
        </div>
        <Link
          href={"/reserves"}
          className="flex items-center gap-2 text-sm md:text-base text-indigo-600"
        >
          مشاهده همه
          <ChevronLeft />
        </Link>
      </div>
      <CarList />
    </section>
  );
};

export default Reserve;
