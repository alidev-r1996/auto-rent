"use client";

import Stat from "@/components/ui/stat";
import { Calendar } from "@/components/ui/calendar";
import { LabelList, Pie, PieChart, Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PersianCurrency, PersianDigits } from "@/lib/utils";

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

const chartDataArea = [
  { weekday: "شنبه", payment: 85000000 },
  { weekday: "یکشنبه", payment: 107000000 },
  { weekday: "دوشنبه", payment: 145000000 },
  { weekday: "سه‌شنبه", payment: 65000000 },
  { weekday: "چهارشنبه", payment: 55000000 },
  { weekday: "پنجشنبه", payment: 35000000 },
  { weekday: "جمعه", payment: 110000000 },
];

const chartConfigArea = {
  payment: {
    label: "پرداختی",
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
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg flex flex-col justify-center items-center md:col-span-2">
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-text]:fill-background mx-auto aspect-square w-full md:w-3/4 flex-1"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent nameKey="quantity" hideLabel />} />
              <Pie data={chartData} dataKey="quantity">
                <LabelList
                  dataKey="quantity"
                  stroke="none"
                  fill="#10304a"
                  fontSize={12}
                  formatter={value => PersianDigits(value)}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg md:col-span-3">
          <ChartContainer config={chartConfigArea} className=" mx-auto flex-1">
            <AreaChart accessibilityLayer data={chartDataArea}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="weekday"
                tickLine={false}
                axisLine={false}
                interval={0}
                minTickGap={0}
                padding={{ left: 12, right: 12 }}
                tickMargin={2}
                tick={({ x, y, payload }) => (
                  <text
                    x={x}
                    y={y}
                    dy={10}
                    textAnchor="middle"
                    direction="rtl"
                    transform={`rotate(-45 ${x} ${y})`}
                  >
                    {payload.value}
                  </text>
                )}
              />

              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    formatter={value => (
                      <p>
                        <strong className="pl-2">پرداختی:</strong>
                        {PersianCurrency(String(value))} تومان
                      </p>
                    )}
                  />
                }
              />
              <defs>
                <linearGradient id="fillpayment" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="15%" stopColor="#2a5594" stopOpacity={0.8} />
                  <stop offset="85%" stopColor="#92ade1" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                dataKey="payment"
                type="natural"
                fill="url(#fillpayment)"
                fillOpacity={0.4}
                stroke="#2a5594"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default Profile;
