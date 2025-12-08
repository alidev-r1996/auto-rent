"use client";

import ReserveCard from "../../_components/reserve/reserve-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { reserveTabItems } from "../../_constant/reserve-constant";
import UserHeader from "../../_components/user-header";
import { useGetReserve } from "../../_hook/reserve.hook";
import Loading from "@/components/ui/loading";

const Reserve = () => {
  const { data, isLoading } = useGetReserve();

  if (isLoading) {
    return (
      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
        <UserHeader title="رزروهای من" />
        <Loading />
      </div>
    );
  }

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
          {data
            .filter(i => i.status == "Pending")
            .map(order => (
              <ReserveCard key={order.id} {...order} />
            ))}
        </TabsContent>
        <TabsContent
          value="done"
          className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
        >
          {data
            .filter(i => i.status == "Success")
            .map(order => (
              <ReserveCard key={order.id} {...order} />
            ))}
        </TabsContent>
        <TabsContent
          value="cancelled"
          className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
        >
          {data
            .filter(i => i.status == "Failed" || i.status == "Cancelled")
            .map(order => (
              <ReserveCard key={order.id} {...order} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reserve;
