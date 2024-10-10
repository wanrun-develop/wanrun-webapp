'use client';

import styles from './page.module.scss';
import CustomMap from './components/CustomMap';
import DogrunList from './components/DogrunList';
import useSearchDogrun from './hooks/useSearchDogrun';

const Dogrun = () => {
  const { dogruns, loading } = useSearchDogrun({
    condition: {
      target: {
        southwest: { latitude: 0, longitude: 0 },
        northeast: { latitude: 0, longitude: 0 },
      },
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Dogrun</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.dogrun_map}>
          <CustomMap dogruns={dogruns} />
        </div>
        <div className={styles.dogrun_list}>
          <DogrunList dogruns={dogruns} />
        </div>
      </div>
    </div>
  );
};

export default Dogrun;
