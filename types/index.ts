import { insertProductSchema } from "@/lib/validator";
import z from "zod";

export type Product=z.infer<typeof insertProductSchema> &{
    name: string;
    slug: string;
    category: string;
    images: string[];
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;

};
