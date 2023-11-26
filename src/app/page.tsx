import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MinHWrapper from "@/components/MinHWrapper";
import ProductGrid from "@/components/product/product-grid";
import ProductGridSkeleton from "@/components/skeleton/ProductGridSkeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="relative mx-auto max-w-screen-xl p-3">
      <MinHWrapper>
        <Hero />
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid />
        </Suspense>
      </MinHWrapper>
      <Footer />
    </div>
  );
}
