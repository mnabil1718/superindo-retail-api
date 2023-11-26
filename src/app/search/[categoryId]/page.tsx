import Footer from "@/components/Footer";
import MinHWrapper from "@/components/MinHWrapper";
import ProductGrid from "@/components/product/product-grid";
import CategorySelector from "@/components/search/CategorySelector";
import ProductGridCategory from "@/components/search/ProductGridCategory";
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
  return (
    <div className="relative mx-auto max-w-screen-xl p-3">
      <MinHWrapper>
        <div className="pb-5">
          <CategorySelector categoryId={categoryId} />
        </div>
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGridCategory categoryId={categoryId} />
        </Suspense>
      </MinHWrapper>
      <Footer />
    </div>
  );
}
