import type { Metadata } from 'next';
import './globals.css';
import styles from './layout.module.scss';
import Providers from '@/utils/providers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DogRunner',
  description: 'DogRunner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className={styles.layout}>
            <nav className={styles.sidebar}>
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
            <div className={styles.mainContent}>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
