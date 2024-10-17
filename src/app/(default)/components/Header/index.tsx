import DogImage from '@public/dog.jpg';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <strong>WanRun</strong>
      <Image className={styles.avatar} src={DogImage} alt="DogImage" />
    </div>
  );
};

export default Header;
