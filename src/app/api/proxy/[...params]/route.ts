import { NextRequest, NextResponse } from 'next/server';

async function handle(request: NextRequest) {
  const proxyPath = request.nextUrl.pathname;
  const path = proxyPath.replace('/api/proxy', '');
  console.log('path', path);

  if (!path.startsWith('/auth')) {
    return NextResponse.json(null, {
      status: 404,
    });
  }

  const body = await (async () => {
    try {
      return await request.json();
    } catch (e) {
      return null;
    }
  })();
  console.log('body', body);

  const internalUrl = process.env.INTERNAL_API_URL + `/wanrun${path}`;
  console.log('request to ', internalUrl);
  const response = await fetch(internalUrl, {
    method: request.method,
    headers: request.headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  console.log(response, response.status);

  const result = await response.json();
  console.log('result', result);

  return NextResponse.json(result, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const DELETE = handle;
