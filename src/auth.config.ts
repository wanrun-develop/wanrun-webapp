import GitHub from 'next-auth/providers/github';
import LINE from 'next-auth/providers/line';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    LINE({
      clientId: process.env.AUTH_LINE_ID,
      clientSecret: process.env.AUTH_LINE_SECRET,
      authorization: {
        // TODO: ここでstateを生成して、callbackで受け取る
        // Emailが必要であればscopeにemailを追加する
        params: { state: '123432543636', scope: 'profile openid' },
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const protectedPaths = ['/dogrun', '/setting'];
      const isProtected = protectedPaths.some((path) =>
        nextUrl.pathname.startsWith(path),
      );

      console.log('isLoggedIn', isLoggedIn);
      console.log('isProtected', isProtected);
      console.log('nextUrl', nextUrl);
      console.log('auth', auth);

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL('/auth/signin', nextUrl.origin);
        redirectUrl.searchParams.set('callbackUrl', nextUrl.href);
        return Response.redirect(redirectUrl);
      }
      return true;
    },
    async session({ session, token }) {
      console.log('session', session, token);
      // if (token.sub) {
      //   session.user.id = token.sub;
      // }
      return session;
    },
    async jwt({ token, user, account, profile, trigger }) {
      console.log('jwt', token, user, account, profile, trigger);
      return token;
    },
  },
} satisfies NextAuthConfig;
