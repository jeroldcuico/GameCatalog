import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define blocked API routes
const blockedPaths = ["/api/category", "/api/games", "/api/stores"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow internal requests (from the same origin)
  const isInternalRequest = request.headers.get("origin") === null;

  // Block access to blocked paths for non-internal requests
  if (blockedPaths.some((path) => pathname.startsWith(path)) && !isInternalRequest) {
    return new NextResponse("Forbidden", { status: 403 });
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
