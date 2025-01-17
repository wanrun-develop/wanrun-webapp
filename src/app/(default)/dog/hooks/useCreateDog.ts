import useApi from '@/app/hooks/common/useApi';
import useUserInfo from '@/app/hooks/common/useUserInfo';
import { dogFormSchema, dogSchema } from '@/schemas/DogSchema';
import { DogFormType } from '@/types/Dog';
import { useState } from 'react';

const useCreateDog = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { userInfo } = useUserInfo();
  const { api } = useApi();

  const createDog = async (params: DogFormType) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = dogFormSchema.parse(params);
      const dogOwnerId = userInfo?.id;

      const request = dogSchema.parse({
        ...data,
        dogOwnerId,
      });

      if (request.dogId) {
        return await api('PUT', '/dog', request);
      } else {
        return await api('POST', '/dog', request);
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createDog, isLoading, error };
};

export { useCreateDog };
