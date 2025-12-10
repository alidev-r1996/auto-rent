import z from "zod";

export const availaibilitySchema = z.object({
  car_id: z.string().min(1, "انتخاب خودرو الزامی است"),
  isBlocked: z.boolean(),
  reason: z.string().optional(),
  start_date: z.date(),
  end_date: z.date(),
});

export type availaibilityFormInput = z.infer<typeof availaibilitySchema>;
