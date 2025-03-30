import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // const headers = request.headers;
  // console.log('headers', headers);

  const cookieStore = await cookies();
  const storedSession = cookieStore.get('sessionid');

  if (storedSession) {
    console.log('storedSession is found', storedSession);
  } else {
    console.log('storedSession is not found');
  }

  const current = new Date().getTime();
  const newSession = storedSession
    ? storedSession.value
    : `session-test-${current}`;

  cookieStore.set('sessionid', newSession, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 3,
    path: '/',
  });

  return NextResponse.json({
    session: newSession,
  });
}
