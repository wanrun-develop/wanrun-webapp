import Link from 'next/link';
import styles from './NavBar.module.scss';
import { useContext, useMemo } from 'react';
import { WindowSizeContext } from '@/utils/providers/WindowSizeProvider';

type Props = {
  open: boolean;
  toggleNavBar: () => void;
};

const NavBar = (props: Props) => {
  const { open, toggleNavBar } = props;
  const windowSizeConfig = useContext(WindowSizeContext);

  const splitNavBar = useMemo(
    () => windowSizeConfig.windowSize === 'sm',
    [windowSizeConfig.windowSize],
  );

  const classNames = useMemo(() => {
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
  }, [open, splitNavBar]);

  return (
    <>
      <div className={`${styles.sidebar} ${classNames}`}>
        <nav className={styles.menu}>
          <Link href="/" className={styles.menuItem}>
            🏠ホーム
          </Link>
          <Link href="/dog" className={styles.menuItem}>
            🐕犬
          </Link>
          <Link href="/dogrun" className={styles.menuItem}>
            🏕️ドッグラン
          </Link>
          <Link href="" className={styles.menuItem}>
            ⚙️設定
          </Link>
        </nav>
      </div>
      {open && splitNavBar && (
        <div className={styles.overlay} onClick={toggleNavBar} />
      )}
    </>
  );
};

export default NavBar;
