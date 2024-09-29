import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("🚀 ~ POST ~ body:", body);
  return NextResponse.json({ message: "User Login Api" });
}
