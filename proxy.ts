// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const session = await auth.api.getSession({ headers: req.headers });

  if (pathname.startsWith("/reserve")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    if (/\d/gi.test(session.user.name)) {
      return NextResponse.redirect(new URL("/user", nextUrl));
    }
  }

  if (pathname.startsWith("/admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    if (session.user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/user", nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
