import useApi from '@/app/hooks/common/useApi';
import useStorage, { STORAGE_KEYS } from '@/app/hooks/common/useStorage';
import { signupDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { SignupDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { useState } from 'react';

type SignUpResponse = {
  accessToken: string;
};

const useSignup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { api } = useApi();
  const { storeValue } = useStorage(STORAGE_KEYS.ACCESS_TOKEN, null);

  const signup = async (data: SignupDogOwnerFormType) => {
    setIsLoading(true);
    setError(null);

    try {
      const request = signupDogOwnerFormSchema.parse({
        ...data,
        dogOwnerName: 'test',
      });
      const res: SignUpResponse = await api(
        'POST',
        '/dogowner/signUp',
        request,
      );

      const { accessToken } = res;
      console.log('signup token: ', accessToken);
      storeValue(accessToken);
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
