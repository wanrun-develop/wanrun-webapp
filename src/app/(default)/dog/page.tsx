'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import NoImage from '@public/noimage.png';
import styles from './page.module.scss';
import DogList from './components/DogList';
import DogViewEditToggle from './components/DogViewEditToggle';

const TAB_MODES = {
  PROFILE: 0,
  CERTIFICATION: 1,
  OWNER: 2,
  LIST: 3,
};

const tabs = [
  { mode: TAB_MODES.PROFILE, label: '🐾 Dog Profile' },
  { mode: TAB_MODES.CERTIFICATION, label: '💉 Certificate' },
  { mode: TAB_MODES.OWNER, label: '🧑 Owner' },
  { mode: TAB_MODES.LIST, label: 'Dog List' },
];

const PetDetails = () => {
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
        <DogViewEditToggle />
      ) : tabMode === TAB_MODES.LIST ? (
        <DogList />
      ) : null}
    </div>
  );
};

export default PetDetails;
