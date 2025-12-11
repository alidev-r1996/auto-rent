"use client";

import Stat from "@/components/ui/stat";
import { Calendar } from "@/components/ui/calendar";
import { LabelList, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PersianDigits } from "@/lib/utils";

const chartData = [
  { browser: "خودروهای در دسترس", quantity: 5, fill: "#4880b1" },
  { browser: "خودروهای خارج از دسترس", quantity: 3, fill: "#adbcd3" },
];

const chartConfig = {
  quantity: {
    label: "تعداد کل",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

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

      <div className="grid md:grid-cols-5 gap-5">
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg flex flex-col md:flex-row md:col-span-2">
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-text]:fill-background mx-auto aspect-square w-full flex-1"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent nameKey="quantity" hideLabel />} />
              <Pie data={chartData} dataKey="quantity">
                <LabelList dataKey="quantity" stroke="none" fill="#10304a" fontSize={12} />
              </Pie>
            </PieChart>
          </ChartContainer>

          <div className="flex flex-col justify-center px-4 text-sm border-l">
            {chartData.map(item => {
              return (
                <div key={item.browser} className="flex items-center gap-3 mb-2 text-sm">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <p className="text-slate-700">
                    {item.browser}:{" "}
                    <span className="font-bold">{PersianDigits(item.quantity)}%</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg md:col-span-3"></div>
      </div>
    </div>
  );
};

export default Profile;
