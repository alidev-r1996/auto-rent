import BlogCard from "@/components/blogs/blog.card";
import { blogItems } from "@/components/blogs/blog.constant";
import BlogImg from "@/public/assets/images/contactus.png";
import { Clock4, Search } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import BlogImg1 from "@/public/assets/images/blogs/last/1.png";
import BlogImg2 from "@/public/assets/images/blogs/last/2.png";
import BlogImg3 from "@/public/assets/images/blogs/last/3.png";
import BlogImg4 from "@/public/assets/images/blogs/last/4.png";
import { PersianDigits } from "@/lib/utils";
import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import DropDown from "@/components/ui/dropdown";
import Paginate from "@/components/ui/paginate";

export const thumbnailBlogs = [
  { id: 1, title: "نگاهی به Lexus NX", readingTime: "2", href: "/blog", image: BlogImg1 },
  { id: 2, title: "رونمایی از Lamborgini Urus", readingTime: "5", href: "/blog", image: BlogImg2 },
  {
    id: 3,
    title: "بنتلی Bentayga زیر تیغ تیونینگ منصوری",
    readingTime: "4",
    href: "/blog",
    image: BlogImg3,
  },
  {
    id: 4,
    title: "رونمایی از فراری Roma به تاخیر افتاد",
    readingTime: "3",
    href: "/blog",
    image: BlogImg4,
  },
];

const BlogPage = () => {
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
      <div className="mt-38 md:mt-89 max-w-[1690px] mx-auto p-4 md:p-0">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10 mt-5">
          <div className="w-full md:w-2/3 grid md:grid-cols-2 gap-5">
            <div className="flex items-center justify-between gap-2 md:col-span-2 text-xs md:text-sm">
              <div className="flex items-center bg-white border border-slate-200 shadow-xs rounded-lg gap-2 p-2 flex-1">
                <Search className="size-5 text-slate-500" />
                <input
                  type="text"
                  className="appearance-none outline-none flex-1 placeholder:text-slate-400 text-slate-600"
                  placeholder="جستجو..."
                />
              </div>
              <DropDown title="مرتب کردن" options={["پربازدید ترین", "جدید ترین", "قدیمی‌ ترین"]} />
            </div>
            {blogItems.map(item => (
              <BlogCard key={item.id} {...item} />
            ))}
            {blogItems.map(item => (
              <BlogCard key={item.id} {...item} />
            ))}
            <div className="mx-auto md:col-span-2 my-6">
              <Paginate shape="square" theme="blue" totalPage={20} />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-5">
            <div className="bg-white rounded-xl shadow border border-slate-100 p-4 flex flex-col gap-3">
              <h1 className="font-bold text-slate-500 text-lg ">آخرین مقالات</h1>
              <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
              <div className="flex flex-col text-sm">
                {thumbnailBlogs.map(item => (
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
      </div>

      <div className="my-8"></div>
    </article>
  );
};

export default BlogPage;

export type ThumbnailBlogProps = {
  id: number;
  title: string;
  readingTime: string;
  href: string;
  image: StaticImageData;
};

export const ThumbnailBlog: FC<ThumbnailBlogProps> = ({ href, id, image, readingTime, title }) => {
  return (
    <div className="flex items-center gap-2 transition-all duration-300 hover:scale-103 hover:bg-slate-50 cursor-pointer p-4 border-b last:border-none border-b-slate-200">
      <Image
        src={image}
        alt="user-img"
        width={80}
        height={80}
        className=" rounded-lg border-3 border-slate-300 shadow"
      />
      <div className="flex flex-col justify-between gap-4">
        <h1 className="font-bold text-slate-600"> {title} </h1>
        <div className="flex items-center gap-1  text-slate-400 text-xs">
          <Clock4 className="size-3.5" />
          <p>زمان مورد نیاز : </p>
          <p>{PersianDigits(readingTime)} دقیقه</p>
        </div>
      </div>
    </div>
  );
};
