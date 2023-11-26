import { ProductCard } from "@/components/product/product-card";
import { Product, products } from "@/lib/data";
import { getProducts, searchProducts } from "@/lib/fetches";

const ProductGridSearch = async ({
  searchValue,
}: {
  searchValue: string | undefined;
}) => {
  const products =
    searchValue === undefined
      ? await getProducts()
      : await searchProducts(searchValue);
  return (
    <>
      {searchValue !== undefined && products.length < 1 ? (
        <p className="mb-5">
          Hasil pencarian{" "}
          <span className="font-bold">&quot;{searchValue}&quot;</span> tidak
          ditemukan
        </p>
      ) : null}
      {searchValue !== undefined && products.length > 0 ? (
        <p className="mb-5">
          Menampilkan {products.length} hasil dari pencarian{" "}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
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
    </>
  );
};

export default ProductGridSearch;
