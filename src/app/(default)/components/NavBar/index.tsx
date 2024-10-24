import Link from 'next/link';
import styles from './NavBar.module.scss';
import { useContext } from 'react';
import { WindowSizeContext } from '@/utils/providers/WindowSizeProvider';

type Props = {
  open: boolean;
  toggleNavBar: () => void;
};

const NavBar = (props: Props) => {
  const { open, toggleNavBar } = props;
  const windowSizeConfig = useContext(WindowSizeContext);

  const splitNavBar = windowSizeConfig.windowSize === 'sm';

  const classNames = (() => {
    const list = [];
    if (splitNavBar) {
      list.push(styles.split);
      if (open) {
        list.push(styles.splitOpen);
      }
    } else {
      if (!open) {
        list.push(styles.close);
      }
    }
    return list.join(' ');
  })();

  return (
    <>
      <nav className={`${styles.sidebar} ${classNames}`}>
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
      {open && splitNavBar && (
        <div className={styles.overlay} onClick={toggleNavBar} />
      )}
    </>
  );
};

export default NavBar;
