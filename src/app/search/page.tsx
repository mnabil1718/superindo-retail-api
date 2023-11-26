import Footer from "@/components/Footer";
import MinHWrapper from "@/components/MinHWrapper";
import CategorySelector from "@/components/search/CategorySelector";
import ProductGridSearch from "@/components/search/ProductGridSearch";
import ProductGridSkeleton from "@/components/skeleton/ProductGridSkeleton";
import { Suspense } from "react";

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };

  return (
    <div className="relative mx-auto max-w-screen-xl p-3">
      <MinHWrapper>
        <div className="pb-5">
          <CategorySelector />
        </div>
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGridSearch searchValue={searchValue} />
        </Suspense>
      </MinHWrapper>
      <Footer />
    </div>
  );
}
