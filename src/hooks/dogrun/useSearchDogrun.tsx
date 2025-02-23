'use client';

import useApi from '@/hooks/common/useApi';
import { DogrunListItem } from '@/types/Dogrun';
import { useState } from 'react';
import { mockDogrunListItems } from '../../mock/dogrun';

type GeoCoordinates = {
  longitude: number;
  latitude: number;
};

export type SearchCondition = {
  target: {
    southwest: GeoCoordinates;
    northeast: GeoCoordinates;
  };
  includeDogrunTags: number[];
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

  const replaceDogrun = (newDogrun: DogrunListItem) => {
    const newDogruns = dogruns.map((d) =>
      d.dogrunId === newDogrun.dogrunId ? newDogrun : d,
    );
    setDogruns(newDogruns);
  };

  return { dogruns, search, loading, error, replaceDogrun };
};

export default useSearchDogrun;
