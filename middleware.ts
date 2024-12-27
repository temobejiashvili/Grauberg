import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Inject pathname into the headers for server-side access
  url.searchParams.set("pathname", url.pathname);

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/:path*", // Apply middleware to all app routes
};
