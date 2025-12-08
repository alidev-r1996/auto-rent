import { MarkdownToText, PersianDigits, TruncateText } from "@/lib/utils";
import { Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BlogCardProps } from "./blog.type";

const BlogCard: FC<BlogCardProps> = ({ cover_img, content, title, slug, reading_time }) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow rounded-xl group cursor-pointer">
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <Image
          src={cover_img || "/assets/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover rounded-md group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <h3 className="font-bold text-slate-800 hover:text-indigo-500">{title}</h3>
      <p className="text-xs md:text-sm text-slate-500 leading-6 md:leading-7">
        {TruncateText(MarkdownToText(content), 200)}
      </p>
      <div className="flex items-center justify-between text-xs p-1">
        <div className="flex items-center gap-1  text-slate-500">
          <Clock4 className="size-4" />
          <p>زمان مورد نیاز : </p>
          <p>{PersianDigits(reading_time)} دقیقه </p>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="px-3 py-1 rounded bg-indigo-500 text-white transition-all duration-300 hover:bg-indigo-600 hover:scale-105 active:scale-95"
        >
          ادامه مطلب
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
