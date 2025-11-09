import Image from "next/image";
import BlogImg from "@/public/assets/images/contactus.png";
import SingleImg from "@/public/assets/images/single.png";
import { ThumbnailBlog, thumbnailBlogs } from "../page";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock4 } from "lucide-react";
import { PersianDate, PersianDigits } from "@/lib/utils";

const SingleBlog = () => {
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
            <h1 className="font-bold text-slate-700 text-2xl ">بهترین ماشین برای خانواده </h1>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1  text-slate-400 text-xs">
                <Clock4 className="size-3.5" />
                <p>زمان مورد نیاز : </p>
                <p>{PersianDigits("4")} دقیقه</p>
              </div>
              <div className="flex items-center gap-1  text-slate-400 text-xs">
                <CalendarDays className="size-3.5" />
                <p>تاریخ انتشار : </p>
                <p>{PersianDate("2025-01-01")}</p>
              </div>
            </div>
            <div className="relative w-full mx-auto my-4 h-60 md:h-100">
              <Image src={SingleImg} alt="user-img" fill />
            </div>
            <h2 className="font-bold text-lg text-slate-700">
              محبوب‌ترین خودروهای خانوادگی کدامند؟
            </h2>
            <ul className="flex flex-col items-center text-xs md:text-sm [&>li]:leading-6 [&>li]:list-disc gap-3 px-4 md:pr-8 text-slate-600">
              <li>
                سمند LX: سمند به عنوان یکی از محبوب‌ترین خودروهای خانوادگی در ایران شناخته می‌شود.
                این خودرو دارای فضای داخلی راحتی است و از لحاظ ایمنی نیز در سطح قابل قبولی قرار
                دارد. مصرف سوخت مناسب و قیمت مقرون به صرفه، سمند را به یک انتخاب عالی تبدیل کرده
                است.
              </li>
              <li>
                دنا پلاس توربو: دنا پلاس، مدل ارتقاء یافته دنا، با موتور توربو و طراحی مدرن، یک
                گزینه عالی برای خانواده‌هایی است که به دنبال ترکیبی از قدرت، ایمنی و زیبایی هستند.
                این خودرو همچنین دارای امکانات رفاهی به‌روز و فضای داخلی جادار است.
              </li>
              <li>
                پژو ۲۰۶ تیپ ۵: پژو ۲۰۶ با طراحی کلاسیک و شناخته شده خود، گزینه‌ای محبوب در میان
                خانواده‌های ایرانی است. این خودرو علاوه بر اینکه از نظر فنی قابل اعتماد است، در
                زمینه مصرف سوخت نیز اقتصادی به شمار می‌رود.
              </li>
            </ul>
            <h2 className="font-bold text-lg text-slate-700">
              فاکتورهای کلیدی در انتخاب خودروی خانوادگی 
            </h2>
            <ul className="flex flex-col items-center text-xs md:text-sm [&>li]:leading-6 [&>li]:list-disc gap-3 px-4 md:pr-8 text-slate-600">
              <li>
                ایمنی: ایمنی باید اولین و مهم‌ترین اولویت در هنگام خرید ماشین خانوادگی باشد.
                خودروهایی که دارای امتیاز بالایی در تست‌های تصادف و مجهز به سیستم‌های ایمنی پیشرفته
                مانند کیسه‌های هوا، ترمزهای ABS و سیستم پایداری الکترونیکی هستند، انتخاب‌های
                مناسب‌تری هستند.
              </li>
              <li>
                راحتی و فضای داخلی: فضای داخلی کابین باید به اندازه کافی جادار برای راحتی تمام اعضای
                خانواده باشد. صندلی‌های راحت، فضای کافی برای پا، و کیفیت مواد به کار رفته در داخل
                کابین از جمله نکاتی هستند که باید به آن توجه کنید.
              </li>
              <li>
                کارایی و مصرف سوخت: خودروی خانوادگی باید از لحاظ اقتصادی نیز مقرون به صرفه باشد.
                خودروهایی با مصرف سوخت بهینه و هزینه‌های نگهداری پایین‌تر در درازمدت مقرون به
                صرفه‌تر خواهند بود.
              </li>
            </ul>
          </div>
          <div className="my-2 w-full bg-white border border-slate-100 shadow rounded-xl p-4">
            <h2 className="font-bold text-slate-500 text-lg ">نظرات </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <form className="border border-slate-300 rounded-lg px-4 py-2 mt-6 text-xs flex flex-col">
              <textarea
                name="comment"
                id="comment"
                className="appearance-none resize-none w-full h-16 outline-none text-slate-700"
                placeholder="دیدگاه خود را وارد کنید..."
              ></textarea>
              <p className="w-full border-b border-dotted border-slate-300 my-2"></p>
              <div className="flex items-center justify-between">
                <p className="text-slate-400 text-[10px] md:text-xs">
                  دیدگاه شما پس از تأیید، منتشر خواهد شد!
                </p>
                <button className="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-sm  hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-blue-600">
                  ثبت
                </button>
              </div>
            </form>
            {/* ----------------------------------------------comment */}
            <div className="w-full border-dashed  border-b last:border-none border-b-slate-300 py-4 mt-4 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-xs">
                <Image
                  src={SingleImg}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full aspect-square border-2 border-slate-200"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-slate-500">حسام شریفی </p>
                  <p className="text-slate-500">{PersianDate("2023-01-01")}</p>
                </div>
              </div>
              <p className="text-xs  leading-6 text-slate-400">
                اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن
                می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه!پشتیبانی عالی، هزینه بسیار
                مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره
                ماشین به سراغشون میام.
              </p>
              <p className="px-3 py-1 text-xs bg-emerald-500 text-white rounded mr-auto ml-3 hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-emerald-600">
                پاسخ دادن
              </p>
            </div>
            <div className="w-full border-dashed  border-b last:border-none border-b-slate-300 py-4 mt-4 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-xs">
                <Image
                  src={SingleImg}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full aspect-square border-2 border-slate-200"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-slate-500">حسام شریفی </p>
                  <p className="text-slate-500">{PersianDate("2023-01-01")}</p>
                </div>
              </div>
              <p className="text-xs  leading-6 text-slate-400">
                اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن
                می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه!پشتیبانی عالی، هزینه بسیار
                مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره
                ماشین به سراغشون میام.
              </p>
              <p className="px-3 py-1 text-xs bg-emerald-500 text-white rounded mr-auto ml-3 hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-emerald-600">
                پاسخ دادن
              </p>
            </div>
            <div className="w-full border-dashed  border-b last:border-none border-b-slate-300 py-4 mt-4 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-xs">
                <Image
                  src={SingleImg}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full aspect-square border-2 border-slate-200"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-slate-500">حسام شریفی </p>
                  <p className="text-slate-500">{PersianDate("2023-01-01")}</p>
                </div>
              </div>
              <p className="text-xs  leading-6 text-slate-400">
                اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن
                می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه!پشتیبانی عالی، هزینه بسیار
                مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره
                ماشین به سراغشون میام.
              </p>
              <button className="px-3 py-1 text-xs bg-emerald-500 text-white rounded mr-auto ml-3 hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-emerald-600">
                پاسخ دادن
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow border border-slate-100 p-4 flex flex-col gap-3">
            <h2 className="font-bold text-slate-500 text-lg ">آخرین مقالات</h2>
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
    </article>
  );
};

export default SingleBlog;
