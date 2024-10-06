import useApi from '@/libs/useApi';
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
            `/dog/${params.dogId}`,
          );
          setDogs(fixDog([dog]));
        } else {
          const dogs = await api<DogSearchApiType[]>('GET', '/dog/all');
          setDogs(fixDog(dogs));
        }
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      }
      setLoading(false);
    };
    search();
  }, [params.dogId, api]);

  return { dogs, loading, error };
};

export default useSearchDog;
