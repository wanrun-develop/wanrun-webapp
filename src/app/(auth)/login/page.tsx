import Link from 'next/link';
import LoginCard from '../components/LoginCard';
import styles from './page.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h2>Login</h2>
          <LoginCard />
          <Link href="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
