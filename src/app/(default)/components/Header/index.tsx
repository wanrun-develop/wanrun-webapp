import DogImage from '@public/dog.jpg';
import Image from 'next/image';
import styles from './Header.module.scss';

type Props = {
  toggleNavBar: () => void;
};

const Header = (props: Props) => {
  const { toggleNavBar } = props;

  return (
    <div className={styles.header}>
      <div className={styles.leftContainer}>
        <button className={styles.menuButton} onClick={toggleNavBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#888888"
              d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0-4.5H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0 9H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"
            ></path>
          </svg>
        </button>
        <strong className={styles.title}>WanRun</strong>
      </div>

      <Image className={styles.avatar} src={DogImage} alt="DogImage" />
    </div>
  );
};

export default Header;
