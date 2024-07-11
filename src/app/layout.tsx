import type { Metadata } from 'next';
import './globals.css';
import styles from './layout.module.scss';

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
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarIcon}>🏠 Home</div>
            <div className={styles.sidebarIcon}>📅 Calendar</div>
            <div className={styles.sidebarIcon}>👥 Users</div>
            <div className={styles.sidebarIcon}>⚙️ Settings</div>
          </div>
          <div className={styles.mainContent}>{children}</div>
        </div>
      </body>
    </html>
  );
}
