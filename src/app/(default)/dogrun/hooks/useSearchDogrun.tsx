'use client';

import useApi from '@/libs/useApi';
import { Dogrun } from '@/types/Dogrun';
import { useState } from 'react';

type GeoCoordinates = {
  longitude: number;
  latitude: number;
};

export type SearchCondition = {
  target: {
    southwest: GeoCoordinates;
    northeast: GeoCoordinates;
  };
};

const useSearchDogrun = () => {
  const [dogruns, setDogruns] = useState<Dogrun[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { api } = useApi();

  const search = async (condition: SearchCondition) => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await api<Dogrun[]>('POST', '/dogrun/search', condition);
      setDogruns(response);
    } catch (e: any) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { dogruns, search, loading, error };
};

export default useSearchDogrun;
