import { NextRequest, NextResponse } from "next/server";
import { variants } from "../../../lib/data";

export async function GET(): Promise<NextResponse> {
  const activeVariants = variants.filter(
    (variant) => variant.is_active === true
  );

  return NextResponse.json({
    variants: activeVariants,
  });
}
