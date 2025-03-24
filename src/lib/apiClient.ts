import { accessTokenAtom, refreshTokenAtom } from '@/atom/auth';
import { browserApiUrl, internalApiUrl } from '@/constants';
import { getDefaultStore } from 'jotai';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const isServer = typeof window === 'undefined';
const apiUrl = isServer ? internalApiUrl : browserApiUrl;

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
      const ok = await refreshAccessToken();
      if (!ok) {
        await getGeneralToken();
      }
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

type TokenResponse = {
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
      return false;
    }
    const response: TokenResponse = await res.json();
    store.set(accessTokenAtom, response.accessToken);
    store.set(refreshTokenAtom, response.refreshToken);
    return true;
  } catch (error) {
    return false;
  }
};

const getGeneralToken = async () => {
  try {
    const res = await fetch(`${apiUrl}/auth/general/token`, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error('Unauthorized');
    }
    const response: TokenResponse = await res.json();
    store.set(accessTokenAtom, response.accessToken);
  } catch (error) {
    throw error;
  }
};

export { createBaseOptions, request };
