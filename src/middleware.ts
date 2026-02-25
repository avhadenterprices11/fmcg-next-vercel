import { NextRequest, NextResponse } from 'next/server';
import { verifySessionEdge, COOKIE_NAME } from '@/lib/auth';

// Routes that require authentication
const PROTECTED_PREFIXES = ['/admin', '/api/seed'];

// Login page path (outside of /admin)
const LOGIN_PATH = '/login';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the route is protected
    const isProtected = PROTECTED_PREFIXES.some((prefix) =>
        pathname.startsWith(prefix)
    );

    if (!isProtected) {
        return NextResponse.next();
    }

    // For protected routes, verify the session
    const cookie = request.cookies.get(COOKIE_NAME)?.value;

    if (!cookie) {
        return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }

    const session = await verifySessionEdge(cookie);

    if (!session) {
        // Invalid or expired session — clear the cookie and redirect
        const response = NextResponse.redirect(new URL(LOGIN_PATH, request.url));
        response.cookies.delete(COOKIE_NAME);
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/api/seed/:path*'],
};
