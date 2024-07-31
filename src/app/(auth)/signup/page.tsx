'use client';

import SignupCard from '../components/SignupCard';
import styles from './page.module.scss';

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <SignupCard />
      </div>
    </div>
  );
};

export default Signup;
