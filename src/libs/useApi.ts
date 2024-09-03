import useStorage, { STORAGE_KEYS } from './useStorage';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const useApi = () => {
  const { getValue: getAccessToken } = useStorage(
    STORAGE_KEYS.ACCESS_TOKEN,
    null,
  );

  const createBaseOptions = (method: Method, params?: any) => {
    const accessToken = getAccessToken();
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: params ? JSON.stringify(params) : null,
    };
  };

  const doFetch = async <JSON = any>(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<JSON> => {
    const res = await fetch(input, init);
    return res.json();
  };

  const api = async <T>(method: Method, url: string, params?: any) => {
    try {
      const res = await doFetch<T>(
        `${baseUrl}${url}`,
        createBaseOptions(method, params),
      );
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { api };
};

export default useApi;
