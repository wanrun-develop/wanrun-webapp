'use client';

import styles from './page.module.scss';
import CustomMap from './components/CustomMap';
import DogrunList from './components/DogrunList';
import useSearchDogrun from './hooks/useSearchDogrun';
import { useCallback, useState } from 'react';
import Button from '@/components/common/Button';

const Dogrun = () => {
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | undefined>(
    undefined,
  );
  const { dogruns, search, loading } = useSearchDogrun();

  const handlePositionChange = (bounds: google.maps.LatLngBounds) =>
    setBounds(bounds);

  const searchDogruns = useCallback(() => {
    if (!bounds) return;

    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    search({
      target: {
        northeast: { latitude: ne.lat(), longitude: ne.lng() },
        southwest: { latitude: sw.lat(), longitude: sw.lng() },
      },
    });
  }, [bounds, search]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Dogrun</h2>
        <Button label="Search" onClick={searchDogruns} disabled={loading} />
      </div>
      <div className={styles.content}>
        <div className={styles.dogrun_map}>
          <CustomMap
            dogruns={dogruns}
            onPositionChange={handlePositionChange}
          />
        </div>
        <div className={styles.dogrun_list}>
          <DogrunList dogruns={dogruns} />
        </div>
      </div>
    </div>
  );
};

export default Dogrun;
