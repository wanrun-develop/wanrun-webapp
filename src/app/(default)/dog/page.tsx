import React from 'react';
import Image from 'next/image';
import NoImage from '@public/noimage.png';
import styles from './page.module.scss';
import DogList from './components/DogList';

const DogListPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.cardTitle}>Dogs</h2>
        <div className={styles.profileInfo}>
          <Image className={styles.avatar} src={NoImage} alt="NoImage" />
          <Image className={styles.avatar} src={NoImage} alt="NoImage" />
        </div>
      </div>
      <DogList />
    </div>
  );
};

export default DogListPage;
