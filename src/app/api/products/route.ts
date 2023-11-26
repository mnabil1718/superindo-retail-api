import { NextRequest, NextResponse } from "next/server";
import { products } from "../../../lib/data";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const query = request.nextUrl.searchParams.get("q");

  const activeProducts = products.filter(
    (product) => product.is_active === true
  );

  let searchedProducts = activeProducts;

  if (query) {
    searchedProducts = activeProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json({
    products: searchedProducts,
  });
}
