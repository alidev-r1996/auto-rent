import Image from "next/image";
import { blogItems } from "./blog.constant";
import { PersianDigits, TruncateText } from "@/lib/utils";
import { ChevronLeft, Clock4 } from "lucide-react";
import Link from "next/link";

const BlogList = () => {
  return (
    <section className="max-w-[1690px] mx-auto p-4 mt-8">
      <h2 className="font-bold md:text-4xl mb-4 text-2xl text-center flex items-center gap-4 justify-center">
        مجله <p className="text-amber-400">خودرو</p>
      </h2>
      <p className=" text-slate-400 text-center"> مقالات ما</p>

      <Link href="/blogs mt-8">
        <div className="mr-auto flex items-center gap-2 text-sm md:text-base text-indigo-600 justify-end">
          <p> مشاهده همه</p>
          <ChevronLeft className="size-5" />
        </div>
      </Link>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
        {blogItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 bg-white shadow rounded-xl group cursor-pointer"
          >
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <Image
                src={`/assets/images/blogs/${item.image}`}
                alt={item.title}
                fill
                className="object-cover rounded-md group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <h3 className="font-bold text-slate-800 hover:text-indigo-500">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-6">{TruncateText(item.text, 200)}</p>
            <div className="flex items-center justify-between text-xs p-1">
              <div className="flex items-center gap-1  text-slate-500">
                <Clock4 className="size-4" />
                <p>زمان مورد نیاز : </p>
                <p>{PersianDigits(item.readingTime)}</p>
              </div>
              <Link
                href={`/blogs/${item.id}`}
                className="px-3 py-1 rounded bg-indigo-500 text-white transition-all duration-300 hover:bg-indigo-600 hover:scale-105 active:scale-95"
              >
                ادامه مطلب
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
