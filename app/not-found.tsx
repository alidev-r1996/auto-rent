import NotFoundImg from "@/public/assets/images/404.png";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="max-w-[1690px] bg-white my-8 h-[80vh] mx-auto rounded-xl shadow">
      <div className="relative w-1/2 mx-auto aspect-video">
        <Image
          src={NotFoundImg}
          alt="Hero Section"
          fill
          className="object-cover mix-blend-multiply brightness-105 contrast-110"
        />
      </div>
      <h1 className="font-bold text-3xl text-center text-slate-600 -translate-y-20">
        صفحه موردنظر یافت نشد.
      </h1>
      <div className="flex items-center justify-cente">
        <Link
          href="/"
          className="text-center px-5 py-2 rounded-lg border border-indigo-600 text-indigo-600 text-sm mx-auto transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
        >
          رفتن به صفحه اصلی
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
