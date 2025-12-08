// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (pathname.startsWith("/reserve")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    if (/\d/gi.test(session.user.name)) {
      return NextResponse.redirect(new URL("/user", nextUrl));
    }
  }

  if (pathname.startsWith("/user")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    if (session.user.role == "Admin") {
      return NextResponse.redirect(new URL("/admin", nextUrl));
    }
  }

  if (pathname.startsWith("/admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    if (session.user.role !== "Admin") {
      return NextResponse.redirect(new URL("/user", nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs", // Required for auth.api calls
  matcher: ["/admin/:path*", "/reserve/:path*", "/user/:path*"],
};
