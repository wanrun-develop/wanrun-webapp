import NextAuth from 'next-auth';
import { authConfig } from './src/auth.config';

export const { auth } = NextAuth(authConfig);

// 複数のミドルウェアに対応する場合の設定
export const middleware = auth;

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
