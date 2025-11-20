import { Button } from "@/components/ui/button";
import UserHeader from "../user-header";

const Logout = () => {
  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col">
      <UserHeader title="خروج از حساب کاربری" />
      <div className="flex flex-col gap-6 mt-8 p-4">
        <p>برای خروج از حساب کاربری خود اطمینان دارید؟</p>
        <div className="flex items-center gap-2 w-full md:w-1/3">
          <Button variant={"outline"}>انصراف</Button>
          <Button variant={"destructive"}>خروج از حساب</Button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
