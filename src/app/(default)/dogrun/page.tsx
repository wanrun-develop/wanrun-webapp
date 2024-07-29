import styles from './page.module.scss';
import CustomMap from './components/CustomMap';
import DogrunDetail from './components/DogrunDetail';

const Dogrun = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Dogrun</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.dogrun_map}>
          <CustomMap />
        </div>
        <div className={styles.dogrun_detail}>
          <DogrunDetail name="東京駅" description="人気のドッグラン" />
        </div>
      </div>
    </div>
  );
};

export default Dogrun;
