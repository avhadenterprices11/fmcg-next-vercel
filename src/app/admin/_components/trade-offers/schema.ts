import z from "zod";

export const tradeOfferSchema = z.object({
    title: z.string().min(1, "Title is required"),
    sizes: z.array(z.string()).min(1, "At least one size is required"),
    category: z.array(z.string()).min(1, "Select at least one category"),
    market: z.array(z.string()).min(1, "Select at least one market"),
    notes: z.array(z.string()),
    availability: z.string().min(1, "Availability status is required"),
    image: z.string(),
    types: z.array(z.string()).min(1, "Select at least one type"),
    price: z.string(),
    status: z.enum(["active", "draft"]),
});

export type TradeOfferFormValues = z.infer<typeof tradeOfferSchema>;
