'use client';

import { useCallback, useEffect, useState } from 'react';
import useApi from '../common/useApi';

export type DogrunTag = {
  tagId: number;
  tagName: string;
  description: string;
};

const useDogrunTag = () => {
  const [dogrunTags, setDogrunTags] = useState<DogrunTag[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const { api } = useApi();

  const getTag = useCallback(async () => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await api<DogrunTag[]>('GET', '/dogrun/mst/tag');
      setDogrunTags(response);
    } catch (e: any) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [api, setDogrunTags]);

  useEffect(() => {
    getTag();
  }, [getTag]);

  return { dogrunTags, loading, error };
};

export default useDogrunTag;
