import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .transform((val) => parseFloat(val))
    .refine((val) => val > 0, "Price must be positive"),
  imageUrl: z.string().url("Must be a valid URL"),
  inStock: z
    .string()
    .min(1, "Stock is required")
    .transform((val) => parseInt(val))
    .refine((val) => val >= 0, "Stock cannot be negative"),
  category: z.string().min(1, "Category is required"),
  sku: z.string().min(1, "SKU is required"),
});
