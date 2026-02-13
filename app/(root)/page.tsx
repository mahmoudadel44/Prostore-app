import ProductList from "@/components/shared/product/product-list";
import LoadingPage from "../loading";
import { getLatestProducts } from "@/lib/actions/product-actions";

export default async function Home() {
  const latestProducts=await getLatestProducts();
  return (
    <>
      {/* <LoadingPage /> */}
      <ProductList data={latestProducts} title="Newest Arrival"/>
    </>
  );
}
