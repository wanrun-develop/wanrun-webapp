import { useCallback } from 'react';
import { request } from '@/lib/apiClient';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const useApi = () => {
  const api = useCallback(
    async <T>(method: Method, url: string, params?: any) => {
      try {
        const res = await request<T>(method, url, params);
        return res;
      } catch (error) {
        throw error;
      }
    },
    [],
  );

  return { api };
};

export default useApi;
