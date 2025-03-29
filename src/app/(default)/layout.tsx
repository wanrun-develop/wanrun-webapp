'use client';

import Header from '@components/common/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-[100svh] max-w-full font-['Roboto,_sans-serif']">
      <div className="w-full flex flex-col bg-white">
        <Header />
        <div className="flex-grow flex-col overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
