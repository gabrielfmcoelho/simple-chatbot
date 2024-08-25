import { NextResponse, type NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const { url, nextUrl } = request;
  const { host, hostname, pathname } = nextUrl;

  if (host === "dashboard.shadcnuikit.com") {
    return NextResponse.redirect(new URL(pathname, "https://shadcnuikit.com"));
  }

  // console.log("request.url", new URL(pathname, "https://shadcnuikit.com").toString());

  return response;
}

export const config = {
  matcher: "/:path*"
};
