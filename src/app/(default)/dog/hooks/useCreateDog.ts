import useApi from '@/libs/useApi';
import useUserInfo from '@/libs/useUserInfo';
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

      // const dogTypeId = [];
      // if (data.firstDogTypeId) dogTypeId.push(data.firstDogTypeId);
      // if (data.secondDogTypeId) dogTypeId.push(data.secondDogTypeId);
      const dogTypeId = data.firstDogTypeId;

      // const request = dogSchema.parse({
      //   ...data,
      //   dogOwnerId,
      //   dogTypeId,
      // });
      // req/resが食い違っているので一旦検証しない
      const request = {
        ...data,
        dogOwnerId,
        dogTypeId,
      };

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
