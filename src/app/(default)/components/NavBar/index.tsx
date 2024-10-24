import Link from 'next/link';
import styles from './NavBar.module.scss';

type Props = {
  open: boolean;
};

const NavBar = (props: Props) => {
  const { open } = props;

  return (
    <nav className={styles.sidebar} style={open ? {} : { display: 'none' }}>
      <Link href="/" className={styles.menuItem}>
        🏠 Home
      </Link>
      <Link href="/dog" className={styles.menuItem}>
        🐕 Dog
      </Link>
      <Link href="/dogrun" className={styles.menuItem}>
        🏕️ Dogrun
      </Link>
      <Link href="" className={styles.menuItem}>
        ⚙️ Settings
      </Link>
    </nav>
  );
};

export default NavBar;
