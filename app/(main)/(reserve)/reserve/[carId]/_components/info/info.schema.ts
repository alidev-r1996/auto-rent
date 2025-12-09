import z from "zod";

export const infoSchema = z.object({
  name: z
    .string()
    .min(3, "حداقل تعداد کاراکتر باید بیش از 3 حرف باشد")
    .max(16, "حداکثر تعداد کاراکتر 16 حرف می‌باشد"),
  phone: z
    .string()
    .startsWith("۰۹", "شماره موبایل باید با 09 شروع شود")
    .regex(/^[0-9۰-۹]{11}$/, "شماره موبایل باید حداقل 11 کاراکتر باشد")
    .min(2, "شماره موبایل ضروری است"),
  nationalId: z
    .string()
    .regex(/^[0-9۰-۹]{10}$/, "کد ملی معتبر نیست")
    .min(10, "کدملی معتبر نیست"),
  address: z.string().min(10, "وارد کردن آدرس الزامی است"),
});

export type infoFormInput = z.infer<typeof infoSchema>;
