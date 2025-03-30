import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: { strategy: 'jwt' },
  callbacks: {
    ...authConfig.callbacks,
    // async jwt({ token, user, account }) {
    //   // 初回ログイン時にユーザー情報をトークンに追加
    //   if (user) {
    //     token.user = user;
    //   }
    //   // アクセストークンをトークンに追加（OAuthを使用する場合）
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   // トークンの情報をセッションに追加
    //   session.user = token.user as any;
    //   session.accessToken = token.accessToken as string;
    //   return session;
    // },
  },
});
