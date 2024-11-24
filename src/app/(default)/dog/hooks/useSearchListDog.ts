import { useMemo } from 'react';
import useSearchDog, { SearchParams } from './useSearchDog';
import useSearchDogType from './useSearchDogType';

type ListDog = {
  dogId: number;
  name: string;
  dogType: string;
  weight: number;
  sex: string;
};

type Props = {
  params: SearchParams;
};

const useSearchListDog = (props: Props) => {
  const { dogs } = useSearchDog(props);
  const { dogTypes } = useSearchDogType();

  const dogTypeMap = useMemo(
    () =>
      Object.fromEntries(
        dogTypes.map((dogType) => [dogType.dogTypeId, dogType.name]),
      ),
    [dogTypes],
  );

  const listDogs: ListDog[] = useMemo(
    () =>
      dogs.map((dog) => ({
        dogId: dog.dogId,
        name: dog.name,
        dogType: dogTypeMap[dog.dogTypeId[0]],
        weight: dog.weight,
        sex: dog.sex,
      })),
    [dogs, dogTypeMap],
  );

  console.log('dogs', listDogs);

  return { dogs: listDogs };
};

export default useSearchListDog;
