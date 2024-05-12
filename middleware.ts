import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // You can add your middleware logic here

  return NextResponse.next();
}
