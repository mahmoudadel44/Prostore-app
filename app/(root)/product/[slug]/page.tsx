import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import Rating from "@/components/shared/product/rating";
import { getProductById } from "@/lib/actions/product-actions";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductById(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Images - Left Column */}
        <div className="md:col-span-2">
          <ProductImages images={product.images} />
        </div>

        {/* Details - Middle Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <p className="text-muted-foreground">
            {product.brand} {product.category}
          </p>
          <h1 className="h3-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <Rating value={Number(product.rating)} />
          </div>
          <p className="text-muted-foreground">{product.numReviews} reviews</p>
          <div className="rounded-full bg-green-100 text-green-700 px-4 py-1 w-fit">
            <ProductPrice value={Number(product.price)} />
          </div>
          <div className="mt-4">
            <p className="font-semibold">Description:</p>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
        </div>

        {/* Action Card - Right Column */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <span>Price</span>
                <ProductPrice value={Number(product.price)} />
              </div>
              <div className="flex justify-between">
                <span>Status</span>
                {product.stock > 0 ? (
                  <Badge variant="outline">In stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <Button className="w-full">+ Add to cart</Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
