import { Metadata } from 'next';
import Providers from '@/app/providers';
import './globals.css';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
