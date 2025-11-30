import BlogCard from "@/components/blogs/blog.card";
import BlogImg from "@/public/assets/images/contactus.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Paginate from "@/components/ui/paginate";
import { ThumbnailBlog } from "./[slug]/_components/blog.thumbnail";
import BlogFilter from "./[slug]/_components/blog.filter";
import NotFoundSearch from "./[slug]/_components/notfound-search";

const fetchBlogs = async (page = "1", sort = "desc", q = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?page=${page}&sort=${sort}&search=${q}&limit=4`,
    {
      next: { revalidate: 36000 },
    }
  );
  const { blogs, info } = await res.json();
  return { blogs, info };
};

const fetchLastBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/last`, {
    next: { revalidate: 36000 },
  });
  const { blogs: lastBLogs } = await res.json();
  return lastBLogs;
};

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [index: string]: string }>;
}) => {
  const page = (await searchParams).page ?? "1";
  const sort = (await searchParams).sort ?? "desc";
  const search = (await searchParams).q ?? "";
  const [{ blogs, info }, lastBLogs] = await Promise.all([
    fetchBlogs(page, sort, search),
    fetchLastBlogs(),
  ]);

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
            <BlogFilter
              title="مرتب کردن"
              options={[
                { label: "قدیمی‌ترین", value: "asc" },
                { label: "جدیدترین", value: "desc" },
              ]}
            />

            {blogs.length > 0 && blogs.map(item => <BlogCard key={item.id} {...item} />)}
            {!blogs.length && <NotFoundSearch search={search} title="وبلاگ" />}

            {info?.totalPage > 1 && (
              <div className="mx-auto md:col-span-2 my-6">
                <div className="flex items-center justify-center my-8">
                  <Paginate shape="square" theme="blue" totalPage={info.totalPage} />
                </div>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-5">
            <div className="bg-white rounded-xl shadow border border-slate-100 p-4 flex flex-col gap-3">
              <h1 className="font-bold text-slate-500 text-lg ">آخرین مقالات</h1>
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
      </div>

      <div className="my-8"></div>
    </article>
  );
};

export default BlogPage;
