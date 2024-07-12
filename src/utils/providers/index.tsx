'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import { ReactNode } from 'react';

const GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>{children}</APIProvider>;
};

export default Providers;
