import { z } from "zod";

const numberRegex = /^[0-9۰-۹]+$/;

export const carSchema = z.object({
  name: z.string().min(3, "حداقل ۳ حرف وارد کنید").max(16, "حداکثر ۱۶ حرف مجاز است"),
  brand: z.string().min(3, "حداقل ۳ حرف وارد کنید").max(16, "حداکثر ۱۶ حرف مجاز است"),
  model: z.string().regex(numberRegex, "مدل باید فقط عدد باشد").min(1, "مدل الزامی است"),
  mile_age: z.string().regex(numberRegex, "کارکرد معتبر نیست").min(1, "کارکرد الزامی است"),
  capacity: z.string().regex(numberRegex, "ظرفیت باید عدد باشد").min(1, "ظرفیت الزامی است"),
  price_day: z
    .string()
    .min(1, "وارد کردن مبلغ روزانه الزامی است")
    .regex(numberRegex, "مبلغ باید فقط عدد باشد"),
  price_month: z
    .string()
    .min(1, "وارد کردن مبلغ ماهیانه الزامی است")
    .regex(numberRegex, "مبلغ باید فقط عدد باشد"),
  price_garranty: z
    .string()
    .min(1, "وارد کردن مبلغ ضمانت الزامی است")
    .regex(numberRegex, "مبلغ باید فقط عدد باشد"),
  gear: z.enum(["Automatic", "Manual"], { error: "وارد کردن نوع گیربکس الزامی است" }),
  type: z.enum(["SUV", "Sedan", "Coupe", "Crook", "Hatchback", "Sport"], {
    error: "وارد کردن نوع خودرو الزامی است",
  }),
  fuel: z.enum(["Gasoline", "Electric"], { error: "وارد کردن نوع سوخت الزامی است" }),
  steering: z.enum(["Hydraulic", "Electric"], { error: "وارد کردن نوع فرمان خودرو الزامی است" }),
  features: z
    .array(z.string(), { error: "وارد کردن حداقل یک ویژگی الزامی است" })
    .min(1, "حداقل یک ویژگی لازم است"),
  slider1: z.string({ error: "تصویر اسلاید ۱ الزامی است" }).min(1, "تصویر اسلاید ۱ الزامی است"),
  slider2: z.string({ error: "تصویر اسلاید ۲ الزامی است" }).min(1, "تصویر اسلاید ۲ الزامی است"),
  slider3: z.string({ error: "تصویر اسلاید ۳ الزامی است" }).min(1, "تصویر اسلاید ۳ الزامی است"),
  slider4: z.string({ error: "تصویر اسلاید ۴ الزامی است" }).min(1, "تصویر اسلاید ۴ الزامی است"),
  cover: z.string({ error: "تصویر کاور اصلی الزامی است" }).min(1, "تصویر کاور اصلی الزامی است"),
  description: z.string().min(1, "توضیحات الزامی است"),
});

export type carFormInputs = z.infer<typeof carSchema>;
