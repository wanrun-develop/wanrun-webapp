import { auth } from '@/auth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const headers = request.headers;
  console.log('headers', headers);

  const cookieStore = await cookies();
  console.log('cookieStore', cookieStore);

  // サーバーサイドでセッション取得（auth関数を使用）
  const session = await auth();

  // トークンがない場合は未認証として返す
  if (!session) {
    return NextResponse.json({ error: '認証されていません' }, { status: 401 });
  }

  // セッション情報を返す
  return NextResponse.json({
    authenticated: !!session,
    session: {
      user: session.user,
      expires: session.expires,
    },
  });
}
