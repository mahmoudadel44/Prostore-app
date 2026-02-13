import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";
import Rating from "./rating";

export default function ProductCard({ product }: { product: Product }) {
  const [intPart, decimalPart] = product?.price.toFixed(2).toString().split(".");
  return (
    <Card className="overflow-hidden">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          className="w-full object-cover aspect-square"
        />
      </Link>
      <CardContent className="grid gap-2 p-4">
        <p className="text-xs text-muted-foreground">{product.brand}</p>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex justify-between items-center">
          <Rating value={product.rating} />
          {product.stock > 0 ? (
            <p className="font-bold"><sup>$</sup>{intPart}<sup>{decimalPart}</sup></p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
