import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  if (searchParams.has("name")) {
    const name = searchParams.get("name");
    return NextResponse.json({ message: `This is Hello from API, ${name}` });
  } else {
    return NextResponse.json(
      {
        message: "Name is missing",
      },
      { status: 400, statusText: "This is Custom Text" }
    );
  }
}

export async function POST(req: NextRequest) {
  // PUT
  // PATCH
  // DELETE
  // body()
  const body = await req.json();
  console.log("🚀 ~ POST ~ body:", body);
  return NextResponse.json({ message: "Hello from POST API", body });
}
