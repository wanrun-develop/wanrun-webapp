import styles from './page.module.scss';
import CustomMap from './components/CustomMap';
import DogrunList from './components/DogrunList';

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
        <div className={styles.dogrun_list}>
          <DogrunList />
        </div>
      </div>
    </div>
  );
};

export default Dogrun;
