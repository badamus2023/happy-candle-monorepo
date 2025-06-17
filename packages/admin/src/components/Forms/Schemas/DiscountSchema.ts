import { z } from "zod";

export const discountSchema = z.object({
  code: z
    .string()
    .min(1, { message: "Code is required" })
    .min(3, { message: "Code must be at least 3 characters" }),

  type: z.enum(["percentage", "fixed"]),

  amount: z.coerce
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive({ message: "Amount must be greater than 0" }),

  currency: z
    .string()
    .length(3, { message: "Currency must be a 3-letter code" }),

  expiryDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Expiry date must be a valid date",
  }),

  description: z.string(),
});
