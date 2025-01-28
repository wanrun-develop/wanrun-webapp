'use client';

import styles from './layout.module.scss';
import Header from '@components/common/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <Header />
        <div className={styles.mainContent}>{children}</div>
      </div>
    </div>
  );
}
