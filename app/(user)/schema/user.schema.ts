import z from "zod";

export const profileSchema = z.object({
  name: z
    .string()
    .min(3, "حداقل تعداد کاراکتر باید بیش از 3 حرف باشد")
    .max(16, "حداکثر تعداد کاراکتر 16 حرف می‌باشد"),
  phoneNumber: z
    .string()
    .startsWith("۰۹", "شماره موبایل باید با 09 شروع شود")
    .regex(/^[0-9۰-۹]{11}$/, "شماره موبایل باید حداقل 11 کاراکتر باشد")
    .min(2, "شماره موبایل ضروری است"),
  national_id: z
    .string()
    .regex(/^[0-9۰-۹]{10}$/, "کد ملی معتبر نیست")
    .min(10, "کدملی معتبر نیست"),
  email: z.string().email({ message: "آدرس ایمیل معتبر نیست" }).min(10, "ایمیل معتبر نیست"),
  card_number: z.string().regex(/^[0-9۰-۹]{24}$/, "شماره شبا باید 24کاراکتر باشد"),
  birth: z.date().min(1, "تاریخ تولد نامعتبر است"),
});

export type profileFormInput = z.infer<typeof profileSchema>;