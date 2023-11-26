import Footer from "@/components/Footer";
import ProductGrid from "@/components/product/product-grid";
import CategorySelector from "@/components/search/CategorySelector";
import ProductGridSkeleton from "@/components/skeleton/ProductGridSkeleton";
import { Category, Product, products as data } from "@/lib/data";
import { getCategories, getProducts, searchProducts } from "@/lib/fetches";
import clsx from "clsx";
import Link from "next/link";
import { Suspense } from "react";

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };
  const products =
    searchValue === undefined
      ? await getProducts()
      : await searchProducts(searchValue);
  const categories = await getCategories();
  return (
    <div className="relative mx-auto max-w-screen-xl p-3">
      <div className="pb-5">
        <CategorySelector categories={categories} />
      </div>
      {products.length < 1 ? (
        <p>
          Hasil pencarian{" "}
          <span className="font-bold">&quot;{searchValue}&quot;</span> tidak
          ditemukan
        </p>
      ) : (
        <>
          {searchValue === undefined ? null : (
            <p className="mb-5">
              Menampilkan {products.length} hasil dari pencarian{" "}
              <span className="font-bold">&quot;{searchValue}&quot;</span>
            </p>
          )}
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
