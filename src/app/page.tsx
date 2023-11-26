import Hero from "@/components/Hero";
import { ProductCard } from "@/components/product/product-card";
import { Product } from "@/lib/data";
import { useCartStore } from "@/store/zustand";
import { Suspense } from "react";
import { useStore } from "zustand";

async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    next: {
      revalidate: 5,
    },
  });
  const data = await response.json();

  return data.products;
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="relative mx-auto max-w-screen-xl p-3">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.length < 1 ? (
          <p>No Data...</p>
        ) : (
          products.map((product: Product, index: number) => {
            return (
              <div className="col-span-1" key={index}>
                <Suspense>
                  <ProductCard product={product} />
                </Suspense>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
