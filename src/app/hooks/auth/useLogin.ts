import useApi from '@/app/hooks/common/useApi';
import { jwtAtom } from '@/atom/auth';
import { loginDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { LoginDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { useAtom } from 'jotai';
import { useState } from 'react';

type LogInResponse = {
  accessToken: string;
};

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [_, setJwt] = useAtom(jwtAtom);

  const { api } = useApi();

  const login = async (data: LoginDogOwnerFormType) => {
    setIsLoading(true);
    setError(null);

    try {
      const request = loginDogOwnerFormSchema.parse(data);
      const res: LogInResponse = await api(
        'POST',
        '/auth/dogowner/token',
        request,
      );

      const { accessToken } = res;
      if (accessToken) {
        setJwt(accessToken);
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
