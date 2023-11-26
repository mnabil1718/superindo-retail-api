import { NextRequest, NextResponse } from "next/server";
import { categories } from "../../../lib/data";

export async function GET(): Promise<NextResponse> {
  const activeCategories = categories.filter(
    (category) => category.is_active === true
  );

  return NextResponse.json({
    categories: activeCategories,
  });
}
