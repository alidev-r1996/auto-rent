import Image from "next/image";
import BlogImg from "@/public/assets/images/contactus.png";
import Paginate from "@/components/ui/paginate";
import { SlidersHorizontal} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CarFilter from "./car-filter";
import BlogFilter from "../blog/[slug]/_components/blog.filter";
import NotFoundSearch from "../blog/[slug]/_components/notfound-search";
import CarCard from "@/components/reserve/carcard";

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
                <p className="bg-white rounded-lg shadow-xs border boder-slate-200 p-1.5 cursor-pointer hover:bg-slate-100 text-slate-400 md:hidden">
                  <SlidersHorizontal />
                </p>
              </SheetTrigger>
              <SheetContent className="h-screen overflow-y-auto">
                <SheetTitle className="hidden">فیلترها</SheetTitle>
                <SheetDescription asChild>
                  <CarFilter className="flex! md:w-full!" />
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
          <div className="w-full col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cars.length > 0 && cars.map(item => <CarCard key={item.id} {...item} />)}
            {!cars.length && (
              <NotFoundSearch
                search={search}
                title="خودروی"
                className="md:col-span-3! sm:col-span-2!"
              />
            )}
          </div>

          {info.totalPage > 1 && (
            <div className="flex item-center justify-center my-6 w-full col-span-2 mx-auto">
              <Paginate shape="square" theme="blue" totalPage={info.totalPage} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ReservePage;
