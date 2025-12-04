import Image from "next/image";

const NotFoundSearch = ({
  search,
  title,
  className,
}: {
  search?: string;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} md:col-span-2 flex flex-col items-center w-full justify-center gap-4 p-10 bg-white rounded-xl shadow border border-slate-200 text-center`}
    >
      <Image
        src="/assets/images/404.png"
        alt="نتیجه‌ای یافت نشد"
        width={400}
        height={400}
        className="object-cover mix-blend-multiply brightness-105 contrast-110"
      />
      <h2 className="text-lg font-bold text-slate-600">{title} موردنظر شما یافت نشد</h2>
      {search && <p className="text-slate-400"> هیچ نتیجه‌ای برای {`"${search}"`} پیدا نشد</p>}
    </div>
  );
};

export default NotFoundSearch;
