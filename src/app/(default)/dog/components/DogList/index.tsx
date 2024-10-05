'use client';

import { useRouter } from 'next/navigation';
import useSearchDog from '../../hooks/useSearchDog';
import styles from './DogList.module.scss';

const DogList = () => {
  const router = useRouter();
  const { dogs } = useSearchDog({ params: {} });

  const redirectDetailPage = (dogId: number) => {
    router.push(`/dog/${dogId}`);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>weight</th>
          <th>sex</th>
        </tr>
        {dogs.map((dog, i) => (
          <tr key={i} onClick={() => redirectDetailPage(dog.id)}>
            <td>{dog.id}</td>
            <td>{dog.name}</td>
            <td>{dog.weight}kg</td>
            <td>{dog.sex}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DogList;
