import styles from './page.module.scss';
import CustomMap from './components/CustomMap';

const Dogrun = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Dogrun</h2>
      </div>
      <div className={styles.content}>
        <CustomMap />
      </div>
    </div>
  );
};

export default Dogrun;
