import useApi from '@/app/hooks/common/useApi';
import useStorage, { STORAGE_KEYS } from '@/app/hooks/common/useStorage';
import { loginDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { LoginDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { useState } from 'react';

type LogInResponse = {
  accessToken: string;
};

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { api } = useApi();
  const { storeValue } = useStorage(STORAGE_KEYS.ACCESS_TOKEN, null);

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
      storeValue(accessToken);
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
