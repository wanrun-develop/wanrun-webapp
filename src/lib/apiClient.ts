import { accessTokenAtom, refreshTokenAtom } from '@/atom/auth';
import { getDefaultStore } from 'jotai';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

const store = getDefaultStore();

const createBaseOptions = (method: Method, params?: any) => {
  const accessToken = store.get(accessTokenAtom);
  console.log('accessToken', accessToken);
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
    body: params ? JSON.stringify(params) : null,
  };
};

const request = async <T>(
  method: Method,
  url: string,
  params?: any,
): Promise<T> => {
  try {
    const res = await fetch(
      `${apiUrl}${url}`,
      createBaseOptions(method, params),
    );

    if (res.status === 401) {
      await refreshAccessToken();
      const res = await fetch(
        `${apiUrl}${url}`,
        createBaseOptions(method, params),
      );
      if (!res.ok) {
        throw new Error('Unauthorized');
      }
      return res.json();
    } else if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData?.message);
    }
  } catch (error) {
    throw error;
  }
};

type LogInResponse = {
  accessToken: string;
  refreshToken: string;
};

const refreshAccessToken = async () => {
  try {
    const refreshToken = store.get(refreshTokenAtom);
    const res = await fetch(`${apiUrl}/auth/dogowner/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken, authenticationType: 'refresh' }),
    });
    if (!res.ok) {
      throw new Error('Unauthorized');
    }
    const accessToken: LogInResponse = await res.json();
    store.set(accessTokenAtom, accessToken.accessToken);
    store.set(refreshTokenAtom, accessToken.refreshToken);
  } catch (error) {
    throw error;
  }
};

export { createBaseOptions, request };
