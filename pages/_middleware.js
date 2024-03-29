import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const { pathname, origin } = req.nextUrl

    if (pathname === "/") {
        const session = await getToken({
            req,
            secret: process.env.JWT_SECRET,
            secureCookie: process.env.NODE_ENV === "production",
        });

        // return NextResponse.rewrite(`${origin}/about`)
        // You could also check for any property on the session object,
        // like role === "admin" or name === "John Doe", etc.
        // if (!session) return NextResponse.redirect("/home");
        if (!session) return NextResponse.redirect(`${origin}/home`)
        // If user is authenticated, continue.
    }
}