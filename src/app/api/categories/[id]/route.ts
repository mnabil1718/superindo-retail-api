import { NextRequest, NextResponse } from "next/server";
import { categories } from "../../../../lib/data";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const id = parseInt(params.id as string);
  const category = categories.find((category) => category.id === id);

  if (!category) {
    return NextResponse.json(
      { error: "Kategori Tidak Ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json({ category });
}
