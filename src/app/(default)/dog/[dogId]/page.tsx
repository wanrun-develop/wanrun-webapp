'use client';
import { useState } from 'react';
import Image from 'next/image';
import NoImage from '@public/noimage.png';
import styles from './page.module.scss';
import DogViewEditToggle from './components/DogViewEditToggle';

const TAB_MODES = {
  PROFILE: 0,
  CERTIFICATION: 1,
};

const tabs = [
  { mode: TAB_MODES.PROFILE, label: '🐾 Dog Profile' },
  { mode: TAB_MODES.CERTIFICATION, label: '💉 Certificate' },
];

const DogDetail = ({ params }: { params: { dogId: string } }) => {
  const { dogId } = params;
  const [tabMode, setTabMode] = useState<number>(TAB_MODES.PROFILE);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.cardTitle}>Dog Details</h2>
        <div className={styles.profileInfo}>
          <Image className={styles.avatar} src={NoImage} alt="NoImage" />
          <Image className={styles.avatar} src={NoImage} alt="NoImage" />
        </div>
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`${styles.tab} ${tabMode === tab.mode ? styles.tabActive : ''}`}
            onClick={() => setTabMode(tab.mode)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabMode === TAB_MODES.PROFILE ? (
        <DogViewEditToggle dogId={Number(dogId)} />
      ) : null}
    </div>
  );
};

export default DogDetail;
