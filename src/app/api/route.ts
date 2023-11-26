import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    message: "Hello world",
  });
}