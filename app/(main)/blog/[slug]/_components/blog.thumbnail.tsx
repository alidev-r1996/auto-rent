import { PersianDigits } from "@/lib/utils";
import { Clock4 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export type ThumbnailBlogProps = {
  id: number;
  title: string;
  reading_time: string;
  slug: string;
  cover_img: string;
};

export const ThumbnailBlog: FC<ThumbnailBlogProps> = ({ slug, cover_img, reading_time, title }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex items-center gap-2 transition-all duration-300 hover:scale-103 hover:bg-slate-50 cursor-pointer p-4 border-b last:border-none border-b-slate-200">
        <Image
          src={cover_img || "/assets/placeholder.jpg"}
          alt="user-img"
          width={100}
          height={90}
          className=" rounded-lg border-3 border-slate-300 shadow"
        />
        <div className="flex flex-col justify-between gap-4">
          <h1 className="font-bold text-slate-600"> {title} </h1>
          <div className="flex items-center gap-1  text-slate-400 text-xs">
            <Clock4 className="size-3.5" />
            <p>زمان مورد نیاز : </p>
            <p>{PersianDigits(reading_time)} دقیقه</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
