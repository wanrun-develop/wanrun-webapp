import { accessTokenAtom, refreshTokenAtom } from '@/atom/auth';
import { loginDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { LoginDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { request } from '@/lib/apiClient';

type LogInResponse = {
  accessToken: string;
  refreshToken: string;
};

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [, setAccessToken] = useAtom(accessTokenAtom);
  const [, setRefreshToken] = useAtom(refreshTokenAtom);

  const login = async (data: LoginDogOwnerFormType) => {
    setIsLoading(true);
    setError(null);

    try {
      const requestBody = loginDogOwnerFormSchema.parse(data);

      const res: LogInResponse = await request(
        'POST',
        '/auth/dogowner/token',
        requestBody,
      );

      const { accessToken, refreshToken } = res;
      if (accessToken) {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
      }
      return res;
    } catch (error: any) {
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

export { useLogin };
