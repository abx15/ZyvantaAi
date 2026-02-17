import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = request.nextUrl;

    // Protected routes that require authentication
    const protectedRoutes = ['/dashboard', '/health', '/education', '/agriculture', '/ai', '/profile', '/settings'];

    // Check if the current path is protected
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    // If route is protected and user is not authenticated, redirect to login
    if (isProtectedRoute && !token) {
        const url = new URL('/auth/login', request.url);
        url.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(url);
    }

    // If user is authenticated and tries to access login/register, redirect to dashboard
    if (token && (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register'))) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/health/:path*', '/education/:path*', '/agriculture/:path*', '/ai/:path*', '/profile/:path*', '/settings/:path*', '/auth/login', '/auth/register'],
};
