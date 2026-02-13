"use server";
import { PrismaClient } from "@/lib/generated/prisma/client";

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });
  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
  }));
}


export async function getProductById(slug:string){
  const prisma=new PrismaClient();
  const product=await prisma.product.findFirst({
    where:{
      slug
    }
  })
  return product;
} 