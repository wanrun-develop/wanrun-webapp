'use client';

import styles from './layout.module.scss';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { useCallback, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<boolean>(true);

  const toggleNavBar = useCallback(() => setOpen(!open), [open]);

  return (
    <div className={styles.layout}>
      <NavBar open={open} />
      <div className={styles.main}>
        <Header toggleNavBar={toggleNavBar} />
        <div className={styles.mainContent}>{children}</div>
      </div>
    </div>
  );
}
