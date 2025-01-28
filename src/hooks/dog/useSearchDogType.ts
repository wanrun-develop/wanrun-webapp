import useApi from '@/hooks/common/useApi';
import { useMemo } from 'react';
import useSWR from 'swr';

type DogType = {
  dogTypeId: number;
  name: string;
};

const useSearchDogType = () => {
  const { api } = useApi();

  const fetcher = (url: string) => api<DogType[]>('GET', url);
  const { data, isLoading, error } = useSWR<DogType[]>(
    '/dog/mst/dogType',
    fetcher,
  );

  const dogTypeOptions = useMemo(() => {
    if (!data) return [];
    return data.map((type) => ({ label: type.name, value: type.dogTypeId }));
  }, [data]);

  return {
    dogTypes: data ?? [],
    dogTypeOptions,
    isLoading,
    error,
  };
};

export default useSearchDogType;
