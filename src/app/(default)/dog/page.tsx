import React from 'react';
import styles from './page.module.scss';
import DogList from './components/DogList';

const DogListPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.cardTitle}>犬一覧</h2>
      </div>
      <DogList />
    </div>
  );
};

export default DogListPage;
