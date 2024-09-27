import Button from '@/components/common/Button';
import Image from 'next/image';
import styles from './DogDetail.module.scss';
import DogImage from '@public/dog.jpg';

type Props = {
  moveToForm: () => void;
};

const DogDetail = (props: Props) => {
  const { moveToForm } = props;

  return (
    <div className={styles.container}>
      <Image src={DogImage} alt="Dog" width={200} height={200} />
      <div>
        <Button label="Edit" onClick={moveToForm} />
      </div>
      <div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Name</span>
          <span>Buddy</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Breed</span>
          <span>Golden Retriever</span>
        </div>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.label}>Age</span>
        <span>3 years</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.label}>Color</span>
        <span>Golden</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.label}>Weight</span>
        <span>30 lbs</span>
      </div>
      <div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Size</span>
          <span>Medium</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Behavior</span>
          <span>Friendly</span>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
