import Footer from "@/components/Footer";
import ProductGrid from "@/components/product/product-grid";
import CategorySelector from "@/components/search/CategorySelector";
import ProductGridSkeleton from "@/components/skeleton/ProductGridSkeleton";
import {
  getCategories,
  getCategory,
  getProductsByCategory,
} from "@/lib/fetches";
import { Suspense } from "react";

export default async function Search({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  const currentCategory = await getCategory(categoryId);
  const products = await getProductsByCategory(categoryId);
  const categories = await getCategories();
  return (
    <div className="relative mx-auto max-w-screen-xl p-3">
      <div className="pb-5">
        <CategorySelector
          currentCategory={currentCategory}
          categories={categories}
        />
      </div>
      {products.length < 1 ? (
        <p>Tidak ada produk</p>
      ) : (
        <>
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={products} />
          </Suspense>
        </>
      )}
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
