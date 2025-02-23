import useApi from '@/hooks/common/useApi';
import { accessTokenAtom, refreshTokenAtom } from '@/atom/auth';
import { signupDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { SignupDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { useAtom } from 'jotai';
import { useState } from 'react';

type SignUpResponse = {
  accessToken: string;
  refreshToken: string;
};

const useSignup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [, setAccessToken] = useAtom(accessTokenAtom);
  const [, setRefreshToken] = useAtom(refreshTokenAtom);

  const { api } = useApi();

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

  return { signup, isLoading, error };
};

export { useSignup };
