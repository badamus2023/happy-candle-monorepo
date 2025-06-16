import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  imageUrl: z.string().url({ message: "Image URL must be a valid URL" }),
});
