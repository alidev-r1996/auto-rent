import ReserveCard from "./reserve-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { reserveTabItems } from "./reserve-constant";
import UserHeader from "../user-header";

const Reserve = () => {
  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col">
      <UserHeader title="رزروهای من" />
      <Tabs dir="rtl" defaultValue="current" className="w-full! mt-9">
        <TabsList className="p-1.5 h-max! shadow-xs border border-slate-200 w-full">
          {reserveTabItems.map(({ value, label, className }, index) => {
            return (
              <TabsTrigger
                key={index}
                value={value}
                className={`w-30 py-1.5 text-slate-500 rounded-md! md:py-3 border ${className} data-[state=active]:shadow-xs data-[state=active]:text-white cursor-pointer transition-colors duration-200`}
              >
                {label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent
          value="current"
          className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
        >
          <ReserveCard type="pending" />
          <ReserveCard type="pending" />
          <ReserveCard type="pending" />
        </TabsContent>
        <TabsContent
          value="done"
          className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
        >
          <ReserveCard type="accepted" />
          <ReserveCard type="accepted" />
          <ReserveCard type="accepted" />
        </TabsContent>
        <TabsContent
          value="cancelled"
          className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
        >
          <ReserveCard type="rejected" />
          <ReserveCard type="rejected" />
          <ReserveCard type="rejected" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reserve;
