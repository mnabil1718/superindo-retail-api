import { ProductCard } from "@/components/product/product-card";
import ProductDetails from "@/components/product/product-details";
import { Product, Variant, products, variants } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";

async function getProduct(slug: string): Promise<Product> {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`, {
    method: "GET",
    next: {
      revalidate: 5,
    },
  });
  const data = await response.json();

  return data.product;
}

async function getProductVariants(product_id: number): Promise<Variant[]> {
  const response = await fetch(
    `http://localhost:3000/api/variants/${product_id}`,
    {
      method: "GET",
      next: {
        revalidate: 5,
      },
    }
  );
  const data = await response.json();

  return data.variants;
}

export default async function Product({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await getProduct(slug);
  const productVariants = await getProductVariants(product.id);

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
            <Image
              className="h-full w-full object-contain"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={product.name}
              src={product.image}
              priority={true}
            />
          </div>
        </div>

        <div className="basis-full lg:basis-2/6">
          <ProductDetails product={product} variants={productVariants} />
        </div>
      </div>
      <Suspense>{/* <RelatedProducts id={product.id} /> */}</Suspense>
    </div>
  );
}
