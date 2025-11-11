import { Button } from "@/components/ui/button";
import { profileItems } from "./profile.constant";
import UserHeader from "../user-header";

const Profile = () => {
  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col">
      <UserHeader title="حساب کاربری" />
      <form className="grid md:grid-cols-2 gap-5 mt-8">
        {profileItems.map((i, index) => {
          const Icon = i.icon;
          return (
            <label
              key={index}
              htmlFor={i.name}
              className="flex items-center gap-2 rounded-lg border border-slate-200 relative p-3 text-slate-400 text-xs md:text-sm flex-1"
            >
              <Icon className="size-5" />
              <p className="border-r border-r-slate-300">&nbsp;</p>
              <input
                type="text"
                name={i.name}
                className="appearance-none outline-none flex-1 peer text-slate-500"
                placeholder={i.label}
              />
              <p className="absolute hidden md:block peer-placeholder-shown:hidden text-[10px] bg-white px-1 py-1 -top-3 right-6">
                {i.label}
              </p>
            </label>
          );
        })}
        <Button variant={"blue"} className="h-full! md:col-start-2">
          ویرایش حساب کاربری
        </Button>
      </form>
    </div>
  );
};

export default Profile;
