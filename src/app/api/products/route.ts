import { NextRequest, NextResponse } from "next/server";
import { products } from "../../../lib/data";

export async function GET(): Promise<NextResponse> {
  const activeProducts = products.filter(
    (product) => product.is_active === true
  );

  return NextResponse.json({
    products: activeProducts,
  });
}
