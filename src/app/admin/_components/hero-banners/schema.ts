import z from "zod";

export const heroBannerSchema = z.object({
    title: z.string().min(1, "Title is required"),
    subtitle: z.string().optional(),
    cta: z.string().optional(),
    layout: z.enum(['norman', 'found', 'measured', 'centered']),
    image: z.string().min(1, "Image URL is required"),
    order: z.number().min(0, "Order must be a positive number"),
    status: z.enum(["active", "draft"]),
});

export type HeroBannerFormValues = z.infer<typeof heroBannerSchema>;
