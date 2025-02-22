'use client';

import { use, useEffect, useState } from 'react';
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

  useEffect(() => {
    getTag();
  }, []);

  const getTag = async () => {
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
  };

  return { dogrunTags, loading, error };
};

export default useDogrunTag;
