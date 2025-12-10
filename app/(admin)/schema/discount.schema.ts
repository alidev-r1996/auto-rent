import z from "zod";

const numberRegex = /^[0-9۰-۹]+$/;
export const discountSchema = z.object({
  title: z.string().min(3, "حداقل ۳ حرف وارد کنید").max(16, "حداکثر ۱۶ حرف مجاز است"),
  percentage: z.string().regex(numberRegex, "درصد باید فقط عدد باشد").min(1, "درصد الزامی است"),
  start_date: z.date(),
  end_date: z.date(),
  cars: z
    .array(z.string(), { error: " انتخاب حداقل یک خودرو الزامی است" })
    .min(1, "انتخاب حداقل یک خودرو الزامی است"),
});

export type discountFormInput = z.infer<typeof discountSchema>;
