import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const blockedPaths = ["/api/category", "/api/games", "/api/stores"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Block access to specified API routes
  if (blockedPaths.some((path) => pathname.startsWith(path))) {
    return new NextResponse("You are forbidden. Go back! 😒", { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/category/:path*",
    "/api/games/:path*",
    "/api/stores/:path*",
  ],
};
