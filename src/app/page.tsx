import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/product/product-grid";
import ProductGridSkeleton from "@/components/skeleton/ProductGridSkeleton";
import { getProducts } from "@/lib/fetches";
import { Suspense } from "react";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="relative mx-auto max-w-screen-xl p-3">
      <Hero />
      {products.length < 1 ? (
        <p>No Data...</p>
      ) : (
        <>
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={products} />
          </Suspense>
          <Suspense>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
}
