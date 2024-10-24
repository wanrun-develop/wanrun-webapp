'use client';

import styles from './layout.module.scss';
import Header from './components/Header';
import NavBar from './components/NavBar';
import useNavBar from './hooks/useNavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { open, toggleNavBar } = useNavBar();

  return (
    <div className={styles.layout}>
      <NavBar open={open} toggleNavBar={toggleNavBar} />
      <div className={styles.main}>
        <Header toggleNavBar={toggleNavBar} />
        <div className={styles.mainContent}>{children}</div>
      </div>
    </div>
  );
}
