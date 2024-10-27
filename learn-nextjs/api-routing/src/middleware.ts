import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";
//export { auth as middleware } from "@/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = await auth();
  console.log("🚀 ~ middleware ~ user:", user);
  if (user) {
    if (
      user.user.role == "admin" &&
      request.nextUrl.pathname.startsWith("/admin")
    ) {
      return NextResponse.next();
    } else if (
      user.user.role == "user" &&
      request.nextUrl.pathname.startsWith("/dashboard")
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/not-authorized", request.url));
  } else {
    console.log("Else part");
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
