import Image from "next/image";
import { blogItems } from "./blog.constant";
import { PersianDigits, TruncateText } from "@/lib/utils";
import { ChevronLeft, Clock4 } from "lucide-react";
import Link from "next/link";
import BlogCard from "./blog.card";

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
        {blogItems.map(item => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
