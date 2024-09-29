// HTTP
// GET
// POST
// PATCH
// DELETE
// PUT
// Async
// export async  get, post, Patch,Delete
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "OK",
  });
}
