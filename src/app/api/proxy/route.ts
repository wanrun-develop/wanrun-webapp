import { NextRequest, NextResponse } from 'next/server';

async function handle(request: NextRequest) {
  const response = { status: 'OK' };
  return NextResponse.json(response, {
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
