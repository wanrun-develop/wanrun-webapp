import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { jwtAtom } from '@/atom/auth';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

const useApi = () => {
  const [accessToken] = useAtom(jwtAtom);

  const createBaseOptions = useCallback(
    (method: Method, params?: any) => {
      return {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
        body: params ? JSON.stringify(params) : null,
      };
    },
    [accessToken],
  );

  const doFetch = async <JSON = any>(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<JSON> => {
    const res = await fetch(input, init);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message);
    }

    return await res.json();
  };

  const api = useCallback(
    async <T>(method: Method, url: string, params?: any) => {
      try {
        const res = await doFetch<T>(
          `${apiUrl}${url}`,
          createBaseOptions(method, params),
        );
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [createBaseOptions],
  );

  return { api };
};

export default useApi;
