import { Dog } from '@/types/Dog';
import { useState } from 'react';

const mockDogs: Dog[] = [
  {
    id: 1,
    name: 'test1',
    sex: 'M',
    weight: 4,
    dogOwnerId: 1,
    dogTypeId: 1,
  },
  {
    id: 2,
    name: 'test2',
    sex: 'F',
    weight: 2,
    dogOwnerId: 1,
    dogTypeId: 1,
  },
  {
    id: 3,
    name: 'test3',
    sex: 'M',
    weight: 3,
    dogOwnerId: 1,
    dogTypeId: 1,
  },
  {
    id: 4,
    name: 'test4',
    sex: 'F',
    weight: 4,
    dogOwnerId: 1,
    dogTypeId: 1,
  },
];

const useSearchDog = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useState(() => {
    setDogs(mockDogs);
  });

  return { dogs };
};

export default useSearchDog;
