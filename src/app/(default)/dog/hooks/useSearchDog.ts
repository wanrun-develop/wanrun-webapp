import useApi from '@/libs/useApi';
import useUserInfo from '@/libs/useUserInfo';
import { Dog, DogSearchApiType } from '@/types/Dog';
import { useEffect, useState } from 'react';

type SearchParams = {
  dogId?: number;
  name?: string;
};

type Props = {
  params: SearchParams;
};

const useSearchDog = (props: Props) => {
  const { params } = props;
  const { api } = useApi();
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { userInfo } = useUserInfo();

  const fixDog = (dogs: DogSearchApiType[]): Dog[] =>
    dogs.map((dog) => ({ ...dog, id: dog.dogId! }));

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      setError(undefined);

      try {
        if (params.dogId) {
          const dog = await api<DogSearchApiType>(
            'GET',
            `/dog/detail/${params.dogId}`,
          );
          setDogs(fixDog([dog]));
        } else {
          if (userInfo) {
            const dogs = await api<DogSearchApiType[]>(
              'GET',
              `/dog/owned/${userInfo?.id}`,
            );
            setDogs(fixDog(dogs));
          }
        }
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };
    search();
  }, [params.dogId, userInfo, api]);

  return { dogs, loading, error };
};

export default useSearchDog;
