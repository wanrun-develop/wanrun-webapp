'use client';

import { createContext, ReactNode } from 'react';
import useWindowSize, { WindowSizeConfig } from '../hooks/useWindowSize';

type Props = {
  children: ReactNode;
};

export const WindowSizeContext = createContext<WindowSizeConfig>({
  width: 0,
  height: 0,
  windowSize: 'sm',
});

const WindwoSizeProvider = ({ children }: Props) => {
  const windowSize = useWindowSize();

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export default WindwoSizeProvider;
