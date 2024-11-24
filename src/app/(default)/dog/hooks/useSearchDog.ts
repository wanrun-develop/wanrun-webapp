import useApi from '@/libs/useApi';
import useUserInfo from '@/libs/useUserInfo';
import { Dog } from '@/types/Dog';
import { useEffect, useState } from 'react';

export type SearchParams = {
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

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      setError(undefined);

      try {
        if (params.dogId) {
          const dog = await api<Dog>('GET', `/dog/detail/${params.dogId}`);
          setDogs([dog]);
        } else {
          if (userInfo) {
            const dogs = await api<Dog[]>('GET', `/dog/owned/${userInfo?.id}`);
            setDogs(dogs);
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
