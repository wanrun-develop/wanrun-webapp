import Link from 'next/link';
import SignupCard from '../components/SignupCard';
import styles from './page.module.scss';

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h2>Signup</h2>
          <SignupCard />
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
