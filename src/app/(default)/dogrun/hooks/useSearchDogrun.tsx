'use client';

import useApi from '@/hooks/common/useApi';
import { DogrunListItem } from '@/types/Dogrun';
import { useState } from 'react';
import { mockDogrunListItems } from '../mock/dogrun';

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
  const [dogruns, setDogruns] = useState<DogrunListItem[]>(mockDogrunListItems);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { api } = useApi();

  const search = async (condition: SearchCondition) => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await api<DogrunListItem[]>(
        'POST',
        '/dogrun/search',
        condition,
      );
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
