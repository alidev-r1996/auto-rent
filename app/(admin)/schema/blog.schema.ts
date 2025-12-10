import z from "zod";

const numberRegex = /^[0-9۰-۹]+$/;

export const blogSchema = z.object({
  title: z
    .string()
    .min(3, "عنوان حداقل باید 3 کاراکتر داشته باشد")
    .max(30, "عنوان نباید بیشتر از 30 کاراکتر باشد"),
  reading_time: z
    .string()
    .regex(numberRegex, "زمان مطالعه الزامی و مقدار آن باید فقط عدد باشد")
    .min(1, "زمان مطالعه الزامی است"),
  slug: z
    .string()
    .regex(/^[a-zA-Z0-9-]+$/, "اسلاگ فقط می‌تواند شامل حروف انگلیسی، عدد و خط تیره باشد"),
  cover_img: z.string({ error: "تصویر کاور اصلی الزامی است" }).min(1, "تصویر کاور اصلی الزامی است"),
});

export type blogFromInput = z.infer<typeof blogSchema>;
