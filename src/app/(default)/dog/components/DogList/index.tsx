'use client';

import useSearchDog from '../../hooks/useSearchDog';
import styles from './DogList.module.scss';

type Props = {
  selectDog: (dogId: number) => void;
  showDetail: () => void;
};

const DogList = (props: Props) => {
  const { selectDog, showDetail } = props;
  const { dogs } = useSearchDog({ params: {} });

  const handleClickDog = (dogId: number) => {
    selectDog(dogId);
    showDetail();
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
          <tr key={i} onClick={() => handleClickDog(dog.id)}>
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
