import useApi from '@/libs/useApi';
import useStorage, { STORAGE_KEYS } from '@/libs/useStorage';
import { authDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { AuthDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { useState } from 'react';

type SignUpResponse = {
  code: number;
  message: string;
  token: string;
};

const useSignup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { api } = useApi();
  const { storeValue } = useStorage(STORAGE_KEYS.ACCESS_TOKEN, null);

  const signup = async (data: AuthDogOwnerFormType) => {
    setIsLoading(true);
    setError(error);

    try {
      const request = authDogOwnerFormSchema.parse(data);
      const res: SignUpResponse = await api('POST', '/auth/signUp', request);

      const { token } = res;
      storeValue(token);
      return res;
    } catch (error: any) {
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export { useSignup };
