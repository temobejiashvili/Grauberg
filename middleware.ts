import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./i18nConfig";
import { i18nRouter } from "next-i18n-router";
export function middleware(request: NextRequest) {
  return NextResponse.next();

  // return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
// export const config = {
//   matcher: "/((?!api|static|.*\\..*|_next).*)",
// };
export const config = {
  matcher: "/:path*",
};
