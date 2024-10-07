import NoImage from '@public/noimage.png';
import DogImage from '@public/dog.jpg';
import Image from 'next/image';
import styles from './DogrunItem.module.scss';

type Props = {};

const DogrunItem = (props: Props) => {
  const mockImage = new Date().getMilliseconds() % 2 === 1 ? NoImage : DogImage;

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
        <p>Name</p>
        <p className={styles.description}>
          description,description,description
        </p>
      </div>
    </div>
  );
};

export default DogrunItem;
