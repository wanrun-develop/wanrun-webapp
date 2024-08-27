import { post } from '@/libs/fetch';
import { authDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { AuthDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { useState } from 'react';

const useSignup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (data: AuthDogOwnerFormType) => {
    setIsLoading(true);
    setError(error);

    try {
      const request = authDogOwnerFormSchema.parse(data);
      const res = await post('/auth/signUp', request);
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
