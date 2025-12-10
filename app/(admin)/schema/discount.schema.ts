import z from "zod";

const numberRegex = /^[0-9۰-۹]+$/;
export const discountSchema = z.object({
  title: z
    .string()
    .min(3, "عنوان حداقل باید 3 کاراکتر داشته باشد")
    .max(16, "عنوان نباید بیشتر از 16 کاراکتر باشد"),
  percentage: z
    .string()
    .regex(numberRegex, "درصد تخفیف الزامی و مقدار آن باید فقط عدد باشد")
    .min(1, "درصد الزامی است"),
  start_date: z.date(),
  end_date: z.date(),
  cars: z
    .array(z.string(), { error: " انتخاب حداقل یک خودرو الزامی است" })
    .min(1, "انتخاب حداقل یک خودرو الزامی است"),
});

export type discountFormInput = z.infer<typeof discountSchema>;
