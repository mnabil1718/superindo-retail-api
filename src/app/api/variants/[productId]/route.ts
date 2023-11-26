import { NextRequest, NextResponse } from "next/server";
import { variants } from "../../../../lib/data";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
): Promise<NextResponse> {
  const product_id = parseInt(params.productId as string);
  const productVariants = variants.filter(
    (variant) => variant.product_id === product_id
  );

  return NextResponse.json({ variants: productVariants });
}
