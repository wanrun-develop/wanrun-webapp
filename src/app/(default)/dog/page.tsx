'use client';

import React from 'react';
import styles from './page.module.scss';
import DogList from './components/DogList';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

const DogListPage = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/dog/new');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.cardTitle}>愛犬一覧</h2>
        <Button label="登録" onClick={onClick} />
      </div>
      <DogList />
    </div>
  );
};

export default DogListPage;
