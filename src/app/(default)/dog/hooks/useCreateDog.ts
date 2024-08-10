import { post } from '@/libs/fetch';
import { Dog, DogSchema } from '@/types/Dog';
import { useState } from 'react';

const useCreateDog = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createDog = async (params: Dog) => {
    setIsLoading(true);
    setError(null);

    try {
      const request = DogSchema.parse(params);
      const res = await post('/dog/create', request);
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
