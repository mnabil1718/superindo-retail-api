import { NextRequest, NextResponse } from "next/server";
import { products } from "../../../../lib/data";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  const slug = params.slug as string;
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return NextResponse.json(
      { error: "Kategori Tidak Ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json({ product });
}
