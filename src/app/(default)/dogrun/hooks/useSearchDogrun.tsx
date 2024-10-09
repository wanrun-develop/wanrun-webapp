'use client';

import useApi from '@/libs/useApi';
import { Dogrun } from '@/types/Dogrun';
import { useEffect, useState } from 'react';
import mockDogruns from '../mock/dogrun';

type GeoCoordinates = {
  longitude: number;
  latitude: number;
};

type SearchCondition = {
  target: {
    southwest: GeoCoordinates;
    northeast: GeoCoordinates;
  };
};

type Props = {
  condition: SearchCondition;
};

const mock = true;

const useSearchDogrun = (props: Props) => {
  const { condition } = props;
  const [dogruns, setDogruns] = useState<Dogrun[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { api } = useApi();

  useEffect(() => {
    if (mock) {
      setDogruns(mockDogruns);
      return;
    }

    const search = async (condition: SearchCondition) => {
      setLoading(true);
      setError(undefined);

      try {
        const response = await api<Dogrun[]>(
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
    search(condition);
  }, [condition, api]);

  return { dogruns, loading, error };
};

export default useSearchDogrun;
