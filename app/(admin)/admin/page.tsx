import { Button } from "@/components/ui/button";
import Stat from "@/components/ui/stat";
import { Calendar } from "@/components/ui/calendar";

const Profile = () => {
  return (
    <div className=" flex flex-col pt-1 gap-5">
      <div className="grid md:grid-cols-5 gap-5">
        <Calendar
          mode="single"
          classNames={{ today: "bg-blue-500! text-white! rounded-md" }}
          className="w-full border border-slate-200 shadow-xs rounded-lg md:col-span-1"
        />
        <div className="grid md: grid-cols-2 gap-5 md:col-span-4">
          <Stat
            desc=" کل رزروها از ابتدای ماه تا کنون "
            href="admin/reserve"
            icon="product"
            title="رزروها"
            value={"4"}
          />
          <Stat
            desc=" پرداختی‌ها از ابتدای ماه تا کنون"
            href="admin/payment"
            icon="money"
            title="پرداختی‌ها"
            value={"400000"}
            theme="emerald"
          />
          <Stat
            desc="تعداد کل کامنت‌های تأیید نشده "
            href="admin/comment"
            icon="note"
            title="کامنت‌ها"
            value={"4"}
            theme="orange"
          />
          <Stat
            desc="تعداد کل خودروهای بلاک شده"
            href="admin/car"
            icon="bell"
            title="خودروها"
            value={"4"}
            theme="rose"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg"></div>
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg"></div>
      </div>
    </div>
  );
};

export default Profile;
