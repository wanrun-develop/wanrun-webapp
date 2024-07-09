'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DogImage from '@public/dog.jpg';
import NoImage from '@public/noimage.png';
import styles from './page.module.css';

const TAB_MODES = {
  PROFILE: 0,
  CERTIFICATION: 1,
  OWNER: 2,
};

const tabs = [
  { mode: TAB_MODES.PROFILE, label: '🐾 Dog Profile' },
  { mode: TAB_MODES.CERTIFICATION, label: '🦴 Certificate' },
  { mode: TAB_MODES.OWNER, label: '👤 Owner' },
];

const PetDetails = () => {
  const [tabMode, setTabMode] = useState<number>(TAB_MODES.PROFILE);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
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
      <div className={styles.petInfo}>
        <Image src={DogImage} alt="Dog" width={140} height={140} />
        <Image className={styles.petAvatar} src={NoImage} alt="NoImage" />
        <div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Name</span>
            <span>Buddy</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Breed</span>
            <span>Golden Retriever</span>
          </div>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Age</span>
          <span>3 years</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Color</span>
          <span>Golden</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Weight</span>
          <span>30 lbs</span>
        </div>
        <div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Size</span>
            <span>Medium</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Behavior</span>
            <span>Friendly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
