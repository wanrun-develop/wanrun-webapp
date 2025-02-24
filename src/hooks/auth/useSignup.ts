import { accessTokenAtom, refreshTokenAtom } from '@/atom/auth';
import { request } from '@/lib/apiClient';
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


  const signup = async (data: SignupDogOwnerFormType) => {
    setIsLoading(true);
    setError(null);

    try {
      const requestBody = signupDogOwnerFormSchema.parse({
        ...data,
        dogOwnerName: 'test',
      });
      const res: SignUpResponse = await request(
        'POST',
        '/dogowner/signUp',
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

  return { signup, isLoading, error };
};

export { useSignup };
