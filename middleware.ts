import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/dashboard/ai-chat", request.url));
}

export const config = {
  matcher: ["/dashboard", "/"]
};
