import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import BlogCard from "./blog.card";

const BlogList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/last`, {
    next: { revalidate: 36000 },
  });
  const { blogs } = await res.json();

  return (
    <section className="max-w-[1690px] mx-auto p-4 mt-8">
      <h2 className="font-bold md:text-4xl mb-4 text-2xl text-center flex items-center gap-4 justify-center">
        مجله <p className="text-amber-400">خودرو</p>
      </h2>
      <p className=" text-slate-400 text-center"> مقالات ما</p>

      <Link href="/blog">
        <div className="mr-auto flex items-center gap-2 text-sm md:text-base text-indigo-600 justify-end">
          <p> مشاهده همه</p>
          <ChevronLeft className="size-5" />
        </div>
      </Link>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
        {blogs.map(item => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
