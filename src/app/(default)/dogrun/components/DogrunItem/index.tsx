import Image from 'next/image';
import styles from './DogrunItem.module.scss';
import { Dogrun } from '@/types/Dogrun';
import usePhoto from '../../hooks/usePhoto';
import NoImage from '@public/noimage.png';

type Props = {
  dogrun: Dogrun;
};

const DogrunItem = (props: Props) => {
  const { dogrun } = props;

  const photo = dogrun.photos?.[0];
  const imageUrl = usePhoto(photo);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={imageUrl || NoImage}
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
