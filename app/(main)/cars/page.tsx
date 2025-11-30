import Image from "next/image";
import BlogImg from "@/public/assets/images/contactus.png";
import Paginate from "@/components/ui/paginate";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CarFilter from "./car-filter";
import { RangeSlider } from "@/components/ui/range-slider";
import BlogFilter from "../blog/[slug]/_components/blog.filter";
import NotFoundSearch from "../blog/[slug]/_components/notfound-search";
import CarCard from "@/components/reserve/carcard";

const carFilterItems = [
  { id: 1, title: "پژو", query: "pegouet" },
  { id: 2, title: "بی‌ام‌و", query: "bmw" },
  { id: 3, title: "مرسدس", query: "mercedes" },
  { id: 4, title: "پورش", query: "porche" },
  { id: 5, title: "کیا", query: "kia" },
  { id: 6, title: "هیوندا", query: "hyunda" },
];

const carTypeFilterItems = [
  { id: 1, title: "شاسی بلند", query: "SUV" },
  { id: 2, title: "سدان", query: "Sedan" },
  { id: 3, title: "کوپه", query: "Coupe" },
  { id: 4, title: "کروک", query: "Crook" },
  { id: 5, title: "هاچبک", query: "Hatchback" },
  { id: 6, title: "اسپرت", query: "Sport" },
];

const fetchCars = async (page = "1", sort = "desc", q = "", min = "", max = "", type, brand) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/cars?page=${page}&sort=${sort}&search=${q}&limit=6&min=${min}&max=${max}&${type && `type=${type}`}&${brand && `brand=${brand}`}`,
    { next: { tags: ["cars"] } }
  );
  const { cars, info } = await res.json();
  return { cars, info };
};

const ReservePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [index: string]: string }>;
}) => {
  const page = (await searchParams).page ?? "1";
  const sort = (await searchParams).sort ?? "desc";
  const search = (await searchParams).q ?? "";
  const min = (await searchParams).min ?? "";
  const max = (await searchParams).max ?? "";
  const type = (await searchParams).type ?? [];
  const brand = (await searchParams).brand ?? [];

  const { cars, info } = await fetchCars(page, sort, search, min, max, type, brand);

  return (
    <article className="max-w-[1920px]">
      <div className="absolute  top-0 mx-auto max-w-screen w-[1920px] h-60 md:h-98 -z-5">
        <Image
          src={BlogImg}
          alt="Hero Section"
          fill
          placeholder="blur"
          className="object-cover brightness-70 contrast-110"
        />
      </div>
      <div className="mt-38 md:mt-89  p-4 md:p-0"></div>
      <div className="flex flex-col-reverse max-w-[1690px] mx-auto md:flex-row items-start justify-between gap-8 md:gap-10 md:mt-5 mb-6 p-4">
        <CarFilter />
        <div className="w-full md:w-5/6 grid md:grid-cols-2 gap-5">
          <div className="flex items-center justify-between gap-2 col-span-2 w-full text-xs md:text-sm">
            <BlogFilter
              title="مرتب کردن"
              options={[
                { label: "قدیمی‌ترین", value: "asc" },
                { label: "جدیدترین", value: "desc" },
              ]}
            />

            <Sheet>
              <SheetTrigger>
                <p className="bg-white rounded-lg shadow-xs border boder-slate-200 p-1.5 cursor-pointer hover:bg-slate-100 text-slate-500 md:hidden">
                  <SlidersHorizontal />
                </p>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="mt-6" asChild>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold text-slate-500 text-lg ">فیلتر جستجو </h2>
                      <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
                    </div>
                  </SheetTitle>
                  <SheetDescription asChild>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col text-sm mt-5 gap-2">
                        <h3 className="font-bold text-slate-700 mb-1">انتخاب برند خودرو</h3>
                        {carFilterItems.map((i, index) => {
                          return (
                            <label
                              key={index}
                              htmlFor={i.query}
                              className="flex items-center gap-2 text-slate-600 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                id={i.query}
                                name={i.query}
                                value={i.query}
                                className="cursor-pointer"
                              />
                              <p>{i.title}</p>
                            </label>
                          );
                        })}
                      </div>
                      <div className="flex flex-col text-sm mt-5 gap-2">
                        <h3 className="font-bold text-slate-700 mb-1">انتخاب نوع خودرو</h3>
                        {carTypeFilterItems.map((i, index) => {
                          return (
                            <label
                              key={index}
                              htmlFor={i.query}
                              className="flex items-center gap-2 text-slate-600 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                id={i.query}
                                name={i.query}
                                value={i.query}
                                className="cursor-pointer"
                              />
                              <p>{i.title}</p>
                            </label>
                          );
                        })}
                      </div>
                      <div className="flex flex-col text-sm mt-5 gap-2">
                        <h3 className="font-bold text-slate-700 mb-1">انتخاب بازه قیمتی </h3>
                        <RangeSlider />
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="w-full col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cars.length > 0 && cars.map(item => <CarCard key={item.id} {...item} />)}
            {!cars.length && <NotFoundSearch search={search} title="خودروی" />}
          </div>

          <div className="flex item-center justify-center md:col-span-2 my-6 w-full">
            <Paginate shape="square" theme="blue" totalPage={info.totalPage} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReservePage;
