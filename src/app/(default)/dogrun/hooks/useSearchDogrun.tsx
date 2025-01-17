'use client';

import useApi from '@/app/hooks/common/useApi';
import { Dogrun } from '@/types/Dogrun';
import { useState } from 'react';
import mockDogruns from '../mock/dogrun';

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
  const [dogruns, setDogruns] = useState<Dogrun[]>(mockDogruns);
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
