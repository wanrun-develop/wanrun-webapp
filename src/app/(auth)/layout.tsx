import styles from './layout.module.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.layout}>{children}</div>;
}
