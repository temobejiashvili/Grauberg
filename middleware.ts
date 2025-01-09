import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Extract the locale from the URL
  const supportedLocales = i18nConfig.locales; // ["en", "ge"]
  const localeInPath = pathname.split("/")[1]; // e.g., "en" in "/en/about"

  // If the locale is in the URL, remove it
  if (supportedLocales.includes(localeInPath)) {
    const newPathname = pathname.replace(`/${localeInPath}`, ""); // Remove "/en"
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = newPathname || "/"; // Ensure a valid root path

    return NextResponse.rewrite(newUrl); // Rewrite without the locale in the URL
  }

  // Let `i18nRouter` handle locale detection and internal routing
  return i18nRouter(request, i18nConfig);
}

// Apply middleware only to app-specific routes
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
