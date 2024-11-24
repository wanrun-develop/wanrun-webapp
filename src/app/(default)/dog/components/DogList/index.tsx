'use client';

import { useRouter } from 'next/navigation';
import useSearchDog from '../../hooks/useSearchDog';
import styles from './DogList.module.scss';
import useSearchListDog from '../../hooks/useSearchListDog';

const DogList = () => {
  const router = useRouter();
  const { dogs } = useSearchListDog({ params: {} });

  const redirectDetailPage = (dogId: number) => {
    router.push(`/dog/${dogId}`);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>犬種</th>
            <th>体重</th>
            <th>性別</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog, i) => (
            <tr key={i} onClick={() => redirectDetailPage(dog.id)}>
              <td>{dog.id}</td>
              <td>{dog.name}</td>
              <td>{dog.dogType}</td>
              <td>{dog.weight}kg</td>
              <td>{dog.sex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DogList;
