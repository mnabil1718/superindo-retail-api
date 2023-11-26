import { ProductCard } from "@/components/product/product-card";
import { Product, products } from "@/lib/data";
import {
  getProducts,
  getProductsByCategory,
  searchProducts,
} from "@/lib/fetches";

const ProductGridCategory = async ({ categoryId }: { categoryId: string }) => {
  const products = await getProductsByCategory(categoryId);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.length < 1 ? (
        <p>No Data...</p>
      ) : (
        products.map((product: Product, index: number) => {
          return (
            <div className="col-span-1" key={index}>
              <ProductCard product={product} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductGridCategory;
