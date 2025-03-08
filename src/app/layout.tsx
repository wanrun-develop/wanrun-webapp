import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Providers from '@/app/providers';
import { googleAnalyticsId } from '@/constants';
import './globals.css';

export const metadata: Metadata = {
  title: 'wanrun',
  description: 'wanrun webapp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId={googleAnalyticsId} />
    </html>
  );
}
