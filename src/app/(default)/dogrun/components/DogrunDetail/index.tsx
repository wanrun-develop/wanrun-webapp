import Image from 'next/image';
import styles from './DogrunDetail.module.scss';
import NoImage from '@public/noimage.png';

type Props = {
  name: string;
  description: string;
};

const DogrunDetail = (props: Props) => {
  const { name, description } = props;

  return (
    <div className={styles.container}>
      <Image className={styles.img} src={NoImage} alt="no image" />
      <div className={styles.box}>
        <h4 className={styles.name}>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default DogrunDetail;
