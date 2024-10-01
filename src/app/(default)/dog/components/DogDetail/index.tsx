import Button from '@/components/common/Button';
import Image from 'next/image';
import styles from './DogDetail.module.scss';
import DogImage from '@public/dog.jpg';
import { Dog } from '@/types/Dog';

type Props = {
  dog: Dog;
  moveToForm: () => void;
};

const DogDetail = (props: Props) => {
  const { dog, moveToForm } = props;

  return (
    <div className={styles.container}>
      <Image src={DogImage} alt="Dog" width={200} height={200} />
      <div>
        <Button label="Edit" onClick={moveToForm} />
      </div>
      <div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Name</span>
          <span>{dog.name}</span>
        </div>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.label}>Sex</span>
        <span>{dog.sex}</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.label}>Weight</span>
        <span>{dog.weight} kg</span>
      </div>
    </div>
  );
};

export default DogDetail;
