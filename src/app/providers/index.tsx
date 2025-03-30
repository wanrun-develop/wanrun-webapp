'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import { ReactNode } from 'react';
import WindwoSizeProvider from './WindowSizeProvider';
import { SessionProvider } from './SessionProvider';

const GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <WindwoSizeProvider>{children}</WindwoSizeProvider>
      </APIProvider>
    </SessionProvider>
  );
};

export default Providers;
