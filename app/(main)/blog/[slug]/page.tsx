import Image from "next/image";
import BlogImg from "@/public/assets/images/contactus.png";
import { Badge } from "@/components/ui/badge";
import { PersianDate, PersianDigits } from "@/lib/utils";
import prisma from "@/lib/prisma";
import Markdown from "markdown-to-jsx";
import { CalendarDays, Clock4 } from "lucide-react";
import { notFound } from "next/navigation";
import BlogComment from "./_components/blog.comment";
import { ThumbnailBlog } from "./_components/blog.thumbnail";

const SingleBlog = async ({ params }: { params: Promise<{ [index: string]: string }> }) => {
  const { slug } = await params;
  const blogs = await prisma.blog.findUnique({ where: { slug } });
  if (!blogs) return notFound();
  const content = blogs?.content && JSON.parse(blogs.content);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    next: { revalidate: 36000 },
  });
  const { blogs: lastBLogs } = await res.json();

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
      <div className="flex flex-col max-w-[1690px] p-2 mx-auto md:flex-row items-start justify-between gap-8 md:gap-10 my-5">
        <div className="w-full md:w-3/4 flex flex-col gap-4 ">
          <div className="flex flex-col gap-4 bg-white rounded-xl shadow border border-slate-100 p-4">
            <h1 className="font-bold text-slate-700 text-2xl "> {blogs?.title} </h1>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1  text-slate-400 text-xs">
                <Clock4 className="size-3.5" />
                <p>زمان مورد نیاز : </p>
                <p>{PersianDigits(blogs?.reading_time || "0")} دقیقه</p>
              </div>
              <div className="flex items-center gap-1  text-slate-400 text-xs">
                <CalendarDays className="size-3.5" />
                <p>تاریخ انتشار : </p>
                <p>{PersianDate(blogs?.created_at)}</p>
              </div>
            </div>
            <div className="border-3 border-slate-200 relative overflow-hidden rounded-lg w-full mx-auto md:w-3/4 aspect-video">
              <Image
                src={blogs?.cover_img || "/assets/placeholder.jpg"}
                fill
                alt={blogs?.title || "عکس کاور بلاگ"}
              />
            </div>
            <div className="md:p-4 prose max-w-none prose-li:text-sm prose-img:border-3 prose-img:rounded-lg prose-img:mx-auto prose-img:border-slate-200 prose-li:leading-7 prose-li:list-disc marker:text-slate-500 prose-img:w-full md:prose-img:w-3/4 prose-img:aspect-video prose-li:text-slate-600 prose-h2:text-slate-700 prose-h2:text-lg md:prose-h2:text-2xl">
              <Markdown>{content}</Markdown>
            </div>
          </div>

          <BlogComment blogId={blogs.id} />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow border border-slate-100 p-4 flex flex-col gap-3">
            <h2 className="font-bold text-slate-500 text-lg ">آخرین مقالات</h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <div className="flex flex-col text-sm">
              {lastBLogs.map(item => (
                <ThumbnailBlog key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow border border-slate-100 p-4 flex flex-col gap-3">
            <h1 className="font-bold text-slate-500 text-lg ">برچسب‌ها </h1>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <Badge variant="secondary">اجاره خودرو</Badge>
              <Badge variant="secondary">خودروی لاکچری</Badge>
              <Badge variant="secondary">ماشین عروس</Badge>
              <Badge variant="secondary">خودرو بدون راننده</Badge>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
