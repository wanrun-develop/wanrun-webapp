import useApi from '@/libs/useApi';
import { DogFormSchema } from '@/schemas/DogSchema';
import { DogFormType } from '@/types/Dog';
import { useState } from 'react';

const useCreateDog = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { api } = useApi();

  const createDog = async (params: DogFormType) => {
    setIsLoading(true);
    setError(null);

    try {
      const request = DogFormSchema.parse(params);
      const res = await api('POST', '/dog/create', request);
      return res;
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
