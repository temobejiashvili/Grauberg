import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const defaultLocale = i18nConfig.defaultLocale; // "ge"

  // Handle root URL `/`
  if (pathname === "/") {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = "/";
    newUrl.searchParams.set("locale", defaultLocale);
    return NextResponse.rewrite(newUrl);
  } else {
    const newUrl = request.nextUrl.clone();
    newUrl.searchParams.set("locale", defaultLocale);
    return NextResponse.rewrite(newUrl);
  }

  // return i18nRouter(request, i18nConfig); // Pass to i18nRouter for further handling
}

// Apply middleware only to app-specific routes
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"], // Apply only to app-specific routes
};
