import Image from 'next/image';
import styles from './DogrunItem.module.scss';
import { Dogrun } from '@/types/Dogrun';

type Props = {
  // dogrun: Dogrun;
  dogrun?: Dogrun; // モックデータ用
};

const DogrunItem = (props: Props) => {
  const { dogrun } = props;
  const mockImage = dogrun?.image
    ? dogrun.image
    : `https://placedog.net/${new Date().getMilliseconds() % 1000}/200`;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={mockImage}
          alt="no image"
          fill
          style={{
            objectFit: 'cover',
            color: 'black',
          }}
        />
      </div>
      <div className={styles.content}>
        <p>{dogrun?.name || 'mocktest'}</p>
        <p className={styles.description}>
          description,description,description
        </p>
      </div>
    </div>
  );
};

export default DogrunItem;
